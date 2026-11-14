"use client";

import { addToQuote, setQuoteQty, useQuote, type QuoteAdd } from "@/lib/quote";
import { cn } from "@/lib/utils";

/**
 * The small round "+" on a card of /quote (owner, 2026-11-14: "small
 * images, and there is a tiny button to add them to the list"). Always
 * there; once the product is in the list it turns into the quantity
 * stepper in the same spot, so the card shows what has been added. Reads
 * the list live; renders the plain "+" on the server.
 */
/** The button's colours, by the card it sits on (tokens only). */
const TONES = {
  ink: "bg-deep text-chalk",
  brand: "bg-brand text-white",
  white: "bg-white text-brand",
  surface: "bg-surface text-deep",
} as const;

export function QuoteCardAdd({
  item,
  tone = "ink",
  className,
}: {
  item: QuoteAdd;
  tone?: keyof typeof TONES;
  className?: string;
}) {
  const items = useQuote();
  const lines = items.filter((line) => line.id === item.id);
  const qty = lines.reduce((sum, line) => sum + line.qty, 0);
  const first = lines[0];

  if (!first) {
    return (
      <button
        type="button"
        onClick={() => addToQuote(item)}
        aria-label={`Add ${item.name} to quote list`}
        className={cn(
          "flex size-11 items-center justify-center rounded-full text-2xl leading-none font-bold shadow-lg transition-transform hover:scale-110",
          TONES[tone],
          className,
        )}
      >
        +
      </button>
    );
  }

  return (
    <div
      className={cn(
        "flex h-11 items-center rounded-full shadow-lg",
        TONES[tone],
        className,
      )}
      translate="no"
    >
      <button
        type="button"
        onClick={() => setQuoteQty(first.id, first.pack, first.qty - 1)}
        aria-label={`One fewer ${item.name}`}
        className="flex size-11 items-center justify-center text-xl leading-none font-bold"
      >
        -
      </button>
      <span
        aria-live="polite"
        className="min-w-5 text-center text-sm font-bold tabular-nums"
      >
        {qty}
      </span>
      <button
        type="button"
        onClick={() => setQuoteQty(first.id, first.pack, first.qty + 1)}
        aria-label={`One more ${item.name}`}
        className="flex size-11 items-center justify-center text-xl leading-none font-bold"
      >
        +
      </button>
    </div>
  );
}
