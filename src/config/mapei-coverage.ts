import type { CoverageModel } from "@/lib/coverage";

/**
 * COVERAGE MODELS - one per Mapei product that has a consumption figure.
 *
 * Every figure below was read from Mapei's own technical data sheet (the
 * PDF offered for download on the same page) and `source` carries the
 * sentence it came from, verbatim. `scripts/test-coverage.mjs` re-reads
 * the data sheet text and fails the build if a `source` sentence is not in
 * it, and checks the grout and sealant maths against the tables Mapei
 * prints.
 *
 * Rules
 * - Rates are Mapei's. Never round them, widen them or "improve" them.
 * - `packs` are what Sahihi stocks (owner's price list). Where the stocked
 *   pack differs from the data sheet's, the stocked one is used and the
 *   difference is logged in docs/CATALOGUE-EXTRACTION.md.
 * - No consumption figure in the data sheet means NO calculator (the key
 *   is simply absent). Never build one from a guess.
 * - Wastage is the visitor's input. It is never baked into a rate.
 */
export const mapeiCoverage: Record<string, CoverageModel> = {
  // ---- Tile adhesives ------------------------------------------------------
  mapeset: {
    kind: "area",
    unit: "kg",
    rates: [
      { label: "Normal size tiles, trowel No. 5 (5x5 mm)", min: 2.5, max: 3 },
      { label: "Small tiles, trowel No. 4 (4x4 mm)", min: 2, max: 2 },
      {
        label: "External floors and walls, trowel No. 6 (6x6 mm)",
        min: 5,
        max: 5,
      },
    ],
    packs: [{ label: "25 kg bag", size: 25 }],
    source: "normal size tiles (trowel No. 5; size: 5X5 mm): 2.5-3 kg/m²",
  },
  "kerabond-t": {
    kind: "area",
    unit: "kg",
    rates: [{ label: "All applications", min: 2, max: 5 }],
    packs: [{ label: "25 kg bag", size: 25 }],
    source: "2-5 kg/m².",
  },
  "adesilex-p7": {
    kind: "area",
    unit: "kg",
    rates: [
      { label: "Normal sizes, trowel n. 5", min: 2.5, max: 3 },
      { label: "Mosaics and small sizes, trowel n. 4", min: 2, max: 2 },
      { label: "Large sizes, exterior floors, trowel n. 6", min: 4, max: 4 },
    ],
    packs: [{ label: "25 kg bag", size: 25 }],
    source: "normal sizes (trowel n. 5): 2.5-3 kg/m²",
  },
  "keraflex-maxi-s1": {
    kind: "area-thickness",
    unit: "kg",
    rates: [{ label: "Bed thickness", min: 1.2, max: 1.2 }],
    thickness: {
      min: 1,
      max: 15,
      initial: 5,
      step: 0.5,
      stated: "Can be applied at high thicknesses (up to 15 mm)",
    },
    packs: [
      { label: "25 kg bag", size: 25 },
      { label: "20 kg bag", size: 20 },
    ],
    source: "1.2 kg/m² per mm of thickness.",
  },

  // ---- Grouts: Mapei's printed formula ------------------------------------
  "keracolor-ff": {
    kind: "grout",
    unit: "kg",
    factor: 1.5,
    packs: [{ label: "5 kg alupack", size: 5 }],
    source:
      "Consumption of Keracolor FF varies depending on the width of the joints, the size and thickness of the tiles.",
    note: "Mapei's formula for Keracolor FF: (A + B) / (A x B) x C x D x 1.5 = kg/m², with A and B the tile length and width, C the tile thickness and D the joint width, all in mm. Keracolor FF is for joints up to 6 mm.",
  },
  kerapoxy: {
    kind: "grout",
    unit: "kg",
    factor: 1.6,
    packs: [{ label: "5 kg kit", size: 5 }],
    source:
      "Consumption of Kerapoxy varies depending on the width of the joints, the size and thickness of the tiles.",
    note: "Mapei's formula for Kerapoxy: (A + B) / (A x B) x C x D x 1.6 = kg/m², with A and B the tile length and width, C the tile thickness and D the joint width, all in mm.",
  },

  // ---- Tile care ------------------------------------------------------------
  "ultracare-hd-cleaner": {
    kind: "area-per-unit",
    unit: "litres",
    rates: [
      { label: "Diluted 1:20 with water", min: 200, max: 200 },
      { label: "Diluted 1:5 with water", min: 30, max: 30 },
    ],
    packs: [{ label: "1 litre jerrycan", size: 1 }],
    source:
      "With one litre of UltraCare HD Cleaner diluted at a 1:20 ratio with water, you can clean approximately 200 m2 of",
  },
  "ultracare-multicleaner": {
    kind: "area-per-unit",
    unit: "litres",
    rates: [{ label: "Diluted 1:200 with water", min: 1500, max: 1500 }],
    packs: [{ label: "5 litre jerrycan", size: 5 }],
    source:
      "Diluted in a ratio of 1 : 200 with water, it is possible to clean approximately 1500 m² of surface area with a litre of",
  },
  "ultracare-stain-protector-w-plus": {
    kind: "area-per-unit",
    unit: "litres",
    rates: [{ label: "One coat", min: 30, max: 30 }],
    packs: [{ label: "1 litre jerrycan", size: 1 }],
    source:
      "30 m2 of surface using 1 litre of UltraCare Stain Protector W Plus (one coat), according to the absorption level",
  },

  // ---- Primers, levelling, wood --------------------------------------------
  "primer-g": {
    kind: "area",
    unit: "kg",
    rates: [{ label: "Normal consumption", min: 0.08, max: 0.15 }],
    packs: [{ label: "25 kg drum", size: 25 }],
    source: "Normal consumption is between 0.08 and 0.15 kg/m².",
  },
  "triblock-p": {
    kind: "area-coats",
    unit: "kg",
    rates: [
      { label: "Non-absorbent surfaces", min: 0.25, max: 0.3 },
      { label: "Absorbent surfaces", min: 0.4, max: 0.5 },
    ],
    coats: { min: 1, max: 4, initial: 2 },
    packs: [{ label: "5 kg kit (A + B + C)", size: 5 }],
    source: "250-300 g/m² per coat on non-absorbent surfaces.",
    note: "The data sheet applies Triblock P in two criss-cross coats.",
  },
  lignobond: {
    kind: "area",
    unit: "kg",
    rates: [{ label: "With a MAPEI trowel for wood", min: 0.8, max: 1 }],
    packs: [{ label: "10 kg kit", size: 10 }],
    source:
      "800-1000 g/m² with a MAPEI trowel for wood according to the type of substrate.",
  },
  "ultraplan-eco-20": {
    kind: "area-thickness",
    unit: "kg",
    rates: [{ label: "Layer thickness", min: 1.6, max: 1.6 }],
    thickness: { min: 1, max: 10, initial: 3, step: 0.5 },
    packs: [{ label: "23 kg bag", size: 23 }],
    source: "1.6 kg/m² per mm of thickness.",
  },
  "ultraplan-contract": {
    kind: "area-thickness",
    unit: "kg",
    rates: [{ label: "Layer thickness", min: 1.7, max: 1.7 }],
    thickness: { min: 1, max: 10, initial: 3, step: 0.5 },
    packs: [{ label: "25 kg bag", size: 25 }],
    source: "1.7 kg/m² per mm of thickness.",
  },

  // ---- Repair, grouts, anchoring -------------------------------------------
  "adesilex-pg2-tg": {
    kind: "area-thickness",
    unit: "kg",
    rates: [{ label: "Adhesive thickness", min: 1.71, max: 1.71 }],
    thickness: { min: 1, max: 10, initial: 2, step: 0.5 },
    packs: [{ label: "6 kg kit (A 4.5 kg + B 1.5 kg)", size: 6 }],
    source: "1.71 kg/m² per mm of thickness.",
  },
  "epojet-lv": {
    kind: "cavity",
    unit: "kg",
    kgPerLitre: 1.1,
    packs: [{ label: "2.5 kg kit", size: 2.5 }],
    source: "Epojet LV Sealing cracks: 1.1 kg/l of cavity to be filled.",
  },
  eporip: {
    kind: "area",
    unit: "kg",
    rates: [
      {
        label: "Construction joints, rough substrate",
        min: 0.5,
        max: 0.7,
      },
      {
        label: "Construction joints, very uneven substrate",
        min: 1,
        max: 2,
      },
    ],
    packs: [{ label: "2 kg kit (A 1.5 kg + B 0.5 kg)", size: 2 }],
    source: "construction joints with a rough substrate: 0.5-0.7 kg/m²",
  },
  "mapegrout-me05": {
    kind: "volume",
    unit: "litres",
    litresPerPack: 12.7,
    packs: [{ label: "25 kg bag", size: 25 }],
    source: "12.7 liters per 25 kg.",
  },
  "mapegrout-t60": {
    kind: "volume",
    unit: "litres",
    litresPerPack: 12.6,
    packs: [{ label: "25 kg bag", size: 25 }],
    source: "12.6 litres / 25 kg",
  },
  "planicrete-sp": {
    kind: "area",
    unit: "kg",
    rates: [
      { label: "Slurry bond coat / spatter-dash coat", min: 0.3, max: 0.3 },
      { label: "Floor screed and wall plaster, 20 mm thick", min: 1, max: 1 },
      { label: "Tile adhesive", min: 0.5, max: 1 },
    ],
    packs: [
      { label: "25 kg drum", size: 25 },
      { label: "5 kg drum", size: 5 },
    ],
    source: "0.3 kg of Planicrete SP per m2.",
  },
  "mapefer-1k": {
    kind: "bar",
    unit: "kg",
    rates: [
      { label: "8 mm bar", min: 100, max: 100 },
      { label: "16 mm bar", min: 200, max: 200 },
    ],
    packs: [{ label: "5 kg bag", size: 5 }],
    source:
      "100 g/m per reinforcing rod with an 8 mm diameter and 200 g/m per reinforcing rod with 16 mm (2 mm of",
    note: "Figures are for 2 mm of applied product. Mapei gives them for 8 mm and 16 mm bars only.",
  },
  "mapefibre-ns-12": {
    kind: "per-m3",
    unit: "kg",
    rates: [{ label: "Normal dosage", min: 0.6, max: 0.6 }],
    packs: [{ label: "600 g bag", size: 0.6 }],
    source:
      "The normal dosage of Mapefibre NS 12 is 600 g/m³, usually added to the concrete.",
  },

  // ---- Resin flooring -------------------------------------------------------
  "mapefloor-fc-200-me": {
    kind: "area-coats",
    unit: "kg",
    rates: [
      { label: "Roll coat finish", min: 0.32, max: 0.32 },
      { label: "Non-slip finish", min: 0.35, max: 0.4 },
    ],
    coats: { min: 1, max: 4, initial: 2 },
    packs: [{ label: "25.5 kg kit (A 22 kg + B 3.5 kg)", size: 25.5 }],
    source: "1st coat: Mapefloor FC 200 ME (A+B ): 0.32 kg/m²",
    note: "Mapei's systems use a first coat and a finishing coat. Primer SN and broadcast quartz are separate products.",
  },
  "mapefloor-i-300-sl-me": {
    kind: "area",
    unit: "kg",
    rates: [
      {
        label: "Smooth self-levelling, average thickness 2 mm",
        min: 3.7,
        max: 3.7,
      },
    ],
    packs: [{ label: "47 kg kit (A 17 kg + B 5 kg + C 25 kg)", size: 47 }],
    source: "Mapefloor I300 SL ME: 3.7 kg/m².",
    note: "Mapei's figure for an average thickness of 2 mm. Primer SN is a separate product.",
  },
  "mapefloor-cpu-plus-mf": {
    kind: "area",
    unit: "kg",
    rates: [
      { label: "Self-smoothing layer, 3 mm", min: 5.5, max: 5.5 },
      { label: "Self-smoothing layer, 4 mm", min: 7, max: 7 },
      { label: "Self-smoothing layer, 6 mm", min: 10, max: 10 },
      { label: "Scratch coat, 1 mm", min: 1.7, max: 1.7 },
    ],
    // Mixed kit weight is not certain from the price list: quantity only.
    packs: [],
    source: "approx. 5.5 kg/m2",
    note: "Only whole packs of components A, B, C and Mapecolor CPU+ are mixed. We work out the number of kits with your quotation.",
  },
  "mapefloor-finish-450-me": {
    kind: "area",
    unit: "kg",
    rates: [{ label: "Theoretical consumption", min: 0.2, max: 0.5 }],
    packs: [{ label: "22.5 kg kit (A 18.9 kg + B 3.6 kg)", size: 22.5 }],
    source: "0.2-0.5 kg/m² depending on the selected system",
  },
  "mapefloor-pu-410": {
    kind: "area",
    unit: "kg",
    rates: [{ label: "Protective and wearing layer", min: 1, max: 1 }],
    packs: [{ label: "19.9 kg unit (A 16 kg + B 3.9 kg)", size: 19.9 }],
    source: "1.0 kg/m²",
    note: "Mapefloor PU 410 mixed with Mapecolor Paste. Quartz sand is separate: 0.3 kg/m² of Quartz 0.25 in the mix, then broadcast in excess at 4.0 kg/m².",
  },
  "primer-sn": {
    kind: "area-coats",
    unit: "kg",
    rates: [{ label: "Per coat", min: 0.3, max: 0.7 }],
    coats: { min: 1, max: 3, initial: 1 },
    packs: [{ label: "20 kg kit (A 16 kg + B 4 kg)", size: 20 }],
    source:
      "0.3-0.70 kg/m² per coat depending on the characteristics of the substrate",
  },
  "mapecoat-dw-25": {
    kind: "area",
    unit: "kg",
    rates: [
      { label: "Two coats", min: 0.4, max: 0.6 },
      { label: "One coat", min: 0.3, max: 0.3 },
    ],
    packs: [{ label: "15 kg unit (A 12 kg + B 3 kg)", size: 15 }],
    source:
      "400-600 g/m² in two coats, which corresponds to a final thickness of approximately 300-450 µm",
  },

  // ---- Waterproofing --------------------------------------------------------
  lamposilex: {
    kind: "cavity",
    unit: "kg",
    kgPerLitre: 1.8,
    packs: [{ label: "5 kg bag", size: 5 }],
    source: "1.8 kg of Lamposilex will fill a one-dm³ cavity.",
  },
  antipluviol: {
    kind: "area-coats",
    unit: "litres",
    rates: [
      { label: "Render or skim coat", min: 0.2, max: 0.8 },
      { label: "Exposed brickwork", min: 0.3, max: 1 },
      { label: "Stone (tuff)", min: 0.5, max: 1 },
      { label: "Aerated concrete", min: 0.2, max: 0.6 },
    ],
    coats: { min: 1, max: 3, initial: 1 },
    packs: [{ label: "25 litre jerrycan", size: 25 }],
    source: "Render or skim coat: 0.20-0.80 L/m²",
    note: "Mapei's figures are per single coat and depend on how absorbent the surface is.",
  },
  "planiseal-88": {
    kind: "area-thickness",
    unit: "kg",
    rates: [{ label: "Coating thickness", min: 1.5, max: 1.5 }],
    thickness: { min: 1, max: 5, initial: 2, step: 0.5 },
    packs: [{ label: "25 kg bag", size: 25 }],
    source: "approx. 1.5 kg/m2 per mm of thickness.",
  },
  "mapelastic-aquadefense": {
    kind: "area",
    unit: "kg",
    rates: [{ label: "Two coats", min: 1, max: 1 }],
    packs: [{ label: "15 kg bucket", size: 15 }],
    source: "1 kg/m² for 2 coats.",
  },
  "mapelastic-easy": {
    kind: "area-thickness",
    unit: "kg",
    rates: [{ label: "By trowel or roller", min: 1.9, max: 1.9 }],
    thickness: {
      min: 1,
      max: 4,
      initial: 2,
      step: 0.5,
      stated: "Final thickness at least 2 mm",
    },
    packs: [{ label: "24 kg kit (A 18 kg + B 6 kg)", size: 24 }],
    source:
      "Application by trowel or roller: Approx. 1.9 kg/m² per mm of thickness.",
  },
  "mapelastic-smart": {
    kind: "area-thickness",
    unit: "kg",
    rates: [
      { label: "By trowel or roller", min: 1.6, max: 1.6 },
      { label: "By spray", min: 2.2, max: 2.2 },
    ],
    thickness: { min: 1, max: 4, initial: 2, step: 0.5 },
    packs: [{ label: "30 kg kit (A 20 kg + B 10 kg)", size: 30 }],
    source: "Approximately, Trowel or roller 1.6 kg/m2 per mm.",
    note: "Figures from Mapei UK's outline specification for Mapelastic Smart (ref. IW/OS0032/2024).",
  },
  "mapelastic-foundation": {
    kind: "area-thickness",
    unit: "kg",
    rates: [
      { label: "By roller", min: 1.65, max: 1.65 },
      { label: "By spray, flat surfaces", min: 1.75, max: 1.75 },
      { label: "By spray, rough surfaces", min: 2.1, max: 2.1 },
    ],
    thickness: {
      min: 1,
      max: 4,
      initial: 2,
      step: 0.5,
      stated: "The final thickness must be at least 2 mm.",
    },
    packs: [{ label: "32 kg kit (A 22 kg + B 10 kg)", size: 32 }],
    source: "approx. 1.65 kg/m² per mm thickness.",
  },
  "idrostop-pvc": {
    kind: "length",
    unit: "m",
    packs: [{ label: "15 m roll", size: 15 }],
    source: "Idrostop PVC ME is supplied in rolls.",
    note: "Enter the total length of joints to be sealed.",
  },
  "mapeband-tpe": {
    kind: "length",
    unit: "m",
    packs: [{ label: "30 m roll, 17 cm wide", size: 30 }],
    source: "Mapeband TPE 170 (width 17 cm): 30 m x 17 cm rolls;",
    note: "Butt joints between two strips overlap by at least 5 cm. Add your overlaps to the length, or use the wastage field.",
  },
  "mapeband-easy": {
    kind: "length",
    unit: "m",
    packs: [{ label: "30 m roll, 130 mm wide", size: 30 }],
    source: "30 m long by 130 mm wide rolls.",
    note: "Joints between pieces overlap by at least 5 cm. Add your overlaps to the length, or use the wastage field.",
  },
  "mapenet-150": {
    kind: "sheet",
    unit: "m2",
    packs: [{ label: "50 m roll, 1 m wide", size: 50 }],
    source: "50 metre rolls, 1 m wide.",
    note: "Each piece overlaps the next by at least 5 cm. Use the wastage field to allow for overlaps.",
  },
  "mapeflex-pu-45-ft": {
    kind: "joint",
    unit: "ml",
    packs: [{ label: "600 ml cartridge", size: 600 }],
    source:
      "According to the size of the joint. Consult the table below for consumption of the product:",
    note: "Joint volume: width x depth x length. Mapei's own table gives 6 linear metres per 600 ml for a 10 x 10 mm joint.",
  },
  "mapeproof-swell": {
    kind: "length",
    unit: "m",
    packs: [{ label: "320 ml cartridge (about 3 m)", size: 3 }],
    source: "Each cartridge forms approximately 3 metres of Mapeproof Swell.",
  },
  "idrocrete-kr-1000": {
    kind: "dosage",
    unit: "kg",
    rates: [{ label: "Recommended dosage, 1-3 kg per 100 kg", min: 1, max: 3 }],
    packs: [{ label: "20 kg bag", size: 20 }],
    source: "Idrocrete KR 1000 is 1-3 kg/100 kg",
  },
};

