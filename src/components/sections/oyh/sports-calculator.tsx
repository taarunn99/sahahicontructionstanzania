"use client";

import { useMemo, useState } from "react";

import { FlowButton } from "@/components/ui/flow-button";
import { whatsappLink } from "@/config/site";
import type { Bom } from "@/config/oyh-sports";

const PRESETS = [
  { label: "Basketball, 32 × 19 m", area: 608 },
  { label: "Tennis, 36.6 × 18.3 m", area: 669 },
  { label: "Futsal, 40 × 20 m", area: 800 },
];

const fmt = (value: number) =>
  value >= 100
    ? Math.round(value).toLocaleString("en-GB")
    : value.toLocaleString("en-GB", { maximumFractionDigits: 1 });

/**
 * Material quantities for an area, from OYH's consumption per m². Quantities and
 * packs only: OYH's price columns are never shipped to the page.
 */
export function SportsCalculator({ boms }: { boms: Bom[] }) {
  const [bomIndex, setBomIndex] = useState(0);
  const [variantIndex, setVariantIndex] = useState(0);
  const [area, setArea] = useState(608);
  const bom = boms[bomIndex];
  const variant = bom.variants[variantIndex] ?? bom.variants[0];
  const safeArea =
    Number.isFinite(area) && area > 0 ? Math.min(area, 100000) : 0;

  const rows = useMemo(() => {
    // One row per product: the same product used in two layers is added up.
    const merged = new Map<
      string,
      {
        product: string;
        layers: string[];
        qty: number;
        unit: string;
        pack?: number;
        local?: boolean;
      }
    >();
    for (const line of variant.lines) {
      const key = line.product;
      const unit = line.unit ?? "kg";
      const entry = merged.get(key) ?? {
        product: line.product,
        layers: [],
        qty: 0,
        unit,
        pack: line.pack,
        local: line.local,
      };
      if (!entry.layers.includes(line.layer)) entry.layers.push(line.layer);
      entry.qty += line.perM2 * safeArea;
      merged.set(key, entry);
    }
    return [...merged.values()];
  }, [variant, safeArea]);

  const summary = `${bom.name}, ${variant.label}, ${fmt(safeArea)} m²`;

  return (
    <div
      translate="no"
      className="grid grid-cols-1 gap-8 lg:grid-cols-[22rem_minmax(0,1fr)]"
    >
      <div className="space-y-6">
        {boms.length > 1 && (
          <fieldset>
            <legend className="label-sh text-muted">System</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {boms.map((item, index) => (
                <button
                  key={item.slug}
                  type="button"
                  aria-pressed={index === bomIndex}
                  onClick={() => {
                    setBomIndex(index);
                    setVariantIndex(0);
                  }}
                  className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
                    index === bomIndex
                      ? "bg-deep border-deep text-white"
                      : "border-deep/25 text-deep hover:bg-surface bg-white"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {bom.variants.length > 1 && (
          <fieldset>
            <legend className="label-sh text-muted">Build-up and base</legend>
            <div className="mt-3 grid gap-2">
              {bom.variants.map((item, index) => (
                <label
                  key={item.slug}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors ${
                    index === variantIndex
                      ? "border-deep bg-surface"
                      : "border-deep/20 bg-white"
                  }`}
                >
                  <input
                    type="radio"
                    name="sports-variant"
                    checked={index === variantIndex}
                    onChange={() => setVariantIndex(index)}
                    className="accent-current"
                  />
                  {item.label}
                </label>
              ))}
            </div>
          </fieldset>
        )}

        <div>
          <label htmlFor="sports-area" className="label-sh text-muted">
            Area, m²
          </label>
          <input
            id="sports-area"
            type="number"
            inputMode="decimal"
            min={1}
            max={100000}
            value={Number.isFinite(area) ? area : ""}
            onChange={(event) => setArea(event.currentTarget.valueAsNumber)}
            className="border-deep/30 text-deep mt-3 w-full rounded-xl border bg-white px-4 py-3 text-2xl font-bold tabular-nums"
          />
          <div className="mt-3 flex flex-wrap gap-2">
            {PRESETS.map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => setArea(preset.area)}
                className="border-deep/20 text-deep hover:bg-surface rounded-full border bg-white px-3 py-1.5 text-xs font-bold"
              >
                {preset.label}
              </button>
            ))}
          </div>
          <p className="text-muted mt-2 text-xs leading-snug">
            Common court sizes. Measure your own site.
          </p>
        </div>
      </div>

      <div>
        <div className="border-deep/15 overflow-x-auto rounded-2xl border bg-white">
          <table className="w-full min-w-[34rem] text-left text-sm">
            <caption className="sr-only">Materials for {summary}</caption>
            <thead className="bg-surface">
              <tr>
                <th scope="col" className="px-4 py-3 font-bold">
                  Product
                </th>
                <th scope="col" className="px-4 py-3 font-bold">
                  Layer
                </th>
                <th scope="col" className="px-4 py-3 text-right font-bold">
                  Quantity
                </th>
                <th scope="col" className="px-4 py-3 text-right font-bold">
                  Packs
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.product} className="border-deep/10 border-t">
                  <th scope="row" className="px-4 py-3 font-semibold">
                    {row.product}
                    {row.local && (
                      <span className="text-muted block text-xs font-normal">
                        Bought locally
                      </span>
                    )}
                  </th>
                  <td className="text-muted px-4 py-3">
                    {row.layers.join(", ")}
                  </td>
                  <td className="spec-sh px-4 py-3 text-right whitespace-nowrap tabular-nums">
                    {fmt(row.qty)} {row.unit}
                  </td>
                  <td className="spec-sh px-4 py-3 text-right whitespace-nowrap tabular-nums">
                    {row.pack && row.qty > 0
                      ? `${Math.ceil(row.qty / row.pack)} × ${fmt(row.pack)} ${row.unit}`
                      : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {bom.note && (
          <p className="text-muted mt-3 text-sm leading-relaxed">{bom.note}</p>
        )}
        <p className="text-muted mt-3 text-sm leading-relaxed">
          From Oriental Yuhong&apos;s consumption per m², without waste. Porous
          asphalt takes more primer, so check on site. A guide, not a quotation.
        </p>
        <div className="mt-5">
          <FlowButton href={whatsappLink(`OYH sports flooring: ${summary}`)}>
            Send this list for a quotation
          </FlowButton>
        </div>
      </div>
    </div>
  );
}
