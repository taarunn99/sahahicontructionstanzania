// Fact check for src/config/waterproofing-selector.ts: every quote must be a
// line of that product's own data sheet extraction (whereToUse for picks,
// notFor for cautions), character for character.
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const source = fs.readFileSync(
  path.join(root, "src/config/waterproofing-selector.ts"),
  "utf8",
);

// Resolve the shared constants, then pull every { brand, slug, quote } object.
const constants = Object.fromEntries(
  [...source.matchAll(/^const (\w+) =\s*\n?\s*"([^"]+)";/gm)].map((m) => [
    m[1],
    m[2],
  ]),
);
const picks = [];
for (const m of source.matchAll(
  /brand: "([\w-]+)",\s*slug: "([\w-]+)",\s*quote:\s*(?:"([^"]+)"|(\w+))(,\s*note:)?/g,
)) {
  picks.push({
    brand: m[1],
    slug: m[2],
    quote: m[3] ?? constants[m[4]],
    caution: Boolean(m[5]),
  });
}

const problems = [];
for (const pick of picks) {
  const file = path.join(root, "src/content", pick.brand, `${pick.slug}.json`);
  if (!fs.existsSync(file)) {
    problems.push(`${pick.brand}/${pick.slug}: no content file`);
    continue;
  }
  const content = JSON.parse(fs.readFileSync(file, "utf8"));
  const lines = pick.caution
    ? (content.notFor ?? [])
    : (content.whereToUse ?? []);
  if (!pick.quote || !lines.includes(pick.quote)) {
    problems.push(
      `${pick.brand}/${pick.slug}: quote not in ${pick.caution ? "notFor" : "whereToUse"}: "${pick.quote}"`,
    );
  }
}

if (picks.length < 30) problems.push(`only ${picks.length} picks parsed`);
if (problems.length) {
  console.error(`waterproofing selector: ${problems.length} problem(s)`);
  for (const p of problems) console.error("  " + p);
  process.exit(1);
}
console.log(
  `waterproofing selector: ${picks.length} quotes match their data sheets`,
);
