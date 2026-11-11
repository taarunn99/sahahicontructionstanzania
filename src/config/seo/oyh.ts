import type { SeoRow } from "@/lib/seo";

/**
 * Registry rows for the Oriental Yuhong pages (metadata pass, 2026-11-12):
 * the hub ("oriental-yuhong", which leads with "OYH East Africa"), the HDPE
 * explainer, the six products, the sports hub and its seven systems. No
 * office or stock outside Tanzania is claimed. Authorization wording:
 * "authorized distributor". The six products are "held" (the owner's list,
 * Dar es Salaam); the sports systems are "enquire" (acrylic, EPDM and turf
 * are ordered per job, Q22). Facts come from src/content/oriental-yuhong/,
 * the catalogue and src/config/oyh-sports-systems.ts. `Partial` comes off
 * once every row is written.
 */

export const OYH_SLUGS = [
  "oriental-yuhong",
  "hdpe-waterproofing",
  "yhcoat-1000",
  "pmh-3080-plus",
  "yhcolorwall-5300",
  "yhcoat-2060",
  "yhpuseal-2925",
  "yhrepair-2516",
  "sports-flooring",
  "sports/all-plastic-track",
  "sports/breathable-track",
  "sports/hybrid-track",
  "sports/silicon-pu-court",
  "sports/acrylic-court",
  "sports/artificial-turf",
  "sports/epdm-walking-track",
] as const;

export type OyhSlug = (typeof OYH_SLUGS)[number];

