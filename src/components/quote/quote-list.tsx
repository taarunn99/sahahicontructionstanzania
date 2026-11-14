"use client";

import Link from "next/link";
import { useState } from "react";

import {
  clearQuote,
  removeFromQuote,
  setQuotePack,
  setQuoteQty,
  type QuoteItem,
} from "@/lib/quote";
import { cn } from "@/lib/utils";

/**
 * The quantity box. Typing never removes a line (owner, 2026-11-14: a
 * buyer types 487 or 2,000, and Backspace on the way there used to drop
 * the product): the box keeps what is typed, the list takes every whole
 * number above zero as it is typed, and an empty or zero box goes back to
 * the last quantity on blur. Only "Remove" removes.
 */
function QtyInput({ item }: { item: QuoteItem }) {
  const [draft, setDraft] = useState<string | null>(null);
  const shown = draft ?? String(item.qty);
  return (
    <input
      inputMode="numeric"
      pattern="[0-9]*"
      aria-label={`Quantity of ${item.name}`}
      value={shown}
      onFocus={() => setDraft(String(item.qty))}
      onChange={(event) => {
        const digits = event.target.value.replace(/[^0-9]/g, "").slice(0, 6);
        setDraft(digits);
        const n = Number.parseInt(digits, 10);
        if (n > 0) setQuoteQty(item.id, item.pack, n);
      }}
      onBlur={() => setDraft(null)}
      className="border-deep/30 bg-background h-10 w-20 rounded-lg border text-center text-base font-semibold tabular-nums"
    />
  );
}

/**
 * The list itself: one row per product and pack, with the pack chooser,
 * the quantity stepper and remove. Used inside the floating panel and on
 * /quote. No prices anywhere.
 */
export function QuoteList({
  items,
  compact = false,
  className,
}: {
  items: QuoteItem[];
  compact?: boolean;
  className?: string;
}) {
  if (items.length === 0) {
    return (
      <p className={cn("text-muted leading-relaxed", className)}>
        Nothing in your list yet. Open any product and press &ldquo;Add to quote
        list&rdquo;, or add from the list on this page.
      </p>
    );
  }

  return (
    <div className={className} translate="no">
      <ul className="border-deep/20 divide-deep/15 divide-y border-y">
        {items.map((item) => (
          <li
            key={`${item.id}:${item.pack}`}
            className={cn(
              "grid gap-x-4 gap-y-2 py-3",
              compact
                ? "grid-cols-[1fr_auto]"
                : "sm:grid-cols-[1fr_auto_auto] sm:items-center",
            )}
          >
            <div className="min-w-0">
              <Link
                href={item.href}
                className="u-line leading-snug font-semibold"
              >
                {item.name}
              </Link>
              <p className="spec-sh text-muted mt-0.5">{item.brand}</p>
              {item.packs.length > 1 ? (
                <label className="mt-2 block text-sm">
                  <span className="sr-only">Pack for {item.name}</span>
                  <select
                    value={item.pack}
                    onChange={(event) =>
                      setQuotePack(item.id, item.pack, event.target.value)
                    }
                    className="border-deep/30 bg-background h-10 max-w-full rounded-lg border px-2 text-base"
                  >
                    {item.packs.map((pack) => (
                      <option key={pack} value={pack}>
                        {pack}
                      </option>
                    ))}
                  </select>
                </label>
              ) : (
                item.pack && <p className="mt-1 text-sm">{item.pack}</p>
              )}
            </div>

            <div className="flex items-center gap-1.5 self-start">
              <button
                type="button"
                aria-label={`One fewer ${item.name}`}
                onClick={() =>
                  setQuoteQty(item.id, item.pack, Math.max(1, item.qty - 1))
                }
                className="bg-deep text-chalk flex size-10 items-center justify-center rounded-full text-lg font-bold"
              >
                -
              </button>
              <QtyInput item={item} />
              <button
                type="button"
                aria-label={`One more ${item.name}`}
                onClick={() => setQuoteQty(item.id, item.pack, item.qty + 1)}
                className="bg-deep text-chalk flex size-10 items-center justify-center rounded-full text-lg font-bold"
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={() => removeFromQuote(item.id, item.pack)}
              className={cn(
                "u-line text-muted justify-self-start py-2 text-sm",
                compact && "col-span-2",
              )}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={clearQuote}
        className="u-line text-muted mt-3 py-2 text-sm"
      >
        Clear the list
      </button>
    </div>
  );
}
