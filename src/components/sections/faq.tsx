"use client";

import { useState } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import type { FaqItem } from "@/lib/faq";
import { cn } from "@/lib/utils";

/**
 * FAQ section. One item open at a time (the first by default), circle
 * markers instead of plus signs, questions in the display face, answers as
 * a display lead plus short points - never a wall of paragraph.
 *
 * Desktop: the question list on the light ground, the active answer on a
 * Sky stage beside it. Phones: an accordion whose panels collapse with a
 * grid-template-rows transition.
 *
 * SSR honesty: every answer is in the DOM in both layouts and never
 * unmounts; the page builds its FAQPage JSON-LD from the same array
 * (faqJsonLd in src/lib/faq.ts).
 */

export function Faq({
  items,
  heading = "Questions, answered.",
  eyebrow = "FAQs",
}: {
  items: FaqItem[];
  heading?: string;
  eyebrow?: string;
}) {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  return (
    <section
      aria-label={eyebrow === "FAQs" ? "Frequently asked questions" : eyebrow}
      className="bg-background relative"
    >
      <div className="lg:grid lg:grid-cols-2">
        {/* Left: heading + question list, gutters of its own */}
        <div className="px-6 py-20 sm:px-10 lg:py-28 lg:pr-16 lg:pl-20 xl:pl-28">
          <p className="label-sh text-muted">{eyebrow}</p>
          <h2 className="font-display text-phi-3 text-deep mt-3 tracking-tight">
            {heading}
          </h2>

          {/* Desktop question list */}
          <ul className="divide-deep/15 mt-10 hidden divide-y lg:block">
            {items.map((item, i) => {
              const isActive = i === active;
              return (
                <li key={item.q}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-expanded={isActive}
                    aria-controls={`faq-panel-${i}`}
                    className="group flex w-full items-center gap-4 py-5 text-left"
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "border-deep size-4 shrink-0 rounded-full border transition-colors duration-300",
                        isActive
                          ? "bg-deep"
                          : "group-hover:bg-deep/30 bg-transparent",
                      )}
                    />
                    <span
                      className={cn(
                        "font-display text-xl transition-colors duration-300",
                        isActive
                          ? "text-deep"
                          : "text-deep/75 group-hover:text-deep",
                      )}
                    >
                      {item.q}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Mobile: accordion with the same circle markers */}
          <div className="divide-deep/15 border-deep/15 mt-8 divide-y border-y lg:hidden">
            {items.map((item, i) => {
              const isOpen = i === active;
              return (
                <div key={item.q}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setActive(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center gap-4 py-5 text-left"
                    >
                      <span
                        aria-hidden
                        className={cn(
                          "border-deep size-4 shrink-0 rounded-full border transition-colors duration-300",
                          isOpen ? "bg-deep" : "bg-transparent",
                        )}
                      />
                      <span
                        className={cn(
                          "font-display text-lg transition-colors duration-300",
                          isOpen ? "text-deep" : "text-deep/75",
                        )}
                      >
                        {item.q}
                      </span>
                    </button>
                  </h3>
                  <div
                    className={cn(
                      "grid",
                      !reduced &&
                        "transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="font-display text-deep text-lg leading-snug">
                        {item.lead}
                      </p>
                      <ul className="mt-3 space-y-2 pb-6">
                        {item.points.map((point) => (
                          <li
                            key={point}
                            className="text-deep/75 flex gap-3 leading-relaxed"
                          >
                            <span
                              aria-hidden
                              className="bg-deep mt-2.5 size-1 shrink-0 rounded-full"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: the active answer on a Sky stage */}
        <div className="bg-accent text-foreground grain-sh relative hidden lg:block">
          <div className="relative z-10 flex h-full items-end">
            <div className="grid w-full p-10 xl:p-14 [&>*]:col-start-1 [&>*]:row-start-1">
              {items.map((item, i) => (
                <div
                  key={item.q}
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-label={item.q}
                  className={cn(
                    !reduced && "transition-opacity duration-500",
                    i === active
                      ? "opacity-100"
                      : "pointer-events-none opacity-0",
                  )}
                >
                  <p className="label-sh text-muted">{item.q}</p>
                  {/* phi squared: lead at 2.618x the point size */}
                  <p className="font-display text-phi-2 mt-4 leading-tight text-balance">
                    {item.lead}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {item.points.map((point) => (
                      <li key={point} className="text-phi-0 flex gap-3">
                        <span
                          aria-hidden
                          className="bg-deep mt-2.5 size-1.5 shrink-0 rounded-full"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
