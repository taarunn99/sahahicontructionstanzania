/**
 * THE WATERPROOFING SELECTOR (owner, 2026-11-09): which product for which part
 * of a building, across Mapei, Oriental Yuhong and X-Calibur.
 *
 * FACT LAW: a product is listed for a part of the building only when its own
 * data sheet says so. `quote` is that line, verbatim from the product's
 * `whereToUse` (or `notFor`, for the cautions) in src/content/<brand>/<slug>.json.
 * scripts/verify-waterproofing-selector.mjs fails the build on any drift.
 * There is no ranking: the order is the main coating first, then the details.
 */

export type SelectorBrand = "mapei" | "oriental-yuhong" | "x-calibur";

export type SelectorPick = {
  brand: SelectorBrand;
  slug: string;
  quote: string;
};

export type SelectorCaution = SelectorPick & { note: string };

export type SelectorPlace = {
  slug: string;
  label: string;
  /** One line on what goes wrong there. Plain building sense, no product claim. */
  problem: string;
  /** The waterproofing layer itself. */
  main: SelectorPick[];
  /** Corners, joints, leaks, finishes: what goes with it. */
  details: SelectorPick[];
  /** Data sheet lines that rule a product out here. */
  cautions?: SelectorCaution[];
};

const YHCOAT_1000_INTERIOR =
  "Suitable for interior applications such as toilets, bathrooms, kitchens, balconies, floors, flat roof, and floor heating systems";
const YHCOAT_2060_WET =
  "especially suitable for wet rooms, such as kitchens, bathrooms, pools, and other areas with high moisture exposure";
const YHCOLORWALL =
  "covering new and old exterior wall and roof surfaces, such as concrete, stucco, unit masonry, steel, or compatible cementitious substrate";
const MAPENET =
  "Mapelastic, Mapelastic Smart, Mapelastic Turbo or Monolastic used for waterproofing terraces, balconies, swimming pools, baths, shower cubicles, etc. with ceramic tile or stone finishes";
const MAPEBAND_JOINTS =
  "Waterproof elastic control joints on terraces, balconies, pools, etc.";
const SWELL_OUTLETS =
  "Sealing lights and drainage outlets in swimming pools and tanks.";

