/**
 * The renders of OYH's "Solutions for Below-Grade Structures" manual
 * (assets/source/oyh-hdpe/below-grade-structures.pdf, 16 A3 spreads), lifted
 * out of the PDF as they are embedded and written as sRGB WebP at 1600 px
 * for /oriental-yuhong/below-grade-waterproofing. Nothing is generated,
 * cropped or retouched: `pdfimages -j` copies the embedded JPEG byte for
 * byte, sharp only converts CMYK to sRGB and resizes (docs/IMAGE-PROVENANCE.md 3p).
 *
 *   node scripts/build-oyh-below-grade-pictures.mjs
 *
 * Needs poppler's pdfimages on the PATH (brew install poppler).
 */
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readdirSync, statSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import sharp from "sharp";

const PDF = "assets/source/oyh-hdpe/below-grade-structures.pdf";
const OUT = "public/images/oriental-yuhong/below-grade";
const WIDTH = 1600;

/** Output name -> the PDF page and the picture's rank by size on it
 * (0 = largest). The cover spread's largest picture is the head office
 * photograph that belongs to page 2; the site photograph is the second. */
const PAGES = {
  cover: { page: 1, rank: 1 },
  why: { page: 3 },
  "polymer-basement": { page: 4 },
  "bituminous-basement": { page: 8 },
  "peach-blossom": { page: 10 },
  tunnel: { page: 11 },
  maintenance: { page: 14 },
  "leak-repair": { page: 15 },
};

mkdirSync(OUT, { recursive: true });
const work = mkdtempSync(path.join(tmpdir(), "oyh-bg-"));
const manifest = {};

for (const [name, { page, rank = 0 }] of Object.entries(PAGES)) {
  const dir = path.join(work, String(page));
  mkdirSync(dir, { recursive: true });
  // -png: every embedded picture decoded losslessly (the JPEGs are CMYK
  // with soft masks beside them; sharp reads PNG, not PPM/PGM).
  execFileSync("pdfimages", [
    "-png",
    "-f",
    String(page),
    "-l",
    String(page),
    PDF,
    path.join(dir, "img"),
  ]);
  const files = readdirSync(dir)
    .map((file) => path.join(dir, file))
    .filter((file) => /\.png$/i.test(file));
  // The render is the largest colour picture on the page by pixel count
  // (a soft mask has the same size as its picture but one channel).
  const metas = await Promise.all(
    files.map(async (file) => ({ file, meta: await sharp(file).metadata() })),
  );
  const pick = metas
    .filter(({ meta }) => (meta.channels ?? 0) >= 3)
    .sort(
      (a, b) => b.meta.width * b.meta.height - a.meta.width * a.meta.height,
    )[rank];
  if (!pick) throw new Error(`page ${page}: no picture found`);
  const out = path.join(OUT, `${name}.webp`);
  const info = await sharp(pick.file)
    .toColourspace("srgb")
    .resize({ width: WIDTH, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(out);
  manifest[name] = {
    page,
    source: `${pick.meta.width}x${pick.meta.height} ${pick.meta.space}`,
    width: info.width,
    height: info.height,
    bytes: statSync(out).size,
  };
  console.log(
    `${name}: page ${page}, ${pick.meta.width}x${pick.meta.height} ${pick.meta.space} -> ${info.width}x${info.height}, ${Math.round(info.size / 1024)} KB`,
  );
}
rmSync(work, { recursive: true, force: true });
console.log(JSON.stringify(manifest, null, 2));
