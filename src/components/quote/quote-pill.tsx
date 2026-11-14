"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { QuoteList } from "@/components/quote/quote-list";
import {
  quoteCount,
  quoteMessage,
  quoteWhatsAppHref,
  useQuote,
} from "@/lib/quote";
import { cn } from "@/lib/utils";

/**
 * The floating "Quote list" pill, beside the WhatsApp button on every page
 * once something is in the list (owner, 2026-11-14; no navbar item). It
 * opens a panel: the list with quantities, "Review and send" to /quote,
 * and a direct WhatsApp send (on /quote, "Review and send" jumps down the
 * page). Renders nothing on the server and nothing while empty, so it
 * never shifts a page.
 */
export function QuotePill() {
  const items = useQuote();
  const pathname = usePathname();
  // The panel is open for one path only: a navigation closes it without
  // an effect (the state names the path it was opened on).
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (value: boolean) => setOpenOn(value ? pathname : null);
  const panel = useRef<HTMLDivElement>(null);
  const count = quoteCount(items);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenOn(null);
    };
    window.addEventListener("keydown", onKey);
    panel.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (items.length === 0 || pathname.startsWith("/sw")) return null;

  const message = quoteMessage(items);
  // On /quote the list and the send step are further down the same page.
  const review = pathname === "/quote" ? "#send" : "/quote#send";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="quote-panel"
        className="bg-surface text-deep border-deep fixed right-[4.75rem] bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex min-h-12 items-center gap-2.5 rounded-full border-2 px-4 text-sm font-bold shadow-2xl transition-transform hover:scale-105 sm:right-[6.25rem] sm:bottom-8 print:hidden"
      >
        <span
          aria-hidden
          className="bg-deep text-chalk flex size-7 items-center justify-center rounded-full text-xs tabular-nums"
        >
          {count}
        </span>
        Quote list
      </button>

      {open && (
        <div
          id="quote-panel"
          ref={panel}
          tabIndex={-1}
          role="dialog"
          aria-label="Your quote list"
          className={cn(
            "bg-background border-deep fixed z-[60] flex flex-col border shadow-2xl outline-none print:hidden",
            "inset-x-0 bottom-0 max-h-[85svh] rounded-t-2xl",
            "sm:inset-x-auto sm:right-7 sm:bottom-28 sm:w-[26rem] sm:rounded-2xl",
          )}
        >
          <div className="border-deep/15 flex items-center justify-between gap-4 border-b px-5 py-4">
            <p className="font-display text-xl">
              Your quote list
              <span className="text-muted ml-2 text-sm font-normal">
                {items.length} product{items.length === 1 ? "" : "s"}
              </span>
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="chip-sh border-deep flex size-10 items-center justify-center rounded-full border text-lg"
            >
              ×
            </button>
          </div>
          <div className="overflow-y-auto px-5 py-4" data-lenis-prevent>
            <QuoteList items={items} compact />
          </div>
          <div className="border-deep/15 grid gap-3 border-t px-5 py-4 sm:grid-cols-2">
            <Link
              href={review}
              onClick={() => setOpenOn(null)}
              className="bg-deep text-chalk inline-flex min-h-12 items-center justify-center rounded-full px-5 text-center text-sm font-semibold"
            >
              Review and send
            </Link>
            <a
              href={quoteWhatsAppHref(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-(--pop-red) px-5 text-center text-sm font-semibold text-white"
            >
              WhatsApp it now
            </a>
          </div>
        </div>
      )}
    </>
  );
}
