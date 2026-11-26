import type { StackLayer } from "@/components/three-d/layer-stack";
import pins from "@/config/oyh-below-grade-pins.json";

/**
 * OYH "Solutions for Below-Grade Structures" (OYH Overseas Development
 * Group, 16 A3 spreads, supplied by the owner 2026-11-19;
 * public/tds/oriental-yuhong/below-grade-structures.pdf), as data for
 * /oriental-yuhong/below-grade-waterproofing.
 *
 * FACT LAW: every string below is the manual's, page by page (the `page`
 * fields are the manual's own page numbers). Property tables are "typical
 * values" as OYH prints them, with OYH's test method. None of these
 * products is on the owner's price list except PMH-3080 Plus and
 * YHRepair-2516 (which have pages of their own): the rest are "supplied to
 * order", no stock is claimed, and no price exists anywhere.
 *
 * Normalised, not changed: the manual's "℃" is written "°C", "m2" "m²",
 * "10-12" as an exponent; the manual's en dash in "1/3 to 1/2" is words. Typos in
 * the source are not reproduced: "sythetic" (synthetic), "Easy To To Line"
 * (Easy To Line), "Temperary" (Temporary), "Gextextile" (Geotextile),
 * "Reforcement" (Reinforcement), "Flexibile" (Flexible), "concretel"
 * (concrete), "Waterabsorption" (Water absorption), "Partl" (Part 1).
 *
 * The pin positions are measured off the PDF by scripts/measure-pins.mjs.
 */

export const PATH = "/oriental-yuhong/below-grade-waterproofing";
export const MANUAL_FILE = "/tds/oriental-yuhong/below-grade-structures.pdf";
export const PMH_3080_PAGE = "/oriental-yuhong/pmh-3080-plus";
export const YHREPAIR_PAGE = "/oriental-yuhong/yhrepair-2516";

const PICTURES = "/images/oriental-yuhong/below-grade";

export type PropertyRow = { item: string; method: string; value: string };

export type BgProduct = {
  slug: string;
  name: string;
  /** The type line under the name, as printed. */
  type: string;
  /** One sentence or the "For ..." line, as printed. */
  line?: string;
  features?: string[];
  /** The properties table: item, test method, typical value. */
  values?: PropertyRow[];
  /** A heading over the values table where the manual prints one. */
  valuesNote?: string;
  /** The page on this site, for the two products that have one. */
  href?: string;
  page: number;
};

export type Pin = { n: number; x: number; y: number };

export type Legend = {
  n: number;
  layer: string;
  /** Product slugs the manual prints under the layer. */
  products?: string[];
};

export type Hotspot = {
  id: string;
  title: string;
  page: number;
  picture: { src: string; width: number; height: number; alt: string };
  pins: Pin[];
  legend: Legend[];
};

export type ByStructure = { part: string; system: string; points: string[] };

export const picture = (
  name: string,
  width: number,
  height: number,
  alt: string,
) => ({ src: `${PICTURES}/${name}.webp`, width, height, alt });

/* ------------------------------------------------------------------ */
/* Products, by the manual's section                                   */
/* ------------------------------------------------------------------ */

