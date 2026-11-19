import type { HotspotEntry } from "@/components/sections/oyh/hotspot-map";
import type { DocEntry } from "@/components/sections/document-list";
import type { FaqItem } from "@/lib/faq";

/**
 * X-Tech AntiStatic SLE, X-Calibur's conductive and dissipative epoxy
 * flooring system, for /x-calibur/antistatic-conductive-flooring and the
 * product page (owner, 2026-11-19: three documents, "the best of the best").
 *
 * FACT LAW. Every string below is copied from one of the three documents
 * the owner supplied, published unaltered under public/tds/x-calibur/:
 *   sheet    X-Tech AntiStatic SLE technical data sheet (2 pages, 90070918)
 *   method   Method Statement X-Tech AntiStatic SLE v5, November 2021
 *   brochure High Performance Conductive Floor Systems (3 pages)
 * Where they disagree the data sheet is published and the difference is
 * logged in docs/OPEN-QUESTIONS.md (X-Calibur antistatic, 2026-11-19):
 *   base coat 6.6 m² per litre (sheet, method) against 5 m² (brochure);
 *   top coat 1.5 L per m² at 1.5 mm (sheet) against 2 L per m² at 2 mm
 *   (brochure), the same rate per millimetre, so the calculator uses 1 L per
 *   m² per mm over the sheet's 1.5 to 2 mm;
 *   pot life at 25C (sheet) against the 10, 20, 30C table (method): both
 *   shown, each with its source.
 * Source slips not reproduced: "connectged", "Do not be apply", "X-Shield SF
 * Primer" (the brochure's name for the sheet's X-Prime SF). The brochure's
 * "no extra charge" line is a commercial term and is left out. Stock: the
 * owner's word, 2026-11-19, everything supplied to order.
 */

export const PATH = "/x-calibur/antistatic-conductive-flooring";
export const PRODUCT_PATH = "/x-calibur/x-tech-antistatic-sle";

export const SHEET_FILE = "/tds/x-calibur/x-tech-antistatic-sle.pdf";
export const METHOD_FILE =
  "/tds/x-calibur/x-tech-antistatic-sle-method-statement.pdf";
export const BROCHURE_FILE = "/tds/x-calibur/conductive-floor-systems.pdf";

/** The system in the sheet's words. */
export const description =
  "X-Tech AntiStatic SLE is a three layer system comprising an epoxy primer, a water dispersed epoxy base coat and a self smoothing solvent free epoxy top coat that produces a conductive or dissipative floor.";

/** The two grades, as the sheet defines them (ohms, point to point and to ground). */
export type Grade = {
  id: "CG" | "DG";
  name: string;
  /** The sheet's sentence. */
  text: string;
  min: number;
  max: number;
  /** The printed form of the range. */
  range: string;
  /** The base coat check before the top coat goes on (method 9.0). */
  baseCheck: string;
};

export const grades: Grade[] = [
  {
    id: "CG",
    name: "Conductive grade",
    text: "The conductive grade (CG) provides a floor with a point to point resistance and a resistance to ground of between 5 x 10^4 to 1 x 10^6 Ohms.",
    min: 5e4,
    max: 1e6,
    range: "5 x 10^4 to 1 x 10^6 ohms",
    baseCheck: "1 x 10^5 ohms or less",
  },
  {
    id: "DG",
    name: "Dissipative grade",
    text: "The dissipative grade (DG) provides a floor with a point to point resistance and a resistance to ground of between 5 x 10^6 to 1 x 10^9 Ohms.",
    min: 5e6,
    max: 1e9,
    range: "5 x 10^6 to 1 x 10^9 ohms",
    baseCheck: "1 x 10^6 to 1 x 10^8 ohms",
  },
];

/** The sheet's five advantages; its fourth, the chemical resistance, is the
 * list of chemicals below (the sheet's phrase for it fails the voice rules). */
export const advantages = [
  "Meets SCAQMD Rule 1113 & LEED VOC Limits",
  "Fast application",
  "Easy to clean gloss finish",
  "High impact and abrasion resistance",
];

