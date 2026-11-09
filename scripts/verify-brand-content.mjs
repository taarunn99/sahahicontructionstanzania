/**
 * Checks the X-Calibur and Oriental Yuhong pages against the makers' own
 * data sheets. Every string in src/content/<brand>/*.json and every
 * coverage `source` in src/config/<brand>.ts must be found in the text of
 * the PDF that the page offers for download. Part of `npm test`.
 */
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync } from "node:fs";

const norm = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, "");
const pdfText = (file) =>
  ["-raw", "-layout"]
    .map((flag) =>
      execFileSync("pdftotext", [flag, file, "-"], {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      }),
    )
    .join("\n");

let checked = 0;
const failures = [];
for (const brand of ["x-calibur", "oriental-yuhong", "cmci", "vasa"]) {
  const config = readFileSync(`src/config/${brand}.ts`, "utf8");
  for (const name of readdirSync(`src/content/${brand}`)) {
    const slug = name.replace(".json", "");
    const content = JSON.parse(
      readFileSync(`src/content/${brand}/${name}`, "utf8"),
    );
    // One CMCI sheet is a scan: its OCR text, read against the page by eye, is
    // in scripts/fixtures.
    const sheet = `public/tds/${brand}/${slug}`;
    const ocr = `scripts/fixtures/${slug}.ocr.txt`;
    const text = norm(
      existsSync(ocr) ? readFileSync(ocr, "utf8") : pdfText(`${sheet}.pdf`),
    );
    const strings = [
      content.titleAsPrinted,
      content.description,
      content.packaging,
      ...content.whereToUse,
      ...(content.advantages ?? []),
      ...(content.notFor ?? []),
      ...content.standards.map((entry) => entry.standard),
      ...content.technicalData.map((entry) => entry.value),
      ...content.consumption.map((entry) => entry.quote),
      ...(brand === "cmci" ? [content.mixing, content.storage] : []),
    ].filter(Boolean);
    const block = config.slice(config.indexOf(`"${slug}": {\n    kind`));
    const source = /source: "([^"]+)"/.exec(block)?.[1];
    if (config.includes(`"${slug}": {\n    kind`) && source)
      strings.push(source);
    for (const value of strings) {
      checked += 1;
      if (!text.includes(norm(value))) failures.push(`${slug}: "${value}"`);
    }
  }
}

if (failures.length) {
  console.error(
    `verify-brand-content: ${failures.length} not in the data sheet\n` +
      failures.join("\n"),
  );
  process.exit(1);
}
console.log(
  `verify-brand-content: ${checked} strings found in the makers' data sheets`,
);
