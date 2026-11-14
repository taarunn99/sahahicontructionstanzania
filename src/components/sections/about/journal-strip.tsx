"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { cn, pad } from "@/lib/utils";

/**
 * The Journal's pages on /about: the guides after the latest one, fanned
 * out as sheets the visitor drags or swipes sideways (drag-free Embla, as
 * the home page's project strip), with a hairline that fills as the row
 * travels. On desktop the whole row also drifts a little with the page
 * scroll (GSAP scrub, transform only, skipped under reduced motion).
 * Every sheet is in the server HTML and links to its guide.
 */

export type JournalPage = {
  slug: string;
  title: string;
  category: string;
  /** The category's stage colour class. */
  stage: string;
  minutes: number;
  poster: { src: string; alt: string } | null;
};

const LEAN = [
  "-rotate-[1.6deg]",
  "rotate-[1.1deg]",
  "-rotate-[0.6deg]",
  "rotate-[1.8deg]",
];

export function JournalStrip({ pages }: { pages: JournalPage[] }) {
  const [viewport, embla] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });
  const bar = useRef<HTMLSpanElement>(null);
  const drift = useRef<HTMLDivElement>(null);

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

  useGSAP(
    () => {
      const el = drift.current;
      if (!el) return;
      gsap
        .matchMedia()
        .add(
          "(prefers-reduced-motion: no-preference) and (min-width: 64rem)",
          () => {
            gsap.fromTo(
              el,
              { xPercent: 4 },
              {
                xPercent: -4,
                ease: "none",
                scrollTrigger: {
                  trigger: el,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              },
            );
            return () => ScrollTrigger.refresh();
          },
        );
    },
    { scope: drift },
  );

  return (
    <div ref={drift}>
      <div
        ref={viewport}
        className="-mx-(--gutter) cursor-grab overflow-hidden px-(--gutter) py-4 active:cursor-grabbing"
      >
        <ul className="flex touch-pan-y items-stretch gap-5 sm:gap-6">
          {pages.map((page, index) => (
            <li
              key={page.slug}
              className="w-[64vw] max-w-[16.5rem] shrink-0 sm:w-[16.5rem]"
            >
              <Link
                href={`/blog/${page.slug}`}
                draggable={false}
                className={cn(
                  LEAN[index % LEAN.length],
                  "border-deep flex h-full flex-col rounded-md border bg-white p-2.5 shadow-[0_18px_40px_-24px_rgba(12,42,54,0.6)] transition-transform duration-500 hover:-translate-y-1 hover:rotate-0 sm:p-3",
                )}
              >
                <span
                  className={cn(
                    page.stage,
                    "border-deep/15 relative block aspect-square overflow-hidden rounded-sm border",
                  )}
                >
                  {page.poster ? (
                    <Image
                      src={page.poster.src}
                      alt={page.poster.alt}
                      fill
                      draggable={false}
                      sizes="(min-width: 40rem) 16.5rem, 64vw"
                      className="object-cover"
                    />
                  ) : (
                    <span className="font-display absolute inset-0 flex items-end p-4 text-2xl leading-[1.05] uppercase">
                      {page.category}
                      <br />
                      in 3D
                    </span>
                  )}
                </span>
                <span className="flex flex-1 flex-col justify-between gap-6 px-1.5 pt-4 pb-2">
                  <span className="spec-sh text-muted flex justify-between gap-3">
                    <span>{pad(index + 2)}</span>
                    <span>{page.minutes} min</span>
                  </span>
                  <span>
                    <span className="spec-sh block">{page.category}</span>
                    <span className="font-display mt-2 block text-lg leading-tight text-balance">
                      {page.title}
                    </span>
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-deep/15 mt-6 h-px overflow-hidden">
        <span
          ref={bar}
          className="bg-deep block h-px origin-left"
          style={{ transform: "scaleX(0.1)" }}
        />
      </div>
    </div>
  );
}
