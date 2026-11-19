/**
 * The one picture on the X-Calibur antistatic flooring pages: the cutaway
 * render of the X-Tech AntiStatic SLE floor from X-Calibur's "High
 * Performance Conductive Floor Systems" brochure (owner, 2026-11-19),
 * lifted out of the PDF as embedded and converted to sRGB. Nothing is
 * generated or retouched. The brochure's three photographs are stock
 * pictures with agency watermarks and are not published
 * (docs/IMAGE-PROVENANCE.md 3q).
 *
 *   node scripts/build-antistatic-pictures.mjs
 *
 * Needs pdfimages (poppler). Writes:
 *   public/images/x-calibur/antistatic/cutaway.webp        1600 wide
 *   public/images/x-calibur/antistatic/cutaway-square.webp 1200 square (cards)
 */
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";

import sharp from "sharp";

const BROCHURE = "public/tds/x-calibur/conductive-floor-systems.pdf";
const OUT = "public/images/x-calibur/antistatic";
const PAGE = 2;

const work = mkdtempSync(path.join(tmpdir(), "antistatic-"));
execFileSync("pdfimages", ["-png", "-f", String(PAGE), "-l", String(PAGE), BROCHURE, path.join(work, "p")]);

// The render is the largest colour picture on the spread after the
// background photograph: pick by size, then by aspect (the render is wider
// than 3:2).
const candidates = [];
for (const name of readdirSync(work)) {
  const file = path.join(work, name);
  const meta = await sharp(file).metadata();
  if ((meta.channels ?? 0) < 3 || !meta.width || !meta.height) continue;
  candidates.push({ file, width: meta.width, height: meta.height });
}
const render = candidates
  .filter((c) => c.width / c.height > 1.5 && c.width > 1500)
  .sort((a, b) => b.width - a.width)[0];
if (!render) throw new Error("render not found on page 2");

mkdirSync(OUT, { recursive: true });
const base = sharp(render.file).toColourspace("srgb");
const wide = await base
  .clone()
  .resize({ width: 1600 })
  .webp({ quality: 82 })
  .toFile(path.join(OUT, "cutaway.webp"));
const square = await base
  .clone()
  .resize({ width: 1200, height: 1200, fit: "cover", position: "centre" })
  .webp({ quality: 82 })
  .toFile(path.join(OUT, "cutaway-square.webp"));
console.log(
  `cutaway.webp ${wide.width}x${wide.height} from ${render.width}x${render.height}; cutaway-square.webp ${square.width}x${square.height}`,
);
rmSync(work, { recursive: true, force: true });
