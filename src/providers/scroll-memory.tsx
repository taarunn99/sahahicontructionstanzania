"use client";

import type Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Where a page opens (owner, 2026-11-06):
 *  - a link to another page: the top of that page, always;
 *  - back or forward, or a reload: where the visitor left that page.
 *
 * The browser's own restoration is switched off because it cannot work here:
 * it fires before the App Router has rendered the page it is restoring to, and
 * Lenis keeps its own idea of the scroll position, so the old position carried
 * over to the new page. Pages also grow after they mount (a pinned section adds
 * height, images load), so a restore keeps trying briefly until the page is
 * tall enough, and gives up at once if the visitor starts scrolling.
 */

const STORE = "sahihi-scroll";
const SETTLE_MS = 1500;

const pageKey = () => window.location.pathname + window.location.search;

function loadSaved(): Record<string, number> {
  try {
    return JSON.parse(sessionStorage.getItem(STORE) ?? "{}");
  } catch {
    return {};
  }
}

export function ScrollMemory({
  getLenis,
}: {
  getLenis: () => Lenis | undefined;
}) {
  const pathname = usePathname();
  const saved = useRef<Record<string, number>>({});
  /** True from a back or forward until the page it leads to is showing. */
  const returning = useRef(false);
  const shownKey = useRef<string | null>(null);
  const cancelRestore = useRef<() => void>(() => {});

  const jump = (top: number) => {
    const lenis = getLenis();
    if (lenis) {
      lenis.resize();
      lenis.scrollTo(top, { immediate: true, force: true });
    } else {
      window.scrollTo({ top, behavior: "instant" });
    }
  };

  useEffect(() => {
    saved.current = loadSaved();
    window.history.scrollRestoration = "manual";

    const onScroll = () => {
      // Mid back or forward the address is already the page being returned
      // to, while the old page is still on screen: its position is not news.
      if (returning.current) return;
      saved.current[pageKey()] = window.scrollY;
    };
    const onPop = () => {
      // A back or forward inside one page (an anchor) is not a page change.
      if (pageKey() !== shownKey.current) returning.current = true;
    };
    const persist = () => {
      try {
        sessionStorage.setItem(STORE, JSON.stringify(saved.current));
      } catch {
        // Private mode: the position is simply not remembered across a reload.
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("popstate", onPop);
    window.addEventListener("pagehide", persist);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("popstate", onPop);
      window.removeEventListener("pagehide", persist);
    };
  }, []);

  useEffect(() => {
    cancelRestore.current();
    const key = pageKey();
    const firstLoad = shownKey.current === null;
    shownKey.current = key;

    let restore = returning.current;
    if (firstLoad) {
      const [entry] = performance.getEntriesByType(
        "navigation",
      ) as PerformanceNavigationTiming[];
      restore = entry?.type === "reload" || entry?.type === "back_forward";
      // A fresh arrival from outside: leave the browser and any #anchor alone.
      if (!restore) {
        saved.current[key] = window.scrollY;
        return;
      }
    }
    returning.current = false;

    // A link to a place on the new page: the App Router scrolls to the anchor.
    if (!restore && window.location.hash) return;

    // Opened afresh, this visit replaces whatever was remembered for the page:
    // no scroll event fires if the visitor reads the top and moves on.
    if (!restore) saved.current[key] = 0;

    const target = restore ? (saved.current[key] ?? 0) : 0;
    jump(target);

    // Keep at it while the page finishes growing, or (for the top of a new
    // page) in case anything scrolled during this frame.
    let frame = 0;
    const started = performance.now();
    const stop = () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("wheel", stop);
      window.removeEventListener("touchstart", stop);
      window.removeEventListener("keydown", stop);
    };
    const settle = () => {
      if (Math.abs(window.scrollY - target) > 2) jump(target);
      if (performance.now() - started < (restore ? SETTLE_MS : 150)) {
        frame = requestAnimationFrame(settle);
      } else {
        stop();
      }
    };
    window.addEventListener("wheel", stop, { passive: true });
    window.addEventListener("touchstart", stop, { passive: true });
    window.addEventListener("keydown", stop);
    frame = requestAnimationFrame(settle);
    cancelRestore.current = stop;
    return stop;
    // `jump` reads the Lenis instance at call time.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
}
