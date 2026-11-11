"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * The sale page's order composer: tap the packs you want, set the quantity,
 * and the WhatsApp message writes itself, product by product. The button is
 * a real wa.me link carrying exactly that text. No price is shown or asked
 * for here: the reply carries the offer price.
 */

export type ComposerItem = { name: string; src: string | null };

export function OfferComposer({
  items,
  label,
}: {
  items: ComposerItem[];
  label: string;
}) {
  const [qty, setQty] = useState<Record<string, number>>({});
  const chosen = items.filter((item) => (qty[item.name] ?? 0) > 0);

  const set = (name: string, value: number) =>
    setQty((current) => ({ ...current, [name]: Math.max(0, value) }));

  const lines = chosen.map((item) => `${item.name} x ${qty[item.name]}`);
  const message = chosen.length
    ? `Hello ${siteConfig.brandName}. From the ${label}, please send the offer price for: ${lines.join(", ")}.`
    : `Hello ${siteConfig.brandName}. Please send me the offer price list for the ${label}.`;
  const href = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <div
      translate="no"
      className="notranslate grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-12"
    >
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
        {items.map((item) => {
          const n = qty[item.name] ?? 0;
          const on = n > 0;
          return (
            <li
              key={item.name}
              className={cn(
                "flex flex-col rounded-2xl border-2 p-2 transition-colors sm:p-3",
                on ? "border-deep bg-white" : "border-deep/20 bg-white/60",
              )}
            >
              <button
                type="button"
                aria-pressed={on}
                onClick={() => set(item.name, on ? 0 : 1)}
                className="flex min-h-11 items-center gap-2 text-left"
              >
                <span className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
                  {item.src ? (
                    <img
                      src={item.src}
                      alt={`${item.name} pack`}
                      width={48}
                      height={48}
                      loading="lazy"
                      className="size-full object-contain"
                    />
                  ) : (
                    <span className="bg-surface text-deep font-display size-full p-1 text-center text-[0.5rem] leading-tight font-extrabold">
                      Mapei
                    </span>
                  )}
                </span>
                <span className="text-sm leading-tight font-semibold">
                  {item.name}
                </span>
              </button>
              {on && (
                <div className="mt-2 flex items-center justify-between gap-1">
                  <button
                    type="button"
                    aria-label={`One fewer ${item.name}`}
                    onClick={() => set(item.name, n - 1)}
                    className="bg-deep text-chalk flex size-10 items-center justify-center rounded-full text-lg font-bold"
                  >
                    -
                  </button>
                  <input
                    inputMode="numeric"
                    aria-label={`Quantity of ${item.name}`}
                    value={n}
                    onChange={(event) =>
                      set(item.name, Number.parseInt(event.target.value) || 0)
                    }
                    className="border-deep/30 h-10 w-full rounded-lg border bg-white text-center font-semibold tabular-nums"
                  />
                  <button
                    type="button"
                    aria-label={`One more ${item.name}`}
                    onClick={() => set(item.name, n + 1)}
                    className="bg-deep text-chalk flex size-10 items-center justify-center rounded-full text-lg font-bold"
                  >
                    +
                  </button>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      <div className="border-deep bg-chalk flex h-fit flex-col rounded-2xl border p-5 sm:p-7 lg:sticky lg:top-24">
        <p className="spec-sh text-muted flex justify-between gap-4">
          <span>{siteConfig.brandName}</span>
          <span>{siteConfig.contact.phone}</span>
        </p>
        <p className="bg-accent mt-5 max-w-[90%] self-start rounded-2xl rounded-bl-md px-4 py-3 text-sm leading-relaxed">
          Tap the packs you want and set the quantities. The message writes
          itself.
        </p>
        <p
          aria-live="polite"
          className="bg-deep text-chalk mt-3 max-w-[90%] self-end rounded-2xl rounded-br-md px-4 py-3 text-sm leading-relaxed"
        >
          {message}
        </p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-(--pop-red) hover:bg-deep mt-5 inline-flex min-h-12 items-center justify-center rounded-full px-6 text-center font-semibold text-white transition-colors"
        >
          Send it on WhatsApp&ensp;&rarr;
        </a>
        <p className="text-muted mt-3 text-center text-xs">
          {chosen.length
            ? `${chosen.length} product${chosen.length === 1 ? "" : "s"} in the message`
            : "No packs picked yet: you will get the whole list"}
        </p>
      </div>
    </div>
  );
}
