import type { Metadata } from "next";

/**
 * The real Swahili pages and their English twins (owner, 2026-11-06: key pages
 * first). A plain module with no catalogue in it, because the header, the
 * footer and the language switch all read it on the client.
 *
 * A page listed here is a real, indexed page at its own URL. Every other page
 * has no Swahili version: its SW button uses Google Translate instead.
 */

const LINES = [
  "tile-adhesives-grouts",
  "primers-levelling",
  "concrete-repair",
  "resin-flooring",
  "waterproofing",
] as const;

const TWINS: [english: string, swahili: string][] = [
  ["/", "/sw"],
  ["/mapei", "/sw/mapei"],
  ...LINES.map((line): [string, string] => [
    `/mapei/${line}`,
    `/sw/mapei/${line}`,
  ]),
];

const toSwahili = new Map(TWINS);
const toEnglish = new Map(TWINS.map(([en, sw]) => [sw, en]));

export const swTwins = TWINS;
export const isSwPath = (path: string) =>
  path === "/sw" || path.startsWith("/sw/");
export const swTwin = (path: string) => toSwahili.get(path);
export const enTwin = (path: string) => toEnglish.get(path);

/** Canonical and hreflang for one side of a pair (GOVERNANCE.md section 6). */
export function pairAlternates(
  english: string,
  side: "en" | "sw" = "en",
): Metadata["alternates"] {
  const swahili = toSwahili.get(english);
  return {
    canonical: side === "sw" && swahili ? swahili : english,
    languages: {
      en: english,
      ...(swahili ? { sw: swahili } : {}),
      "x-default": english,
    },
  };
}

/** The site's navigation on a Swahili page. */
export const swNav = [
  { label: "Mwanzo", href: "/sw" },
  { label: "Mapei", href: "/sw/mapei" },
  { label: "Bidhaa", href: "/products" },
  { label: "Miradi", href: "/projects" },
  { label: "Kuhusu", href: "/about" },
  { label: "Mawasiliano", href: "/contact" },
] as const;

const SW_LINE_LABELS: Record<string, string> = {
  "/mapei/tile-adhesives-grouts": "Gundi za tiles, grout na utunzaji",
  "/mapei/primers-levelling": "Primer, self-levelling na sakafu za mbao",
  "/mapei/concrete-repair": "Ukarabati wa zege, grout na anchoring",
  "/mapei/resin-flooring": "Sakafu za resin na coating",
  "/mapei/waterproofing": "Kuzuia maji (waterproofing)",
};

/** A chrome link as a Swahili page shows it. Non-Mapei lines keep their name. */
export function swChromeLink<T extends { label: string; href: string }>(
  link: T,
): T {
  const label = SW_LINE_LABELS[link.href];
  return label
    ? { ...link, label, href: toSwahili.get(link.href) ?? link.href }
    : link;
}

/** The WhatsApp opener on a Swahili page. */
export function whatsappLinkSw(number: string, topic: string) {
  const text = `Habari Sahihi Construction Chemicals, ningependa kuuliza kuhusu ${topic}.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
