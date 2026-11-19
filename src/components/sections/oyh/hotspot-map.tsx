"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { cn, pad } from "@/lib/utils";

/**
 * A render from OYH's below-grade manual with its numbered pins laid over
 * it (owner, 2026-11-19: "hover over 1 2 3 4 points with real time data").
 * Hover a pin to peek, tap or press Enter to hold it; the panel beside the
 * picture names the layer, the OYH product under it and the values OYH
 * prints for that product. Every pin is also a chip in the numbered list
 * under the picture, so the keyboard, a screen reader and a crawler get
 * the whole build-up; this component is server-rendered, so all of it is
 * in the HTML. Pin positions are percentages measured off the PDF
 * (scripts/measure-pins.mjs). On phones the render scrolls sideways at a
 * width that keeps 24 pins apart. Nothing animates beyond a colour.
 */

export type HotspotProduct = {
  slug: string;
  name: string;
  type: string;
  /** The product's own page, where it has one; otherwise the anchor on this page. */
  href: string;
  external: boolean;
  values: { item: string; value: string }[];
};

export type HotspotEntry = {
  n: number;
  layer: string;
  products: HotspotProduct[];
};

export type HotspotMapProps = {
  id: string;
  title: string;
  page: number;
  picture: { src: string; width: number; height: number; alt: string };
  pins: { n: number; x: number; y: number }[];
  entries: HotspotEntry[];
};

