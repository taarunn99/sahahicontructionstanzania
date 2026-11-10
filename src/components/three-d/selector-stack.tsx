"use client";

import { useCallback, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import type { StackLayer } from "./layer-stack";
import { Drawing } from "./layer-stack";
import type { LayerStackController } from "./layer-stack-scene";
import { useLazyScene } from "./use-lazy-scene";

/**
 * The 3D build-up beside a solution selector (concrete repair, tiles). The
 * parent remounts it with `key` when the choice changes, so each situation
 * builds up from closed. The layer list is plain HTML under the model; the
 * isometric drawing stays where WebGL does not run.
 */
export function SelectorStack({
  layers,
  title,
}: {
  layers: StackLayer[];
  title: string;
}) {
  const stage = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const tags = useRef<(HTMLElement | null)[]>([]);
  const scene = useRef<LayerStackController | null>(null);
  const [active, setActive] = useState(0);

  const choose = (index: number) => {
    setActive(index);
    scene.current?.setActive(index);
  };

  const mount = useCallback(async () => {
    const { mountLayerStack } = await import("./layer-stack-scene");
    if (!canvas.current) throw new Error("no canvas");
    const controller = mountLayerStack(
      canvas.current,
      layers,
      () => tags.current,
      (index) => {
        setActive(index);
        controller.setActive(index);
      },
      0,
    );
    scene.current = controller;
    return controller;
  }, [layers]);

  const live = useLazyScene(stage, mount);

  return (
    <figure
      translate="no"
      className="notranslate border-deep/15 overflow-hidden rounded-2xl border bg-white"
    >
      <div className="bg-surface/40 relative p-3 sm:p-4">
        <p className="spec-sh flex justify-between gap-4 opacity-80">
          <span>The build-up, not to scale</span>
          {live && <span className="shrink-0">Drag to turn</span>}
        </p>
        <div
          ref={stage}
          // Room for the header, the caption and the layer list under it.
          className="stage-fit relative mt-2 aspect-[6/5] overflow-hidden [--stage-room:21rem]"
        >
          <div
            className={cn(
              "text-deep absolute inset-0 transition-opacity duration-500",
              live && "opacity-0",
            )}
          >
            <Drawing layers={layers} />
          </div>
          <canvas
            ref={canvas}
            aria-label={`Three-dimensional model of the build-up for ${title}. Drag sideways to turn it, tap a layer to slide it out.`}
            className={cn(
              "absolute inset-0 h-full w-full cursor-grab touch-pan-y transition-opacity duration-500 active:cursor-grabbing",
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
                onClick={() => choose(index)}
                style={{ opacity: 0 }}
                className="absolute top-0 left-0 will-change-transform"
              >
                <span
                  className={cn(
                    "-mt-3 -ml-2 flex size-6 items-center justify-center rounded-full text-xs font-bold shadow-md",
                    index === active
                      ? "bg-deep text-white"
                      : "text-deep bg-white",
                  )}
                >
                  {index + 1}
                </span>
              </button>
            ))}
        </div>
      </div>
      <figcaption>
        <ol className="divide-deep/10 divide-y">
          {layers.map((layer, index) => (
            <li key={layer.label}>
              <button
                type="button"
                aria-pressed={index === active}
                onClick={() => choose(index)}
                className={cn(
                  "flex min-h-11 w-full items-center gap-3 px-4 py-2 text-left text-sm transition-colors duration-300",
                  index === active ? "bg-deep text-white" : "hover:bg-surface/40",
                )}
              >
                <span className="spec-sh w-5 shrink-0 opacity-70">
                  {index + 1}
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
      </figcaption>
    </figure>
  );
}
