"use client";

import NumberFlow from "@number-flow/react";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

/**
 * The brand filter on /products. Every shelf stays in the server HTML: the
 * filter only hides the bands of the other brands. Following an anchor (the
 * job tiles at the top of the page) puts everything back first, so an anchor
 * never points at a hidden band.
 */

type Selected = { value: string; set: (value: string) => void };

const Context = createContext<Selected>({ value: "all", set: () => {} });

export function CatalogueProvider({ children }: { children: ReactNode }) {
  const [value, set] = useState("all");

  useEffect(() => {
    const reset = () => set("all");
    window.addEventListener("hashchange", reset);
    return () => window.removeEventListener("hashchange", reset);
  }, []);

  return <Context.Provider value={{ value, set }}>{children}</Context.Provider>;
}

export function BrandBand({
  brand,
  id,
  children,
}: {
  brand: string;
  id: string;
  children: ReactNode;
}) {
  const { value } = useContext(Context);
  return (
    <div
      id={id}
      hidden={value !== "all" && value !== brand}
      className={`brand-${brand} scroll-mt-32`}
    >
      {children}
    </div>
  );
}

export function CatalogueFilter({
  options,
}: {
  options: { value: string; label: string; count: number }[];
}) {
  const { value, set } = useContext(Context);
  const bar = useRef<HTMLDivElement>(null);
  const count = options.find((option) => option.value === value)?.count ?? 0;

  const choose = (next: string) => {
    set(next);
    // Already past the top of the shelves: go back to the first one shown.
    const node = bar.current;
    if (node && node.getBoundingClientRect().top < 100) {
      requestAnimationFrame(() => node.parentElement?.scrollIntoView());
    }
  };

  return (
    <div
      ref={bar}
      translate="no"
      className="notranslate border-deep bg-chalk sticky top-16 z-30 border-y sm:top-20 [@media(max-height:31rem)]:static"
    >
      <div className="container-sh flex items-center gap-5 py-2.5">
        <div
          role="group"
          aria-label="Filter by brand"
          className="flex min-w-0 flex-1 [scrollbar-width:none] gap-2 overflow-x-auto"
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              aria-pressed={value === option.value}
              onClick={() => choose(option.value)}
              className={cn(
                "border-deep inline-flex min-h-11 shrink-0 items-center rounded-full border px-4 text-sm font-semibold whitespace-nowrap transition-colors duration-300",
                value === option.value
                  ? "bg-deep text-chalk"
                  : "hover:bg-surface",
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
        <p className="hidden shrink-0 items-baseline gap-2 sm:flex">
          <span className="font-display text-2xl">
            <NumberFlow value={count} />
          </span>
          <span className="label-sh text-muted">Items</span>
        </p>
      </div>
    </div>
  );
}