export const uses = [
  "Electronic manufacturing and assembly plants",
  "Hospitals",
  "Clean rooms",
  "Chemical handling and processing areas",
];

/** Laboratory test data, after 7 days cure (sheet). */
export const labData = [
  { property: "Compressive strength", value: ">60MPa (8700psi)" },
  { property: "Flexural strength", value: ">30MPa (4350psi)" },
  { property: "Tensile strength", value: ">20MPa (2900psi)" },
  { property: "Bond strength*", value: ">5MPa (725psi)" },
];
export const labNote = "Above results were obtained after 7 days cure. *Depends on substrate quality";

/** Specification compliance (sheet). The starred two hold with X-Prime SF. */
export const compliance = [
  { name: "SCAQMD Rule 1113", note: "when used with X-Prime SF" },
  { name: "LEED NC2009 IEQ 4.2", note: "when used with X-Prime SF" },
  { name: "IEC/BS EN 61340" },
  { name: "ANSI/ESD S7.1" },
  { name: "EFNARC Type 5A & B" },
  { name: "ASTM F150" },
  { name: "BS 2050" },
  { name: "BS 5958" },
  { name: "DoA 385-64" },
  { name: "FeFRA Type 5 MD/HD" },
];

/** "Independently certified": the nine test reports the brochure shows, by caption. */
export const tests = [
  { standard: "ANSI/ESD S20.20", what: "Compliance testing" },
  { standard: "IEC 61340-4-1", what: "Resistance testing" },
  { standard: "BS 2050", what: "Resistance testing" },
  { standard: "ASTM D4060", what: "Abrasion resistance" },
  { standard: "ASTM D4541", what: "Adhesion test" },
  { standard: "ASTM F609", what: "Static coefficient of friction" },
  { standard: "ASTM C109", what: "Compressive strength" },
  { standard: "ASTM C580", what: "Flexural strength" },
  { standard: "ASTM D638", what: "Tensile strength and elongation" },
];

/** Good resistance to the following (sheet). */
export const chemicals = [
  "10% Lactic acid",
  "Concentrated bleach",
  "Saturated sugar solution",
  "Saturated urea solution",
  "Petrol and oils",
  "Greases",
  "10% Ammonia",
];
export const chemicalsNote =
  "Contact X-Calibur for details of resistance to specific chemicals";

/** The eight colours the sheet lists; the brochure's notes under them. */
export const colourNotes = [
  "The lightest colors that can be supplied are RAL 7035 and RAL 7001.",
  "Every effort is made to reproduce these RAL sample colors as faithfully as possible. However, due to reproduction limitations, it is necessary that we reserve the right of reasonable variation.",
  // The brochure prints "lightning"; its sense is kept, the slip is not.
  "Colour will vary with surface texture, lighting and the method of application.",
];

/** Volatile organic content per component (sheet). */
export const voc = [
  { part: "X-Prime SF", value: "0 g/L" },
  { part: "X-Prime MT100", value: "<10 g/L" },
  { part: "Base Coat", value: "<20 g/L" },
  { part: "Top Coat", value: "<50 g/L" },
];

/** Theoretical coverage (sheet), the sentences the calculator rests on. */
export const coverage = {
  primeSf: "X-Prime SF: 10m2 (107ft2) per liter at 100 microns wft.",
  primeMt100: "X-Prime MT100: 5m2 (53ft2) per liter at 200 microns wft.",
  base: "X-Tech AntiStatic SLE Base Coat: 6.6m2 (70ft2) per liter at 150 microns wft.",
  top: "X-Tech AntiStatic SLE Top Coat: 1.5L per m2 at 1.5mm (60mils).",
  /** The brochure's figure for the thicker end of the sheet's 1.5 to 2 mm. */
  topBrochure: "X-Tech AntiStatic SLE Topcoat: 2 liter per m2 at 2mm",
  thickness: "1.5mm to 2mm (60 to 80mils)",
};

