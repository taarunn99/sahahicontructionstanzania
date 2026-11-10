"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

export type SpecTableRow = {
  range: string;
  rangeSlug: string;
  name: string;
  type: string;
  standards: string;
  edition: string;
  sheet: string;
  path: string;
  clause: string;
};

const CHIP =
  "min-h-11 rounded-full border px-4 text-sm font-semibold transition-colors";

/**
 * The specifier pack on screen: filter by range or by a word, open a row to
 * read and copy its BOQ clause. Everything is in the HTML; the filter only
 * hides rows.
 */
export function SpecTable({
  rows,
  ranges,
}: {
  rows: SpecTableRow[];
  ranges: { slug: string; label: string; count: number }[];
}) {
  const [range, setRange] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const shown = useMemo(() => {
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    return rows.filter((row) => {
      if (range !== "all" && row.rangeSlug !== range) return false;
      const hay =
        `${row.name} ${row.type} ${row.standards} ${row.range}`.toLowerCase();
      return words.every((word) => hay.includes(word));
    });
  }, [rows, range, query]);

  const copy = async (row: SpecTableRow) => {
    try {
      await navigator.clipboard.writeText(row.clause);
      setCopied(row.path);
      window.setTimeout(() => setCopied(null), 2400);
    } catch {
      // The clause stays selectable in the open row.
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div
          role="radiogroup"
          aria-label="Range"
          className="flex flex-wrap gap-2"
        >
          {[{ slug: "all", label: "All", count: rows.length }, ...ranges].map(
            (item) => (
              <button
                key={item.slug}
                type="button"
                role="radio"
                aria-checked={range === item.slug}
                onClick={() => setRange(item.slug)}
                className={cn(
                  CHIP,
                  range === item.slug
                    ? "bg-deep border-deep text-white"
                    : "border-deep/25 bg-white",
                )}
              >
                {item.label}{" "}
                <span className="font-normal opacity-70">{item.count}</span>
              </button>
            ),
          )}
        </div>
        <label className="block lg:w-80">
          <span className="sr-only">Search products, types or standards</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search: C2TE, epoxy, sealant..."
            className="border-deep/25 min-h-11 w-full rounded-full border bg-white px-5 text-base"
          />
        </label>
      </div>

      <p role="status" aria-live="polite" className="text-muted mt-6 text-sm">
        {shown.length} of {rows.length} products
        {copied ? " · clause copied" : ""}
      </p>

      <ul className="border-deep/15 mt-3 divide-y divide-[color:var(--color-deep)]/10 border-y">
        {shown.map((row) => (
          <li key={row.path}>
            <details className="group">
              <summary className="grid cursor-pointer list-none gap-1 py-4 sm:grid-cols-[1.2fr_1fr_auto] sm:items-baseline sm:gap-6 [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="text-muted block text-xs font-semibold tracking-wide uppercase">
                    {row.range}
                  </span>
                  <span className="font-display text-lg">{row.name}</span>
                </span>
                <span className="text-muted text-sm">
                  {row.type}
                  {row.edition ? ` · Edition ${row.edition}` : ""}
                </span>
                <span className="text-brand text-sm font-semibold">
                  <span className="group-open:hidden">Clause +</span>
                  <span className="hidden group-open:inline">Close -</span>
                </span>
              </summary>
              <div className="pb-6">
                {row.standards && (
                  <p className="text-muted text-sm">
                    <span className="font-semibold">Data sheet declares:</span>{" "}
                    {row.standards}
                  </p>
                )}
                <p className="mt-3 max-w-4xl rounded-lg bg-white p-4 leading-relaxed shadow-[0_1px_3px_rgba(12,42,54,0.08)] sm:p-6">
                  {row.clause}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => copy(row)}
                    className={cn(CHIP, "bg-brand border-brand text-white")}
                  >
                    {copied === row.path ? "Copied" : "Copy clause"}
                  </button>
                  <Link
                    href={row.path}
                    className={cn(
                      CHIP,
                      "border-deep/25 inline-flex items-center bg-white",
                    )}
                  >
                    Product page
                  </Link>
                  {row.sheet && (
                    <a
                      href={row.sheet}
                      className={cn(
                        CHIP,
                        "border-deep/25 inline-flex items-center bg-white",
                      )}
                    >
                      Data sheet (PDF)
                    </a>
                  )}
                </div>
              </div>
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
}
