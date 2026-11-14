"use client";

import NumberFlow from "@number-flow/react";
import { useId, useMemo, useState } from "react";

import { AddToQuote } from "@/components/quote/add-to-quote";
import { whatsappLink } from "@/config/site";
import type { QuoteAdd } from "@/lib/quote";
import {
  calculate,
  formatQuantity,
  formatRange,
  type CoverageInput,
  type CoverageModel,
} from "@/lib/coverage";
import { cn } from "@/lib/utils";

/**
 * The coverage calculator - one instrument, driven by the product's own
 * consumption model. All arithmetic lives in src/lib/coverage.ts; this
 * file only collects inputs and shows the result.
 *
 * It is content-free on purpose: the manufacturer's figures are printed as
 * plain text on the page beside it (server-rendered), so nothing a crawler
 * or a no-JS visitor needs lives in here.
 */

const UNIT: Record<CoverageModel["unit"], string> = {
  kg: "kg",
  litres: "litres",
  m: "m",
  m2: "m²",
  ml: "ml",
};

// 16px inputs: anything smaller makes iOS Safari zoom the page on focus.
const inputClass =
  "border-deep bg-background w-full rounded-none border-b py-2.5 text-base tabular-nums outline-none focus:border-b-2";

function NumberField({
  label,
  suffix,
  value,
  onChange,
  step = "any",
  min = 0,
}: {
  label: string;
  suffix: string;
  value: number;
  onChange: (value: number) => void;
  step?: number | "any";
  min?: number;
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="label-sh text-muted leading-relaxed">
        {label}
      </label>
      <div className="flex items-baseline gap-2">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          step={step}
          value={Number.isFinite(value) ? value : ""}
          onChange={(event) => onChange(event.target.valueAsNumber)}
          className={inputClass}
        />
        <span className="spec-sh text-muted shrink-0">{suffix}</span>
      </div>
    </div>
  );
}

