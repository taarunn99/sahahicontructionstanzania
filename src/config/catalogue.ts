import type { BrandSlug } from "@/config/brands";

/**
 * THE CATALOGUE - single source of truth for every product on the site.
 * Pages, the sitemap, JSON-LD, counts, the search index and llms.txt all
 * derive from this file, so a catalogue update can never orphan a URL.
 *
 * Sources (owner-supplied, gitignored in assets/source/owner-supplied):
 *   [M] Mapei Tanzania price list dated 01.09.2026 (49 numbered lines)
 *   [X] X-Calibur "Retail Price List 2026 TZ" (6 lines)
 * Full verbatim extraction with the discrepancy register:
 *   docs/CATALOGUE-EXTRACTION.md
 *
 * FACT LAW
 * - This type has NO price field and must never get one. Prices are not
 *   displayed on this site (owner ruling, 2026-11-05).
 * - WHAT IS STOCKED and in which pack comes from the owner's price lists.
 * - TECHNICAL VALUES (description, classification, consumption) come from
 *   the manufacturer's technical data sheet where one was verified
 *   (docs/research/11 and 12), quoted as the manufacturer words them.
 *   Where the price list and the data sheet disagree, the data sheet value
 *   is published and the conflict is logged for the owner in
 *   docs/CATALOGUE-EXTRACTION.md. Where neither is certain the field is
 *   LEFT OUT - never guessed.
 * - `sourceName` is the price-list wording exactly as printed (never
 *   rendered). `name` is the manufacturer's own spelling.
 * - Consumption figures are theoretical and vary with site conditions.
 *   Every page that shows one says so.
 */

export type LineSlug =
  | "tile-adhesives-grouts"
  | "primers-levelling"
  | "concrete-repair"
  | "resin-flooring"
  | "waterproofing"
  | "x-calibur"
  | "oriental-yuhong"
  // CMCI lives in src/config/cmci.ts, like BIHUI in its own config.
  | "cmci";

export type Line = {
  slug: LineSlug;
  brand: BrandSlug;
  label: string;
  /** Heading as printed on the source price list. */
  sourceLabel: string;
  blurb: string;
};

export type Product = {
  slug: string;
  brand: BrandSlug;
  line: LineSlug;
  /** Manufacturer's spelling. */
  name: string;
  /** Price-list wording, verbatim. Never rendered. */
  sourceName: string;
  /** Buyer-language type, from the price list's Type column. */
  type: string;
  /** One sentence: the manufacturer's own description where verified,
   *  otherwise the price list's Application column. */
  summary: string;
  /** Standards class as the manufacturer states it, e.g. "C2TES1". */
  classification?: string;
  /** Theoretical consumption. */
  consumption?: string;
  /** Pack or kit sizes as printed. */
  packs: string[];
  colours?: string[];
  /** Source reference: list letter + item number. */
  ref: string;
};

export const lines: Line[] = [
  {
    slug: "tile-adhesives-grouts",
    brand: "mapei",
    label: "Tile Adhesives, Grouts & Care",
    sourceLabel: "Ceramic Line",
    blurb:
      "Cementitious adhesives from C1 to C2TE S1, cement and epoxy grouts, and the cleaners that finish a tiling job.",
  },
  {
    slug: "primers-levelling",
    brand: "mapei",
    label: "Primers, Levelling & Wood Flooring",
    sourceLabel: "Resilient Line",
    blurb:
      "What goes down before the floor finish: primers, self-levelling compounds and a wood-floor adhesive.",
  },
  {
    slug: "concrete-repair",
    brand: "mapei",
    label: "Concrete Repair, Grouts & Anchoring",
    sourceLabel: "Building Line",
    blurb:
      "Repair mortars, flowable grouts, epoxy injection and bonding, rebar protection and chemical anchoring.",
  },
  {
    slug: "resin-flooring",
    brand: "mapei",
    label: "Resin Flooring & Coatings",
    sourceLabel: "Flooring Line",
    blurb:
      "Epoxy and polyurethane floor systems from thin coatings to chemical-resistant screeds, with their primers and finishes.",
  },
  {
    slug: "waterproofing",
    brand: "mapei",
    label: "Waterproofing",
    sourceLabel: "Waterproofing",
    blurb:
      "Cementitious and liquid membranes, waterstops, joint tapes, sealants and a waterproofing admixture.",
  },
  {
    slug: "x-calibur",
    brand: "x-calibur",
    label: "X-Calibur Range",
    sourceLabel: "Retail Price List 2026 TZ",
    blurb:
      "Epoxy flooring, an SBR bonding agent, an acrylic wet-area coating and polysulphide joint sealing.",
  },
  {
    slug: "oriental-yuhong",
    brand: "oriental-yuhong",
    label: "Oriental Yuhong Range",
    sourceLabel: "Retail Price List 2026 TZ",
    blurb:
      "Waterproofing coatings for wet rooms, roofs and walls, a polyurethane joint sealant and a rapid-setting waterplug.",
  },
];