/** Packaging (sheet). */
export const packaging = {
  primers: "X-Prime SF & X-Prime MT100: 1, 5 & 15L packs.",
  base: "X-Tech AntiStatic SLE Base Coat: 4.5 and 18L packs",
  top: "X-Tech AntiStatic SLE Top Coat: 17L packs.",
};

export const shelfLife =
  "18 months when stored at 35C (95F) or less in a frost-free, dry and shaded area.";

/**
 * The parts of the system. Only the SLE has a data sheet and a page; the
 * rest are named in the sheet and the method statement and are supplied to
 * order with the system (owner, 2026-11-19). Packs as the sheet prints them.
 */
export type SystemPart = {
  slug: string;
  name: string;
  role: string;
  /** Where the part is named. */
  source: "sheet" | "method";
  packs: string[];
  /** The one line about it from the documents. */
  line: string;
  /** The part's own page, where it has one. */
  href?: string;
};

export const parts: SystemPart[] = [
  {
    slug: "x-tech-antistatic-sle",
    name: "X-Tech AntiStatic SLE",
    role: "Base coat and top coat, conductive or dissipative grade",
    source: "sheet",
    packs: ["Base coat 4.5 litres", "Base coat 18 litres", "Top coat 17 litres"],
    line: "A water dispersed epoxy base coat and a self smoothing solvent free epoxy top coat, 1.5 to 2 mm.",
    href: PRODUCT_PATH,
  },
  {
    slug: "x-prime-sf",
    name: "X-Prime SF",
    role: "Epoxy primer, dry slabs",
    source: "sheet",
    packs: ["1 litre", "5 litres", "15 litres"],
    line: "10 m² per litre at 100 microns wet film; 0 g/L VOC; the primer under which SCAQMD Rule 1113 and LEED NC2009 IEQ 4.2 are met.",
  },
  {
    slug: "x-prime-mt100",
    name: "X-Prime MT100",
    role: "Epoxy primer, damp slabs",
    source: "sheet",
    packs: ["1 litre", "5 litres", "15 litres"],
    line: "5 m² per litre at 200 microns wet film; one coat at 165 microns when the MVER is 3 to 5, two coats at 200 microns when it is 5 to 12 lbs/1000ft²/24h.",
  },
  {
    slug: "copper-tape",
    name: "Self adhesive conductive copper tape",
    role: "Grounding grid and ground strips",
    source: "method",
    packs: [],
    line: "10 to 12 mm wide, at least 0.7 mm thick; a grid at maximum 3 m centres when specified, and 250 mm strips to the ground point.",
  },
  {
    slug: "x-tile-conductive-adhesive",
    name: "X-Tile Conductive Adhesive",
    role: "Adheres the copper strips",
    source: "method",
    packs: [],
    line: "Adhere the copper strips to the primed surface using X-Tile Conductive Adhesive.",
  },
  {
    slug: "x-seal-hd80-conductive",
    name: "X-Seal HD80 Conductive",
    role: "Joint sealant",
    source: "method",
    packs: [],
    line: "All existing expansion or movement joints should be followed through the new floor surface; X-Seal HD80 Conductive is the joint sealant.",
  },
  {
    slug: "x-seal-jointcord",
    name: "X-Seal JointCord",
    role: "Backing cord in bridged joints",
    source: "method",
    packs: [],
    line: "Inserted in the gap of a bridged movement joint before the joint is sealed.",
  },
];

export const partBySlug = Object.fromEntries(
  parts.map((part) => [part.slug, part]),
) as Record<string, SystemPart>;

/** Named in the brochure's "Other Products", no data sheet supplied. */
export const otherProducts = [
  {
    name: "X-Tech AntiStatic CS",
    what: "Conductive and dissipative epoxy coating system",
  },
  {
    name: "X-Tech AntiStatic SLB",
    what: "Conductive and dissipative breathable water based epoxy flooring system",
  },
];

/**
 * Moisture testing (sheet and method 6.0): the RH reading, then the MVER
 * band, decides the primer.
 */
