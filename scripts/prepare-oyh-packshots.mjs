/**
 * Prepares Oriental Yuhong's own pack pictures for build-packshots.mjs.
 *   node scripts/prepare-oyh-packshots.mjs
 *
 * Sources (owner-supplied, assets/source/owner-supplied/oyh/):
 *  - the pictures embedded in OYH's technical data sheets, extracted with
 *    `pdfimages -png` into img-png/ (each picture is a JPEG plus its own
 *    transparency mask, the next file in the sequence);
 *  - the YHPUSeal sausage picture the owner sent, which sits on black.
 *
 * Nothing is redrawn. The data sheet pictures get their own masks back, so
 * they sit on white; the two parts of YHCoat-1000 are placed side by side;
 * the sausage's black surround (and only the surround: a flood fill from
 * the edges) is made white.
 */
import { writeFileSync } from "node:fs";
import sharp from "sharp";

const IN = "assets/source/owner-supplied/oyh";
const OUT = "assets/source/oriental-yuhong-packshots";

/** A data sheet picture with its mask applied, trimmed, as a PNG buffer. */
async function cutout(base, index) {
  const pad = (n) => String(n).padStart(3, "0");
  const picture = sharp(`${IN}/img-png/${base}-${pad(index)}.png`);
  const { width, height } = await picture.metadata();
  const mask = await sharp(`${IN}/img-png/${base}-${pad(index + 1)}.png`)
    .resize(width, height)
    .greyscale()
    .raw()
    .toBuffer();
  return sharp(await picture.removeAlpha().toBuffer())
    .joinChannel(mask, { raw: { width, height, channels: 1 } })
    .png()
    .toBuffer()
    .then((buffer) => sharp(buffer).trim().png().toBuffer());
}

async function single(slug, base, index) {
  await sharp(await cutout(base, index)).toFile(`${OUT}/${slug}.png`);
}

// YHCoat-1000: Part B (20 kg bag) and Part A (6 kg pail), side by side.
{
  const bag = await sharp(await cutout("yhcoat-1000", 2))
    .resize({ height: 1000 })
    .toBuffer({ resolveWithObject: true });
  const pail = await sharp(await cutout("yhcoat-1000", 4))
    .resize({ height: 640 })
    .toBuffer({ resolveWithObject: true });
  const gap = 60;
  const width = bag.info.width + gap + pail.info.width;
  await sharp({
    create: {
      width,
      height: 1000,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    },
  })
    .composite([
      { input: bag.data, left: 0, top: 0 },
      { input: pail.data, left: bag.info.width + gap, top: 1000 - 640 },
    ])
    .png()
    .toFile(`${OUT}/yhcoat-1000.png`);
}
await single("yhcoat-2060", "yhcoat-2060", 2);
await single("yhcolorwall-5300", "yhcolorwall-5300", 4);
await single("yhrepair-2516", "yhrepair-2516", 3);

// YHPUSeal: flood-fill the black surround from the edges to transparent.
{
  const { data, info } = await sharp(`${IN}/yhpuseal-pack.jpeg`)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const dark = (i) => data[i] < 30 && data[i + 1] < 30 && data[i + 2] < 30;
  const seen = new Uint8Array(width * height);
  const stack = [];
  for (let x = 0; x < width; x += 1) stack.push(x, (height - 1) * width + x);
  for (let y = 0; y < height; y += 1) stack.push(y * width, y * width + width - 1);
  while (stack.length) {
    const p = stack.pop();
    if (seen[p] || !dark(p * 4)) continue;
    seen[p] = 1;
    data[p * 4 + 3] = 0;
    const x = p % width;
    if (x > 0) stack.push(p - 1);
    if (x < width - 1) stack.push(p + 1);
    if (p >= width) stack.push(p - width);
    if (p < width * (height - 1)) stack.push(p + width);
  }
  await sharp(data, { raw: { width, height, channels: 4 } })
    .trim()
    .png()
    .toFile(`${OUT}/yhpuseal-2925.png`);
}

writeFileSync(
  `${OUT}/sources.txt`,
  [
    "yhcoat-1000|OYH technical data sheet YHCoat-1000 (Feb. 2025), embedded pictures of Part B and Part A",
    "yhcoat-2060|OYH technical data sheet YHCoat-2060, embedded picture",
    "yhcolorwall-5300|OYH technical data sheet YHColorWall-5300, embedded picture",
    "yhrepair-2516|OYH technical data sheet YHRepair-2516, embedded picture",
    "yhpuseal-2925|picture supplied by the owner on 2026-11-06 (WhatsApp)",
  ].join("\n") + "\n",
);
console.log("prepared 5 Oriental Yuhong pack pictures");
