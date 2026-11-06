import {
  BoxGeometry,
  BufferGeometry,
  Color,
  EdgesGeometry,
  Float32BufferAttribute,
  Group,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  OrthographicCamera,
  Raycaster,
  Scene,
  Vector2,
  WebGLRenderer,
} from "three";

import type { BuildUpLayer } from "@/config/mapei-signature";

/**
 * The Three.js half of the waterproofing build-up. This module is the ONLY
 * place `three` is imported, and it is only ever reached through a dynamic
 * import from build-up-explorer.tsx, so the library is never in a route's
 * initial JavaScript (DESIGN-CONCEPT.md section 7).
 *
 * The look matches the house drawing: flat pastel faces with Ink edges, no
 * lights, no shadows, an orthographic camera. One box and one edge set per
 * layer: 14 draw calls plus the mesh grid.
 *
 * It renders ON DEMAND. The loop runs only while a value is still easing
 * towards its target, then stops; nothing turns on its own.
 */

export type BuildUpController = {
  setExplode: (value: number) => void;
  setActive: (index: number | null) => void;
  dispose: () => void;
};

const SIZE = 2.4;
const GAP = 0.44;
const SLIDE = 0.42;

const cssColor = (name: string) =>
  new Color(
    getComputedStyle(document.documentElement).getPropertyValue(name).trim(),
  );

