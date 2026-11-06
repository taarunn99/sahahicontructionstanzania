"use client";

import { useRef } from "react";

import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

/**
 * Hero parallax (handoff 9.6): the photograph drifts and grows slightly as
 * the section scrolls away, scrubbed to the scroll position. No intro
 * animation: at the top of the page the image is exactly where the server
 * rendered it. Transform only. Skipped under reduced motion.
 */
export function Parallax({
  children,
  className,
  drift = 12,
  scale = 1.05,
}: {
  children: React.ReactNode;
  className?: string;
  /** How far the content drifts down, in percent of its height. */
  drift?: number;
  scale?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(el, {
          yPercent: drift,
          scale,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={cn("absolute inset-0", className)}>
      {children}
    </div>
  );
}
