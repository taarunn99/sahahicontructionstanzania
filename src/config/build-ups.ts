import type { StackDecor, StackLayer } from "@/components/three-d/layer-stack";

/**
 * Build-ups for the 3D layer models on the X-Calibur and CMCI pages. Top
 * layer first. Every note is from the product's own data sheet in
 * public/tds/; heights are exaggerated so thin coats can be seen. The
 * colours are material colours for the model, not UI colours (allowlisted in
 * scripts/audit-copy.mjs).
 */

const CONCRETE = "#b9b5ac";

/** EpoxyFloor SL over X-Prime GP or GP2 on concrete. */
export function epoxyFloorStack(primer: "X-Prime GP" | "X-Prime GP2") {
  return [
    {
      label: "X-Tech EpoxyFloor SL1",
      color: "#cbd0cc",
      height: 0.22,
      decor: true,
      note: "Self smoothing epoxy topping, 1 to 1.5 mm thick. 17 m² per 17 litre pack at 1 mm.",
    },
    {
      label: primer,
      color: "#d8a541",
      opacity: 0.85,
      height: 0.07,
      note: "One coat at 100 to 200 microns wet film: 10 m² per litre at 100 microns, 5 m² per litre at 200. Recoat after 6 to 24 hours at 25C.",
    },
    {
      label: "Concrete substrate",
      color: CONCRETE,
      height: 0.55,
      pattern: "concrete",
      note: "Free of dust, laitance and other surface deposits before priming.",
    },
  ] satisfies StackLayer[];
}

/** The ten colours EpoxyFloor SL is listed in. On-screen preview only. */
const ral: [string, string, string][] = [
  ["RAL 7035", "Light grey", "#cbd0cc"],
  ["RAL 7042", "Traffic grey A", "#8f9695"],
  ["RAL 7043", "Traffic grey B", "#4e5451"],
  ["RAL 7001", "Silver grey", "#8a9597"],
  ["RAL 9001", "Cream", "#e9e0d2"],
  ["RAL 1002", "Sand yellow", "#d2aa6d"],
  ["RAL 1017", "Saffron yellow", "#f6a950"],
  ["RAL 3002", "Carmine red", "#9b2423"],
  ["RAL 6017", "May green", "#4c9141"],
  ["RAL 5017", "Traffic blue", "#005b8c"],
];