export const oyhSeo: Partial<Record<OyhSlug, SeoRow>> = {
  "oriental-yuhong": {
    query: "OYH East Africa",
    titleOverride: "OYH East Africa - Oriental Yuhong Tanzania | Sahihi",
    description:
      "OYH products in East Africa from Sahihi, Oriental Yuhong's authorized distributor in Dar es Salaam: HDPE membrane, coatings, sports floors. Ask for a quote.",
    stock: "held",
  },
  "hdpe-waterproofing": {
    query: "HDPE waterproofing Tanzania",
    titleOverride: "HDPE Waterproofing Tanzania - OYH PMH-3080 Plus | Sahihi",
    description:
      "HDPE waterproofing in Tanzania: OYH PMH-3080 Plus pre-applied membrane, 1.2 or 1.5 mm, under slabs and tunnels. Rolls held in Dar es Salaam. Ask for a quote.",
    stock: "held",
  },
  "yhcoat-1000": {
    query: "cementitious waterproofing slurry",
    typeWords: "cementitious waterproofing slurry",
    description:
      "YHCoat-1000 cementitious waterproofing slurry: two component, 2 kg/m² in two coats in wet areas, BS EN 14891. 26 kg sets held in Dar es Salaam. Ask for a quote.",
    stock: "held",
  },
  "pmh-3080-plus": {
    query: "pre-applied HDPE membrane",
    typeWords: "pre-applied HDPE membrane",
    description:
      "PMH-3080 Plus pre-applied HDPE membrane: 1.2 or 1.5 mm film with adhesive layer, 71 m head to ASTM D5385. Rolls held in Dar es Salaam. Ask for a quote.",
    stock: "held",
  },
  "yhcolorwall-5300": {
    query: "liquid waterproofing membrane",
    typeWords: "liquid waterproofing membrane",
    /** "Tanzania" would push the title past 60; the description carries the geo. */
    geo: false,
    description:
      "YHColorWall-5300 liquid waterproofing membrane for exterior walls and roofs: UV stable, 2 to 3 kg/m². 20 kg pails held in Dar es Salaam. Ask for a quote.",
    stock: "held",
  },
  "yhcoat-2060": {
    query: "wet room waterproofing coating",
    typeWords: "wet room waterproofing coating",
    description:
      "YHCoat-2060 wet room waterproofing coating: keyed finish for direct tiling, 2 kg/m² at 1 mm dry film. 15 kg pails held in Dar es Salaam. Ask for a quote.",
    stock: "held",
  },
  "yhpuseal-2925": {
    query: "polyurethane joint sealant Tanzania",
    typeWords: "polyurethane joint sealant",
    description:
      "YHPUseal-2925 polyurethane joint sealant in Tanzania: moisture curing, 25% movement to ASTM C719. 600 ml held in Dar es Salaam. Ask for a quote.",
    stock: "held",
  },
  "yhrepair-2516": {
    query: "hydraulic repair mortar",
    typeWords: "hydraulic repair mortar",
    description:
      "YHRepair-2516 hydraulic repair mortar: quick setting, stops running water, fire class A1. 4 kg bags held in Dar es Salaam. Ask for a quote.",
    stock: "held",
  },
  "sports-flooring": {
    query: "sports flooring Tanzania",
    titleOverride: "Sports Flooring Tanzania - Tracks, Courts, Turf | OYH",
    description:
      "Sports flooring in Tanzania from Sahihi and Oriental Yuhong: running tracks, silicon PU and acrylic courts, turf and EPDM, in 3D. Ask for a quote.",
    stock: "held",
  },
  "sports/all-plastic-track": {
    query: "running track Tanzania",
    titleOverride: "Polyurethane Running Track Tanzania - All Plastic | OYH",
    description:
      "Oriental Yuhong polyurethane running track in Tanzania: PSV-201 elastic layer and PSV-301 surface, layers in 3D, build film and manual pages. Quote from Sahihi.",
    stock: "held",
  },
  "sports/breathable-track": {
    query: "breathable running track",
    titleOverride: "Breathable Running Track Tanzania - Permeable EPDM | OYH",
    description:
      "Oriental Yuhong breathable running track: EPDM layers that let heavy rain drain through, rated for fitness trails and kindergartens. In 3D. Quote from Sahihi.",
    stock: "held",
  },
  "sports/hybrid-track": {
    query: "hybrid running track Tanzania",
    titleOverride: "Hybrid Running Track Tanzania - PU and EPDM | OYH",
    description:
      "Oriental Yuhong hybrid running track in Tanzania: polyurethane with EPDM particles in the PSV-201 middle layer. Layers in 3D and build film. Quote from Sahihi.",
    stock: "held",
  },
  "sports/silicon-pu-court": {
    query: "silicon PU court Tanzania",
    titleOverride: "Silicon PU Court Tanzania - Basketball, Tennis | OYH",
    description:
      "Oriental Yuhong silicon PU court in Tanzania for basketball, tennis and badminton: 5 mm and 8 mm build-ups in 3D, calculator in kg and packs. Ask for a quote.",
    stock: "held",
  },
  "sports/acrylic-court": {
    query: "acrylic tennis court Tanzania",
    titleOverride: "Acrylic Tennis Court Tanzania - Hard and Elastic | OYH",
    description:
      "Oriental Yuhong acrylic tennis court in Tanzania, hard or 5 mm elastic, on asphalt or concrete: layers in 3D, calculator, drying times. Per job from Sahihi.",
    stock: "order",
  },
  "sports/artificial-turf": {
    query: "artificial turf Tanzania",
    titleOverride: "Artificial Turf Tanzania - Football Pitch Grass | OYH",
    description:
      "Oriental Yuhong artificial turf in Tanzania for football pitches: PSV-601 turf at 10,500 stitches per m², shock pad and infill. Ordered per job by Sahihi.",
    stock: "order",
  },
  "sports/epdm-walking-track": {
    query: "EPDM flooring Tanzania",
    titleOverride: "EPDM Flooring Tanzania - Rubber Granule Surface | OYH",
    description:
      "Oriental Yuhong EPDM flooring in Tanzania for walkways, play areas and fitness trails: 8 mm granules under 5 mm topcoat, calculator. Ordered per job by Sahihi.",
    stock: "order",
  },
};

/** The row for a slug; throws at build time if one is missing. */
export function oyhRow(slug: OyhSlug): SeoRow {
  const row = oyhSeo[slug];
  if (!row) throw new Error(`No SEO row for Oriental Yuhong page "${slug}"`);
  return row;
}

/** Title and description for a page with its own title (hubs, systems). */
export function oyhPageMeta(slug: OyhSlug): {
  title: string;
  description: string;
} {
  const row = oyhRow(slug);
  if (!row.titleOverride) {
    throw new Error(`No title for Oriental Yuhong page "${slug}"`);
  }
  return { title: row.titleOverride, description: row.description };
}
