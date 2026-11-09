"use client";

import { useState } from "react";

import { sportsChooser, sportsPlaces } from "@/config/oyh-sports";

const WORDS = ["Not suited", "Possible", "Good", "Best"];

/** OYH's selection table, turned into a picker: choose the place, see the fit. */
export function SportsChooser() {
  const [place, setPlace] = useState(1);
  const ranked = [...sportsChooser].sort((a, b) => b.fit[place] - a.fit[place]);

  return (
    <div>
      <div
        role="radiogroup"
        aria-label="Where it goes"
        className="flex flex-wrap gap-2"
      >
        {sportsPlaces.map((item, index) => (
          <button
            key={item}
            type="button"
            role="radio"
            aria-checked={index === place}
            onClick={() => setPlace(index)}
            className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
              index === place
                ? "bg-deep border-deep text-white"
                : "border-deep/25 text-deep hover:bg-surface bg-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <ol className="mt-6 grid gap-2" aria-live="polite">
        {ranked.map((item) => {
          const fit = item.fit[place];
          return (
            <li
              key={item.system}
              className={`grid grid-cols-[1fr_auto] items-center gap-4 rounded-xl border px-4 py-3 transition-opacity ${
                fit
                  ? "border-deep/20 text-deep bg-white"
                  : "text-deep border-transparent bg-white/80"
              }`}
            >
              <a
                href={`#system-${item.system}`}
                className="font-bold hover:underline"
              >
                {item.name}
              </a>
              <span className="flex items-center gap-3">
                <span className="flex gap-1" aria-hidden="true">
                  {[1, 2, 3].map((dot) => (
                    <span
                      key={dot}
                      className={`size-3 rounded-full ${dot <= fit ? "bg-deep" : "bg-deep/15"}`}
                    />
                  ))}
                </span>
                <span className="spec-sh w-20 text-right">{WORDS[fit]}</span>
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
