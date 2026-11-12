"use client";

import { useEffect, useState } from "react";

/**
 * The loud half of the offer (owner, 2026-11-11: "a flashy, continuous,
 * blinking, tacky flash sale ... very loud and noticeable ... both for
 * mobile and for desktop"). Three pieces, all in the logo's solid colours:
 *
 * - FlashTab: a tab fixed to the left edge of the screen that blinks Red /
 *   Yellow once a second and jumps to the offer. It steps aside while the
 *   offer band itself is on screen.
 * - FlashTicker: a Red strip of words running across the top of the band.
 * - OfferCountdown: days, hours, minutes and seconds to the offer's last
 *   day, Dar es Salaam time.
 *
 * The blink is one colour change a second, well under the three flashes a
 * second that WCAG 2.3.1 sets as the limit. Under reduced motion nothing
 * blinks, runs or ticks visibly (globals.css), and all of it still reads.
 * No price anywhere (src/config/offers.ts).
 */

export type FlashCopy = {
  tab: string;
  bubble: { word: string; line: string; cta: string; close: string };
  ticker: string[];
  units: [string, string, string, string];
  ended: string;
};

/** The comic burst's outline: a jagged oval, built once (viewBox 220 x 150). */
const BURST = (() => {
  const points: string[] = [];
  const n = 26;
  for (let i = 0; i < n; i += 1) {
    const a = (i / n) * Math.PI * 2;
    const r = i % 2 === 0 ? 1 : 0.8 + ((i * 7) % 5) * 0.025;
    points.push(
      `${(110 + Math.cos(a) * 100 * r).toFixed(1)},${(75 + Math.sin(a) * 66 * r).toFixed(1)}`,
    );
  }
  return points.join(" ");
})();

export type BubbleCopy = {
  word: string;
  line: string;
  cta: string;
  close: string;
};

/**
 * The comic "SALE!" burst itself: CSS 3D, an ink extrusion of stacked
 * outlines behind a yellow face, words lifted off the face. It sways on its
 * own and tilts towards the pointer. Used twice: popping out of the fixed tab
 * (FlashTab), and standing in the offer band itself (owner, 2026-11-11: "i
 * wanted it to be tagged here", pointing at the band's left side).
 */
export function ComicBurst({
  id,
  href,
  bubble,
  cta,
  large = false,
  className = "",
}: {
  /** Unique per instance: the SVG pattern id. */
  id: string;
  href: string;
  bubble: BubbleCopy;
  /** Pill text; the bubble's own call to action when left out. */
  cta?: string;
  /** Bigger type for a burst wider than about 16rem. */
  large?: boolean;
  className?: string;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const dots = `comic-dots-${id}`;
  const word = large
    ? "text-[3.4rem] sm:text-[5.5rem] lg:text-[6.5rem]"
    : "text-[2.1rem] sm:text-5xl";
  const line = large
    ? "mt-2 text-sm sm:text-lg lg:text-xl"
    : "mt-1 text-[0.62rem] sm:mt-1.5 sm:text-xs";
  const pill = large
    ? "mt-2 px-3 py-1 text-xs sm:mt-3 sm:px-4 sm:text-base"
    : "mt-1 px-2 py-0.5 text-[0.58rem] sm:mt-1.5 sm:px-2.5 sm:text-[0.7rem]";
  return (
    <div className={`comic-sway ${className}`}>
      <a
        href={href}
        onPointerMove={(event) => {
          const box = event.currentTarget.getBoundingClientRect();
          setTilt({
            x: ((event.clientY - box.top) / box.height - 0.5) * -26,
            y: ((event.clientX - box.left) / box.width - 0.5) * 34,
          });
        }}
        onPointerLeave={() => setTilt({ x: 0, y: 0 })}
        className="comic-face group relative block aspect-[22/15] w-full [transform-style:preserve-3d]"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        {/* Ink extrusion: the outline repeated behind the face. */}
        {[14, 11, 8, 5, 2].map((z) => (
          <svg
            key={z}
            aria-hidden
            viewBox="0 0 220 150"
            className="absolute inset-0 h-full w-full"
            style={{
              transform: `translate3d(${z * 0.45}px, ${z * 0.45}px, -${z}px)`,
            }}
          >
            <polygon points={BURST} style={{ fill: "var(--deep)" }} />
            <polygon
              points="18,98 -14,124 30,110"
              style={{ fill: "var(--deep)" }}
            />
          </svg>
        ))}
        <svg
          aria-hidden
          viewBox="0 0 220 150"
          className="absolute inset-0 h-full w-full overflow-visible"
        >
          <defs>
            <pattern
              id={dots}
              width="7"
              height="7"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="3.5"
                cy="3.5"
                r="1.3"
                style={{ fill: "var(--deep)", opacity: 0.16 }}
              />
            </pattern>
          </defs>
          <polygon
            points="18,98 -14,124 30,110"
            style={{
              fill: "var(--surface)",
              stroke: "var(--deep)",
              strokeWidth: 4,
              strokeLinejoin: "round",
            }}
          />
          <polygon
            points={BURST}
            style={{
              fill: "var(--surface)",
              stroke: "var(--deep)",
              strokeWidth: 4,
              strokeLinejoin: "round",
            }}
          />
          <polygon points={BURST} style={{ fill: `url(#${dots})` }} />
        </svg>
        <span
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
          style={{ transform: "translateZ(26px)" }}
        >
          <span
            className={`comic-word font-display -rotate-6 leading-none font-extrabold uppercase italic ${word}`}
          >
            {bubble.word}
          </span>
          <span
            className={`text-deep font-display leading-tight font-extrabold ${line}`}
          >
            {bubble.line}
          </span>
          <span
            className={`bg-deep text-surface rounded-full font-bold transition-transform group-hover:scale-110 ${pill}`}
          >
            {cta ?? bubble.cta} →
          </span>
        </span>
      </a>
    </div>
  );
}

/**
 * The tab, and a comic "SALE!" burst that pops out of it (owner, 2026-11-11:
 * "a 3D element ... like a comic dialogue ... comes out to the left ... just
 * has a link ... interactive"). The burst is CSS 3D: an ink extrusion of
 * stacked outlines behind a yellow face, words lifted off the face. It sways
 * on its own, tilts towards the pointer, pops again every few seconds, and
 * takes the visitor to the offer. A close button folds it back into the
 * tab for the rest of the visit. Both step aside while the offer is on screen.
 */
export function FlashTab({
  label,
  target,
  bubble,
}: {
  label: string;
  target: string;
  bubble: BubbleCopy;
}) {
  const [hidden, setHidden] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const band = document.getElementById(target);
    if (!band) return;
    const io = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.25 },
    );
    io.observe(band);
    let wasClosed = false;
    try {
      wasClosed = sessionStorage.getItem("flash-bubble") === "closed";
    } catch {}
    const t = window.setTimeout(() => setClosed(wasClosed), 0);
    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, [target]);

  const close = () => {
    setClosed(true);
    try {
      sessionStorage.setItem("flash-bubble", "closed");
    } catch {}
  };

  const showBubble = !hidden && !closed;

  return (
    <>
      <a
        href={`#${target}`}
        aria-hidden={hidden}
        tabIndex={hidden ? -1 : undefined}
        className={`flash-blink font-display ring-deep fixed top-1/2 left-0 z-40 flex w-6 -translate-y-1/2 items-center justify-center rounded-r-lg py-3 text-[0.62rem] leading-none font-extrabold tracking-[0.2em] uppercase shadow-2xl ring-2 transition-[translate,opacity] duration-500 [writing-mode:vertical-rl] sm:w-9 sm:rounded-r-xl sm:py-5 sm:text-xs print:hidden ${
          hidden
            ? "pointer-events-none -translate-x-full opacity-0"
            : "translate-x-0 opacity-100"
        }`}
      >
        <span className="rotate-180">{label}</span>
      </a>

      <div
        aria-hidden={!showBubble}
        inert={!showBubble}
        className={`comic-pop fixed top-1/2 left-7 z-40 w-40 -translate-y-[115%] [perspective:700px] sm:left-11 sm:w-56 print:hidden ${
          showBubble ? "comic-pop-in" : "comic-pop-out"
        }`}
      >
        <ComicBurst id="tab" href={`#${target}`} bubble={bubble} />
        <button
          type="button"
          onClick={close}
          aria-label={bubble.close}
          className="bg-deep text-chalk absolute -top-1 right-1 flex size-7 items-center justify-center rounded-full text-sm leading-none font-bold shadow-lg sm:right-3"
        >
          ×
        </button>
      </div>
    </>
  );
}

