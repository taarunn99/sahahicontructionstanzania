"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

import type { BuildUpLayer } from "@/config/mapei-signature";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { EASE } from "@/lib/motion";
import { cn, pad } from "@/lib/utils";

import type { BuildUpController } from "./build-up-scene";

/**
 * SIGNATURE ELEMENT - Waterproofing: "The build-up".
 * The one Three.js piece on the site. A tiled waterproofing build-up the
 * visitor turns, pulls apart and puts back together; picking a layer slides
 * it out and lists the stocked products of that kind.
 *
 * Loading rules (DESIGN-CONCEPT.md section 7):
 *  - The server-rendered SVG drawing (children) always ships underneath and
 *    is what no-JS, reduced motion, Save-Data, slow connections, low-memory
 *    devices and any WebGL failure keep.
 *  - `three` is fetched by dynamic import only. On a desktop with a mouse it
 *    is fetched when the section comes within a viewport of view. On touch
 *    devices it is fetched only when the visitor asks for it with the
 *    button, so a phone on mobile data never pays for it unasked.
 *  - Nothing rotates on its own; the scene renders on demand.
 *
 * ILLUSTRATIVE: a generic tiled wet-area build-up, not a specification.
 */

type Mode = "drawing" | "loading" | "model";

type Connection = { saveData?: boolean; effectiveType?: string };

/** Devices that should keep the drawing. */
function constrained() {
  const nav = navigator as Navigator & {
    connection?: Connection;
    deviceMemory?: number;
  };
  if (nav.connection?.saveData) return true;
  if (/(^|-)(2g|3g)$/.test(nav.connection?.effectiveType ?? "")) return true;
  if (nav.deviceMemory !== undefined && nav.deviceMemory < 4) return true;
  return false;
}

const DESKTOP = "(hover: hover) and (pointer: fine) and (min-width: 64rem)";
const emptySubscribe = () => () => {};

/** "auto": load when near view. "ask": offer a button. "none": drawing only. */
const capability = () =>
  constrained() ? "none" : window.matchMedia(DESKTOP).matches ? "auto" : "ask";

export function BuildUpExplorer({
  layers,
  children,
}: {
  layers: BuildUpLayer[];
  /** The server-rendered SVG drawing. */
  children: React.ReactNode;
}) {
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const controller = useRef<BuildUpController | null>(null);
  const [mode, setMode] = useState<Mode>("drawing");
  const [failed, setFailed] = useState(false);
  const [explode, setExplode] = useState(100);
  const [active, setActive] = useState(2);
  const reduced = useReducedMotion();
  const device = useSyncExternalStore(
    emptySubscribe,
    capability,
    () => "none" as const,
  );
  const allowed = reduced || failed ? "none" : device;
  const offer = allowed === "ask";

  const load = useCallback(async () => {
    const canvas = canvasRef.current;
    if (!canvas || controller.current) return;
    setMode("loading");
    try {
      const { mountBuildUp } = await import("./build-up-scene");
      controller.current = mountBuildUp(canvas, layers, setActive);
      setMode("model");
    } catch {
      // No WebGL, or the chunk failed: the drawing stays.
      setMode("drawing");
      setFailed(true);
    }
  }, [layers]);

  // A desktop with a mouse fetches the model as the section nears view.
  useEffect(() => {
    if (allowed !== "auto") return;
    const stage = stageRef.current;
    if (!stage) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          void load();
        }
      },
      { rootMargin: "100% 0px" },
    );
    observer.observe(stage);
    return () => observer.disconnect();
  }, [allowed, load]);

  useEffect(
    () => () => {
      controller.current?.dispose();
      controller.current = null;
    },
    [],
  );

  // React state -> scene.
  useEffect(() => {
    controller.current?.setExplode(explode / 100);
  }, [explode, mode]);
  useEffect(() => {
    controller.current?.setActive(active);
  }, [active, mode]);

  const layer = layers[active];
  const isModel = mode === "model";

  return (
    <div
      translate="no"
      className="notranslate border-deep grid overflow-hidden rounded-lg border lg:grid-cols-[1.25fr_1fr]"
    >
      {/* ---- The stage ---------------------------------------------------- */}
      <div className="bg-surface relative p-5 sm:p-8">
        <p className="spec-sh text-muted flex justify-between gap-4">
          <span>Build-up · illustrative, not a specification</span>
          {isModel && <span>Drag to turn</span>}
        </p>
        <div
          ref={stageRef}
          className="relative mt-4 aspect-[5/6] sm:aspect-[6/5]"
        >
          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center transition-opacity duration-500 [&>svg]:max-h-full [&>svg]:w-auto [&>svg]:max-w-full",
              isModel && "pointer-events-none opacity-0",
            )}
            aria-hidden={isModel}
          >
            {children}
          </div>
          <canvas
            ref={canvasRef}
            aria-label="Three-dimensional model of the build-up. Drag to turn it, pick a layer to slide it out."
            className={cn(
              "absolute inset-0 h-full w-full cursor-grab touch-pan-y transition-opacity duration-700 active:cursor-grabbing",
              isModel ? "opacity-100" : "pointer-events-none opacity-0",
            )}
          />
          {offer && !isModel && (
            <button
              type="button"
              onClick={() => void load()}
              disabled={mode === "loading"}
              className="chip-sh border-deep bg-chalk absolute bottom-0 left-0 inline-flex min-h-11 items-center rounded-full border px-5 text-sm"
            >
              {mode === "loading" ? "Loading the model" : "Open it in 3D"}
            </button>
          )}
        </div>
        {isModel && (
          <div className="mt-4">
            <label className="label-sh text-muted flex items-baseline justify-between gap-4">
              <span>Assembled</span>
              <span>Pulled apart</span>
            </label>
            <input
              type="range"
              aria-label="Pull the layers apart"
              min={0}
              max={100}
              step={1}
              value={explode}
              onChange={(event) => setExplode(event.target.valueAsNumber)}
              className="accent-deep mt-1 h-11 w-full"
            />
          </div>
        )}
      </div>

      {/* ---- The layers --------------------------------------------------- */}
      <div className="bg-background border-deep flex flex-col gap-8 border-t p-6 sm:p-9 lg:border-t-0 lg:border-l">
        <div>
          <p className="label-sh text-muted">Seven layers, top to bottom</p>
          <ol className="border-deep mt-3 border-t">
            {layers.map((item, index) => (
              <li key={item.label} className="border-deep/15 border-b">
                <button
                  type="button"
                  aria-pressed={index === active}
                  onClick={() => setActive(index)}
                  onPointerEnter={(event) => {
                    if (event.pointerType === "mouse") setActive(index);
                  }}
                  className={cn(
                    "flex min-h-11 w-full items-center gap-4 px-2 text-left transition-colors duration-300",
                    index === active
                      ? "bg-deep text-chalk"
                      : "hover:bg-surface",
                  )}
                >
                  <span className="spec-sh opacity-70">
                    {pad(layers.length - index)}
                  </span>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE.out }}
          aria-live="polite"
          className="min-h-36"
        >
          <p className="font-display text-2xl leading-tight">{layer.label}</p>
          {layer.products.length > 0 ? (
            <>
              <p className="label-sh text-muted mt-4 leading-relaxed">
                In the Mapei range we stock
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {layer.products.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="chip-sh border-deep inline-flex min-h-11 items-center rounded-full border px-4 text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-muted mt-3 leading-relaxed">
              Shown for the sequence. Tell us the substrate and the finish and
              we will name the product for this layer.
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
