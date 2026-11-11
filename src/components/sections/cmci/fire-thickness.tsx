"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { useLazyScene } from "@/components/three-d/use-lazy-scene";
import type { FireCoatController } from "@/components/three-d/fire-coat-scene";
import { BoqClause } from "@/components/sections/product/boq-clause";
import {
  COLUMN_PRESETS,
  X854,
  columnThickness,
  heatedPerimeterMm,
  wOverD,
  type Rating,
} from "@/config/fire-thickness";
import { cn } from "@/lib/utils";

/**
 * "How thick?" for a steel column: pick the product, the hours and the
 * section, get the spray thickness by the equation in UL Design X854, see it
 * on a 3D column in true proportion, and take away a BOQ clause. Built for
 * the consultants, QSs and contractors who write fireproofing into a tender
 * (docs/research, TBA and NHC targeting). Data: src/config/fire-thickness.ts.
 */

const CHIP =
  "inline-flex min-h-11 items-center rounded-full border px-4 text-sm transition-colors";
const on = "bg-deep text-chalk border-deep";
const off = "border-deep/30 hover:border-deep bg-white";

const hoursLabel = (r: number) => (r === 1.5 ? "1-1/2 h" : `${r} h`);

type Fields = { mass: string; d: string; b: string; tw: string; tf: string };

const fromPreset = (p: (typeof COLUMN_PRESETS)[number]): Fields => ({
  mass: String(p.mass),
  d: String(p.d),
  b: String(p.b),
  tw: String(p.tw),
  tf: String(p.tf),
});

