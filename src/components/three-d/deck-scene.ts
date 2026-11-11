import {
  ACESFilmicToneMapping,
  AmbientLight,
  BoxGeometry,
  CanvasTexture,
  DirectionalLight,
  ExtrudeGeometry,
  Group,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  RepeatWrapping,
  Scene,
  Shape,
  SRGBColorSpace,
  WebGLRenderer,
} from "three";

/**
 * The Three.js half of the deck and beam calculator. Only reached by dynamic
 * import. A fluted steel deck with its concrete topping sits on a W beam, as
 * in UL Design D780. The sprayed coat under the deck and around the beam grows
 * to the thickness the design's table gives for the rating; in true proportion
 * to the beam. Drag to turn it. Renders only while on screen.
 */

export type DeckController = {
  set: (deckMm: number, beamMm: number) => void;
  dispose: () => void;
};

const UNIT = 1 / 90; // scene units per mm
// W8x28 (Item 4D): depth 8.06 in, flange 6.54 in, web 0.285 in, flange 0.465 in.
const BEAM = { d: 205, b: 166, tw: 7.2, tf: 11.8 };
const DECK = { depth: 76, pitch: 150, sheet: 1.2 }; // 3 in fluted units
const SLAB = 65; // mm of concrete over the flutes
const SPAN = 1000; // mm along the beam
const WIDTH = 900; // mm across

function speckle(base: string, a: string, b: string) {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, size, size);
    let seed = 5;
    const next = () => {
      seed = (seed * 16807) % 2147483647;
      return seed / 2147483647;
    };
    for (let i = 0; i < 5000; i += 1) {
      ctx.fillStyle = next() > 0.5 ? a : b;
      ctx.beginPath();
      ctx.arc(next() * size, next() * size, 0.6 + next() * 1.8, 0, 7);
      ctx.fill();
    }
  }
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.repeat.set(2, 2);
  return texture;
}

/** I shape in the x-y plane, grown outward by `grow` mm. */
function iShape(grow: number) {
  const w = (BEAM.b / 2 + grow) * UNIT;
  const h = (BEAM.d / 2 + grow) * UNIT;
  const f = (BEAM.tf + 2 * grow) * UNIT;
  const web = (BEAM.tw / 2 + grow) * UNIT;
  const s = new Shape();
  s.moveTo(-w, -h);
  s.lineTo(w, -h);
  s.lineTo(w, -h + f);
  s.lineTo(web, -h + f);
  s.lineTo(web, h - f);
  s.lineTo(w, h - f);
  s.lineTo(w, h);
  s.lineTo(-w, h);
  s.lineTo(-w, h - f);
  s.lineTo(-web, h - f);
  s.lineTo(-web, -h + f);
  s.lineTo(-w, -h + f);
  s.closePath();
  return s;
}

/** Fluted deck profile across x (trapezoid flutes), offset downward by `grow`. */
function deckShape(grow: number) {
  const s = new Shape();
  const half = (WIDTH / 2) * UNIT;
  const top = 0;
  const bottom = -(DECK.depth + grow) * UNIT;
  const pitch = DECK.pitch * UNIT;
  const flat = pitch * 0.3;
  s.moveTo(-half, top);
  s.lineTo(half, top);
  s.lineTo(half, bottom);
  // walk back along the bottom drawing flutes
  let x = half;
  while (x > -half + 0.001) {
    const x1 = Math.max(-half, x - flat);
    s.lineTo(x1, bottom);
    const x2 = Math.max(-half, x1 - (pitch - 2 * flat) / 2);
    s.lineTo(x2, top - grow * UNIT);
    const x3 = Math.max(-half, x2 - flat);
    s.lineTo(x3, top - grow * UNIT);
    const x4 = Math.max(-half, x3 - (pitch - 2 * flat) / 2);
    s.lineTo(x4, bottom);
    x = x4;
  }
  s.closePath();
  return s;
}

