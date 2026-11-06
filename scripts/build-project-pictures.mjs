/**
 * Builds the project card pictures.
 *   node scripts/build-project-pictures.mjs
 * Masters: assets/source/projects/<slug>.(png|jpg), gitignored.
 * Output:  public/images/projects/<slug>.webp, 4:3, 1200 wide at most.
 * Sources: docs/IMAGE-PROVENANCE.md section 3d.
 */
import { mkdirSync, readdirSync, statSync } from "node:fs";
import { parse } from "node:path";
import sharp from "sharp";

const SRC = "assets/source/projects";
const OUT = "public/images/projects";
mkdirSync(OUT, { recursive: true });

for (const file of readdirSync(SRC)) {
  const { name, ext } = parse(file);
  if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;
  const out = `${OUT}/${name}.webp`;
  const source = sharp(`${SRC}/${file}`).rotate();
  const { width } = await source.metadata();
  const target = Math.min(width, 1200);
  await source
    .resize(target, Math.round((target * 3) / 4), { fit: "cover" })
    .webp({ quality: 74, effort: 6 })
    .toFile(out);
  console.log(out, `${Math.round(statSync(out).size / 1024)} KB`);
}
