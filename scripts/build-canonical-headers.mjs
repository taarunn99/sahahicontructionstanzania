/**
 * One canonical page per PDF, written as HTTP headers.
 *   node scripts/build-canonical-headers.mjs          writes the map
 *   node scripts/build-canonical-headers.mjs --check  fails if the map is stale
 *
 * Why (Search Console, 2026-11-12): Google listed seven Mapei data sheets as
 * "Duplicate without user-selected canonical" because each is a byte copy of
 * the PDF on mapei.com, and it chose Mapei's. A `<link rel="canonical">`
 * cannot go inside a PDF, so Google's documented method is the HTTP header
 *   Link: <https://www.sahihicc.com/mapei/.../kerapoxy>; rel="canonical"
 * on the PDF response, pointing at the page that offers the download
 * (developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).
 * next.config.ts turns this map into one `headers()` rule per file.
 *
 * Every file under public/tds must have exactly one page; the script fails
 * otherwise, and `npm run check` runs it with --check so a new sheet cannot
 * ship without its page.
 */
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT = "src/config/canonical-headers.json";
const og = JSON.parse(readFileSync("src/config/og-manifest.json", "utf8"));
const routes = new Set(Object.keys(og));

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
const files = walk("public/tds")
  .map((f) => f.replace(/^public/, ""))
  .sort();

/** Sports-system files and the brand documents that no manifest maps. */
const SPORTS = "/oriental-yuhong/sports-flooring";
const FIXED = {
  "/tds/oriental-yuhong/pmh-3080-method-statement.pdf":
    "/oriental-yuhong/hdpe-waterproofing",
  "/tds/oriental-yuhong/sports/all-plastic-track.pdf": `${SPORTS}/all-plastic-track`,
  "/tds/oriental-yuhong/sports/artificial-turf.pdf": `${SPORTS}/artificial-turf`,
  "/tds/oriental-yuhong/sports/breathable-track.pdf": `${SPORTS}/breathable-track`,
  "/tds/oriental-yuhong/sports/elastic-acrylic-court-guide.pdf": `${SPORTS}/acrylic-court`,
  "/tds/oriental-yuhong/sports/hybrid-track.pdf": `${SPORTS}/hybrid-track`,
  "/tds/oriental-yuhong/sports/silicon-pu-court.pdf": `${SPORTS}/silicon-pu-court`,
  "/tds/oriental-yuhong/sports/silicone-pu-court-guide.pdf": `${SPORTS}/silicon-pu-court`,
  "/tds/oriental-yuhong/sports/sports-flooring-brochure.pdf": SPORTS,
  "/tds/vasa/spc.pdf": "/vasa/spc-flooring",
  "/tds/vasa/lvt.pdf": "/vasa/lvt-flooring",
  "/tds/vasa/vasa-catalogue.pdf": "/vasa",
  // The company profile is the flip book on the home page.
  "/tds/sahihi-company-profile-2026.pdf": "/",
};

/** A data sheet's page is the product page; Mapei pages sit under a line. */
function pageFor(file) {
  if (FIXED[file]) return FIXED[file];
  const m = file.match(/^\/tds\/([^/]+)\/(docs\/)?([^/]+)\.pdf$/);
  if (!m) return null;
  const [, brand, docs, slug] = m;
  // UL designs, certificate and letter: the fire protection pillar.
  if (brand === "cmci" && docs) return "/cmci/fire-rated-cement";
  if (brand === "mapei") {
    const hit = [...routes].find((r) =>
      new RegExp(`^/mapei/[^/]+/${slug}$`).test(r),
    );
    return hit ?? null;
  }
  return `/${brand}/${slug}`;
}

const map = {};
const problems = [];
for (const file of files) {
  const page = pageFor(file);
  if (!page) problems.push(`${file}: no page`);
  else if (!routes.has(page)) problems.push(`${file}: page ${page} not in og-manifest`);
  else map[file] = page;
}
if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}

const json = JSON.stringify(map, null, 2) + "\n";
if (process.argv.includes("--check")) {
  let current = "";
  try {
    current = readFileSync(OUT, "utf8");
  } catch {}
  if (current !== json) {
    console.error(`${OUT} is stale: run node scripts/build-canonical-headers.mjs`);
    process.exit(1);
  }
  console.log(`canonical headers: ${files.length} PDFs, map current`);
} else {
  writeFileSync(OUT, json);
  console.log(`canonical headers: ${files.length} PDFs written to ${OUT}`);
}