export type MoistureBand = {
  id: "dry" | "low" | "mid" | "high" | "over";
  label: string;
  /** The band in the documents' words. */
  text: string;
  primer: "X-Prime SF" | "X-Prime MT100" | null;
  coats: number;
  /** Wet film thickness per coat, microns. */
  wft: number | null;
  /** Square metres per litre per coat at that film, from the sheet's rate. */
  perLitre: number | null;
};

export const moistureBands: MoistureBand[] = [
  {
    id: "dry",
    label: "RH 80% or less",
    text: "The concrete slab should be tested for moisture with the Rapid RH system following the procedure in ASTM F2170. If the humidity reading is greater than 80% then conduct moisture vapor emission rate (MVER) testing using the procedure in ASTM F1869.",
    primer: "X-Prime SF",
    coats: 1,
    wft: 100,
    perLitre: 10,
  },
  {
    id: "low",
    label: "MVER under 3",
    text: "If the MVER is under 3lbs/1000ft2/24h use X-Prime SF.",
    primer: "X-Prime SF",
    coats: 1,
    wft: 100,
    perLitre: 10,
  },
  {
    id: "mid",
    label: "MVER 3 to 5",
    text: "If the MVER is 3 to 5 lbs/1000ft2/24h use a single coat X-Prime MT100 at 165 microns wft.",
    primer: "X-Prime MT100",
    coats: 1,
    wft: 165,
    // 5 m² per litre at 200 microns, so 200/165 of that at 165 microns.
    perLitre: 5 * (200 / 165),
  },
  {
    id: "high",
    label: "MVER 5 to 12",
    text: "If the MVER is 5 to 12 lbs/1000ft2/24h use two coats of X-Prime MT100 at 200 microns wft per coat.",
    primer: "X-Prime MT100",
    coats: 2,
    wft: 200,
    perLitre: 5,
  },
  {
    id: "over",
    label: "MVER over 12",
    text: "Contact X-Calibur for guidance when MVER is greater than 12 lbs/1000ft2/24h.",
    primer: null,
    coats: 0,
    wft: null,
    perLitre: null,
  },
];

/** The rates the calculator uses (sheet), litres and square metres. */
export const rates = {
  /** m² per litre at 150 microns wet film. */
  basePerLitre: 6.6,
  /** Litres per m² per millimetre: 1.5 L at 1.5 mm, 2 L at 2 mm. */
  topPerMm: 1,
  topMin: 1.5,
  topMax: 2,
  /** One ground connection "for a 100m2 of floor", typically (method 8.1). */
  groundPerM2: 100,
  /** One resistance reading "at least every 50m2" (method 12.0). */
  readingPerM2: 50,
};

export const packs = {
  primer: [1, 5, 15],
  base: [4.5, 18],
  top: [17],
};

/** Wet film thickness, microns unless stated (method 4.1). */
export const wft = [
  { part: "X-Prime SF", value: "100 to 125" },
  { part: "X-Prime MT100", value: "165 to 200" },
  { part: "X-Tech Dissipative or Conductive Base Coat", value: "150 to 200" },
  {
    part: "X-Tech AntiStatic SLE Top Coat, Conductive or Dissipative",
    value: "1.5mm",
  },
];

/** Pot life in minutes at 10, 20 and 30C (method 4.2). */
export const potLife = {
  columns: ["10C", "20C", "30C"],
  rows: [
    { part: "X-Prime SF", values: ["120", "60", "30"] },
    { part: "X-Prime MT100", values: ["360", "180", "90"] },
    {
      part: "X-Tech Conductive Base Coat & X-Tech Dissipative Base Coat",
      values: ["240", "120", "60"],
    },
    { part: "X-Tech AntiStatic SLE Top Coat", values: ["120", "60", "30"] },
  ],
};

