import type { SeoRow } from "@/lib/seo";

/**
 * Registry rows for the X-Calibur pages (metadata pass, 2026-11-12), keyed
 * by catalogue slug; "x-calibur" is the hub. Authorization wording:
 * "authorized distributor". Facts come from the X-Calibur data sheets in
 * src/content/x-calibur/ and the catalogue; stock is "held" (the owner's
 * list, Dar es Salaam). `Partial` comes off once every row is written.
 */

export const XCALIBUR_SLUGS = [
  "x-calibur",
  "x-tech-sbr-bond",
  "x-tech-epoxyfloor-sl1",
  "x-prime-gp",
  "x-prime-gp2",
  "x-shield-flexpruf",
  "x-seal-ps800",
  "x-seal-universal-primer",
] as const;

export type XCaliburSlug = (typeof XCALIBUR_SLUGS)[number];

export const xcaliburSeo: Partial<Record<XCaliburSlug, SeoRow>> = {
  "x-calibur": {
    query: "X-Calibur Tanzania",
    titleOverride: "X-Calibur Tanzania - Epoxy Floors, Waterproofing, Sealants",
    description:
      "X-Calibur in Tanzania from Sahihi, authorized distributor in Dar es Salaam: epoxy floors, primers, SBR bond, FlexPruf and PS800 sealant. Quote on WhatsApp.",
    stock: "held",
  },
  "x-tech-sbr-bond": {
    query: "SBR bonding agent Tanzania",
    typeWords: "SBR bonding agent",
    description:
      "X-Tech SBR Bond, SBR bonding agent: latex bond coat to ASTM C1059 Type II, about 8 m² per litre. 20 litre drums held in Dar es Salaam. Quote on WhatsApp.",
    stock: "held",
  },
  "x-tech-epoxyfloor-sl1": {
    query: "self levelling epoxy floor",
    /** The pattern cannot fit "self levelling" with the brand word, so the
     * title drops "X-Calibur" (the name already says X-Tech). */
    titleOverride: "X-Tech EpoxyFloor SL1 Tanzania - Self Levelling Epoxy Floor",
    description:
      "X-Tech EpoxyFloor SL1 self levelling epoxy floor: 17 m² per 17 litre pack at 1 mm, over 70 MPa compressive. Held by Sahihi in Dar es Salaam. Ask for a quote.",
    stock: "held",
  },
  "x-prime-gp": {
    query: "epoxy primer Tanzania",
    typeWords: "epoxy primer",
    description:
      "X-Prime GP epoxy primer in Tanzania: 90% volume solids, 5 to 10 m² per litre under epoxy floors. 18 litre packs held in Dar es Salaam. Ask for a quote.",
    stock: "held",
  },
  "x-prime-gp2": {
    query: "X-Prime GP2 Tanzania",
    typeWords: "epoxy primer",
    description:
      "X-Prime GP2 in Tanzania: two part epoxy primer at 100% volume solids, 10 m² per litre at 100 microns. 18 litre packs held in Dar es Salaam. Quote on WhatsApp.",
    stock: "held",
  },
  "x-shield-flexpruf": {
    query: "elasto-cement coating",
    typeWords: "elasto-cement coating",
    description:
      "X-Shield FlexPruf elasto-cement coating: flexible waterproofing for concrete, 1 litre per m² per coat. 22 kg kits held in Dar es Salaam. Quote on WhatsApp.",
    stock: "held",
  },
  "x-seal-ps800": {
    query: "polysulphide sealant Tanzania",
    typeWords: "polysulphide sealant",
    description:
      "X-Seal PS800 polysulphide sealant in Tanzania: pouring grade to BS 4254, 25% movement in butt joints. 4 litre packs held in Dar es Salaam. Ask for a quote.",
    stock: "held",
  },
  "x-seal-universal-primer": {
    query: "X-Seal Universal Primer Tanzania",
    typeWords: "sealant primer",
    description:
      "X-Seal Universal Primer in Tanzania: sealant primer for X-Seal PS800 and FR200 joints, 15 m² per litre. 1 litre packs held in Dar es Salaam. Ask for a quote.",
    stock: "held",
  },
};

/** The row for a slug; throws at build time if one is missing. */
export function xcaliburRow(slug: XCaliburSlug): SeoRow {
  const row = xcaliburSeo[slug];
  if (!row) throw new Error(`No SEO row for X-Calibur page "${slug}"`);
  return row;
}

/** Title and description for a page with its own title (the hub). */
export function xcaliburPageMeta(slug: XCaliburSlug): {
  title: string;
  description: string;
} {
  const row = xcaliburRow(slug);
  if (!row.titleOverride) {
    throw new Error(`No title for X-Calibur page "${slug}"`);
  }
  return { title: row.titleOverride, description: row.description };
}
