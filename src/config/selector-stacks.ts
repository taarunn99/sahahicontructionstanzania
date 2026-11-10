import type { StackLayer } from "@/components/three-d/layer-stack";

/**
 * THE 3D BUILD-UP beside the concrete repair and tile selectors (owner,
 * 2026-11-10): one labelled layer model per situation, top layer first. A
 * diagram, not to scale and not a method statement. A product is named on a
 * layer only when the same situation lists it (src/config/repair-selector.ts,
 * src/config/tile-selector.ts), where its own data sheet line is quoted;
 * scripts/verify-waterproofing-selector.mjs checks that every product named
 * here is listed for that situation.
 */

const CONCRETE = "#a9adab";
const OLD_CONCRETE = "#7d8284";
const STEEL = "#59636a";
const MORTAR = "#c9c3b6";
const BLUE = "#0078a8";
const GREEN = "#0f7d1a";
const YELLOW = "#fdf70b";
const TILE = "#f3f1ea";
const GROUT = "#5f6a70";

const substrate = (label: string): StackLayer => ({
  label,
  color: OLD_CONCRETE,
  height: 0.42,
  pattern: "concrete",
});

export const repairStacks: Record<string, StackLayer[]> = {
  spalling: [
    { label: "Repair mortar: Mapegrout T60", color: MORTAR, height: 0.3, pattern: "sand" },
    { label: "Steel protection: Mapefer 1K", color: BLUE, height: 0.06 },
    { label: "Cleaned reinforcing steel", color: STEEL, height: 0.1, opacity: 0.6, pattern: "rebar" },
    substrate("Sound concrete"),
  ],
  structure: [
    { label: "Plate bonded with Adesilex PG2 TG", color: STEEL, height: 0.08 },
    { label: "Jacket: Mapegrout ME05", color: MORTAR, height: 0.28, pattern: "sand" },
    { label: "Cracks injected: Epojet LV", color: YELLOW, height: 0.06 },
    substrate("Beam, column or slab"),
  ],
  cracks: [
    { label: "Injectors sealed: Adesilex PG2 TG", color: GREEN, height: 0.06 },
    { label: "Crack filled: Epojet LV or Eporip", color: YELLOW, height: 0.08 },
    substrate("Cracked concrete"),
  ],
  "new-to-old": [
    { label: "New concrete or screed", color: CONCRETE, height: 0.34, pattern: "concrete" },
    { label: "Bond: Eporip, Planicrete SP or X-Tech SBR Bond", color: BLUE, height: 0.07 },
    substrate("Hardened concrete"),
  ],
  floors: [
    { label: "Levelling: Ultraplan Eco 20 or Ultraplan Contract", color: "#dcd8cf", height: 0.14, pattern: "sand" },
    { label: "Primer: Primer G", color: GREEN, height: 0.04, opacity: 0.7 },
    { label: "Cracks sealed: Eporip", color: YELLOW, height: 0.05 },
    substrate("Old floor or screed"),
  ],
  anchoring: [
    { label: "Baseplate", color: STEEL, height: 0.1 },
    { label: "Grout under it: Mapegrout ME05", color: MORTAR, height: 0.14, pattern: "sand" },
    { label: "Anchors set in Mapefix EP 50", color: YELLOW, height: 0.06 },
    substrate("Concrete"),
  ],
  utilities: [
    { label: "Repair: Mapegrout T60 or Triblock P", color: MORTAR, height: 0.24, pattern: "sand" },
    { label: "Steel protection: Mapefer 1K", color: BLUE, height: 0.06 },
    substrate("Manhole, drain or channel wall"),
  ],
  "new-concrete": [
    { label: "Concrete with Mapefibre NS 12 and Idrocrete KR 1000", color: CONCRETE, height: 0.42, pattern: "concrete" },
    { label: "Reinforcing steel", color: STEEL, height: 0.1, opacity: 0.6, pattern: "rebar" },
    { label: "Blinding or formwork", color: "#b8a98f", height: 0.12, pattern: "sand" },
  ],
};

const tile = (label: string, color = TILE): StackLayer => ({
  label,
  color,
  height: 0.12,
});

export const tileStacks: Record<string, StackLayer[]> = {
  ceramic: [
    { label: "Grout: Keracolor FF", color: GROUT, height: 0.03 },
    tile("Ceramic tile"),
    { label: "Adhesive: Mapeset, Kerabond T or Adesilex P7", color: "#d9d6cf", height: 0.07, pattern: "sand" },
    substrate("Render, block or cured screed"),
  ],
  porcelain: [
    { label: "Grout: Keracolor FF", color: GROUT, height: 0.03 },
    tile("Porcelain or large tile", "#e9e4da"),
    { label: "Adhesive: Keraflex Maxi S1", color: "#cfd2d4", height: 0.08, pattern: "sand" },
    substrate("Floor or wall"),
  ],
  outdoor: [
    { label: "Grout: Keracolor FF", color: GROUT, height: 0.03 },
    tile("Outdoor tile", "#c98d6a"),
    { label: "Adhesive: Keraflex Maxi S1 or Kerabond T", color: "#cfd2d4", height: 0.08, pattern: "sand" },
    substrate("Terrace or façade"),
  ],
  "tile-on-tile": [
    tile("New tile"),
    { label: "Adhesive: Adesilex P7 or Keraflex Maxi S1", color: "#d9d6cf", height: 0.07, pattern: "sand" },
    { label: "Levelling where needed: Ultraplan Eco 20", color: "#dcd8cf", height: 0.06, pattern: "sand" },
    tile("Old tiles, sound and clean", "#b9c4c9"),
    substrate("Existing floor"),
  ],
  pools: [
    { label: "Grout: Kerapoxy or Keracolor FF", color: GROUT, height: 0.03 },
    tile("Pool mosaic", "#7fb8d4"),
    { label: "Adhesive: Keraflex Maxi S1", color: "#cfd2d4", height: 0.07, pattern: "sand" },
    { label: "Waterproofing: see the waterproofing selector", color: BLUE, height: 0.05 },
    substrate("Pool shell"),
  ],
  hygiene: [
    { label: "Stain protection: UltraCare Stain Protector W Plus", color: GREEN, height: 0.03, opacity: 0.5 },
    { label: "Epoxy grout: Kerapoxy", color: GROUT, height: 0.04 },
    tile("Tile"),
    { label: "Tile adhesive", color: "#d9d6cf", height: 0.07, pattern: "sand" },
    substrate("Floor slab or wall"),
  ],
  stone: [
    { label: "Protection: UltraCare Stain Protector W Plus", color: GREEN, height: 0.03, opacity: 0.5 },
    tile("Marble or stone", "#e6e1d8"),
    { label: "Adhesive: Keraflex Maxi S1 or Kerapoxy", color: "#cfd2d4", height: 0.08, pattern: "sand" },
    substrate("Floor, wall, step or sill"),
  ],
  substrates: [
    tile("Tile"),
    { label: "Adhesive: Keraflex Maxi S1 or Adesilex P7", color: "#d9d6cf", height: 0.07, pattern: "sand" },
    { label: "On gypsum, primer first: Primer G", color: GREEN, height: 0.04, opacity: 0.7 },
    substrate("Gypsum, block or concrete wall"),
  ],
  care: [
    { label: "Cleaning: UltraCare Multicleaner or UltraCare HD Cleaner", color: BLUE, height: 0.03, opacity: 0.5 },
    { label: "Protection: UltraCare Stain Protector W Plus", color: GREEN, height: 0.03, opacity: 0.5 },
    tile("Tiles and grout"),
    substrate("Floor"),
  ],
};
