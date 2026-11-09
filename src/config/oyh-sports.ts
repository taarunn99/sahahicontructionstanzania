/**
 * OYH SPORTS FLOORING: system bills of materials, construction videos and the
 * system chooser. Sources (assets/source/oyh-sports/nazrul, owner, 2026-11-09):
 * - BILLS: OYH's four system price lists (xlsx). Only product, layer, pack and
 *   consumption are taken. EVERY PRICE COLUMN IS DROPPED: no price, no currency,
 *   no total cost is ever published (CLAUDE.md).
 * - The consumptions agree with OYH's construction guides (Feb. 2025): Silicone PU
 *   primer 0.1-0.15, elastic layer 1.2-1.4 kg per mm per m², topcoat 0.2-0.4 kg/m².
 * - The court elastic layer is PSV-201 (owner, 2026-11-09), as the manual prints it;
 *   the price list and the construction guide print PSV-202.
 * - VIDEOS: OYH's own construction films, re-encoded silent (the sound is music; the
 *   steps are captioned in the picture). Chapter times read from those captions.
 * - CHOOSER: OYH's "Sports Flooring Products" deck, the selection table.
 */

export type BomLine = {
  layer: string;
  product: string;
  /** Quantity per m² of floor, in `unit`. */
  perM2: number;
  unit?: "kg" | "m²";
  /** Pack size in the same unit, where the list prints one. */
  pack?: number;
  /** "Locally sourced" in OYH's list: bought in Tanzania, not supplied by OYH. */
  local?: boolean;
};

export type BomVariant = { slug: string; label: string; lines: BomLine[] };

export type Bom = {
  slug: string;
  name: string;
  /** The SYSTEMS entry on the sports page this bill belongs to. */
  system: string;
  note?: string;
  variants: BomVariant[];
};

const SPU_CONCRETE = (
  elastic: number,
  binder: number,
  reinforce: number,
): BomLine[] => [
  {
    layer: "Base primer",
    product: "PSV-101 Single-Component General Primer",
    perM2: 0.1,
    pack: 20,
  },
  {
    layer: "Elastic layer",
    product: "PSV-201 Silicone PU Elastic Layer",
    perM2: elastic,
    pack: 28.5,
  },
  {
    layer: "Interface layer",
    product: "PSV-304 Interface Agent",
    perM2: 0.06,
    pack: 20,
  },
  {
    layer: "Topcoat",
    product: "PSV-305 Water-based Silicone PU Sports Court Topcoat",
    perM2: 0.2,
    pack: 15,
  },
  { layer: "Topcoat", product: "Quartz sand (200 mesh)", perM2: 0.04 },
  {
    layer: "Auxiliary",
    product: "PSV-703 Dispersion Binder",
    perM2: binder,
    local: true,
  },
  {
    layer: "Auxiliary",
    product: "PSV-501 Reinforcement Binder",
    perM2: reinforce,
    pack: 20,
  },
  {
    layer: "Line marking",
    product: "PSV-701 Line Marking Paint",
    perM2: 0.01,
    pack: 5.5,
  },
];

const ASPHALT_SEAL = (
  primer: string,
  primerKg: number,
  adhesive: number,
  cement: number,
  sand: number,
  pack = 50,
): BomLine[] => [
  { layer: "Base primer", product: primer, perM2: primerKg, pack },
  {
    layer: "Base primer",
    product: "PSV-108 Adhesive",
    perM2: adhesive,
    pack: 50,
  },
  {
    layer: "Base primer",
    product: "Cement, 42.5 grade",
    perM2: cement,
    local: true,
  },
  { layer: "Base primer", product: "Quartz sand", perM2: sand, local: true },
];

const SPU_ASPHALT = (
  elastic: number,
  binder: number,
  reinforce: number,
): BomLine[] => [
  ...ASPHALT_SEAL(
    "PSV-102 Asphalt Substrate Primer Sealer",
    0.35,
    0.15,
    0.6,
    0.4,
  ),
  ...SPU_CONCRETE(elastic, binder, reinforce).slice(1),
];

const ACRYLIC_TOP: BomLine[] = [
  {
    layer: "Topcoat",
    product: "PSV Acrylic Topcoat, red, green or blue",
    perM2: 0.4,
    pack: 25,
  },
  { layer: "Topcoat", product: "Quartz sand (200 mesh)", perM2: 0.3, pack: 50 },
  {
    layer: "Line marking",
    product: "PSV Acrylic Line Marking Paint",
    perM2: 0.01,
    pack: 4,
  },
];