export function FireThickness({ initial }: { initial?: string } = {}) {
  const [product, setProduct] = useState(
    X854.products.find((item) => item.slug === initial) ?? X854.products[3],
  );
  const [rating, setRating] = useState<Rating>(2);
  const [preset, setPreset] = useState<string | null>(COLUMN_PRESETS[1].name);
  const [fields, setFields] = useState<Fields>(fromPreset(COLUMN_PRESETS[1]));

  const num = (v: string) => Number.parseFloat(v.replace(",", "."));
  const section = {
    mass: num(fields.mass),
    d: num(fields.d),
    b: num(fields.b),
    tw: num(fields.tw),
    tf: num(fields.tf),
  };
  const valid =
    [section.mass, section.d, section.b, section.tw, section.tf].every(
      (v) => Number.isFinite(v) && v > 0,
    ) &&
    section.tw < section.b &&
    section.tf * 2 < section.d;

  const perimeter = valid
    ? heatedPerimeterMm(section.d, section.b, section.tw)
    : 0;
  const wd = valid ? wOverD(section.mass, perimeter) : 0;
  const result = valid ? columnThickness(rating, wd) : null;
  const all = X854.ratings.map((r) => ({
    r,
    res: valid ? columnThickness(r, wd) : null,
  }));
  const maxMm = Math.max(1, ...all.map(({ res }) => (res?.ok ? res.mm : 0)));

  const sectionName = preset ?? "the column section given";
  const clause =
    result?.ok === true
      ? `Spray-applied cementitious fireproofing to structural steel columns: ${product.name}, minimum average dry density ${product.pcf} pcf to ASTM E605, applied in accordance with ${X854.design} for a ${hoursLabel(rating).replace(" h", " hour")} fire resistance rating. Column ${sectionName}, W/D ${wd.toFixed(3)}: minimum thickness ${result.mm} mm (${result.fraction} in), contour sprayed to all four sides on clean steel free of dirt, loose scale and oil, as the manufacturer's data sheet. Thickness to be confirmed by the fire engineer and the authority having jurisdiction.`
      : "";

  // ---- 3D stage --------------------------------------------------------
  const stage = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const scene = useRef<FireCoatController | null>(null);
  const mount = useCallback(async () => {
    const { mountFireCoat } =
      await import("@/components/three-d/fire-coat-scene");
    if (!canvas.current) throw new Error("no canvas");
    const controller = mountFireCoat(canvas.current);
    scene.current = controller;
    return controller;
  }, []);
  const live = useLazyScene(stage, mount);

  const coatMm = result?.ok ? result.mm : 0;
  useEffect(() => {
    if (!valid) return;
    scene.current?.set(
      { d: section.d, b: section.b, tw: section.tw, tf: section.tf },
      coatMm,
    );
  }, [live, valid, section.d, section.b, section.tw, section.tf, coatMm]);

  // ---- 2D section: the drawing under the canvas (and the no-3D view) ----
  const drawing = (() => {
    if (!valid) return null;
    const t = coatMm;
    const span = Math.max(section.b, section.d) + 2 * t;
    const s = 220 / span;
    const outline = (grow: number) => {
      const w = (section.b / 2 + grow) * s;
      const h = (section.d / 2 + grow) * s;
      const f = (section.tf + 2 * grow) * s;
      const web = (section.tw / 2 + grow) * s;
      return `M${-w},${-h}H${w}V${-h + f}H${web}V${h - f}H${w}V${h}H${-w}V${h - f}H${-web}V${-h + f}H${-w}Z`;
    };
    return { coat: outline(t), steel: outline(0) };
  })();

  const setField = (key: keyof Fields) => (value: string) => {
    setPreset(null);
    setFields((current) => ({ ...current, [key]: value }));
  };

  return (
    <div
      translate="no"
      className="notranslate grid gap-10 lg:grid-cols-2 lg:gap-14"
    >
      <div className="min-w-0">
        <fieldset>
          <legend className="label-sh text-muted">Product</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {X854.products.map((item) => (
              <button
                key={item.slug}
                type="button"
                aria-pressed={item.slug === product.slug}
                onClick={() => setProduct(item)}
                className={cn(CHIP, item.slug === product.slug ? on : off)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-7">
          <legend className="label-sh text-muted">Fire rating</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {X854.ratings.map((r) => (
              <button
                key={r}
                type="button"
                aria-pressed={r === rating}
                onClick={() => setRating(r)}
                className={cn(
                  CHIP,
                  "min-w-16 justify-center",
                  r === rating ? on : off,
                )}
              >
                {hoursLabel(r)}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-7">
          <legend className="label-sh text-muted">Column section</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {COLUMN_PRESETS.map((p) => (
              <button
                key={p.name}
                type="button"
                aria-pressed={p.name === preset}
                onClick={() => {
                  setPreset(p.name);
                  setFields(fromPreset(p));
                }}
                className={cn(CHIP, p.name === preset ? on : off)}
              >
                {p.name}
              </button>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {(
              [
                ["mass", "Mass, kg/m"],
                ["d", "Depth d, mm"],
                ["b", "Width b, mm"],
                ["tw", "Web tw, mm"],
                ["tf", "Flange tf, mm"],
              ] as [keyof Fields, string][]
            ).map(([key, label]) => (
              <label key={key} className="block text-sm">
                <span className="text-muted">{label}</span>
                <input
                  inputMode="decimal"
                  value={fields[key]}
                  onChange={(event) => setField(key)(event.target.value)}
                  className="border-deep/30 focus:border-deep mt-1 block min-h-11 w-full rounded-lg border bg-white px-3 tabular-nums outline-none"
                />
              </label>
            ))}
          </div>
          <p className="text-muted mt-2 text-xs leading-relaxed">
            Typical section-table values. Use your own section&apos;s figures
            from the steel drawings.
          </p>
        </fieldset>

        <div
          role="status"
          aria-live="polite"
          className="bg-deep text-chalk mt-8 rounded-2xl p-6 sm:p-8"
        >
          {!valid ? (
            <p>Enter the section: all five figures, in kg/m and mm.</p>
          ) : result?.ok ? (
            <>
              <p className="label-sh opacity-80">
                {product.name} · {hoursLabel(rating)}
              </p>
              <p className="font-display mt-2 text-6xl font-extrabold tabular-nums sm:text-7xl">
                {result.mm} mm
              </p>
              <p className="mt-2 opacity-80">
                {result.fraction} in minimum, contour sprayed on four sides
              </p>
              <p className="mt-4 text-sm tabular-nums opacity-80">
                Heated perimeter {Math.round(perimeter)} mm · W/D{" "}
                {wd.toFixed(3)}
              </p>
            </>
          ) : (
            <p>
              {result?.reason === "wd-low"
                ? `W/D ${wd.toFixed(3)} is lighter than the design covers (${X854.wdMin} upwards). Ask us.`
                : result?.reason === "wd-high"
                  ? `W/D ${wd.toFixed(3)} is heavier than the design covers (up to ${X854.wdMax}). Ask us.`
                  : "This rating needs more than the design's maximum thickness on this section. Pick a heavier section or ask us."}
            </p>
          )}
        </div>

        {valid && (
          <ul className="mt-5 space-y-2" aria-label="Thickness for each rating">
            {all.map(({ r, res }) => (
              <li
                key={r}
                className="flex items-center gap-3 text-sm tabular-nums"
              >
                <span className="w-14 shrink-0">{hoursLabel(r)}</span>
                <span className="bg-deep/10 relative h-3 flex-1 overflow-hidden rounded-full">
                  <span
                    className={cn(
                      "absolute inset-y-0 left-0 rounded-full transition-[width] duration-500",
                      r === rating ? "bg-(--pop-red)" : "bg-deep/45",
                    )}
                    style={{
                      width: `${res?.ok ? (res.mm / maxMm) * 100 : 0}%`,
                    }}
                  />
                </span>
                <span className="w-16 shrink-0 text-right">
                  {res?.ok ? `${res.mm} mm` : "n/a"}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="min-w-0">
        <figure>
          <div
            ref={stage}
            className="stage-fit bg-surface relative aspect-square w-full overflow-hidden rounded-2xl [--stage-room:9rem]"
          >
            <div
              aria-hidden
              className={cn(
                "absolute inset-0 flex items-center justify-center transition-opacity duration-700",
                live && "opacity-0",
              )}
            >
              {drawing && (
                <svg viewBox="-130 -130 260 260" className="h-4/5 w-4/5">
                  <path
                    d={drawing.coat}
                    className="fill-chalk stroke-deep"
                    strokeWidth={2}
                    strokeDasharray="5 4"
                  />
                  <path d={drawing.steel} className="fill-deep" />
                </svg>
              )}
            </div>
            <canvas
              ref={canvas}
              className="absolute inset-0 h-full w-full touch-pan-y"
              aria-label="A steel column of the chosen section with the sprayed coat at the calculated thickness. Drag to turn it."
              role="img"
            />
            {result?.ok && (
              <p className="bg-deep text-chalk font-display pointer-events-none absolute top-4 left-4 rounded-full px-4 py-1.5 text-sm font-extrabold tabular-nums">
                {result.mm} mm coat
              </p>
            )}
          </div>
          <figcaption className="text-muted mt-3 text-sm">
            Steel and coat drawn to the same scale. Drag to turn the column.
          </figcaption>
        </figure>
      </div>

      <div className="lg:col-span-2">
        {clause && (
          <BoqClause
            clause={clause}
            csv={`Item,Description,Unit\n1,"${clause.replace(/"/g, '""')}",m2`}
            fileBase={`${product.name} ${hoursLabel(rating)} column`}
          />
        )}
        <p className="text-muted mt-6 max-w-3xl text-sm leading-relaxed">
          By the equation printed in {X854.design} (ANSI/UL 263), rounded up to
          the next 1/16 in. For planning and BOQs only: the design&apos;s own
          table, the fire engineer and the authority having jurisdiction decide
          the thickness on the job. Hollow sections and beams follow other
          designs; send us the drawings.
        </p>
      </div>
    </div>
  );
}
