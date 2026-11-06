"use client";

import { useRef } from "react";

import { gsap, useGSAP } from "@/lib/gsap";

/**
 * Wraps the build-up drawing (a server-rendered SVG) and hands it to the
 * visitor:
 *  - scroll: the layers start closed up as one finished floor and expand
 *    into the labelled build-up as the drawing travels up the screen,
 *    scrubbed to the scroll position (owner, 2026-11-06: "expand instead of
 *    sitting on top of each other"). Each label fades in as its layer
 *    separates, so the end state is fully legible and stays that way;
 *  - pointer: the layers shear slightly towards the cursor, deeper layers
 *    less, so the stack reads as having depth (mouse only).
 *
 * The server HTML is the expanded drawing, so no JS and reduced motion both
 * get the readable version. The drawing is hidden on phones.
 *
 * Scroll writes `y`, the pointer writes `x`: two different properties, so
 * the two never fight.
 */

// Must match GAP in build-up-drawing.tsx: the distance between two layers.
const GAP = 30;

export function BuildUpScrub({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;
      const mm = gsap.matchMedia();
      mm.add(
        "(min-width: 64rem) and (prefers-reduced-motion: no-preference)",
        () => {
          const layers = gsap.utils.toArray<SVGGElement>("[data-layer]", root);
          const labels = gsap.utils.toArray<SVGGElement>("[data-label]", root);
          const last = layers.length - 1;

          const timeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: root,
              start: "top 95%",
              end: "top 40%",
              scrub: 0.6,
            },
          });
          layers.forEach((layer, index) => {
            timeline.fromTo(
              layer,
              { y: (last - index) * GAP },
              { y: 0, duration: 1 },
              0,
            );
          });
          // Slab first, tile last: the labels arrive as the stack opens upward.
          timeline.fromTo(
            labels,
            { opacity: 0 },
            { opacity: 1, duration: 0.3, stagger: { each: 0.08, from: "end" } },
            0.25,
          );

          if (!window.matchMedia("(hover: hover)").matches) return;

          const shear = layers.map((layer) =>
            gsap.quickTo(layer, "x", { duration: 0.9, ease: "sh-out" }),
          );
          const onMove = (event: PointerEvent) => {
            const box = root.getBoundingClientRect();
            const offset =
              (event.clientX - (box.left + box.width / 2)) / box.width;
            shear.forEach((to, index) => to(offset * (last - index) * 5));
          };
          const section = root.closest("section");
          section?.addEventListener("pointermove", onMove);
          return () => section?.removeEventListener("pointermove", onMove);
        },
      );
    },
    { scope: ref },
  );

  return <div ref={ref}>{children}</div>;
}
