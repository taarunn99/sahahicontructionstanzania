"use client";

import { useId, useState } from "react";

/**
 * Narrows the server-rendered product list on /quote by text. Rows carry
 * `data-search` (name, brand, type, codes, lowercased); the filter only
 * toggles `hidden` on rows and on groups left empty, so the full list
 * stays in the HTML for crawlers and for visitors without script.
 */
export function QuoteFilter({ listId }: { listId: string }) {
  const id = useId();
  const [value, setValue] = useState("");

  const apply = (next: string) => {
    setValue(next);
    const root = document.getElementById(listId);
    if (!root) return;
    const q = next.trim().toLowerCase();
    const rows = root.querySelectorAll<HTMLElement>("[data-search]");
    rows.forEach((row) => {
      row.hidden = q.length > 0 && !(row.dataset.search ?? "").includes(q);
    });
    root.querySelectorAll<HTMLElement>("[data-group]").forEach((group) => {
      const visible = group.querySelector("[data-search]:not([hidden])");
      group.hidden = !visible;
    });
  };

  return (
    <div className="max-w-md">
      <label htmlFor={id} className="label-sh text-muted leading-relaxed">
        Find a product
      </label>
      <input
        id={id}
        type="search"
        data-quote-filter
        value={value}
        onChange={(event) => apply(event.target.value)}
        placeholder="Keraflex, epoxy, sponge, Z-106..."
        className="border-deep bg-background w-full rounded-none border-b py-2.5 text-base outline-none focus:border-b-2"
      />
    </div>
  );
}
