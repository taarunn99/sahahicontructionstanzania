import ogManifest from "@/config/og-manifest.json";

/**
 * SERP metadata helpers (owner rule, 2026-08-18): titles use as much of
 * the ~60-character SERP budget as their keywords honestly fill, and
 * descriptions land inside the 120-160 character window.
 *
 * The metadata pass of 2026-11-12 (owner: every title and description
 * keyword-friendly, ethically) added the registry rows in src/config/seo/,
 * one per page, which the page templates read through `composeItemTitle`
 * and `resolveOg` below. `scripts/audit-metadata.mjs` gates the built HTML.
 * Blog posts are no longer exempt: they follow the same gate.
 */

const TITLE_MAX = 60;
const DESC_MAX = 160;

/**
 * One page's registry row (src/config/seo/<family>.ts). The maps are the
 * registry of record; SEO-STRATEGY.md section 5 is regenerated from them.
 */
export type SeoRow = {
  /** The one search query this page owns, as a buyer types it. Unique
   * across the whole site (scripts/verify-seo-registry.mjs). */
  query: string;
  /** Plain buyer words for the product type in the title, e.g. "tile
   * adhesive", "non shrink grout". Not the catalogue's internal label. */
  typeWords?: string;
  /** The meta description, hand-written, 120-160 characters, no price. */
  description: string;
  /** What the description may claim about stock. "held": at the Dar es
   * Salaam warehouse per the owner's lists; "order": brought in to order;
   * "enquire": nothing about stock (Vasa, order-in lines). */
  stock: "held" | "order" | "enquire";
  /** Whole title, only when the pattern cannot be used (a source typo in
   * the name, a hub with its own shape). Still 35-60 characters. */
  titleOverride?: string;
  /** Put "Tanzania" in the title. On by default for products; off for
   * BIHUI tools without a real local query (plan, 2026-11-12). */
  geo?: boolean;
};

/**
 * The one item-title pattern for every product family:
 *   <Name> Tanzania - <Brand> <type words> | Sahihi
 * Drop order when the budget is short: the "| Sahihi" suffix first, then
 * the type words, then the geo; never a dangling dash, never a cut word.
 */
export function composeItemTitle(
  name: string,
  brand: string,
  typeWords?: string,
  options: { geo?: boolean } = {},
): string {
  const geo = options.geo === false ? "" : " Tanzania";
  const type = typeWords
    ? ` ${typeWords.replace(/\b[a-z]/g, (l) => l.toUpperCase())}`
    : "";
  const candidates = [
    `${name}${geo} - ${brand}${type} | Sahihi`,
    `${name}${geo} - ${brand}${type}`,
    `${name}${geo} - ${brand} | Sahihi`,
    `${name}${geo} - ${brand}`,
    `${name} - ${brand}${type}`,
    `${name} - ${brand}`,
    name,
  ];
  return candidates.find((title) => title.length <= TITLE_MAX) ?? name;
}

/**
 * The Open Graph card for a route, if scripts/build-og-cards.mjs made one
 * (src/config/og-manifest.json, committed with the PNGs in public/og/).
 * Pages without a card keep `ogBase` and the root opengraph-image.jpg.
 */
export function resolveOg(
  route: string,
): { url: string; width: number; height: number; alt: string }[] | undefined {
  const card = (ogManifest as Record<string, { url: string; alt: string }>)[
    route
  ];
  return card ? [{ url: card.url, width: 1200, height: 630, alt: card.alt }] : undefined;
}

/**
 * Greedy title builder. Starts from the primary-keyword base and
 * appends each extra (which must carry its own separator, e.g.
 * " - Price & SKUs", " | Global Classic") while the budget holds.
 */
export function seoTitle(base: string, ...extras: string[]): string {
  let title = base;
  for (const extra of extras) {
    if (extra && title.length + extra.length <= TITLE_MAX) title += extra;
  }
  return title;
}

/**
 * Greedy description builder. Appends tails (sentences with their own
 * punctuation) while the result stays within 160 characters, then
 * word-truncates cleanly if the core alone overruns.
 */
export function seoDescription(core: string, ...tails: string[]): string {
  let out = core.trim();
  for (const tail of tails) {
    const next = `${out} ${tail.trim()}`;
    if (next.length <= DESC_MAX) out = next;
  }
  if (out.length > DESC_MAX) {
    const cut = out.slice(0, DESC_MAX - 1);
    const stop = Math.max(cut.lastIndexOf(" "), 0);
    out = `${cut.slice(0, stop).replace(/[\s,;:.-]+$/, "")}.`;
  }
  return out;
}

/**
 * The share card every page starts from. A page that sets its own `openGraph`
 * replaces the root one wholesale (Next merges metadata shallowly), so the
 * image, site name and locale are spread in first and the page's own title,
 * description, url (and images, where it has a better picture) follow.
 */
export const ogBase: {
  type: "website";
  siteName: string;
  locale: string;
  images: { url: string; width: number; height: number; alt: string }[];
} = {
  type: "website",
  siteName: "Sahihi Construction Chemicals",
  locale: "en_TZ",
  images: [
    {
      url: "/opengraph-image.jpg",
      width: 1200,
      height: 630,
      alt: "Sahihi Construction Chemicals Limited logo with the line Enhance Your Building Life",
    },
  ],
};
