"use client";

import { useState } from "react";

import { AddToQuote } from "@/components/quote/add-to-quote";
import {
  coverage,
  grades,
  moistureBands,
  packs,
  PATH,
  PRODUCT_PATH,
  rates,
  type MoistureBand,
} from "@/config/x-calibur-antistatic";
import { cn } from "@/lib/utils";

/**
 * The system calculator: area in, the primer the moisture test picks, the
 * base coat, the top coat at the chosen thickness, the ground connections
 * and the test readings out, each with the sentence it rests on and an
 * "Add N x pack" into the quote list. Rates are the data sheet's (coverage
 * in src/config/x-calibur-antistatic.ts); the ground and reading counts
 * are the method statement's "typically" figures, for planning only.
 */

const CHIP =
  "inline-flex min-h-11 items-center rounded-full border px-4 text-sm transition-colors";
const on = "bg-deep text-chalk border-deep";
const off = "border-deep/30 hover:border-deep bg-white";

const BRAND = "X-Calibur";

type Line = {
  slug: string;
  name: string;
  litres: number;
  packSize: number;
  packLabel: string;
  /** The quote list's pack wording (the catalogue's for the SLE). */
  quotePack: string;
  href: string;
  external: boolean;
  source: string;
};

const fmt = (n: number) =>
  n >= 100 ? Math.round(n).toLocaleString("en-GB") : n.toFixed(1);