export function FlashTicker({ words }: { words: string[] }) {
  // Two copies so the strip loops without a seam (marquee-sh moves -50%).
  const run = [...words, ...words, ...words];
  return (
    <div
      aria-hidden
      className="text-chalk font-display overflow-hidden bg-(--pop-red) py-2.5 text-sm font-extrabold tracking-[0.14em] uppercase sm:py-3 sm:text-base"
    >
      <div className="marquee-sh flash-ticker flex w-max">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {run.map((word, i) => (
              <span key={`${copy}-${i}`} className="flex items-center">
                <span className="px-5">{word}</span>
                <span className="flash-spin text-surface">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const pad = (n: number) => String(n).padStart(2, "0");

/** Offer's last day ends at midnight in Dar es Salaam (UTC+3). */
export function OfferCountdown({
  until,
  units,
  ended,
  compact = false,
}: {
  until: string;
  units: FlashCopy["units"];
  ended: string;
  /** Small boxes, no top margin: the strip on product pages. */
  compact?: boolean;
}) {
  const end = new Date(`${until}T23:59:59+03:00`).getTime();
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    const first = window.setTimeout(tick, 0);
    const id = window.setInterval(tick, 1000);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(id);
    };
  }, []);

  const left = now === null ? null : Math.max(0, end - now);
  if (left === 0)
    return (
      <p className={compact ? "font-semibold" : "mt-6 font-semibold"}>
        {ended}
      </p>
    );

  const parts =
    left === null
      ? ["--", "--", "--", "--"]
      : [
          String(Math.floor(left / 86_400_000)),
          pad(Math.floor(left / 3_600_000) % 24),
          pad(Math.floor(left / 60_000) % 60),
          pad(Math.floor(left / 1000) % 60),
        ];

  return (
    <div
      translate="no"
      className={compact ? "flex gap-1.5 sm:gap-2" : "mt-6 flex gap-2 sm:gap-3"}
      role="timer"
    >
      {parts.map((value, i) => (
        <div
          key={units[i]}
          className={
            compact
              ? "bg-deep text-chalk flex min-w-11 flex-col items-center rounded-lg px-1.5 py-1 sm:min-w-14"
              : "bg-deep text-chalk flex min-w-16 flex-col items-center rounded-xl px-3 py-2 sm:min-w-20"
          }
        >
          <span
            className={
              compact
                ? "font-display text-base font-extrabold tabular-nums sm:text-xl"
                : "font-display text-2xl font-extrabold tabular-nums sm:text-3xl"
            }
          >
            {value}
          </span>
          <span
            className={
              compact
                ? "text-[0.55rem] tracking-[0.12em] uppercase"
                : "text-[0.7rem] tracking-[0.14em] uppercase"
            }
          >
            {units[i]}
          </span>
        </div>
      ))}
    </div>
  );
}