export function mountDeck(canvas: HTMLCanvasElement): DeckController {
  const renderer = new WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "low-power",
  });
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));

  const scene = new Scene();
  const camera = new PerspectiveCamera(30, 1, 0.1, 80);
  scene.add(new AmbientLight(0xffffff, 0.6));
  const key = new DirectionalLight(0xfff4e6, 1.6);
  key.position.set(-4, -2, 7);
  scene.add(key);
  const fill = new DirectionalLight(0xbfd9ff, 0.8);
  fill.position.set(5, 6, 3);
  scene.add(fill);

  const pivot = new Group();
  scene.add(pivot);

  const steel = new MeshStandardMaterial({
    color: 0x8a949a,
    metalness: 0.35,
    roughness: 0.5,
  });
  const concreteTex = speckle(
    "rgb(190,186,176)",
    "rgb(160,156,146)",
    "rgb(214,211,202)",
  );
  const concrete = new MeshStandardMaterial({ map: concreteTex, roughness: 1 });
  const coatTex = speckle(
    "rgb(226,222,210)",
    "rgb(196,192,181)",
    "rgb(240,237,228)",
  );
  const coat = new MeshStandardMaterial({ map: coatTex, roughness: 1 });

  const span = SPAN * UNIT;
  // Deck top at y = 0. Beam top flange touches the deck's bottom flute.
  const beamTop = -DECK.depth * UNIT;

  const deckMesh = new Mesh(
    new ExtrudeGeometry(deckShape(0), { depth: span, bevelEnabled: false }),
    steel,
  );
  deckMesh.position.z = -span / 2;
  pivot.add(deckMesh);

  const slab = new Mesh(
    new BoxGeometry(WIDTH * UNIT, SLAB * UNIT, span),
    concrete,
  );
  slab.position.y = (SLAB / 2) * UNIT;
  pivot.add(slab);

  const beamMesh = new Mesh(
    new ExtrudeGeometry(iShape(0), { depth: span, bevelEnabled: false }),
    steel,
  );
  beamMesh.position.set(0, beamTop - (BEAM.d / 2) * UNIT, -span / 2);
  pivot.add(beamMesh);

  let deckCoat: Mesh | null = null;
  let beamCoat: Mesh | null = null;
  let targetDeck = 10;
  let targetBeam = 11;
  let shownDeck = 0;
  let shownBeam = 0;

  const rebuild = () => {
    if (deckCoat) {
      pivot.remove(deckCoat);
      deckCoat.geometry.dispose();
    }
    if (beamCoat) {
      pivot.remove(beamCoat);
      beamCoat.geometry.dispose();
    }
    // Coat under the deck: the same flute profile grown downward, in a band
    // only over the back two thirds so the bare steel shows at the front.
    const coatSpan = span * 0.66;
    deckCoat = new Mesh(
      new ExtrudeGeometry(deckShape(shownDeck), {
        depth: coatSpan,
        bevelEnabled: false,
      }),
      coat,
    );
    deckCoat.position.set(0, -0.002, -span / 2);
    pivot.add(deckCoat);
    beamCoat = new Mesh(
      new ExtrudeGeometry(iShape(shownBeam), {
        depth: coatSpan,
        bevelEnabled: false,
      }),
      coat,
    );
    beamCoat.position.set(0, beamTop - (BEAM.d / 2) * UNIT, -span / 2);
    pivot.add(beamCoat);
  };
  rebuild();

  // Centre the whole assembly vertically.
  pivot.position.y = (DECK.depth + BEAM.d / 2) * UNIT * 0.5;

  let yaw = 0.6;
  let visible = true;

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = canvas;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    const distance = camera.aspect < 1 ? 16 / camera.aspect ** 0.7 : 15;
    camera.position.set(0, -3.2, distance);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  };
  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  resize();

  let frame = 0;
  let last = performance.now();
  let time = 0;
  const tick = (now: number) => {
    frame = 0;
    if (!visible) return;
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    time += dt;
    const k = Math.min(1, dt * 4);
    const before = shownDeck + shownBeam;
    shownDeck += (targetDeck - shownDeck) * k;
    shownBeam += (targetBeam - shownBeam) * k;
    if (Math.abs(shownDeck + shownBeam - before) > 0.02) rebuild();
    pivot.rotation.y = yaw + Math.sin(time * 0.3) * 0.1;
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

  let dragX: number | null = null;
  const down = (event: PointerEvent) => {
    dragX = event.clientX;
  };
  const move = (event: PointerEvent) => {
    if (dragX === null) return;
    yaw += (event.clientX - dragX) * 0.008;
    dragX = event.clientX;
  };
  const up = () => {
    dragX = null;
  };
  canvas.addEventListener("pointerdown", down);
  window.addEventListener("pointermove", move, { passive: true });
  window.addEventListener("pointerup", up);
  wake();

  return {
    set(deckMm, beamMm) {
      targetDeck = deckMm;
      targetBeam = beamMm;
      wake();
    },
    dispose() {
      visible = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      screen.disconnect();
      canvas.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      for (const mesh of [deckMesh, slab, beamMesh, deckCoat, beamCoat])
        mesh?.geometry.dispose();
      steel.dispose();
      concrete.dispose();
      coat.dispose();
      concreteTex.dispose();
      coatTex.dispose();
      renderer.dispose();
    },
  };
}
