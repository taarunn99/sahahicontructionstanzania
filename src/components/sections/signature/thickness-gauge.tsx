"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useId, useState } from "react";

import type { GaugeStop } from "@/config/mapei-signature";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * SIGNATURE ELEMENT - Resin flooring: "Thickness gauge".
 * Specifying a resin floor is choosing a thickness. Slide from a roll-coat
 * finish to a 6 mm polyurethane-cement mortar: the section redraws to true
 * relative scale (every millimetre is the same number of pixels), the
 * caliper follows, and the system that Mapei gives a figure for at that
 * thickness is named. Stops and figures come from the coverage models.
 * The coating has no film thickness on its data sheet, so it is drawn as a
 * hairline and labelled as not to scale.
 */

const VIEW = { w: 520, h: 300 };
const SLAB_Y = 222;
const PX_PER_MM = 20;
const FILM_PX = 3;

export function ThicknessGauge({ stops }: { stops: GaugeStop[] }) {
  const [index, setIndex] = useState(3);
  const clipId = useId();
  const stop = stops[index];
  const px = stop.thickness === null ? FILM_PX : stop.thickness * PX_PER_MM;
  const surfaceY = SLAB_Y - px;
  const ease = "transform 0.6s var(--ease-out-expo)";

  return (
    <div
      translate="no"
      className="notranslate border-deep grid overflow-hidden rounded-lg border lg:grid-cols-[1.25fr_1fr]"
    >
      {/* ---- The drawn section ------------------------------------------- */}
      <div className="bg-surface relative p-5 sm:p-8">
        <p className="spec-sh text-muted flex justify-between gap-4">
          <span>Section · 1 mm = 1 division</span>
          <span>
            {stop.thickness === null ? "Film not to scale" : "To scale"}
          </span>
        </p>
        <svg
          viewBox={`0 0 ${VIEW.w} ${VIEW.h}`}
          className="mt-4 h-auto w-full"
          role="img"
          aria-label={
            stop.thickness === null
              ? "Drawn section: a thin resin coating on a concrete slab"
              : `Drawn section: a ${stop.thickness} millimetre resin floor on a concrete slab, measured by a caliper`
          }
          fill="none"
          stroke="var(--deep)"
          strokeWidth="1.25"
        >
          {/* The resin layer: one tall rect that slides, clipped at the slab */}
          <clipPath id={clipId}>
            <rect x="24" y="0" width="380" height={SLAB_Y} />
          </clipPath>
          <g clipPath={`url(#${clipId})`}>
            <g
              style={{
                transform: `translateY(${surfaceY}px)`,
                transition: ease,
              }}
            >
              <rect
                x="24"
                y="0"
                width="380"
                height={VIEW.h}
                fill="var(--accent)"
                stroke="none"
              />
              <line x1="24" y1="0" x2="404" y2="0" strokeWidth="1.75" />
            </g>
          </g>
          {/* Concrete slab */}
          <rect x="24" y={SLAB_Y} width="380" height="60" fill="var(--chalk)" />
          {Array.from({ length: 18 }, (_, i) => (
            <line
              key={i}
              x1={30 + i * 21}
              y1={SLAB_Y + 60}
              x2={52 + i * 21}
              y2={SLAB_Y}
              strokeOpacity="0.22"
            />
          ))}

          {/* Caliper: beam with millimetre divisions, fixed jaw on the slab */}
          <rect
            x="446"
            y="70"
            width="22"
            height={SLAB_Y - 70 + 34}
            fill="var(--chalk)"
          />
          <g strokeOpacity="0.6">
            {Array.from({ length: 8 }, (_, mm) => (
              <line
                key={mm}
                x1="446"
                y1={SLAB_Y - mm * PX_PER_MM}
                x2={mm % 2 === 0 ? 458 : 453}
                y2={SLAB_Y - mm * PX_PER_MM}
              />
            ))}
          </g>
          <path
            d={`M468 ${SLAB_Y} H410 V${SLAB_Y + 9} H468`}
            fill="var(--deep)"
          />
          {/* Sliding jaw */}
          <g
            style={{ transform: `translateY(${surfaceY}px)`, transition: ease }}
          >
            <path d="M474 0 H410 V-9 H474 Z" fill="var(--deep)" />
            <rect x="440" y="-24" width="34" height="15" fill="var(--deep)" />
          </g>
        </svg>
      </div>

      {/* ---- The instrument ---------------------------------------------- */}
      <div className="bg-background border-deep flex flex-col gap-8 border-t p-6 sm:p-9 lg:border-t-0 lg:border-l">
        <div>
          <p className="label-sh text-muted" id={`${clipId}-label`}>
            Thickness
          </p>
          <div
            role="group"
            aria-labelledby={`${clipId}-label`}
            className="mt-3 grid grid-cols-6 gap-1.5"
          >
            {stops.map((item, i) => (
              <button
                key={`${item.product.name}-${item.thickness}`}
                type="button"
                aria-pressed={i === index}
                aria-label={
                  item.thickness === null
                    ? "Coating"
                    : `${item.thickness} millimetres`
                }
                onClick={() => setIndex(i)}
                className={cn(
                  "chip-sh border-deep spec-sh flex min-h-11 items-center justify-center rounded-full border",
                )}
              >
                {item.thickness === null ? "Coat" : item.thickness}
              </button>
            ))}
          </div>
          <input
            type="range"
            aria-label="Floor thickness, from a coating to 6 millimetres"
            min={0}
            max={stops.length - 1}
            step={1}
            value={index}
            onChange={(event) => setIndex(event.target.valueAsNumber)}
            className="accent-deep mt-2 h-11 w-full"
          />
        </div>

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE.out }}
          aria-live="polite"
        >
          <p className="font-display text-phi-3 leading-none">
            {stop.thickness === null ? "Coating" : `${stop.thickness} mm`}
          </p>
          <p className="label-sh text-muted mt-5 leading-relaxed">
            {stop.product.type}
          </p>
          <p className="font-display mt-2 text-2xl leading-tight">
            <Link href={stop.product.href} className="u-line">
              {stop.product.name}
            </Link>
          </p>
          <p className="text-muted mt-3 leading-relaxed">{stop.layer}.</p>
        </motion.div>

        <dl className="border-deep border-t pt-5">
          <dt className="label-sh text-muted leading-relaxed">
            Consumption on the data sheet, kg/m²
          </dt>
          <dd className="spec-sh mt-2 text-base">{stop.consumption}</dd>
        </dl>
      </div>
    </div>
  );
}