export const products: Record<string, BgProduct> = {
  // 3.1 HDPE pre-applied system (pages 7 and 8)
  "pmh-3040": {
    slug: "pmh-3040",
    name: "PMH-3040 PLUS / PMH-3040",
    type: "High Density Polyethylene (HDPE) Pre-applied Waterproof Membrane",
    line: "PMH-3040: single-sided self-adhesive lap. PMH-3040 PLUS: double-sided self-adhesive lap. Layers: HDPE sheet, pressure-sensitive adhesive layer, weather-resistant coating, release film.",
    features: [
      "Durable in Harsh Conditions: maintains reliable full bonding with the concrete structure under ground settlement, wet weather, freeze-thaw cycles and repeated wet/dry exposure, preventing lateral water migration.",
      "Fast & Efficient Installation: easy roll-out, liner-free application and compatibility with permanent formwork reduce installation time, labor costs and site waste.",
      "Robust Waterproof Protection: high puncture resistance and prevention of lateral water migration provide durable protection during construction and service.",
      "Chemical & Gas Resistance: resists salt and sulphate attack in most soils and waters while providing protection against methane and radon gases.",
    ],
    values: [
      { item: "Tensile strength", method: "ASTM D412", value: "28 MPa" },
      { item: "Elongation at break", method: "ASTM D412", value: "500 %" },
      { item: "Puncture resistance", method: "ASTM E154", value: "1000 N" },
      {
        item: "Peel adhesion to concrete",
        method: "ASTM D903",
        value: "1800 N/m",
      },
      {
        item: "Resistance to hydrostatic head",
        method: "ASTM D5385",
        value: "71 m",
      },
      { item: "Peel strength in lap", method: "ASTM D1876", value: "1800 N/m" },
      {
        item: "Crack cycling, 100 cycles at -23 °C",
        method: "ASTM C1305",
        value: "Passed",
      },
      {
        item: "Water vapour transmission",
        method: "ASTM E96 Method B",
        value: "0.0043 g/(m².h)",
      },
      {
        item: "Methane gas transmission rate",
        method: "ASTM D 1434",
        value: "40 mL/day·m²·atm",
      },
      {
        item: "Radon diffusion coefficient",
        method: "ISO/TS 11665-13",
        value: "1.7 x 10⁻¹² m²/s",
      },
    ],
    page: 7,
  },
  "pmh-3080": {
    slug: "pmh-3080",
    name: "PMH-3080 / PMH-3080 PLUS",
    type: "High Density Polyethylene (HDPE) Pre-applied Waterproof Membrane",
    line: "PMH-3080: single-sided self-adhesive lap. PMH-3080 PLUS: double-sided self-adhesive lap. Layers: HDPE sheet, pressure-sensitive adhesive layer, weather resistance granular layer.",
    features: [
      "High Mechanical Strength: excellent tensile strength and puncture resistance for reliable protection.",
      "No Water Migration: fully and permanently bonded to post-poured concrete to prevent lateral water movement.",
      "Flexible & Efficient Installation: multiple overlap options, including bonding or welding, with simplified construction and no primer required.",
      "System Compatibility & Cost Saving: compatible with self-adhesive bitumen and polyurethane systems, while reducing protective layers, labor, materials and equipment.",
    ],
    values: [
      { item: "Tensile strength", method: "ASTM D412", value: "21 MPa" },
      { item: "Elongation at break", method: "ASTM D412", value: "500%" },
      { item: "Puncture resistance", method: "ASTM E154", value: "1000 N" },
      {
        item: "Peel adhesion to concrete",
        method: "ASTM D903",
        value: "1800 N/m",
      },
      {
        item: "Resistance to hydrostatic head",
        method: "ASTM D5385",
        value: "71 m",
      },
      { item: "Peel strength in lap", method: "ASTM D1876", value: "1000 N/m" },
      {
        item: "Crack cycling 100 cycles at -23 °C",
        method: "ASTM C1305",
        value: "Passed",
      },
      {
        item: "Water vapour transmission",
        method: "ASTM E96 Method B",
        value: "0.0043 g/(m².h)",
      },
      { item: "Water absorption", method: "ASTM 570", value: "0.5%" },
      {
        item: "Flexibility at low temperature",
        method: "ASTM D1970",
        value: "At -29 °C, no crack",
      },
    ],
    href: PMH_3080_PAGE,
    page: 8,
  },
  "pmh-3046": {
    slug: "pmh-3046",
    name: "PMH-3046",
    type: "High Density Polyethylene (HDPE) Post-applied Waterproof Membrane",
    line: "PMH-3046 is a 4 layer cross laminated HDPE post-applied self-adhesive waterproofing membrane, designed for underground structure side walls and roof slabs, working together with PMH 3040/3040PLUS, PMH 3080/3080PLUS to form an integrated system for below-grade waterproofing. Layers: HDPE cross-laminated film, pressure-sensitive adhesive layer, release film.",
    features: [
      "Sidewalls Full Bonding: designed for underground structural side walls, forming a continuous full bond with the concrete substrate.",
      "Compatible with Pre-applied HDPE: compatible with pre-applied HDPE membrane, forming an integrated below-grade waterproofing system.",
      "High Mechanical Strength: HDPE cross-laminated film provides excellent tensile, tear and puncture resistance.",
      "Fast & Compatible Installation: self-adhesive application enables fast installation and easy integration with the PMH waterproofing system.",
    ],
    values: [
      { item: "Tensile strength", method: "ASTM D412", value: "16 MPa" },
      { item: "Elongation at break", method: "ASTM D412", value: "300%" },
      { item: "Puncture resistance", method: "ASTM E154", value: "500 N" },
      { item: "Tear strength", method: "ASTM D624", value: "250 N/mm" },
      {
        item: "Peel strength to concrete (with primer)",
        method: "ASTM D903",
        value: "1.5 N/mm",
      },
      {
        item: "Low temperature flexibility (-29 °C)",
        method: "ASTM D1970",
        value: "No Cracks",
      },
      {
        item: "Crack cycling at -23 °C, 100 cycles",
        method: "ASTM C836",
        value: "Unaffected",
      },
      {
        item: "Water vapour transmission",
        method: "ASTM E96",
        value: "5.7 ng/Pa·s·m²",
      },
      { item: "Water absorption", method: "ASTM 570", value: "0.1%" },
    ],
    page: 9,
  },
  // 3.2 FPO pre-applied system (pages 10 and 11)
  "yhfpopre-3210": {
    slug: "yhfpopre-3210",
    name: "YHFPOpre-3210",
    type: "FPO Pre-applied Waterproof Membrane",
    line: "YHFPOpre-3210 is a flexible polyolefin pre-applied waterproof membrane designed for below-grade concrete structures. It combines a flexible FPO sheet, pressure-sensitive adhesive and granule-faced bonding layer to achieve full bonding with cast-in-place concrete, while hot-air welded seams provide reliable watertightness and help prevent lateral water migration.",
    features: [
      "High Flexibility: excellent flexibility accommodates substrate movement, deformation and complex details while maintaining reliable waterproofing performance.",
      "Flexible & Reliable Lap Joints: lap joints can be either hot-air welded or adhesively bonded, offering flexible application and reliable sealing.",
      "Fully Bonded System: forms a continuous bond with concrete, effectively limiting lateral water migration and improving long-term waterproofing reliability.",
      "Fast & Reliable Installation: pre-applied installation enables fast construction and efficient integration with concrete works.",
    ],
    values: [
      { item: "Tensile strength", method: "EN 12311-2", value: "800 N/50mm" },
      { item: "Elongation at break", method: "EN 12311-2", value: "700 %" },
      {
        item: "Resistance to tearing (Nail Shank)",
        method: "EN 12310-1",
        value: "500 N",
      },
      {
        item: "Watertightness (method B: 24 hours at 60kPa)",
        method: "EN 1928",
        value: "Pass",
      },
      {
        item: "Peel resistance of joints N/50mm",
        method: "EN 12316-2",
        value: "71 m",
      },
      { item: "Heat resistance at 80 °C", method: "EN 1110", value: "Passed" },
      { item: "Water absorption", method: "ASTM 570", value: "0.5%" },
      {
        item: "Flexibility at low temperature",
        method: "ASTM D1970",
        value: "-29 °C",
      },
    ],
    page: 10,
  },
  "yhfpopost-3200": {
    slug: "yhfpopost-3200",
    name: "YHFPOpost-3200",
    type: "FPO Post-applied Waterproof Membrane",
    line: "YHFPOpost-3200 is a flexible self-adhesive FPO post-applied waterproof membrane designed for below-grade concrete structures. It forms a continuous full bond with the concrete substrate, providing reliable waterproofing and preventing lateral water migration. Layers: flexible FPO sheet, pressure-sensitive adhesive layer, release film.",
    features: [
      "Flexible & Fully Bonded: high-flexibility FPO membrane forms a continuous full bond with concrete, preventing lateral water migration.",
      "Flexible & Reliable Lap Joints: lap joints can be either hot-air welded or adhesively bonded, offering flexible application and reliable sealing.",
      "Cold-Applied & Self-Adhesive: pressure-sensitive adhesive enables simple peel-and-stick installation without open flames.",
      "Fast & Flexible Installation: high flexibility and self-adhesive application allow quick installation on vertical and below-grade concrete surfaces.",
    ],
    values: [
      {
        item: "Tensile strength (L/T)",
        method: "EN 12311-2",
        value: "10/8 MPa",
      },
      { item: "Elongation at break", method: "EN 12311-2", value: "400 %" },
      {
        item: "Tear strength (L/T)",
        method: "EN 12310-2",
        value: "250/300 N/mm",
      },
      {
        item: "Watertightness (method B: 24 hours at 60kPa)",
        method: "EN 1928",
        value: "Pass",
      },
      {
        item: "Peel strength to concrete",
        method: "EN 1372",
        value: "100 N/50mm",
      },
      {
        item: "Low temperature flexibility at -30 °C",
        method: "EN 1109",
        value: "No Cracks",
      },
      {
        item: "Joint shear resistance",
        method: "EN 12317-2",
        value: "150 N/50mm",
      },
    ],
    page: 11,
  },
  // 3.3 Accessories (page 12)
  "yhprimer-1000": {
    slug: "yhprimer-1000",
    name: "YHPrimer-1000",
    type: "Water-Based Epoxy Primer (for PMH-3046)",
    line: "For concrete surfaces, compatible with HDPE self-adhesive membrane.",
    features: [
      "Self-leveling and easy to apply",
      "Blocks moisture vapor",
      "Excellent penetration and adhesion",
    ],
    page: 12,
  },
  "pmh-s-600": {
    slug: "pmh-s-600",
    name: "PMH-S-600",
    type: "HDPE Detailing Sealant",
    line: "For pile heads, pipe penetrations and critical concrete interfaces.",
    features: ["Damp-tolerant", "Low Shrinkage", "Seals multiple substrate"],
    page: 12,
  },
  "pmh-t-160": {
    slug: "pmh-t-160",
    name: "PMH-T-160",
    type: "Butt Joint Tape (for PMH-3080 / PMH-3080 PLUS)",
    line: "For short-end butt joints and temporary fixing of granular HDPE membranes.",
    features: [
      "For short-side joints",
      "Robust carrier",
      "Roller compaction required",
    ],
    page: 12,
  },
  "pmh-t-c-120": {
    slug: "pmh-t-c-120",
    name: "PMH-T-C-120",
    type: "Coating Cover Tape (for PMH-3040 / PMH-3040 PLUS)",
    line: "For end laps, T-joints and minor repairs on smooth-surface pre-applied membranes.",
    features: ["Concrete Bonding", "Strong Adhesion", "Fast Repair"],
    page: 12,
  },
  "pmh-t-s80": {
    slug: "pmh-t-s80",
    name: "PMH-T-S80",
    type: "Sand Cover Tape (for PMH-3080 / PMH-3080 PLUS)",
    line: "For membrane repairs, end laps, corners and mechanically fixed penetrations.",
    features: ["Concrete Bonding", "Fast Repair", "Fully Bonded Detailing"],
    page: 12,
  },
  "pmh-t-d80": {
    slug: "pmh-t-d80",
    name: "PMH-T-D80",
    type: "Double-sided Tape (for PMH-3040 / PMH-3040 PLUS)",
    line: "For end laps, T-joints, penetrations and membrane repairs.",
    features: ["Strong Adhesion", "Easy Application", "Versatile Detailing"],
    page: 12,
  },
  // Products named only in the build-ups (pages 5, 6, 13, 14, 19, 20)
  "yhwater-stop": {
    slug: "yhwater-stop",
    name: "YHWater stop",
    type: "Slab water stop",
    page: 6,
  },
  "yhtape-2022d": {
    slug: "yhtape-2022d",
    name: "YHTape-2022D",
    type: "Double-side butyl tape",
    page: 6,
  },
  "yhtape-2022fl": {
    slug: "yhtape-2022fl",
    name: "YHTape-2022FL",
    type: "Single-side butyl tape",
    page: 6,
  },
  "yh-xps": {
    slug: "yh-xps",
    name: "YH XPS",
    type: "Protective board",
    page: 6,
  },
  "tdf-geotextile": {
    slug: "tdf-geotextile",
    name: "TDF geotextile",
    type: "Separation layer",
    page: 6,
  },
  "pmh-3041": {
    slug: "pmh-3041",
    name: "PMH-3041",
    type: "Post-applied HDPE membrane",
    page: 6,
  },
  yhdrainpro: {
    slug: "yhdrainpro",
    name: "YHDrainPro",
    type: "Drainage board as protection layer",
    page: 6,
  },
  yhshield: {
    slug: "yhshield",
    name: "YHShield torch-applied membrane",
    type: "Bituminous membrane",
    page: 14,
  },
  yhstick: {
    slug: "yhstick",
    name: "YHStick self-adhesive membrane",
    type: "Bituminous membrane",
    page: 14,
  },
  yhbituprimer: {
    slug: "yhbituprimer",
    name: "YHBituprimer",
    type: "Bituminous primer",
    page: 14,
  },
  yhprimcoat: {
    slug: "yhprimcoat",
    name: "YHPrimCoat",
    type: "Waterborne primer",
    page: 14,
  },
  yhbitucoat: {
    slug: "yhbitucoat",
    name: "YHBitucoat cold-applied bituminous coating",
    type: "Bituminous waterproofing coating",
    page: 14,
  },
  "yhshield-anti-root": {
    slug: "yhshield-anti-root",
    name: "YHShield anti-root membrane",
    type: "Anti-root bituminous membrane",
    page: 14,
  },
  "yh-concrete-admixture": {
    slug: "yh-concrete-admixture",
    name: "YH concrete admixture",
    type: "Initial and secondary support",
    page: 20,
  },
  // 3.5 Waterstop system (page 16)
  "yhwaterstop-epdm": {
    slug: "yhwaterstop-epdm",
    name: "YHWaterstop-EPDM",
    type: "Rubber Waterstop",
    line: "Rubber waterstop designed to seal construction and deformation joints in concrete structures and prevent water leakage and seepage.",
    features: [
      "High Elasticity",
      "Strong Deformation Adaptability",
      "Excellent Water Sealing",
    ],
    page: 16,
  },
  "yhwaterstop-pvc": {
    slug: "yhwaterstop-pvc",
    name: "YHWaterstop-PVC",
    type: "Flexible PVC Waterstop",
    line: "Flexible thermoplastic PVC waterstop designed to stop water migration through construction and expansion joints in concrete structures.",
    features: [
      "Effective Water Sealing",
      "Easy On-site Welding",
      "Ribbed Water Barrier",
    ],
    page: 16,
  },
  yhswellbar: {
    slug: "yhswellbar",
    name: "YHSwellbar",
    type: "Swellable Joint Sealing Waterbar",
    line: "Hydrophilic rubber sealing strip that expands upon contact with water to seal concrete joints.",
    features: [
      "Water-Activated Swelling",
      "Salt Tolerant",
      "No Welding Required",
    ],
    page: 16,
  },
  yhswellseal: {
    slug: "yhswellseal",
    name: "YHSwellSeal",
    type: "Hydrophilic Swellable Joint Sealant",
    line: "One-component polyurethane hydrophilic sealant that swells in contact with water to seal construction joints and penetrations in concrete structures.",
    features: [
      "1-Part & Easy Application",
      "Water-Activated Expansion",
      "Excellent Adhesion",
    ],
    page: 16,
  },
  // 3.6 Drainage board system (page 18)
  "yhdrainpro-201": {
    slug: "yhdrainpro-201",
    name: "YHDrainPro-201",
    type: "Plastic Drainage Board",
    line: "YHDrainPro-201 Plastic Drainage Board is a high-performance drainage and protection layer manufactured from high-density polyethylene through a continuous thermoforming process.",
    features: [
      "High Strength & Protection",
      "Efficient Drainage & Pressure Relief",
      "Durable & Resistant",
      "Easy To Line",
    ],
    values: [
      { item: "Tensile strength", method: "Technical data", value: "16 MPa" },
      { item: "Elongation at break", method: "Technical data", value: "500%" },
      { item: "Water absorption", method: "Technical data", value: "0.1" },
      { item: "Density", method: "Technical data", value: "0.94 kg/m³" },
      {
        item: "Compression performance: maximum strength at 20% compression",
        method: "Technical data",
        value: "350KPa",
      },
      {
        item: "Compression performance: limit compression phenomena",
        method: "Technical data",
        value: "No cracks",
      },
      {
        item: "Low-temperature flexibility",
        method: "Technical data",
        value: "No cracks at -10°C",
      },
    ],
    page: 18,
  },
  "yhdrainpro-202": {
    slug: "yhdrainpro-202",
    name: "YHDrainPro-202",
    type: "Composite Plastic Drainage Board",
    line: "The composite drainage board is an extruded and moulded high-density polyethylene (HDPE) panel, with a concave-convex surface. It is adhered to a layer of geotextile, which filters soil particles and prevents clogging of drainage channels, ensuring unobstructed water flow.",
    features: [
      "High Strength & Protection",
      "Efficient Drainage & Pressure Relief",
      "Reliable Filtration",
      "Easy To Line",
    ],
    values: [
      {
        item: "Geo-composite drainage board: mass per unit area",
        method: "Technical data",
        value: "700g/m²",
      },
      {
        item: "Geo-composite drainage board: thickness",
        method: "Technical data",
        value: "8mm",
      },
      {
        item: "Geo-composite drainage board: tensile strength",
        method: "Technical data",
        value: "10.2kN/m",
      },
      {
        item: "Geo-composite drainage board: elongation at break",
        method: "Technical data",
        value: "55%",
      },
      {
        item: "Geo-composite drainage board: in-plane water flow capacity (20KPa)",
        method: "Technical data",
        value: "1.9l/(m.s)",
      },
      {
        item: "Non-woven fabric: mass per unit area",
        method: "Technical data",
        value: "100g/m²",
      },
      {
        item: "Non-woven fabric: tensile strength",
        method: "Technical data",
        value: "6.0kN/m",
      },
      {
        item: "Non-woven fabric: elongation at break",
        method: "Technical data",
        value: ">55%",
      },
      {
        item: "Non-woven fabric: cone drop test",
        method: "Technical data",
        value: "34mm",
      },
      {
        item: "Non-woven fabric: CBR puncture resistance",
        method: "Technical data",
        value: "1200N",
      },
    ],
    page: 18,
  },
  // 4.1 Tunnel waterproofing sheet membrane (pages 21 and 22)
  "pme-eva": {
    slug: "pme-eva",
    name: "PME-EVA",
    type: "Plastic Waterproof Sheet",
    line: "Standards applied: Type A, GB-grade product, comply with the standards of Resin JS2 in 'Macromolecular Waterproof Material Part 1: Sheet' (GB 18173.1-2012). Type B, MTR-grade product, comply with the same standards; in addition, the content of VA must be more than 5%. Type C, Railway-grade product, comply with the standards of 'Railway Tunnel Waterproof Material Part 1: Waterproof Sheet' (TB/T 3360.1-2014).",
    features: [
      "Good Welding Performance: optimized VA content provides stable flexibility and welding temperature window.",
      "Superior Mechanical Strength: excellent tensile strength, tear resistance, elongation and resistance to stress cracking.",
      "Easy & Reliable Welding: easy roll-out, liner-free application and compatibility with permanent formwork reduce installation time, labor cost and site waste.",
      "Durability & Chemical Resistance: resists salt and sulphate attack in most soils and waters while providing protection against methane and radon gases.",
    ],
    valuesNote: "Test method column: the technical indication of GB 18173.1.",
    values: [
      { item: "Tensile strength (23 °C)", method: ">16 MPa", value: "18 MPa" },
      { item: "Elongation at break (23 °C)", method: ">550 %", value: "650 %" },
      { item: "Tear strength", method: ">60 kN/m", value: "100 kN/m" },
      {
        item: "Impermeability (30 mins)",
        method: "0.3MPa, no leakage",
        value: "0.3MPa, no leakage",
      },
      {
        item: "Flexibility at low temperature",
        method: "-35 °C, no cracks",
        value: "-35 °C, no cracks",
      },
    ],
    page: 21,
  },
  "pmh-6010": {
    slug: "pmh-6010",
    name: "PMH 6010",
    type: "HDPE Semi Transparent Pre-applied Waterproof Membrane",
    line: "PMH-6010 HDPE Semi-Transparent Pre-applied Membrane consists of an HDPE film, pressure-sensitive adhesive, protective coating and release liner. For 1.2m width membrane, one long edge has a reserved 80mm wide self-adhesive overlap as cold apply. For 2.4m width membrane, both long edge have 150mm wide welding strips, used for tunnel with large deformation or rough surface lining.",
    features: [
      "No Water Migration: fully bonded to concrete for enhanced waterproofing reliability. Prevents lateral water movement between the membrane and the concrete structure.",
      "Excellent Durability: high chemical resistance with a service life matching the structure. Maintains stable waterproofing performance under long-term underground exposure.",
      "Easy & Efficient Installation: lightweight, transparent membrane with weld-friendly overlaps. Simplifies seam treatment and improves installation efficiency on site.",
      "Environmentally Friendly: free from harmful chemicals and safe for water and soil. Supports sustainable construction with minimal environmental impact.",
    ],
    values: [
      { item: "Luminous transmittance", method: "ASTM D1003-21", value: "60%" },
      {
        item: "Tensile strength",
        method: "BS EN 12311-2:2013 B",
        value: "25N/mm²",
      },
      {
        item: "Elongation at break",
        method: "BS EN 12311-2:2013 B",
        value: "500%",
      },
      {
        item: "Resistance to tearing",
        method: "BS EN 12310-1:2000",
        value: "700N",
      },
      {
        item: "Shear resistance of joints",
        method: "BS EN 12317-2:2010",
        value: "800N/50mm",
      },
      {
        item: "Peel adhesion to concrete",
        method: "ASTM D903-98(2017)",
        value: "2000N/m",
      },
      {
        item: "Water vapour transmission",
        method: "BS EN 1931:2000 B",
        value: "7mg/(m².h)",
      },
      {
        item: "Flexible at low temperature",
        method: "BS EN 495-5:2013",
        value: "No Visible Crack",
      },
      {
        item: "Dimensional stability",
        method: "BS EN 1107-2: 2001",
        value: "-0.4%",
      },
    ],
    page: 22,
  },
  // 4.2 Geotextile (pages 23 and 24)
  "tdf-hs": {
    slug: "tdf-hs",
    name: "TDF HS Series Polypropylene Continuous Filament Geotextiles",
    type: "Geotextile, HS 100 to HS 1000",
    line: "TDF HS Series geotextiles are needle-punched continuous filament geotextiles and made of 100% virgin polypropylene with UV resistance. They have been widely applied in civil engineering and geotechnical engineering such as pavement, railway, landfill, construction, hydraulic, landscaping and other application.",
    features: [
      "High Strength Coarse Denier",
      "High Mechanical Properties",
      "Excellent Alkali Resistance",
      "Easy To Line",
    ],
    valuesNote:
      "Guidance of selection, as the manual's chart reads: the grades it marks for each use.",
    values: [
      {
        item: "Pavement construction, reinforcing soft subgrade",
        method: "Guidance of selection",
        value: "HS 100 to HS 400",
      },
      {
        item: "Hydraulic engineering, separation & protection",
        method: "Guidance of selection",
        value: "HS 200 to HS 500",
      },
      {
        item: "Landfill, drainage, protecting geomembranes",
        method: "Guidance of selection",
        value: "HS 200 to HS 700",
      },
      {
        item: "Railway construction, buffer layer",
        method: "Guidance of selection",
        value: "HS 300 to HS 1000",
      },
      {
        item: "Environmental protection, filtration & erosion control",
        method: "Guidance of selection",
        value: "HS 100 to HS 400",
      },
    ],
    page: 23,
  },
  "tdf-g": {
    slug: "tdf-g",
    name: "TDF G Series Polyester Continuous Filament Geotextiles",
    type: "Geotextile, G 100 to G 800",
    line: "TDF G Series geotextiles are needle-punched continuous filament geotextiles and made of 100% virgin polyester with excellent aging resistance. They can replace traditional construction materials & methods, making construction safer, and solving basic problems in construction in a more economical, effective and long-lasting manner.",
    features: [
      "High Puncture Strength",
      "Creep Resistance",
      "Excellent UV Resistance",
      "Easy To Line",
    ],
    valuesNote:
      "Guidance of selection, as the manual's chart reads: the grades it marks for each use.",
    values: [
      {
        item: "Pavement construction, reinforcing soft subgrade",
        method: "Guidance of selection",
        value: "G 200 to G 450",
      },
      {
        item: "Hydraulic engineering, separation & protection",
        method: "Guidance of selection",
        value: "G 250 to G 600",
      },
      {
        item: "Landfill, drainage, protecting geomembranes",
        method: "Guidance of selection",
        value: "G 150 to G 400",
      },
      {
        item: "Railway construction, buffer layer",
        method: "Guidance of selection",
        value: "G 100 to G 250",
      },
      {
        item: "Environmental protection, filtration & erosion control",
        method: "Guidance of selection",
        value: "G 100 to G 350",
      },
    ],
    page: 24,
  },
  // 5.1 Grouting and injection materials (page 29)
  "yhacgrout-2101": {
    slug: "yhacgrout-2101",
    name: "YHACgrout-2101",
    type: "Elastic Polyacrylic Injection Resin",
    line: "For curtain injection and fine water-bearing cracks.",
    features: [
      "Ultra-low Viscosity",
      "Adjustable Gel Time",
      "Permanent Elasticity",
    ],
    page: 29,
  },
  "yhpugrout-2102": {
    slug: "yhpugrout-2102",
    name: "YHPUgrout-2102",
    type: "Hydrophilic Polyurethane Injection Resin",
    line: "For wet, leaking and running-water cracks.",
    features: [
      "Flexible Gel Formation",
      "Wet-condition Application",
      "Ready to Use",
    ],
    page: 29,
  },
  "yhpugrout-2103": {
    slug: "yhpugrout-2103",
    name: "YHPUgrout-2103",
    type: "Polyurethane Injection Resin",
    line: "For rapid water stopping and leak sealing.",
    features: ["Rapid Foaming", "High Expansion", "Rigid Closed-cell Foam"],
    page: 29,
  },
  "yhpugrout-2104": {
    slug: "yhpugrout-2104",
    name: "YHPUgrout-2104",
    type: "Self-leveling Crack-repairing Sealant",
    line: "For horizontal concrete cracks.",
    features: ["Concrete Bonding", "Strong Adhesion", "Fast Repair"],
    page: 29,
  },
  "yhepgrout-2106": {
    slug: "yhepgrout-2106",
    name: "YHEPgrout-2106",
    type: "High Penetration Modified Epoxy Grout",
    line: "For crack sealing, minor leak sealing and concrete reinforcement.",
    features: [
      "Low Viscosity & High Penetration",
      "Cures & Bonds in Water",
      "High Strength & Impermeability",
    ],
    page: 29,
  },
  yhinjehose: {
    slug: "yhinjehose",
    name: "YHInjehose",
    type: "Re-injectable Hose",
    line: "For sealing watertight construction joints and providing back-up waterstop protection.",
    features: [
      "Multiple Re-injections",
      "Versatile Injection Materials",
      "Easy & Secure Installation",
    ],
    page: 29,
  },
  // 5.2 Negative repairing materials (page 30)
  "yhcrystal-2510": {
    slug: "yhcrystal-2510",
    name: "YHCrystal-2510",
    type: "Cementitious Crystalline Concrete Coating",
    line: "For permanent waterproofing of concrete on positive and negative sides.",
    features: [
      "Deep Crystalline Penetration",
      "Self-Heals Cracks up to 0.4 mm",
      "Positive & Negative Side Application",
    ],
    page: 30,
  },
  "yhcrystal-2512": {
    slug: "yhcrystal-2512",
    name: "YHCrystal-2512",
    type: "Cementitious Crystalline Concrete Admixture",
    line: "For integral waterproofing and long-term protection of concrete structures.",
    features: [
      "Integral Crystalline Waterproofing",
      "Self-Heals Cracks up to 0.4 mm",
      "Enhanced Strength & Durability",
    ],
    page: 30,
  },
  "yhprimblock-1400": {
    slug: "yhprimblock-1400",
    name: "YHPrimBlock-1400",
    type: "Epoxy-Cementitious Moisture Barrier",
    line: "For damp concrete substrates.",
    features: ["Moisture Barrier", "Strong Adhesion", "Easy Application"],
    page: 30,
  },
  "yhcolorwall-5100": {
    slug: "yhcolorwall-5100",
    name: "YHColorWall-5100",
    type: "Decorative & Waterproofing Mastic",
    line: "For horizontal concrete cracks.",
    features: ["Concrete Bonding", "Strong Adhesion", "Fast Repair"],
    page: 30,
  },
  "yhrepair-2516": {
    slug: "yhrepair-2516",
    name: "YHRepair-2516",
    type: "Multi-Functional Waterplug",
    line: "For rapid water stopping and repair of static cracks and holes.",
    features: [
      "Rapid Setting",
      "Instant Water Stopping",
      "Strong Bonding & High Strength",
    ],
    href: YHREPAIR_PAGE,
    page: 30,
  },
  "yhepoxy-gr90": {
    slug: "yhepoxy-gr90",
    name: "YHEpoxy-GR90",
    type: "Three-component Epoxy Resin Grout",
    line: "For precision grouting and pile head treatment.",
    features: [
      "High Early & Compressive Strength",
      "Non-Shrink Performance",
      "Chemical & Impact Resistance",
    ],
    page: 30,
  },
};

