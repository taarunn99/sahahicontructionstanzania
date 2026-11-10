// Fact check for the solution selectors (src/config/selector.ts): every quote must be a
// line of that product's own data sheet extraction (whereToUse for picks,
// notFor for cautions), character for character.
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const SELECTOR_FILES = [
  "src/config/waterproofing-selector.ts",
  "src/config/repair-selector.ts",
  "src/config/tile-selector.ts",
];
const problems = [];
let total = 0;
for (const file of SELECTOR_FILES) {
  const source = fs.readFileSync(path.join(root, file), "utf8");

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

  for (const pick of picks) {
    const file = path.join(
      root,
      "src/content",
      pick.brand,
      `${pick.slug}.json`,
    );
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

  const expected = (source.match(/brand: "/g) ?? []).length;
  if (picks.length !== expected)
    problems.push(`${file}: parsed ${picks.length} of ${expected} picks`);
  // A product shown twice in one list would collide on its key.
  for (const m of source.matchAll(
    /(main|details|cautions): \[([\s\S]*?)\n {4}\]/g,
  )) {
    const slugs = [...m[2].matchAll(/slug: "([\w-]+)"/g)].map((s) => s[1]);
    const dup = slugs.find((s, i) => slugs.indexOf(s) !== i);
    if (dup) problems.push(`${file}: ${dup} twice in one ${m[1]} list`);
  }
  total += picks.length;
}
// The 3D build-ups (src/config/selector-stacks.ts) may name only products the
// same situation lists, where the data sheet line is quoted.
{
  const catalogue = fs.readFileSync(
    path.join(root, "src/config/catalogue.ts"),
    "utf8",
  );
  const names = [
    ...catalogue.matchAll(/slug: "([\w-]+)",\s*brand: "[\w-]+",[^}]*?name: "([^"]+)"/g),
  ]
    .map((m) => ({ slug: m[1], name: m[2] }))
    .sort((a, b) => b.name.length - a.name.length);
  const stacks = fs.readFileSync(
    path.join(root, "src/config/selector-stacks.ts"),
    "utf8",
  );
  const listed = {};
  for (const file of SELECTOR_FILES.slice(1)) {
    const source = fs.readFileSync(path.join(root, file), "utf8");
    for (const block of source.split(/\n {2}\{\n {4}slug: /).slice(1)) {
      const place = block.match(/^"([\w-]+)"/)[1];
      listed[place] = new Set(
        [...block.matchAll(/brand: "[\w-]+",\s*slug: "([\w-]+)"/g)].map(
          (m) => m[1],
        ),
      );
    }
  }
  let named = 0;
  for (const m of stacks.matchAll(/\n {2}"?([\w-]+)"?: \[([\s\S]*?)\n {2}\],/g)) {
    const place = m[1];
    if (!listed[place]) {
      problems.push(`selector-stacks: no situation "${place}"`);
      continue;
    }
    for (const label of m[2].matchAll(/label: "([^"]+)"|\("([^"]+)"/g)) {
      let text = label[1] ?? label[2];
      for (const { slug, name } of names) {
        if (!text.includes(name)) continue;
        text = text.replace(name, "");
        named += 1;
        if (!listed[place].has(slug))
          problems.push(`selector-stacks ${place}: ${name} is not listed there`);
      }
    }
  }
  if (named < 30) problems.push(`selector-stacks: only ${named} names found`);
}

if (problems.length) {
  console.error(`solution selectors: ${problems.length} problem(s)`);
  for (const p of problems) console.error("  " + p);
  process.exit(1);
}
console.log(`solution selectors: ${total} quotes match their data sheets`);
