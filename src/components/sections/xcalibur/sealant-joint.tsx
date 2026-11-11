"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { BoqClause } from "@/components/sections/product/boq-clause";
import type { JointController } from "@/components/three-d/joint-scene";
import { useLazyScene } from "@/components/three-d/use-lazy-scene";
import {
  JOINT,
  SUBSTRATES,
  designDepth,
  jointQuantities,
  strain,
  type Substrate,
} from "@/config/sealant-joint";
import { cn } from "@/lib/utils";

/**
 * The movement joint, sized and priced in quantities: width, substrate and
 * length in, depth by the sheet's rules, litres, packs and primer out, and a
 * 3D joint that opens and closes with a movement slider. Every rule comes
 * from X-Calibur's X-Seal PS800 and Universal Primer sheets
 * (src/config/sealant-joint.ts). Used on both X-Seal pages.
 */

const CHIP =
  "inline-flex min-h-11 items-center rounded-full border px-4 text-sm transition-colors";
const on = "bg-deep text-chalk border-deep";
const off = "border-deep/30 hover:border-deep bg-white";

const fmt = (n: number, digits = 1) =>
  n.toLocaleString("en", { maximumFractionDigits: digits });

export function SealantJoint({
  focus = "sealant",
}: {
  /** Which product's page this sits on: the lead figure changes. */
  focus?: "sealant" | "primer";
} = {}) {
  const [width, setWidth] = useState(20);
  const [substrate, setSubstrate] = useState<Substrate>("porous");
  const [depthOverride, setDepthOverride] = useState<number | null>(null);
  const [metres, setMetres] = useState("100");
  const [grade, setGrade] = useState<keyof typeof JOINT.packs>("pouring");
  const [movement, setMovement] = useState(0);

  const depth = depthOverride ?? designDepth(width, substrate);
  const length = Math.max(0, Number.parseFloat(metres.replace(",", ".")) || 0);
  const q = jointQuantities(width, depth, length, grade);
  const pct = strain(width, (movement / 100) * width);
  const over = Math.abs(movement) > JOINT.movement;
  const minDepth =
    SUBSTRATES.find((s) => s.key === substrate)?.minDepth ?? JOINT.depth.min;
  const tooShallow = depth < minDepth;
  const ratioOff = width / depth > JOINT.ratio + 0.01;

  // ---- 3D ----
  const stage = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const scene = useRef<JointController | null>(null);
  const mount = useCallback(async () => {
    const { mountJoint } = await import("@/components/three-d/joint-scene");
    if (!canvas.current) throw new Error("no canvas");
    const controller = mountJoint(canvas.current);
    scene.current = controller;
    return controller;
  }, []);
  const live = useLazyScene(stage, mount);
  useEffect(() => {
    scene.current?.set({ width, depth, movement });
  }, [live, width, depth, movement]);

  const clause =
    length > 0
      ? `Movement joint sealant: X-Seal PS800 two part polysulphide, ${grade} grade, movement accommodation 25% (butt joints, BS 6093), in a ${width} x ${depth} mm joint, ${fmt(length, 0)} m run. Joint faces grit blasted or ground, primed with X-Seal Universal Primer at 15 m² per litre, debonded over the joint filler with siliconised tape, sealant applied 1 to 3 hours after priming and slightly recessed, as the manufacturer's data sheet. Allow ${fmt(q.litres)} litres of sealant (${q.packs} x ${JOINT.packs[grade].label}) and ${fmt(q.primerLitres, 2)} litres of primer.`
      : "";

  // ---- drawing (section through the joint) ----
  const gap = width * (1 + movement / 100);
  const S = 3.2;
  const half = (gap * S) / 2;
  const d = depth * S;

  return (
    <div
      translate="no"
      className="notranslate grid gap-10 lg:grid-cols-2 lg:gap-14"
    >
      <div className="min-w-0">
        <label className="block">
          <span className="label-sh text-muted flex justify-between">
            <span>Joint width</span>
            <span className="text-foreground tabular-nums">{width} mm</span>
          </span>
          <input
            type="range"
            min={JOINT.width.min}
            max={JOINT.width.max}
            step={1}
            value={width}
            onChange={(e) => {
              setWidth(e.target.valueAsNumber);
              setDepthOverride(null);
            }}
            className="accent-brand mt-2 h-11 w-full"
          />
          <span className="text-muted flex justify-between text-xs tabular-nums">
            <span>{JOINT.width.min} mm</span>
            <span>{JOINT.width.max} mm</span>
          </span>
        </label>

        <fieldset className="mt-6">
          <legend className="label-sh text-muted">Substrate</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {SUBSTRATES.map((s) => (
              <button
                key={s.key}
                type="button"
                aria-pressed={s.key === substrate}
                onClick={() => {
                  setSubstrate(s.key);
                  setDepthOverride(null);
                }}
                className={cn(CHIP, s.key === substrate ? on : off)}
              >
                {s.label}
                <span className="ml-2 opacity-70">min {s.minDepth} mm</span>
              </button>
            ))}
          </div>
        </fieldset>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <label className="block text-sm">
            <span className="text-muted">Sealant depth, mm</span>
            <input
              inputMode="decimal"
              value={depth}
              onChange={(e) => {
                const v = Number.parseFloat(e.target.value);
                setDepthOverride(Number.isFinite(v) ? v : null);
              }}
              className="border-deep/30 focus:border-deep mt-1 block min-h-11 w-full rounded-lg border bg-white px-3 tabular-nums outline-none"
            />
          </label>
          <label className="block text-sm">
            <span className="text-muted">Joint length, m</span>
            <input
              inputMode="decimal"
              value={metres}
              onChange={(e) => setMetres(e.target.value)}
              className="border-deep/30 focus:border-deep mt-1 block min-h-11 w-full rounded-lg border bg-white px-3 tabular-nums outline-none"
            />
          </label>
          <fieldset className="col-span-2 sm:col-span-1">
            <legend className="text-muted text-sm">Grade</legend>
            <div className="mt-1 flex gap-2">
              {(["pouring", "gun"] as const).map((g) => (
                <button
                  key={g}
                  type="button"
                  aria-pressed={g === grade}
                  onClick={() => setGrade(g)}
                  className={cn(CHIP, "flex-1 justify-center", g === grade ? on : off)}
                >
                  {g === "pouring" ? "Pouring" : "Gun"}
                </button>
              ))}
            </div>
          </fieldset>
        </div>
        <p className="text-muted mt-2 text-xs leading-relaxed">
          Depth set by the sheet&apos;s rules: half the width, never under the
          substrate&apos;s minimum, 10 to 25 mm. Change it if your joint design
          says otherwise.
        </p>
        {(tooShallow || ratioOff) && (
          <p className="mt-3 rounded-lg bg-(--pop-red) px-4 py-3 text-sm text-white">
            {tooShallow
              ? `The sheet asks for at least ${minDepth} mm on this substrate.`
              : `The sheet asks for a width to depth ratio of 2:1. ${width} x ${depth} mm is wider than that.`}
          </p>
        )}

        <div
          role="status"
          aria-live="polite"
          className="bg-deep text-chalk mt-8 rounded-2xl p-6 sm:p-8"
        >
          <p className="label-sh opacity-80">
            {width} x {depth} mm · {fmt(length, 0)} m
          </p>
          {focus === "sealant" ? (
            <>
              <p className="font-display mt-2 text-6xl font-extrabold tabular-nums sm:text-7xl">
                {fmt(q.litres)} L
              </p>
              <p className="mt-2 opacity-80">
                X-Seal PS800, {q.packs} x {JOINT.packs[grade].label}
                {grade === "pouring" ? "s" : "s"}
              </p>
              <p className="mt-4 text-sm tabular-nums opacity-80">
                {fmt(q.perMetre, 2)} L per metre run · primer{" "}
                {fmt(q.primerLitres, 2)} L ({q.primerCans} x 1 L can) on{" "}
                {fmt(q.faceArea)} m² of joint face
              </p>
            </>
          ) : (
            <>
              <p className="font-display mt-2 text-6xl font-extrabold tabular-nums sm:text-7xl">
                {fmt(q.primerLitres, 2)} L
              </p>
              <p className="mt-2 opacity-80">
                X-Seal Universal Primer, {q.primerCans} x 1 litre can, on{" "}
                {fmt(q.faceArea)} m² of joint face at 15 m² per litre
              </p>
              <p className="mt-4 text-sm tabular-nums opacity-80">
                Sealant {fmt(q.litres)} L ({q.packs} x{" "}
                {JOINT.packs[grade].label})
              </p>
            </>
          )}
        </div>
        <p className="text-muted mt-3 text-xs leading-relaxed">
          Sheet quote: &quot;{JOINT.primerQuote}&quot;
        </p>
      </div>

      <div className="min-w-0">
        <figure>
          <div
            ref={stage}
            className="stage-fit bg-surface relative aspect-square w-full overflow-hidden rounded-2xl [--stage-room:11rem]"
          >
            <div
              aria-hidden
              className={cn(
                "absolute inset-0 flex items-center justify-center transition-opacity duration-700",
                live && "opacity-0",
              )}
            >
              <svg viewBox="-150 -40 300 160" className="h-4/5 w-4/5">
                <rect x={-150} y={0} width={150 - half} height={110} className="fill-deep/60" />
                <rect x={half} y={0} width={150 - half} height={110} className="fill-deep/60" />
                <rect
                  x={-half}
                  y={10}
                  width={half * 2}
                  height={d}
                  className={over ? "fill-(--pop-red)" : "fill-deep"}
                />
                <rect x={-half} y={10 + d} width={half * 2} height={4} className="fill-chalk" />
                <rect x={-half} y={14 + d} width={half * 2} height={96 - d} fill="#8a6a45" opacity={0.8} />
              </svg>
            </div>
            <canvas
              ref={canvas}
              className="absolute inset-0 h-full w-full touch-pan-y"
              aria-label="Two concrete slabs with a sealed movement joint between them, in true proportion. Drag to turn."
              role="img"
            />
            <p className="bg-deep text-chalk font-display pointer-events-none absolute top-4 left-4 rounded-full px-4 py-1.5 text-sm font-extrabold tabular-nums">
              {width} x {depth} mm
            </p>
            <p
              className={cn(
                "font-display pointer-events-none absolute top-4 right-4 rounded-full px-4 py-1.5 text-sm font-extrabold tabular-nums transition-colors",
                over ? "bg-(--pop-red) text-white" : "bg-white text-deep",
              )}
            >
              {movement > 0 ? "+" : ""}
              {movement}% {over ? "over 25%" : "movement"}
            </p>
            <label className="absolute inset-x-0 bottom-0 block px-4 pb-2">
              <span className="label-sh flex justify-between gap-4 opacity-80">
                <span>Closes</span>
                <span>Opens</span>
              </span>
              <input
                type="range"
                aria-label="Move the joint"
                min={-40}
                max={40}
                step={1}
                value={movement}
                onChange={(e) => setMovement(e.target.valueAsNumber)}
                className="accent-brand h-11 w-full"
              />
            </label>
          </div>
          <figcaption className="text-muted mt-3 text-sm">
            Slide to open or close the joint. PS800 accommodates {JOINT.movement}%
            of the joint width in butt joints ({pct.toFixed(0)}% now); past that
            the sealant turns red. Drag to turn.
          </figcaption>
        </figure>
      </div>

      <div className="lg:col-span-2">
        {clause && (
          <BoqClause
            clause={clause}
            csv={`Item,Description,Unit,Qty\n1,"${clause.replace(/"/g, '""')}",m,${length}`}
            fileBase={`X-Seal PS800 ${width}x${depth} joint`}
          />
        )}
        <p className="text-muted mt-6 max-w-3xl text-sm leading-relaxed">
          Quantities are width x depth x length with no waste allowance; the
          sheet&apos;s own guide to quantities uses the same arithmetic (25 x 20
          mm is 0.50 litres per metre). Joints wider than 60 mm, lap joints
          (50% movement) and traffic joints follow the method statement: send
          us the drawings.
        </p>
      </div>
    </div>
  );
}