export const products: Product[] = [
  // ---- [M] A - CERAMIC LINE ------------------------------------------------
  {
    slug: "mapeset",
    brand: "mapei",
    line: "tile-adhesives-grouts",
    name: "Mapeset",
    sourceName: "Mapeset - Grey",
    type: "Tile adhesive",
    summary: "Cement-based adhesive for tiles.",
    classification: "C1",
    consumption: "2.5-3 kg/m² with a No. 5 trowel",
    packs: ["25 kg"],
    colours: ["Grey"],
    ref: "M1",
  },
  {
    slug: "kerabond-t",
    brand: "mapei",
    line: "tile-adhesives-grouts",
    name: "Kerabond T",
    sourceName: "Kerabond T - Grey",
    type: "Tile adhesive",
    summary: "Cementitious adhesive with no vertical slip for ceramic tiles.",
    classification: "C1T",
    consumption: "2-5 kg/m²",
    packs: ["25 kg"],
    colours: ["Grey"],
    ref: "M2",
  },
  {
    slug: "adesilex-p7",
    brand: "mapei",
    line: "tile-adhesives-grouts",
    name: "Adesilex P7",
    sourceName: "Adesilex P7 Grey / Adesilex P7 White",
    type: "Tile adhesive",
    summary:
      "High-performance cementitious adhesive with no vertical slip for ceramic and porcelain tiles.",
    classification: "C2T",
    consumption: "2.5-3 kg/m² with a No. 5 trowel",
    packs: ["25 kg"],
    colours: ["Grey", "White"],
    ref: "M3-M4",
  },
  {
    slug: "keraflex-maxi-s1",
    brand: "mapei",
    line: "tile-adhesives-grouts",
    name: "Keraflex Maxi S1",
    sourceName: "Keraflex Maxi S1 Grey",
    type: "Tile adhesive",
    summary:
      "High-performance, deformable cementitious adhesive with extended open time and no vertical slip, especially suitable for large-size porcelain tiles and natural stone.",
    classification: "C2TES1",
    consumption: "1.2 kg/m² per mm of thickness",
    packs: ["20 kg", "25 kg"],
    colours: ["Grey"],
    ref: "M5",
  },
  {
    slug: "keracolor-ff",
    brand: "mapei",
    line: "tile-adhesives-grouts",
    name: "Keracolor FF",
    sourceName: "Keracolor FF 5 kg GREY",
    type: "Cement grout",
    summary:
      "High-performance, polymer-modified, water-repellent cementitious grout for joints up to 6 mm.",
    consumption: "By tile size and joint width",
    classification: "CG2WA",
    packs: ["5 kg"],
    colours: ["Grey"],
    ref: "M6",
  },
  {
    slug: "kerapoxy",
    brand: "mapei",
    line: "tile-adhesives-grouts",
    name: "Kerapoxy",
    sourceName: "Kerapoxy grey/WHITE",
    type: "Epoxy grout",
    summary:
      "Two-component acid-resistant epoxy grout for joints of at least 1 mm. Can also be used as an adhesive.",
    consumption: "By tile size and joint width",
    classification: "RG · R2T",
    packs: ["5 kg"],
    colours: ["Grey", "White"],
    ref: "M7",
  },
  {
    slug: "ultracare-hd-cleaner",
    brand: "mapei",
    line: "tile-adhesives-grouts",
    name: "UltraCare HD Cleaner",
    sourceName: "Ultracare HD cleaner",
    type: "Tile cleaner",
    summary:
      "Concentrated alkaline professional cleaner for deep cleaning and degreasing.",
    consumption: "About 200 m² per litre, diluted 1:20",
    packs: ["1 litre"],
    ref: "M8",
  },
  {
    slug: "ultracare-multicleaner",
    brand: "mapei",
    line: "tile-adhesives-grouts",
    name: "UltraCare Multicleaner",
    sourceName: "Ultracare Multi cleaner",
    type: "Tile cleaner",
    summary:
      "Concentrated neutral cleaner for daily cleaning and maintenance of surfaces, including marble and natural stones.",
    consumption: "About 1500 m² per litre, diluted 1:200",
    packs: ["5 litres"],
    ref: "M9",
  },
  {
    slug: "ultracare-stain-protector-w-plus",
    brand: "mapei",
    line: "tile-adhesives-grouts",
    name: "UltraCare Stain Protector W Plus",
    sourceName: "Ultracare Stain Protector W plus",
    type: "Stain protector",
    summary:
      "Water-based, natural effect sealer with oil, stain and water resistant properties.",
    consumption: "About 30 m² per litre, one coat",
    packs: ["1 litre"],
    ref: "M10",
  },
  // ---- [M] B - RESILIENT LINE ----------------------------------------------
  {
    slug: "primer-g",
    brand: "mapei",
    line: "primers-levelling",
    name: "Primer G",
    sourceName: "Primer G - Adhesion promoter",
    type: "Primer",
    summary: "Synthetic resin primer in water dispersion.",
    consumption: "0.08-0.15 kg/m²",
    packs: ["25 kg"],
    ref: "M11",
  },
  {
    slug: "triblock-p",
    brand: "mapei",
    line: "primers-levelling",
    name: "Triblock P",
    sourceName: "Primer Triblock P - Waterproofing primer",
    type: "Primer",
    summary: "Three-component epoxy-cementitious primer for damp substrates.",
    consumption: "250-500 g/m² per coat, two coats",
    packs: ["5 kg"],
    ref: "M12",
  },
  {
    slug: "lignobond",
    brand: "mapei",
    line: "primers-levelling",
    name: "Lignobond",
    sourceName: "Lignobond",
    type: "Wood floor adhesive",
    summary: "Two-component epoxy-polyurethane adhesive for laying parquet.",
    consumption: "800-1000 g/m²",
    packs: ["10 kg"],
    ref: "M13",
  },
  {
    slug: "ultraplan-eco-20",
    brand: "mapei",
    line: "primers-levelling",
    name: "Ultraplan Eco 20",
    sourceName: "Ultraplan Eco 20 Bags 20/23 Kg",
    type: "Self-levelling compound",
    summary:
      "Fast-drying self-levelling smoothing compound for thicknesses from 1 to 10 mm per layer.",
    consumption: "1.6 kg/m² per mm of thickness",
    packs: ["23 kg"],
    ref: "M14",
  },
  {
    slug: "ultraplan-contract",
    brand: "mapei",
    line: "primers-levelling",
    name: "Ultraplan Contract",
    sourceName: "Ultraplan Contract 25kg bag",
    type: "Self-levelling compound",
    summary:
      "Ultra-fast drying self-levelling smoothing compound for thicknesses from 1 to 10 mm per coat.",
    consumption: "1.7 kg/m² per mm of thickness",
    packs: ["25 kg"],
    ref: "M15",
  },
  // ---- [M] C-BL - BUILDING LINE --------------------------------------------
  {
    slug: "adesilex-pg2-tg",
    brand: "mapei",
    line: "concrete-repair",
    name: "Adesilex PG2 TG",
    sourceName: "Adesilex PG2 TG 6 kg set",
    type: "Epoxy adhesive",
    summary:
      "Two-component thixotropic epoxy adhesive for bonding Mapeband, Mapeband TPE, hypalon and structural bonding.",
    consumption: "1.71 kg/m² per mm of thickness",
    packs: ["6 kg set"],
    ref: "M16",
  },
  {
    slug: "epojet-lv",
    brand: "mapei",
    line: "concrete-repair",
    name: "Epojet LV",
    sourceName: "Epojet LV 2.5kg set",
    type: "Crack injection",
    summary:
      "Two-component epoxy resin with very low viscosity for injection in microcracks, also on wet surfaces.",
    consumption: "1.1 kg per litre of cavity",
    packs: ["2.5 kg set"],
    ref: "M17",
  },
  {
    slug: "eporip",
    brand: "mapei",
    line: "concrete-repair",
    name: "Eporip",
    sourceName: "Eporip buckets 2 kg SET",
    type: "Epoxy adhesive",
    summary:
      "Two-component solvent-free epoxy adhesive for construction joints and for monolithic sealing of cracks in screeds.",
    consumption:
      "0.5-0.7 kg/m² on rough substrates, 1-2 kg/m² on very uneven ones",
    packs: ["2 kg set"],
    ref: "M18",
  },
  {
    slug: "mapegrout-me05",
    brand: "mapei",
    line: "concrete-repair",
    name: "Mapegrout ME05",
    sourceName: "Mapegrout ME05 Bag 25 KG",
    type: "Microconcrete",
    summary:
      "High performance, shrinkage compensated, high-flow micro-concrete and thick section grout.",
    consumption: "12.7 litres of mix per 25 kg bag",
    packs: ["25 kg"],
    ref: "M19",
  },
  {
    slug: "mapegrout-t60",
    brand: "mapei",
    line: "concrete-repair",
    name: "Mapegrout T60 ME",
    sourceName: "Mapegrout T60 Bags 25 Kg",
    type: "Repair mortar",
    summary:
      "Thixotropic, sulphate and chloride resistant, fibre-reinforced structural repair mortar.",
    consumption: "12.6 litres of mix per 25 kg bag",
    packs: ["25 kg"],
    ref: "M20",
  },
  {
    slug: "planicrete-sp",
    brand: "mapei",
    line: "concrete-repair",
    name: "Planicrete SP",
    sourceName: "Planicrete SP buckets 5 kg / 25 kg",
    type: "Latex additive",
    summary:
      "Multi-purpose latex additive for mortar and cementitious mortar adhesive.",
    consumption: "0.3 kg/m² as a slurry bond coat",
    packs: ["5 kg", "25 kg"],
    ref: "M21-M22",
  },
  {
    slug: "mapefer-1k",
    brand: "mapei",
    line: "concrete-repair",
    name: "Mapefer 1K",
    sourceName: "Mapefer 1k 5kg",
    type: "Rebar protection",
    summary:
      "One-component anti-corrosion cementitious mortar for steel reinforcement rods.",
    consumption: "100 g/m on an 8 mm bar, 200 g/m on a 16 mm bar",
    packs: ["5 kg"],
    ref: "M23",
  },
  {
    slug: "mapefix-ep-50",
    brand: "mapei",
    line: "concrete-repair",
    name: "Mapefix EP 50",
    sourceName: "Mapefix EP 50 585 ml",
    type: "Chemical anchor",
    summary: "Epoxy resin for structural chemical anchor.",
    packs: ["585 ml cartridge"],
    ref: "M24",
  },
  {
    slug: "mapei-gun-585-2k",
    brand: "mapei",
    line: "concrete-repair",
    name: "Mapei Gun 585 2K",
    sourceName: "Mapei Gun 585 2K pc",
    type: "Application tool",
    summary: "Dispensing gun for the 585 ml two-component anchor cartridge.",
    packs: ["1 piece"],
    ref: "M25",
  },
  {
    slug: "mapefibre-ns-12",
    brand: "mapei",
    line: "concrete-repair",
    name: "Mapefibre NS 12",
    sourceName: "Mapefiber NS12- 30x 0.6 KG",
    type: "Fibre",
    summary: "12 mm monofilament polypropylene microfibres for concrete.",
    consumption: "600 g per m³ of concrete",
    packs: ["0.6 kg"],
    ref: "M26",
  },

  // ---- [M] C-FL - FLOORING LINE --------------------------------------------
  {
    slug: "mapefloor-fc-200-me",
    brand: "mapei",
    line: "resin-flooring",
    name: "Mapefloor FC 200 ME",
    sourceName:
      "Mapefloor FC 200 ME L Grey Part A 22 kg / Mapefloor FC 200 ME /B Buckets 3.5 Kg",
    type: "Epoxy floor coating",
    summary: "High build epoxy resin floor coating.",
    consumption: "0.32 kg/m² per coat",
    packs: ["Part A 22 kg", "Part B 3.5 kg"],
    colours: ["Light grey"],
    ref: "M27",
  },
  {
    slug: "mapefloor-i-300-sl-me",
    brand: "mapei",
    line: "resin-flooring",
    name: "Mapefloor I 300 SL ME",
    sourceName:
      "Mapefloor 1 300-SL ME /A L Grey 17 Kg / B 5 Kg / Mapefloor I 300 SL ME / C 25KG",
    type: "Self-levelling epoxy floor",
    summary:
      "Three-component multi-purpose coloured epoxy formulate for self-levelling industrial floor coatings, 2 to 4 mm thick.",
    consumption: "3.7 kg/m² at 2 mm",
    packs: ["Part A 17 kg", "Part B 5 kg", "Part C 25 kg"],
    colours: ["Light grey"],
    ref: "M28",
  },
  {
    slug: "mapefloor-cpu-plus-mf",
    brand: "mapei",
    line: "resin-flooring",
    name: "Mapefloor CPU+/MF",
    sourceName:
      "Mapefloor CPU+/MF /A 2 kg x 2packs / B 2.16 kg x 2packs / C Bag 20 kg / Mapefloor CPU+ color grey 0.23kg",
    type: "Polyurethane-cement floor",
    summary:
      "High-performance self-smoothing polyurethane cement mortar from 3 to 6 mm.",
    consumption: "5.5 kg/m² at 3 mm",
    packs: [
      "Part A 2 kg x 2",
      "Part B 2.16 kg x 2",
      "Part C 20 kg",
      "Mapecolor CPU+ 0.23 kg",
    ],
    colours: ["Grey"],
    ref: "M29",
  },
  {
    slug: "mapefloor-finish-415-me",
    brand: "mapei",
    line: "resin-flooring",
    name: "Mapefloor Finish 415 ME",
    sourceName:
      "Mapefloor Finish. 415 ME/A D Grey 10KG / Mapefloor Finish 415 ME /B 2.5KG",
    type: "Polyurethane floor finish",
    summary: "Aromatic polyurethane finish for car park floor systems.",
    packs: ["Part A 10 kg", "Part B 2.5 kg"],
    colours: ["Dark grey"],
    ref: "M30",
  },
  {
    slug: "mapefloor-finish-450-me",
    brand: "mapei",
    line: "resin-flooring",
    name: "Mapefloor Finish 450 ME",
    sourceName:
      "Mapefloor Finish. 450 ME/A D Grey 18,9KG / Mapefloor Finish 450 ME /B 3,6KG",
    type: "Polyurethane floor finish",
    summary:
      "Two-component, aliphatic, elastic coloured polyurethane finish resistant to wear and UV rays.",
    consumption: "0.2-0.5 kg/m², depending on the system",
    packs: ["Part A 18.9 kg", "Part B 3.6 kg"],
    colours: ["Dark grey"],
    ref: "M31",
  },
  {
    slug: "mapefloor-pu-410",
    brand: "mapei",
    line: "resin-flooring",
    name: "Mapefloor PU 410",
    sourceName:
      "Mapefloor PU 410 /A fustini 16 kg / Mapefloor PU 410 /B fustini 3,9 kg",
    type: "Polyurethane binder",
    summary:
      "Two-component, self-levelling polyurethane binder for multi-layer resin systems on concrete floors in car parks.",
    consumption: "1.0 kg/m² as a wearing layer",
    packs: ["Part A 16 kg", "Part B 3.9 kg"],
    ref: "M32",
  },
  {
    slug: "primer-sn",
    brand: "mapei",
    line: "resin-flooring",
    name: "Primer SN",
    sourceName: "Primer SN /A Drum 16 Kg / Primer SN /B Drum 4 Kg",
    type: "Epoxy primer",
    summary: "Two-component fillerized epoxy primer.",
    consumption: "0.3-0.7 kg/m² per coat",
    packs: ["Part A 16 kg", "Part B 4 kg"],
    ref: "M33",
  },
  {
    slug: "quartz-sand",
    brand: "mapei",
    line: "resin-flooring",
    name: "Quarzo 0.5/1.2",
    sourceName: "Quarzo 0.5/1.2 Bags 25 Kg",
    type: "Quartz sand",
    summary: "Kiln-dried quartz sand for resin floor systems.",
    packs: ["25 kg"],
    ref: "M34",
  },
  {
    slug: "mapecoat-dw-25",
    brand: "mapei",
    line: "resin-flooring",
    name: "Mapecoat DW 25",
    sourceName: "Mapecoat DW 25 -12KG - A / Mapecoat DW 25 -3KG- B",
    type: "Drinking water coating",
    summary:
      "Two-component epoxy paint for anti-acid and non-toxic coatings on concrete surfaces, suitable for contact with drinking water.",
    consumption: "400-600 g/m² in two coats",
    packs: ["Part A 12 kg", "Part B 3 kg"],
    ref: "M35-M36",
  },
  // ---- [M] WP - WATERPROOFING ----------------------------------------------
  {
    slug: "lamposilex",
    brand: "mapei",
    line: "waterproofing",
    name: "Lamposilex",
    sourceName: "Lamposilex buckets 5 kg",
    type: "Water plug",
    summary:
      "Ultra-fast setting and curing hydraulic binder for stopping water leaks.",
    consumption: "1.8 kg per litre of cavity",
    packs: ["5 kg"],
    ref: "M37",
  },
  {
    slug: "antipluviol",
    brand: "mapei",
    line: "waterproofing",
    name: "Antipluviol",
    sourceName: "Antipluviol 25kg",
    type: "Water repellent",
    summary:
      "Water-based water-repellent protective coating, ideal for very absorbent surfaces.",
    consumption: "0.2-1 litre/m²",
    packs: ["25 kg"],
    ref: "M38",
  },
  {
    slug: "planiseal-88",
    brand: "mapei",
    line: "waterproofing",
    name: "Planiseal 88",
    sourceName: "Planiseal 88 Grey Bags 25 kg",
    type: "Cementitious coating",
    summary:
      "Osmotic cementitious mortar suitable for contact with drinking water, for waterproofing masonry and concrete structures.",
    consumption: "About 1.5 kg/m² per mm of thickness",
    packs: ["25 kg"],
    colours: ["Grey"],
    ref: "M39",
  },
  {
    slug: "mapelastic-aquadefense",
    brand: "mapei",
    line: "waterproofing",
    name: "Mapelastic AquaDefense",
    sourceName: "Mapelastic Aquadefense",
    type: "Liquid membrane",
    summary:
      "Ready-to-use, ultra quick-drying, flexible liquid membrane for waterproofing interior and exterior surfaces.",
    consumption: "1 kg/m² for two coats",
    packs: ["15 kg"],
    ref: "M39b",
  },
  {
    slug: "mapelastic-easy",
    brand: "mapei",
    line: "waterproofing",
    name: "Mapelastic Easy",
    sourceName: "Mapelastic Easy Part A 18kg / part B buckets 6kg",
    type: "Cementitious membrane",
    summary:
      "Two-component acrylic modified cementitious, flexible waterproof coating for balconies, terraces and bathrooms.",
    consumption: "About 1.9 kg/m² per mm by trowel or roller",
    packs: ["Part A 18 kg", "Part B 6 kg"],
    ref: "M40",
  },
  {
    slug: "mapelastic-smart",
    brand: "mapei",
    line: "waterproofing",
    name: "Mapelastic Smart",
    sourceName: "Mapelastic Smart Part A 20KG / B fustini 10 kg",
    type: "Cementitious membrane",
    summary:
      "Two-component, high-flexibility cementitious mortar applied by trowel or roller for waterproofing balconies, terraces, bathrooms and swimming pools.",
    consumption: "About 1.6 kg/m² per mm by roller or trowel",
    packs: ["Part A 20 kg", "Part B 10 kg"],
    ref: "M41",
  },
  {
    slug: "mapelastic-foundation",
    brand: "mapei",
    line: "waterproofing",
    name: "Mapelastic Foundation",
    sourceName: "Mapelastic Foundation Part A 22KG / B fustini 10 kg",
    type: "Cementitious membrane",
    summary:
      "Two-component, flexible cementitious mortar for waterproofing concrete surfaces subject to both positive and negative water pressure.",
    consumption: "About 1.65 kg/m² per mm by roller",
    packs: ["Part A 22 kg", "Part B 10 kg"],
    ref: "M42",
  },
  {
    slug: "idrostop-pvc",
    brand: "mapei",
    line: "waterproofing",
    name: "Idrostop PVC BI BE ME",
    sourceName: "Idrostop PVC BIC ME 20cm 15MT",
    type: "Waterstop",
    summary:
      "PVC waterstop for sealing expansion and cold joints. Stocked profile: BIC 20, 200 mm.",
    packs: ["15 m roll"],
    ref: "M43",
  },
  {
    slug: "mapeband-tpe",
    brand: "mapei",
    line: "waterproofing",
    name: "Mapeband TPE",
    sourceName: "Mapeband TPE H170 rolls 30 mt",
    type: "Joint tape",
    summary:
      "TPE tape for flexible sealing and waterproofing of expansion joints and cracks subject to movement.",
    packs: ["170 mm x 30 m roll"],
    ref: "M44",
  },
  {
    slug: "mapeband-easy",
    brand: "mapei",
    line: "waterproofing",
    name: "Mapeband Easy",
    sourceName: "Mapeband Easy H130 rolls 30 mt",
    type: "Joint tape",
    summary:
      "Rubber tape embedded between two layers of non-woven fabric to form elastic joints in waterproofing systems.",
    packs: ["130 mm x 30 m roll"],
    ref: "M45",
  },
  {
    slug: "mapenet-150",
    brand: "mapei",
    line: "waterproofing",
    name: "Mapenet 150",
    sourceName: "Mapenet 150 Roll 50 x 1 Mt",
    type: "Reinforcing mesh",
    summary:
      "Alkali-resistant fibre glass mesh used to reinforce waterproof protection layers, antifracture membranes and external thermal insulation systems.",
    packs: ["1 m x 50 m roll"],
    ref: "M46",
  },
  {
    slug: "mapeflex-pu-45-ft",
    brand: "mapei",
    line: "waterproofing",
    name: "Mapeflex PU 45 FT",
    sourceName: "Mapeflex PU 45 Grey 600 ml",
    type: "Sealant",
    summary:
      "Paintable, rapid, high modulus polyurethane sealant and adhesive.",
    consumption: "6 m per 600 ml in a 10 x 10 mm joint",
    packs: ["600 ml"],
    colours: ["Grey"],
    ref: "M47",
  },
  {
    slug: "mapeproof-swell",
    brand: "mapei",
    line: "waterproofing",
    name: "Mapeproof Swell",
    sourceName: "Mapeproof Swell 320 ml",
    type: "Hydrophilic sealant",
    summary:
      "Expansive, rubber-based hydrophilic sealant paste in tubes, applied using an extrusion gun.",
    consumption: "About 3 m per cartridge",
    packs: ["320 ml cartridge"],
    ref: "M48",
  },
  {
    slug: "idrocrete-kr-1000",
    brand: "mapei",
    line: "waterproofing",
    name: "Idrocrete KR 1000",
    sourceName: "Idrocrete KR1000",
    type: "Concrete admixture",
    summary: "Crystallizing admixture for waterproof concrete.",
    consumption: "1-3 kg per 100 kg of cementitious materials",
    packs: ["20 kg"],
    ref: "M49",
  },

  // ---- [X] X-CALIBUR -------------------------------------------------------
  {
    slug: "x-tech-sbr-bond",
    brand: "x-calibur",
    line: "x-calibur",
    name: "X-Tech SBR Bond",
    // The price list prints 10 m² per litre and 20 kg; the data sheet the owner
    // supplied on 2026-11-07 says 8 m² per litre and 20 litre drums.
    sourceName: "XTECH BOND 20L",
    type: "Bonding agent",
    summary:
      "Multi purpose bonding agent for concrete and cementitious substrates.",
    consumption: "8 m² per litre",
    packs: ["20 litres"],
    ref: "X1",
  },
  {
    slug: "x-tech-epoxyfloor-sl1",
    brand: "x-calibur",
    line: "x-calibur",
    name: "X-Tech EpoxyFloor SL1",
    sourceName: "X TECH SL1 17L 7035",
    type: "Self-levelling epoxy floor",
    summary: "Self-levelling epoxy floor at 1 mm.",
    consumption: "1 litre per m²",
    packs: ["17 litres"],
    colours: ["RAL 7035"],
    ref: "X2",
  },
  {
    slug: "x-prime-gp",
    brand: "x-calibur",
    line: "x-calibur",
    name: "X-Prime GP",
    sourceName: "X PRIME GP 18L",
    type: "Epoxy primer",
    // "Solvent based" and the printed coverage are not in the maker's data
    // sheet: left out, see register.
    summary: "Primer for epoxy systems.",
    packs: ["18 litres"],
    ref: "X3",
  },
  {
    slug: "x-shield-flexpruf",
    brand: "x-calibur",
    line: "x-calibur",
    name: "X-Shield FlexPruf",
    sourceName: "X SHIELD FLEXPRUF 22KGS",
    // Printed as "acrylic"; the maker describes it as elasto-cement. The
    // chemistry is left out until the owner confirms, see register.
    type: "Waterproof coating",
    summary: "Waterproofing coat for wet areas.",
    consumption: "3.4 kg/m² in two coats",
    packs: ["22 kg"],
    ref: "X4",
  },
  {
    slug: "x-seal-ps800",
    brand: "x-calibur",
    line: "x-calibur",
    name: "X-Seal PS800",
    sourceName: "X SEAL PG 4L",
    type: "Joint sealant",
    summary:
      "High performance polysulphide joint sealant, stocked in pouring grade.",
    consumption: "2.7 m per litre for a 25 x 15 mm joint",
    packs: ["4 litres"],
    ref: "X5",
  },
  {
    slug: "x-seal-universal-primer",
    brand: "x-calibur",
    line: "x-calibur",
    name: "X-Seal Universal Primer",
    sourceName: "X SEAL PRIMER 1L",
    type: "Sealant primer",
    summary: "High performance primer for X-Seal FR200 and PS800 sealant.",
    packs: ["1 litre"],
    ref: "X6",
  },
  {
    slug: "x-prime-gp2",
    brand: "x-calibur",
    line: "x-calibur",
    name: "X-Prime GP2",
    // Not on the 2026 price list: added from the owner's data sheet, 2026-11-07.
    sourceName: "X-Prime GP2",
    type: "Epoxy primer",
    summary: "General purpose primer for epoxy coating and floor systems.",
    packs: ["18 litres"],
    ref: "X7",
  },
];

