import {
  AmbientLight,
  CanvasTexture,
  Color,
  ConeGeometry,
  AdditiveBlending,
  DoubleSide,
  Group,
  InstancedMesh,
  LoadingManager,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Object3D,
  PerspectiveCamera,
  PlaneGeometry,
  Raycaster,
  Scene,
  SpotLight,
  Sprite,
  SpriteMaterial,
  SRGBColorSpace,
  Texture,
  TextureLoader,
  Vector2,
  Vector3,
  WebGLRenderer,
} from "three";

/**
 * The sale page's lineup (owner, 2026-11-11: "more unique and more
 * professional ... removed backgrounds"). Every pack on offer stands, cut
 * out, in one long row on a glossy Ink floor under a spotlight. The row
 * slides with a drag, a horizontal wheel, a swipe or the arrow keys and
 * snaps to the nearest pack; the pack at the centre rises, turns a little
 * towards the pointer and is lit; a burst of confetti in the logo's colours
 * marks each arrival. It plays on by itself until the first touch. Textures
 * load through a LoadingManager so the page's loader can show real progress.
 * Only reached by dynamic import; renders only while on screen.
 */

export type LineupCard = { name: string; src: string | null };

export type LineupHooks = {
  onProgress: (loaded: number, total: number) => void;
  onReady: () => void;
  onFront: (index: number) => void;
  onPick: (index: number) => void;
  onInteract: () => void;
};

export type LineupController = {
  goTo: (index: number) => void;
  step: (by: number) => void;
  setPointer: (x: number, y: number) => void;
  /** Autoplay on or off. */
  setAuto: (on: boolean) => void;
  dispose: () => void;
};

const SPACING = 1.5;
const CONFETTI = 160;
const INK = "#0c2a36";
const YELLOW = "#fdf70b";
const RED = "#d7000f";
const PALETTE = [YELLOW, RED, "#ffffff", "#0078a8", "#0f7d1a", YELLOW];

let seed = 9;
const rnd = () => {
  seed = (seed * 16807) % 2147483647;
  return seed / 2147483647;
};

/** A card drawn in type, for a product without a picture. */
function typeCard(name: string) {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.fillStyle = YELLOW;
    ctx.beginPath();
    ctx.roundRect(40, 40, size - 80, size - 80, 36);
    ctx.fill();
    ctx.strokeStyle = INK;
    ctx.lineWidth = 12;
    ctx.stroke();
    ctx.fillStyle = RED;
    ctx.font = "800 34px Montserrat, Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("MAPEI", size / 2, 120);
    ctx.fillStyle = INK;
    ctx.font = "800 52px Montserrat, Arial, sans-serif";
    const words = name.split(" ");
    const lines: string[] = [];
    let line = "";
    for (const word of words) {
      const next = line ? `${line} ${word}` : word;
      if (ctx.measureText(next).width > size - 140 && line) {
        lines.push(line);
        line = word;
      } else line = next;
    }
    lines.push(line);
    const top = size / 2 - ((lines.length - 1) * 62) / 2 + 18;
    lines.forEach((text, i) => ctx.fillText(text, size / 2, top + i * 62));
    ctx.font = "600 24px Manrope, Arial, sans-serif";
    ctx.fillText("ON OFFER", size / 2, size - 100);
  }
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  return texture;
}

/** A soft round shadow. */
function shadowTexture() {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const g = ctx.createRadialGradient(64, 64, 4, 64, 64, 64);
    g.addColorStop(0, "rgba(0,0,0,0.75)");
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
  }
  return new CanvasTexture(canvas);
}

/** A soft glow dot for the background bokeh. */
function glowTexture(color: string) {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0, color);
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
  }
  const t = new CanvasTexture(canvas);
  t.colorSpace = SRGBColorSpace;
  return t;
}

