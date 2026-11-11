/**
 * Fireproofing thickness for steel columns, from UL Design No. X854 (Open
 * Steel Section columns, ANSI/UL 263, September 05, 2024), the printout the
 * owner supplied on 2026-11-11 (public/tds/cmci/docs/).
 *
 * The design prints, for ratings of 1, 1-1/2, 2, 3 and 4 hours:
 *
 *     h = R / (1.05 (W/D) + 0.61)
 *
 *   h   thickness of spray-applied fire resistive material, inches,
 *       in the range 0.25 to 3.875 in
 *   R   rating, hours (1 to 4)
 *   W   weight of the steel column, lb per foot
 *   D   heated perimeter of the column, inches
 *   W/D 0.338 to 6.76
 *
 * The design's own table can give a thinner coat for the W sizes it lists;
 * this tool uses the equation only, which is the general case. Of the types
 * the design lists for the maker of our range, four are in the CMCI range:
 * MK-6/HY, MK-6s, Z-106 and Z-106/HY. UL Design Y710 (hollow sections) does
 * not list these four for that maker, so hollow sections are not offered.
 *
 * Nothing here is a Sahihi or CMCI listing. The project's fire engineer and
 * the authority having jurisdiction approve the final thickness.
 */

export const X854 = {
  design: "UL Design No. X854",
  wdMin: 0.338,
  wdMax: 6.76,
  hMinIn: 0.25,
  hMaxIn: 3.875,
  ratings: [1, 1.5, 2, 3, 4] as const,
  /** CMCI product slugs the design lists, with the density it requires. */
  products: [
    { slug: "monokote-mk-6-hy", name: "Monokote MK-6/HY", pcf: 15 },
    { slug: "monokote-mk-6s", name: "Monokote MK-6s", pcf: 15 },
    { slug: "monokote-z-106", name: "Monokote Z-106", pcf: 22 },
    { slug: "monokote-z-106-hy", name: "Monokote Z-106/HY", pcf: 22 },
  ],
};

export type Rating = (typeof X854.ratings)[number];

/** kg/m to lb/ft. */
const LB_FT_PER_KG_M = 0.671969;

/**
 * Heated perimeter of an I or H column fireproofed on all four sides,
 * contour sprayed: 2 d + 4 b - 2 tw.
 */
export const heatedPerimeterMm = (d: number, b: number, tw: number) =>
  2 * d + 4 * b - 2 * tw;

/** W/D in the design's units (lb/ft per inch). */
export const wOverD = (massKgPerM: number, perimeterMm: number) =>
  (massKgPerM * LB_FT_PER_KG_M) / (perimeterMm / 25.4);

export type ThicknessResult =
  | { ok: true; inches: number; mm: number; fraction: string }
  | { ok: false; reason: "wd-low" | "wd-high" | "too-thick" };

const fraction16 = (inches: number) => {
  const sixteenths = Math.round(inches * 16);
  const whole = Math.floor(sixteenths / 16);
  let rest = sixteenths % 16;
  let den = 16;
  while (rest > 0 && rest % 2 === 0) {
    rest /= 2;
    den /= 2;
  }
  if (!rest) return `${whole}`;
  return whole ? `${whole}-${rest}/${den}` : `${rest}/${den}`;
};

/** Thickness by the X854 equation, rounded UP to the next 1/16 in. */
export function columnThickness(rating: Rating, wd: number): ThicknessResult {
  if (wd < X854.wdMin) return { ok: false, reason: "wd-low" };
  if (wd > X854.wdMax) return { ok: false, reason: "wd-high" };
  const raw = rating / (1.05 * wd + 0.61);
  const inches = Math.max(X854.hMinIn, Math.ceil(raw * 16 - 1e-9) / 16);
  if (inches > X854.hMaxIn) return { ok: false, reason: "too-thick" };
  return {
    ok: true,
    inches,
    mm: Math.ceil(inches * 25.4),
    fraction: fraction16(inches),
  };
}

/**
 * Common column sections, nominal dimensions as published in the section
 * tables (BS 4-1 universal columns, EN 10365 HE). Shown as a starting point;
 * the visitor can type their own section.
 */
export const COLUMN_PRESETS: {
  name: string;
  mass: number;
  d: number;
  b: number;
  tw: number;
  tf: number;
}[] = [
  { name: "UC 152x152x23", mass: 23, d: 152.4, b: 152.2, tw: 5.8, tf: 6.8 },
  { name: "UC 203x203x46", mass: 46.1, d: 203.2, b: 203.6, tw: 7.2, tf: 11 },
  { name: "UC 254x254x73", mass: 73.1, d: 254.1, b: 254.6, tw: 8.6, tf: 14.2 },
  { name: "UC 305x305x97", mass: 96.9, d: 307.9, b: 305.3, tw: 9.9, tf: 15.4 },
  { name: "HEA 200", mass: 42.3, d: 190, b: 200, tw: 6.5, tf: 10 },
  { name: "HEB 200", mass: 61.3, d: 200, b: 200, tw: 9, tf: 15 },
  { name: "HEB 300", mass: 117, d: 300, b: 300, tw: 11, tf: 19 },
];
