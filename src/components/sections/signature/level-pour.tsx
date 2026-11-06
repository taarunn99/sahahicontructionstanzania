"use client";

import NumberFlow from "@number-flow/react";
import Link from "next/link";
import { useId, useRef, useState } from "react";

import type { PourData } from "@/config/mapei-signature";
import { formatQuantity, packsFor } from "@/lib/coverage";
import { clamp } from "@/lib/utils";

/**
 * SIGNATURE ELEMENT - Primers and levelling: "The pour".
 * Drag the surface of the compound up and down over an uneven slab (or use
 * the slider); the layer redraws and the kilograms and bags roll. Rates are
 * Mapei's kg/m² per mm for Ultraplan Eco 20 and Ultraplan Contract, passed
 * in from the coverage models. The slab profile is illustrative.
 */

const VIEW = { w: 520, h: 300 };
const BASE_Y = 236; // the highest point of the slab: thickness is measured from here
const PX_PER_MM = 15;
// An uneven slab top, drawn below BASE_Y.
const SLAB =
  "M24 250 C70 236 110 262 160 252 S250 238 300 256 S400 262 440 244 S480 248 496 252 L496 284 L24 284 Z";

export function LevelPour({ data }: { data: PourData }) {
  const [index, setIndex] = useState(0);
  const [thickness, setThickness] = useState(3);
  const [area, setArea] = useState(50);
  const svgRef = useRef<SVGSVGElement>(null);
  const clipId = useId();
  const dragging = useRef(false);

  const active = data.products[index];
  const { min, max, step } = active.thickness;
  const perSquareMetre = thickness * active.rate;
  const total = perSquareMetre * area;
  const bags = packsFor(total, active.pack.size);
  const surfaceY = BASE_Y - thickness * PX_PER_MM;

  /** Pointer position on the drawing -> thickness, snapped to the step. */
  const fromPointer = (clientY: number) => {
    const svg = svgRef.current;
    if (!svg) return;
    const box = svg.getBoundingClientRect();
    const y = ((clientY - box.top) / box.height) * VIEW.h;
    const raw = (BASE_Y - y) / PX_PER_MM;
    setThickness(clamp(Math.round(raw / step) * step, min, max));
  };

  return (
    <div
      translate="no"
      className="notranslate border-deep grid overflow-hidden rounded-lg border lg:grid-cols-[1.25fr_1fr]"
    >
      {/* ---- The drawn section ------------------------------------------- */}
      <div className="bg-surface relative p-5 sm:p-8">
        <p className="spec-sh text-muted flex justify-between gap-4">
          <span>Section · illustrative</span>
          <span>Drag the surface</span>
        </p>
        <svg
          ref={svgRef}
          viewBox={`0 0 ${VIEW.w} ${VIEW.h}`}
          className="mt-4 h-auto w-full cursor-ns-resize touch-none select-none"
          role="img"
          aria-label={`Drawn section: ${thickness} millimetres of self-levelling compound over an uneven concrete slab`}
          fill="none"
          stroke="var(--deep)"
          strokeWidth="1.25"
          onPointerDown={(event) => {
            dragging.current = true;
            event.currentTarget.setPointerCapture(event.pointerId);
            fromPointer(event.clientY);
          }}
          onPointerMove={(event) => {
            if (dragging.current) fromPointer(event.clientY);
          }}
          onPointerUp={() => {
            dragging.current = false;
          }}
          onPointerCancel={() => {
            dragging.current = false;
          }}
        >
          {/* The compound: a flat top over the slab's uneven one */}
          <clipPath id={clipId}>
            <rect x="24" y="0" width="472" height="270" />
          </clipPath>
          <g clipPath={`url(#${clipId})`}>
            <rect
              x="24"
              y="0"
              width="472"
              height={VIEW.h}
              fill="var(--accent)"
              stroke="none"
              style={{
                transform: `translateY(${surfaceY}px)`,
                transition: "transform 0.35s var(--ease-out-expo)",
              }}
            />
          </g>
          <path d={SLAB} fill="var(--chalk)" />
          {/* Slab hatching */}
          {Array.from({ length: 12 }, (_, i) => (
            <line
              key={i}
              x1={40 + i * 40}
              y1="284"
              x2={56 + i * 40}
              y2="266"
              strokeOpacity="0.25"
            />
          ))}
          {/* The finished surface and its handle */}
          <g
            style={{
              transform: `translateY(${surfaceY}px)`,
              transition: "transform 0.35s var(--ease-out-expo)",
            }}
          >
            <line x1="24" y1="0" x2="496" y2="0" strokeWidth="1.75" />
            <rect
              x="232"
              y="-9"
              width="56"
              height="18"
              rx="9"
              fill="var(--deep)"
            />
            <line x1="250" y1="-3" x2="270" y2="-3" stroke="var(--chalk)" />
            <line x1="250" y1="3" x2="270" y2="3" stroke="var(--chalk)" />
          </g>
          {/* Scale: one tick per millimetre, to the same scale as the layer */}
          <g strokeOpacity="0.55">
            <line x1="512" y1={BASE_Y} x2="512" y2={BASE_Y - 10 * PX_PER_MM} />
            {Array.from({ length: 11 }, (_, mm) => (
              <line
                key={mm}
                x1={mm % 5 === 0 ? 502 : 506}
                y1={BASE_Y - mm * PX_PER_MM}
                x2="512"
                y2={BASE_Y - mm * PX_PER_MM}
              />
            ))}
          </g>
        </svg>
        <p className="spec-sh text-muted mt-3">
          Scale 0 to 10 mm, measured from the highest point of the slab.
        </p>
      </div>

      {/* ---- The instrument ---------------------------------------------- */}
      <div className="bg-background border-deep flex flex-col gap-8 border-t p-6 sm:p-9 lg:border-t-0 lg:border-l">
        <fieldset>
          <legend className="label-sh text-muted">Compound</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {data.products.map((item, i) => (
              <button
                key={item.product.name}
                type="button"
                aria-pressed={i === index}
                onClick={() => setIndex(i)}
                className="chip-sh border-deep inline-flex min-h-11 items-center rounded-full border px-5 text-sm"
              >
                {item.product.name}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="grid gap-5">
          <div>
            <label className="label-sh text-muted flex items-baseline justify-between gap-4">
              <span>Thickness</span>
              <span className="spec-sh tracking-normal normal-case">
                {thickness} mm
              </span>
            </label>
            <input
              type="range"
              aria-label="Layer thickness in millimetres"
              min={min}
              max={max}
              step={step}
              value={thickness}
              onChange={(event) => setThickness(event.target.valueAsNumber)}
              className="accent-deep mt-2 h-11 w-full"
            />
          </div>
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
              min={5}
              max={500}
              step={5}
              value={area}
              onChange={(event) => setArea(event.target.valueAsNumber)}
              className="accent-deep mt-2 h-11 w-full"
            />
          </div>
        </div>

        <dl className="border-deep grid grid-cols-2 border-t">
          <div className="border-deep/20 border-r py-5 pr-4">
            <dt className="label-sh text-muted leading-relaxed">kg/m²</dt>
            <dd className="font-display text-phi-2 mt-2 leading-none">
              {formatQuantity(perSquareMetre)}
            </dd>
          </div>
          <div className="py-5 pl-5">
            <dt className="label-sh text-muted leading-relaxed">
              {active.pack.label}s
            </dt>
            <dd className="font-display text-phi-2 mt-2 leading-none">
              <NumberFlow value={bags} />
            </dd>
          </div>
        </dl>

        <p className="text-muted text-sm leading-relaxed">
          <Link href={active.product.href} className="u-line text-foreground">
            {active.product.name}
          </Link>
          : Mapei gives {active.rate} kg/m² per mm of thickness, for {min} to{" "}
          {max} mm per layer. No wastage is added here: the calculator on the
          product page has a wastage field.
        </p>
      </div>
    </div>
  );
}