/**
 * The consumption tables Mapei prints, transcribed from the data sheets.
 * Used ONLY by scripts/test-coverage.mjs to prove the engine reproduces
 * them. [tile "LxWxT" in mm, joint width in mm, printed kg/m2].
 */
export const groutTables: Record<string, [string, number, number][]> = {
  "keracolor-ff": [
    ["75x150x6", 2, 0.4],
    ["75x150x6", 3, 0.5],
    ["75x150x6", 5, 0.9],
    ["100x100x7", 2, 0.4],
    ["100x100x7", 3, 0.6],
    ["100x100x7", 5, 1.1],
    ["100x100x9", 2, 0.5],
    ["100x100x9", 3, 0.8],
    ["100x100x9", 5, 1.4],
    ["150x150x6", 2, 0.2],
    ["150x150x6", 3, 0.4],
    ["150x150x6", 5, 0.6],
    ["200x200x7", 2, 0.2],
    ["200x200x7", 3, 0.3],
    ["200x200x7", 5, 0.5],
    ["200x200x9", 2, 0.3],
    ["200x200x9", 3, 0.4],
    ["200x200x9", 5, 0.7],
    ["300x300x10", 3, 0.3],
    ["300x300x10", 5, 0.5],
    ["300x300x20", 3, 0.6],
    ["300x300x20", 5, 1.0],
    ["300x600x10", 3, 0.2],
    ["300x600x10", 5, 0.4],
    ["400x400x10", 3, 0.2],
    ["400x400x10", 5, 0.4],
    ["500x500x10", 5, 0.3],
    ["600x600x10", 5, 0.3],
    ["750x750x10", 5, 0.2],
    ["100x600x9", 5, 0.8],
    ["150x600x9", 5, 0.6],
    ["150x900x9", 5, 0.5],
    ["150x1200x10", 5, 0.6],
    ["225x450x9", 5, 0.5],
    ["225x900x9", 5, 0.4],
    ["250x900x9", 5, 0.3],
    ["250x1200x10", 5, 0.4],
    ["600x600x5", 5, 0.1],
    ["600x600x3", 5, 0.1],
  ],
  kerapoxy: [
    ["75x150x6", 3, 0.6],
    ["75x150x6", 5, 1.0],
    ["75x150x6", 8, 1.5],
    ["75x150x6", 10, 1.9],
    ["100x100x7", 3, 0.7],
    ["100x100x7", 5, 1.1],
    ["100x100x7", 8, 1.8],
    ["100x100x7", 10, 2.2],
    ["100x100x9", 3, 0.9],
    ["100x100x9", 5, 1.4],
    ["100x100x9", 8, 2.3],
    ["100x100x9", 10, 2.9],
    ["150x150x6", 3, 0.4],
    ["150x150x6", 5, 0.6],
    ["150x150x6", 8, 1.0],
    ["150x150x6", 10, 1.3],
    ["200x200x7", 3, 0.3],
    ["200x200x7", 5, 0.6],
    ["200x200x7", 8, 0.9],
    ["200x200x7", 10, 1.1],
    ["200x200x9", 3, 0.4],
    ["200x200x9", 5, 0.7],
    ["200x200x9", 8, 1.2],
    ["200x200x9", 10, 1.4],
    ["300x300x10", 3, 0.3],
    ["300x300x10", 5, 0.5],
    ["300x300x10", 8, 0.9],
    ["300x300x10", 10, 1.1],
    ["300x300x20", 3, 0.6],
    ["300x300x20", 5, 1.1],
    ["300x300x20", 8, 1.7],
    ["300x300x20", 10, 2.1],
    ["300x600x10", 3, 0.2],
    ["300x600x10", 5, 0.4],
    ["300x600x10", 8, 0.6],
    ["300x600x10", 10, 0.8],
    ["400x400x10", 3, 0.2],
    ["400x400x10", 5, 0.4],
    ["400x400x10", 8, 0.6],
    ["400x400x10", 10, 0.8],
    ["500x500x10", 3, 0.2],
    ["500x500x10", 5, 0.3],
    ["500x500x10", 8, 0.5],
    ["500x500x10", 10, 0.6],
    ["600x600x10", 3, 0.2],
    ["600x600x10", 5, 0.3],
    ["600x600x10", 8, 0.4],
    ["600x600x10", 10, 0.5],
    ["750x750x10", 3, 0.1],
    ["750x750x10", 5, 0.2],
    ["750x750x10", 8, 0.3],
    ["750x750x10", 10, 0.4],
    ["100x600x9", 3, 0.5],
    ["100x600x9", 5, 0.8],
    ["100x600x9", 8, 1.3],
    ["100x600x9", 10, 1.7],
    ["150x600x9", 3, 0.4],
    ["150x600x9", 5, 0.6],
    ["150x600x9", 8, 1.0],
    ["150x600x9", 10, 1.2],
    ["150x900x9", 3, 0.3],
    ["150x900x9", 5, 0.6],
    ["150x900x9", 8, 0.9],
    ["150x900x9", 10, 1.1],
    ["150x1200x10", 3, 0.4],
    ["150x1200x10", 5, 0.6],
    ["150x1200x10", 8, 1.0],
    ["150x1200x10", 10, 1.2],
    ["225x450x9", 3, 0.3],
    ["225x450x9", 5, 0.5],
    ["225x450x9", 8, 0.8],
    ["225x450x9", 10, 1.0],
    ["225x900x9", 3, 0.2],
    ["225x900x9", 5, 0.4],
    ["225x900x9", 8, 0.6],
    ["225x900x9", 10, 0.8],
    ["250x900x9", 3, 0.2],
    ["250x900x9", 5, 0.4],
    ["250x900x9", 8, 0.6],
    ["250x900x9", 10, 0.7],
    ["250x1200x10", 3, 0.2],
    ["250x1200x10", 5, 0.4],
    ["250x1200x10", 8, 0.6],
    ["250x1200x10", 10, 0.8],
    ["600x600x5", 3, 0.1],
    ["600x600x5", 5, 0.1],
    ["600x600x5", 8, 0.2],
    ["600x600x5", 10, 0.3],
    ["600x600x3", 5, 0.1],
    ["600x600x3", 8, 0.1],
    ["600x600x3", 10, 0.2],
    ["1000x500x5", 3, 0.1],
    ["1000x500x5", 5, 0.1],
    ["1000x500x5", 8, 0.2],
    ["1000x500x5", 10, 0.2],
    ["1000x500x3", 5, 0.1],
    ["1000x500x3", 8, 0.1],
    ["1000x500x3", 10, 0.1],
    ["1000x1000x5", 5, 0.1],
    ["1000x1000x5", 8, 0.1],
    ["1000x1000x5", 10, 0.2],
    ["1000x1000x3", 8, 0.1],
    ["1000x1000x3", 10, 0.1],
    ["3000x1000x5", 5, 0.1],
    ["3000x1000x5", 8, 0.1],
    ["3000x1000x5", 10, 0.1],
    ["3000x1000x3", 8, 0.1],
    ["3000x1000x3", 10, 0.1],
  ],
};

/** Mapei's sealant table for Mapeflex PU 45 FT: [width mm, depth mm,
 *  linear metres per 300 ml, linear metres per 600 ml]. */
export const sealantTable: [number, number, number, number][] = [
  [5, 5, 12, 24],
  [10, 10, 3, 6],
  [15, 10, 2, 4],
  [20, 10, 1.5, 3],
  [25, 12.5, 0.9, 1.9],
  [30, 15, 0.6, 1.3],
];