export function mountBuildUp(
  canvas: HTMLCanvasElement,
  layers: BuildUpLayer[],
  onPick: (index: number) => void,
): BuildUpController {
  const ink = cssColor("--deep");
  const tones = {
    chalk: cssColor("--chalk"),
    accent: cssColor("--accent"),
    surface: cssColor("--surface"),
    line: cssColor("--line"),
  };

  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearAlpha(0);

  const scene = new Scene();
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 50);
  const stack = new Group();
  scene.add(stack);

  // Bottom layer first in the scene; `layers` arrives top first.
  const order = [...layers].reverse();
  const disposables: { dispose: () => void }[] = [];
  const parts = order.map((layer) => {
    const group = new Group();
    const geometry = new BoxGeometry(SIZE, layer.t, SIZE);
    const face = new MeshBasicMaterial({
      color: tones[layer.tone],
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1,
    });
    const edge = new LineBasicMaterial({ color: ink });
    const edges = new EdgesGeometry(geometry);
    const mesh = new Mesh(geometry, face);
    group.add(mesh, new LineSegments(edges, edge));
    disposables.push(geometry, face, edge, edges);

    if (layer.mesh) {
      // The reinforcing mesh: a grid drawn on the layer's top face.
      const points: number[] = [];
      const half = SIZE / 2;
      const y = layer.t / 2 + 0.002;
      for (let i = 1; i < 12; i += 1) {
        const p = -half + (SIZE / 12) * i;
        points.push(p, y, -half, p, y, half, -half, y, p, half, y, p);
      }
      const grid = new BufferGeometry();
      grid.setAttribute("position", new Float32BufferAttribute(points, 3));
      const gridLine = new LineBasicMaterial({
        color: ink,
        transparent: true,
        opacity: 0.6,
      });
      group.add(new LineSegments(grid, gridLine));
      disposables.push(grid, gridLine);
    }

    stack.add(group);
    return { group, mesh, face, edge, base: tones[layer.tone], t: layer.t };
  });
  const thickness = parts.reduce((sum, part) => sum + part.t, 0);

  // ---- State: current values ease towards targets --------------------------
  const state = { explode: 1, yaw: Math.PI / 4, pitch: 0.62 };
  const target = { ...state };
  const slide = parts.map(() => 0);
  let active: number | null = null; // index into `parts` (bottom first)
  let frame = 0;

  const layout = () => {
    const gap = GAP * state.explode;
    const total = thickness + gap * (parts.length - 1);
    let y = -total / 2;
    parts.forEach((part, index) => {
      part.group.position.set(slide[index], y + part.t / 2, 0);
      y += part.t + gap;
    });
    stack.rotation.y = state.yaw;
    camera.position.set(
      0,
      Math.sin(state.pitch) * 10,
      Math.cos(state.pitch) * 10,
    );
    camera.lookAt(0, 0, 0);
  };

  const resize = () => {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    // Fit the fully exploded stack with room for a layer to slide out.
    const needW = SIZE * 1.42 + SLIDE * 2 + 0.3;
    const needH = thickness + GAP * (parts.length - 1) + SIZE * 0.95;
    const aspect = width / height;
    const halfH = Math.max(needH / 2, needW / 2 / aspect);
    camera.left = -halfH * aspect;
    camera.right = halfH * aspect;
    camera.top = halfH;
    camera.bottom = -halfH;
    camera.updateProjectionMatrix();
    invalidate();
  };

  const tick = () => {
    frame = 0;
    let moving = false;
    const ease = (from: number, to: number) => {
      const next = from + (to - from) * 0.14;
      if (Math.abs(to - next) < 0.0008) return to;
      moving = true;
      return next;
    };
    state.explode = ease(state.explode, target.explode);
    state.yaw = ease(state.yaw, target.yaw);
    state.pitch = ease(state.pitch, target.pitch);
    parts.forEach((_, index) => {
      slide[index] = ease(slide[index], index === active ? SLIDE : 0);
    });
    layout();
    renderer.render(scene, camera);
    if (moving) frame = requestAnimationFrame(tick);
  };
  function invalidate() {
    if (!frame) frame = requestAnimationFrame(tick);
  }

  const paint = () => {
    parts.forEach((part, index) => {
      const on = index === active;
      part.face.color.copy(on ? ink : part.base);
      part.edge.color.copy(on ? tones.chalk : ink);
    });
  };

  // ---- Pointer: drag turns the stack, a tap or hover picks a layer ----------
  const raycaster = new Raycaster();
  const pointer = new Vector2();
  const drag = { on: false, x: 0, y: 0, moved: 0 };

  const pick = (event: PointerEvent) => {
    const box = canvas.getBoundingClientRect();
    pointer.set(
      ((event.clientX - box.left) / box.width) * 2 - 1,
      -((event.clientY - box.top) / box.height) * 2 + 1,
    );
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObjects(parts.map((part) => part.mesh))[0];
    const index = hit
      ? parts.findIndex((part) => part.mesh === hit.object)
      : -1;
    return index < 0 ? null : index;
  };
  // `parts` is bottom first; the page lists layers top first. A miss picks
  // nothing: the last layer chosen stays chosen.
  const report = (event: PointerEvent) => {
    const index = pick(event);
    if (index !== null) onPick(parts.length - 1 - index);
  };

  const onDown = (event: PointerEvent) => {
    drag.on = true;
    drag.x = event.clientX;
    drag.y = event.clientY;
    drag.moved = 0;
    canvas.setPointerCapture(event.pointerId);
  };
  const onMove = (event: PointerEvent) => {
    if (drag.on) {
      const dx = event.clientX - drag.x;
      const dy = event.clientY - drag.y;
      drag.x = event.clientX;
      drag.y = event.clientY;
      drag.moved += Math.abs(dx) + Math.abs(dy);
      target.yaw += dx * 0.009;
      // Touch keeps vertical movement for scrolling the page.
      if (event.pointerType === "mouse")
        target.pitch = Math.min(1.1, Math.max(0.25, target.pitch + dy * 0.006));
      invalidate();
    } else if (event.pointerType === "mouse") {
      report(event);
    }
  };
  const onUp = (event: PointerEvent) => {
    if (drag.on && drag.moved < 6) report(event);
    drag.on = false;
  };
  const onCancel = () => {
    drag.on = false;
  };

  canvas.addEventListener("pointerdown", onDown);
  canvas.addEventListener("pointermove", onMove);
  canvas.addEventListener("pointerup", onUp);
  canvas.addEventListener("pointercancel", onCancel);
  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  resize();

  return {
    setExplode(value) {
      target.explode = value;
      invalidate();
    },
    setActive(index) {
      active = index === null ? null : parts.length - 1 - index;
      paint();
      invalidate();
    },
    dispose() {
      cancelAnimationFrame(frame);
      observer.disconnect();
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointercancel", onCancel);
      disposables.forEach((item) => item.dispose());
      renderer.dispose();
    },
  };
}
