/**
 * Builds the web versions of the manufacturers' own pack shots.
 *   node scripts/build-packshots.mjs
 *
 * Source: assets/source/<brand>-packshots/<slug>.(png|jpg), downloaded
 * unaltered from the manufacturer's media server; the URL of each is in
 * sources.txt beside them and in docs/IMAGE-PROVENANCE.md.
 * Output: public/products/<brand>/<slug>.webp (900 px square, the pack
 * centred on white, never retouched) and src/config/packshots.json.
 *
 * One more output from the same source file, added 2026-11-11 for the sale
 * page and the Open Graph cards (owner: "removed backgrounds"):
 *   public/products/<brand>/cutout/<slug>.webp  the pack on its own alpha,
 *                                               640 px (the card renderer
 *                                               converts it with sharp)
 * The manufacturers' PNGs already carry the transparency; nothing is cut out
 * by hand or by a model. A source without alpha keeps its white box.
 *
 * These are NEVER generated images: a model would invent the label.
 */
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import sharp from "sharp";

const BRANDS = {
  mapei: "https://cdnmedia.mapei.com/images/",
  "x-calibur": "",
  "oriental-yuhong": "",
};
const SIZE = 900;
const CUTOUT = 640;
const manifest = {};

for (const [brand, base] of Object.entries(BRANDS)) {
  const dir = `assets/source/${brand}-packshots`;
  let files;
  try {
    files = readdirSync(dir).filter((name) =>
      /\.(png|jpe?g|webp)$/i.test(name),
    );
  } catch {
    continue;
  }
  const sources = Object.fromEntries(
    readFileSync(`${dir}/sources.txt`, "utf8")
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        const [slug, rel] = line.split("|");
        return [slug, base + rel];
      }),
  );
  mkdirSync(`public/products/${brand}/cutout`, { recursive: true });
  manifest[brand] = {};
  for (const name of files.sort()) {
    const slug = name.replace(/\.[^.]+$/, "");
    const out = `public/products/${brand}/${slug}.webp`;
    await sharp(`${dir}/${name}`)
      .resize(SIZE, SIZE, {
        fit: "contain",
        background: { r: 255, g: 255, b: 255, alpha: 1 },
      })
      .flatten({ background: "#ffffff" })
      .webp({ quality: 88, effort: 6 })
      .toFile(out);
    // The cut-out: the source's own alpha, kept.
    const { hasAlpha } = await sharp(`${dir}/${name}`).metadata();
    const cutout = sharp(`${dir}/${name}`)
      .ensureAlpha()
      .resize(SIZE, SIZE, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      });
    // The web cut-out at 640 px: the lineup shows a pack at about 350 px at
    // most, and 20 of them are uploaded to the GPU at once.
    await cutout
      .clone()
      .resize(CUTOUT, CUTOUT)
      .webp({ quality: 88, effort: 6 })
      .toFile(`public/products/${brand}/cutout/${slug}.webp`);
    manifest[brand][slug] = {
      src: `/products/${brand}/${slug}.webp`,
      cutout: `/products/${brand}/cutout/${slug}.webp`,
      alpha: Boolean(hasAlpha),
      width: SIZE,
      height: SIZE,
      source: sources[slug] ?? null,
    };
  }
  console.log(`${brand}: ${Object.keys(manifest[brand]).length} pack shots`);
}

writeFileSync(
  "src/config/packshots.json",
  JSON.stringify(manifest, null, 2) + "\n",
);
