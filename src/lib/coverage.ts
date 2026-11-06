/**
 * COVERAGE ENGINE - pure arithmetic, no React, no imports.
 *
 * Every number a calculator shows is produced here from two things only:
 *   1. a consumption figure or formula copied from the manufacturer's
 *      technical data sheet (src/config/mapei-coverage.ts carries each one
 *      with the sentence it was copied from), and
 *   2. what the visitor types in.
 *
 * The engine never estimates, never interpolates and never applies a hidden
 * allowance. Wastage is a visible input and is applied once, at the end.
 *
 * It is tested against the consumption tables the manufacturer prints:
 *   node scripts/test-coverage.mjs      (part of `npm run check`)
 */

/** A consumption figure. A single figure has min === max. */
export type Rate = {
  /** What the figure applies to, e.g. "Trowel No. 5" or "By roller". */
  label: string;
  min: number;
  max: number;
};

export type Pack = {
  /** e.g. "25 kg bag", "30 kg kit (A 20 kg + B 10 kg)". */
  label: string;
  /** Contents in the model's unit (kg, litres, metres, m2, ml). */
  size: number;
};

type Base = {
  /** The data sheet sentence(s) the figures come from, verbatim. */
  source: string;
  /** A limit worth showing beside the result. */
  note?: string;
  /** Stocked pack or kit sizes. Empty when the kit weight is not certain:
   *  the calculator then reports the quantity only. */
  packs: Pack[];
};

export type CoverageModel =
  /** quantity = area x rate */
  | (Base & { kind: "area"; unit: "kg" | "litres"; rates: Rate[] })
  /** quantity = area x thickness(mm) x rate-per-mm */
  | (Base & {
      kind: "area-thickness";
      unit: "kg";
      rates: Rate[];
      thickness: {
        min: number;
        max: number;
        initial: number;
        step: number;
        /** The data sheet's own wording on thickness, verbatim, if any. */
        stated?: string;
      };
    })
  /** quantity = area x coats x rate-per-coat */
  | (Base & {
      kind: "area-coats";
      unit: "kg" | "litres";
      rates: Rate[];
      coats: { min: number; max: number; initial: number };
    })
  /** kg/m2 = (A + B) / (A x B) x C x D x factor   (all in mm) */
  | (Base & { kind: "grout"; unit: "kg"; factor: number })
  /** litres of concentrate = area / m2-cleaned-per-litre */
  | (Base & { kind: "area-per-unit"; unit: "litres"; rates: Rate[] })
  /** packs = volume to fill / mixed volume yielded by one pack */
  | (Base & { kind: "volume"; unit: "litres"; litresPerPack: number })
  /** quantity = cavity volume (litres) x kg per litre */
  | (Base & { kind: "cavity"; unit: "kg"; kgPerLitre: number })
  /** quantity = bar length x grams-per-metre for that bar diameter */
  | (Base & { kind: "bar"; unit: "kg"; rates: Rate[] })
  /** rolls = length needed / roll length */
  | (Base & { kind: "length"; unit: "m" })
  /** rolls = area needed / area of one roll */
  | (Base & { kind: "sheet"; unit: "m2" })
  /** ml = joint width(mm) x joint depth(mm) x length(m) */
  | (Base & { kind: "joint"; unit: "ml" })
  /** quantity = cementitious material (kg) x dosage (kg per 100 kg) */
  | (Base & { kind: "dosage"; unit: "kg"; rates: Rate[] })
  /** quantity = concrete volume (m3) x dosage (kg per m3) */
  | (Base & { kind: "per-m3"; unit: "kg"; rates: Rate[] });

export type CoverageKind = CoverageModel["kind"];

/** What the visitor entered. Fields a model does not use are ignored. */
export type CoverageInput = {
  /** m2 */
  area?: number;
  /** index into model.rates */
  rate?: number;
  /** mm */
  thickness?: number;
  coats?: number;
  /** grout: tile length, width, thickness and joint width, all mm */
  tileLength?: number;
  tileWidth?: number;
  tileThickness?: number;
  jointWidth?: number;
  /** joint sealant: mm */
  jointDepth?: number;
  /** linear metres (bars, joints, tapes, waterstops) */
  length?: number;
  /** litres (volume to fill, cavity) */
  volume?: number;
  /** kg of cement / cementitious material */
  cement?: number;
  /** m3 of concrete */
  concrete?: number;
  /** index into model.packs */
  pack?: number;
  /** percent added on top of the theoretical quantity, 0 or more */
  wastage?: number;
};

export type CoverageResult = {
  /** Theoretical quantity from the data sheet figure, in `unit`. */
  min: number;
  max: number;
  /** After the wastage allowance. */
  withWastage: { min: number; max: number };
  /** Whole packs needed for the quantity with wastage. */
  packs: { min: number; max: number };
  /** null when the model carries no pack sizes. */
  pack: Pack | null;
  unit: CoverageModel["unit"];
  /** kg/m2 for the grout formula, for display. */
  perSquareMetre?: number;
};

