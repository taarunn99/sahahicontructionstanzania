"use client";

import { useEffect, useState } from "react";

import { FlowButton } from "@/components/ui/flow-button";
import { addToQuote, type QuoteAdd } from "@/lib/quote";
import { cn } from "@/lib/utils";

/**
 * The "Add to quote list" button. Server pages render it with the
 * product's own data (name, brand, href, packs); the click writes that
 * into the visitor's list (src/lib/quote.ts) and the floating pill shows
 * the count. Three looks: the hero pill (the house FlowButton), a compact
 * chip for list rows, and a block button under a calculator.
 */

type Props = {
  item: QuoteAdd;
  variant?: "pill" | "chip" | "block";
  /** Words for the button; the default fits the hero. */
  label?: string;
  className?: string;
};

export function AddToQuote({
  item,
  variant = "pill",
  label = "Add to quote list",
  className,
}: Props) {
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const t = window.setTimeout(() => setAdded(false), 2200);
    return () => window.clearTimeout(t);
  }, [added]);

  const onClick = () => {
    addToQuote(item);
    setAdded(true);
  };

  const text = added ? "Added to your list" : label;

  if (variant === "pill") {
    return (
      <FlowButton
        type="button"
        onClick={onClick}
        className={className}
        aria-live="polite"
      >
        {text}
      </FlowButton>
    );
  }

  if (variant === "block") {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-live="polite"
        className={cn(
          "bg-deep text-chalk flex min-h-12 w-full items-center justify-center rounded-full px-6 text-center text-sm leading-snug transition-opacity hover:opacity-90",
          className,
        )}
      >
        {text}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-live="polite"
      className={cn(
        "chip-sh border-deep inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-full border px-4 text-sm font-semibold",
        added && "bg-deep text-chalk",
        className,
      )}
    >
      <span aria-hidden>{added ? "✓" : "+"}</span>
      {added ? "Added" : label}
    </button>
  );
}
