/**
 * Posters for the blog's 3D heroes: the picture each model was generated
 * from, on true white so it sits in the white hero card. Near-white studio
 * backdrop is lifted to white by a level adjustment. Run after adding a
 * source to assets/source/blog-3d/src.
 */
import { readdirSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SRC = "assets/source/blog-3d/src";
const OUT = "public/models/blog";

for (const file of readdirSync(SRC).filter((name) => name.endsWith(".png"))) {
  const slug = path.basename(file, ".png");
  const output = path.join(OUT, `${slug}.webp`);
  await sharp(path.join(SRC, file))
    .resize(1000, 1000, { fit: "inside" })
    .linear(1.13, -6)
    .webp({ quality: 78 })
    .toFile(output);
  console.log(output);
}
