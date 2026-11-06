"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import type { ModelViewerController } from "./model-viewer-scene";

/**
 * A product you can turn in your hand (owner, 2026-11-06: "hover it 360
 * like a gun in a game"). The photograph is what loads with the page. The
 * 3D model, a GLB file that can weigh a megabyte or more, is fetched only
 * when the visitor presses "Turn it in 3D": nobody pays for it unasked,
 * and the page's speed is the photograph's.
 *
 * Drag to turn it any way round, pinch or scroll to zoom. If WebGL is not
 * there or the file fails, the photograph simply stays.
 *
 * HONESTY: the models are generated from the manufacturer's catalogue
 * photograph. The side the camera never saw is the generator's estimate,
 * and the caption under the viewer says so.
 */
export function ModelViewer({
  model,
  poster,
  alt,
  className,
  preload = false,
}: {
  /** Public path of the GLB file. */
  model: string;
  poster: { src: string; width: number; height: number };
  alt: string;
  className?: string;
  /** True when the photograph is the first screen's largest paint. */
  preload?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const controller = useRef<ModelViewerController | null>(null);
  const [state, setState] = useState<"photo" | "loading" | "model" | "failed">(
    "photo",
  );

  useEffect(
    () => () => {
      controller.current?.dispose();
      controller.current = null;
    },
    [],
  );

  const open = async () => {
    const canvas = canvasRef.current;
    if (!canvas || controller.current) return;
    setState("loading");
    try {
      const { mountModelViewer } = await import("./model-viewer-scene");
      controller.current = await mountModelViewer(canvas, model);
      setState("model");
    } catch {
      setState("failed");
    }
  };

  const live = state === "model";

  return (
    <div className={cn("relative aspect-square w-full", className)}>
      <Image
        src={poster.src}
        alt={alt}
        fill
        preload={preload}
        sizes="(min-width: 64rem) 42vw, 100vw"
        className={cn(
          "object-contain p-6 transition-opacity duration-500 sm:p-10",
          live && "opacity-0",
        )}
      />
      <canvas
        ref={canvasRef}
        aria-label={`${alt}: a 3D model. Drag to turn it, pinch or scroll to zoom.`}
        className={cn(
          "absolute inset-0 h-full w-full cursor-grab touch-none transition-opacity duration-500 active:cursor-grabbing",
          live ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />
      {!live && state !== "failed" && (
        <button
          type="button"
          onClick={open}
          disabled={state === "loading"}
          className="bg-deep text-chalk absolute bottom-4 left-1/2 inline-flex min-h-11 -translate-x-1/2 items-center gap-2.5 rounded-full px-5 text-sm font-semibold whitespace-nowrap"
        >
          <svg
            viewBox="0 0 20 20"
            aria-hidden
            className="size-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 2.5 16.5 6.25v7.5L10 17.5l-6.5-3.750v-7.5L10 2.5Z" />
            <path d="M3.5 6.25 10 10l6.5-3.750M10 10v7.5" />
          </svg>
          {state === "loading" ? "Loading the model" : "Turn it in 3D"}
        </button>
      )}
      {live && (
        <p className="spec-sh bg-chalk/85 absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1.5 whitespace-nowrap">
          Drag to turn · pinch or scroll to zoom
        </p>
      )}
    </div>
  );
}
