"use client";

import { useEffect, useRef, useState } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

import type { TileFloorController } from "./tile-floor-scene";

/**
 * The home hero's interactive floor (owner, 2026-11-06: "do something with
 * three js or something creative").
 *
 * What ships in the HTML is a drawn floor: a 6 x 6 grid of tiles tipped
 * into an isometric view with CSS transforms. No request, no script, so
 * the first paint is never waiting on anything.
 *
 * The Three.js floor (tile-floor-scene.ts) replaces it later: on the
 * visitor's first pointer move, touch, key press or scroll, or after a few
 * idle seconds, whichever comes first, and only when the hero is on
 * screen. `three` is a dynamic import, so it is never in the page's
 * initial JavaScript. Reduced motion, Save-Data, 2G/3G, low-memory devices
 * and any WebGL failure keep the drawn floor.
 */

const DRAWN = 6;
// Which drawn tiles carry a brand colour. Fixed, so it never flickers.
const YELLOW = new Set([3, 14, 22, 31]);
const GREEN = new Set([8, 19, 27]);

type Connection = { saveData?: boolean; effectiveType?: string };

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

export function TileFloor({ className }: { className?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [live, setLive] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || constrained()) return;
    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return;

    let controller: TileFloorController | null = null;
    let cancelled = false;
    let started = false;
    let onScreen = true;
    const events = ["pointermove", "touchstart", "keydown", "scroll"] as const;

    const start = async () => {
      if (started || !onScreen) return;
      started = true;
      cleanupTriggers();
      try {
        const { mountTileFloor } = await import("./tile-floor-scene");
        if (cancelled) return;
        controller = mountTileFloor(canvas);
        setLive(true);
      } catch {
        // No WebGL, or the chunk failed: the drawn floor stays.
      }
    };

    const timer = window.setTimeout(start, 3500);
    events.forEach((name) =>
      window.addEventListener(name, start, { passive: true }),
    );
    const observer = new IntersectionObserver((entries) => {
      onScreen = entries.some((entry) => entry.isIntersecting);
    });
    observer.observe(root);
    function cleanupTriggers() {
      window.clearTimeout(timer);
      events.forEach((name) => window.removeEventListener(name, start));
    }

    return () => {
      cancelled = true;
      cleanupTriggers();
      observer.disconnect();
      controller?.dispose();
    };
  }, [reduced]);

  return (
    <div
      ref={rootRef}
      aria-hidden
      className={cn("relative aspect-square w-full", className)}
    >
      {/* The drawn floor: in the server HTML, replaced once the 3D one is up */}
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-opacity duration-700",
          live && "opacity-0",
        )}
      >
        <div className="tile-floor-drawn grid w-[62%] grid-cols-6 gap-[3%]">
          {Array.from({ length: DRAWN * DRAWN }, (_, i) => (
            <span
              key={i}
              className={cn(
                "aspect-square rounded-[6%]",
                YELLOW.has(i)
                  ? "bg-surface"
                  : GREEN.has(i)
                    ? "bg-line"
                    : "bg-chalk",
              )}
            />
          ))}
        </div>
      </div>
      <canvas
        ref={canvasRef}
        className={cn(
          "absolute inset-0 h-full w-full touch-pan-y transition-opacity duration-700",
          live ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />
    </div>
  );
}
