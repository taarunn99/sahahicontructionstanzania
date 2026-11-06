"use client";

import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";

/**
 * One shelf of products: drag or swipe it sideways, two-finger scroll on a
 * trackpad, or use the arrows. A hairline fills as it travels. Every card is
 * server-rendered and passed in as children, so all of them are in the HTML.
 */
export function ProductShelf({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  const [viewport, embla] = useEmblaCarousel(
    { align: "start", dragFree: true, containScroll: "trimSnaps" },
    [WheelGesturesPlugin()],
  );
  const bar = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!embla) return;
    const update = () => {
      const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
      if (bar.current)
        bar.current.style.transform = `scaleX(${0.1 + progress * 0.9})`;
    };
    update();
    embla.on("scroll", update).on("reInit", update);
    return () => {
      embla.off("scroll", update).off("reInit", update);
    };
  }, [embla]);

  const arrow =
    "border-deep inline-flex size-11 items-center justify-center rounded-full border transition-transform duration-300 hover:scale-110 active:scale-95";

  return (
    <div className="min-w-0">
      <div
        ref={viewport}
        className="-mx-(--gutter) cursor-grab overflow-hidden px-(--gutter) active:cursor-grabbing lg:mx-0 lg:px-0"
      >
        <ul aria-label={label} className="flex touch-pan-y gap-4">
          {children}
        </ul>
      </div>
      <div className="mt-6 flex items-center gap-5">
        <div className="bg-deep/15 h-px flex-1 overflow-hidden">
          <span
            ref={bar}
            className="bg-deep block h-px origin-left"
            style={{ transform: "scaleX(0.1)" }}
          />
        </div>
        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            aria-label={`Back along ${label}`}
            onClick={() => embla?.scrollPrev()}
            className={arrow}
          >
            <ArrowLeft aria-hidden className="size-4" />
          </button>
          <button
            type="button"
            aria-label={`Further along ${label}`}
            onClick={() => embla?.scrollNext()}
            className={arrow}
          >
            <ArrowRight aria-hidden className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
