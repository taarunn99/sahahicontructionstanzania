import type { SeoRow } from "@/lib/seo";

/**
 * Registry rows for the CMCI pages (metadata pass, 2026-11-12), keyed by
 * slug; "cmci" is the hub and "fire-rated-cement" the explainer. CMCI is
 * never worded as the maker and the company behind the data sheets is never
 * named (GOVERNANCE). Authorization wording: "authorized dealer". Stock is
 * "order": fireproofing comes in to order and is supplied from Dar es
 * Salaam, never "in stock". Facts come from src/content/cmci/ and
 * src/config/fire-thickness.ts (UL Design X854). `Partial` comes off once
 * every row is written.
 */

export const CMCI_SLUGS = [
  "cmci",
  "fire-rated-cement",
  "avikote-av-800",
  "avikote-av-650",
  "monokote-z-156",
  "monokote-z-146",
  "monokote-z-106-hy",
  "monokote-z-106",
  "monokote-mk-6-hy",
  "monokote-mk-6s",
  "aquakote",
  "monokote-accelerator",
  "fr-bonding-agent",
] as const;

export type CmciSlug = (typeof CMCI_SLUGS)[number];

export const cmciSeo: Partial<Record<CmciSlug, SeoRow>> = {
  cmci: {
    query: "CMCI authorized dealer Tanzania",
    titleOverride: "CMCI Authorized Dealer Tanzania - Fireproofing | Sahihi",
    description:
      "CMCI authorized dealer in Tanzania: Sahihi supplies cementitious fireproofing for petrochemical plant, steel and tunnels from Dar es Salaam. Ask for a quote.",
    stock: "order",
  },
  "fire-rated-cement": {
    query: "fire rated cement Tanzania",
    titleOverride: "Fire Rated Cement Tanzania - CMCI Fireproofing | Sahihi",
    description:
      "Fire rated cement in Tanzania: steel fireproofing, not refractory cement, up to 4 hours on the data sheets. Supplied by Sahihi, Dar es Salaam. Ask for a quote.",
    stock: "order",
  },
  "avikote-av-800": {
    query: "petrochemical fireproofing Tanzania",
    typeWords: "petrochemical fireproofing",
    description:
      "Avikote AV 800 petrochemical fireproofing in Tanzania: UL 1709 and ASTM E 119 tested, 800 kg/m³ dry density. To order from Dar es Salaam. Ask for a quote.",
    stock: "order",
  },
  "avikote-av-650": {
    query: "refinery fireproofing",
    typeWords: "refinery fireproofing",
    description:
      "Avikote AV 650 refinery fireproofing: tested to UL 1709, ASTM E 119 and BS 476 Part 20, 640 kg/m³ dry density. To order from Sahihi. Ask for a quote.",
    stock: "order",
  },
  "monokote-z-156": {
    query: "tunnel fireproofing Tanzania",
    typeWords: "tunnel fireproofing",
    description:
      "Monokote Z-156T tunnel fireproofing in Tanzania: up to 4 hours to the RWS curve and UL 1709, 800 kg/m³ minimum. Supplied from Dar es Salaam. Ask for a quote.",
    stock: "order",
  },
  "monokote-z-146": {
    query: "high density fireproofing",
    typeWords: "high density fireproofing",
    description:
      "Monokote Z-146 high density fireproofing: 640 kg/m³ minimum, up to 4 hours, for parking garages and exterior exposure. Ordered in by Sahihi. Ask for a quote.",
    stock: "order",
  },
  "monokote-z-106-hy": {
    query: "Monokote Z-106/HY Tanzania",
    typeWords: "quick set fireproofing",
    description:
      "Monokote Z-106/HY in Tanzania: quick set medium density fireproofing, 352 kg/m³ minimum, for garages and pool areas. To order from Sahihi. Ask for a quote.",
    stock: "order",
  },
  "monokote-z-106": {
    query: "Monokote Z-106 Tanzania",
    typeWords: "medium density fireproofing",
    description:
      "Monokote Z-106 in Tanzania: medium density fireproofing for steel and decking, up to 4 hours, 352 kg/m³, UL Design X854. To order from Sahihi. Ask for a quote.",
    stock: "order",
  },
  "monokote-mk-6-hy": {
    query: "Monokote MK-6/HY",
    typeWords: "sprayed fireproofing",
    description:
      "Monokote MK-6/HY: single component sprayed fireproofing for steel columns, beams and decking, 240 kg/m³, UL Design X854. To order from Sahihi. Ask for a quote.",
    stock: "order",
  },
  "monokote-mk-6s": {
    query: "Monokote MK-6s Tanzania",
    typeWords: "sprayed fireproofing",
    description:
      "Monokote MK-6s in Tanzania: factory mixed sprayed fireproofing, up to 4 hours, 305 kg/m³, 2.6 m² per bag at 25 mm. Ordered in by Sahihi. Quote on WhatsApp.",
    stock: "order",
  },
  aquakote: {
    query: "fireproofing topcoat",
    typeWords: "fireproofing topcoat",
    description:
      "Aquakote fireproofing topcoat: water based acrylic over Monokote and Avikote, 400% elongation, bridges cracks to 2 mm. To order from Sahihi. Ask for a quote.",
    stock: "order",
  },
  "monokote-accelerator": {
    query: "Monokote Accelerator Tanzania",
    typeWords: "set accelerator",
    description:
      "Monokote Accelerator in Tanzania: aluminium sulphate granules to speed the set of Monokote MK-6/HY. 27.2 kg bags to order from Sahihi. Ask for a quote.",
    stock: "order",
  },
  "fr-bonding-agent": {
    query: "fireproofing bonding agent",
    typeWords: "fireproofing bonding agent",
    description:
      "FR Bonding Agent, fireproofing bonding agent: styrene acrylic emulsion under fireproofing or a sealer over it. To order from Sahihi. Ask for a quote.",
    stock: "order",
  },
};

/** The row for a slug; throws at build time if one is missing. */
export function cmciRow(slug: CmciSlug): SeoRow {
  const row = cmciSeo[slug];
  if (!row) throw new Error(`No SEO row for CMCI page "${slug}"`);
  return row;
}

/** Title and description for a page with its own title (hub, explainer). */
export function cmciPageMeta(slug: CmciSlug): {
  title: string;
  description: string;
} {
  const row = cmciRow(slug);
  if (!row.titleOverride) throw new Error(`No title for CMCI page "${slug}"`);
  return { title: row.titleOverride, description: row.description };
}
