"use client";

import { useLenis } from "lenis/react";
import { useEffect, useRef } from "react";

/**
 * The Sahihi mark, bottom left on every page (owner, 2026-11-06): the tick
 * on its yellow sun, lifted from the logo. The sun's four rays turn as the
 * page scrolls, the green ring fills with how far down the page you are,
 * and the tick stays upright, because a tick on its side is not a tick.
 * Tap it to go back to the top. It is on screen from the first moment.
 *
 * Cost: one passive scroll listener that writes two CSS variables inside a
 * single animation frame. No library, no canvas, transform and stroke only.
 * The geometry is the logo's own (public/brand/sahihi-mark.svg); the
 * colours are tokens (--surface is the logo yellow, --tick the logo green).
 * Under reduced motion the mark is still, and still works as a button.
 */

// The logo's own coordinates.
const CX = 28.31;
const CY = 29.87;
const RING = 17.18;
const LENGTH = 2 * Math.PI * RING;

export function ScrollMark() {
  const ref = useRef<HTMLButtonElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      el.style.setProperty("--turn", `${(y * 0.25).toFixed(1)}deg`);
      el.style.setProperty(
        "--progress",
        (max > 0 ? Math.min(1, y / max) : 0).toFixed(4),
      );
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const toTop = () => {
    if (lenis) lenis.scrollTo(0, { duration: 1.1 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      ref={ref}
      type="button"
      onClick={toTop}
      aria-label="Back to the top of the page"
      className="scroll-mark group fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-4 z-50 size-14 rounded-full sm:bottom-7 sm:left-7 sm:size-16"
    >
      <svg
        viewBox="4.723 6.281 47.176 47.176"
        aria-hidden
        className="size-full overflow-visible drop-shadow-[0_6px_14px_rgba(12,42,54,0.28)] transition-transform duration-300 group-hover:scale-110"
      >
        {/* The four rays: these turn with the scroll */}
        <g
          className="scroll-mark-rays"
          style={{ transformOrigin: `${CX}px ${CY}px` }}
          fill="var(--surface)"
        >
          <path d="M28.31 6.78 24.48 10.61h7.66Z" />
          <path d="M28.31 52.96 24.75 49.4h7.12Z" />
          <path d="M5.22 29.87 8.09 27v5.73Z" />
          <path d="M51.4 29.87 46.88 25.35v9.04Z" />
        </g>
        {/* The ring: a faint track, and the logo green filling with progress */}
        <circle
          cx="27.48"
          cy="30"
          r={RING}
          fill="none"
          stroke="var(--tick)"
          strokeOpacity="0.22"
          strokeWidth="1.22"
        />
        <circle
          className="scroll-mark-ring"
          cx="27.48"
          cy="30"
          r={RING}
          fill="none"
          stroke="var(--tick)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray={LENGTH}
          transform="rotate(-90 27.48 30)"
          style={{ ["--length" as string]: LENGTH }}
        />
        {/* The sun and the tick: upright, always */}
        <circle cx="27.48" cy="30" r="14.78" fill="var(--surface)" />
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
    </button>
  );
}
