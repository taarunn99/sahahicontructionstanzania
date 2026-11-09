import {
  ACESFilmicToneMapping,
  Box3,
  PerspectiveCamera,
  PMREMGenerator,
  Scene,
  SRGBColorSpace,
  Vector3,
  WebGLRenderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

/**
 * The 3D half of the product model viewer. The only place the viewer
 * touches `three`; reached only by dynamic import from model-viewer.tsx,
 * and only when the visitor asks for the model.
 *
 * Turn it with a drag (any direction, all the way round), zoom with a
 * pinch or the wheel. Soft studio light from a generated room, no
 * shadows. It renders ON DEMAND: a frame is drawn only while the visitor
 * is moving the model or its inertia is settling.
 *
 * `frontOnly`: for a pack generated from one front picture (OYH), the back is
 * a mirror of the front. The model is turned to face the camera (Tripo puts the
 * picture's front on +x) and the drag stops 60 degrees either side of it.
 */

export type ModelViewerController = { dispose: () => void };

export async function mountModelViewer(
  canvas: HTMLCanvasElement,
  url: string,
  { frontOnly = false }: { frontOnly?: boolean } = {},
): Promise<ModelViewerController> {
  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearAlpha(0);
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new Scene();
  const pmrem = new PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  const environment = pmrem.fromScene(room, 0.04);
  scene.environment = environment.texture;

  const camera = new PerspectiveCamera(32, 1, 0.01, 100);

  const loader = new GLTFLoader();
  loader.setMeshoptDecoder(MeshoptDecoder);
  const gltf = await loader.loadAsync(url);
  const model = gltf.scene;
  if (frontOnly) {
    model.rotation.y = -Math.PI / 2;
    model.updateMatrixWorld(true);
  }

  // Centre the model and step the camera back far enough to see all of it.
  const box = new Box3().setFromObject(model);
  const size = box.getSize(new Vector3());
  const centre = box.getCenter(new Vector3());
  model.position.sub(centre);
  scene.add(model);
  const radius = Math.max(size.x, size.y, size.z) / 2 || 1;
  const distance = radius / Math.sin((camera.fov * Math.PI) / 360);
  if (frontOnly) {
    camera.position.set(distance * 0.5, distance * 0.35, distance * 1.2);
  } else {
    camera.position.set(distance * 0.75, distance * 0.45, distance * 1.05);
  }
  camera.near = distance / 100;
  camera.far = distance * 10;

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.enablePan = false;
  controls.minDistance = distance * 0.55;
  controls.maxDistance = distance * 2.2;
  controls.rotateSpeed = 0.9;
  controls.target.set(0, 0, 0);
  if (frontOnly) {
    const arc = Math.PI / 3;
    controls.minAzimuthAngle = -arc;
    controls.maxAzimuthAngle = arc;
    controls.minPolarAngle = Math.PI * 0.2;
    controls.maxPolarAngle = Math.PI * 0.58;
  }

  let frame = 0;
  let settle = 0;
  const draw = () => {
    frame = 0;
    controls.update();
    renderer.render(scene, camera);
    // Keep drawing for a short while after the last input, for the inertia.
    if (settle > 0) {
      settle -= 1;
      frame = requestAnimationFrame(draw);
    }
  };
  const invalidate = () => {
    settle = 50;
    if (!frame) frame = requestAnimationFrame(draw);
  };
  controls.addEventListener("change", () => {
    if (!frame) frame = requestAnimationFrame(draw);
  });
  controls.addEventListener("start", invalidate);
  controls.addEventListener("end", invalidate);

  const resize = () => {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    invalidate();
  };
  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  resize();

  return {
    dispose() {
      cancelAnimationFrame(frame);
      observer.disconnect();
      controls.dispose();
      environment.dispose();
      pmrem.dispose();
      room.dispose();
      model.traverse((node) => {
        const mesh = node as {
          geometry?: { dispose: () => void };
          material?:
            | { dispose: () => void; map?: { dispose: () => void } | null }
            | { dispose: () => void; map?: { dispose: () => void } | null }[];
        };
        mesh.geometry?.dispose();
        const materials = Array.isArray(mesh.material)
          ? mesh.material
          : mesh.material
            ? [mesh.material]
            : [];
        materials.forEach((material) => {
          material.map?.dispose();
          material.dispose();
        });
      });
      renderer.dispose();
    },
  };
}
