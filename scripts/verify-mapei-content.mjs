/**
 * Verifies src/content/mapei/*.json against the data sheets they were
 * extracted from. Run by `npm run check`; exits 1 on any failure.
 *
 *   node scripts/verify-mapei-content.mjs [--fix-dashes]
 *
 * Every string that the site prints as Mapei's own words (description,
 * where to use, limits, technical data, consumption, packaging, storage)
 * must be found in the text of the official PDF. Comparison ignores case,
 * whitespace, punctuation and hyphenation, because PDF text extraction
 * breaks lines and columns unpredictably; it does NOT ignore letters or
 * digits, so a changed word or number fails.
 *
 * The check needs assets/source/tds-text (not in git). Where that text is
 * missing the structural checks still run and the quote check is skipped
 * with a notice.
 */
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DIR = "src/content/mapei";
const TEXT = "assets/source/tds-text";
const fixDashes = process.argv.includes("--fix-dashes");
const squash = (text) =>
  String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

let failures = 0;
let checked = 0;
let skipped = 0;
const files = readdirSync(DIR)
  .filter((name) => name.endsWith(".json"))
  .sort();

for (const name of files) {
  const path = join(DIR, name);
  let raw = readFileSync(path, "utf8");
  if (fixDashes) {
    // Site rule: no long dashes anywhere. A hyphen is the same word.
    const fixed = raw
      .replace(/[‐‑‒–—−]/g, "-")
      .replace(/[‘’]/g, "'")
      .replace(/[“”]/g, '\\"');
    if (fixed !== raw) writeFileSync(path, (raw = fixed));
  }
  let data;
  try {
    data = JSON.parse(raw);
  } catch (error) {
    failures += 1;
    console.error(`FAIL ${name}: invalid JSON (${error.message})`);
    continue;
  }
  const slug = name.replace(".json", "");
  const problems = [];
  if (data.slug !== slug)
    problems.push(`slug field "${data.slug}" does not match the file name`);
  for (const key of [
    "titleAsPrinted",
    "description",
    "whereToUse",
    "notFor",
    "standards",
    "technicalData",
    "consumption",
    "packaging",
  ])
    if (data[key] === undefined) problems.push(`missing field ${key}`);

  const txt = join(TEXT, `${slug}.txt`);
  if (!existsSync(txt)) {
    skipped += 1;
  } else {
    const layout = join(TEXT, `${slug}.layout.txt`);
    const haystack = squash(
      readFileSync(txt, "utf8") +
        (existsSync(layout) ? readFileSync(layout, "utf8") : ""),
    );
    const quoted = [
      ["description", data.description],
      ...(data.whereToUse ?? []).map((v, i) => [`whereToUse[${i}]`, v]),
      ...(data.notFor ?? []).map((v, i) => [`notFor[${i}]`, v]),
      ...(data.standards ?? []).map((v, i) => [
        `standards[${i}].value`,
        v.value,
      ]),
      ...(data.technicalData ?? []).flatMap((v, i) => [
        [`technicalData[${i}].label`, v.label],
        [`technicalData[${i}].value`, v.value],
      ]),
      ...(data.consumption ?? []).flatMap((v, i) => [
        [`consumption[${i}].value`, v.value],
        [`consumption[${i}].quote`, v.quote],
      ]),
      ["mixing", data.mixing],
      ["packaging", data.packaging],
      ["storage", data.storage],
    ];
    for (const [field, value] of quoted) {
      if (value === null || value === undefined || value === "") continue;
      checked += 1;
      const needle = squash(value);
      if (needle.length === 0) continue;
      if (haystack.includes(needle)) continue;
      // A value assembled from several table cells: every cell must be there.
      const parts = String(value)
        .split(/\s{2,}|[;|]| - |: /)
        .map(squash)
        .filter((part) => part.length > 1);
      if (parts.length > 1 && parts.every((part) => haystack.includes(part)))
        continue;
      problems.push(
        `${field} not found in the data sheet text: "${String(value).slice(0, 90)}"`,
      );
    }
  }
  if (problems.length) {
    failures += problems.length;
    console.error(`FAIL ${name}\n  ` + problems.join("\n  "));
  }
}

console.log(
  `mapei content: ${files.length} files, ${checked} quoted strings checked against the data sheets, ${failures} failure(s)` +
    (skipped
      ? `, ${skipped} file(s) not quote-checked (data sheet text not on this machine)`
      : ""),
);
process.exit(failures ? 1 : 0);