function Choice({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string;
  options: string[];
  value: number;
  onChange: (index: number) => void;
}) {
  if (options.length < 2) return null;
  return (
    <fieldset>
      <legend className="label-sh text-muted leading-relaxed">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option, index) => (
          <button
            key={option}
            type="button"
            aria-pressed={index === value}
            onClick={() => onChange(index)}
            className="chip-sh border-deep min-h-11 rounded-full border px-4 text-left text-sm"
          >
            {option}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function CoverageCalculator({
  product,
  model,
  quote,
}: {
  /** Product name, used in the enquiry message. */
  product: string;
  model: CoverageModel;
  /** The product's quote-list identity: adds the counted packs in one press. */
  quote?: QuoteAdd;
}) {
  const [input, setInput] = useState<CoverageInput>(() => ({
    area: 20,
    rate: 0,
    thickness: model.kind === "area-thickness" ? model.thickness.initial : 10,
    coats: model.kind === "area-coats" ? model.coats.initial : 1,
    tileLength: 600,
    tileWidth: 600,
    tileThickness: 10,
    jointWidth: model.kind === "joint" ? 10 : 3,
    jointDepth: 10,
    length: 30,
    volume: model.kind === "cavity" ? 1 : 0,
    cement: 350,
    concrete: 10,
    pack: 0,
    wastage: 10,
  }));
  // The "volume" model is filled from an area and a depth (1 m2 x 1 mm = 1 l).
  const [depth, setDepth] = useState(50);
  const set = (patch: Partial<CoverageInput>) =>
    setInput((current) => ({ ...current, ...patch }));

  const effective = useMemo<CoverageInput>(
    () =>
      model.kind === "volume"
        ? { ...input, volume: (input.area || 0) * (depth || 0) }
        : input,
    [model.kind, input, depth],
  );
  const result = useMemo(() => calculate(model, effective), [model, effective]);

  const unit = UNIT[model.unit];
  const rates = "rates" in model ? model.rates : [];
  const usesArea = [
    "area",
    "area-thickness",
    "area-coats",
    "grout",
    "area-per-unit",
    "volume",
    "sheet",
  ].includes(model.kind);
  const packWord = result.pack?.label;
  const packs = formatRange(result.packs.min, result.packs.max);
  const quantity = formatRange(result.withWastage.min, result.withWastage.max);
  const hasResult = result.max > 0;

  const summary = hasResult
    ? `${product}: about ${quantity} ${unit}${packWord ? ` (${packs} x ${packWord})` : ""}, including ${input.wastage || 0}% wastage`
    : product;

  return (
    <div
      translate="no"
      className="notranslate border-deep bg-background grid rounded-lg border lg:grid-cols-[1.618fr_1fr]"
    >
      {/* ---- Inputs ----------------------------------------------------- */}
      <form
        className="grid content-start gap-7 p-6 sm:p-9"
        onSubmit={(event) => event.preventDefault()}
        aria-label={`${product} coverage calculator`}
      >
        {usesArea && (
          <NumberField
            label={model.kind === "volume" ? "Area to fill" : "Area"}
            suffix="m²"
            value={input.area ?? 0}
            onChange={(area) => set({ area })}
          />
        )}

        {model.kind === "volume" && (
          <NumberField
            label="Depth"
            suffix="mm"
            value={depth}
            onChange={setDepth}
          />
        )}

        {model.kind === "area-thickness" && (
          <div>
            <NumberField
              label="Thickness"
              suffix="mm"
              value={input.thickness ?? 0}
              step={model.thickness.step}
              onChange={(thickness) => set({ thickness })}
            />
            <input
              type="range"
              aria-label="Thickness in millimetres"
              min={model.thickness.min}
              max={model.thickness.max}
              step={model.thickness.step}
              value={input.thickness ?? model.thickness.initial}
              onChange={(event) =>
                set({ thickness: event.target.valueAsNumber })
              }
              className="accent-deep mt-3 h-11 w-full"
            />
            {model.thickness.stated && (
              <p className="spec-sh text-muted">
                Data sheet: {model.thickness.stated}
              </p>
            )}
          </div>
        )}

        {model.kind === "area-coats" && (
          <NumberField
            label="Coats"
            suffix="coats"
            value={input.coats ?? 1}
            step={1}
            min={model.coats.min}
            onChange={(coats) => set({ coats })}
          />
        )}

        {model.kind === "grout" && (
          <div className="grid grid-cols-2 gap-x-6 gap-y-7">
            <NumberField
              label="Tile length"
              suffix="mm"
              value={input.tileLength ?? 0}
              onChange={(tileLength) => set({ tileLength })}
            />
            <NumberField
              label="Tile width"
              suffix="mm"
              value={input.tileWidth ?? 0}
              onChange={(tileWidth) => set({ tileWidth })}
            />
            <NumberField
              label="Tile thickness"
              suffix="mm"
              value={input.tileThickness ?? 0}
              onChange={(tileThickness) => set({ tileThickness })}
            />
            <NumberField
              label="Joint width"
              suffix="mm"
              value={input.jointWidth ?? 0}
              onChange={(jointWidth) => set({ jointWidth })}
            />
          </div>
        )}

        {model.kind === "joint" && (
          <div className="grid grid-cols-2 gap-x-6 gap-y-7">
            <NumberField
              label="Joint width"
              suffix="mm"
              value={input.jointWidth ?? 0}
              onChange={(jointWidth) => set({ jointWidth })}
            />
            <NumberField
              label="Joint depth"
              suffix="mm"
              value={input.jointDepth ?? 0}
              onChange={(jointDepth) => set({ jointDepth })}
            />
          </div>
        )}

        {(model.kind === "joint" ||
          model.kind === "length" ||
          model.kind === "bar") && (
          <NumberField
            label={model.kind === "bar" ? "Total bar length" : "Length"}
            suffix="m"
            value={input.length ?? 0}
            onChange={(length) => set({ length })}
          />
        )}

        {model.kind === "cavity" && (
          <NumberField
            label="Cavity volume"
            suffix="litres"
            value={input.volume ?? 0}
            onChange={(volume) => set({ volume })}
          />
        )}

        {model.kind === "dosage" && (
          <NumberField
            label="Cementitious material in the mix"
            suffix="kg"
            value={input.cement ?? 0}
            onChange={(cement) => set({ cement })}
          />
        )}

        {model.kind === "per-m3" && (
          <NumberField
            label="Concrete volume"
            suffix="m³"
            value={input.concrete ?? 0}
            onChange={(concrete) => set({ concrete })}
          />
        )}

        <Choice
          legend="Application"
          options={rates.map((rate) => rate.label)}
          value={input.rate ?? 0}
          onChange={(rate) => set({ rate })}
        />

        <Choice
          legend="Pack"
          options={model.packs.map((pack) => pack.label)}
          value={input.pack ?? 0}
          onChange={(pack) => set({ pack })}
        />

        <div>
          <NumberField
            label="Wastage allowance"
            suffix="%"
            value={input.wastage ?? 0}
            step={1}
            onChange={(wastage) => set({ wastage })}
          />
          <input
            type="range"
            aria-label="Wastage allowance in percent"
            min={0}
            max={30}
            step={1}
            value={Math.min(30, Math.max(0, input.wastage || 0))}
            onChange={(event) => set({ wastage: event.target.valueAsNumber })}
            className="accent-deep mt-3 h-11 w-full"
          />
        </div>
      </form>

      {/* ---- Result ------------------------------------------------------ */}
      <div
        className="bg-surface border-deep flex flex-col justify-between gap-8 rounded-b-lg border-t p-6 sm:p-9 lg:rounded-r-lg lg:rounded-bl-none lg:border-t-0 lg:border-l"
        aria-live="polite"
      >
        <div>
          <p className="label-sh text-muted">You need</p>
          <p className="font-display mt-4 text-[clamp(2.52rem,10.08vw,3.96rem)] leading-none tracking-tight">
            {!packWord ? (
              quantity
            ) : result.packs.min === result.packs.max ? (
              <NumberFlow
                value={result.packs.max}
                format={{ useGrouping: true }}
              />
            ) : (
              packs
            )}
          </p>
          <p className="mt-3 text-lg leading-snug">
            {packWord ? `x ${packWord}` : `${unit} of mixed product`}
          </p>
        </div>

        <dl className="border-deep space-y-3 border-t pt-5">
          <div className="flex items-baseline justify-between gap-4">
            <dt className="text-muted text-sm">Data sheet quantity</dt>
            <dd className="spec-sh text-right">
              {formatRange(result.min, result.max)} {unit}
            </dd>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <dt className="text-muted text-sm">
              With {input.wastage || 0}% wastage
            </dt>
            <dd className="spec-sh text-right">
              {quantity} {unit}
            </dd>
          </div>
          {result.perSquareMetre !== undefined && (
            <div className="flex items-baseline justify-between gap-4">
              <dt className="text-muted text-sm">Per square metre</dt>
              <dd className="spec-sh text-right">
                {formatQuantity(result.perSquareMetre)} kg/m²
              </dd>
            </div>
          )}
        </dl>

        <div className="grid gap-3">
          {quote && packWord && hasResult && (
            <AddToQuote
              key={`${result.packs.max}:${packWord}`}
              variant="block"
              item={{
                ...quote,
                pack: packWord,
                qty: result.packs.max,
              }}
              label={`Add ${result.packs.max} x ${packWord} to quote list`}
            />
          )}
          <a
            href={whatsappLink(`a quotation. ${summary}`)}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!hasResult}
            className={cn(
              "border-deep chip-sh flex min-h-12 items-center justify-center rounded-full border px-6 text-center text-sm leading-snug",
              !hasResult && "pointer-events-none opacity-40",
            )}
          >
            Or send just this to WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
