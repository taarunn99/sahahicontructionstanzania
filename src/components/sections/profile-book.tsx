"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
} from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { profileChapters, profilePages } from "@/config/profile";
import { cn } from "@/lib/utils";

const WIDE = "(min-width: 48rem)";
const TURN_MS = 760;

function subscribe(callback: () => void) {
  const media = window.matchMedia(WIDE);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

type Turn = { dir: 1 | -1; from: number; to: number; wide: boolean };

/**
 * The company profile as a book (owner, 2026-11-09: "good book like
 * animation"). Desktop: two-page spreads, the cover alone on the right like a
 * closed book; a leaf turns on its spine. Phones: one page at a time, the same
 * turn. Buttons, arrow keys, a swipe, or a tap on either half turn the page;
 * the chapter chips jump. Pages are 820 px WebP (about 40 KB); only the pages
 * in view and their neighbours load. Reduced motion: pages change instantly.
 */
export function ProfileBook() {
  const wide = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(WIDE).matches,
    () => true,
  );
  const reduced = useReducedMotion();
  const total = profilePages.length;
  // Desktop: `page` is the RIGHT page of the spread (even: 0, 2, 4 ... total).
  // Phones: `page` is the page shown.
  const [page, setPage] = useState(0);
  const [rawTurn, setTurn] = useState<Turn | null>(null);
  const [opened, setOpened] = useState(false);
  const stage = useRef<HTMLDivElement>(null);
  const swipe = useRef<number | null>(null);

  // A turn started in the other layout (the window was resized) is dropped.
  const turn = rawTurn && rawTurn.wide === wide ? rawTurn : null;
  const step = wide ? 2 : 1;
  const last = wide ? (total % 2 === 0 ? total : total - 1) : total - 1;
  const current = wide ? page - (page % 2) : Math.min(page, total - 1);

  // Preload the pages the next turn either way will need.
  useEffect(() => {
    const around = wide
      ? [current - 3, current - 2, current + 1, current + 2, current + 3]
      : [current - 1, current + 1];
    for (const n of around) {
      if (n >= 0 && n < total) new window.Image().src = profilePages[n].src;
    }
  }, [current, wide, total]);

  // The cover swings in the first time the book scrolls into view.
  useEffect(() => {
    const element = stage.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOpened(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const go = useCallback(
    (to: number) => {
      const target = Math.max(0, Math.min(last, wide ? to - (to % 2) : to));
      if (turn || target === current) return;
      if (reduced) {
        setPage(target);
        return;
      }
      setTurn({
        dir: target > current ? 1 : -1,
        from: current,
        to: target,
        wide,
      });
    },
    [current, last, reduced, turn, wide],
  );

  const finish = () => {
    if (turn) setPage(turn.to);
    setTurn(null);
  };

  const onKey = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(current + step);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(current - step);
    }
  };

  const onDown = (event: PointerEvent<HTMLDivElement>) => {
    swipe.current = event.clientX;
  };
  const onUp = (event: PointerEvent<HTMLDivElement>) => {
    const start = swipe.current;
    swipe.current = null;
    if (start === null) return;
    const dx = event.clientX - start;
    if (Math.abs(dx) > 40) {
      go(current + (dx < 0 ? step : -step));
      return;
    }
    // A tap: right half forward, left half back.
    const box = event.currentTarget.getBoundingClientRect();
    go(current + (event.clientX > box.left + box.width / 2 ? step : -step));
  };

  // What each layer shows, before, during and after a turn.
  let left = current - 1;
  let right = current;
  let leaf: { front: number; back: number; from: number; to: number } | null =
    null;
  if (turn && wide) {
    if (turn.dir === 1) {
      left = turn.from - 1;
      right = turn.to;
      leaf = { front: turn.from, back: turn.to - 1, from: 0, to: -180 };
    } else {
      left = turn.to - 1;
      right = turn.from;
      leaf = { front: turn.to, back: turn.from - 1, from: -180, to: 0 };
    }
  } else if (turn) {
    right = turn.dir === 1 ? turn.to : turn.from;
    leaf =
      turn.dir === 1
        ? { front: turn.from, back: -1, from: 0, to: -180 }
        : { front: turn.to, back: -1, from: -180, to: 0 };
  }

  const shown = wide ? Math.min(current + 1, total) : current + 1;
  const closed = wide && current === 0 && !turn;

  return (
    <div translate="no">
      <div
        ref={stage}
        role="region"
        aria-roledescription="book"
        aria-label="Sahihi company profile 2026"
        tabIndex={0}
        onKeyDown={onKey}
        onPointerDown={onDown}
        onPointerUp={onUp}
        className="focus-visible:ring-brand/40 mx-auto max-w-5xl touch-pan-y md:max-w-[min(64rem,calc((100svh-12rem)*1.414))] max-md:max-w-[min(100%,calc((100svh-12rem)*0.707))] outline-none select-none [perspective:2200px] focus-visible:ring-4"
      >
        <div
          className={cn(
            "relative mx-auto aspect-[820/1160] w-full max-w-md transition-transform duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] [transform-style:preserve-3d] md:aspect-[1640/1160] md:max-w-none",
            opened || reduced
              ? "[transform:rotateX(0deg)]"
              : "[transform:rotateX(14deg)_translateY(24px)_scale(0.96)]",
            closed && "md:translate-x-[-25%]",
          )}
        >
          {/* The spine shadow, only between two open pages */}
          {wide && !closed && (
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-1/2 z-20 w-16 -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.28)_50%,transparent)]"
            />
          )}

          {wide && <Sheet n={left} className="left-0 w-1/2 rounded-l-md" />}
          <Sheet
            n={right}
            className={cn(
              "rounded-r-md",
              wide ? "left-1/2 w-1/2" : "left-0 w-full rounded-l-md",
            )}
          />

          {leaf && (
            <div
              key={`${turn?.from}-${turn?.to}`}
              onAnimationEnd={finish}
              style={
                {
                  "--leaf-from": `${leaf.from}deg`,
                  "--leaf-to": `${leaf.to}deg`,
                  animationDuration: `${TURN_MS}ms`,
                } as CSSProperties
              }
              className={cn(
                "book-leaf absolute inset-y-0 z-30 origin-left [transform-style:preserve-3d]",
                wide ? "left-1/2 w-1/2" : "left-0 w-full",
              )}
            >
              <Face n={leaf.front} />
              <Face n={leaf.back} back />
            </div>
          )}
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-5xl flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => go(current - step)}
          disabled={current === 0}
          aria-label="Previous page"
          className="border-deep text-deep hover:bg-surface grid size-12 place-items-center rounded-full border bg-white transition-colors disabled:opacity-35"
        >
          ←
        </button>
        <p
          className="spec-sh text-deep min-w-28 text-center tabular-nums"
          aria-live="polite"
        >
          {wide && current > 0 && current < total
            ? `${String(current).padStart(2, "0")}-${String(current + 1).padStart(2, "0")}`
            : String(shown).padStart(2, "0")}{" "}
          / {total}
        </p>
        <button
          type="button"
          onClick={() => go(current + step)}
          disabled={current >= last}
          aria-label="Next page"
          className="border-deep bg-deep text-chalk grid size-12 place-items-center rounded-full border transition-transform hover:scale-105 disabled:opacity-35"
        >
          →
        </button>
      </div>

      <ul
        className="mx-auto mt-5 flex max-w-3xl flex-wrap justify-center gap-2"
        aria-label="Chapters"
      >
        {profileChapters.map((chapter) => (
          <li key={chapter.label}>
            <button
              type="button"
              onClick={() => {
                const index = chapter.page - 1;
                go(wide ? index + (index % 2) : index);
              }}
              className="border-deep/25 text-deep hover:bg-surface min-h-11 rounded-full border bg-white px-4 text-sm font-semibold transition-colors"
            >
              {chapter.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** A page lying flat in the book. Out of range: nothing (the book's edge). */
function Sheet({ n, className }: { n: number; className?: string }) {
  const page = profilePages[n];
  if (!page) return null;
  return (
    <div
      className={cn(
        "absolute inset-y-0 overflow-hidden bg-white shadow-[0_30px_60px_-30px_rgba(12,42,54,0.6)]",
        className,
      )}
    >
      <Image
        src={page.src}
        alt={page.alt}
        fill
        unoptimized
        sizes="(min-width: 48rem) 50vw, 100vw"
        className="object-cover"
        priority={n === 0}
      />
    </div>
  );
}

/** One side of the turning leaf. */
function Face({ n, back = false }: { n: number; back?: boolean }) {
  const page = profilePages[n];
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden bg-white [backface-visibility:hidden]",
        back && "[transform:rotateY(180deg)]",
      )}
    >
      {page && (
        <Image
          src={page.src}
          alt={page.alt}
          fill
          unoptimized
          sizes="(min-width: 48rem) 50vw, 100vw"
          className="object-cover"
        />
      )}
      {/* The light across a page as it lifts */}
      <span
        aria-hidden
        className={cn(
          "book-leaf-shade pointer-events-none absolute inset-0",
          back
            ? "bg-[linear-gradient(270deg,rgba(0,0,0,0.25),transparent_40%)]"
            : "bg-[linear-gradient(90deg,rgba(0,0,0,0.2),transparent_35%)]",
        )}
      />
    </div>
  );
}
