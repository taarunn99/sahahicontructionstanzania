"use client";

import { useSyncExternalStore } from "react";

import { siteConfig } from "@/config/site";

/**
 * THE QUOTE LIST - one basket for the whole site (owner, 2026-11-14: "a
 * person won't be looking just for a single product ... at least five").
 *
 * Lives in the visitor's browser (localStorage) and nowhere else: nothing
 * is sent until they press WhatsApp, email or copy on /quote. Every item
 * is written by a server-rendered Add button from the page's own data, so
 * the catalogue never enters the client bundle (GOVERNANCE 3). No price
 * is stored, asked or shown: the reply carries the prices.
 */

export type QuoteItem = {
  /** Stable id: "<brand>:<slug>". */
  id: string;
  name: string;
  brand: string;
  href: string;
  /** The pack or code chosen, from `packs`. */
  pack: string;
  packs: string[];
  qty: number;
};

export type QuoteDetails = {
  name: string;
  company: string;
  phone: string;
  town: string;
  job: string;
  extra: string;
};

const KEY = "sahihi-quote-v1";
const EVENT = "sahihi-quote";
const EMPTY: QuoteItem[] = [];

let cacheRaw: string | null = null;
let cacheItems: QuoteItem[] = EMPTY;

function read(): QuoteItem[] {
  if (typeof window === "undefined") return EMPTY;
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(KEY);
  } catch {
    return cacheItems;
  }
  if (raw === cacheRaw) return cacheItems;
  cacheRaw = raw;
  try {
    const parsed = raw ? (JSON.parse(raw) as QuoteItem[]) : EMPTY;
    cacheItems = Array.isArray(parsed)
      ? parsed.filter(
          (item) =>
            item &&
            typeof item.id === "string" &&
            typeof item.name === "string" &&
            typeof item.href === "string" &&
            Array.isArray(item.packs),
        )
      : EMPTY;
  } catch {
    cacheItems = EMPTY;
  }
  return cacheItems;
}

function write(items: QuoteItem[]) {
  try {
    if (items.length === 0) window.localStorage.removeItem(KEY);
    else window.localStorage.setItem(KEY, JSON.stringify(items));
  } catch {
    // Private mode or blocked storage: the list lives for this page only.
    cacheRaw = items.length ? JSON.stringify(items) : null;
    cacheItems = items;
  }
  window.dispatchEvent(new Event(EVENT));
}

function subscribe(callback: () => void) {
  window.addEventListener(EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

/** The list, live across tabs and components. Empty on the server. */
export function useQuote(): QuoteItem[] {
  return useSyncExternalStore(subscribe, read, () => EMPTY);
}

export const quoteCount = (items: QuoteItem[]) =>
  items.reduce((sum, item) => sum + item.qty, 0);

export type QuoteAdd = Omit<QuoteItem, "qty" | "pack"> & {
  qty?: number;
  pack?: string;
};

/** Add a product, or add to its quantity if the same pack is already in. */
export function addToQuote(add: QuoteAdd) {
  const items = read();
  const pack = add.pack ?? add.packs[0] ?? "";
  const qty = Math.max(1, Math.round(add.qty ?? 1));
  const at = items.findIndex(
    (item) => item.id === add.id && item.pack === pack,
  );
  if (at >= 0) {
    const next = items.slice();
    next[at] = { ...next[at], qty: next[at].qty + qty };
    write(next);
  } else {
    write([
      ...items,
      {
        id: add.id,
        name: add.name,
        brand: add.brand,
        href: add.href,
        packs: add.packs,
        pack,
        qty,
      },
    ]);
  }
}

export function setQuoteQty(id: string, pack: string, qty: number) {
  const items = read();
  const n = Math.max(0, Math.round(qty));
  write(
    n === 0
      ? items.filter((item) => !(item.id === id && item.pack === pack))
      : items.map((item) =>
          item.id === id && item.pack === pack ? { ...item, qty: n } : item,
        ),
  );
}

export function setQuotePack(id: string, from: string, to: string) {
  const items = read();
  write(
    items.map((item) =>
      item.id === id && item.pack === from ? { ...item, pack: to } : item,
    ),
  );
}

export function removeFromQuote(id: string, pack: string) {
  setQuoteQty(id, pack, 0);
}

export function clearQuote() {
  write([]);
}

/** The message, line by line. Plain text; the same for every channel. */
export function quoteMessage(
  items: QuoteItem[],
  details: Partial<QuoteDetails> = {},
) {
  const lines = items.map(
    (item, index) =>
      `${index + 1}. ${item.name} (${item.brand})${item.pack ? `, ${item.pack}` : ""} x ${item.qty}`,
  );
  const who = [details.name, details.company, details.phone]
    .map((part) => part?.trim())
    .filter(Boolean)
    .join(", ");
  const parts = [
    `Hello ${siteConfig.brandName}. Please send a quotation for:`,
    ...(lines.length ? lines : ["(no products chosen yet)"]),
  ];
  if (details.extra?.trim()) parts.push(`Also: ${details.extra.trim()}`);
  if (details.job?.trim()) parts.push(`Job: ${details.job.trim()}`);
  if (details.town?.trim()) parts.push(`Delivery: ${details.town.trim()}`);
  if (who) parts.push(`From: ${who}`);
  return parts.join("\n");
}

export const quoteWhatsAppHref = (message: string) =>
  `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;

export const quoteMailHref = (message: string, count: number) =>
  `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    `Quotation request: ${count} product${count === 1 ? "" : "s"}`,
  )}&body=${encodeURIComponent(message)}`;