/** Pot life at 25C (77F), minutes (sheet). */
export const potLifeSheet = [
  { part: "X-Prime SF", value: "75 mins" },
  { part: "X-Prime MT100", value: "120 mins" },
  { part: "X-Tech AntiStatic SLE Base Coat", value: "90 mins" },
  { part: "X-Tech AntiStatic SLE Top Coat", value: "45 mins" },
];

/** Recoat times in hours, min and max at 10, 20 and 30C (method 4.3). */
export const recoat = {
  columns: ["10C min", "10C max", "20C min", "20C max", "30C min", "30C max"],
  rows: [
    { part: "X-Prime SF", values: ["36", "72", "12", "48", "6", "24"] },
    { part: "X-Prime MT100", values: ["48", "72", "12", "48", "8", "24"] },
    {
      part: "X-Tech Conductive Base Coat & X-Tech Dissipative Base Coat",
      values: ["36", "72", "12", "48", "8", "24"],
    },
  ],
  note: "Whenever possible avoid going to the maximum recoat time. Application of the next layer should be carried out as soon as possible to prevent contamination from people walking over the surface dust and dew etc.",
};

/** Full cure in days (method 4.4). */
export const fullCure = [
  { at: "10C", value: "12 days" },
  { at: "20C", value: "7 days" },
  { at: "30C", value: "5 days" },
];
export const fullCureNote =
  "Do not expose the surface to water or cleaning solutions until fully cured.";

/** Temperature and humidity limitations (method 4.5, sheet). */
export const limits = [
  "Maximum temperature of the mixed materials and substrate is to be 35C at the time of application.",
  "Minimum temperature of the mixed materials and substrate is to be 10C at the time of application.",
  "Do not apply within 3C of the dewpoint or if it is within 5C of the dewpoint and dropping.",
  "Maximum ambient relative humidity of 85%.",
];

/** Surface preparation (sheet). */
export const preparation = [
  "The substrate must be structurally sound. Loose or unsound concrete should be removed and made good.",
  "Surfaces must be entirely free of oil, grease, paint, corrosion deposits, dust, laitance or other surface deposits.",
  "The surface should be prepared by captive blasting to produce a lightly exposed aggregate surface i.e. a ICRI CSP 4 or 5 surface profile.",
  "Any bug holes (blow holes) should be filled with X-Shield BugFill or X-Tech Primer Filler (when using X-Prime MT100 apply BugFill or Primer Filler after priming).",
  "If substrate is not level or is uneven, level using X-Tech LevelCem HD.",
];

/** The application, step by step (sheet and method 7.0 to 10.0). */
export const steps = [
  {
    name: "Priming",
    text: "The mixed primer should then be applied to the prepared substrate with a stiff brush or roller. Do not over apply or allow puddles of primer to form. If the primer is absorbed into the surface easily, it will be necessary to apply a second coat once the initial coat is tack-free. Apply Base Coat within 24 hours of priming.",
  },
  {
    name: "Base coat",
    text: "Pour the base component into the hardener component and mix for 3 minutes. When mixed the Base Coat should be applied to the primed concrete using a medium hair roller to a wet film thickness of 150 microns. Do not pour directly onto the substrate as this may result in occasional patches of thick material, which may then not fully cure. Do not attempt to roll the Base Coat out too thin as this can affect the product's electrical properties in use.",
  },
  {
    name: "The base coat check",
    text: "The Base Coat will cure in less than 24 hours depending upon conditions and is ready to receive the Top Coat when a finger drawn across the surface picks up only minimal black traces. When cured to this stage, the resistance to earth should be 1 x 10^5 ohms or less for the Conductive Base Coat or 1 x 10^6 ohms to 1 x 10^8 ohms for the Dissipative Base Coat. Ensure test results are recorded.",
  },
  {
    name: "Top coat",
    text: "Mixing should be carried out using a forced action mixer such as a Mixit 25. Mix the base and hardener until a uniform color is achieved. Add the filler slowly during mixing and mix for a further 2 mins. Spread the mixed product using a 4mm notched vee rake followed by a pin leveller set at 1.5mm to achieve a uniform thickness 1.5mm. Immediately after spreading, roll using a spiked roller to release trapped air and remove trowel marks. Rolling should be completed within 20 minutes.",
  },
  {
    name: "Testing",
    text: "Allow the floor to cure for 2 days and test for conductivity using the test method given in ASTM F150 and the results recorded. The average resistance for a conductive floor should be between 5 x 10^4 ohms and 1 x 10^6 ohms and for a dissipative floor it should be between 5 x 10^6 ohms and 1 x 10^9 ohms. It is recommended that 1 reading is taken at least every 50m2.",
  },
];

