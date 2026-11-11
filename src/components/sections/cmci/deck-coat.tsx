"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { BoqClause } from "@/components/sections/product/boq-clause";
import type { DeckController } from "@/components/three-d/deck-scene";
import { useLazyScene } from "@/components/three-d/use-lazy-scene";
import {
  D780,
  DECK_GROUPS,
  DECK_ROWS,
  hours,
  inches,
  toMm,
} from "@/config/deck-thickness";
import { cn } from "@/lib/utils";

/**
 * "How thick on the deck and the beam?" Pick the product group and the rating
 * row, read the two thicknesses straight from UL Design D780's table, see
 * them on a 3D deck and beam, take away a BOQ clause. Nothing is computed:
 * every figure is a table entry (src/config/deck-thickness.ts).
 */

const CHIP =
  "inline-flex min-h-11 items-center rounded-full border px-4 text-sm transition-colors";
const on = "bg-deep text-chalk border-deep";
const off = "border-deep/30 hover:border-deep bg-white";

export function DeckCoat({ initial }: { initial?: string } = {}) {
  const [group, setGroup] = useState(
    DECK_GROUPS.find((g) => g.products.some((p) => p.slug === initial)) ??
      DECK_GROUPS[0],
  );
  const [product, setProduct] = useState(
    group.products.find((p) => p.slug === initial) ?? group.products[0],
  );
  const [rowIndex, setRowIndex] = useState(4); // 2 / 2 / 2 h

  const row = DECK_ROWS[rowIndex];
  const deckIn = row.deck[group.item];
  const beamIn = row.beam[group.item];
  const deckMm = toMm(deckIn);
  const beamMm = toMm(beamIn);

  const stage = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const scene = useRef<DeckController | null>(null);
  const mount = useCallback(async () => {
    const { mountDeck } = await import("@/components/three-d/deck-scene");
    if (!canvas.current) throw new Error("no canvas");
    const controller = mountDeck(canvas.current);
    scene.current = controller;
    return controller;
  }, []);
  const live = useLazyScene(stage, mount);
  useEffect(() => {
    scene.current?.set(deckMm, beamMm);
  }, [live, deckMm, beamMm]);

  const clause = `Spray-applied cementitious fireproofing to composite steel deck and supporting beams: ${product.name}, ${group.density}, applied in accordance with ${D780.design} for a ${hours(row.restrained).replace(" h", " hour")} restrained assembly rating, ${hours(row.unrestrained).replace(" h", " hour")} unrestrained assembly rating and ${hours(row.beamRating).replace(" h", " hour")} unrestrained beam rating. Minimum thickness ${deckMm} mm (${deckIn} in) to the underside of the fluted steel deck and ${beamMm} mm (${beamIn} in) to the beams (${D780.beamMin} minimum), on steel free of dirt, loose scale and oil, as the manufacturer's data sheet. Thickness to be confirmed by the fire engineer and the authority having jurisdiction.`;

  const maxIn = Math.max(
    ...DECK_ROWS.flatMap((r) => [
      inches(r.deck[group.item]),
      inches(r.beam[group.item]),
    ]),
  );

  return (
    <div
      translate="no"
      className="notranslate grid gap-10 lg:grid-cols-2 lg:gap-14"
    >
      <div className="min-w-0">
        <fieldset>
          <legend className="label-sh text-muted">Product</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {DECK_GROUPS.flatMap((g) =>
              g.products.map((p) => (
                <button
                  key={p.slug}
                  type="button"
                  aria-pressed={p.slug === product.slug}
                  onClick={() => {
                    setGroup(g);
                    setProduct(p);
                  }}
                  className={cn(CHIP, p.slug === product.slug ? on : off)}
                >
                  {p.name}
                </button>
              )),
            )}
          </div>
          <p className="text-muted mt-2 text-xs">
            Item {group.item} of the design: {group.density}.
          </p>
        </fieldset>

        <fieldset className="mt-7">
          <legend className="label-sh text-muted">
            Rating: restrained assembly / unrestrained assembly / unrestrained
            beam
          </legend>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {DECK_ROWS.map((r, i) => (
              <button
                key={i}
                type="button"
                aria-pressed={i === rowIndex}
                onClick={() => setRowIndex(i)}
                className={cn(
                  CHIP,
                  "justify-center tabular-nums",
                  i === rowIndex ? on : off,
                )}
              >
                {hours(r.restrained)} / {hours(r.unrestrained)} /{" "}
                {hours(r.beamRating)}
              </button>
            ))}
          </div>
        </fieldset>

        <div
          role="status"
          aria-live="polite"
          className="bg-deep text-chalk mt-8 grid gap-6 rounded-2xl p-6 sm:grid-cols-2 sm:p-8"
        >
          <div>
            <p className="label-sh opacity-80">On the deck</p>
            <p className="font-display mt-2 text-5xl font-extrabold tabular-nums sm:text-6xl">
              {deckMm} mm
            </p>
            <p className="mt-1 opacity-80">{deckIn} in minimum</p>
          </div>
          <div>
            <p className="label-sh opacity-80">On the beam</p>
            <p className="font-display mt-2 text-5xl font-extrabold tabular-nums sm:text-6xl">
              {beamMm} mm
            </p>
            <p className="mt-1 opacity-80">{beamIn} in minimum</p>
          </div>
          <p className="text-sm opacity-80 sm:col-span-2">
            {product.name} · {hours(row.restrained)} /{" "}
            {hours(row.unrestrained)} / {hours(row.beamRating)}
          </p>
        </div>

        <ul className="mt-5 space-y-2" aria-label="Thickness for each rating row">
          {DECK_ROWS.map((r, i) => (
            <li key={i} className="flex items-center gap-3 text-sm tabular-nums">
              <span className="w-28 shrink-0 text-xs sm:w-32 sm:text-sm">
                {hours(r.restrained)}/{hours(r.unrestrained)}/
                {hours(r.beamRating)}
              </span>
              <span className="flex flex-1 flex-col gap-1">
                {(["deck", "beam"] as const).map((part) => (
                  <span
                    key={part}
                    className="bg-deep/10 relative h-2 overflow-hidden rounded-full"
                  >
                    <span
                      className={cn(
                        "absolute inset-y-0 left-0 rounded-full transition-[width] duration-500",
                        i === rowIndex ? "bg-(--pop-red)" : "bg-deep/45",
                      )}
                      style={{
                        width: `${(inches(r[part][group.item]) / maxIn) * 100}%`,
                      }}
                    />
                  </span>
                ))}
              </span>
              <span className="w-24 shrink-0 text-right text-xs sm:text-sm">
                {toMm(r.deck[group.item])} / {toMm(r.beam[group.item])} mm
              </span>
            </li>
          ))}
        </ul>
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
              <svg viewBox="0 0 300 220" className="h-4/5 w-4/5">
                <rect x={10} y={20} width={280} height={30} className="fill-deep/35" />
                <path
                  d="M10 50 h40 l15 30 h30 l15 -30 h40 l15 30 h30 l15 -30 h40 l15 30 h30 l15 -30 v-0"
                  className="fill-none stroke-deep"
                  strokeWidth={4}
                />
                <path
                  d="M10 58 h40 l15 30 h30 l15 -30 h40 l15 30 h30 l15 -30 h40 l15 30 h30 l15 -30"
                  className="fill-none stroke-deep"
                  strokeWidth={Math.max(2, deckMm * 0.4)}
                  strokeDasharray="6 4"
                  opacity={0.6}
                />
                <path
                  d="M110 80 h80 v8 h-34 v70 h34 v8 h-80 v-8 h34 v-70 h-34 z"
                  className="fill-deep"
                />
                <path
                  d="M110 80 h80 v8 h-34 v70 h34 v8 h-80 v-8 h34 v-70 h-34 z"
                  className="fill-none stroke-deep"
                  strokeWidth={Math.max(2, beamMm * 0.4)}
                  strokeDasharray="6 4"
                  opacity={0.6}
                />
              </svg>
            </div>
            <canvas
              ref={canvas}
              className="absolute inset-0 h-full w-full touch-pan-y"
              aria-label="A fluted steel deck with concrete topping on a steel beam, the sprayed coat under the deck and around the beam at the table thickness. Drag to turn."
              role="img"
            />
            <p className="bg-deep text-chalk font-display pointer-events-none absolute top-4 left-4 rounded-full px-4 py-1.5 text-sm font-extrabold tabular-nums">
              deck {deckMm} mm · beam {beamMm} mm
            </p>
          </div>
          <figcaption className="text-muted mt-3 text-sm">
            A {D780.beamMin} beam under a 3 in fluted deck, coat and steel to
            the same scale; the front is left bare so both can be seen. Drag to
            turn.
          </figcaption>
        </figure>
      </div>

      <div className="lg:col-span-2">
        <BoqClause
          clause={clause}
          csv={`Item,Description,Unit\n1,"${clause.replace(/"/g, '""')}",m2`}
          fileBase={`${product.name} D780 deck and beam`}
        />
        <p className="text-muted mt-6 max-w-3xl text-sm leading-relaxed">
          Read straight from the thickness tables printed in {D780.design}{" "}
          (ANSI/UL 263), Items 5 and 5A, inches converted to millimetres and
          rounded up. For planning and BOQs only: the full design, the fire
          engineer and the authority having jurisdiction decide the thickness on
          the job. Z-146 and metal lath, joists and other deck depths follow
          the design&apos;s other items; the whole design is below.
        </p>
      </div>
    </div>
  );
}
