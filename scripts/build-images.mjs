/**
 * Builds the web derivatives of the generated photographs.
 *   node scripts/build-images.mjs
 * Masters: assets/source/generated/<ID>.png (4K, gitignored).
 * Output:  public/images/<set>/<slug>.webp, one compression pass.
 * The table mirrors docs/IMAGE-QUEUE.md section 5; provenance for every
 * ID is in docs/IMAGE-PROVENANCE.md.
 */
import { mkdirSync, statSync } from "node:fs";
import { dirname } from "node:path";
import sharp from "sharp";

const SRC = "assets/source/generated";
const OUT = "public/images";

/** [id, output, width, quality, crop] - crop is a fraction trimmed off the right edge. */
const JOBS = [
  ["H1", "hero/home.webp", 2880, 84],
  ["H2", "hero/home-portrait.webp", 1200, 86],
  ["H3", "hero/mapei.webp", 2880, 84],
  ["L1", "lines/tile-adhesives-grouts.webp", 1600, 78],
  ["L2", "lines/primers-levelling.webp", 1600, 86],
  ["L3", "lines/concrete-repair.webp", 1600, 86],
  ["L4", "lines/resin-flooring.webp", 1600, 86],
  // The right 5% carries a distant water tank with marks on it: trimmed.
  ["L5", "lines/waterproofing.webp", 1600, 86, 0.05],
  ["S1", "solutions/swimming-pool.webp", 1600, 86],
  ["S2", "solutions/water-tank.webp", 1600, 86],
  ["S3", "solutions/structural-strengthening.webp", 1600, 86],
  ["S4", "solutions/sports-court.webp", 1600, 78],
  ["S5", "solutions/tunnel.webp", 1600, 86],
  ["S6", "solutions/car-park.webp", 1600, 86],
  ["M1", "materials/water-bead.webp", 1200, 86],
  ["M2", "materials/resin-gloss.webp", 1200, 86],
  ["M3", "materials/adhesive-ridges.webp", 1200, 76],
  ["M4", "materials/grout-joint.webp", 1200, 86],
  ["C1", "company/supply.webp", 1600, 86],
  ["C2", "company/training.webp", 1600, 86],
  // CMCI fire pages, 2026-11-11 (IMAGE-PROVENANCE 3k).
  ["F1", "fire/spraying.webp", 1600, 84],
  ["F2", "fire/coated-frame.webp", 1600, 84],
  ["F3", "fire/thickness-gauge.webp", 1600, 84],
  // CMCI and X-Calibur product scenes, 2026-11-11 (IMAGE-PROVENANCE 3l).
  ["P01", "scenes/avikote-av-800.webp", 1600, 84],
  ["P02", "scenes/avikote-av-650.webp", 1600, 84],
  ["P03", "scenes/monokote-z-156.webp", 1600, 84],
  ["P04", "scenes/monokote-z-146.webp", 1600, 84],
  ["P05", "scenes/monokote-z-106-hy.webp", 1600, 84],
  ["P06", "scenes/monokote-z-106.webp", 1600, 84],
  ["P07", "scenes/monokote-mk-6-hy.webp", 1600, 84],
  ["P08", "scenes/monokote-mk-6s.webp", 1600, 84],
  ["P09", "scenes/aquakote.webp", 1600, 84],
  ["P10", "scenes/monokote-accelerator.webp", 1600, 84],
  ["P11", "scenes/fr-bonding-agent.webp", 1600, 84],
  ["P12", "scenes/x-tech-sbr-bond.webp", 1600, 84],
  ["P13", "scenes/x-tech-epoxyfloor-sl1.webp", 1600, 84],
  ["P14", "scenes/x-prime-gp.webp", 1600, 84],
  ["P15", "scenes/x-shield-flexpruf.webp", 1600, 84],
  ["P16", "scenes/x-seal-ps800.webp", 1600, 84],
  ["P17", "scenes/x-seal-universal-primer.webp", 1600, 84],
  ["P18", "scenes/x-prime-gp2.webp", 1600, 84],
];

for (const [id, output, width, quality, crop = 0] of JOBS) {
  const file = `${OUT}/${output}`;
  mkdirSync(dirname(file), { recursive: true });
  let image = sharp(`${SRC}/${id}.png`);
  const meta = await image.metadata();
  if (crop)
    image = image.extract({
      left: 0,
      top: 0,
      width: Math.round(meta.width * (1 - crop)),
      height: meta.height,
    });
  const info = await image
    .resize({ width })
    .webp({ quality, effort: 6 })
    .toFile(file);
  console.log(
    `${id}  ${output}  ${info.width}x${info.height}  ${Math.round(statSync(file).size / 1024)} KB`,
  );
}
