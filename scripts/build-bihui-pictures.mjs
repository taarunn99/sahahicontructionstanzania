/**
 * Web versions of the pictures cut from the BIHUI catalogue.
 *   node scripts/build-bihui-pictures.mjs
 *
 * Source: assets/source/bihui-pictures/<slug>.png (docs/BIHUI-EXTRACTION.md).
 * Output: public/products/bihui/<slug>.webp, 700 px square on white.
 * WITHHELD in src/config/bihui.ts are skipped: they are not published.
 */
import { mkdirSync, readdirSync } from "node:fs";
import sharp from "sharp";

const SKIP = new Set(["concrete-grinder-working-stand", "water-cooling-parts"]);
const SRC = "assets/source/bihui-pictures";
const OUT = "public/products/bihui";
mkdirSync(OUT, { recursive: true });

for (const file of readdirSync(SRC).filter((name) => name.endsWith(".png"))) {
  const slug = file.replace(/\.png$/, "");
  if (SKIP.has(slug)) continue;
  await sharp(`${SRC}/${file}`)
    .flatten({ background: "#ffffff" })
    .trim({ threshold: 4 })
    .resize(620, 620, { fit: "contain", background: "#ffffff" })
    .extend({ top: 40, bottom: 40, left: 40, right: 40, background: "#ffffff" })
    .webp({ quality: 80 })
    .toFile(`${OUT}/${slug}.webp`);
}