/** Grounding (method 8.0 to 8.2, brochure). */
export const grounding = {
  grid: "When a copper tape grid is specified install over the primed surface: self adhesive conductive copper tape 10 to 12mm wide, maximum 3m centers, 150mm from edge of the wall (optional only required if specified).",
  strips:
    "Use 10 to 12mm wide x 250mm long copper strips at least 0.7mm thick. The strips should be clean and bright and bent so 150mm is adhered to the floor and connected to the copper grid (if used) and 100mm rises vertically up the wall to be connected to a tested ground point.",
  spacing:
    "Spacing of the ground strip will be decided in conjunction with the ESD team but typically would be one every 20m around the floor perimeter (typically one connection for a 100m2 of floor).",
  adhesive:
    "Adhere the copper strips to the primed surface using X-Tile Conductive Adhesive. Install the floor over the strips. After installing the base coat test the resistance to ground to ensure a good connection has been made.",
  contact:
    "Use a small (25mm) paintbrush to work the Base Coat into any ground points or bridging points (where used) as a good contact is essential at these points.",
  joints:
    "Bridging movement joints where continuous connection is required: prime the concrete surface as usual, apply 20mm wide 0.7mm thick copper strip 150mm either side of joint at 1m centers ensuring that the tape within the joint is looped at least 20mm below under the joint level. Insert X-Seal JointCord in the gap and seal the joint with X-Seal HD80 Conductive.",
  floorJoints:
    "All existing expansion or movement joints should be followed through the new floor surface. Use X-Seal HD80 Conductive as the joint sealant and size joints accordingly.",
};

/** Tools and equipment (method 3.0). */
export const tools = [
  "Captive blast or similar surface preparation equipment",
  "Hand grinder with dust extraction",
  "Industrial vacuum cleaner",
  "Slow speed drill (350 rpm)",
  "Approved mixing paddle",
  "Forced action mixer such as Mixit 25",
  "Medium pile rollers",
  "Spiked rollers",
  "Vee notched rake 4mm",
  "Pin leveler",
  "Stainless steel hand trowels, 4mm notched and plain",
  "Rapid RH test kits",
  "MVER test kits",
  "Spiked shoes",
];

/** Limitations (sheet and method 14.0). */
export const limitations = [
  "May change color when exposed to direct sunlight.",
  "Will not accommodate movement cracks.",
  "Do not use solvent to finish the surface.",
  "Do not apply below 10C.",
  "Do not apply at thicknesses greater than those mentioned.",
  "Do not expose the surface to water or cleaning solutions until fully cured.",
  "If any dust is present during application “fish eyes” may occur.",
  "Avoid skin contact.",
];

export const labour =
  "Application of epoxy flooring is a skilled trade and should only be carried out by experienced installers. Application by unskilled labor may result in a poor surface finish, variable thickness and high wastage.";

/**
 * The cutaway render from the brochure (docs/IMAGE-PROVENANCE.md 3q) with
 * six pins: the brochure numbers the primer, undercoat and topcoat 1 to 3;
 * 4 to 6 are the grounding parts and the slab, from the method statement.
 * Positions are percentages of the picture, measured by eye on a grid.
 */
export const cutaway = {
  src: "/images/x-calibur/antistatic/cutaway.webp",
  width: 1600,
  height: 1003,
  alt: "Cutaway drawing of the X-Tech AntiStatic SLE floor: a concrete slab, a white primed surface with a grid of copper tape over it, a black conductive base coat and a red self smoothing top coat peeled back at one corner, with a copper strip rising at the far edge to the earth connection",
};