const positive = (value: number | undefined) =>
  typeof value === "number" && Number.isFinite(value) && value > 0 ? value : 0;

/**
 * Whole packs for a quantity. Binary floating point can turn an exact
 * 4 packs into 4.000000000000001; rounding to 9 decimals first means a
 * true 4.0 never becomes 5.
 */
export function packsFor(quantity: number, packSize: number) {
  if (quantity <= 0 || packSize <= 0) return 0;
  return Math.ceil(Number((quantity / packSize).toFixed(9)));
}

/** Mapei's grout formula: (A + B) / (A x B) x C x D x factor = kg/m2. */
export function groutPerSquareMetre(
  tileLength: number,
  tileWidth: number,
  tileThickness: number,
  jointWidth: number,
  factor: number,
) {
  if (tileLength <= 0 || tileWidth <= 0) return 0;
  return (
    ((tileLength + tileWidth) / (tileLength * tileWidth)) *
    tileThickness *
    jointWidth *
    factor
  );
}

/** Theoretical quantity range for a model and an input, before wastage. */
export function theoretical(
  model: CoverageModel,
  input: CoverageInput,
): { min: number; max: number; perSquareMetre?: number } {
  const area = positive(input.area);
  const rate =
    "rates" in model
      ? (model.rates[input.rate ?? 0] ?? model.rates[0])
      : undefined;

  switch (model.kind) {
    case "area":
      return { min: area * rate!.min, max: area * rate!.max };
    case "area-thickness": {
      const mm = positive(input.thickness);
      return { min: area * mm * rate!.min, max: area * mm * rate!.max };
    }
    case "area-coats": {
      const coats = positive(input.coats);
      return { min: area * coats * rate!.min, max: area * coats * rate!.max };
    }
    case "grout": {
      const perSquareMetre = groutPerSquareMetre(
        positive(input.tileLength),
        positive(input.tileWidth),
        positive(input.tileThickness),
        positive(input.jointWidth),
        model.factor,
      );
      const quantity = area * perSquareMetre;
      return { min: quantity, max: quantity, perSquareMetre };
    }
    case "area-per-unit":
      // The rate is m2 per litre: a bigger rate means LESS product.
      return {
        min: rate!.max > 0 ? area / rate!.max : 0,
        max: rate!.min > 0 ? area / rate!.min : 0,
      };
    case "volume": {
      const litres = positive(input.volume);
      return { min: litres, max: litres };
    }
    case "cavity": {
      const kg = positive(input.volume) * model.kgPerLitre;
      return { min: kg, max: kg };
    }
    case "bar": {
      // rates are grams per metre of bar
      const metres = positive(input.length);
      return {
        min: (metres * rate!.min) / 1000,
        max: (metres * rate!.max) / 1000,
      };
    }
    case "length": {
      const metres = positive(input.length);
      return { min: metres, max: metres };
    }
    case "sheet":
      return { min: area, max: area };
    case "joint": {
      // 1 mm x 1 mm x 1 m = 1 ml
      const ml =
        positive(input.jointWidth) *
        positive(input.jointDepth) *
        positive(input.length);
      return { min: ml, max: ml };
    }
    case "dosage": {
      const cement = positive(input.cement);
      return {
        min: (cement * rate!.min) / 100,
        max: (cement * rate!.max) / 100,
      };
    }
    case "per-m3": {
      const concrete = positive(input.concrete);
      return { min: concrete * rate!.min, max: concrete * rate!.max };
    }
  }
}

export function calculate(
  model: CoverageModel,
  input: CoverageInput,
): CoverageResult {
  const base = theoretical(model, input);
  const wastage = Math.max(0, input.wastage ?? 0);
  const factor = 1 + wastage / 100;
  const withWastage = { min: base.min * factor, max: base.max * factor };
  const pack = model.packs[input.pack ?? 0] ?? model.packs[0] ?? null;
  // For a "volume" model the pack size is the mixed volume one pack yields.
  const packSize =
    model.kind === "volume" ? model.litresPerPack : (pack?.size ?? 0);

  return {
    min: base.min,
    max: base.max,
    withWastage,
    packs: {
      min: packsFor(withWastage.min, packSize),
      max: packsFor(withWastage.max, packSize),
    },
    pack,
    unit: model.unit,
    perSquareMetre: base.perSquareMetre,
  };
}

/** "12.5" / "0.35" / "1,240" - enough digits to be useful, never false precision. */
export function formatQuantity(value: number) {
  if (value === 0) return "0";
  const digits = value >= 100 ? 0 : value >= 10 ? 1 : 2;
  return value.toLocaleString("en-GB", {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits,
  });
}

export function formatRange(min: number, max: number) {
  const a = formatQuantity(min);
  const b = formatQuantity(max);
  return a === b ? a : `${a}-${b}`;
}