// ---- [O] ORIENTAL YUHONG ---------------------------------------------------
// Source: "OYH RETAIL PRICE LIST TZ" (5 lines) for what is stocked and in
// which pack; the five OYH technical data sheets the owner supplied for
// names, descriptions and consumption. Conflicts (data sheet published):
//  - line 1 is printed "PHCOAT 1000": the data sheet is YHCoat-1000.
//  - YHCoat-2060: the list says 1 kg/sqm in two coats; the data sheet says
//    1.0 kg/m² per coat, about 2.0 kg/m² for a 1 mm dry film in 2 coats.
//    The list stocks 15 kg; the data sheet lists a 25 kg pail.
//  - YHColorWall-5300: the list says 2 kg/sqm in two coats for roofs; the
//    data sheet says 2 kg/m² for walls and 3 kg/m² for roofs.
//  - YHCoat-1000: the list says 8-9 sqm in two coats; the data sheet says
//    2 kg/m² in wet areas and 3 kg/m² elsewhere.
//  - YHRepair-2516: the list unit is one 4 kg bag; OYH packs 5 to a carton.
products.push(
  {
    slug: "yhcoat-1000",
    brand: "oriental-yuhong",
    line: "oriental-yuhong",
    name: "YHCoat-1000",
    sourceName: "PHCOAT 1000 26kg set",
    type: "Cementitious waterproofing slurry",
    summary:
      "Two-component, polymer-modified cementitious waterproofing slurry.",
    consumption:
      "2 kg/m² in 2 coats in wet areas, 3 kg/m² in 2-3 coats elsewhere",
    packs: ["26 kg set (Part A 6 kg + Part B 20 kg)"],
    ref: "O1",
  },
  {
    slug: "yhcolorwall-5300",
    brand: "oriental-yuhong",
    line: "oriental-yuhong",
    name: "YHColorWall-5300",
    sourceName: "YHCOLORWALL 5300 WHITE",
    type: "UV-resistant roof and wall coating",
    summary:
      "Cold-applied, one-component waterborne liquid waterproofing membrane, UV-resistant and elastic, for exterior walls and roofs.",
    consumption: "2 kg/m² on walls, 3 kg/m² on roofs",
    packs: ["20 kg"],
    colours: ["White"],
    ref: "O2",
  },
  {
    slug: "yhcoat-2060",
    brand: "oriental-yuhong",
    line: "oriental-yuhong",
    name: "YHCoat-2060",
    sourceName: "YHCOAT 2060 BLUE",
    type: "Wet-room waterproofing coating",
    summary:
      "One-component polymer-modified waterproofing coating for wet rooms, with a keyed finish for direct tiling.",
    consumption: "About 2.0 kg/m² for a 1 mm dry film in 2 coats",
    packs: ["15 kg"],
    colours: ["Blue"],
    ref: "O3",
  },
  {
    slug: "yhpuseal-2925",
    brand: "oriental-yuhong",
    line: "oriental-yuhong",
    name: "YHPUseal-2925",
    sourceName: "YHPUSEAL GREY",
    type: "Polyurethane joint sealant",
    summary:
      "Single-component, moisture-curing polyurethane elastic joint sealant.",
    packs: ["600 ml"],
    colours: ["Grey"],
    ref: "O4",
  },
  {
    slug: "yhrepair-2516",
    brand: "oriental-yuhong",
    line: "oriental-yuhong",
    name: "YHRepair-2516",
    sourceName: "YHREPAIR 2516",
    type: "Waterplug",
    summary:
      "Quick-setting, portland-cement-based hydraulic repair mortar that instantly stops running water through holes or cracks in concrete or masonry.",
    packs: ["4 kg"],
    ref: "O5",
  },
);

