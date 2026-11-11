/**
 * Joint design and quantities for X-Seal PS800, from X-Calibur's data sheet
 * (public/tds/x-calibur/x-seal-ps800.pdf) and the X-Seal Universal Primer sheet.
 * Every rule here is printed on those sheets: the 25% movement accommodation
 * for butt joints, 5 to 60 mm wide and 10 to 25 mm deep, the 2:1 width to
 * depth ratio, the minimum depths, and the guide to quantities, which is
 * width x depth (25 x 20 mm = 0.50 litres per metre run).
 */

export const JOINT = {
  movement: 25, // % of the joint width, butt joints (BS 6093)
  lapMovement: 50,
  width: { min: 5, max: 60 },
  depth: { min: 10, max: 25 },
  ratio: 2, // width : depth
  packs: {
    pouring: { litres: 4, label: "4 litre pouring grade pack" },
    gun: { litres: 2.5, label: "2.5 litre gun grade pack" },
  },
  primer: { m2PerLitre: 15, canLitres: 1 },
  primerQuote:
    "1 Liter of X-Seal Universal Primer is sufficient for approx. 225lm of 10mm joint.",
} as const;

export const SUBSTRATES = [
  { key: "impervious", label: "Impervious substrate", minDepth: 5 },
  { key: "porous", label: "Porous substrate", minDepth: 10 },
  { key: "traffic", label: "Traffic or hydrostatic joint", minDepth: 20 },
] as const;

export type Substrate = (typeof SUBSTRATES)[number]["key"];

/** The depth the sheet's rules give for a width: half the width, never under
 * the substrate's minimum, inside the 10 to 25 mm range. */
export function designDepth(width: number, substrate: Substrate) {
  const min = SUBSTRATES.find((s) => s.key === substrate)?.minDepth ?? 10;
  return Math.min(
    JOINT.depth.max,
    Math.max(JOINT.depth.min, min, Math.round(width / JOINT.ratio)),
  );
}

export function jointQuantities(
  width: number,
  depth: number,
  metres: number,
  grade: keyof typeof JOINT.packs,
) {
  const perMetre = (width * depth) / 1000; // litres per metre run
  const litres = perMetre * metres;
  const pack = JOINT.packs[grade];
  // Primer on the two joint faces.
  const faceArea = 2 * (depth / 1000) * metres;
  const primerLitres = faceArea / JOINT.primer.m2PerLitre;
  return {
    perMetre,
    litres,
    packs: Math.ceil(litres / pack.litres - 1e-9),
    faceArea,
    primerLitres,
    primerCans: Math.max(1, Math.ceil(primerLitres / JOINT.primer.canLitres)),
  };
}

/** Movement as a share of the joint width; over 25% the sealant is over-strained. */
export const strain = (width: number, movementMm: number) =>
  (Math.abs(movementMm) / width) * 100;
