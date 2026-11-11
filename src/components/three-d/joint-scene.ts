import {
  ACESFilmicToneMapping,
  AmbientLight,
  BoxGeometry,
  CanvasTexture,
  Color,
  DirectionalLight,
  Group,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  RepeatWrapping,
  Scene,
  SRGBColorSpace,
  WebGLRenderer,
} from "three";

/**
 * The Three.js half of the joint sealant calculator. Only reached by dynamic
 * import. Two concrete slabs with a movement joint between them, built as the
 * X-Seal PS800 data sheet describes: primed joint faces, joint filler board,
 * debonding tape over the board, and the sealant slightly recessed. Widths
 * and depths are in true proportion. The movement slider opens and closes
 * the joint; past the 25% the sheet allows, the sealant turns red.
 */

export type JointState = { width: number; depth: number; movement: number };

export type JointController = {
  set: (state: JointState) => void;
  dispose: () => void;
};

const UNIT = 1 / 50; // scene units per mm
const SLAB_W = 150; // mm, each slab
const SLAB_T = 110; // mm
const LENGTH = 260; // mm along the joint
const RECESS = 3; // mm, "slightly recessed"
const TAPE = 1.5; // mm

const GREY = new Color(0x6f7478);
const RED = new Color(0xd62828);

function concrete() {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.fillStyle = "#bcb8ae";
    ctx.fillRect(0, 0, size, size);
    let seed = 11;
    const next = () => {
      seed = (seed * 16807) % 2147483647;
      return seed / 2147483647;
    };
    for (let i = 0; i < 5000; i += 1) {
      const r = next();
      ctx.fillStyle = r > 0.66 ? "#9d998f" : r > 0.33 ? "#d2cfc6" : "#aaa69c";
      ctx.beginPath();
      ctx.arc(next() * size, next() * size, 0.5 + next() * 2.2, 0, 7);
      ctx.fill();
    }
  }
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.repeat.set(1.5, 1.5);
  return texture;
}

export function mountJoint(canvas: HTMLCanvasElement): JointController {
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
  const key = new DirectionalLight(0xfff4e6, 1.7);
  key.position.set(3, 8, 6);
  scene.add(key);
  const rim = new DirectionalLight(0xbfd9ff, 0.6);
  rim.position.set(-6, 2, -4);
  scene.add(rim);

  const pivot = new Group();
  scene.add(pivot);

  const texture = concrete();
  const concreteMat = new MeshStandardMaterial({ map: texture, roughness: 1 });
  const primerMat = new MeshStandardMaterial({
    color: 0xe0a93a,
    roughness: 0.6,
    transparent: true,
    opacity: 0.9,
  });
  const boardMat = new MeshStandardMaterial({ color: 0x8a6a45, roughness: 1 });
  const tapeMat = new MeshStandardMaterial({ color: 0xf5f5f2, roughness: 0.4 });
  const sealantMat = new MeshStandardMaterial({
    color: GREY.clone(),
    roughness: 0.35,
    metalness: 0.05,
  });

  const unitBox = new BoxGeometry(1, 1, 1);
  const make = (material: MeshStandardMaterial) => {
    const mesh = new Mesh(unitBox, material);
    pivot.add(mesh);
    return mesh;
  };
  const left = make(concreteMat);
  const right = make(concreteMat);
  const primerL = make(primerMat);
  const primerR = make(primerMat);
  const board = make(boardMat);
  const tape = make(tapeMat);
  const sealant = make(sealantMat);

  /** Place a box by its x range, y range (mm, y up, top of slab at 0). */
  const place = (
    mesh: Mesh,
    x0: number,
    x1: number,
    y0: number,
    y1: number,
    length = LENGTH,
  ) => {
    mesh.scale.set(
      Math.max(0.0001, (x1 - x0) * UNIT),
      Math.max(0.0001, (y1 - y0) * UNIT),
      length * UNIT,
    );
    mesh.position.set(((x0 + x1) / 2) * UNIT, ((y0 + y1) / 2) * UNIT, 0);
  };

  let target: JointState = { width: 20, depth: 10, movement: 0 };
  const shown: JointState = { width: 0, depth: 10, movement: 0 };

  const layout = () => {
    const gap = shown.width * (1 + shown.movement / 100);
    const half = gap / 2;
    const prime = 0.8; // mm, drawn thicker than real so it shows
    place(left, -half - SLAB_W, -half, -SLAB_T, 0);
    place(right, half, half + SLAB_W, -SLAB_T, 0);
    const sealTop = -RECESS;
    const sealBottom = sealTop - shown.depth;
    place(primerL, -half, -half + prime, sealBottom, 0, LENGTH - 2);
    place(primerR, half - prime, half, sealBottom, 0, LENGTH - 2);
    place(sealant, -half + prime, half - prime, sealBottom, sealTop, LENGTH - 30);
    place(tape, -half, half, sealBottom - TAPE, sealBottom, LENGTH - 30);
    place(board, -half, half, -SLAB_T, sealBottom - TAPE, LENGTH - 30);
    // The sealant goes red past the movement the sheet allows.
    const over = Math.abs(shown.movement) > 25.01;
    sealantMat.color.lerp(over ? RED : GREY, 0.25);
  };

  let yaw = -0.55;
  let visible = true;

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = canvas;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    const distance = camera.aspect < 1 ? 13 / camera.aspect ** 0.75 : 12;
    camera.position.set(0, 4.2, distance);
    camera.lookAt(0, -1.1, 0);
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
    const k = Math.min(1, dt * 6);
    shown.width += (target.width - shown.width) * k;
    shown.depth += (target.depth - shown.depth) * k;
    shown.movement += (target.movement - shown.movement) * k;
    layout();
    pivot.rotation.y = yaw + Math.sin(time * 0.3) * 0.08;
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
    set(state) {
      target = state;
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
      unitBox.dispose();
      for (const material of [
        concreteMat,
        primerMat,
        boardMat,
        tapeMat,
        sealantMat,
      ])
        material.dispose();
      texture.dispose();
      renderer.dispose();
    },
  };
}
