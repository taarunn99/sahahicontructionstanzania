/**
 * Coverage calculator test. Run by `npm run check`; exits 1 on any failure.
 *
 *   node scripts/test-coverage.mjs
 *
 * 1. GROUT: for every cell of the consumption tables Mapei prints for
 *    Keracolor FF and Kerapoxy, the engine's formula result must round to
 *    the printed figure.
 * 2. SEALANT: the joint-volume maths must reproduce Mapei's linear-metres
 *    table for Mapeflex PU 45 FT.
 * 3. ARITHMETIC: hand-worked cases for every model kind, pack rounding and
 *    wastage.
 * 4. SOURCES: every model's `source` sentence must be present in the text
 *    of the data sheet it claims to come from (skipped with a notice when
 *    the extracted text is not on this machine: assets/source is not in git).
 */
import { existsSync, readFileSync } from "node:fs";

import {
  calculate,
  groutPerSquareMetre,
  packsFor,
} from "../src/lib/coverage.ts";
import {
  groutTables,
  mapeiCoverage,
  sealantTable,
} from "../src/config/mapei-coverage.ts";

let failures = 0;
let checks = 0;
const fail = (message) => {
  failures += 1;
  console.error("  FAIL " + message);
};
const near = (a, b, eps = 1e-9) => Math.abs(a - b) <= eps;
const expect = (label, actual, expected, eps) => {
  checks += 1;
  if (!near(actual, expected, eps))
    fail(`${label}: got ${actual}, expected ${expected}`);
};

// ---- 1. Grout tables --------------------------------------------------------
for (const [slug, table] of Object.entries(groutTables)) {
  const factor = mapeiCoverage[slug].factor;
  let exact = 0;
  for (const [size, joint, printed] of table) {
    const [a, b, c] = size.split("x").map(Number);
    const value = groutPerSquareMetre(a, b, c, joint, factor);
    checks += 1;
    // Mapei prints one decimal. The formula result must round to it; a
    // result within 0.005 of a rounding boundary may fall either side.
    const rounded = Math.round(value * 10) / 10;
    const boundary = Math.abs(value * 10 - Math.round(value * 10)) > 0.45;
    if (near(rounded, printed, 1e-9)) exact += 1;
    else if (boundary && Math.abs(value - printed) <= 0.06) exact += 1;
    else
      fail(
        `${slug} ${size} joint ${joint}: formula ${value.toFixed(3)} vs printed ${printed}`,
      );
  }
  console.log(
    `grout ${slug}: ${exact}/${table.length} printed cells reproduced (factor ${factor})`,
  );
}

// ---- 2. Sealant table -------------------------------------------------------
{
  let ok = 0;
  for (const [w, d, m300, m600] of sealantTable) {
    for (const [ml, printed] of [
      [300, m300],
      [600, m600],
    ]) {
      // metres one pack fills = pack ml / (w x d); Mapei truncates to 1 decimal
      const metres = ml / (w * d);
      checks += 1;
      const truncated = Math.floor(metres * 10 + 1e-9) / 10;
      const rounded = Math.round(metres * 10) / 10;
      if (near(truncated, printed) || near(rounded, printed)) ok += 1;
      else
        fail(
          `sealant ${w}x${d} ${ml} ml: ${metres.toFixed(3)} m vs printed ${printed}`,
        );
      // and the engine agrees: `printed` metres of joint needs 1 pack or less
      const model = {
        ...mapeiCoverage["mapeflex-pu-45-ft"],
        packs: [{ label: "", size: ml }],
      };
      const result = calculate(model, {
        jointWidth: w,
        jointDepth: d,
        length: truncated,
        wastage: 0,
      });
      checks += 1;
      if (result.packs.max !== 1)
        fail(
          `sealant engine ${w}x${d}: ${truncated} m should be 1 pack, got ${result.packs.max}`,
        );
    }
  }
  console.log(
    `sealant mapeflex-pu-45-ft: ${ok}/${sealantTable.length * 2} printed cells reproduced`,
  );
}

// ---- 3. Arithmetic ----------------------------------------------------------
const run = (slug, input) =>
  calculate(mapeiCoverage[slug], { wastage: 0, ...input });

// area x rate: 100 m2 of Adesilex P7 with trowel n. 5 = 250-300 kg = 10-12 bags
let r = run("adesilex-p7", { area: 100, rate: 0 });
expect("P7 min", r.min, 250);
expect("P7 max", r.max, 300);
expect("P7 bags min", r.packs.min, 10);
expect("P7 bags max", r.packs.max, 12);

// area x mm x rate: 50 m2 of Keraflex Maxi S1 at 5 mm = 300 kg = 12 x 25 kg
r = run("keraflex-maxi-s1", { area: 50, thickness: 5, pack: 0 });
expect("Keraflex kg", r.max, 300);
expect("Keraflex 25 kg bags", r.packs.max, 12);
r = run("keraflex-maxi-s1", { area: 50, thickness: 5, pack: 1 });
expect("Keraflex 20 kg bags", r.packs.max, 15);

// wastage: +10% on 300 kg = 330 kg = 14 bags (13.2 rounds up)
r = calculate(mapeiCoverage["keraflex-maxi-s1"], {
  area: 50,
  thickness: 5,
  wastage: 10,
});
expect("Keraflex +10% kg", r.withWastage.max, 330, 1e-6);
expect("Keraflex +10% bags", r.packs.max, 14);

// exact pack boundary must not round up: 100 m2 x 2 mm x 1.5 = 300 kg = 12 bags
r = run("planiseal-88", { area: 100, thickness: 2 });
expect("Planiseal kg", r.max, 300, 1e-6);
expect("Planiseal bags", r.packs.max, 12);

