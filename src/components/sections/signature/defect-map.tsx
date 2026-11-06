"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";

import type { Defect } from "@/config/mapei-signature";
import { EASE } from "@/lib/motion";
import { cn, pad } from "@/lib/utils";

/**
 * SIGNATURE ELEMENT - Concrete repair: "Defect map".
 * Repair starts with diagnosis. A drawn concrete frame carries five
 * conditions; pick one on the drawing (or from the list) and its repair is
 * drawn in while the products for it assemble beside it. Product names and
 * descriptions are passed in from the catalogue. The drawing is a diagram,
 * not a survey: it shows where each product is used, nothing more.
 */

const VIEW = { w: 520, h: 360 };

const draw = {
  initial: { pathLength: 0 },
  animate: { pathLength: 1 },
  transition: { duration: 0.9, ease: EASE.out },
} as const;
const fill = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, delay: 0.35 },
} as const;

export function DefectMap({ defects }: { defects: Defect[] }) {
  const [activeId, setActiveId] = useState<Defect["id"]>("rebar");
  const active = defects.find((item) => item.id === activeId) ?? defects[0];
  const tone = (id: Defect["id"]) => (id === activeId ? 1 : 0.38);

  return (
    <div
      translate="no"
      className="notranslate border-deep grid overflow-hidden rounded-lg border lg:grid-cols-[1.25fr_1fr]"
    >
      {/* ---- The drawing -------------------------------------------------- */}
      <div className="bg-surface relative p-5 sm:p-8">
        <p className="spec-sh text-muted flex justify-between gap-4">
          <span>Elevation · diagram</span>
          <span>Pick a condition</span>
        </p>
        <div className="relative mt-4">
          <svg
            viewBox={`0 0 ${VIEW.w} ${VIEW.h}`}
            className="h-auto w-full"
            role="img"
            aria-label="Diagram of a concrete frame with five conditions marked: exposed steel, a microcrack, a section to recast, a construction joint and a fixing"
            fill="none"
            stroke="var(--deep)"
            strokeWidth="1.25"
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            {/* The frame: beam, two columns, a floor screed between them */}
            <g fill="var(--chalk)">
              <rect x="40" y="40" width="440" height="70" />
              <rect x="110" y="110" width="100" height="220" />
              <rect x="420" y="110" width="60" height="220" />
              <rect x="210" y="300" width="210" height="30" />
            </g>
            <line x1="24" y1="330" x2="496" y2="330" strokeWidth="1.75" />

            {/* 1. Exposed steel on the column */}
            <g style={{ opacity: tone("rebar"), transition: "opacity 0.4s" }}>
              <path
                d="M120 126 L150 120 L200 128 L196 176 L160 184 L124 178 Z"
                fill="var(--surface)"
              />
              {activeId === "rebar" && (
                <>
                  {[140, 160, 180].map((x) => (
                    <motion.line
                      key={x}
                      x1={x}
                      y1="124"
                      x2={x}
                      y2="180"
                      stroke="var(--accent)"
                      strokeWidth="7"
                      {...draw}
                    />
                  ))}
                  <motion.path
                    d="M120 126 L150 120 L200 128 L196 176 L160 184 L124 178 Z"
                    fill="var(--chalk)"
                    fillOpacity="0.82"
                    strokeDasharray="3 4"
                    {...fill}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  />
                </>
              )}
              {[140, 160, 180].map((x) => (
                <line key={x} x1={x} y1="124" x2={x} y2="180" strokeWidth="2" />
              ))}
            </g>

            {/* 2. Microcrack lower on the column */}
            <g style={{ opacity: tone("crack"), transition: "opacity 0.4s" }}>
              {activeId === "crack" && (
                <motion.path
                  d="M132 226 l14 12 l-8 10 l18 10 l-6 12 l18 8"
                  stroke="var(--accent)"
                  strokeWidth="7"
                  {...draw}
                />
              )}
              <path d="M132 226 l14 12 l-8 10 l18 10 l-6 12 l18 8" />
              {activeId === "crack" &&
                [
                  [146, 238],
                  [156, 258],
                ].map(([cx, cy]) => (
                  <motion.circle
                    key={cx}
                    cx={cx}
                    cy={cy}
                    r="4.5"
                    fill="var(--deep)"
                    {...fill}
                  />
                ))}
            </g>

            {/* 3. A section to recast in the beam soffit */}
            <g style={{ opacity: tone("section"), transition: "opacity 0.4s" }}>
              <path
                d="M300 110 L310 86 L336 76 L364 86 L378 110"
                fill="var(--surface)"
              />
              {activeId === "section" && (
                <>
                  <motion.path
                    d="M300 110 L310 86 L336 76 L364 86 L378 110 Z"
                    fill="var(--accent)"
                    stroke="none"
                    {...fill}
                  />
                  <motion.line
                    x1="288"
                    y1="114"
                    x2="390"
                    y2="114"
                    strokeWidth="3"
                    {...draw}
                  />
                </>
              )}
            </g>

            {/* 4. Construction joint in the screed */}
            <g style={{ opacity: tone("joint"), transition: "opacity 0.4s" }}>
              {Array.from({ length: 7 }, (_, i) => (
                <line
                  key={i}
                  x1={366 + i * 8}
                  y1="328"
                  x2={374 + i * 8}
                  y2="302"
                  strokeOpacity="0.3"
                />
              ))}
              {activeId === "joint" && (
                <motion.line
                  x1="360"
                  y1="301"
                  x2="360"
                  y2="329"
                  stroke="var(--accent)"
                  strokeWidth="8"
                  {...draw}
                />
              )}
              <line x1="360" y1="300" x2="360" y2="330" strokeDasharray="3 3" />
            </g>

            {/* 5. A fixing into the right-hand column */}
            <g style={{ opacity: tone("anchor"), transition: "opacity 0.4s" }}>
              {activeId === "anchor" && (
                <motion.rect
                  x="420"
                  y="194"
                  width="42"
                  height="12"
                  fill="var(--accent)"
                  stroke="none"
                  {...fill}
                  transition={{ duration: 0.5 }}
                />
              )}
              <path d="M420 194 H462 V206 H420" strokeDasharray="3 3" />
              <line x1="384" y1="200" x2="456" y2="200" strokeWidth="2.5" />
              <rect x="406" y="184" width="6" height="32" fill="var(--deep)" />
              <rect
                x="396"
                y="193"
                width="10"
                height="14"
                fill="var(--chalk)"
              />
            </g>
          </svg>

          {/* Markers: real buttons, 44px, positioned over the drawing */}
          {defects.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={item.id === activeId}
              aria-label={item.label}
              onClick={() => setActiveId(item.id)}
              style={{ left: `${item.at.x}%`, top: `${item.at.y}%` }}
              className="group absolute flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
            >
              <span
                className={cn(
                  "spec-sh border-deep flex size-7 items-center justify-center rounded-full border transition-transform duration-300 group-hover:scale-110",
                  item.id === activeId
                    ? "bg-deep text-chalk scale-110"
                    : "bg-chalk",
                )}
              >
                {index + 1}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ---- The repair sequence ----------------------------------------- */}
      <div className="bg-background border-deep flex flex-col gap-8 border-t p-6 sm:p-9 lg:border-t-0 lg:border-l">
        <fieldset>
          <legend className="label-sh text-muted">Condition</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {defects.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={item.id === activeId}
                onClick={() => setActiveId(item.id)}
                className="chip-sh border-deep inline-flex min-h-11 items-center gap-2.5 rounded-full border px-4 text-sm"
              >
                <span className="spec-sh">{index + 1}</span>
                {item.label}
              </button>
            ))}
          </div>
        </fieldset>

        <div aria-live="polite">
          <p className="label-sh text-muted">The repair</p>
          <ol className="border-deep mt-3 border-t">
            {active.steps.map((step, index) => (
              <motion.li
                key={`${active.id}-${step.product.name}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: EASE.out,
                  delay: 0.12 + index * 0.14,
                }}
                className="border-deep/20 grid grid-cols-[2.5rem_1fr] gap-x-3 border-b py-5"
              >
                <span className="spec-sh text-muted pt-1.5">
                  {pad(index + 1)}
                </span>
                <div>
                  <p className="label-sh text-muted leading-relaxed">
                    {step.action} · {step.product.type}
                  </p>
                  <p className="font-display mt-1.5 text-xl leading-tight sm:text-2xl">
                    <Link href={step.product.href} className="u-line">
                      {step.product.name}
                    </Link>
                  </p>
                  <p className="text-muted mt-2 leading-relaxed">
                    {step.product.summary}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