export const sportsBoms: Bom[] = [
  {
    slug: "silicone-pu-court",
    name: "Silicon PU court",
    system: "silicon-pu-court",
    variants: [
      {
        slug: "5-concrete",
        label: "5 mm, concrete base",
        lines: SPU_CONCRETE(6, 1.06, 0.06),
      },
      {
        slug: "5-asphalt",
        label: "5 mm, asphalt base",
        lines: SPU_ASPHALT(6, 1.31, 0.06),
      },
      {
        slug: "8-concrete",
        label: "8 mm, concrete base",
        lines: SPU_CONCRETE(9.6, 1.6, 0.096),
      },
      {
        slug: "8-asphalt",
        label: "8 mm, asphalt base",
        lines: SPU_ASPHALT(9.6, 1.85, 0.096),
      },
    ],
  },
  {
    slug: "acrylic-court",
    name: "Acrylic court",
    system: "acrylic-court",
    variants: [
      {
        slug: "hard-concrete",
        label: "Hard acrylic, concrete base",
        lines: [
          ...ASPHALT_SEAL("PSV Acrylic Primer", 0.35, 0.15, 0.6, 0.4),
          ...ACRYLIC_TOP,
        ],
      },
      {
        slug: "hard-asphalt",
        label: "Hard acrylic, asphalt base",
        lines: [
          ...ASPHALT_SEAL("PSV Acrylic Primer", 0.7, 0.42, 1.4, 2.8),
          ...ACRYLIC_TOP,
        ],
      },
      {
        slug: "elastic-concrete",
        label: "5 mm elastic acrylic, concrete base",
        lines: [
          {
            layer: "Base primer",
            product: "PSV Acrylic Primer",
            perM2: 0.05,
            pack: 50,
          },
          { layer: "Base primer", product: "Water", perM2: 0.2, local: true },
          {
            layer: "Elastic layer",
            product: "PSV Acrylic Coarse Elastic Intermediate Coat",
            perM2: 3.6,
            pack: 50,
          },
          {
            layer: "Elastic layer",
            product: "PSV Acrylic Fine Elastic Intermediate Coat",
            perM2: 1.2,
            pack: 50,
          },
          {
            layer: "Elastic layer",
            product: "Cement, 42.5 grade",
            perM2: 0.576,
            local: true,
          },
          ...ACRYLIC_TOP,
        ],
      },
      {
        slug: "elastic-asphalt",
        label: "5 mm elastic acrylic, asphalt base",
        lines: [
          ...ASPHALT_SEAL("PSV Acrylic Primer", 0.7, 0.42, 1.4, 2.8),
          {
            layer: "Elastic layer",
            product: "PSV Acrylic Coarse Elastic Intermediate Coat",
            perM2: 2.2,
            pack: 50,
          },
          {
            layer: "Elastic layer",
            product: "PSV Acrylic Fine Elastic Intermediate Coat",
            perM2: 1.4,
            pack: 50,
          },
          {
            layer: "Elastic layer",
            product: "Cement, 42.5 grade",
            perM2: 0.264,
            local: true,
          },
          ...ACRYLIC_TOP,
        ],
      },
    ],
  },
  {
    slug: "epdm-13mm",
    name: "13 mm EPDM surface",
    system: "epdm-walking-track",
    variants: [
      {
        slug: "13mm",
        label: "8 mm elastic layer and 5 mm topcoat",
        lines: [
          {
            layer: "Base primer",
            product: "PSV-211 Single-Component Adhesive",
            perM2: 0.12,
          },
          {
            layer: "Elastic layer",
            product: "PSV-211 Single-Component Adhesive",
            perM2: 1.143,
          },
          {
            layer: "Elastic layer",
            product: "PSV-406 2-4 mm rubber granules, red",
            perM2: 8,
          },
          {
            layer: "Topcoat",
            product: "PSV-306 Non-Yellowing Adhesive",
            perM2: 0.833,
          },
          {
            layer: "Topcoat",
            product: "PSV-407 1-3 mm rubber granules, colour-blended",
            perM2: 5,
          },
          { layer: "Auxiliary", product: "Thinner", perM2: 0.063, local: true },
          {
            layer: "Line marking",
            product: "PSV-701 Line Marking Paint, water-based",
            perM2: 0.01,
          },
        ],
      },
    ],
  },
  {
    slug: "turf",
    name: "Artificial turf",
    system: "artificial-turf",
    note: "Turf at 10,500 stitches per m², in yarn of 8,800, 9,500 or 12,000 Dtex; TPE infill with 20% binder.",
    variants: [
      {
        slug: "turf",
        label: "Infilled sports turf",
        lines: [
          {
            layer: "Base layer",
            product: "PSV-104 Shock Pad",
            perM2: 1,
            unit: "m²",
          },
          { layer: "Base layer", product: "PSV-105 Turf Adhesive", perM2: 0.2 },
          {
            layer: "Artificial turf",
            product: "PSV-601 Artificial Turf",
            perM2: 1.03,
            unit: "m²",
          },
          {
            layer: "Infill",
            product: "PSV-407 Rubber infill for artificial turf (20%)",
            perM2: 5,
          },
          { layer: "Infill", product: "Quartz sand", perM2: 26, local: true },
          {
            layer: "Auxiliary",
            product: "Seaming tape",
            perM2: 0.05,
            unit: "m²",
          },
        ],
      },
    ],
  },
];

