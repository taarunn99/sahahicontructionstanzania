"use client";

import NumberFlow from "@number-flow/react";
import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";

import type { NotchData } from "@/config/mapei-signature";
import { formatRange, packsFor } from "@/lib/coverage";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * SIGNATURE ELEMENT - Tile adhesives: "Notch and coverage".
 * Pick the tile size; the trowel notch in the drawn section changes and the
 * bags-for-your-floor figure rolls. Every figure is Mapei's own for
 * Adesilex P7 (three trowels, three consumptions), passed in from the
 * coverage model. The section drawing is illustrative: ridges are drawn to
 * read clearly, not to the trowel's millimetres.
 */

const VIEW = { w: 520, h: 300 };
const BED_Y = 214; // top of the substrate
// Drawn ridge size per trowel number. Illustrative.
const RIDGE: Record<number, number> = { 4: 13, 5: 19, 6: 27 };
// Drawn tile width per option, smallest first.
const TILE_COUNT = [6, 3, 1];
const MAX_BAGS_DRAWN = 12;

export function NotchCoverage({ data }: { data: NotchData }) {
  const [choice, setChoice] = useState(1);
  const [area, setArea] = useState(20);
  const option = data.options[choice];
  const ridge = RIDGE[option.trowel] ?? 19;

  const bags = {
    min: packsFor(area * option.min, data.pack.size),
    max: packsFor(area * option.max, data.pack.size),
  };
  const drawn = Math.min(bags.max, MAX_BAGS_DRAWN);

  const ridges = Array.from(
    { length: Math.floor((VIEW.w - 80) / (ridge * 2)) },
    (_, i) => 40 + i * ridge * 2,
  );
  const tiles = TILE_COUNT[choice] ?? 3;
  const tileWidth = (VIEW.w - 80 - (tiles - 1) * 6) / tiles;

  return (
    <div
      translate="no"
      className="notranslate border-deep grid overflow-hidden rounded-lg border lg:grid-cols-[1.25fr_1fr]"
    >
      {/* ---- The drawn section ------------------------------------------- */}
      <div className="bg-surface relative flex flex-col justify-between p-5 sm:p-8">
        <p className="spec-sh text-muted">
          Section · trowel n. {option.trowel} · illustrative
        </p>
        <svg
          viewBox={`0 0 ${VIEW.w} ${VIEW.h}`}
          className="mt-4 h-auto w-full"
          role="img"
          aria-label={`Drawn section: tile lifted above adhesive ridges combed with a number ${option.trowel} trowel, on a concrete substrate`}
          fill="none"
          stroke="var(--deep)"
          strokeWidth="1.25"
          strokeLinejoin="round"
        >
          {/* Substrate with hatching */}
          <rect x="24" y={BED_Y} width={VIEW.w - 48} height="56" />
          {Array.from({ length: 24 }, (_, i) => (
            <line
              key={i}
              x1={30 + i * 20}
              y1={BED_Y + 56}
              x2={30 + i * 20 + 22}
              y2={BED_Y}
              strokeOpacity="0.22"
            />
          ))}
          {/* Ridges: one group per trowel, the active one rises from the bed */}
          <motion.g
            key={option.trowel}
            initial={{ scaleY: 0.2, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: EASE.out }}
            style={{ originY: 1 }}
          >
            {ridges.map((x) => (
              <rect
                key={x}
                x={x}
                y={BED_Y - ridge}
                width={ridge}
                height={ridge}
                fill="var(--chalk)"
              />
            ))}
          </motion.g>
          {/* Tiles, lifted: they settle a little when the size changes */}
          <motion.g
            key={`tiles-${choice}`}
            initial={{ y: -22, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: EASE.out, delay: 0.08 }}
          >
            {Array.from({ length: tiles }, (_, i) => (
              <rect
                key={i}
                x={40 + i * (tileWidth + 6)}
                y={BED_Y - ridge - 58}
                width={tileWidth}
                height="18"
                fill="var(--accent)"
              />
            ))}
          </motion.g>
          {/* Dimension tick for the notch */}
          <g strokeOpacity="0.6">
            <line x1="30" y1={BED_Y - ridge} x2="30" y2={BED_Y} />
            <line x1="26" y1={BED_Y - ridge} x2="34" y2={BED_Y - ridge} />
            <line x1="26" y1={BED_Y} x2="34" y2={BED_Y} />
          </g>
        </svg>

        {/* Bags on the pallet */}
        <div className="mt-6" aria-hidden>
          <div className="flex min-h-10 flex-wrap items-end gap-1.5">
            {Array.from({ length: drawn }, (_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.025 }}
                className="border-deep bg-chalk block h-9 w-6 rounded-[3px] border"
              />
            ))}
            {bags.max > MAX_BAGS_DRAWN && (
              <span className="spec-sh pb-2 pl-1">
                +{bags.max - MAX_BAGS_DRAWN}
              </span>
            )}
          </div>
          <div className="border-deep mt-1.5 border-t" />
        </div>
      </div>

      {/* ---- The instrument ---------------------------------------------- */}
      <div className="bg-background border-deep flex flex-col gap-8 border-t p-6 sm:p-9 lg:border-t-0 lg:border-l">
        <fieldset>
          <legend className="label-sh text-muted">Tile size</legend>
          <div className="mt-3 flex flex-col gap-2">
            {data.options.map((item, index) => (
              <button
                key={item.trowel}
                type="button"
                aria-pressed={index === choice}
                onClick={() => setChoice(index)}
                className={cn(
                  "chip-sh border-deep flex min-h-11 items-center justify-between gap-4 rounded-full border px-5 py-2 text-left text-sm",
                )}
              >
                <span>{item.label}</span>
                <span className="spec-sh shrink-0">n. {item.trowel}</span>
              </button>
            ))}
          </div>
        </fieldset>

        <div>
          <label className="label-sh text-muted flex items-baseline justify-between gap-4">
            <span>Floor area</span>
            <span className="spec-sh tracking-normal normal-case">
              {area} m²
            </span>
          </label>
          <input
            type="range"
            aria-label="Floor area in square metres"
            min={1}
            max={200}
            step={1}
            value={area}
            onChange={(event) => setArea(event.target.valueAsNumber)}
            className="accent-deep mt-2 h-11 w-full"
          />
        </div>

        <dl className="border-deep grid grid-cols-2 border-t">
          <div className="border-deep/20 border-r py-5 pr-4">
            <dt className="label-sh text-muted leading-relaxed">
              Consumption, kg/m²
            </dt>
            <dd className="font-display text-phi-2 mt-2 leading-none">
              {formatRange(option.min, option.max)}
            </dd>
          </div>
          <div className="py-5 pl-5">
            <dt className="label-sh text-muted leading-relaxed">
              {data.pack.label}s
            </dt>
            <dd className="font-display text-phi-2 mt-2 leading-none">
              {bags.min === bags.max ? (
                <NumberFlow value={bags.max} />
              ) : (
                `${bags.min}-${bags.max}`
              )}
            </dd>
          </div>
        </dl>

        <p className="text-muted text-sm leading-relaxed">
          Mapei&apos;s figures for{" "}
          <Link href={data.product.href} className="u-line text-foreground">
            {data.product.name}
          </Link>
          , class {data.product.classification}. No wastage is added here: the
          calculator on the product page has a wastage field.
        </p>
      </div>
    </div>
  );
}
