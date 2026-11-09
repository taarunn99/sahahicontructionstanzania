import {
  ACESFilmicToneMapping,
  AdditiveBlending,
  AmbientLight,
  BufferAttribute,
  BufferGeometry,
  CanvasTexture,
  Color,
  DirectionalLight,
  ExtrudeGeometry,
  Group,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  Points,
  RepeatWrapping,
  Scene,
  ShaderMaterial,
  Shape,
  SRGBColorSpace,
  WebGLRenderer,
} from "three";

/**
 * The Three.js half of the fire beam. Only reached by dynamic import. A steel
 * I-beam over a fire: the bare half heats to a glow, the half under a
 * cementitious coating stays dark steel. The visitor sets the fire with a
 * slider. It illustrates what the coating is for: it is not a fire test, and it
 * shows no temperature and no time. Renders only while on screen.
 */

export type FireBeamController = {
  setHeat: (value: number) => void;
  dispose: () => void;
};

const LENGTH = 3;

/** An I section, centred, optionally grown outwards for the coating. */
function iSection(grow = 0) {
  const w = 0.62 + grow;
  const h = 0.86 + grow;
  const flange = 0.09 + grow;
  const web = 0.07 + grow;
  const shape = new Shape();
  shape.moveTo(-w, -h);
  shape.lineTo(w, -h);
  shape.lineTo(w, -h + flange * 2);
  shape.lineTo(web, -h + flange * 2);
  shape.lineTo(web, h - flange * 2);
  shape.lineTo(w, h - flange * 2);
  shape.lineTo(w, h);
  shape.lineTo(-w, h);
  shape.lineTo(-w, h - flange * 2);
  shape.lineTo(-web, h - flange * 2);
  shape.lineTo(-web, -h + flange * 2);
  shape.lineTo(-w, -h + flange * 2);
  shape.closePath();
  return shape;
}

function speckle() {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.fillStyle = "#bdb9ae";
    ctx.fillRect(0, 0, size, size);
    let seed = 11;
    const next = () => {
      seed = (seed * 16807) % 2147483647;
      return seed / 2147483647;
    };
    for (let i = 0; i < 5200; i += 1) {
      ctx.fillStyle = next() > 0.5 ? "#9c988e" : "#d6d3c9";
      ctx.beginPath();
      ctx.arc(next() * size, next() * size, 0.6 + next() * 1.8, 0, 7);
      ctx.fill();
    }
  }
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.repeat.set(1.6, 1.6);
  return texture;
}

const FLAME_VERTEX = /* glsl */ `
  uniform float uTime;
  uniform float uHeat;
  uniform float uScale;
  attribute vec3 aSeed;
  varying float vLife;
  void main() {
    float speed = 0.5 + aSeed.y * 0.7;
    float life = fract(aSeed.x + uTime * speed);
    vLife = life;
    vec3 p = position;
    float rise = life * (1.3 + aSeed.z * 1.5) * (0.35 + uHeat);
    p.y += rise;
    p.x += sin(uTime * 3.0 + aSeed.x * 40.0) * 0.1 * life;
    p.z += cos(uTime * 2.4 + aSeed.y * 30.0) * 0.14 * life;
    vec4 view = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * view;
    gl_PointSize = uScale * (1.0 - life * 0.65) * (0.45 + aSeed.z) * (0.3 + uHeat) / -view.z;
  }
`;

const FLAME_FRAGMENT = /* glsl */ `
  uniform float uHeat;
  varying float vLife;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    float a = smoothstep(1.0, 0.0, d);
    vec3 hot = vec3(1.0, 0.86, 0.45);
    vec3 mid = vec3(1.0, 0.38, 0.05);
    vec3 cool = vec3(0.55, 0.04, 0.0);
    vec3 c = mix(hot, mid, smoothstep(0.0, 0.45, vLife));
    c = mix(c, cool, smoothstep(0.45, 1.0, vLife));
    gl_FragColor = vec4(c, a * a * (1.0 - vLife) * smoothstep(0.0, 0.12, uHeat) * 0.85);
  }
`;