/**
 * The manual's product to its page on the site, where OYH's data sheet has
 * given it one (2026-11-26). Generic manual rows (a family, not one product)
 * go to the family's first page. Rows with no sheet keep no link.
 */
export const manualPage: Record<string, string> = {
  "pmh-3040": "pmh-3040-plus",
  "pmh-3046": "pmh-3046",
  "yhfpopre-3210": "yhfpopre-3210",
  "yhprimer-1000": "yhprimer-1000",
  "pmh-s-600": "pmh-s-600",
  "pmh-t-160": "pmh-t-160",
  "pmh-t-c-120": "pmh-t-c-120",
  "pmh-t-s80": "pmh-t-s80",
  "pmh-t-d80": "pmh-t-d80",
  "yhtape-2022fl": "yhtape-2022fl",
  "pmh-3041": "pmh-3041",
  yhdrainpro: "yhdrainpro-201",
  yhshield: "yhshield-7401",
  yhstick: "yhstick-9301",
  yhbituprimer: "yhbituprimer-4035",
  yhprimcoat: "yhprimcoat-1010",
  yhbitucoat: "yhbitucoat-4500",
  "yhshield-anti-root": "yhshield-7601",
  "yh-concrete-admixture": "oyh-r100",
  "yhwaterstop-epdm": "yhwaterstop-epdm",
  "yhwaterstop-pvc": "yhwaterstop-pvc",
  yhswellbar: "yhswellbar",
  yhswellseal: "yhswellseal",
  "yhdrainpro-201": "yhdrainpro-201",
  "yhdrainpro-202": "yhdrainpro-202",
  "pmh-6010": "pmh-6010",
  "tdf-hs": "tdf-hs",
  "tdf-g": "tdf-g",
  "yhacgrout-2101": "yhacgrout-2101",
  "yhpugrout-2102": "yhpugrout-2102",
  "yhpugrout-2103": "yhpugrout-2103",
  "yhpugrout-2104": "yhpugrout-2104",
  "yhepgrout-2106": "yhepgrout-2106",
  yhinjehose: "yhinjehose",
  "yhcrystal-2510": "yhcrystal-2510",
  "yhcrystal-2512": "yhcrystal-2512",
  "yhprimblock-1400": "yhprimblock-1400",
  "yhcolorwall-5100": "yhcolorwall-5100",
  "yhepoxy-gr90": "yhepoxy-gr90",
  "yh-xps": "fuda-xps",
};

