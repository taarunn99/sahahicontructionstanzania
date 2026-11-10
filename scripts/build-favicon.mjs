/**
 * Rebuilds every icon and the Open Graph image from the extracted brand
 * SVGs (run scripts/extract-brand-svgs.py first, or `npm run assets:brand`).
 *
 * The icons live in public/ at fixed URLs, declared in layout.tsx: Next's
 * file-convention icons get a ?dpl=<deployment> suffix that changes on every
 * deploy, which slows Google's favicon refresh (owner, 2026-11-10: the SERP
 * still showed Namecheap's parking-page favicon).
 *   public/icon.svg        the Sahihi tick mark, vector
 *   public/favicon.ico     16/32/48 px layers (Google asks for a multiple of 48)
 *   public/icon.png        512 px raster for Google's favicon service
 *   public/apple-icon.png  180 px on the light ground; also the
 *                           Organization schema logo (needs >= 112 px square
 *                           at a stable path)
 *   src/app/opengraph-image.jpg  1200x630 JPG (Next ignores .webp here):
 *                           the full lockup on Chalk inside a Sky frame. The lockup
 *                           is vector outlines, so no font is needed.
 */
import { copyFile, readFile, writeFile } from "node:fs/promises";

import sharp from "sharp";

const SKY = "#0078a8";
const CHALK = "#fafbf8";

await copyFile("public/brand/sahihi-mark.svg", "public/icon.svg");
const mark = await readFile("public/brand/sahihi-mark.svg");

const sizes = [16, 32, 48];
const pngs = await Promise.all(
  sizes.map((s) => sharp(mark, { density: 600 }).resize(s, s).png().toBuffer()),
);
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
const entries = [];
let offset = 6 + 16 * sizes.length;
for (let i = 0; i < sizes.length; i++) {
  const e = Buffer.alloc(16);
  e.writeUInt8(sizes[i], 0);
  e.writeUInt8(sizes[i], 1);
  e.writeUInt16LE(1, 4);
  e.writeUInt16LE(32, 6);
  e.writeUInt32LE(pngs[i].length, 8);
  e.writeUInt32LE(offset, 12);
  offset += pngs[i].length;
  entries.push(e);
}
await writeFile(
  "public/favicon.ico",
  Buffer.concat([header, ...entries, ...pngs]),
);
console.log(`favicon.ico ${offset} bytes`);

await sharp(mark, { density: 1200 })
  .resize(512, 512)
  .png()
  .toFile("public/icon.png");
console.log("icon.png 512px");

// Apple icon: iOS fills transparency with black, so seat the mark on chalk.
const appleMark = await sharp(mark, { density: 1200 })
  .resize(140, 140)
  .png()
  .toBuffer();
await sharp({
  create: { width: 180, height: 180, channels: 4, background: CHALK },
})
  .composite([{ input: appleMark, gravity: "centre" }])
  .png()
  .toFile("public/apple-icon.png");
console.log("apple-icon.png 180px");

// Open Graph: full lockup (with tagline) on a Chalk card set in the Sky
// stage - the yellow disc and the blue wordmark both need a near-white
// ground to read.
const lockup = await sharp(await readFile("public/brand/sahihi-logo.svg"), {
  density: 900,
})
  .resize({ width: 860 })
  .png()
  .toBuffer();
const card = await sharp({
  create: { width: 1040, height: 470, channels: 3, background: CHALK },
})
  .png()
  .toBuffer();
await sharp({
  create: { width: 1200, height: 630, channels: 3, background: SKY },
})
  .composite([
    { input: card, gravity: "centre" },
    { input: lockup, gravity: "centre" },
  ])
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile("src/app/opengraph-image.jpg");
await writeFile(
  "src/app/opengraph-image.alt.txt",
  "Sahihi Construction Chemicals Limited logo with the line Enhance Your Building Life\n",
);
console.log("opengraph-image.jpg 1200x630");
