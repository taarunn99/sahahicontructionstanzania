"use client";

/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import type { LineupController } from "@/components/three-d/lineup-scene";
import { constrained } from "@/components/three-d/use-lazy-scene";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn, pad } from "@/lib/utils";

/**
 * The sale page's first screen, opened step by step (owner, 2026-11-11: "a
 * loader that loads from 0% to 100% ... the Sahihi logo revolves as a circle
 * ... step by step and something more like an onboarding and loading kind
 * of process ... takes you to a new place other than the website"):
 *
 *   1. shutter: a Signal Yellow plate drops over the Ink stage (CSS, from
 *      the first paint, no JavaScript needed to start);
 *   2. loading: the Sahihi mark revolves while the ring fills and the count
 *      climbs from 0 to 100. The count is REAL (the scene's LoadingManager)
 *      but paced: it never runs ahead of the textures and never faster than
 *      about 2.5 seconds, so the steps are seen even on a fast connection.
 *      A caption names each step;
 *   3. done: the mark pops;
 *   4. opening: the plate lifts like a curtain on the lineup.
 *
 * The first paint is static: the plate, the mark, "0%" and the H1 are in
 * the server HTML. Reduced motion: no pacing, no shutter travel, a short
 * fade. No WebGL or Save-Data: the loader closes and the static strip of
 * packs underneath is the page. Without JavaScript the plate never shows.
 */

export type SaleItem = {
  name: string;
  type: string;
  href: string | null;
  src: string | null;
};

type Phase = "shutter" | "loading" | "done" | "opening" | "open";

// The logo's own geometry (public/brand/sahihi-mark.svg), as scroll-mark.tsx.
const RING = 17.18;
const RING_LENGTH = 2 * Math.PI * RING;
const SHUTTER_MS = 600; // the plate's drop
const PACE_MS = 2500; // the count's minimum journey from 0 to 100
const HOLD_MS = 450; // the pop at 100
const OPEN_MS = 900; // the plate's lift

const STEPS: [number, string][] = [
  [0, "Opening the offer"],
  [30, "Bringing in the packs"],
  [72, "Lighting the stage"],
  [100, "Ready"],
];

