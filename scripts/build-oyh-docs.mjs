/**
 * Pages and sizes of every Oriental Yuhong PDF under public/tds/oriental-yuhong,
 * for the documentation section on /oriental-yuhong (src/config/oyh-docs.ts
 * names and groups them; this file measures them). Written to
 * src/config/oyh-docs.json; `--check` fails if a file was added, removed or
 * changed without rerunning (`npm run check`).
 *
 *   node scripts/build-oyh-docs.mjs            # write
 *   node scripts/build-oyh-docs.mjs --check    # verify, exit 1 if stale
 *
 * Needs poppler's pdfinfo on the PATH.
 */
import { execFileSync } from "node:child_process";
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const ROOT = "public/tds/oriental-yuhong";
const OUT = "src/config/oyh-docs.json";

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const file = path.join(dir, name);
    if (statSync(file).isDirectory()) out.push(...walk(file));
    else if (name.endsWith(".pdf")) out.push(file);
  }
  return out.sort();
}

const manifest = {};
for (const file of walk(ROOT)) {
  const info = execFileSync("pdfinfo", [file]).toString();
  const pages = Number(/Pages:\s+(\d+)/.exec(info)?.[1] ?? 0);
  if (!pages) throw new Error(`${file}: pdfinfo found no page count`);
  manifest[`/${file.replace(/^public\//, "")}`] = {
    pages,
    bytes: statSync(file).size,
  };
}

const json = JSON.stringify(manifest, null, 2) + "\n";
if (process.argv.includes("--check")) {
  let current = "";
  try {
    current = readFileSync(OUT, "utf8");
  } catch {
    // missing: stale
  }
  if (current !== json) {
    console.error(`${OUT} is stale: run node scripts/build-oyh-docs.mjs`);
    process.exit(1);
  }
  console.log(
    `oyh docs: ${Object.keys(manifest).length} PDFs, manifest current`,
  );
} else {
  writeFileSync(OUT, json);
  console.log(
    `oyh docs: ${Object.keys(manifest).length} PDFs written to ${OUT}`,
  );
}