const swatch = (hex: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><rect width="64" height="64" fill="${hex}"/></svg>`,
  )}`;

export const epoxyColours: StackDecor[] = ral.map(([code, name, hex]) => ({
  code,
  label: name,
  src: swatch(hex),
}));

/** The eight colours the X-Tech AntiStatic SLE sheet lists, in its order. */
const ANTISTATIC_RAL = [
  "RAL 7035",
  "RAL 7042",
  "RAL 7043",
  "RAL 7001",
  "RAL 1017",
  "RAL 6017",
  "RAL 3002",
  "RAL 5017",
];
export const antistaticColours: StackDecor[] = ANTISTATIC_RAL.map((code) => {
  const found = epoxyColours.find((item) => item.code === code);
  if (!found) throw new Error(`build-ups: no swatch for ${code}`);
  return found;
});

/** The hex behind a swatch, for the colour chips on the antistatic page. */
export const antistaticHex = (code: string) =>
  ral.find(([ralCode]) => ralCode === code)?.[2] ?? CONCRETE;

/**
 * X-Tech AntiStatic SLE over X-Prime SF or MT100 on concrete, with the
 * copper tape grid the method statement draws when one is specified. Notes
 * from the data sheet and the method statement (v5, November 2021).
 */
export function antistaticStack(primer: "X-Prime SF" | "X-Prime MT100") {
  return [
    {
      label: "X-Tech AntiStatic SLE Top Coat",
      color: "#cbd0cc",
      height: 0.2,
      decor: true,
      note: "Self smoothing solvent free epoxy at 1.5 to 2 mm: 1.5 litres per m² at 1.5 mm, spread with a 4 mm notched rake and a pin leveller, spiked roller within 20 minutes.",
    },
    {
      label: "X-Tech AntiStatic SLE Base Coat, conductive or dissipative grade",
      color: "#2b2b2b",
      height: 0.08,
      note: "Water dispersed epoxy rolled at 150 microns wet film, 6.6 m² per litre. Checked to earth before the top coat: 1 x 10^5 ohms or less (CG), 1 x 10^6 to 1 x 10^8 ohms (DG).",
    },
    {
      label: "Copper tape grid, when specified",
      color: "#f4f1e8",
      opacity: 0.9,
      height: 0.04,
      pattern: "grid",
      note: "Self adhesive conductive copper tape 10 to 12 mm wide, at least 0.7 mm thick, at maximum 3 m centres and 150 mm from the wall, over the primed surface. Optional, only required if specified.",
    },
    {
      label: primer,
      color: "#d8a541",
      opacity: 0.85,
      height: 0.07,
      note:
        primer === "X-Prime SF"
          ? "10 m² per litre at 100 microns wet film (100 to 125 microns), on a slab whose MVER is under 3 lbs/1000ft²/24h. Base coat within 24 hours."
          : "5 m² per litre at 200 microns wet film: one coat at 165 microns when the MVER is 3 to 5, two coats at 200 when it is 5 to 12 lbs/1000ft²/24h.",
    },
    {
      label: "Concrete substrate",
      color: CONCRETE,
      height: 0.55,
      pattern: "concrete",
      note: "Captive blasted to an ICRI CSP 4 or 5 profile, bug holes filled, moisture tested to ASTM F2170 and, above 80% RH, ASTM F1869.",
    },
  ] satisfies StackLayer[];
}

export const flexprufStack: StackLayer[] = [
  {
    label: "X-Shield FlexPruf, second coat",
    color: "#9fa6ab",
    height: 0.14,
    note: "Subsequent coats at 0.5 to 1.0 L/m², once the coat beneath has dried. Normal applications require 2 coats.",
  },
  {
    label: "X-Shield Reinforcing Fabric",
    color: "#f4f1e8",
    opacity: 0.8,
    height: 0.04,
    note: "Where the substrate is liable to move, and at corners and penetrations.",
  },
  {
    label: "X-Shield FlexPruf, first coat",
    color: "#b7bec2",
    height: 0.16,
    note: "1 L (1.7 kg) per m². Brush, roller or spray. Crack bridging over 2 mm.",
  },
  {
    label: "Concrete or masonry",
    color: CONCRETE,
    height: 0.55,
    pattern: "concrete",
    note: "Primed using water to a saturated surface dry (SSD) surface.",
  },
];

export const sbrBondStack: StackLayer[] = [
  {
    label: "Repair mortar or screed",
    color: "#a9a59b",
    height: 0.4,
    pattern: "sand",
    note: "Placed while the bond coat is still tacky.",
  },
  {
    label: "X-Tech SBR Bond",
    color: "#f3f1ea",
    opacity: 0.9,
    height: 0.06,
    note: "About 8 m² per litre by brush on the pre-dampened (SSD) surface. Do not allow the bond coat to dry out.",
  },
  {
    label: "Concrete substrate",
    color: CONCRETE,
    height: 0.5,
    pattern: "concrete",
    note: "Saw cut around the edge of the repair to a minimum depth of 6 mm.",
  },
];

/** The fireproofing system on steel, with the two accessories. */
export const fireSystemStack: StackLayer[] = [
  {
    label: "Aquakote topcoat",
    color: "#ecebe6",
    height: 0.06,
    note: "0.20 litres per m² per coat over a troweled surface. Overcoating time 4 hours. White, grey or beige.",
  },
  {
    label: "Sprayed fireproofing",
    color: "#c4c0b5",
    height: 0.5,
    pattern: "sand",
    note: "Monokote or Avikote, at the thickness the UL design gives for the rating.",
  },
  {
    label: "FR Bonding Agent",
    color: "#e2d9a8",
    opacity: 0.85,
    height: 0.05,
    note: "Over primed or painted structural steel. 500 sq. ft. per gallon.",
  },
  {
    label: "Structural steel, primed or painted",
    color: "#7d878d",
    height: 0.3,
    note: "Columns, beams and joists.",
  },
];