export const selectorPlaces: SelectorPlace[] = [
  {
    slug: "roof",
    label: "Flat roof",
    problem:
      "Sun and heavy rain on the same slab: the coating has to stay flexible and the edges, outlets and upstands are where water gets in.",
    main: [
      {
        brand: "oriental-yuhong",
        slug: "yhcoat-1000",
        quote: YHCOAT_1000_INTERIOR,
      },
      {
        brand: "oriental-yuhong",
        slug: "yhcolorwall-5300",
        quote: YHCOLORWALL,
      },
      {
        brand: "x-calibur",
        slug: "x-shield-flexpruf",
        quote: "Roof waterproofing",
      },
    ],
    details: [
      {
        brand: "oriental-yuhong",
        slug: "yhpuseal-2925",
        quote:
          "Typical applications include joints in concrete panel and wall systems, around window and door frame, flashing, common roofing detail applications",
      },
    ],
    cautions: [
      {
        brand: "mapei",
        slug: "antipluviol",
        quote:
          "horizontal surfaces, such as terraces and flat roofs (use UltraCare Stain Protector W or UltraCare Stain Protector S)",
        note: "A water repellent for walls, not a roof coating.",
      },
    ],
  },
  {
    slug: "wet-rooms",
    label: "Bathroom, shower, kitchen",
    problem:
      "Water sits on the floor and runs down the walls every day. The layer goes under the tiles, and the corners and pipe holes need their own detail.",
    main: [
      {
        brand: "mapei",
        slug: "mapelastic-aquadefense",
        quote: "bathrooms and shower cubicles",
      },
      {
        brand: "mapei",
        slug: "mapelastic-easy",
        quote:
          "Waterproofing bathrooms, showers, balconies, terraces etc., before laying ceramic tiles",
      },
      { brand: "oriental-yuhong", slug: "yhcoat-2060", quote: YHCOAT_2060_WET },
      {
        brand: "oriental-yuhong",
        slug: "yhcoat-1000",
        quote: YHCOAT_1000_INTERIOR,
      },
      {
        brand: "x-calibur",
        slug: "x-shield-flexpruf",
        quote: "Wet area waterproofing",
      },
    ],
    details: [
      {
        brand: "mapei",
        slug: "mapeband-easy",
        quote:
          "Waterproofing corners between adjacent walls and between walls and floors.",
      },
      {
        brand: "oriental-yuhong",
        slug: "yhrepair-2516",
        quote:
          "sealing internal corners of walls and floors, as well as areas around pipe penetrations, prior to applying waterproof materials in kitchens and bathrooms",
      },
      { brand: "mapei", slug: "mapenet-150", quote: MAPENET },
    ],
  },
  {
    slug: "balcony",
    label: "Balcony and terrace",
    problem:
      "Outside, under tiles, over a room below. Movement and the joint at the wall are what fail first.",
    main: [
      {
        brand: "mapei",
        slug: "mapelastic-aquadefense",
        quote: "balconies and terraces",
      },
      {
        brand: "mapei",
        slug: "mapelastic-easy",
        quote:
          "Mapelastic Easy is used for waterproofing wet areas, balconies, and terraces.",
      },
      {
        brand: "oriental-yuhong",
        slug: "yhcoat-1000",
        quote: YHCOAT_1000_INTERIOR,
      },
    ],
    details: [
      { brand: "mapei", slug: "mapeband-easy", quote: MAPEBAND_JOINTS },
      { brand: "mapei", slug: "mapenet-150", quote: MAPENET },
    ],
    cautions: [
      {
        brand: "mapei",
        slug: "antipluviol",
        quote:
          "horizontal surfaces, such as terraces and flat roofs (use UltraCare Stain Protector W or UltraCare Stain Protector S)",
        note: "A water repellent for walls, not for a terrace floor.",
      },
    ],
  },
  {
    slug: "basement",
    label: "Basement and foundations",
    problem:
      "Ground water pushes from outside, sometimes from below the slab. The layer has to take pressure, and the joints in the concrete are the weak line.",
    main: [
      {
        brand: "oriental-yuhong",
        slug: "pmh-3080-plus",
        quote: "foundation slabs of underground structures",
      },
      {
        brand: "mapei",
        slug: "mapelastic-foundation",
        quote:
          "Waterproofing concrete and masonry structures subject to positive or negative hydrostatic pressure.",
      },
      { brand: "mapei", slug: "planiseal-88", quote: "foundation walls" },
      {
        brand: "mapei",
        slug: "idrocrete-kr-1000",
        quote: "basements and foundations",
      },
      {
        brand: "oriental-yuhong",
        slug: "yhcoat-1000",
        quote:
          "It can also be used for maintaining the waterproof layer of underground foundations",
      },
    ],
    details: [
      {
        brand: "mapei",
        slug: "idrostop-pvc",
        quote:
          "For waterproofing expansion and cold joints in new or existing civil, industrial, and hydraulic constructions.",
      },
      {
        brand: "mapei",
        slug: "mapeproof-swell",
        quote: "Sealing construction joints in concrete walls.",
      },
      {
        brand: "mapei",
        slug: "lamposilex",
        quote:
          "Stopping water leaks in basements, subways and below grade structures in general.",
      },
      {
        brand: "oriental-yuhong",
        slug: "yhrepair-2516",
        quote:
          "underground utility tunnels, basements, retaining walls, water supply pipelines, dams, and equipment foundations",
      },
      { brand: "x-calibur", slug: "x-seal-ps800", quote: "Basement cladding" },
    ],
    cautions: [
      {
        brand: "mapei",
        slug: "antipluviol",
        quote: "basements affected by negative-side moisture",
        note: "Not for water coming through from the ground side.",
      },
    ],
  },
  {
    slug: "water-tank",
    label: "Water tank",
    problem:
      "Water pushes out from inside, all the time. For drinking water the lining itself has to be suitable for it.",
    main: [
      {
        brand: "mapei",
        slug: "planiseal-88",
        quote:
          "Waterproofing basins, reservoirs, concrete or masonry tanks and pipes containing drinking water.",
      },
      {
        brand: "mapei",
        slug: "mapecoat-dw-25",
        quote: "Lining tanks used for containing drinking water.",
      },
      {
        brand: "x-calibur",
        slug: "x-shield-flexpruf",
        quote: "Water tank coating",
      },
      { brand: "mapei", slug: "idrocrete-kr-1000", quote: "storage tanks" },
    ],
    details: [
      {
        brand: "mapei",
        slug: "eporip",
        quote:
          "Rigid, waterproof construction joints (e.g. concrete bed to tank walls).",
      },
      { brand: "mapei", slug: "mapeproof-swell", quote: SWELL_OUTLETS },
      {
        brand: "mapei",
        slug: "lamposilex",
        quote: "Stopping water leaks in tanks above ground.",
      },
    ],
    cautions: [
      {
        brand: "mapei",
        slug: "antipluviol",
        quote: "basins or reservoirs containing water",
        note: "Not for anything that holds water.",
      },
    ],
  },
  {
    slug: "swimming-pool",
    label: "Swimming pool",
    problem:
      "A tank you tile. The waterproofing goes under the mosaic, and the adhesive and grout have to live under water too.",
    main: [
      {
        brand: "mapei",
        slug: "mapelastic-foundation",
        quote:
          "Waterproofing underground car-parks, cellars, sunken swimming pools and basins and lift pits against the counter-pressure of water.",
      },
      { brand: "mapei", slug: "planiseal-88", quote: "swimming-pools" },
      {
        brand: "x-calibur",
        slug: "x-shield-flexpruf",
        quote: "Swimming pools",
      },
      { brand: "oriental-yuhong", slug: "yhcoat-2060", quote: YHCOAT_2060_WET },
      { brand: "mapei", slug: "idrocrete-kr-1000", quote: "swimming pools" },
    ],
    details: [
      {
        brand: "mapei",
        slug: "keraflex-maxi-s1",
        quote: "Bonding tiles in swimming pools and tanks.",
      },
      {
        brand: "mapei",
        slug: "keracolor-ff",
        quote: "Grouting swimming pools",
      },
      {
        brand: "mapei",
        slug: "kerapoxy",
        quote:
          "Grouting swimming pools; particularly suitable for basins containing salt or thermal water.",
      },
      { brand: "mapei", slug: "mapeband-easy", quote: MAPEBAND_JOINTS },
      { brand: "mapei", slug: "mapeproof-swell", quote: SWELL_OUTLETS },
    ],
  },
  {
    slug: "walls",
    label: "External walls",
    problem:
      "Driving rain soaks into render and brick. Walls need to shed water, and the joints around frames and panels need sealing.",
    main: [
      {
        brand: "mapei",
        slug: "antipluviol",
        quote:
          "Protective treatment against rainwater and atmospheric moisture for walls coated with renders and/or covered with absorbent materials.",
      },
      {
        brand: "oriental-yuhong",
        slug: "yhcolorwall-5300",
        quote: YHCOLORWALL,
      },
      {
        brand: "oriental-yuhong",
        slug: "yhcoat-1000",
        quote: "Exterior non-tile and stone facade systems for building walls",
      },
    ],
    details: [
      {
        brand: "oriental-yuhong",
        slug: "yhpuseal-2925",
        quote:
          "YHPUseal-2925 is used for sealing and weatherproofing joints in the building envelope where reliability and durability is required",
      },
      {
        brand: "mapei",
        slug: "mapeband-tpe",
        quote: "Sealing structural joints in façades.",
      },
      {
        brand: "oriental-yuhong",
        slug: "yhrepair-2516",
        quote: "It can also be used for exterior wall waterproofing",
      },
    ],
  },
  {
    slug: "leaks",
    label: "Leaks and cracks",
    problem:
      "Water already coming through. Stop it first, then seal the crack, then waterproof the surface.",
    main: [
      {
        brand: "mapei",
        slug: "lamposilex",
        quote:
          "For instant stopping of water leaks, even water under pressure.",
      },
      {
        brand: "oriental-yuhong",
        slug: "yhrepair-2516",
        quote:
          "It is ideal to repair non-moving (static) cracks and holes with running water or moisture seepage",
      },
      {
        brand: "mapei",
        slug: "mapeproof-swell",
        quote:
          "Sealing where water seeps through cracks in reinforced concrete structures.",
      },
    ],
    details: [
      {
        brand: "mapei",
        slug: "epojet-lv",
        quote: "Ideal for sealing static cracks.",
      },
      {
        brand: "mapei",
        slug: "planiseal-88",
        quote:
          "Repairing underground masonries subject to water and moisture seepage in situations with negative pressure up to 1 atmosphere.",
      },
    ],
  },
];

export const SELECTOR_PATH = "/solutions/waterproofing";
