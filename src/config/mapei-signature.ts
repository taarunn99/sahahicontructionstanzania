import { productHref, products, type Product } from "@/config/catalogue";
import { mapeiCoverage } from "@/config/mapei-coverage";
import type { CoverageModel, Pack } from "@/lib/coverage";

/**
 * Data for the signature element on each Mapei line page
 * (DESIGN-CONCEPT.md section 6). Nothing is typed in here twice: every
 * figure is read from the coverage models (which carry the data sheet
 * sentence they came from) and every description from the catalogue, so an
 * element can never show a number the product page does not.
 *
 * The page (a server component) builds these and passes them as props, so
 * the catalogue itself never ships in a client bundle.
 */

const product = (slug: string): Product => {
  const found = products.find((item) => item.slug === slug);
  if (!found) throw new Error(`mapei-signature: unknown product "${slug}"`);
  return found;
};

const model = <K extends CoverageModel["kind"]>(slug: string, kind: K) => {
  const found = mapeiCoverage[slug];
  if (!found || found.kind !== kind)
    throw new Error(`mapei-signature: "${slug}" is not a "${kind}" model`);
  return found as Extract<CoverageModel, { kind: K }>;
};

export type ProductRef = {
  name: string;
  href: string;
  type: string;
  summary: string;
  classification?: string;
};

const ref = (slug: string): ProductRef => {
  const item = product(slug);
  return {
    name: item.name,
    href: productHref(item),
    type: item.type,
    summary: item.summary,
    classification: item.classification,
  };
};

// ---- Tile adhesives: notch and coverage -------------------------------------

export type NotchData = {
  product: ProductRef;
  pack: Pack;
  /** Smallest tile first. Labels are the data sheet's own wording. */
  options: { label: string; trowel: number; min: number; max: number }[];
};

export function notchData(): NotchData {
  const coverage = model("adesilex-p7", "area");
  const options = coverage.rates
    .map((rate) => {
      const trowel = Number(/trowel n\. (\d)/.exec(rate.label)?.[1]);
      if (!trowel)
        throw new Error(`mapei-signature: no trowel in "${rate.label}"`);
      return {
        label: rate.label.replace(/, trowel n\. \d/, ""),
        trowel,
        min: rate.min,
        max: rate.max,
      };
    })
    .sort((a, b) => a.trowel - b.trowel);
  return { product: ref("adesilex-p7"), pack: coverage.packs[0], options };
}

// ---- Primers and levelling: the pour ----------------------------------------

export type PourData = {
  products: {
    product: ProductRef;
    /** kg/m² per mm of thickness. */
    rate: number;
    pack: Pack;
    thickness: { min: number; max: number; step: number };
  }[];
};

export function pourData(): PourData {
  return {
    products: ["ultraplan-eco-20", "ultraplan-contract"].map((slug) => {
      const coverage = model(slug, "area-thickness");
      return {
        product: ref(slug),
        rate: coverage.rates[0].min,
        pack: coverage.packs[0],
        thickness: {
          min: coverage.thickness.min,
          max: coverage.thickness.max,
          step: coverage.thickness.step,
        },
      };
    }),
  };
}

// ---- Resin flooring: thickness gauge ----------------------------------------

export type GaugeStop = {
  product: ProductRef;
  /** mm. null for the coating, whose data sheet gives no film thickness. */
  thickness: number | null;
  /** How the data sheet words the layer. */
  layer: string;
  /** kg/m² as printed, e.g. "approx. 5.5". */
  consumption: string;
};

