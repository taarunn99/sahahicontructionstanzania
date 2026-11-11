import type { SeoRow } from "@/lib/seo";

/**
 * Registry rows for the Vasa pages (metadata pass, 2026-11-12). Vasa is
 * held in Dar es Salaam (owner, 2026-11-09: "PMH, Vasa and sports held"), so
 * stock is "held"; the descriptions still send the visitor to "enquire" for
 * the quote and never say "in stock". Authorization wording:
 * "authorized dealer". Facts come from src/config/vasa.ts and the Vasa
 * technical data pages in src/content/vasa/. `Partial` comes off once every
 * row is written.
 */

export const VASA_SLUGS = [
  "vasa",
  "spc-flooring",
  "lvt-flooring",
  "wall-panels",
] as const;

export type VasaSlug = (typeof VASA_SLUGS)[number];

export const vasaSeo: Partial<Record<VasaSlug, SeoRow>> = {
  vasa: {
    query: "vasa authorized dealer Tanzania",
    titleOverride: "Vasa Authorized Dealer Tanzania - SPC and LVT | Sahihi",
    description:
      "Sahihi is an authorized Vasa dealer in Tanzania: SPC flooring, LVT flooring and wall panels from the Oriental Yuhong group, 71 decors. Enquire on WhatsApp.",
    stock: "held",
  },
  "spc-flooring": {
    query: "SPC flooring Tanzania",
    titleOverride: "SPC Flooring Tanzania - Vasa 5 mm and 8 mm | Sahihi",
    description:
      "SPC flooring in Tanzania from Sahihi, an authorized Vasa dealer: rigid core click planks in 5 mm and 8 mm, wear layers 0.2 to 0.55 mm. Enquire on WhatsApp.",
    stock: "held",
  },
  "lvt-flooring": {
    query: "LVT flooring Tanzania",
    titleOverride: "LVT Flooring Tanzania - Vasa Luxury Vinyl Tile | Sahihi",
    description:
      "LVT flooring in Tanzania from Sahihi, an authorized Vasa dealer: 2 mm luxury vinyl tile in carpet, stone and wood looks, Bfl-s1 fire class. Enquire on WhatsApp.",
    stock: "held",
  },
  "wall-panels": {
    query: "wall panels Tanzania",
    titleOverride: "Wall Panels Tanzania - Vasa SPC Digital Panels | Sahihi",
    description:
      "Vasa wall panels in Tanzania from Sahihi: colored film panels in wood, fabric and stone, 1200 x 2800 mm, digital panels at 600 to 1200 dpi. Enquire on WhatsApp.",
    stock: "held",
  },
};

/** The row for a slug; throws at build time if one is missing. */
export function vasaRow(slug: VasaSlug): SeoRow {
  const row = vasaSeo[slug];
  if (!row) throw new Error(`No SEO row for Vasa page "${slug}"`);
  return row;
}

/** Title and description for a Vasa page (every Vasa page has its own title). */
export function vasaPageMeta(slug: VasaSlug): {
  title: string;
  description: string;
} {
  const row = vasaRow(slug);
  if (!row.titleOverride) throw new Error(`No title for Vasa page "${slug}"`);
  return { title: row.titleOverride, description: row.description };
}
