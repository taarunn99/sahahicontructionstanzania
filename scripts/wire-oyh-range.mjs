/**
 * Wires Oriental Yuhong's range (OYH's own data sheets, owner's folder
 * "OYH Docs - TDS and MSDS", 2026-11-26) into the site from one prepared
 * record per product in assets/source/oyh-range/<slug>.json (gitignored;
 * written by the readers of the sheets, every string verbatim from the PDF).
 *
 *   node scripts/wire-oyh-range.mjs
 *
 * Writes:
 *  - src/config/oyh-products.json        catalogue rows (catalogue.ts pushes them)
 *  - src/config/oriental-yuhong-tds.json  the data sheet manifest (merged)
 *  - generated blocks (between markers) in src/config/oriental-yuhong.ts
 *    (coverage models, in-use pictures), src/config/seo/oyh.ts (slugs and
 *    rows) and src/config/product-one-liners.ts
 *  - assets/source/oriental-yuhong-packshots/<slug>.png + sources.txt lines:
 *    the product picture lifted out of its own data sheet with its mask
 *    (then `node scripts/build-packshots.mjs`), never generated
 *  - public/images/oyh/<slug>.webp: OYH's application photograph from the
 *    sheet, where it has one
 * The content itself is src/content/oriental-yuhong/<slug>.json (checked
 * against the PDF by scripts/verify-brand-content.mjs in `npm test`).
 */
import { execFileSync } from "node:child_process";
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import sharp from "sharp";

const IN = "assets/source/oyh-range";
const TDS_DIR = "public/tds/oriental-yuhong";
const PACK_DIR = "assets/source/oriental-yuhong-packshots";
const IN_USE_DIR = "public/images/oyh";
const FETCHED = "2026-11-26";
const SOURCE = "supplied by the owner, OYH's folder of 2026-11-26";

const records = readdirSync(IN)
  .filter((name) => name.endsWith(".json"))
  .map((name) => JSON.parse(readFileSync(join(IN, name), "utf8")));

// The family order of src/config/oyh-range.ts decides the catalogue order.
const rangeSource = readFileSync("src/config/oyh-range.ts", "utf8");
const order = [
  ...rangeSource.matchAll(/^\s+"?([a-z0-9-]+)"?: "[a-z]+",$/gm),
].map((m) => m[1]);
const rank = (slug) => {
  const at = order.indexOf(slug);
  if (at < 0) throw new Error(`oyh-range.ts has no family for ${slug}`);
  return at;
};
records.sort((a, b) => rank(a.slug) - rank(b.slug));

const q = (s) => JSON.stringify(s);

/* ---- catalogue rows ------------------------------------------------- */
const rows = records.map((r) => ({
  slug: r.slug,
  brand: "oriental-yuhong",
  line: "oriental-yuhong",
  name: r.name,
  sourceName: `${r.name} (OYH data sheet)`,
  type: r.type,
  summary: r.summary,
  ...(r.consumption ? { consumption: r.consumption } : {}),
  packs: r.packs ?? [],
  ...(r.colours?.length ? { colours: r.colours } : {}),
  ref: "OYH-TDS",
}));
writeFileSync(
  "src/config/oyh-products.json",
  JSON.stringify(rows, null, 2) + "\n",
);

/* ---- data sheet manifest -------------------------------------------- */
const manifestFile = "src/config/oriental-yuhong-tds.json";
const manifest = JSON.parse(readFileSync(manifestFile, "utf8"));
for (const r of records) {
  const file = `${TDS_DIR}/${r.slug}.pdf`;
  const info = execFileSync("pdfinfo", [file]).toString();
  manifest[r.slug] = {
    file: `/tds/oriental-yuhong/${r.slug}.pdf`,
    title: r.name,
    pages: Number(/Pages:\s+(\d+)/.exec(info)[1]),
    bytes: readFileSync(file).length,
    fetched: FETCHED,
    source: r.edition?.startsWith("English translation")
      ? "English translation by Sahihi, 2026-11-26, of the Chinese sheet in OYH's folder"
      : SOURCE,
    ...(r.edition ? { edition: r.edition } : {}),
  };
}
writeFileSync(manifestFile, JSON.stringify(manifest, null, 2) + "\n");

