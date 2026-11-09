import {
  ACESFilmicToneMapping,
  AmbientLight,
  BoxGeometry,
  CanvasTexture,
  Color,
  DirectionalLight,
  Group,
  HemisphereLight,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  Raycaster,
  RepeatWrapping,
  Scene,
  SRGBColorSpace,
  TextureLoader,
  Vector2,
  Vector3,
  WebGLRenderer,
  type Texture,
} from "three";

import type { StackLayer } from "./layer-stack";

/**
 * The Three.js half of the layer model. Only reached by dynamic import from
 * layer-stack.tsx. One box per layer, pulled apart along the vertical, with a
 * texture drawn on a canvas or loaded from the manufacturer's decor picture.
 * Layer heights are exaggerated so that thin films can be seen and picked: this
 * is a labelled diagram, not a drawing to scale. Renders only while on screen.
 */

export type LayerStackController = {
  setExplode: (value: number) => void;
  setActive: (index: number) => void;
  setDecor: (src: string) => void;
  dispose: () => void;
};

const WIDTH = 3.3;
const DEPTH = 2.2;
const GAP = 0.62;

function patternTexture(pattern: StackLayer["pattern"], base: string) {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, size, size);
  const color = new Color(base);
  const shade = (amount: number) =>
    `#${color.clone().multiplyScalar(amount).getHexString()}`;
  const dots = (count: number, radius: number, tones: string[]) => {
    // A fixed sequence, so the texture is the same on every load.
    let seed = 7;
    const next = () => {
      seed = (seed * 16807) % 2147483647;
      return seed / 2147483647;
    };
    for (let i = 0; i < count; i += 1) {
      ctx.fillStyle = tones[Math.floor(next() * tones.length)];
      ctx.beginPath();
      ctx.arc(next() * size, next() * size, radius * (0.5 + next()), 0, 7);
      ctx.fill();
    }
  };
  if (pattern === "concrete") dots(1600, 1.2, [shade(0.82), shade(1.14)]);
  if (pattern === "sand") dots(3600, 1, [shade(0.72), shade(1.2), "#ffffff"]);
  if (pattern === "granule") dots(1200, 4, [shade(0.72), shade(1.25), base]);
  if (pattern === "foam") dots(700, 5, [shade(0.92), shade(1.08)]);
  if (pattern === "rebar") {
    ctx.fillStyle = "#3b4247";
    for (let i = 0; i < 8; i += 1) {
      ctx.fillRect(0, i * 32 + 12, size, 8);
      ctx.fillRect(i * 32 + 12, 0, 8, size);
    }
  }
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.repeat.set(pattern === "rebar" ? 1 : 2, pattern === "rebar" ? 1 : 2);
  return texture;
}