export function mountLineup(
  canvas: HTMLCanvasElement,
  cards: LineupCard[],
  hooks: LineupHooks,
): LineupController {
  const renderer = new WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "low-power",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));

  const scene = new Scene();
  const camera = new PerspectiveCamera(30, 1, 0.1, 80);

  scene.add(new AmbientLight(0xffffff, 0.35));
  const spot = new SpotLight(0xfff6d6, 60, 20, 0.42, 0.7, 1.4);
  spot.position.set(0, 6.5, 2.5);
  spot.target.position.set(0, 0.5, 0);
  scene.add(spot, spot.target);

  // The glossy floor. Semi-transparent so the mirrored packs read as a
  // reflection through it.
  const floor = new Mesh(
    new PlaneGeometry(80, 30),
    new MeshStandardMaterial({
      color: new Color(INK),
      roughness: 0.3,
      metalness: 0.25,
      transparent: true,
      opacity: 0.82,
    }),
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = 0;
  floor.renderOrder = 2;
  scene.add(floor);

  // The light cone, additive, barely there.
  const cone = new Mesh(
    new ConeGeometry(2.6, 6.5, 48, 1, true),
    new MeshBasicMaterial({
      color: 0xfff1b0,
      transparent: true,
      opacity: 0.06,
      blending: AdditiveBlending,
      side: DoubleSide,
      depthWrite: false,
    }),
  );
  cone.position.set(0, 3.25, 0.3);
  scene.add(cone);

  // Bokeh far behind the row.
  const glows: Sprite[] = [];
  const glowTextures = [YELLOW, RED, "#ffffff"].map((c) =>
    glowTexture(c === "#ffffff" ? "rgba(255,255,255,0.9)" : c),
  );
  for (let i = 0; i < 18; i += 1) {
    const sprite = new Sprite(
      new SpriteMaterial({
        map: glowTextures[i % 3],
        transparent: true,
        opacity: 0.12 + rnd() * 0.18,
        depthWrite: false,
        blending: AdditiveBlending,
      }),
    );
    const s = 0.8 + rnd() * 2.4;
    sprite.scale.set(s, s, 1);
    sprite.position.set((rnd() - 0.5) * 22, 0.5 + rnd() * 5, -6 - rnd() * 6);
    sprite.userData.phase = rnd() * Math.PI * 2;
    scene.add(sprite);
    glows.push(sprite);
  }

  const row = new Group();
  scene.add(row);

  const manager = new LoadingManager();
  manager.onProgress = (_url, loaded, total) => hooks.onProgress(loaded, total);
  manager.onLoad = () => hooks.onReady();
  const loader = new TextureLoader(manager);
  const textures: Texture[] = [];
  const plane = new PlaneGeometry(1, 1);
  const shadowMap = shadowTexture();
  const n = cards.length;

  const packs: Mesh[] = [];
  const mirrors: Mesh[] = [];
  const shadows: Mesh[] = [];
  let pending = 0;
  cards.forEach((card, i) => {
    const material = new MeshBasicMaterial({
      transparent: true,
      alphaTest: 0.04,
      depthWrite: false,
      side: DoubleSide,
    });
    const mirrorMaterial = material.clone();
    mirrorMaterial.opacity = 0.32;
    if (card.src) {
      pending += 1;
      loader.load(card.src, (texture) => {
        texture.colorSpace = SRGBColorSpace;
        textures.push(texture);
        material.map = texture;
        mirrorMaterial.map = texture;
        material.needsUpdate = true;
        mirrorMaterial.needsUpdate = true;
      });
    } else {
      const texture = typeCard(card.name);
      textures.push(texture);
      material.map = texture;
      mirrorMaterial.map = texture;
    }
    const pack = new Mesh(plane, material);
    pack.userData.index = i;
    pack.renderOrder = 3;
    row.add(pack);
    packs.push(pack);
    const mirror = new Mesh(plane, mirrorMaterial);
    mirror.renderOrder = 1;
    row.add(mirror);
    mirrors.push(mirror);
    const shadow = new Mesh(
      new PlaneGeometry(1.3, 0.5),
      new MeshBasicMaterial({
        map: shadowMap,
        transparent: true,
        depthWrite: false,
      }),
    );
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = 0.012;
    shadow.renderOrder = 2;
    row.add(shadow);
    shadows.push(shadow);
  });
  if (pending === 0) {
    hooks.onProgress(1, 1);
    hooks.onReady();
  }

  // Confetti: one burst per arrival.
  const confettiGeometry = new PlaneGeometry(0.07, 0.11);
  const confettiMaterial = new MeshBasicMaterial({ side: DoubleSide });
  const confetti = new InstancedMesh(confettiGeometry, confettiMaterial, CONFETTI);
  const flakes = Array.from({ length: CONFETTI }, () => ({
    p: new Vector3(),
    v: new Vector3(),
    spin: 0,
    life: 0,
  }));
  for (let i = 0; i < CONFETTI; i += 1) {
    confetti.setColorAt(i, new Color(PALETTE[i % PALETTE.length]));
  }
  if (confetti.instanceColor) confetti.instanceColor.needsUpdate = true;
  confetti.visible = false;
  scene.add(confetti);
  const dummy = new Object3D();
  const burst = (x: number) => {
    for (const f of flakes) {
      f.p.set(x + (rnd() - 0.5) * 0.4, 1.2 + rnd() * 0.4, 0.2);
      const a = rnd() * Math.PI * 2;
      const s = 1.6 + rnd() * 2.6;
      f.v.set(Math.cos(a) * s, 2.2 + rnd() * 3.2, Math.sin(a) * s * 0.6);
      f.spin = (rnd() - 0.5) * 12;
      f.life = 1.4;
    }
    confetti.visible = true;
  };

  // ---- motion state ----
  let offset = 0; // the index at the centre, as a float
  let velocity = 0;
  let target: number | null = 0; // snap target
  let front = -1;
  let auto = true;
  let idle = 0;
  const pointer = { x: 0, y: 0 };
  const shown = { x: 0, y: 0 };
  let visible = true;
  let dragging: { x: number; t: number; moved: number } | null = null;

  const clampIndex = (i: number) => Math.max(0, Math.min(n - 1, i));

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = canvas;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  resize();

  const cameraPos = new Vector3();
  const layout = (time: number, dt: number) => {
    const phone = camera.aspect < 0.9;
    const distance = phone ? 10.5 : 8.6;
    cameraPos.set(shown.x * 0.6, 1.5 + shown.y * 0.3, distance);
    camera.position.copy(cameraPos);
    camera.lookAt(0, 0.75, 0);

    const centre = clampIndex(Math.round(offset));
    packs.forEach((pack, i) => {
      const x = (i - offset) * SPACING;
      const d = Math.abs(i - offset); // distance from centre in packs
      const isCentre = i === centre;
      const lift = Math.max(0, 1 - d) * 0.32;
      const scale = (phone ? 1.0 : 1.15) * (1 + Math.max(0, 1 - d) * 0.35);
      const depth = -Math.min(1.6, d * 0.22); // further packs stand back
      pack.position.set(x, scale / 2 + 0.02 + lift, depth);
      pack.scale.set(scale, scale, 1);
      pack.rotation.y = isCentre
        ? shown.x * 0.22
        : Math.sign(i - offset) * -0.12;
      const bright = 0.42 + Math.max(0, 1 - d * 0.55) * 0.58;
      (pack.material as MeshBasicMaterial).color.setScalar(bright);
      const mirror = mirrors[i];
      mirror.position.set(x, -(scale / 2) - 0.02 - lift, depth);
      mirror.scale.set(scale, -scale, 1);
      mirror.rotation.y = pack.rotation.y;
      (mirror.material as MeshBasicMaterial).color.setScalar(bright * 0.8);
      const shadow = shadows[i];
      shadow.position.x = x;
      shadow.position.z = depth + 0.1;
      const ss = scale * (1.1 - lift);
      shadow.scale.set(ss, ss, 1);
      (shadow.material as MeshBasicMaterial).opacity = 0.9 - lift * 1.2;
    });
    spot.target.position.x = 0;

    if (centre !== front && Math.abs(offset - centre) < 0.35) {
      front = centre;
      hooks.onFront(centre);
      burst(0);
    }

    glows.forEach((g, i) => {
      g.position.y += Math.sin(time * 0.5 + g.userData.phase) * dt * 0.08;
      g.material.rotation = time * 0.05 * (i % 2 ? 1 : -1);
    });

    if (confetti.visible) {
      let alive = 0;
      for (let i = 0; i < CONFETTI; i += 1) {
        const f = flakes[i];
        if (f.life > 0) {
          alive += 1;
          f.life -= dt;
          f.v.y -= 7 * dt;
          f.v.multiplyScalar(1 - dt * 1.4);
          f.p.addScaledVector(f.v, dt);
          dummy.position.copy(f.p);
          dummy.rotation.set(time * f.spin, time * f.spin * 0.7, f.spin);
          dummy.scale.setScalar(Math.min(1, f.life * 2));
          dummy.updateMatrix();
          confetti.setMatrixAt(i, dummy.matrix);
        } else {
          dummy.scale.setScalar(0);
          dummy.updateMatrix();
          confetti.setMatrixAt(i, dummy.matrix);
        }
      }
      confetti.instanceMatrix.needsUpdate = true;
      if (!alive) confetti.visible = false;
    }
  };

  let frame = 0;
  let last = performance.now();
  let time = 0;
  const tick = (now: number) => {
    frame = 0;
    if (!visible) return;
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    time += dt;

    shown.x += (pointer.x - shown.x) * Math.min(1, dt * 4);
    shown.y += (pointer.y - shown.y) * Math.min(1, dt * 4);

    if (!dragging) {
      if (target === null) {
        // Free-wheeling after a flick: slow down, then snap.
        offset += velocity * dt;
        velocity *= 1 - Math.min(1, dt * 3);
        if (Math.abs(velocity) < 0.4) {
          target = clampIndex(Math.round(offset));
          velocity = 0;
        }
        if (offset < -0.3 || offset > n - 0.7) {
          target = clampIndex(Math.round(offset));
          velocity = 0;
        }
      } else {
        offset += (target - offset) * Math.min(1, dt * 5);
      }
      idle += dt;
      if (auto && idle > 4 && target !== null) {
        idle = 0;
        target = (clampIndex(Math.round(offset)) + 1) % n;
        if (target === 0) offset = -1; // wrap round from the end
      }
    }

    layout(time, dt);
    renderer.render(scene, camera);
    frame = requestAnimationFrame(tick);
  };
  const wake = () => {
    if (!frame && visible) {
      last = performance.now();
      frame = requestAnimationFrame(tick);
    }
  };
  const screen = new IntersectionObserver((entries) => {
    visible = entries.some((entry) => entry.isIntersecting);
    wake();
  });
  screen.observe(canvas);

  const interact = () => {
    idle = 0;
    if (auto) {
      auto = false;
      hooks.onInteract();
    }
  };

  // Drag slides; a still tap picks a pack.
  const raycaster = new Raycaster();
  const ndc = new Vector2();
  const down = (event: PointerEvent) => {
    dragging = { x: event.clientX, t: performance.now(), moved: 0 };
    velocity = 0;
    target = null;
    interact();
  };
  const move = (event: PointerEvent) => {
    if (!dragging) return;
    const dx = event.clientX - dragging.x;
    dragging.moved += Math.abs(dx);
    const perPx = SPACING / (canvas.clientWidth / 5.2); // 5.2 packs across
    offset -= dx * perPx * (1 / SPACING);
    offset = Math.max(-0.4, Math.min(n - 0.6, offset));
    const dt = Math.max(1, performance.now() - dragging.t) / 1000;
    velocity = (-dx * perPx * (1 / SPACING)) / dt;
    dragging.x = event.clientX;
    dragging.t = performance.now();
  };
  const up = (event: PointerEvent) => {
    if (!dragging) return;
    const moved = dragging.moved;
    dragging = null;
    if (moved > 6) {
      if (Math.abs(velocity) < 0.4) target = clampIndex(Math.round(offset));
      return;
    }
    velocity = 0;
    const box = canvas.getBoundingClientRect();
    ndc.set(
      ((event.clientX - box.left) / box.width) * 2 - 1,
      -((event.clientY - box.top) / box.height) * 2 + 1,
    );
    raycaster.setFromCamera(ndc, camera);
    const hit = raycaster.intersectObjects(packs, false)[0];
    if (hit) {
      const index = hit.object.userData.index as number;
      if (index === clampIndex(Math.round(offset))) hooks.onPick(index);
      else target = index;
    } else target = clampIndex(Math.round(offset));
  };
  const wheel = (event: WheelEvent) => {
    // Horizontal wheel or trackpad swipe slides the row; vertical scrolls the page.
    if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
    event.preventDefault();
    interact();
    offset = Math.max(-0.4, Math.min(n - 0.6, offset + event.deltaX * 0.004));
    target = null;
    velocity = event.deltaX * 0.12;
  };
  canvas.addEventListener("pointerdown", down);
  window.addEventListener("pointermove", move, { passive: true });
  window.addEventListener("pointerup", up);
  canvas.addEventListener("wheel", wheel, { passive: false });
  wake();

  return {
    goTo(index) {
      interact();
      target = clampIndex(index);
      velocity = 0;
      wake();
    },
    step(by) {
      interact();
      target = clampIndex((target ?? Math.round(offset)) + by);
      velocity = 0;
      wake();
    },
    setPointer(x, y) {
      pointer.x = x;
      pointer.y = y;
    },
    setAuto(on) {
      auto = on;
      idle = 0;
    },
    dispose() {
      visible = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      screen.disconnect();
      canvas.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      canvas.removeEventListener("wheel", wheel);
      plane.dispose();
      confettiGeometry.dispose();
      confettiMaterial.dispose();
      cone.geometry.dispose();
      (cone.material as MeshBasicMaterial).dispose();
      floor.geometry.dispose();
      (floor.material as MeshStandardMaterial).dispose();
      for (const mesh of [...packs, ...mirrors, ...shadows]) {
        (mesh.material as MeshBasicMaterial).dispose();
        if (shadows.includes(mesh)) mesh.geometry.dispose();
      }
      for (const g of glows) g.material.dispose();
      for (const t of [...textures, ...glowTextures, shadowMap]) t.dispose();
      renderer.dispose();
    },
  };
}