/* ---- generated blocks ----------------------------------------------- */
function putBlock(file, name, body, anchor) {
  const start = `  // --- generated: ${name} (scripts/wire-oyh-range.mjs) ---`;
  const end = `  // --- end generated: ${name} ---`;
  let text = readFileSync(file, "utf8");
  const block = `${start}\n${body}${end}\n`;
  const a = text.indexOf(start);
  if (a >= 0) {
    const b = text.indexOf(end, a) + end.length + 1;
    text = text.slice(0, a) + block + text.slice(b);
  } else {
    const at = text.indexOf(anchor);
    if (at < 0) throw new Error(`${file}: anchor not found: ${anchor}`);
    text = text.slice(0, at) + block + text.slice(at);
  }
  writeFileSync(file, text);
}

const ts = (value, indent) =>
  JSON.stringify(value, null, 2)
    .replace(/"([a-zA-Z_][a-zA-Z0-9_]*)":/g, "$1:")
    .split("\n")
    .map((line, i) => (i ? indent + line : line))
    .join("\n");

// coverage models: `kind` must stay the first key (verify-brand-content.mjs
// finds a model by `"slug": {\n    kind` and reads its `source`).
let coverage = "";
for (const r of records) {
  if (!r.coverage) continue;
  const { kind, ...rest } = r.coverage;
  coverage += `  ${q(r.slug)}: ${ts({ kind, ...rest }, "  ")},\n`;
}
putBlock(
  "src/config/oriental-yuhong.ts",
  "OYH range coverage",
  coverage,
  "};\n\nconst oyhSeoRow",
);

/* ---- pictures ------------------------------------------------------- */
async function cutout(pdf, page, index, mask) {
  const dir = join(tmpdir(), `oyh-wire-${process.pid}`);
  mkdirSync(dir, { recursive: true });
  execFileSync("pdfimages", [
    "-png",
    "-f",
    page,
    "-l",
    page,
    pdf,
    join(dir, "i"),
  ]);
  const pad = (n) => String(n).padStart(3, "0");
  const picture = sharp(join(dir, `i-${pad(index)}.png`)).toColourspace("srgb");
  if (mask == null) return picture.png().toBuffer();
  const { width, height } = await picture.metadata();
  const alpha = await sharp(join(dir, `i-${pad(mask)}.png`))
    .resize(width, height)
    .greyscale()
    .raw()
    .toBuffer();
  return sharp(await picture.removeAlpha().toBuffer())
    .joinChannel(alpha, { raw: { width, height, channels: 1 } })
    .png()
    .toBuffer()
    .then((buffer) => sharp(buffer).trim().png().toBuffer());
}

mkdirSync(PACK_DIR, { recursive: true });
mkdirSync(IN_USE_DIR, { recursive: true });
const sourcesFile = `${PACK_DIR}/sources.txt`;
let sources = readFileSync(sourcesFile, "utf8");
let inUse = "";
let packs = 0;
let photos = 0;
/**
 * A picture the owner supplied as a file (OYH's own product pictures, found
 * online, 2026-11-26: assets/source/owner-supplied/oyh/pictures-2026-11-26/,
 * gitignored). A file with its own transparency is trimmed to the product;
 * an opaque photograph is kept whole. Nothing is redrawn or cut out by hand.
 */
const SUPPLIED_DIR = "assets/source/owner-supplied/oyh/pictures-2026-11-26";
async function supplied(file, crop) {
  let image = sharp(join(SUPPLIED_DIR, file)).toColourspace("srgb");
  // A plain crop of an opaque picture whose subject sits small in the frame
  // (PMH-6010's roll on its grey ground): the box is in the file's pixels.
  if (crop) image = sharp(await image.extract(crop).toBuffer());
  const { hasAlpha, width, height } = await image.metadata();
  if (!hasAlpha) return image.png().toBuffer();
  // Trim to the alpha channel's bounding box (sharp's trim compares colour
  // too, and the colour under a transparent pixel is anything). A column or
  // row counts when more than a few of its pixels are opaque, so the stray
  // pixels some files carry (YHPUgrout-2104) do not widen the box.
  const alpha = await image.clone().extractChannel("alpha").raw().toBuffer();
  const cols = new Array(width).fill(0);
  const rows = new Array(height).fill(0);
  for (let y = 0; y < height; y++)
    for (let x = 0; x < width; x++)
      if (alpha[y * width + x] > 128) {
        cols[x] += 1;
        rows[y] += 1;
      }
  const span = (counts, min) => {
    let first = -1;
    let last = -1;
    counts.forEach((n, i) => {
      if (n > min) {
        if (first < 0) first = i;
        last = i;
      }
    });
    return [first, last];
  };
  const [left, right] = span(cols, Math.max(2, height / 500));
  const [top, bottom] = span(rows, Math.max(2, width / 500));
  if (right < 0) throw new Error(`${file}: fully transparent`);
  return image
    .extract({ left, top, width: right - left + 1, height: bottom - top + 1 })
    .png()
    .toBuffer();
}
/**
 * The site's own illustration of a pack (owner, 2026-11-26, "generate 16
 * product images": OYH has no picture of these). A gpt_image_2_6 render of
 * a plain container or profile on white, no logo, no label, no text, master
 * in assets/source/generated/<id>.png (IMAGE-PROVENANCE 3x). Trimmed to the
 * object (the ground is near white, hence the threshold). The page tags it
 * "Illustration" (OYH_ILLUSTRATED in src/config/oyh-range.ts).
 */
