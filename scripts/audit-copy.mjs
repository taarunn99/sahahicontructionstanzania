/**
 * Copy and palette gate. Exits 1 on any offender. Run before every push
 * (`npm run check` runs it after the build).
 *
 *  1. No em or en dashes anywhere in src (owner ruling: they read as AI
 *     writing). Plain hyphen only.
 *  2. The line colour is never a text colour: no `text-line` class.
 *  3. No price leaks: no currency amounts in src (prices are never shown).
 *  4. No hex colour literal in components (tokens only). The WebGL button
 *     mirror and the SVG brand assets are the documented exceptions.
 *  5. Banned phrases from the voice rules.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = "src";
const HEX_ALLOWED = new Set([
  "src/app/globals.css",
  "src/app/layout.tsx", // viewport themeColor must be a literal
  "src/components/ui/brand-button.tsx",
  "src/components/ui/specular-button/specular-button.tsx",
  "src/components/ui/specular-button/specular-button.css",
]);
const BANNED = [
  "premium quality",
  "wide range",
  "best in class",
  "one-stop",
  "world-class",
  "in today's world",
  "when it comes to",
];

const files = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (/\.(tsx?|css|mjs|json|txt)$/.test(name)) files.push(path);
  }
})(ROOT);

const problems = [];
for (const file of files) {
  const rel = relative(".", file);
  const lines = readFileSync(file, "utf8").split("\n");
  lines.forEach((line, i) => {
    const at = `${rel}:${i + 1}`;
    if (/[—–]/.test(line)) problems.push(`${at}  long dash`);
    if (/\btext-line\b/.test(line))
      problems.push(`${at}  line colour used as text`);
    if (
      /\b(TSH|TZS|TSh|Tsh|USD|KES|UGX)\s?[\d,]{3,}|[\d,]{4,}\s?(TSH|TZS|TSh|Tsh|\/=)/.test(
        line,
      )
    )
      problems.push(`${at}  possible price`);
    if (
      !HEX_ALLOWED.has(rel) &&
      /#[0-9a-fA-F]{6}\b/.test(line) &&
      !/^\s*(\/\/|\*|\/\*)/.test(line)
    )
      problems.push(`${at}  hex colour literal outside the token file`);
    const lower = line.toLowerCase();
    if (!/^\s*(\/\/|\*|\/\*)/.test(line))
      for (const phrase of BANNED)
        if (lower.includes(phrase))
          problems.push(`${at}  banned phrase "${phrase}"`);
  });
}

if (problems.length) {
  console.error(
    `audit-copy: ${problems.length} problem(s)\n` + problems.join("\n"),
  );
  process.exit(1);
}
console.log(`audit-copy: ${files.length} files clean`);
