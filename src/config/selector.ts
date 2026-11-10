/**
 * Shared shape of the solution selectors (waterproofing, concrete repair,
 * tile installation): pick a situation, see the products made for it.
 *
 * FACT LAW: a product is listed for a situation only when its own data sheet
 * says so. `quote` is that line, verbatim from the product's `whereToUse` (or
 * `notFor`, for the cautions) in src/content/<brand>/<slug>.json.
 * scripts/verify-waterproofing-selector.mjs checks every selector file in
 * SELECTOR_FILES and fails the build on any drift. The order is not a ranking.
 * One product appears at most once per list (it is keyed by its page).
 */

export type SelectorBrand = "mapei" | "oriental-yuhong" | "x-calibur";

export type SelectorPick = {
  brand: SelectorBrand;
  slug: string;
  quote: string;
};

export type SelectorCaution = SelectorPick & { note: string };

export type SelectorPlace = {
  slug: string;
  label: string;
  /** One line on the situation. Plain building sense, no product claim. */
  problem: string;
  /** The main products for it. */
  main: SelectorPick[];
  /** What goes with them: primers, joints, grout, care. */
  details: SelectorPick[];
  /** Data sheet lines that rule a product out here. */
  cautions?: SelectorCaution[];
};