// ---- Derived lookups and integrity checks ------------------------------------

export const lineBySlug = Object.fromEntries(
  lines.map((line) => [line.slug, line]),
) as Record<LineSlug, Line>;

export const productsInLine = (slug: LineSlug) =>
  products.filter((product) => product.line === slug);

/**
 * Where a line and a product live. Mapei has a hub, a pillar per line and a
 * page per product (/mapei/<line>/<item>). The other brands are still
 * anchors on /products until their pages ship; when they do, ONLY these two
 * functions change.
 */
export const lineHref = (line: Line) =>
  line.brand === "mapei"
    ? `/mapei/${line.slug}`
    : line.brand === "x-calibur" || line.brand === "oriental-yuhong"
      ? `/${line.brand}`
      : `/products#${line.slug}`;
export const productHref = (product: Product) =>
  product.brand === "mapei"
    ? `/mapei/${product.line}/${product.slug}`
    : product.brand === "x-calibur" || product.brand === "oriental-yuhong"
      ? `/${product.brand}/${product.slug}`
      : `/products#${product.slug}`;

// Fail loudly on drift - a silent slug mismatch renders empty sections.
{
  const seen = new Set<string>();
  for (const product of products) {
    if (seen.has(product.slug)) {
      throw new Error(`catalogue: duplicate slug "${product.slug}"`);
    }
    seen.add(product.slug);
    const line = lineBySlug[product.line];
    if (!line) {
      throw new Error(`catalogue: "${product.slug}" has unknown line`);
    }
    if (line.brand !== product.brand) {
      throw new Error(`catalogue: "${product.slug}" brand does not match line`);
    }
    if (lines.some((l) => l.slug === product.slug)) {
      throw new Error(`catalogue: slug "${product.slug}" collides with a line`);
    }
  }
  for (const line of lines) {
    if (productsInLine(line.slug).length === 0) {
      throw new Error(`catalogue: line "${line.slug}" has no products`);
    }
  }
}
