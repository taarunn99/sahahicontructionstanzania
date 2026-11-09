"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, type PointerEvent } from "react";

import { cn } from "@/lib/utils";

/**
 * A link card that shows where it leads (owner, 2026-11-09). Every card carries
 * the destination's picture in a round window. With a mouse, hovering pops that
 * window out as a large circle that follows the pointer, and "Open" slides in;
 * keyboard focus pops it at the card's end. On phones the round picture is
 * always on the card: the same cue, no hover needed. CSS transforms only.
 */
export function PeekLink({
  href,
  label,
  sub,
  picture,
  className,
}: {
  href: string;
  label: string;
  sub?: string;
  picture?: string;
  className?: string;
}) {
  const card = useRef<HTMLAnchorElement>(null);

  const move = (event: PointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType !== "mouse" || !card.current) return;
    const box = card.current.getBoundingClientRect();
    card.current.style.setProperty("--peek-x", `${event.clientX - box.left}px`);
    card.current.style.setProperty("--peek-y", `${event.clientY - box.top}px`);
  };

  return (
    <Link
      ref={card}
      href={href}
      onPointerMove={move}
      className={cn(
        "group border-deep/20 text-deep hover:border-deep focus-visible:border-deep relative isolate flex min-h-20 items-center justify-between gap-4 rounded-2xl border bg-white py-3 pr-3 pl-5 transition-[border-color,box-shadow,transform] duration-300 [--peek-x:calc(100%-2.6rem)] [--peek-y:50%] hover:z-10 hover:shadow-[0_18px_40px_-18px_rgba(12,42,54,0.45)] focus-visible:z-10",
        className,
      )}
    >
      <span className="min-w-0">
        <span className="block leading-snug font-bold">{label}</span>
        {sub && (
          <span className="text-muted block text-sm leading-snug">{sub}</span>
        )}
        <span className="text-brand mt-0.5 flex h-0 items-center gap-1.5 overflow-hidden text-xs font-bold tracking-wide uppercase opacity-0 transition-all duration-300 group-hover:h-4 group-hover:opacity-100 group-focus-visible:h-4 group-focus-visible:opacity-100">
          Open
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </span>

      {/* The round window: always on the card. */}
      <span
        aria-hidden
        className="bg-deep text-chalk relative grid size-14 shrink-0 place-items-center overflow-hidden rounded-full shadow-md ring-2 ring-white transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:-rotate-6"
      >
        {picture ? (
          <Image
            src={picture}
            alt={`${label}: a picture from that page`}
            fill
            sizes="56px"
            className="object-cover"
          />
        ) : (
          <span className="text-xl">→</span>
        )}
      </span>

      {/* The popup lens: follows the mouse, pops at the end on keyboard focus. */}
      {picture && (
        <span
          aria-hidden
          className="pointer-events-none absolute top-[var(--peek-y)] left-[var(--peek-x)] -z-0 hidden size-40 -translate-x-1/2 -translate-y-[115%] scale-0 overflow-hidden rounded-full opacity-0 shadow-[0_24px_50px_-12px_rgba(12,42,54,0.55)] ring-4 ring-white transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100 motion-reduce:transition-none [@media(hover:hover)]:block"
        >
          <Image
            src={picture}
            alt={`${label}: a picture from that page`}
            fill
            sizes="160px"
            className="scale-125 object-cover transition-transform duration-700 group-hover:scale-100"
          />
        </span>
      )}
    </Link>
  );
}
