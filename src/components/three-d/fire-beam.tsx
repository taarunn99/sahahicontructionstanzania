"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import type { FireBeamController } from "./fire-beam-scene";
import { useLazyScene } from "./use-lazy-scene";

/**
 * "Turn up the fire". Bare steel beside coated steel, in 3D, built in house. The
 * drawing under the canvas is what reduced motion, Save-Data and any WebGL
 * failure keep. No temperature or time is shown because none is measured here.
 */

const stageText = (heat: number) =>
  heat < 20
    ? "No fire yet. Both halves are the same steel."
    : heat < 55
      ? "The bare steel takes the heat directly. The coating takes it on its face."
      : heat < 85
        ? "The bare half is glowing. The steel under the coating stays dark."
        : "Full fire. This is the job a fire rated coating is there to do.";

export function FireBeam({ className }: { className?: string }) {
  const stage = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const scene = useRef<FireBeamController | null>(null);
  const [heat, setHeat] = useState(82);

  const mount = useCallback(async () => {
    const { mountFireBeam } = await import("./fire-beam-scene");
    if (!canvas.current) throw new Error("no canvas");
    const controller = mountFireBeam(canvas.current);
    scene.current = controller;
    return controller;
  }, []);

  const live = useLazyScene(stage, mount);

  useEffect(() => {
    scene.current?.setHeat(heat / 100);
  }, [heat, live]);

  return (
    <figure translate="no" className={cn("notranslate min-w-0", className)}>
      <div
        ref={stage}
        className="stage-fit relative aspect-[4/3] w-full overflow-hidden [--stage-room:11rem] sm:aspect-[16/9]"
      >
        <div
          aria-hidden
          className={cn(
            "absolute inset-0 flex items-center justify-center transition-opacity duration-700",
            live && "opacity-0",
          )}
        >
          <svg viewBox="0 0 640 300" className="h-full w-full">
            <path
              d="M60 110h260v22h-96v70h96v22H60v-22h96v-70H60z"
              fill="#ff7a1a"
            />
            <path
              d="M60 110h260v22h-96v70h96v22H60v-22h96v-70H60z"
              fill="url(#beam-heat)"
            />
            <path
              d="M320 100h262v38h-94v58h94v38H320v-38h94v-58h-94z"
              fill="#bdb9ae"
            />
            <defs>
              <linearGradient id="beam-heat" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#ffd27a" />
                <stop offset="1" stopColor="#c81e00" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <canvas
          ref={canvas}
          aria-label="Three-dimensional model of a steel beam over a fire. The bare half glows, the coated half stays dark. Drag sideways to turn it."
          className={cn(
            "absolute inset-0 h-full w-full cursor-grab touch-pan-y transition-opacity duration-700 active:cursor-grabbing",
            live ? "opacity-100" : "pointer-events-none opacity-0",
          )}
        />
        <span className="spec-sh absolute top-3 left-3 rounded-full bg-black/55 px-3 py-1 text-white">
          Bare steel
        </span>
        <span className="spec-sh absolute top-3 right-3 rounded-full bg-black/55 px-3 py-1 text-white">
          Coated steel
        </span>
      </div>
      {live && (
        <label className="mt-3 block">
          <span className="label-sh flex justify-between gap-4 text-white">
            <span>No fire</span>
            <span>Turn up the fire</span>
          </span>
          <input
            type="range"
            aria-label="Turn up the fire"
            min={0}
            max={100}
            value={heat}
            onChange={(event) => setHeat(event.target.valueAsNumber)}
            className="heat-range h-11 w-full"
          />
        </label>
      )}
      <figcaption className="mt-2 text-sm leading-relaxed text-white/85">
        {live && <span className="block font-semibold">{stageText(heat)}</span>}
        <span className="block">
          An illustration of the idea, not a fire test.
        </span>
      </figcaption>
    </figure>
  );
}