export const product = (slug: string): BgProduct => {
  const found = products[slug];
  if (!found) throw new Error(`oyh-below-grade: no product "${slug}"`);
  if (found.href || !manualPage[slug]) return found;
  return { ...found, href: `/oriental-yuhong/${manualPage[slug]}` };
};

/* ------------------------------------------------------------------ */
/* The hotspot maps                                                     */
/* ------------------------------------------------------------------ */

const measured = pins as Record<string, { page: number; pins: Pin[] }>;

export const hotspots: Record<string, Hotspot> = {
  polymer: {
    id: "polymer",
    title: "Underground waterproofing system of synthetic polymer products",
    page: 5,
    picture: picture(
      "polymer-basement",
      1600,
      1047,
      "OYH's cutaway render of a basement car park under lawn: the pre-applied membrane under the slab, post-applied membrane and drainage board on the walls, and the roof build-up",
    ),
    pins: measured.polymer.pins,
    legend: [
      { n: 1, layer: "Soil" },
      { n: 2, layer: "Blinding" },
      {
        n: 3,
        layer: "Pre-applied HDPE/FPO waterproofing membrane",
        products: ["pmh-3040", "pmh-3080", "yhfpopre-3210"],
      },
      { n: 4, layer: "Concrete basement slab" },
      { n: 5, layer: "Leveling screed" },
      { n: 6, layer: "Flooring" },
      { n: 7, layer: "Concrete basement wall / concrete basement roof" },
      { n: 8, layer: "Slab water stop", products: ["yhwater-stop"] },
      { n: 9, layer: "Concrete basement roof slab" },
      { n: 10, layer: "Plastering" },
      { n: 11, layer: "Epoxy primer", products: ["yhprimer-1000"] },
      { n: 12, layer: "Post-applied HDPE membrane", products: ["pmh-3046"] },
      { n: 13, layer: "Double-side butyl tape", products: ["yhtape-2022d"] },
      { n: 14, layer: "Single-side butyl tape", products: ["yhtape-2022fl"] },
      { n: 15, layer: "Protective board", products: ["yh-xps"] },
      { n: 16, layer: "Leveling screed" },
      {
        n: 17,
        layer: "Post-applied FPO membrane",
        products: ["yhfpopost-3200"],
      },
      { n: 18, layer: "Separation layer", products: ["tdf-geotextile"] },
      { n: 19, layer: "Protective screed" },
      { n: 20, layer: "Primer", products: ["yhprimer-1000"] },
      { n: 21, layer: "Post-applied HDPE membrane", products: ["pmh-3046"] },
      {
        n: 22,
        layer: "Drainage board as protection layer",
        products: ["yhdrainpro"],
      },
      { n: 23, layer: "Post-applied HDPE membrane", products: ["pmh-3041"] },
      {
        n: 24,
        layer: "Drainage board as protection layer",
        products: ["yhdrainpro"],
      },
    ],
  },
  bituminous: {
    id: "bituminous",
    title: "Bituminous underground waterproofing system products",
    page: 13,
    picture: picture(
      "bituminous-basement",
      1600,
      1060,
      "OYH's cutaway render of a basement car park with black bituminous membrane under the slab and on the walls, drainage board and a protective board outside",
    ),
    pins: measured.bituminous.pins,
    legend: [
      { n: 1, layer: "Soil" },
      { n: 2, layer: "Blinding" },
      { n: 3, layer: "Bituminous membrane", products: ["yhshield", "yhstick"] },
      { n: 4, layer: "Protective screed" },
      { n: 5, layer: "Concrete basement slab" },
      { n: 6, layer: "Concrete basement wall" },
      { n: 7, layer: "Concrete basement roof slab" },
      { n: 8, layer: "Water stop", products: ["yhwater-stop"] },
      { n: 9, layer: "Plastering" },
      { n: 10, layer: "Bituminous primer", products: ["yhbituprimer"] },
      {
        n: 11,
        layer: "Bituminous waterproofing membrane",
        products: ["yhshield", "yhstick"],
      },
      {
        n: 12,
        layer: "Drainage board as protection layer",
        products: ["yhdrainpro"],
      },
      { n: 13, layer: "Leveling screed" },
      {
        n: 14,
        layer: "Bituminous membrane",
        products: ["yhshield", "yhstick"],
      },
      { n: 15, layer: "Separation layer", products: ["tdf-geotextile"] },
      { n: 16, layer: "Protective screed" },
      { n: 17, layer: "Leveling screed" },
      { n: 18, layer: "Flooring" },
      { n: 19, layer: "Waterborne primer", products: ["yhprimcoat"] },
      {
        n: 20,
        layer: "Bituminous waterproofing coating",
        products: ["yhbitucoat"],
      },
      { n: 21, layer: "Protective board", products: ["yh-xps"] },
      {
        n: 22,
        layer: "Anti-root bituminous membrane",
        products: ["yhshield-anti-root"],
      },
      {
        n: 23,
        layer: "Drainage board as protection layer",
        products: ["yhdrainpro"],
      },
    ],
  },
  tunnel: {
    id: "tunnel",
    title: "Tunnel system",
    page: 19,
    picture: picture(
      "tunnel",
      1400,
      938,
      "OYH's cutaway render of a tunnel ring: surrounding rock, sprayed initial support, white geotextile, the membrane and the concrete secondary lining around a railway bed",
    ),
    pins: measured.tunnel.pins,
    legend: [
      { n: 1, layer: "Surrounding rock" },
      { n: 2, layer: "Initial support", products: ["yh-concrete-admixture"] },
      { n: 3, layer: "Geotextile", products: ["tdf-geotextile"] },
      {
        n: 4,
        layer: "HDPE / EVA membrane",
        products: ["pmh-3040", "pmh-3080", "pmh-6010", "pme-eva"],
      },
      { n: 5, layer: "Secondary support", products: ["yh-concrete-admixture"] },
      { n: 6, layer: "Railway/subway/highway" },
    ],
  },
  maintenance: {
    id: "maintenance",
    title: "Underground maintenance system",
    page: 27,
    picture: picture(
      "maintenance",
      1600,
      1103,
      "OYH's cutaway render of an existing basement room: an injection machine and resin pails at a wall with grout nipples, a repaired wall and floor, a green sofa",
    ),
    pins: measured.maintenance.pins,
    legend: [
      { n: 1, layer: "Soil" },
      { n: 2, layer: "Concrete basement slab" },
      { n: 3, layer: "Concrete basement wall" },
      { n: 4, layer: "Concrete basement roof slab" },
      {
        n: 5,
        layer: "Injection grouting resin",
        products: [
          "yhacgrout-2101",
          "yhpugrout-2102",
          "yhpugrout-2103",
          "yhpugrout-2104",
          "yhepgrout-2106",
        ],
      },
      { n: 6, layer: "Injection machine" },
      { n: 7, layer: "Grout nipple" },
      {
        n: 8,
        layer: "Primer (negative waterproofing)",
        products: ["yhprimblock-1400"],
      },
      {
        n: 9,
        layer: "Decorative waterproofing mastic (negative waterproofing)",
        products: ["yhcolorwall-5100"],
      },
      { n: 10, layer: "Tile adhesive" },
      { n: 11, layer: "Tiles & tile grout" },
    ],
  },
  "leak-repair": {
    id: "leak-repair",
    title: "Comprehensive solution for leak repairs",
    page: 25,
    picture: picture(
      "leak-repair",
      1536,
      1024,
      "OYH's cutaway render of a wet basement corner: cracked concrete wall and slab with resin injected into the soil behind them",
    ),
    pins: measured["leak-repair"].pins,
    legend: [
      { n: 1, layer: "Negative-waterproof mortar" },
      { n: 2, layer: "Polyurethane foam grout" },
      { n: 3, layer: "Acrylate curtain grouting" },
      { n: 4, layer: "Structural epoxy injection grouting" },
      { n: 5, layer: "Polyurethane elastic injection grout" },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* "System solutions by structure" tables, as printed                   */
/* ------------------------------------------------------------------ */

export const polymerByStructure: ByStructure[] = [
  {
    part: "Basement slab",
    system: "Pre-applied HDPE/FPO waterproofing membrane system",
    points: [
      "Fully bonded to structural concrete",
      "Prevents lateral water migration",
      "Excellent resistance to hydrostatic pressure",
      "High puncture and mechanical resistance",
      "Suitable for blind-side construction",
    ],
  },
  {
    part: "Basement wall",
    system: "HDPE/FPO membrane system",
    points: [
      "Continuous waterproofing protection",
      "Strong adhesion to concrete",
      "Accommodates complex details and penetrations",
      "Good crack-bridging capability",
      "Reduces risk of water ingress through wall joints",
    ],
  },
  {
    part: "Basement roof",
    system: "PU waterproofing coating + protection / drainage system",
    points: [
      "Seamless waterproofing layer",
      "Excellent crack-bridging ability",
      "Adapts to irregular substrates",
      "Good resistance to standing water and structural movement",
      "Compatible with drainage and protection layers",
    ],
  },
  {
    part: "Joints & details",
    system: "Waterstop + butyl sealing system",
    points: [
      "Reinforced protection at vulnerable joints",
      "Accommodates structural movement",
      "Improves watertightness at construction joints, penetrations and terminations",
    ],
  },
  {
    part: "Protection & drainage",
    system: "Drainage board / protective board / geotextile",
    points: [
      "Protects the waterproofing layer from backfilling damage",
      "Facilitates drainage",
      "Reduces hydrostatic pressure acting on the waterproofing system",
    ],
  },
];

export const bituminousByStructure: ByStructure[] = [
  {
    part: "Basement slab",
    system: "Bituminous membrane system",
    points: [
      "Reliable resistance to groundwater",
      "Effective resistance to hydrostatic pressure",
      "Good puncture and impact resistance",
      "Strong compatibility with concrete substrates",
      "Durable long-term protection for foundation slabs",
    ],
  },
  {
    part: "Basement wall",
    system: "Bituminous membrane / coating system",
    points: [
      "Continuous protection against soil moisture",
      "Reliable waterproofing against underground water",
      "Strong adhesion to vertical concrete surfaces",
      "Good adaptability to corners and penetrations",
      "Suitable for complex basement wall conditions",
    ],
  },
  {
    part: "Basement roof",
    system: "Bituminous membrane + protection & drainage system",
    points: [
      "Combines waterproofing, protection and drainage",
      "Helps resist water ingress effectively",
      "Performs well under overburden conditions",
      "Enhances durability of roof deck systems",
      "Supports long-term structural performance",
    ],
  },
  {
    part: "Joints & details",
    system: "Waterstop + butyl sealing system",
    points: [
      "Suitable for construction joints and penetrations",
      "Strengthens vulnerable waterproofing details",
      "Improves overall watertightness of the system",
      "Reduces leakage risk at critical areas",
      "Provides reliable support for detail treatment",
    ],
  },
  {
    part: "Protection & drainage",
    system: "Drainage board / protective board / geotextile",
    points: [
      "Protects the waterproofing layer from damage",
      "Suitable during backfilling and service life",
      "Facilitates efficient drainage performance",
      "Helps relieve hydrostatic pressure buildup",
      "Contributes to long-term system durability",
    ],
  },
];

export const tunnelByStructure: ByStructure[] = [
  {
    part: "Initial support",
    system: "",
    points: [
      "Provides a stable substrate for the waterproofing system",
      "Accommodates irregular tunnel surfaces",
      "Adapts well to complex geometries",
    ],
  },
  {
    part: "Cushion layer",
    system: "Geotextile protection",
    points: [
      "Protects the membrane from rough substrates",
      "Shields against local protrusions",
      "Reduces puncture risk during installation",
      "Minimizes mechanical damage",
    ],
  },
  {
    part: "Waterproofing layer",
    system: "HDPE / EVA membrane",
    points: [
      "Forms a continuous waterproof barrier",
      "Flexible against groundwater ingress",
      "Excellent durability",
      "Adapts to tunnel deformation",
    ],
  },
  {
    part: "Secondary lining",
    system: "",
    points: [
      "Encapsulates the waterproofing membrane",
      "Protects the membrane effectively",
      "Forms a durable composite lining system",
      "Ensures long-term structural reliability",
    ],
  },
  {
    part: "Complementary systems",
    system: "",
    points: [
      "Waterstops, drainage pipes and accessories work together",
      "Seal critical joints effectively",
      "Channel groundwater efficiently",
      "Relieve water pressure behind the lining",
      "Improve overall system reliability and durability",
    ],
  },
];

export const maintenanceByStructure: ByStructure[] = [
  {
    part: "Wall cracks",
    system: "Acrylate injection grouting system",
    points: [
      "Low-viscosity grout penetrates fine cracks and capillaries",
      "Forms a flexible waterproof network within concrete",
      "Effectively blocks active water ingress",
      "Accommodates minor structural movement",
    ],
  },
  {
    part: "Construction joints",
    system: "Injection sealing system",
    points: [
      "Designed for leaking construction joints and interfaces",
      "Injected resin fills internal voids and discontinuities",
      "Restores watertightness effectively",
      "Minimizes the need for extensive demolition",
    ],
  },
  {
    part: "Slab & wall junctions",
    system: "Targeted grouting repair",
    points: [
      "Provides localized sealing at vulnerable wall-to-slab connections",
      "Suitable for areas prone to groundwater penetration",
      "Helps establish a continuous waterproof barrier",
      "Interrupts the leakage path effectively",
    ],
  },
  {
    part: "Basement floor",
    system: "Pressure injection grouting",
    points: [
      "Suitable for groundwater seepage through cracks and defects",
      "Effective for porous areas in basement slabs",
      "Provides rapid sealing performance",
      "Minimizes disruption to the existing structure",
    ],
  },
  {
    part: "Surface protection",
    system: "Primer + waterproofing mastic / finishing system",
    points: [
      "Compatible primers provide additional surface protection",
      "Waterproof finishing materials enhance durability",
      "Helps restore the appearance of the repaired area",
      "Improves long-term serviceability",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Section 05 tables                                                    */
/* ------------------------------------------------------------------ */

export const groutingComparison = {
  columns: [
    "Epoxy resin",
    "Polyurethane foam",
    "Polyurethane resin",
    "Acrylate curtain",
  ],
  rows: [
    {
      property: "Core function",
      values: [
        "Bonding, strengthening, structural repair",
        "Water stopping, leak sealing, filling",
        "Rapid sealing, flexible sealing, crack repair",
        "Rapid sealing, flexible sealing, crack repair",
      ],
    },
    {
      property: "State after curing",
      values: [
        "Hard, high rigidity",
        "Rigid or flexible, usually elastic",
        "Tough, good elasticity",
        "Gel-like, flexible",
      ],
    },
    {
      property: "Reaction with water",
      values: [
        "Generally not water-reactive",
        "Reacts with water and forms foams",
        "Chemical curing, forming elastic material",
        "Forms gel in damp and water-bearing environments",
      ],
    },
    {
      property: "Curing speed",
      values: ["Relatively slow", "Fast", "Relatively slow", "Adjustable"],
    },
    {
      property: "Bonding performance",
      values: ["Excellent", "Good", "Good", "Moderate"],
    },
    {
      property: "Structural strengthening",
      values: ["Best", "General", "Medium", "Weak"],
    },
    {
      property: "Crack movement accommodation",
      values: ["Poor", "Good", "Very good", "Good"],
    },
    {
      property: "Wet crack suitability",
      values: [
        "Requires relatively dry substrate",
        "Suitable for wet and leaking cracks",
        "Depends on formulation",
        "Highly suitable for wet conditions",
      ],
    },
    {
      property: "Suitability for active cracks",
      values: [
        "Generally not recommended",
        "Applicable",
        "More suitable",
        "Applicable",
      ],
    },
    {
      property: "Fine crack penetration",
      values: ["Excellent", "Good", "General", "Excellent"],
    },
    {
      property: "Deep crack / void filling",
      values: ["Good", "Excellent", "Good", "Excellent"],
    },
  ],
};

export type SelectionRow = {
  leakage: string;
  detail: string;
  use: string;
  products: string;
};

export const selectionGuide: {
  title: string;
  note: string;
  rows: SelectionRow[];
}[] = [
  {
    title: "Water-bearing environment",
    note: "Groundwater is continuously or intermittently present.",
    rows: [
      {
        leakage: "Structural cracks / construction joints",
        detail: "Joint filling",
        use: "Temporary seal",
        products: "YHACgrout-2101, YHPUgrout-2102, YHPUgrout-2103",
      },
      {
        leakage: "Structural cracks / construction joints",
        detail: "Joint filling",
        use: "Permanent seal",
        products:
          "YHACgrout-2101 / YHPUgrout-2102 / YHPUgrout-2103 + YHEPgrout-2106",
      },
      {
        leakage: "Structural cracks / construction joints",
        detail: "Curtain injection",
        use: "Waterstop",
        products: "YHACgrout-2101",
      },
      {
        leakage: "Structural cracks / construction joints",
        detail: "Curtain injection",
        use: "Enhanced waterstop",
        products: "YHACgrout-2101 + YHEPgrout-2106",
      },
      {
        leakage: "Expansion joints",
        detail: "",
        use: "Flexible sealing",
        products:
          "YHACgrout-2101 / YHPUgrout-2102 / YHPUgrout-2103 + YHPUgrout-2104",
      },
    ],
  },
  {
    title: "Non-water-bearing environment",
    note: "Basically free from groundwater, with occasional dampness.",
    rows: [
      {
        leakage: "Structural cracks / construction joints",
        detail: "",
        use: "Crack repair",
        products: "YHACgrout-2101",
      },
      {
        leakage: "Structural cracks / construction joints",
        detail: "",
        use: "Joint sealing",
        products: "YHEPgrout-2106",
      },
      {
        leakage: "Expansion joints",
        detail: "",
        use: "Flexible joint sealing",
        products: "YHACgrout-2101 + YHPUgrout-2104",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Words from the manual's text pages                                   */
/* ------------------------------------------------------------------ */

export const why = {
  heading: "Why waterproof below-grade structures",
  paragraphs: [
    "Below-grade structures are permanently exposed to groundwater, soil moisture, hydrostatic pressure, and aggressive chemicals throughout their service life. Unlike above-ground buildings, water ingress below grade is difficult to detect and often impossible to repair without extensive excavation.",
    "A reliable waterproofing system is therefore essential to protect the reinforced concrete structure from water penetration, chloride attack, carbonation, and steel reinforcement corrosion. By maintaining the integrity of the concrete, waterproofing helps preserve structural performance, extend the service life, and reduce long-term maintenance costs.",
    "Modern infrastructure is commonly designed for a service life of 100 years or more, making durable waterproofing an integral part of long-term asset protection rather than simply a barrier against water.",
  ],
  /** The forces OYH names on its render, as printed. */
  forces: [
    "Water pressure",
    "Dynamic force",
    "Temperature variation",
    "Chemical attack: SO₄²⁻, Cl⁻, Mg²⁺, HCO₃⁻, CO₃²⁻, NH₃",
    "Gases: H₂S, CH₄, Rn",
  ],
  picture: picture(
    "why",
    1536,
    1024,
    "OYH's render of a basement under a hillside beside the sea, with groundwater pressing on its walls and slab and the chemistry of the water drawn around it",
  ),
};

export const intros = {
  polymer:
    "Integrated waterproofing solutions for below-ground structures, providing continuous protection against groundwater, hydrostatic pressure and aggressive environments throughout the building's service life.",
  bituminous:
    "A complete bituminous waterproofing system for below-ground structures, combining membranes, primers, coatings and protection layers to ensure durable resistance against groundwater, hydrostatic pressure and aggressive service conditions.",
  accessories:
    "Specially designed tapes and sealants for membrane joints, terminations, repairs and critical detailing, helping maintain the continuity and reliability of the complete waterproofing system.",
  waterstops:
    "The overall waterproof performance of concrete structures hinges heavily on the quality of their joint-sealing waterstop components. Waterstop systems are commonly incorporated into infrastructure assets including water-treatment facilities, reservoirs, dams, and underground constructions. Multiple critical parameters need to be evaluated throughout the waterstop-selection workflow. Key considerations cover joint classification, anticipated joint displacement, hydrostatic loading, and chemical-environment resistance.",
  joints: [
    {
      name: "Deformation joint",
      text: "Structures frequently undergo deformation from external loads, which can lead to cracking or structural damage. A deformation joint is a purpose-built structural joint designed to accommodate such movement.",
    },
    {
      name: "Construction joint",
      text: "A construction joint describes the interface formed between successive concrete pours, created to meet design or sequencing requirements during concrete placement.",
    },
  ],
  drainage:
    "The OYH Peach Blossom System integrates waterproofing, drainage, water storage and root resistance in one solution. Powered by HDPE technology and siphonic drainage, it delivers efficient water management for Sponge City, landscaping and infrastructure applications.",
  drainageAdvantages: [
    {
      title: "Organized Drainage",
      text: "Rainwater is efficiently collected, guided through drainage channels, and discharged or stored for reuse.",
    },
    {
      title: "Reliable Performance",
      text: "The HDPE drainage layer provides high strength, puncture and chemical resistance, long-term durability, and environmentally friendly recyclability.",
    },
    {
      title: "Cost & Time Saving",
      text: "Simplifies the system build-up by eliminating unnecessary intermediate layers, cutting procedures by up to 50%, and shortening construction time by approximately 1/3 to 1/2.",
    },
    {
      title: "Root-resistance",
      text: "The system provides sufficient nutrients to plant roots while rapidly draining excess water, helping prevent prolonged root waterlogging.",
    },
  ],
  tunnel:
    "A complete tunnel waterproofing system designed to provide continuous protection between the initial and secondary linings. The HDPE/EVA membrane forms a durable waterproof barrier against groundwater ingress, while the geotextile protects the waterproof membrane, drains seepage to reduce water pressure and improves system reliability under complex underground conditions.",
  maintenance:
    "A specialized injection grouting system for repairing water leakage in existing underground structures. Low-viscosity acrylate resin penetrates fine cracks, joints and voids, forming a flexible waterproof barrier that effectively stops water ingress and restores long-term watertightness.",
  grouting:
    "Specially developed grouts and injection resins for crack sealing, leak stopping, joint treatment and structural reinforcement, helping restore the integrity, watertightness and durability of concrete structures.",
};

export const peachBlossom = picture(
  "peach-blossom",
  1600,
  918,
  "OYH's render of the Peach Blossom system on a car park roof: drainage channels, siphon inspection wells and water storage under a planted deck",
);

export const cover = picture(
  "cover",
  1536,
  1024,
  "A basement excavation covered edge to edge in white pre-applied membrane, with piles coming through and tower cranes above",
);

/** The polymer basement slab, top to bottom, for the one 3D build-up
 * (src/components/three-d/layer-stack.tsx). Heights are exaggerated;
 * the notes are the manual's words. Material colours, as build-ups.ts. */
export const basementStack: StackLayer[] = [
  {
    label: "Flooring",
    color: "#c9ccd0",
    height: 0.08,
    note: "6. Flooring.",
  },
  {
    label: "Leveling screed",
    color: "#b8b4aa",
    height: 0.1,
    pattern: "sand",
    note: "5. Leveling screed.",
  },
  {
    label: "Concrete basement slab",
    color: "#a9adab",
    height: 0.5,
    pattern: "concrete",
    note: "4. Concrete basement slab, cast onto the membrane so that it bonds to it.",
  },
  {
    label: "Pre-applied HDPE/FPO waterproofing membrane",
    color: "#f4f3ee",
    height: 0.14,
    note: "3. PMH-3040 / PMH-3040 PLUS, PMH-3080 / PMH-3080 PLUS or YHFPOpre-3210: fully bonded to structural concrete; prevents lateral water migration.",
  },
  {
    label: "Blinding",
    color: "#8e9294",
    height: 0.2,
    pattern: "concrete",
    note: "2. Blinding.",
  },
  {
    label: "Soil",
    color: "#5a3b2a",
    height: 0.32,
    pattern: "granule",
    note: "1. Soil, with the groundwater pressing up.",
  },
];

export const systemsList = [
  {
    id: "polymer",
    name: "Polymer basement system",
    note: "Pre-applied HDPE and FPO membranes",
  },
  {
    id: "bituminous",
    name: "Bituminous basement system",
    note: "Torch-applied and self-adhesive membranes",
  },
  {
    id: "waterstops",
    name: "Waterstops",
    note: "Joints, from EPDM to swellable",
  },
  {
    id: "drainage",
    name: "Drainage boards",
    note: "Protection and the Peach Blossom system",
  },
  {
    id: "tunnel",
    name: "Tunnel system",
    note: "Between the initial and secondary linings",
  },
  {
    id: "maintenance",
    name: "Underground maintenance",
    note: "Injection grouting for leaks in existing structures",
  },
];
