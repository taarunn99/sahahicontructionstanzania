/**
 * OYH's two posters for the hub (owner, 2026-11-21, "a request from the
 * director to post this on OYH page"): the WhatsApp originals in
 * assets/source/oriental-yuhong/posters/<name>.jpg (1036 x 1280 and
 * 1031 x 1280), published as issued at public/images/oriental-yuhong/
 * posters/<name>.webp, the same pixels re-encoded (quality 90), no resize,
 * no retouch.
 *
 * A 4K upscale was tried on 2026-11-21 (Higgsfield's bytedance upscaler,
 * 2 credits each) and REJECTED: it redrew the pack labels (YHColorWall-5300
 * read 8800, 8108 read 8105, 25 kg read 28 kg, "bituminous" misspelt) and
 * re-drew the QR code. The owner's condition was that nothing changes in the
 * picture, so the native size is published. The rejected files sit in
 * assets/source/oriental-yuhong/posters/rejected-4k-upscale/ (gitignored).
 *
 *   node scripts/build-oyh-posters.mjs
 */
import { mkdir } from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

const SRC = "assets/source/oriental-yuhong/posters";
const OUT = "public/images/oriental-yuhong/posters";
const POSTERS = ["children-day", "rain-or-shine"];

await mkdir(OUT, { recursive: true });

for (const name of POSTERS) {
  const out = path.join(OUT, `${name}.webp`);
  const info = await sharp(path.join(SRC, `${name}.jpg`))
    .webp({ quality: 90, effort: 6 })
    .toFile(out);
  console.log(
    `${name}: ${out} ${info.width}x${info.height} ${(info.size / 1024).toFixed(0)} KiB`,
  );
}