export function AntistaticCalculator() {
  const [areaText, setAreaText] = useState("250");
  const [thickness, setThickness] = useState(rates.topMin);
  const [band, setBand] = useState<MoistureBand>(moistureBands[0]);
  const [grade, setGrade] = useState(grades[0]);
  const [wastageText, setWastageText] = useState("5");

  const area = Number.parseFloat(areaText.replace(",", "."));
  const wastage = Number.parseFloat(wastageText.replace(",", "."));
  const valid = Number.isFinite(area) && area > 0;
  const factor = 1 + (Number.isFinite(wastage) && wastage > 0 ? wastage : 0) / 100;

  const lines: Line[] = [];
  if (valid) {
    if (band.primer && band.perLitre) {
      const litres = ((area * band.coats) / band.perLitre) * factor;
      const slug = band.primer === "X-Prime SF" ? "x-prime-sf" : "x-prime-mt100";
      lines.push({
        slug,
        name: band.primer,
        litres,
        packSize: packs.primer[packs.primer.length - 1],
        packLabel: `${packs.primer[packs.primer.length - 1]} litre packs`,
        quotePack: "15 litres",
        href: `${PATH}#${slug}`,
        external: false,
        source:
          band.primer === "X-Prime SF" ? coverage.primeSf : coverage.primeMt100,
      });
    }
    lines.push({
      slug: "x-tech-antistatic-sle",
      name: `X-Tech AntiStatic SLE Base Coat, ${grade.name.toLowerCase()}`,
      litres: (area / rates.basePerLitre) * factor,
      packSize: packs.base[packs.base.length - 1],
      packLabel: "18 litre packs",
      quotePack: "Base coat 18 litres",
      href: PRODUCT_PATH,
      external: true,
      source: coverage.base,
    });
    lines.push({
      slug: "x-tech-antistatic-sle",
      name: "X-Tech AntiStatic SLE Top Coat",
      litres: area * thickness * rates.topPerMm * factor,
      packSize: packs.top[0],
      packLabel: "17 litre packs",
      quotePack: "Top coat 17 litres",
      href: PRODUCT_PATH,
      external: true,
      source: coverage.top,
    });
  }
  const grounds = valid ? Math.max(1, Math.ceil(area / rates.groundPerM2)) : 0;
  const readings = valid ? Math.max(1, Math.ceil(area / rates.readingPerM2)) : 0;

  return (
    <div
      translate="no"
      className="notranslate grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14"
    >
      <div className="min-w-0">
        <div className="grid grid-cols-2 gap-3">
          <label className="block text-sm">
            <span className="text-muted">Floor area, m²</span>
            <input
              inputMode="decimal"
              value={areaText}
              onChange={(event) => setAreaText(event.target.value)}
              className="border-deep/30 focus:border-deep mt-1 block min-h-11 w-full rounded-lg border bg-white px-3 tabular-nums outline-none"
            />
          </label>
          <label className="block text-sm">
            <span className="text-muted">Wastage, % (your figure)</span>
            <input
              inputMode="decimal"
              value={wastageText}
              onChange={(event) => setWastageText(event.target.value)}
              className="border-deep/30 focus:border-deep mt-1 block min-h-11 w-full rounded-lg border bg-white px-3 tabular-nums outline-none"
            />
          </label>
        </div>

        <fieldset className="mt-7">
          <legend className="label-sh text-muted">
            Top coat thickness: {thickness.toFixed(1)} mm
          </legend>
          <input
            type="range"
            min={rates.topMin}
            max={rates.topMax}
            step={0.1}
            value={thickness}
            onChange={(event) => setThickness(event.target.valueAsNumber)}
            aria-label="Top coat thickness in millimetres"
            className="accent-brand mt-2 h-11 w-full"
          />
          <p className="text-muted mt-1 text-xs leading-relaxed">
            The sheet: application thickness {coverage.thickness}; {coverage.top}
          </p>
        </fieldset>

        <fieldset className="mt-7">
          <legend className="label-sh text-muted">
            Moisture test (ASTM F2170, then ASTM F1869 in lbs/1000ft²/24h)
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {moistureBands.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={item.id === band.id}
                onClick={() => setBand(item)}
                className={cn(CHIP, item.id === band.id ? on : off)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <p className="text-muted mt-3 text-sm leading-relaxed">{band.text}</p>
        </fieldset>

        <fieldset className="mt-7">
          <legend className="label-sh text-muted">Grade of the base coat</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {grades.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={item.id === grade.id}
                onClick={() => setGrade(item)}
                className={cn(CHIP, item.id === grade.id ? on : off)}
              >
                {item.name}: {item.range}
              </button>
            ))}
          </div>
          <p className="text-muted mt-3 text-xs leading-relaxed">
            The same quantities either way; the ESD team specifies the grade.
          </p>
        </fieldset>
      </div>

      <div className="min-w-0" role="status" aria-live="polite">
        {!valid ? (
          <p className="bg-deep text-chalk rounded-2xl p-6">
            Enter the floor area in square metres.
          </p>
        ) : (
          <ol className="border-deep border-t">
            {lines.map((line) => {
              const count = Math.ceil(line.litres / line.packSize);
              return (
                <li
                  key={line.name}
                  className="border-deep/15 grid gap-x-6 gap-y-3 border-b py-5 sm:grid-cols-[1fr_auto]"
                >
                  <div className="min-w-0">
                    <p className="font-display text-xl leading-tight">
                      {line.name}
                    </p>
                    <p className="mt-1 tabular-nums">
                      about {fmt(line.litres)} litres:{" "}
                      <span className="font-semibold">
                        {count} x {line.packLabel.replace(" packs", "")}
                      </span>
                    </p>
                    <p className="text-muted mt-1 text-xs leading-relaxed">
                      {line.source}
                    </p>
                  </div>
                  <div className="sm:pt-1">
                    <AddToQuote
                      variant="chip"
                      label={`Add ${count} x pack`}
                      item={{
                        id: `x-calibur:${line.slug}`,
                        name: line.name,
                        brand: BRAND,
                        href: line.href,
                        packs: [line.quotePack],
                        pack: line.quotePack,
                        qty: count,
                      }}
                    />
                  </div>
                </li>
              );
            })}
            {!band.primer && (
              <li className="border-deep/15 border-b py-5">
                <p className="font-display text-xl leading-tight">Primer</p>
                <p className="text-muted mt-1 text-sm leading-relaxed">
                  {band.text}
                </p>
              </li>
            )}
            <li className="border-deep/15 grid gap-x-6 gap-y-3 border-b py-5 sm:grid-cols-[1fr_auto]">
              <div>
                <p className="font-display text-xl leading-tight">
                  Ground connections, typically
                </p>
                <p className="mt-1 tabular-nums">
                  <span className="font-semibold">{grounds}</span> copper strip
                  {grounds === 1 ? "" : "s"} to a tested ground point
                </p>
                <p className="text-muted mt-1 text-xs leading-relaxed">
                  One connection for a 100 m² of floor, typically one every 20
                  m around the perimeter; the spacing is decided with the ESD
                  team (method statement 8.1).
                </p>
              </div>
              <div className="sm:pt-1">
                <AddToQuote
                  variant="chip"
                  label="Add copper tape"
                  item={{
                    id: "x-calibur:copper-tape",
                    name: "Self adhesive conductive copper tape",
                    brand: BRAND,
                    href: `${PATH}#copper-tape`,
                    packs: [],
                  }}
                />
              </div>
            </li>
            <li className="border-deep/15 border-b py-5">
              <p className="font-display text-xl leading-tight">
                Resistance readings after 2 days
              </p>
              <p className="mt-1 tabular-nums">
                <span className="font-semibold">{readings}</span> reading
                {readings === 1 ? "" : "s"} to ASTM F150, recorded
              </p>
              <p className="text-muted mt-1 text-xs leading-relaxed">
                It is recommended that 1 reading is taken at least every 50 m²
                (method statement 12.0).
              </p>
            </li>
          </ol>
        )}
        <p className="text-muted mt-5 text-sm leading-relaxed">
          Theoretical figures from the data sheet, for planning and BOQs. The
          primer, base coat and top coat also come in smaller packs (1 and 5
          litre primers, a 4.5 litre base coat); we size the packs at
          quotation. Everything is supplied to order.
        </p>
      </div>
    </div>
  );
}
