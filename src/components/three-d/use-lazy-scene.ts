"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type RefObject,
} from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

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

/**
 * Starts a Three.js scene when its stage scrolls into view, on phones too
 * (owner, 2026-11-07: the 3D has to pop). `three` stays a dynamic import, so it
 * is never in a page's initial JavaScript. Reduced motion, Save-Data, 2G/3G,
 * low-memory devices and any WebGL failure keep the drawing under the canvas.
 */
export function useLazyScene(
  stage: RefObject<HTMLElement | null>,
  mount: () => Promise<{ dispose: () => void }>,
) {
  const [live, setLive] = useState(false);
  const reduced = useReducedMotion();
  const mountRef = useRef(mount);
  const controller = useRef<{ dispose: () => void } | null>(null);

  useEffect(() => {
    mountRef.current = mount;
  }, [mount]);

  const start = useCallback(async () => {
    if (controller.current) return;
    try {
      controller.current = await mountRef.current();
      setLive(true);
    } catch {
      // No WebGL, or the chunk failed: the drawing stays.
    }
  }, []);

  useEffect(() => {
    const element = stage.current;
    if (!element || reduced || constrained()) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          void start();
        }
      },
      { rootMargin: "0px 0px 15% 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [reduced, stage, start]);

  useEffect(
    () => () => {
      controller.current?.dispose();
      controller.current = null;
    },
    [],
  );

  return live;
}