export function mountFireBeam(canvas: HTMLCanvasElement): FireBeamController {
  const renderer = new WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "low-power",
  });
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;
  const ratio = Math.min(window.devicePixelRatio, 1.75);
  renderer.setPixelRatio(ratio);

  const scene = new Scene();
  const camera = new PerspectiveCamera(32, 1, 0.1, 60);
  scene.add(new AmbientLight(0xffffff, 0.45));
  const key = new DirectionalLight(0xfff1dc, 1.5);
  key.position.set(3, 6, 6);
  scene.add(key);
  const fireLight = new PointLight(0xff6a1a, 0, 18, 1.6);
  fireLight.position.set(0, -2, 1.6);
  scene.add(fireLight);

  const beam = new Group();
  scene.add(beam);

  const extrude = (shape: Shape, depth: number) =>
    new ExtrudeGeometry(shape, { depth, bevelEnabled: false });

  // Bare half, left.
  const bareGeometry = extrude(iSection(), LENGTH);
  bareGeometry.translate(0, 0, -LENGTH);
  const bare = new MeshStandardMaterial({
    color: 0x6d7479,
    metalness: 0.75,
    roughness: 0.42,
    emissive: new Color(0, 0, 0),
  });
  beam.add(new Mesh(bareGeometry, bare));

  // Protected half, right: the same steel, and a coating around it.
  const steelGeometry = extrude(iSection(), LENGTH);
  const steel = new MeshStandardMaterial({
    color: 0x565d62,
    metalness: 0.7,
    roughness: 0.5,
  });
  beam.add(new Mesh(steelGeometry, steel));
  const coatGeometry = extrude(iSection(0.085), LENGTH - 0.28);
  coatGeometry.translate(0, 0, 0.28);
  const coatTexture = speckle();
  const coat = new MeshStandardMaterial({
    map: coatTexture,
    roughness: 1,
    emissive: new Color(0, 0, 0),
  });
  beam.add(new Mesh(coatGeometry, coat));
  beam.rotation.y = Math.PI / 2;

  // Flames along the underside, sparks above.
  const COUNT = 420;
  const positions = new Float32Array(COUNT * 3);
  const seeds = new Float32Array(COUNT * 3);
  let seed = 3;
  const next = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  for (let i = 0; i < COUNT; i += 1) {
    positions[i * 3] = (next() - 0.5) * LENGTH * 2.1;
    positions[i * 3 + 1] = -1.55 + next() * 0.25;
    positions[i * 3 + 2] = (next() - 0.5) * 1.5;
    seeds[i * 3] = next();
    seeds[i * 3 + 1] = next();
    seeds[i * 3 + 2] = next();
  }
  const flameGeometry = new BufferGeometry();
  flameGeometry.setAttribute("position", new BufferAttribute(positions, 3));
  flameGeometry.setAttribute("aSeed", new BufferAttribute(seeds, 3));
  const flameUniforms = {
    uTime: { value: 0 },
    uHeat: { value: 0 },
    uScale: { value: 900 },
  };
  const flames = new Points(
    flameGeometry,
    new ShaderMaterial({
      uniforms: flameUniforms,
      vertexShader: FLAME_VERTEX,
      fragmentShader: FLAME_FRAGMENT,
      transparent: true,
      depthWrite: false,
      blending: AdditiveBlending,
    }),
  );
  scene.add(flames);

  let heat = 0;
  let target = 0.82;
  let yaw = 0.42;
  let visible = true;
  const glow = new Color();

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = canvas;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    const distance = camera.aspect < 1 ? 11 / camera.aspect ** 0.72 : 10;
    camera.position.set(0, 1, distance);
    camera.lookAt(0, -0.2, 0);
    camera.updateProjectionMatrix();
    flameUniforms.uScale.value = (h * ratio * 2.4) / 1;
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
    heat += (target - heat) * Math.min(1, dt * 1.6);
    const flicker =
      0.88 + Math.sin(time * 13) * 0.07 + Math.sin(time * 29) * 0.05;

    flameUniforms.uTime.value = time;
    flameUniforms.uHeat.value = heat;
    fireLight.intensity = heat * 46 * flicker;

    // Bare steel: nothing, then dull red, orange, and near white at the top.
    const h = Math.max(0, heat - 0.18) / 0.82;
    glow.setRGB(
      Math.min(1, h * 2.2),
      Math.max(0, h - 0.34) * 1.05,
      Math.max(0, h - 0.8) * 1.3,
    );
    bare.emissive.copy(glow);
    bare.emissiveIntensity = (0.4 + h * 2.1) * flicker;
    bare.color.setRGB(
      0.43 * (1 - h * 0.6),
      0.46 * (1 - h * 0.7),
      0.48 * (1 - h * 0.8),
    );
    // The coating takes the fire on its face and only ever warms a little.
    coat.emissive.setRGB(0.28 * h, 0.07 * h, 0);
    coat.emissiveIntensity = flicker;

    beam.rotation.y = Math.PI / 2 + yaw + Math.sin(time * 0.3) * 0.08;
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
    yaw += (event.clientX - dragX) * 0.007;
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
    setHeat(value) {
      target = value;
    },
    dispose() {
      visible = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      screen.disconnect();
      canvas.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      [bareGeometry, steelGeometry, coatGeometry, flameGeometry].forEach(
        (item) => item.dispose(),
      );
      [bare, steel, coat].forEach((item) => item.dispose());
      (flames.material as ShaderMaterial).dispose();
      coatTexture.dispose();
      renderer.dispose();
    },
  };
}