export function SaleStage({
  items,
  heading,
  until,
}: {
  items: SaleItem[];
  heading: string;
  until: string;
}) {
  const stage = useRef<HTMLElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const scene = useRef<LineupController | null>(null);
  const router = useRouter();
  const reduced = useReducedMotion();

  const [phase, setPhase] = useState<Phase>("shutter");
  const [shown, setShown] = useState(0); // the paced count, 0..100
  const [loadedName, setLoadedName] = useState<string | null>(null);
  const [live, setLive] = useState(false);
  const [front, setFront] = useState(0);
  const [auto, setAuto] = useState(true);

  const real = useRef(0); // real progress, 0..100
  const ready = useRef(false);
  const phaseRef = useRef<Phase>("shutter");
  const setPhaseBoth = (next: Phase) => {
    phaseRef.current = next;
    setPhase(next);
  };

  const open = useCallback(
    (instant: boolean) => {
      if (instant) {
        setShown(100);
        setPhaseBoth("open");
        return;
      }
      setPhaseBoth("done");
      window.setTimeout(() => {
        setPhaseBoth("opening");
        window.setTimeout(() => setPhaseBoth("open"), OPEN_MS);
      }, HOLD_MS);
    },
    [],
  );

  const mount = useCallback(async () => {
    const el = canvas.current;
    if (!el) throw new Error("no canvas");
    real.current = 6; // the scene's own code is on its way
    const { mountLineup } = await import("@/components/three-d/lineup-scene");
    real.current = 14;
    const pictured = items.filter((item) => item.src);
    const controller = mountLineup(
      el,
      items.map((item) => ({ name: item.name, src: item.src })),
      {
        onProgress: (n, total) => {
          real.current = 14 + Math.round((n / Math.max(1, total)) * 86);
          setLoadedName(pictured[n - 1]?.name ?? null);
        },
        onReady: () => {
          real.current = 100;
          ready.current = true;
          setLive(true);
        },
        onFront: setFront,
        onPick: (index) => {
          const href = items[index]?.href;
          if (href) router.push(href);
          else
            document
              .getElementById("order")
              ?.scrollIntoView({ behavior: "smooth" });
        },
        onInteract: () => setAuto(false),
      },
    );
    scene.current = controller;
    return controller;
  }, [items, router]);

  // The opening: shutter, then the paced count, then the curtain.
  useEffect(() => {
    if (reduced || constrained()) {
      // No WebGL or motion budget: try the scene quietly, show the strip now.
      const t = window.setTimeout(() => {
        open(true);
        if (!constrained())
          void mount().catch(() => {
            /* the strip stays */
          });
      }, 0);
      return () => {
        window.clearTimeout(t);
        scene.current?.dispose();
        scene.current = null;
      };
    }
    let frame = 0;
    let failed = false;
    const started = performance.now();
    const shutterDone = window.setTimeout(() => {
      setPhaseBoth("loading");
      void mount().catch((error: unknown) => {
        console.warn("sale lineup: falling back to the strip", error);
        failed = true;
      });
    }, SHUTTER_MS);
    const tick = (now: number) => {
      frame = 0;
      if (phaseRef.current === "loading") {
        if (failed) {
          open(true);
          return;
        }
        const t = Math.max(0, now - started - SHUTTER_MS);
        const eased = 1 - Math.pow(1 - Math.min(1, t / PACE_MS), 2.2);
        const paced = Math.round(eased * 100);
        const next = Math.min(real.current, paced);
        setShown(next);
        if (next >= 100 && ready.current) {
          open(false);
          return;
        }
      }
      if (phaseRef.current === "shutter" || phaseRef.current === "loading")
        frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      window.clearTimeout(shutterDone);
      cancelAnimationFrame(frame);
      scene.current?.dispose();
      scene.current = null;
    };
    // Runs once per page open; the items are fixed for the page's life.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  // Pointer parallax (mouse only) and the arrow keys.
  useEffect(() => {
    if (!live) return;
    const pointer = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      scene.current?.setPointer(
        (event.clientX / window.innerWidth) * 2 - 1,
        -((event.clientY / window.innerHeight) * 2 - 1),
      );
    };
    const keys = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") scene.current?.step(1);
      else if (event.key === "ArrowLeft") scene.current?.step(-1);
      else return;
      event.preventDefault();
    };
    const el = stage.current;
    window.addEventListener("pointermove", pointer, { passive: true });
    el?.addEventListener("keydown", keys);
    return () => {
      window.removeEventListener("pointermove", pointer);
      el?.removeEventListener("keydown", keys);
    };
  }, [live]);

  const current = items[front] ?? items[0];
  const isOpen = phase === "open";
  const plateUp = phase === "opening" || phase === "open";
  const step = STEPS.filter(([at]) => shown >= at).at(-1)?.[1] ?? STEPS[0][1];

  return (
    <section
      ref={stage}
      tabIndex={-1}
      aria-label="The products on offer"
      className="bg-deep text-chalk relative h-[calc(100svh-4rem)] overflow-hidden outline-none sm:h-[calc(100svh-5rem)]"
    >
      {/* Without JavaScript there is no loader and the strip is the page. */}
      <noscript>
        <style>{`.sale-loader{display:none}.sale-strip{opacity:1!important}`}</style>
      </noscript>
      {/* Static layer: the packs as a strip. The no-WebGL view and what a
          search engine reads. Kept at opacity 0 under the loader so the
          loader's own figure and the H1 are the first paint. */}
      <div
        aria-hidden={live}
        inert={live}
        data-lenis-prevent
        className={cn(
          "sale-strip absolute inset-x-0 top-1/2 flex -translate-y-1/2 snap-x snap-mandatory gap-6 overflow-x-auto px-[10vw] py-6 transition-opacity duration-700 [scrollbar-width:none]",
          (live || !isOpen) && "opacity-0",
          live && "pointer-events-none",
        )}
      >
        {items.map((item) => {
          const inner = item.src ? (
            <img
              src={item.src}
              alt={`${item.name} pack`}
              width={220}
              height={220}
              loading="lazy"
              decoding="async"
              className="size-40 object-contain sm:size-56"
            />
          ) : (
            <span className="bg-surface text-deep font-display flex size-40 items-center justify-center rounded-2xl p-4 text-center text-lg leading-tight font-extrabold sm:size-56">
              {item.name}
            </span>
          );
          return item.href ? (
            <a
              key={item.name}
              href={item.href}
              className="shrink-0 snap-center"
              aria-label={item.name}
            >
              {inner}
            </a>
          ) : (
            <span key={item.name} className="shrink-0 snap-center">
              {inner}
            </span>
          );
        })}
      </div>

      <canvas
        ref={canvas}
        aria-label="The packs on offer in a row under a spotlight. Drag, swipe or use the arrow keys to bring one to the centre, tap it to open its page."
        role="img"
        className={cn(
          "absolute inset-0 h-full w-full cursor-grab touch-pan-y transition-opacity duration-700 active:cursor-grabbing",
          live ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* The words over the scene. The H1 is static from the first paint. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between gap-4 p-4 sm:p-8">
        <div className="max-w-lg">
          <p className="label-sh text-surface">Flash sale · until {until}</p>
          <h1 className="font-display mt-2 text-3xl leading-[0.95] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {heading}
          </h1>
        </div>
        <p className="font-display shrink-0 text-right text-2xl font-extrabold tabular-nums sm:text-4xl">
          {pad(front + 1)}
          <span className="opacity-50"> / {pad(items.length)}</span>
        </p>
      </div>

      <div
        className={cn(
          // Clear of the fixed scroll mark (bottom left) and WhatsApp button
          // (bottom right) on every page.
          "pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 pr-20 pb-5 pl-20 transition-opacity duration-700 sm:p-8 sm:pr-28 sm:pb-8 sm:pl-28",
          live ? "opacity-100" : "opacity-0",
        )}
      >
        <div aria-live="polite" className="min-w-0">
          <p className="label-sh text-surface">{current?.type}</p>
          <p className="font-display mt-1 truncate text-2xl font-extrabold sm:text-4xl">
            {current?.name}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {current?.href ? (
              <a
                href={current.href}
                className="bg-surface text-deep pointer-events-auto inline-flex min-h-11 items-center rounded-full px-5 text-sm font-semibold"
              >
                Open the product →
              </a>
            ) : (
              <a
                href="#order"
                className="bg-surface text-deep pointer-events-auto inline-flex min-h-11 items-center rounded-full px-5 text-sm font-semibold"
              >
                Ask for this one →
              </a>
            )}
            <button
              type="button"
              aria-label="Previous pack"
              onClick={() => scene.current?.step(-1)}
              className="border-chalk/40 pointer-events-auto flex size-11 items-center justify-center rounded-full border text-lg"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next pack"
              onClick={() => scene.current?.step(1)}
              className="border-chalk/40 pointer-events-auto flex size-11 items-center justify-center rounded-full border text-lg"
            >
              →
            </button>
          </div>
        </div>
        <p className="hidden max-w-44 text-right text-xs leading-snug opacity-70 sm:block">
          {auto ? "Playing on its own. " : ""}
          Drag or swipe to slide the row, arrow keys too. Tap the centre pack
          to open it.
        </p>
      </div>

      {/* The loader: the yellow plate that drops, counts, and lifts. */}
      <div
        aria-hidden={isOpen}
        className={cn(
          "sale-loader pointer-events-none absolute inset-0 z-20",
          isOpen && "invisible",
        )}
      >
        <div
          className={cn(
            "bg-surface text-deep sale-plate absolute inset-0 flex flex-col items-center justify-center gap-5 sm:gap-7",
            plateUp && "sale-plate-up",
          )}
        >
          <div
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={shown}
            aria-label="Loading the offer"
            className={cn(
              "sale-loader-body flex flex-col items-center gap-5 sm:gap-7",
              phase === "done" && "sale-pop",
            )}
          >
            <div className="relative size-36 sm:size-48">
              <svg
                viewBox="4.723 6.281 47.176 47.176"
                className="size-full overflow-visible"
                aria-hidden
              >
                <g
                  className="sale-rays"
                  style={{ transformOrigin: "28.31px 29.87px" }}
                  fill="var(--deep)"
                >
                  <path d="M28.31 6.78 24.48 10.61h7.66Z" />
                  <path d="M28.31 52.96 24.75 49.4h7.12Z" />
                  <path d="M5.22 29.87 8.09 27v5.73Z" />
                  <path d="M51.4 29.87 46.88 25.35v9.04Z" />
                </g>
                <circle
                  cx="27.48"
                  cy="30"
                  r={RING}
                  fill="none"
                  stroke="var(--deep)"
                  strokeOpacity="0.18"
                  strokeWidth="1.4"
                />
                <circle
                  cx="27.48"
                  cy="30"
                  r={RING}
                  fill="none"
                  stroke="var(--tick)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={RING_LENGTH}
                  strokeDashoffset={RING_LENGTH * (1 - shown / 100)}
                  transform="rotate(-90 27.48 30)"
                  className="transition-[stroke-dashoffset] duration-150 ease-linear"
                />
                <circle cx="27.48" cy="30" r="14.78" fill="white" />
                <path
                  d="M46.54 12.4 27.62 27.24 18.11 21.74 27.41 36.62Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="3.31"
                  strokeLinejoin="round"
                />
                <path
                  d="M46.54 12.4 27.62 27.24 18.11 21.74 27.41 36.62Z"
                  fill="var(--tick)"
                />
              </svg>
            </div>
            <p className="font-display text-7xl leading-none font-extrabold tabular-nums sm:text-9xl">
              {shown}
              <span className="text-3xl sm:text-5xl">%</span>
            </p>
            <ol
              aria-label="Steps"
              className="label-sh flex flex-wrap items-center justify-center gap-x-4 gap-y-1 px-6 text-center"
            >
              {STEPS.slice(0, 3).map(([at, label], i) => (
                <li
                  key={label}
                  className={cn(
                    "flex items-center gap-2 transition-opacity duration-300",
                    shown >= at ? "opacity-100" : "opacity-35",
                  )}
                >
                  <span
                    className={cn(
                      "flex size-5 items-center justify-center rounded-full text-[0.6rem] font-extrabold",
                      shown >= at ? "bg-deep text-surface" : "border-deep border",
                    )}
                  >
                    {i + 1}
                  </span>
                  {label}
                </li>
              ))}
            </ol>
            <p className="h-5 text-sm opacity-70" aria-live="off">
              {step === "Ready" ? "Ready" : (loadedName ?? step)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