export function mountLayerStack(
  canvas: HTMLCanvasElement,
  layers: StackLayer[],
  tags: () => (HTMLElement | null)[],
  onPick: (index: number) => void,
): LayerStackController {
  const renderer = new WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "low-power",
  });
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));

  const scene = new Scene();
  const camera = new PerspectiveCamera(30, 1, 0.1, 60);
  scene.add(new AmbientLight(0xffffff, 0.9));
  scene.add(new HemisphereLight(0xffffff, 0x8a7a68, 1.1));
  const sun = new DirectionalLight(0xffffff, 2.2);
  sun.position.set(4, 8, 5);
  scene.add(sun);

  const stack = new Group();
  scene.add(stack);

  const textures: Texture[] = [];
  const loader = new TextureLoader();
  const geometries: BoxGeometry[] = [];
  const materials: MeshStandardMaterial[] = [];
  const meshes = layers.map((layer) => {
    const geometry = new BoxGeometry(WIDTH, layer.height, DEPTH);
    geometries.push(geometry);
    const pattern = layer.pattern
      ? patternTexture(layer.pattern, layer.color)
      : null;
    if (pattern) textures.push(pattern);
    const side = new MeshStandardMaterial({
      color: new Color(layer.color),
      roughness: 0.75,
      transparent: layer.opacity !== undefined,
      opacity: layer.opacity ?? 1,
    });
    const top = new MeshStandardMaterial({
      color: pattern ? 0xffffff : new Color(layer.color),
      map: pattern,
      roughness: layer.opacity !== undefined ? 0.15 : 0.7,
      metalness: 0,
      transparent: layer.opacity !== undefined,
      opacity: layer.opacity ?? 1,
    });
    materials.push(side, top);
    // BoxGeometry material order: +x, -x, +y, -y, +z, -z.
    return new Mesh(geometry, [side, side, top, side, side, side]);
  });
  meshes.forEach((mesh) => stack.add(mesh));

  let explode = 1;
  let explodeTarget = 1;
  let active = 0;
  let yaw = -0.62;
  let spin = true;
  let visible = true;
  const slide = meshes.map(() => 0);

  const placeLayers = () => {
    const total = layers.reduce((sum, layer) => sum + layer.height, 0);
    let y = (total + GAP * explode * (layers.length - 1)) / 2;
    meshes.forEach((mesh, index) => {
      y -= layers[index].height / 2;
      mesh.position.y = y;
      mesh.position.x = slide[index];
      y -= layers[index].height / 2 + GAP * explode;
    });
  };

  const anchor = new Vector3();
  const placeTags = () => {
    const elements = tags();
    const { clientWidth: w, clientHeight: h } = canvas;
    meshes.forEach((mesh, index) => {
      const element = elements[index];
      if (!element) return;
      anchor.set(WIDTH / 2, 0, DEPTH / 2);
      mesh.localToWorld(anchor);
      anchor.project(camera);
      const x = Math.round((anchor.x * 0.5 + 0.5) * w);
      const y = Math.round((-anchor.y * 0.5 + 0.5) * h);
      element.style.transform = `translate(${x}px, ${y}px)`;
      element.style.opacity = "1";
    });
  };

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = canvas;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // Fit the stack on a narrow phone as well as on a wide stage.
    const distance = camera.aspect < 1 ? 13.5 / camera.aspect ** 0.55 : 11.5;
    camera.position.set(0, distance * 0.42, distance);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  };
  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  resize();

  let frame = 0;
  let last = performance.now();
  const tick = (now: number) => {
    frame = 0;
    if (!visible) return;
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (spin) yaw += dt * 0.22;
    stack.rotation.y = yaw;
    explode += (explodeTarget - explode) * Math.min(1, dt * 5);
    meshes.forEach((_, index) => {
      const target = index === active ? 0.42 : 0;
      slide[index] += (target - slide[index]) * Math.min(1, dt * 6);
    });
    placeLayers();
    scene.updateMatrixWorld();
    renderer.render(scene, camera);
    placeTags();
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

  // Drag turns the model, sideways only, so a phone can still scroll the page.
  const raycaster = new Raycaster();
  const pointer = new Vector2();
  let dragX: number | null = null;
  let moved = 0;
  const down = (event: PointerEvent) => {
    dragX = event.clientX;
    moved = 0;
    spin = false;
  };
  const move = (event: PointerEvent) => {
    if (dragX === null) return;
    const delta = event.clientX - dragX;
    dragX = event.clientX;
    moved += Math.abs(delta);
    yaw += delta * 0.008;
  };
  const up = (event: PointerEvent) => {
    if (dragX !== null && moved < 6) {
      const box = canvas.getBoundingClientRect();
      pointer.set(
        ((event.clientX - box.left) / box.width) * 2 - 1,
        -((event.clientY - box.top) / box.height) * 2 + 1,
      );
      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.intersectObjects(meshes)[0];
      if (hit) {
        const index = meshes.indexOf(hit.object as (typeof meshes)[number]);
        if (index >= 0) onPick(index);
      }
    }
    dragX = null;
  };
  canvas.addEventListener("pointerdown", down);
  window.addEventListener("pointermove", move, { passive: true });
  window.addEventListener("pointerup", up);

  wake();

  return {
    setExplode(value) {
      explodeTarget = value;
    },
    setActive(index) {
      active = index;
    },
    setDecor(src) {
      const index = layers.findIndex((layer) => layer.decor);
      if (index < 0) return;
      loader.load(src, (texture) => {
        texture.colorSpace = SRGBColorSpace;
        textures.push(texture);
        const faces = meshes[index].material as MeshStandardMaterial[];
        faces[2].map = texture;
        faces[2].color.set(0xffffff);
        faces[2].needsUpdate = true;
      });
    },
    dispose() {
      visible = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      screen.disconnect();
      canvas.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      geometries.forEach((item) => item.dispose());
      materials.forEach((item) => item.dispose());
      textures.forEach((item) => item.dispose());
      renderer.dispose();
    },
  };
}
