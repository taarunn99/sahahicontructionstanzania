/**
 * OYH's own posters, shown on the hub as issued (owner, 2026-11-21: "a
 * request from the director to post this on OYH page"). Two WhatsApp
 * pictures received 2026-11-20, published at their native size, nothing
 * changed; a 4K upscale was tried and rejected because it rewrote the pack
 * labels (docs/IMAGE-PROVENANCE.md 3r). The headline and the occasion are
 * read off the poster; `line` is ours and claims only what the catalogue
 * says; `products` are the catalogue slugs we hold that appear on it.
 */

export const POSTERS_ID = "posters";

export type OyhPoster = {
  slug: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  /** The occasion or the subject, as printed on the poster. */
  tag: string;
  /** The poster's own headline, as printed. */
  headline: string;
  /** One sentence of ours. */
  line: string;
  /** Catalogue slugs we hold that are on the poster. */
  products: string[];
};

export const oyhPosters: OyhPoster[] = [
  {
    slug: "children-day",
    src: "/images/oriental-yuhong/posters/children-day.webp",
    width: 1036,
    height: 1280,
    alt: "OYH's World Children's Day poster: a child placing wooden blocks beside a model city on a drawn map, OYH packs in the foreground, and the words For the World They're Building",
    tag: "World Children's Day · 20 November",
    headline: "For the World They're Building",
    line: "A child builds a city on a drawn map, and OYH's packs stand at the front: the coatings, the polyurethane range and the bitumen membrane. Among them, YHColorWall-5300, which we hold in Dar es Salaam.",
    products: ["yhcolorwall-5300"],
  },
  {
    slug: "rain-or-shine",
    src: "/images/oriental-yuhong/posters/rain-or-shine.webp",
    width: 1031,
    height: 1280,
    alt: "OYH's poster for YHColorWall-5300: rain over a flat roof at night, a lit living room below it, the 20 kg pack and a roller, and the words Rain or Shine. Comfort Within",
    tag: "YHColorWall-5300 · Roofs and exterior walls",
    headline: "Rain or Shine. Comfort Within",
    line: "Rain on the roof, a dry room under it. OYH's poster for YHColorWall-5300, the UV-resistant elastic coating for roofs and exterior walls, which we hold in Dar es Salaam.",
    products: ["yhcolorwall-5300"],
  },
];