// membranes at 2 mm: Mapelastic Foundation by roller 20 m2 = 66 kg = 3 kits of 32 kg
r = run("mapelastic-foundation", { area: 20, thickness: 2, rate: 0 });
expect("Foundation kg", r.max, 66, 1e-6);
expect("Foundation kits", r.packs.max, 3);
// Mapelastic Smart 30 m2, 2 mm, roller = 96 kg = 4 kits of 30 kg
r = run("mapelastic-smart", { area: 30, thickness: 2, rate: 0 });
expect("Smart kg", r.max, 96, 1e-6);
expect("Smart kits", r.packs.max, 4);
// Mapelastic AquaDefense: 1 kg/m2 for two coats, 45 m2 = 45 kg = 3 buckets
r = run("mapelastic-aquadefense", { area: 45 });
expect("AquaDefense kg", r.max, 45);
expect("AquaDefense buckets", r.packs.max, 3);

// coats: Mapefloor FC 200 ME roll coat, 200 m2, 2 coats = 128 kg = 6 kits of 25.5 kg
r = run("mapefloor-fc-200-me", { area: 200, coats: 2, rate: 0 });
expect("FC200 kg", r.max, 128, 1e-6);
expect("FC200 kits", r.packs.max, 6);

// grout: 600x600x10 tiles, 3 mm joint, Keracolor FF: (1200/360000) x 10 x 3 x 1.5 = 0.15 kg/m2
r = run("keracolor-ff", {
  area: 100,
  tileLength: 600,
  tileWidth: 600,
  tileThickness: 10,
  jointWidth: 3,
});
expect("Keracolor kg/m2", r.perSquareMetre, 0.15, 1e-9);
expect("Keracolor kg", r.max, 15, 1e-9);
expect("Keracolor packs", r.packs.max, 3);

// cleaners: m2 per litre. 3000 m2 with Multicleaner at 1:200 = 2 litres = 1 x 5 litre
r = run("ultracare-multicleaner", { area: 3000 });
expect("Multicleaner litres", r.max, 2);
expect("Multicleaner packs", r.packs.max, 1);

// volume: 0.5 m2 x 100 mm deep = 50 litres of Mapegrout ME05 = 4 bags (12.7 l each)
r = run("mapegrout-me05", { volume: 50 });
expect("ME05 bags", r.packs.max, 4);

// cavity: 2 litres with Lamposilex at 1.8 kg/l = 3.6 kg = 1 bag
r = run("lamposilex", { volume: 2 });
expect("Lamposilex kg", r.max, 3.6, 1e-9);
expect("Lamposilex bags", r.packs.max, 1);

// bars: 120 m of 16 mm bar at 200 g/m = 24 kg = 5 bags of 5 kg
r = run("mapefer-1k", { length: 120, rate: 1 });
expect("Mapefer kg", r.max, 24, 1e-9);
expect("Mapefer bags", r.packs.max, 5);

// rolls: 61 m of Mapeband Easy = 3 rolls of 30 m; 100 m2 of Mapenet 150 = 2 rolls
expect("Mapeband rolls", run("mapeband-easy", { length: 61 }).packs.max, 3);
expect("Mapenet rolls", run("mapenet-150", { area: 100 }).packs.max, 2);

// dosage: 350 kg of cement at 1-3 kg per 100 kg = 3.5-10.5 kg
r = run("idrocrete-kr-1000", { cement: 350 });
expect("Idrocrete min", r.min, 3.5, 1e-9);
expect("Idrocrete max", r.max, 10.5, 1e-9);

// fibres: 10 m3 at 600 g/m3 = 6 kg = 10 bags of 600 g
r = run("mapefibre-ns-12", { concrete: 10 });
expect("Mapefibre kg", r.max, 6, 1e-9);
expect("Mapefibre bags", r.packs.max, 10);

// pack rounding guards
expect("packsFor exact", packsFor(100, 25), 4);
expect("packsFor just over", packsFor(100.01, 25), 5);
expect("packsFor float noise", packsFor(0.1 * 3 * 100, 30), 1);
expect("packsFor zero", packsFor(0, 25), 0);

// empty input never produces NaN or a negative
for (const [slug, model] of Object.entries(mapeiCoverage)) {
  const empty = calculate(model, {});
  checks += 1;
  if (
    ![empty.min, empty.max, empty.packs.min, empty.packs.max].every(
      (n) => Number.isFinite(n) && n >= 0,
    )
  )
    fail(`${slug}: empty input gave a non-finite or negative result`);
}

// ---- 4. Sources -------------------------------------------------------------
const squash = (text) =>
  text
    .toLowerCase()
    .replace(/[–—]/g, "-")
    .replace(/[^a-z0-9]/g, "");
let sourced = 0;
let skipped = 0;
for (const [slug, model] of Object.entries(mapeiCoverage)) {
  const file =
    slug === "mapelastic-smart"
      ? "assets/source/tds-text/mapelastic-smart-uk-spec.txt"
      : `assets/source/tds-text/${slug}.txt`;
  if (!existsSync(file)) {
    skipped += 1;
    continue;
  }
  const layout = file.replace(".txt", ".layout.txt");
  const haystack = squash(
    readFileSync(file, "utf8") +
      (existsSync(layout) ? readFileSync(layout, "utf8") : ""),
  );
  checks += 1;
  if (haystack.includes(squash(model.source))) sourced += 1;
  else
    fail(
      `${slug}: source sentence not found in its data sheet: "${model.source}"`,
    );
}
console.log(
  `sources: ${sourced} quoted sentences found in their data sheets` +
    (skipped ? `, ${skipped} skipped (text not on this machine)` : ""),
);

console.log(`\ncoverage: ${checks} checks, ${failures} failure(s)`);
process.exit(failures ? 1 : 0);
