import {
  AmbientLight,
  BoxGeometry,
  Color,
  DirectionalLight,
  InstancedMesh,
  Matrix4,
  Mesh,
  MeshBasicMaterial,
  MeshLambertMaterial,
  OrthographicCamera,
  Plane,
  PlaneGeometry,
  Raycaster,
  Scene,
  Vector2,
  Vector3,
  WebGLRenderer,
} from "three";

/**
 * The home hero's 3D piece: a tiled floor that lays itself and answers the
 * hand. Tiles drop into place once, lift and turn yellow under the cursor,
 * and a click or a tap sends a ripple across the whole floor.
 *
 * This module is the only place the hero touches `three`, and it is only
 * ever reached by dynamic import from tile-floor.tsx, after the first
 * interaction or a few idle seconds: never in the first paint.
 *
 * One InstancedMesh (one draw call) for every tile, one plane for the
 * bed. It renders ON DEMAND: the loop runs while a tile is still moving
 * and then stops. Nothing moves on its own after the tiles have landed.
 */

export type TileFloorController = { dispose: () => void };

const GRID = 9;
const TILE = 1;
const GAP = 0.07;
const THICK = 0.14;
const REACH = 2.1; // how far the cursor's lift spreads, in tiles
const LIFT = 0.85;

const cssColor = (name: string) =>
  new Color(
    getComputedStyle(document.documentElement).getPropertyValue(name).trim(),
  );

export function mountTileFloor(canvas: HTMLCanvasElement): TileFloorController {
  const chalk = cssColor("--chalk");
  const yellow = cssColor("--surface");
  const green = cssColor("--line");
  const ink = cssColor("--deep");

  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearAlpha(0);

  const scene = new Scene();
  scene.add(new AmbientLight(0xffffff, 2.1));
  const sun = new DirectionalLight(0xffffff, 1.6);
  sun.position.set(-3, 8, 5);
  scene.add(sun);

  const camera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 60);
  camera.position.set(10, 9.2, 10);
  camera.lookAt(0, 0, 0);

  // The bed the tiles sit on: reads as the grout lines between them.
  const bedGeometry = new PlaneGeometry(GRID * TILE + 0.5, GRID * TILE + 0.5);
  const bedMaterial = new MeshBasicMaterial({ color: ink });
  const bed = new Mesh(bedGeometry, bedMaterial);
  bed.rotation.x = -Math.PI / 2;
  bed.position.y = -THICK / 2 - 0.01;
  scene.add(bed);

  const count = GRID * GRID;
  const geometry = new BoxGeometry(TILE - GAP, THICK, TILE - GAP);
  const material = new MeshLambertMaterial();
  const tiles = new InstancedMesh(geometry, material, count);
  scene.add(tiles);

  // A fixed, pleasant scatter of brand tiles on a white floor (no random:
  // the floor looks the same on every visit).
  const base: Color[] = [];
  const tile = Array.from({ length: count }, (_, i) => {
    const col = i % GRID;
    const row = Math.floor(i / GRID);
    const pick = (col * 7 + row * 13 + col * row) % 11;
    base.push(pick === 0 ? yellow : pick === 5 ? green : chalk);
    return {
      x: (col - (GRID - 1) / 2) * TILE,
      z: (row - (GRID - 1) / 2) * TILE,
      y: 5 + (col + row) * 0.55, // starts above: the drop-in
      target: 0,
      delay: (col + row) * 0.045,
    };
  });

  // ---- State -----------------------------------------------------------------
  const pointer = new Vector2();
  const hit = new Vector3();
  const ground = new Plane(new Vector3(0, 1, 0), 0);
  const raycaster = new Raycaster();
  let cursor: { x: number; z: number } | null = null;
  const ripples: { x: number; z: number; start: number }[] = [];
  const matrix = new Matrix4();
  const colour = new Color();
  let frame = 0;
  const began = performance.now();

  const resize = () => {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    const aspect = width / height;
    // The floor's diagonal is what has to fit.
    const half = (GRID * TILE * 1.42) / 2 + 0.6;
    const halfH = Math.max(half / aspect, half * 0.66);
    camera.left = -halfH * aspect;
    camera.right = halfH * aspect;
    camera.top = halfH;
    camera.bottom = -halfH;
    camera.updateProjectionMatrix();
    invalidate();
  };

  const tick = (now: number) => {
    frame = 0;
    const elapsed = (now - began) / 1000;
    let moving = false;

    for (let i = ripples.length - 1; i >= 0; i -= 1)
      if (now - ripples[i].start > 2200) ripples.splice(i, 1);

    tile.forEach((item, i) => {
      let target = 0;
      if (cursor) {
        const distance = Math.hypot(item.x - cursor.x, item.z - cursor.z);
        if (distance < REACH) target = LIFT * (1 - distance / REACH) ** 2;
      }
      for (const ripple of ripples) {
        const age = (now - ripple.start) / 1000;
        const distance = Math.hypot(item.x - ripple.x, item.z - ripple.z);
        const front = age * 7.5;
        const band = Math.abs(distance - front);
        if (band < 1.4)
          target += 0.7 * (1 - band / 1.4) * Math.max(0, 1 - age / 2.2);
      }
      // Wait its turn in the drop-in, then ease to the target.
      if (elapsed > item.delay) item.y += (target - item.y) * 0.16;
      if (Math.abs(target - item.y) > 0.002 || elapsed <= item.delay)
        moving = true;
      else item.y = target;

      matrix.makeRotationY(item.y * 0.35);
      matrix.setPosition(item.x, item.y, item.z);
      tiles.setMatrixAt(i, matrix);
      // A lifted tile warms to yellow; a landed one returns to its own colour.
      const warm = Math.min(1, Math.max(0, item.y / LIFT));
      tiles.setColorAt(i, colour.copy(base[i]).lerp(yellow, warm * 0.9));
    });
    tiles.instanceMatrix.needsUpdate = true;
    if (tiles.instanceColor) tiles.instanceColor.needsUpdate = true;

    renderer.render(scene, camera);
    if (moving || ripples.length) frame = requestAnimationFrame(tick);
  };
  function invalidate() {
    if (!frame) frame = requestAnimationFrame(tick);
  }

  const locate = (event: PointerEvent) => {
    const box = canvas.getBoundingClientRect();
    pointer.set(
      ((event.clientX - box.left) / box.width) * 2 - 1,
      -((event.clientY - box.top) / box.height) * 2 + 1,
    );
    raycaster.setFromCamera(pointer, camera);
    return raycaster.ray.intersectPlane(ground, hit)
      ? { x: hit.x, z: hit.z }
      : null;
  };

  const onMove = (event: PointerEvent) => {
    cursor = locate(event);
    invalidate();
  };
  const onLeave = () => {
    cursor = null;
    invalidate();
  };
  const onDown = (event: PointerEvent) => {
    const at = locate(event);
    if (at) ripples.push({ ...at, start: performance.now() });
    // A finger does not hover: let the lift go once the ripple is sent.
    if (event.pointerType !== "mouse") cursor = null;
    invalidate();
  };

  canvas.addEventListener("pointermove", onMove);
  canvas.addEventListener("pointerleave", onLeave);
  canvas.addEventListener("pointerdown", onDown);
  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  resize();

  return {
    dispose() {
      cancelAnimationFrame(frame);
      observer.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      canvas.removeEventListener("pointerdown", onDown);
      geometry.dispose();
      material.dispose();
      bedGeometry.dispose();
      bedMaterial.dispose();
      tiles.dispose();
      renderer.dispose();
    },
  };
}