export const pins = [
  { n: 1, x: 17, y: 41 },
  { n: 2, x: 47, y: 44 },
  { n: 3, x: 56, y: 21 },
  { n: 4, x: 44, y: 54 },
  { n: 5, x: 85, y: 24 },
  { n: 6, x: 50, y: 79 },
];

const value = (item: string, v: string) => ({ item, value: v });

export const hotspotEntries: HotspotEntry[] = [
  {
    n: 1,
    layer: "Epoxy primer: X-Prime SF, or X-Prime MT100 on a damp slab",
    products: [
      {
        slug: "x-prime-sf",
        name: "X-Prime SF",
        type: "Epoxy primer, 0 g/L VOC",
        href: `${PATH}#x-prime-sf`,
        external: false,
        values: [
          value("Coverage", "10 m² per litre at 100 microns wft"),
          value("Wet film", "100 to 125 microns"),
          value("Pot life at 25C", "75 mins"),
          value("Packs", "1, 5 and 15 L"),
        ],
      },
      {
        slug: "x-prime-mt100",
        name: "X-Prime MT100",
        type: "Epoxy primer for slabs with an MVER of 3 to 12",
        href: `${PATH}#x-prime-mt100`,
        external: false,
        values: [
          value("Coverage", "5 m² per litre at 200 microns wft"),
          value("Wet film", "165 to 200 microns"),
          value("Pot life at 25C", "120 mins"),
          value("Packs", "1, 5 and 15 L"),
        ],
      },
    ],
  },
  {
    n: 2,
    layer: "Base coat: water dispersed epoxy, conductive or dissipative grade",
    products: [
      {
        slug: "x-tech-antistatic-sle",
        name: "X-Tech AntiStatic SLE Base Coat",
        type: "Conductive grade (CG) or dissipative grade (DG)",
        href: PRODUCT_PATH,
        external: true,
        values: [
          value("Coverage", "6.6 m² per litre at 150 microns wft"),
          value("Check before top coat, CG", "1 x 10^5 ohms or less"),
          value("Check before top coat, DG", "1 x 10^6 to 1 x 10^8 ohms"),
          value("Packs", "4.5 and 18 L"),
        ],
      },
    ],
  },
  {
    n: 3,
    layer: "Top coat: self smoothing solvent free epoxy, 1.5 to 2 mm",
    products: [
      {
        slug: "x-tech-antistatic-sle-top",
        name: "X-Tech AntiStatic SLE Top Coat",
        type: "Self smoothing, eight RAL colours",
        href: PRODUCT_PATH,
        external: true,
        values: [
          value("Coverage", "1.5 L per m² at 1.5 mm"),
          value("Thickness", "1.5 to 2 mm"),
          value("Pot life at 25C", "45 mins"),
          value("Packs", "17 L"),
        ],
      },
    ],
  },
  {
    n: 4,
    layer: "Copper tape grid, when specified: maximum 3 m centres, 150 mm from the wall",
    products: [
      {
        slug: "copper-tape",
        name: "Self adhesive conductive copper tape",
        type: "Grounding grid over the primed surface",
        href: `${PATH}#copper-tape`,
        external: false,
        values: [
          value("Width", "10 to 12 mm"),
          value("Thickness", "at least 0.7 mm"),
          value("Centres", "maximum 3 m"),
          value("From the wall", "150 mm"),
        ],
      },
    ],
  },
  {
    n: 5,
    layer: "Connection to ground: a copper strip up the wall to a tested ground point",
    products: [
      {
        slug: "copper-strip",
        name: "Copper strip, 10 to 12 mm x 250 mm",
        type: "150 mm on the floor, 100 mm up the wall, adhered with X-Tile Conductive Adhesive",
        href: `${PATH}#x-tile-conductive-adhesive`,
        external: false,
        values: [
          value("Thickness", "at least 0.7 mm"),
          value("Spacing, typically", "one every 20 m of perimeter"),
          value("Typically", "one connection per 100 m²"),
          value("After the base coat", "test the resistance to ground"),
        ],
      },
    ],
  },
  {
    n: 6,
    layer: "Concrete slab: captive blasted to ICRI CSP 4 or 5, moisture tested",
    products: [],
  },
];