export type SportsVideo = {
  slug: string;
  title: string;
  system: string;
  duration: number;
  chapters: { at: number; label: string }[];
};

export const sportsVideos: SportsVideo[] = [
  {
    slug: "rubber-track",
    title: "A rubber running track",
    system: "Running track",
    duration: 73,
    chapters: [
      { at: 15, label: "Substrate treatment" },
      { at: 19, label: "Apply primer" },
      { at: 23, label: "Mix materials" },
      { at: 25, label: "Apply elastic layer" },
      { at: 33, label: "Defoaming" },
      { at: 35, label: "Grind" },
      { at: 37, label: "Apply top layer" },
      { at: 55, label: "Line marking" },
    ],
  },
  {
    slug: "silicone-pu-court",
    title: "A silicon PU sports court",
    system: "Sports court",
    duration: 142,
    chapters: [
      { at: 19, label: "Substrate treatment" },
      { at: 29, label: "Apply primer" },
      { at: 39, label: "Apply elastic layer" },
      { at: 51, label: "Water test for ponding" },
      { at: 61, label: "Grind" },
      { at: 63, label: "Apply elastic layer" },
      { at: 67, label: "Apply interface" },
      { at: 77, label: "Line positioning" },
      { at: 89, label: "Apply top layer" },
      { at: 109, label: "Logo spraying" },
      { at: 119, label: "Line marking" },
    ],
  },
  {
    slug: "artificial-turf",
    title: "An artificial turf pitch",
    system: "Artificial turf",
    duration: 73,
    chapters: [
      { at: 15, label: "Substrate treatment" },
      { at: 19, label: "Apply shock pad" },
      { at: 27, label: "Apply artificial turf" },
      { at: 49, label: "Quartz sand infill" },
      { at: 57, label: "Rubber granules infill" },
    ],
  },
];

/** OYH's selection table: 3 is best, 0 is not suitable. */
export const sportsPlaces = [
  "Fitness trail",
  "School track",
  "Outdoor court",
  "Football field",
  "Kindergarten",
] as const;

export const sportsChooser: { system: string; name: string; fit: number[] }[] =
  [
    {
      system: "breathable-track",
      name: "Breathable (permeable) track",
      fit: [3, 1, 0, 0, 3],
    },
    { system: "hybrid-track", name: "Hybrid track", fit: [1, 2, 0, 0, 1] },
    {
      system: "all-plastic-track",
      name: "All plastic (full polyurethane) track",
      fit: [1, 3, 0, 0, 1],
    },
    {
      system: "silicon-pu-court",
      name: "Silicon PU court",
      fit: [0, 0, 3, 0, 0],
    },
    {
      system: "artificial-turf",
      name: "Artificial turf",
      fit: [0, 0, 0, 3, 1],
    },
  ];

/** Drying at 23°C and 50% RH, from the two construction guides. */
export const dryingTimes = {
  "Silicon PU court": [
    ["Primer", "4 hours", "24 hours"],
    ["Elastic layer", "4 hours", "24 hours"],
    ["Interface layer", "2 hours", "8 hours"],
    ["Finish layer", "2 hours", "8 hours"],
    ["Line marking", "2 hours", "8 hours"],
  ],
  "Elastic acrylic court": [
    ["Primer", "1 hour", "12 hours"],
    ["Elastic layer", "1 hour", "3 hours"],
    ["Finish layer", "1 hour", "3 hours"],
    ["Line marking", "1 hour", "3 hours"],
  ],
} as const;
