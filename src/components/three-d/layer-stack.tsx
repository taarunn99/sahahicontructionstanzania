"use client";

/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useRef, useState } from "react";

import { cn, pad } from "@/lib/utils";

import type { LayerStackController } from "./layer-stack-scene";
import { useLazyScene } from "./use-lazy-scene";

/**
 * A product's layers as a 3D model built in house: labelled, pulled apart by a
 * slider, turned by dragging, and on a floor the top layer takes the decor the
 * visitor picks. The same list and an SVG drawing are in the HTML, so a phone
 * that keeps the drawing, and a search engine, read every layer.
 */

export type StackLayer = {
  label: string;
  /** One line from the manufacturer's document. */
  note?: string;
  color: string;
  /** Height in the model. Exaggerated on purpose. */
  height: number;
  opacity?: number;
  pattern?: "concrete" | "sand" | "granule" | "foam" | "rebar";
  /** This layer carries the decor picture. */
  decor?: boolean;
};

export type StackDecor = { code: string; src: string; label: string };

/** Isometric slab, top first, drawn from the same list as the model. */
export function Drawing({ layers }: { layers: StackLayer[] }) {
  const rowHeight = 300 / layers.length;
  return (
    <svg viewBox="0 0 400 420" className="h-full w-full" aria-hidden>
      {layers.map((layer, index) => {
        const y = 40 + index * rowHeight;
        const depth = Math.max(8, layer.height * 60);
        return (
          <g key={layer.label}>
            <path
              d={`M200 ${y} L360 ${y + 62} V${y + 62 + depth} L200 ${y + 124 + depth} L40 ${y + 62 + depth} V${y + 62} L200 ${y + 124} L360 ${y + 62}`}
              fill={layer.color}
              fillOpacity={0.75}
              stroke="currentColor"
              strokeOpacity={0.35}
            />
            <path
              d={`M200 ${y} L360 ${y + 62} L200 ${y + 124} L40 ${y + 62} Z`}
              fill={layer.color}
              fillOpacity={layer.opacity ?? 1}
              stroke="currentColor"
              strokeOpacity={0.35}
            />
          </g>
        );
      })}
    </svg>
  );
}