export function HotspotMap({
  id,
  title,
  page,
  picture,
  pins,
  entries,
}: HotspotMapProps) {
  const [held, setHeld] = useState<number | null>(entries[0]?.n ?? null);
  const [peek, setPeek] = useState<number | null>(null);
  const strip = useRef<HTMLDivElement>(null);
  const figure = useRef<HTMLElement>(null);
  const pinRefs = useRef<Map<number, HTMLSpanElement>>(new Map());
  const shown = peek ?? held;
  const entry = entries.find((item) => item.n === shown) ?? null;
  const panelId = `${id}-panel`;

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPeek(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const hold = (n: number) => {
    setHeld(n);
    setPeek(null);
    const pin = pinRefs.current.get(n);
    const box = strip.current;
    if (pin && box && box.scrollWidth > box.clientWidth) {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      pin.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  /**
   * The pin nearest the pointer, within reach. OYH prints some pins a few
   * millimetres apart, so the dots are not buttons of their own (two 44 px
   * targets would overlap and the top one would win): the picture takes
   * the pointer and the nearest pin answers. The chips under the picture
   * are the real controls for the keyboard and screen readers.
   */
  const nearest = (clientX: number, clientY: number) => {
    const el = figure.current;
    if (!el) return null;
    const box = el.getBoundingClientRect();
    const reach = 26;
    let best: { n: number; d: number } | null = null;
    for (const pin of pins) {
      const dx = box.left + (pin.x / 100) * box.width - clientX;
      const dy = box.top + (pin.y / 100) * box.height - clientY;
      const d = Math.hypot(dx, dy);
      if (d <= reach && (!best || d < best.d)) best = { n: pin.n, d };
    }
    return best?.n ?? null;
  };

  return (
    <div
      translate="no"
      className="notranslate border-deep grid overflow-hidden rounded-2xl border lg:grid-cols-[1.4fr_1fr]"
    >
      {/* ---- The render with the pins ------------------------------------ */}
      <div className="min-w-0 bg-white">
        <p className="spec-sh text-muted flex justify-between gap-4 px-4 pt-4 sm:px-5">
          <span>OYH&apos;s render · manual page {page}</span>
          <span>Hover or tap a number</span>
        </p>
        <div
          ref={strip}
          data-lenis-prevent
          className="overflow-x-auto overscroll-x-contain px-4 pt-3 pb-4 sm:px-5"
        >
          <figure
            ref={figure}
            data-map={id}
            className="relative min-w-[44rem] cursor-pointer sm:min-w-0"
            onPointerMove={(event) => {
              if (event.pointerType === "mouse")
                setPeek(nearest(event.clientX, event.clientY));
            }}
            onPointerLeave={() => setPeek(null)}
            onClick={(event) => {
              const n = nearest(event.clientX, event.clientY);
              if (n !== null) hold(n);
            }}
          >
            <Image
              src={picture.src}
              alt={picture.alt}
              width={picture.width}
              height={picture.height}
              sizes="(min-width: 64rem) 56vw, 100vw"
              className="h-auto w-full rounded-lg"
            />
            {/* The dots, placed in percent of the picture; decorative, the
                picture takes the pointer and the chips take the keyboard. */}
            {pins.map((pin, index) => {
              const on = pin.n === shown;
              return (
                <span
                  key={`${pin.n}-${index}`}
                  ref={(el) => {
                    if (el && !pinRefs.current.has(pin.n))
                      pinRefs.current.set(pin.n, el);
                  }}
                  aria-hidden
                  data-pin={pin.n}
                  style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                  className={cn(
                    "spec-sh absolute flex size-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 text-[0.7rem] leading-none font-bold transition-colors duration-200 motion-reduce:transition-none",
                    on
                      ? "bg-deep border-chalk text-chalk z-10 scale-110"
                      : "bg-brand border-white text-white",
                  )}
                >
                  {pin.n}
                </span>
              );
            })}
          </figure>
        </div>

        {/* The legend as chips: keyboard and phone path, and the full list. */}
        <ol
          className="flex flex-wrap gap-2 px-4 pb-5 sm:px-5"
          aria-label={`${title}: the build-up`}
        >
          {entries.map((item) => (
            <li key={item.n}>
              <button
                type="button"
                aria-pressed={item.n === held}
                aria-controls={panelId}
                onClick={() => hold(item.n)}
                className={cn(
                  "chip-sh border-deep inline-flex min-h-10 items-center gap-2 rounded-full border px-3 text-xs sm:text-sm",
                  item.n === shown && "bg-deep text-chalk",
                )}
              >
                <span className="spec-sh">{pad(item.n)}</span>
                {item.layer}
              </button>
            </li>
          ))}
        </ol>
      </div>

      {/* ---- The panel: the layer, the product, the printed values ------- */}
      <div
        id={panelId}
        aria-live="polite"
        className="bg-surface border-deep flex min-w-0 flex-col border-t p-5 sm:p-7 lg:border-t-0 lg:border-l"
      >
        {entry ? (
          <>
            <p className="label-sh text-muted">
              Layer {pad(entry.n)} of {entries.length}
            </p>
            <h3 className="font-display mt-3 text-2xl leading-tight">
              {entry.layer}
            </h3>
            {entry.products.length === 0 ? (
              <p className="text-muted mt-4 leading-relaxed">
                Part of the structure, not an OYH product.
              </p>
            ) : (
              <ul className="mt-5 space-y-5">
                {entry.products.map((item) => (
                  <li key={item.slug} className="border-deep/20 border-t pt-4">
                    <p className="label-sh text-muted leading-relaxed">
                      {item.type}
                    </p>
                    <p className="font-display mt-1 text-xl leading-tight">
                      {item.external ? (
                        <Link href={item.href} className="u-line">
                          {item.name}
                        </Link>
                      ) : (
                        <a href={item.href} className="u-line">
                          {item.name}
                        </a>
                      )}
                    </p>
                    {item.values.length > 0 && (
                      <dl className="mt-3 grid gap-x-4 gap-y-1 text-sm sm:grid-cols-[1fr_auto]">
                        {item.values.map((row) => (
                          <div key={row.item} className="contents">
                            <dt className="text-muted">{row.item}</dt>
                            <dd className="spec-sh sm:text-right">
                              {row.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <p className="text-muted leading-relaxed">
            Pick a number on the render.
          </p>
        )}
        <p className="spec-sh text-muted mt-auto pt-6">
          Typical values as OYH prints them · supplied to order
        </p>
      </div>
    </div>
  );
}
