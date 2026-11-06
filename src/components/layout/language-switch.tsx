"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useSyncExternalStore } from "react";

import { enTwin, isSwPath, swTwin } from "@/config/sw-routes";
import { cn } from "@/lib/utils";

/**
 * English / Kiswahili switch (owner, 2026-11-06: English by default, a switch
 * on the site, real Swahili pages for the key pages and Google Translate for
 * the rest).
 *
 * Two kinds of Swahili sit behind one switch:
 *  - A page with a real twin (src/config/sw-routes.ts): SW goes to that page.
 *    It is written by hand, has its own URL and is what search engines index.
 *  - Any other page: SW loads Google Translate. That happens in the visitor's
 *    browser and is never indexed.
 *
 * English is what a new visitor gets. Nothing from Google loads until a page
 * without a twin is shown in Swahili, so the switch costs a normal visit no
 * speed. The choice lives in Google's own `googtrans` cookie, so it follows
 * the visitor from page to page.
 *
 * Google Translate swaps text nodes for its own elements, and React then
 * updates text nodes that are no longer on the page. So anything whose text
 * changes while the visitor uses it (calculators, the signature tools, search)
 * is marked translate="no": it stays in English rather than show a stale
 * number.
 */

type Language = "en" | "sw";

const COOKIE = "googtrans";
const listeners = new Set<() => void>();
let started = false;

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function readChoice(): Language {
  return /(?:^|;\s*)googtrans=\/en\/sw(?:;|$)/.test(document.cookie)
    ? "sw"
    : "en";
}

function notify() {
  listeners.forEach((listener) => listener());
}

function rememberSwahili() {
  document.cookie = `${COOKIE}=/en/sw; path=/; max-age=31536000; samesite=lax`;
}

/** Google may write the cookie on the bare domain too, so clear every form. */
function clearChoice() {
  const expired = `${COOKIE}=; path=/; max-age=0`;
  document.cookie = expired;
  const parts = window.location.hostname.split(".");
  for (let index = 0; index < parts.length - 1; index += 1) {
    const domain = parts.slice(index).join(".");
    document.cookie = `${expired}; domain=${domain}`;
    document.cookie = `${expired}; domain=.${domain}`;
  }
}

/**
 * React removes and inserts nodes by reference, and Google Translate has moved
 * those references into its own elements. Without this, a route change on a
 * translated page throws NotFoundError and takes the page down.
 */
function tolerateTranslatedDom() {
  const remove = Node.prototype.removeChild;
  const insert = Node.prototype.insertBefore;
  Node.prototype.removeChild = function patched<T extends Node>(
    this: Node,
    child: T,
  ): T {
    if (child.parentNode !== this) return child;
    return remove.call(this, child) as T;
  };
  Node.prototype.insertBefore = function patched<T extends Node>(
    this: Node,
    node: T,
    reference: Node | null,
  ): T {
    let anchor = reference;
    while (anchor && anchor.parentNode !== this) anchor = anchor.parentNode;
    return insert.call(this, node, anchor) as T;
  };
}

function startTranslation() {
  if (started) return;
  started = true;
  tolerateTranslatedDom();

  const host = document.createElement("div");
  host.id = "google_translate_element";
  host.hidden = true;
  document.body.append(host);

  const scope = window as unknown as {
    google: {
      translate: {
        TranslateElement: new (
          options: Record<string, unknown>,
          id: string,
        ) => unknown;
      };
    };
    sahihiTranslateInit: () => void;
  };
  scope.sahihiTranslateInit = () => {
    new scope.google.translate.TranslateElement(
      { pageLanguage: "en", includedLanguages: "en,sw", autoDisplay: false },
      host.id,
    );
  };

  const script = document.createElement("script");
  script.src =
    "https://translate.google.com/translate_a/element.js?cb=sahihiTranslateInit";
  script.async = true;
  // Blocked or offline: fall back to English instead of a switch that lies.
  script.onerror = () => {
    clearChoice();
    notify();
  };
  document.head.append(script);
}

/** The visitor's language on this page: the URL first, then their choice. */
function useLanguage(pathname: string): Language {
  const choice = useSyncExternalStore(
    subscribe,
    readChoice,
    () => "en" as Language,
  );
  return isSwPath(pathname) ? "sw" : choice;
}

function goToEnglish(pathname: string) {
  clearChoice();
  // A full load in both cases: Google Translate has no clean way back.
  const english = enTwin(pathname);
  if (english) window.location.assign(english);
  else window.location.reload();
}

export function LanguageSwitch({ className }: { className?: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const language = useLanguage(pathname);

  // Keeps the page and the choice in step, on every route change.
  useEffect(() => {
    if (isSwPath(pathname)) {
      // Arriving on a Swahili page (from search, say) is a choice of Swahili:
      // the English-only pages it links to then translate themselves.
      if (readChoice() !== "sw") {
        rememberSwahili();
        notify();
      }
      document.documentElement.lang = "sw";
      return;
    }
    if (language !== "sw") {
      document.documentElement.lang = "en";
      return;
    }
    const twin = swTwin(pathname);
    if (twin) window.location.replace(twin);
    else startTranslation();
  }, [pathname, language]);

  const choose = (next: Language) => {
    if (next === language) return;
    if (next === "en") {
      goToEnglish(pathname);
      return;
    }
    rememberSwahili();
    notify();
    const twin = swTwin(pathname);
    if (twin) router.push(twin);
    else startTranslation();
  };

  const options: { value: Language; short: string; name: string }[] = [
    { value: "en", short: "EN", name: "English" },
    { value: "sw", short: "SW", name: "Kiswahili" },
  ];

  return (
    <div
      role="group"
      aria-label="Language"
      translate="no"
      className={cn(
        "notranslate inline-flex h-9 items-center rounded-full border border-current/30 p-0.5",
        className,
      )}
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          lang={option.value}
          aria-label={`${option.short}, ${option.name}`}
          aria-pressed={language === option.value}
          onClick={() => choose(option.value)}
          className={cn(
            "h-full min-w-8 rounded-full px-2 text-xs font-semibold transition-colors",
            language === option.value
              ? "bg-deep text-chalk"
              : "hover:bg-deep/10",
          )}
        >
          {option.short}
        </button>
      ))}
    </div>
  );
}

/**
 * Shown only on a page Google is translating, never on a real Swahili page. It
 * is written in English and goes through Google Translate with the rest of the
 * page. It also carries the attribution the widget's own hidden banner would
 * have shown.
 */
export function TranslationNote() {
  const pathname = usePathname();
  const language = useLanguage(pathname);
  if (language !== "sw" || isSwPath(pathname)) return null;

  return (
    <p className="bg-deep text-chalk absolute inset-x-0 top-full px-4 py-1.5 text-center text-xs leading-snug">
      Translated by Google Translate. For figures, the data sheet is the
      reference.{" "}
      <button
        type="button"
        translate="no"
        onClick={() => goToEnglish(pathname)}
        className="notranslate font-semibold underline underline-offset-2"
      >
        English
      </button>
    </p>
  );
}
