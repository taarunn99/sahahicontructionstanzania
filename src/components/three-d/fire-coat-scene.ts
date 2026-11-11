import {
  ACESFilmicToneMapping,
  AmbientLight,
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
 * The Three.js half of the thickness calculator. Only reached by dynamic
 * import. A steel column of the visitor's section stands on the floor; the
 * lower part wears the sprayed coat at the thickness the calculator worked
 * out, in true proportion to the steel, and the top is left bare so the
 * steel and the coat read as two things. Drag to turn it. Renders only while
 * on screen.
 */

export type Section = { d: number; b: number; tw: number; tf: number };

export type FireCoatController = {
  set: (section: Section, coatMm: number) => void;
  dispose: () => void;
};

const HEIGHT = 3.2;
const COAT_TO = 0.68; // share of the height the coat covers

/** An I section in scene units, grown outwards by `grow` on every face. */
function iShape(s: Section, unit: number, grow: number) {
  const w = (s.b / 2) * unit + grow;
  const h = (s.d / 2) * unit + grow;
  const f = s.tf * unit + grow * 2;
  const web = (s.tw / 2) * unit + grow;
  const shape = new Shape();
  shape.moveTo(-w, -h);
  shape.lineTo(w, -h);
  shape.lineTo(w, -h + f);
  shape.lineTo(web, -h + f);
  shape.lineTo(web, h - f);
  shape.lineTo(w, h - f);
  shape.lineTo(w, h);
  shape.lineTo(-w, h);
  shape.lineTo(-w, h - f);
  shape.lineTo(-web, h - f);
  shape.lineTo(-web, -h + f);
  shape.lineTo(-w, -h + f);
  shape.closePath();
  return shape;
}

function speckle() {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.fillStyle = "rgb(196,192,181)";
    ctx.fillRect(0, 0, size, size);
    let seed = 7;
    const next = () => {
      seed = (seed * 16807) % 2147483647;
      return seed / 2147483647;
    };
    for (let i = 0; i < 6000; i += 1) {
      ctx.fillStyle = next() > 0.5 ? "rgb(160,156,146)" : "rgb(222,219,210)";
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

export function mountFireCoat(canvas: HTMLCanvasElement): FireCoatController {
  const renderer = new WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "low-power",
  });
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));

  const scene = new Scene();
  const camera = new PerspectiveCamera(30, 1, 0.1, 60);
  scene.add(new AmbientLight(0xffffff, 0.55));
  const key = new DirectionalLight(0xfff4e6, 1.6);
  key.position.set(4, 7, 5);
  scene.add(key);
  const rim = new DirectionalLight(0xbfd9ff, 0.7);
  rim.position.set(-5, 3, -4);
  scene.add(rim);

  const column = new Group();
  scene.add(column);

  const steel = new MeshStandardMaterial({
    color: 0x8a949a,
    metalness: 0.35,
    roughness: 0.5,
  });
  const texture = speckle();
  const coat = new MeshStandardMaterial({ map: texture, roughness: 1 });

  let steelMesh: Mesh | null = null;
  let coatMesh: Mesh | null = null;
  let section: Section = { d: 203.2, b: 203.6, tw: 7.2, tf: 11 };
  let targetMm = 25;
  let shownMm = 0;
  let unit = 1;

  const rebuildSteel = () => {
    unit = 1.25 / Math.max(section.b, section.d);
    if (steelMesh) {
      column.remove(steelMesh);
      steelMesh.geometry.dispose();
    }
    const geometry = new ExtrudeGeometry(iShape(section, unit, 0), {
      depth: HEIGHT,
      bevelEnabled: false,
    });
    steelMesh = new Mesh(geometry, steel);
    column.add(steelMesh);
  };

  const rebuildCoat = () => {
    if (coatMesh) {
      column.remove(coatMesh);
      coatMesh.geometry.dispose();
    }
    const geometry = new ExtrudeGeometry(
      iShape(section, unit, shownMm * unit),
      { depth: HEIGHT * COAT_TO, bevelEnabled: false },
    );
    coatMesh = new Mesh(geometry, coat);
    column.add(coatMesh);
  };

  rebuildSteel();
  rebuildCoat();
  // Extruded along z: stand it up, feet at y = -HEIGHT/2.
  column.rotation.x = -Math.PI / 2;
  column.position.y = -HEIGHT / 2;

  let yaw = 0.7;
  let visible = true;

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = canvas;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    const distance = camera.aspect < 1 ? 9.5 / camera.aspect ** 0.6 : 8.4;
    camera.position.set(0, 1.6, distance);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  };
  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  resize();

  const pivot = new Group();
  scene.remove(column);
  pivot.add(column);
  scene.add(pivot);

  let frame = 0;
  let last = performance.now();
  let time = 0;
  const tick = (now: number) => {
    frame = 0;
    if (!visible) return;
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    time += dt;
    const before = shownMm;
    shownMm += (targetMm - shownMm) * Math.min(1, dt * 4);
    if (Math.abs(shownMm - before) > 0.02) rebuildCoat();
    pivot.rotation.y = yaw + Math.sin(time * 0.35) * 0.12;
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
    set(next, coatMm) {
      const changed =
        next.d !== section.d ||
        next.b !== section.b ||
        next.tw !== section.tw ||
        next.tf !== section.tf;
      section = next;
      targetMm = coatMm;
      if (changed) {
        rebuildSteel();
        rebuildCoat();
      }
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
      steelMesh?.geometry.dispose();
      coatMesh?.geometry.dispose();
      steel.dispose();
      coat.dispose();
      texture.dispose();
      renderer.dispose();
    },
  };
}
