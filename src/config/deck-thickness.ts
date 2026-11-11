/**
 * Spray thickness on a steel deck and its supporting beam, from UL Design
 * No. D780 (steel floor and form units, beams and joists), supplied in the
 * owner's folder on 2026-11-11 and published unaltered on /cmci/fire-rated-cement.
 * Read from the design's own thickness tables, Item 5 and Item 5A. Copied as
 * printed: ratings in hours, thicknesses in inches. Nothing interpolated.
 */

export const D780 = {
  design: "UL Design No. D780",
  /** Item 3A: galv fluted steel floor and form units. */
  deckDepths: ["1-1/2 in", "2 in", "3 in"],
  /** Item 4D: the minimum steel beam. */
  beamMin: "W8x28",
  /** Item 1: the topping over the deck. */
  concrete:
    "Normal weight or lightweight aggregate concrete, 3500 psi compressive strength",
} as const;

export type DeckGroup = {
  item: "5" | "5A";
  /** Stocked products the item names. */
  products: { slug: string; name: string }[];
  density: string;
};

export const DECK_GROUPS: DeckGroup[] = [
  {
    item: "5",
    products: [
      { slug: "monokote-mk-6-hy", name: "Monokote MK-6/HY" },
      { slug: "monokote-mk-6s", name: "Monokote MK-6s" },
    ],
    density: "Min avg and min ind density of 15/14 pcf",
  },
  {
    item: "5A",
    products: [
      { slug: "monokote-z-106", name: "Monokote Z-106" },
      { slug: "monokote-z-106-hy", name: "Monokote Z-106/HY" },
    ],
    density: "Min avg and min ind density of 22/19 pcf",
  },
];

export type DeckRow = {
  /** Restrained assembly, unrestrained assembly, unrestrained beam, hours. */
  restrained: number;
  unrestrained: number;
  beamRating: number;
  /** Thickness in inches, as printed, per item. */
  deck: Record<DeckGroup["item"], string>;
  beam: Record<DeckGroup["item"], string>;
};

export const DECK_ROWS: DeckRow[] = [
  {
    restrained: 1,
    unrestrained: 1,
    beamRating: 1,
    deck: { "5": "3/8", "5A": "7/16" },
    beam: { "5": "7/16", "5A": "7/16" },
  },
  {
    restrained: 1.5,
    unrestrained: 1,
    beamRating: 1,
    deck: { "5": "1/2", "5A": "9/16" },
    beam: { "5": "7/16", "5A": "7/16" },
  },
  {
    restrained: 1.5,
    unrestrained: 1.5,
    beamRating: 1.5,
    deck: { "5": "1/2", "5A": "9/16" },
    beam: { "5": "3/4", "5A": "3/4" },
  },
  {
    restrained: 2,
    unrestrained: 1,
    beamRating: 1,
    deck: { "5": "1/2", "5A": "9/16" },
    beam: { "5": "7/16", "5A": "7/16" },
  },
  {
    restrained: 2,
    unrestrained: 2,
    beamRating: 2,
    deck: { "5": "5/8", "5A": "5/8" },
    beam: { "5": "1", "5A": "1" },
  },
  {
    restrained: 3,
    unrestrained: 1.5,
    beamRating: 1.5,
    deck: { "5": "1/2", "5A": "9/16" },
    beam: { "5": "3/4", "5A": "3/4" },
  },
  {
    restrained: 3,
    unrestrained: 3,
    beamRating: 3,
    deck: { "5": "7/8", "5A": "7/8" },
    beam: { "5": "1-5/16", "5A": "1-5/16" },
  },
];

/** "1-5/16" -> 1.3125 */
export function inches(text: string) {
  const [whole, frac] = text.includes("-")
    ? text.split("-")
    : text.includes("/")
      ? ["0", text]
      : [text, ""];
  let value = Number(whole);
  if (frac) {
    const [n, d] = frac.split("/").map(Number);
    value += n / d;
  }
  return value;
}

/** Inches to millimetres, rounded up so the coat is never under. */
export const toMm = (text: string) => Math.ceil(inches(text) * 25.4);

export const hours = (h: number) => (h === 1.5 ? "1-1/2 h" : `${h} h`);
