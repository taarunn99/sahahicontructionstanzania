import type { SeoRow } from "@/lib/seo";

/**
 * Registry rows for the core pages (metadata pass, 2026-11-12), keyed by
 * route. Home owns "construction chemicals Tanzania". The Mapei hub, its
 * five lines and the Swahili pages are in src/config/seo/mapei.ts (D8: the
 * hub, not the home page, owns "Mapei Tanzania"). `Partial` comes off once
 * every row is written.
 *
 * Every core row carries the whole title in `titleOverride` (these pages
 * have no item pattern), 35-60 characters, and a hand-written description
 * of 120-160 characters: what the page is, the proof, and the stock or
 * quote route. No price, no superlative, hyphens only. The home row records
 * what src/app/layout.tsx and src/config/site.ts already publish; those two
 * files stay the source for the home <title> and description.
 *
 * Lengths and queries are logged in docs/seo/2026-11-12/core.md.
 */

export const CORE_ROUTES = [
  "/",
  "/about",
  "/contact",
  "/products",
  "/projects",
  "/sale",
  "/specifier-pack",
  "/solutions/waterproofing",
  "/solutions/tile-installation",
  "/solutions/concrete-repair",
] as const;

export type CoreRoute = (typeof CORE_ROUTES)[number];

/** A core row always has its whole title written out. */
export type CoreSeoRow = SeoRow & { titleOverride: string };

export const coreSeo: Partial<Record<CoreRoute, CoreSeoRow>> = {
  "/": {
    query: "construction chemicals Tanzania",
    // Mirrors layout.tsx `title.default` and siteConfig.description.
    titleOverride: "Construction Chemicals in Tanzania - Mapei Distributor",
    description:
      "Construction chemicals in Tanzania from Sahihi, authorized Mapei distributor: tile adhesives, waterproofing, epoxy flooring and concrete repair, Dar es Salaam.",
    stock: "held",
  },
  "/about": {
    query: "Sahihi Construction Chemicals",
    // The brand-query landing page leads with the exact licensed name.
    titleOverride: "Sahihi Construction Chemicals Limited - Dar es Salaam",
    // Director's name as printed on the business card (siteConfig.director).
    description:
      "Sahihi Construction Chemicals Limited, Dar es Salaam: authorized Mapei, Oriental Yuhong and X-Calibur distributor, stock in Mikocheni. Director Anil Sankaran.",
    stock: "held",
  },
  "/contact": {
    // docs/research/01 section 1.9: a real head term the incumbent holds.
    // "Dealer" is the searcher's word; the authorization wording stays
    // "authorized distributor" (GOVERNANCE 2).
    query: "Mapei dealer Dar es Salaam",
    titleOverride: "Mapei Dealer in Dar es Salaam - Contact Sahihi for a Quote",
    description:
      "Contact Sahihi Construction Chemicals, Mapei dealer on Coca-Cola Road, Dar es Salaam. WhatsApp, call or email for a Mapei, Oriental Yuhong or X-Calibur quote.",
    stock: "held",
  },
  "/products": {
    // Not "Mapei products Tanzania": that variant belongs to /mapei (5.1).
    query: "construction chemicals products Tanzania",
    titleOverride: "Construction Chemicals Products in Tanzania - Catalogue",
    description:
      "Mapei, Oriental Yuhong, X-Calibur, CMCI, Vasa and BIHUI products from Sahihi, Dar es Salaam, sorted by the job: tiling, waterproofing, floors, repair, tools.",
    // The page spans held lines and order-in lines, so it claims nothing.
    stock: "enquire",
  },
  "/projects": {
    query: "Mapei projects Tanzania",
    titleOverride: "Mapei Projects in Tanzania - Sites We Have Supplied | Sahihi",
    description:
      "Projects in Tanzania supplied with Mapei waterproofing, concrete repair, resin flooring and tile adhesives in 2025 and 2026. Filter by line or by product.",
    stock: "held",
  },
  "/sale": {
    // SEO-STRATEGY 5.1a. Dated to the offer in src/config/offers.ts: rewrite
    // this row when the next offer replaces it. Never a price.
    query: "Mapei offer Tanzania",
    titleOverride: "Mapei Offer in Tanzania - November 2026 Flash Sale | Sahihi",
    description:
      "Mapei products on offer until 30 November 2026 from Sahihi, Dar es Salaam: tile adhesives, grouts, floor finishes, cleaners. No price printed: ask on WhatsApp.",
    stock: "held",
  },
  "/specifier-pack": {
    // SEO-STRATEGY 5.3 and reports/: a TBA or NHC QS copies a compliant
    // BOQ clause and downloads the data sheet. "BOQ clauses" is the variant.
    query: "construction chemicals specification Tanzania",
    titleOverride: "Construction Chemicals Specification Tanzania - BOQ Clauses",
    description:
      "BOQ clauses, declared standards and data sheet editions for every product Sahihi supplies in Tanzania. One spreadsheet for consultants and quantity surveyors.",
    stock: "enquire",
  },
  "/solutions/waterproofing": {
    query: "waterproofing Tanzania",
    titleOverride: "Waterproofing Tanzania - Roofs, Basements, Tanks, Wet Areas",
    description:
      "Which waterproofing for which part of the building: roofs, bathrooms, basements, tanks, pools, walls. Mapei, OYH and X-Calibur held in Dar es Salaam. Ask us.",
    stock: "held",
  },
  "/solutions/tile-installation": {
    query: "tile adhesive Tanzania",
    titleOverride: "Tile Adhesive Tanzania - Which Adhesive, Grout and Primer",
    description:
      "Which tile adhesive, grout, primer and cleaner for which job: ceramic, porcelain, large tiles, outdoors, pools, stone. Mapei held in Dar es Salaam. Ask us.",
    stock: "held",
  },
  "/solutions/concrete-repair": {
    query: "concrete repair Tanzania",
    titleOverride: "Concrete Repair Tanzania - Spalling, Cracks and Anchoring",
    description:
      "Which product for which concrete repair: spalling, rusting steel, cracks, new onto old, floors, anchoring. Mapei and X-Calibur held in Dar es Salaam. Ask us.",
    stock: "held",
  },
};

/**
 * The row for a core route. Throws at build time if a row is missing, so a
 * page can never ship with an empty title while `coreSeo` stays `Partial`.
 */
export function coreRow(route: CoreRoute): CoreSeoRow {
  const row = coreSeo[route];
  if (!row) throw new Error(`src/config/seo/core.ts has no row for ${route}`);
  return row;
}