export function gaugeData(): GaugeStop[] {
  const fc200 = model("mapefloor-fc-200-me", "area-coats");
  const pu410 = model("mapefloor-pu-410", "area");
  const i300 = model("mapefloor-i-300-sl-me", "area");
  const cpu = model("mapefloor-cpu-plus-mf", "area");
  const coat = fc200.rates[0].min;

  const cpuStop = (mm: number): GaugeStop => {
    const rate = cpu.rates.find((r) => r.label.endsWith(`, ${mm} mm`));
    if (!rate) throw new Error(`mapei-signature: no CPU+/MF rate at ${mm} mm`);
    return {
      product: ref("mapefloor-cpu-plus-mf"),
      thickness: mm,
      layer: `Self-smoothing layer, ${mm} mm`,
      consumption: `approx. ${rate.min}`,
    };
  };

  return [
    {
      product: ref("mapefloor-fc-200-me"),
      thickness: null,
      layer: "Roll coat finish: first coat and finishing coat",
      consumption: `${coat} + ${coat}`,
    },
    {
      product: ref("mapefloor-pu-410"),
      thickness: 1,
      layer: "Protective and wearing layer, approx. 1 mm",
      consumption: pu410.rates[0].min.toFixed(1),
    },
    {
      product: ref("mapefloor-i-300-sl-me"),
      thickness: 2,
      layer: "Smooth self-levelling, average thickness 2 mm",
      consumption: String(i300.rates[0].min),
    },
    cpuStop(3),
    cpuStop(4),
    cpuStop(6),
  ];
}

// ---- Concrete repair: defect map --------------------------------------------

export type Defect = {
  id: "crack" | "joint" | "rebar" | "section" | "anchor";
  label: string;
  /** Position of the marker on the drawing, in percent. */
  at: { x: number; y: number };
  steps: { action: string; product: ProductRef }[];
};

export function defectData(): Defect[] {
  return [
    {
      id: "crack",
      label: "A microcrack",
      at: { x: 30.8, y: 69.4 },
      steps: [{ action: "Inject", product: ref("epojet-lv") }],
    },
    {
      id: "rebar",
      label: "Exposed steel",
      at: { x: 30.8, y: 42.5 },
      steps: [
        { action: "Protect the steel", product: ref("mapefer-1k") },
        { action: "Rebuild the cover", product: ref("mapegrout-t60") },
      ],
    },
    {
      id: "section",
      label: "A section to recast",
      at: { x: 65.2, y: 26 },
      steps: [{ action: "Pour", product: ref("mapegrout-me05") }],
    },
    {
      id: "joint",
      label: "A construction joint",
      at: { x: 69.2, y: 87.5 },
      steps: [{ action: "Bond", product: ref("eporip") }],
    },
    {
      id: "anchor",
      label: "A fixing into concrete",
      at: { x: 77.5, y: 55.6 },
      steps: [{ action: "Anchor", product: ref("mapefix-ep-50") }],
    },
  ];
}

// ---- Waterproofing: the build-up --------------------------------------------

export type BuildUpLayer = {
  label: string;
  /** Drawn thickness, illustrative. */
  t: number;
  tone: "chalk" | "accent" | "surface" | "line";
  mesh?: boolean;
  /** Stocked products of this kind. Empty when none maps with certainty. */
  products: ProductRef[];
};

/** Top layer first, the same order as the house drawing. */
export function buildUpData(): BuildUpLayer[] {
  const ofType = (...types: string[]) =>
    products
      .filter((item) => item.brand === "mapei" && types.includes(item.type))
      .map((item) => ref(item.slug));
  const membranes = ofType("Cementitious membrane", "Liquid membrane");

  return [
    { label: "Tile", t: 0.22, tone: "chalk", products: [] },
    {
      label: "Tile adhesive",
      t: 0.12,
      tone: "surface",
      products: ofType("Tile adhesive"),
    },
    {
      label: "Membrane, second coat",
      t: 0.08,
      tone: "accent",
      products: membranes,
    },
    {
      label: "Reinforcing mesh",
      t: 0.02,
      tone: "line",
      mesh: true,
      products: ofType("Reinforcing mesh"),
    },
    {
      label: "Membrane, first coat",
      t: 0.08,
      tone: "accent",
      products: membranes,
    },
    { label: "Primer", t: 0.04, tone: "chalk", products: [] },
    { label: "Concrete slab", t: 0.6, tone: "chalk", products: [] },
  ];
}