const generated = (id) =>
  sharp(`assets/source/generated/${id}.png`)
    .toColourspace("srgb")
    .trim({ threshold: 24 })
    .png()
    .toBuffer();
const picture = (pdf, spec) =>
  spec.generated
    ? generated(spec.generated)
    : spec.file
    ? supplied(spec.file, spec.crop)
    : cutout(pdf, spec.pdfPage, spec.imageIndex, spec.maskIndex);
const sourceLine = (r, spec) =>
  spec.generated
    ? `${r.slug}|site illustration of the pack, generated (Higgsfield gpt_image_2_6, job ${spec.job}, master ${spec.generated}), IMAGE-PROVENANCE 3x`
    : spec.file
    ? `${r.slug}|OYH's own picture of ${r.name}, supplied by the owner on ${spec.supplied ?? "2026-11-26"} (${spec.file})`
    : `${r.slug}|OYH technical data sheet ${r.name}, embedded picture (page ${spec.pdfPage})`;

for (const r of records) {
  const pdf = `${TDS_DIR}/${r.slug}.pdf`;
  if (r.packshot) {
    const png = await picture(pdf, r.packshot);
    writeFileSync(`${PACK_DIR}/${r.slug}.png`, png);
    const line = sourceLine(r, r.packshot);
    if (!sources.includes(`${r.slug}|`)) sources += line + "\n";
    packs += 1;
  }
  if (r.inUse) {
    const png = await picture(pdf, r.inUse);
    await sharp(png)
      .flatten({ background: "#ffffff" })
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(`${IN_USE_DIR}/${r.slug}.webp`);
    inUse += `  ${q(r.slug)}: {\n    src: ${q(`/images/oyh/${r.slug}.webp`)},\n    alt: ${q(r.inUse.alt)},\n  },\n`;
    photos += 1;
  }
}
writeFileSync(sourcesFile, sources);
putBlock(
  "src/config/oriental-yuhong.ts",
  "OYH range in-use pictures",
  inUse,
  "};\n\n/** Names the product is asked for by",
);

/* ---- SEO rows ------------------------------------------------------- */
let slugs = "";
let seo = "";
for (const r of records) {
  slugs += `  ${q(r.slug)},\n`;
  // The title carries the query itself (SEO-STRATEGY 5.1b: every query word
  // in the title, 35 to 60 characters); the composed pattern would drop long
  // type words. "| Sahihi" goes when the budget is short.
  const words = r.seo.query.replace(/\b[a-z]/g, (l) => l.toUpperCase());
  const base = `${r.name} - ${words}`;
  const title = base.length + 9 <= 60 ? `${base} | Sahihi` : base;
  if (title.length > 60 || title.length < 35)
    throw new Error(`${r.slug}: title ${title.length} chars: ${title}`);
  const row = { ...r.seo, titleOverride: title };
  seo += `  ${q(r.slug)}: ${ts(row, "  ")},\n`;
}
putBlock("src/config/seo/oyh.ts", "OYH range slugs", slugs, "] as const;");
putBlock(
  "src/config/seo/oyh.ts",
  "OYH range rows",
  seo,
  "};\n\n/** The row for a slug",
);

/* ---- one-liners ----------------------------------------------------- */
let liners = "";
for (const r of records) liners += `  ${q(r.slug)}: ${q(r.oneLiner)},\n`;
putBlock(
  "src/config/product-one-liners.ts",
  "OYH range",
  liners,
  "};\n\n/**\n * Picture for the products with no official pack shot",
);

console.log(
  `oyh range: ${records.length} products, ${packs} pack pictures, ${photos} in-use photographs`,
);
