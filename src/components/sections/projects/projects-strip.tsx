"use client";

import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

import type { Project } from "@/config/projects";
import { cn, pad } from "@/lib/utils";

/**
 * The home page's project strip: a row of cards the visitor drags (or
 * swipes) sideways, with a hairline that fills as the row travels.
 * Every card is in the server HTML and links to /projects.
 * Drag-free Embla: it coasts and settles, it never auto-plays.
 */

const STAGES = ["bg-accent", "bg-surface", "bg-line"] as const;

export function ProjectsStrip({
  projects,
  countPrefix = "",
  countSuffix = " products",
}: {
  projects: Project[];
  /** Swahili pages put the word first: "Bidhaa 7". */
  countPrefix?: string;
  countSuffix?: string;
}) {
  const [viewport, embla] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });
  const bar = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!embla) return;
    const update = () => {
      const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
      if (bar.current)
        bar.current.style.transform = `scaleX(${0.12 + progress * 0.88})`;
    };
    update();
    embla.on("scroll", update).on("reInit", update);
    return () => {
      embla.off("scroll", update).off("reInit", update);
    };
  }, [embla]);

  return (
    <div>
      <div
        ref={viewport}
        className="-mx-(--gutter) cursor-grab overflow-hidden px-(--gutter) active:cursor-grabbing"
      >
        <ul className="flex touch-pan-y gap-4">
          {projects.map((project, index) => (
            <li
              key={project.name}
              className="w-[78vw] max-w-sm shrink-0 sm:w-[22rem]"
            >
              <Link
                href="/projects"
                draggable={false}
                className={cn(
                  STAGES[index % STAGES.length],
                  "border-deep flex h-full min-h-64 flex-col justify-between rounded-lg border p-6 transition-transform duration-500 hover:-translate-y-1",
                )}
              >
                <p className="spec-sh text-muted flex justify-between gap-4">
                  <span>{pad(index + 1)}</span>
                  <span>
                    {countPrefix}
                    {project.products.length}
                    {countSuffix}
                  </span>
                </p>
                <div>
                  <p className="font-display text-2xl leading-[1.05] text-balance">
                    {project.name}
                  </p>
                  <p className="spec-sh mt-4 leading-relaxed">
                    {project.products
                      .slice(0, 3)
                      .map((product) => product.name)
                      .join(" · ")}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-deep/15 mt-8 h-px overflow-hidden">
        <span
          ref={bar}
          className="bg-deep block h-px origin-left"
          style={{ transform: "scaleX(0.12)" }}
        />
      </div>
    </div>
  );
}