export function LayerStack({
  layers,
  decors,
  caption = "A labelled diagram, not to scale.",
  listLabel = "The layers, top to bottom",
  dark = false,
}: {
  layers: StackLayer[];
  decors?: StackDecor[];
  caption?: string;
  listLabel?: string;
  dark?: boolean;
}) {
  const stage = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const tags = useRef<(HTMLElement | null)[]>([]);
  const scene = useRef<LayerStackController | null>(null);
  const [active, setActive] = useState(0);
  const [explode, setExplode] = useState(100);
  const [decor, setDecor] = useState(decors?.[0]?.code);

  const mount = useCallback(async () => {
    const { mountLayerStack } = await import("./layer-stack-scene");
    if (!canvas.current) throw new Error("no canvas");
    const controller = mountLayerStack(
      canvas.current,
      layers,
      () => tags.current,
      setActive,
    );
    scene.current = controller;
    const first = decors?.[0];
    if (first) controller.setDecor(first.src);
    return controller;
  }, [decors, layers]);

  const live = useLazyScene(stage, mount);

  useEffect(() => {
    scene.current?.setExplode(explode / 100);
  }, [explode, live]);
  useEffect(() => {
    scene.current?.setActive(active);
  }, [active, live]);

  const pickDecor = (item: StackDecor) => {
    setDecor(item.code);
    scene.current?.setDecor(item.src);
  };

  const current = layers[active] ?? layers[0];

  return (
    <div
      translate="no"
      className="notranslate border-deep text-deep grid overflow-hidden rounded-2xl border bg-white lg:grid-cols-[1.4fr_1fr]"
    >
      <div
        className={cn(
          "relative min-w-0 p-4 sm:p-6",
          dark ? "bg-deep text-white" : "bg-surface",
        )}
      >
        <p className="spec-sh flex justify-between gap-4 opacity-80">
          <span>{caption}</span>
          {live && <span className="shrink-0">Drag to turn</span>}
        </p>
        <div
          ref={stage}
          className="stage-fit relative mt-3 aspect-[5/6] overflow-hidden sm:aspect-[6/5]"
        >
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-700",
              live && "opacity-0",
            )}
          >
            <Drawing layers={layers} />
          </div>
          <canvas
            ref={canvas}
            aria-label="Three-dimensional model of the layers. Drag sideways to turn it, tap a layer to slide it out."
            className={cn(
              "absolute inset-0 h-full w-full cursor-grab touch-pan-y transition-opacity duration-700 active:cursor-grabbing",
              live ? "opacity-100" : "pointer-events-none opacity-0",
            )}
          />
          {live &&
            layers.map((layer, index) => (
              <button
                key={layer.label}
                ref={(element) => {
                  tags.current[index] = element;
                }}
                type="button"
                aria-label={layer.label}
                onClick={() => setActive(index)}
                style={{ opacity: 0 }}
                className="absolute top-0 left-0 will-change-transform"
              >
                <span
                  className={cn(
                    "-mt-3 -ml-2 flex h-6 min-w-6 items-center gap-1.5 rounded-full px-1.5 text-xs font-bold whitespace-nowrap shadow-md",
                    index === active
                      ? "bg-brand text-white"
                      : "text-deep bg-white",
                  )}
                >
                  {index + 1}
                  {index === active && (
                    <span className="hidden font-semibold sm:inline">
                      {layer.label}
                    </span>
                  )}
                </span>
              </button>
            ))}
          {/* The slider lives on the stage, so the model and its control are
              always on screen together, whatever the window height (owner,
              2026-11-10: cut off on an HP laptop). */}
          {live && (
            <label className="absolute inset-x-0 bottom-0 block px-1">
              <span className="label-sh flex justify-between gap-4 opacity-80">
                <span>Together</span>
                <span>Pulled apart</span>
              </span>
              <input
                type="range"
                aria-label="Pull the layers apart"
                min={0}
                max={100}
                value={explode}
                onChange={(event) => setExplode(event.target.valueAsNumber)}
                className="accent-brand h-11 w-full"
              />
            </label>
          )}
        </div>
      </div>

      <div className="flex min-w-0 flex-col gap-6 p-5 sm:p-8">
        <div>
          <p className="label-sh text-muted">{listLabel}</p>
          <ol className="border-deep mt-3 border-t">
            {layers.map((layer, index) => (
              <li key={layer.label} className="border-deep/15 border-b">
                <button
                  type="button"
                  aria-pressed={index === active}
                  onClick={() => setActive(index)}
                  className={cn(
                    "flex min-h-11 w-full items-center gap-3 px-2 py-2 text-left transition-colors duration-300",
                    index === active
                      ? "bg-brand text-white"
                      : "hover:bg-surface",
                  )}
                >
                  <span
                    className={cn("spec-sh", index !== active && "opacity-70")}
                  >
                    {pad(index + 1)}
                  </span>
                  <span
                    aria-hidden
                    className="size-3 shrink-0 rounded-full border border-black/20"
                    style={{ backgroundColor: layer.color }}
                  />
                  <span className="min-w-0">{layer.label}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>
        {current?.note && (
          <p aria-live="polite" className="leading-relaxed">
            {current.note}
          </p>
        )}
        {decors && decors.length > 0 && (
          <div>
            <p className="label-sh text-muted">
              Put a decor on the plank:{" "}
              <span className="text-foreground">{decor}</span>
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {decors.map((item) => (
                <li key={item.code}>
                  <button
                    type="button"
                    aria-pressed={decor === item.code}
                    aria-label={`Decor ${item.code}, ${item.label}`}
                    onClick={() => pickDecor(item)}
                    className={cn(
                      "block size-11 overflow-hidden rounded-lg border-2 transition-transform duration-300 hover:scale-105",
                      decor === item.code
                        ? "border-brand"
                        : "border-transparent",
                    )}
                  >
                    <img
                      src={item.src}
                      alt={`Decor ${item.code}`}
                      width={44}
                      height={44}
                      loading="lazy"
                      className="size-full object-cover"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