export const documents: DocEntry[] = [
  {
    name: "X-Tech AntiStatic SLE technical data sheet",
    what: "The system, its grades, test data, compliance, coverage, packs and application summary, code 90070918.",
    file: SHEET_FILE,
    pages: 2,
    bytes: 327047,
  },
  {
    name: "Method Statement X-Tech AntiStatic SLE v5",
    what: "Tools, film thicknesses, pot life, recoat and cure times, moisture testing, grounding, joints and the resistance test, November 2021.",
    file: METHOD_FILE,
    pages: 6,
    bytes: 324870,
  },
  {
    name: "High Performance Conductive Floor Systems brochure",
    what: "The cutaway drawing, the nine independent test reports, the colour range and the other antistatic products in the range.",
    file: BROCHURE_FILE,
    pages: 3,
    bytes: 19281599,
    note: "18.4 MB, as issued by X-Calibur",
  },
];

export const faq: FaqItem[] = [
  {
    q: "What is the difference between an antistatic floor, a conductive floor and a dissipative floor?",
    lead: "X-Calibur's sheet grades the floor by its electrical resistance, point to point and to ground.",
    points: [
      "Conductive grade (CG): 5 x 10^4 to 1 x 10^6 ohms",
      "Dissipative grade (DG): 5 x 10^6 to 1 x 10^9 ohms",
      "Both are X-Tech AntiStatic SLE: the same primer and top coat, a base coat of the chosen grade",
    ],
  },
  {
    q: "Which primer goes under an antistatic epoxy floor?",
    lead: "The moisture test decides: X-Prime SF on a dry slab, X-Prime MT100 where the slab breathes moisture.",
    points: [
      "RH over 80% to ASTM F2170 calls for an MVER test to ASTM F1869",
      "MVER under 3: X-Prime SF; 3 to 5: one coat of X-Prime MT100 at 165 microns; 5 to 12: two coats at 200 microns",
      "Over 12 lbs/1000ft²/24h: contact X-Calibur",
    ],
  },
  {
    q: "How is a conductive floor earthed?",
    lead: "Copper strips from the floor up the wall to a tested ground point, and a copper tape grid when one is specified.",
    points: [
      "Strips 10 to 12 mm wide, 250 mm long, at least 0.7 mm thick: 150 mm on the floor, 100 mm up the wall",
      "Typically one every 20 m of perimeter, one connection per 100 m² of floor, agreed with the ESD team",
      "Movement joints are bridged with copper strip and sealed with X-Seal HD80 Conductive",
    ],
  },
  {
    q: "How is the finished floor tested?",
    lead: "After 2 days of cure, by the test method in ASTM F150, with the results recorded.",
    points: [
      "One reading at least every 50 m²",
      "The base coat is checked to earth before the top coat goes on",
      "Full cure takes 12, 7 or 5 days at 10, 20 or 30C",
    ],
  },
  {
    q: "Which colours does X-Tech AntiStatic SLE come in?",
    lead: "Eight RAL colours on the sheet, four greys and four strong colours.",
    points: [
      "RAL 7035, 7042, 7043 and 7001; RAL 1017, 6017, 3002 and 5017",
      "The lightest colours that can be supplied are RAL 7035 and RAL 7001",
      "It may change colour in direct sunlight",
    ],
  },
  {
    q: "Who supplies X-Tech AntiStatic SLE in Tanzania?",
    lead: "Sahihi Construction Chemicals, X-Calibur's certified authorized distributor for Tanzania, from Dar es Salaam.",
    points: [
      "The system and its parts are supplied to order: add them to your quote list and send it",
      "The data sheet, the method statement and the brochure are on this page as issued",
    ],
  },
];
