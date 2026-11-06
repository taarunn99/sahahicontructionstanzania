"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import {
  LanguageSwitch,
  TranslationNote,
} from "@/components/layout/language-switch";
import { Logo } from "@/components/layout/logo";
import { SiteSearch } from "@/components/layout/site-search";
import { useMagneticShineGroup } from "@/hooks/use-magnetic-shine";
import { BrandButton } from "@/components/ui/brand-button";
import type { ChromeNav } from "@/config/chrome";
import { siteConfig } from "@/config/site";
import { isSwPath, swChromeLink, swNav } from "@/config/sw-routes";
import { cn } from "@/lib/utils";

/**
 * Fixed header: a fully opaque Chalk bar with Ink text on every page, from
 * the first pixel. It goes transparent only over the full-screen menu,
 * which is a Blue stage with white text.
 *
 * `chrome` is computed on the server from the catalogue (src/config/chrome.ts)
 * and passed in, so the catalogue itself never enters the client bundle and
 * the counts in the mega panel can never drift from the data.
 */
function subscribeToScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  window.addEventListener("resize", callback);
  return () => {
    window.removeEventListener("scroll", callback);
    window.removeEventListener("resize", callback);
  };
}

export function SiteHeader({ chrome }: { chrome: ChromeNav }) {
  const pathname = usePathname();
  // A real Swahili page gets its chrome in Swahili too. English-only pages it
  // links to are translated by Google (language-switch.tsx).
  const sw = isSwPath(pathname);
  const nav = sw ? swNav : siteConfig.nav;
  // The bar is solid Chalk from the first pixel on every page (2026-11-06):
  // the first screens are now solid Blue, Green or Yellow stages, and one
  // Ink-on-transparent bar cannot read on all of them.
  const overHero = false;
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openProducts = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProductsOpen(true);
  };
  const closeProducts = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    // Hover-intent: a short grace period so diagonal travel into the
    // panel doesn't slam it shut - but leaving really closes it.
    closeTimer.current = setTimeout(() => setProductsOpen(false), 150);
  };
  const clusterRef = useMagneticShineGroup<HTMLDivElement>(0.25, 50);

  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    () => (overHero ? window.scrollY > window.innerHeight * 0.85 : true),
    () => !overHero,
  );

  // Close menu and search on navigation (state adjustment during render).
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
    setSearchOpen(false);
    setProductsOpen(false);
  }

  // The full-screen menu panel is a Sky stage with Ink text, so the bar goes
  // transparent over it and keeps its Ink text.
  const solid = (scrolled || searchOpen) && !menuOpen;

  // Lock page scroll behind the full-screen menu.
  useEffect(() => {
    document.documentElement.classList.toggle("overflow-hidden", menuOpen);
    return () => document.documentElement.classList.remove("overflow-hidden");
  }, [menuOpen]);

  // The search panel stays mounted (its entrance is a CSS grid-rows
  // transition), so focus is driven here instead of autoFocus.
  // Escape closes whichever overlay is up.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setProductsOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      lang={sw ? "sw" : undefined}
      className={cn(
        "site-header fixed inset-x-0 top-0 z-50",
        !overHero && "theme-light",
        // Fully opaque when solid: an 85%-alpha bar composites off-palette
        // colours from whatever scrolls beneath it (strict palette).
        solid
          ? "bg-background text-foreground border-b"
          : // Only when the full-screen menu (a Blue stage) is open.
            "text-chalk border-b border-transparent",
      )}
    >
      <div className="container-sh grid h-16 grid-cols-[1fr_auto_1fr] items-center sm:h-20">
        <Link
          href={sw ? "/sw" : "/"}
          aria-label={`${siteConfig.name} - ${sw ? "mwanzo" : "home"}`}
          className="justify-self-start transition-opacity hover:opacity-70"
        >
          <Logo className="h-9 w-auto sm:h-11" />
        </Link>

        {/* Desktop nav, centered */}
        <nav
          className="hidden items-center gap-5 lg:flex xl:gap-8 2xl:gap-10"
          aria-label="Primary"
        >
          {nav
            .filter((item) => item.href !== "/contact")
            .map((item) =>
              item.label === "Products" ? (
                <div
                  key={item.href}
                  className="relative"
                  onPointerEnter={openProducts}
                  onPointerLeave={closeProducts}
                >
                  {/* A real link: tap/click ALWAYS navigates to /products.
                    The panel is hover-intent only - JS-controlled, so it
                    can never stick open after a click (the old
                    focus-within bug). */}
                  <Link
                    href={item.href}
                    onFocus={openProducts}
                    className="label-sh u-line inline-flex items-center gap-1.5 py-2"
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={cn(
                        "text-[0.55rem] transition-transform duration-200",
                        productsOpen && "rotate-180",
                      )}
                    >
                      ▾
                    </span>
                  </Link>

                  {/* Mega panel */}
                  <div
                    aria-hidden={!productsOpen}
                    className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200",
                      productsOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-1 opacity-0",
                    )}
                  >
                    <div className="bg-background text-foreground border-deep w-[600px] border shadow-2xl">
                      <div className="grid grid-cols-[1.618fr_1fr]">
                        {/* The lead brand and its lines, with live counts */}
                        <div className="border-deep/15 border-r p-5">
                          <Link
                            href={chrome.lead.href}
                            tabIndex={productsOpen ? 0 : -1}
                            className="label-sh hover:text-foreground text-muted transition-colors"
                          >
                            {chrome.lead.label} →
                          </Link>
                          <ul className="mt-3 space-y-0.5">
                            {chrome.lead.lines.map((line, index) => (
                              <li key={line.href}>
                                <Link
                                  href={line.href}
                                  tabIndex={productsOpen ? 0 : -1}
                                  className="hover:bg-surface/60 flex items-baseline gap-3 rounded-lg p-2 transition-colors"
                                >
                                  <span
                                    aria-hidden
                                    className="spec-sh text-muted w-5 shrink-0"
                                  >
                                    {String(index + 1).padStart(2, "0")}
                                  </span>
                                  <span className="min-w-0">
                                    <span className="font-display block text-lg leading-tight">
                                      {line.label}
                                    </span>
                                    <span className="text-muted text-xs">
                                      {line.sub}
                                    </span>
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* The other brands */}
                        <div className="p-5">
                          <p className="label-sh text-muted">More brands</p>
                          <ul className="mt-3 space-y-0.5">
                            {chrome.brands.map((brand) => (
                              <li key={brand.href}>
                                <Link
                                  href={brand.href}
                                  tabIndex={productsOpen ? 0 : -1}
                                  className="hover:bg-surface/60 block rounded-md px-2 py-1.5 transition-colors"
                                >
                                  <span className="block text-sm">
                                    {brand.label}
                                  </span>
                                  <span className="text-muted block text-xs">
                                    {brand.sub}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <Link
                        href="/products"
                        tabIndex={productsOpen ? 0 : -1}
                        className="label-sh border-deep/15 hover:bg-surface/60 block border-t px-5 py-3 transition-colors"
                      >
                        All product lines →
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="label-sh u-line py-2"
                >
                  {item.label}
                </Link>
              ),
            )}
        </nav>

        {/* col-start-3 is load-bearing: the nav is display:none on phones,
            which removes it from grid flow - without the explicit column this
            cluster auto-places into the middle and renders centred. */}
        <div
          ref={clusterRef}
          className="col-start-3 flex items-center gap-1 justify-self-end pl-4 sm:gap-2 xl:gap-3"
        >
          <LanguageSwitch className="hidden sm:inline-flex" />

          <BrandButton href="/contact" size="sm">
            {sw ? "Wasiliana nasi" : "Contact us"}
          </BrandButton>

          {/* Search - live: the whole catalogue is indexed. */}
          <button
            type="button"
            aria-label={sw ? "Tafuta" : "Search"}
            aria-expanded={searchOpen}
            aria-controls="site-search"
            onClick={() => setSearchOpen((open) => !open)}
            data-shine
            className="flex h-9 w-9 items-center justify-center rounded-full border border-current/30 transition-colors will-change-transform hover:border-current/70"
          >
            <svg
              aria-hidden
              width="17"
              height="17"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <circle cx="8.5" cy="8.5" r="6" />
              <path d="m13 13 5 5" />
            </svg>
          </button>

          {/* Mobile menu button - hamburger to X */}
          <button
            type="button"
            aria-label={
              sw
                ? menuOpen
                  ? "Funga menyu"
                  : "Fungua menyu"
                : menuOpen
                  ? "Close menu"
                  : "Open menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            data-shine
            className="-mr-1 flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-full will-change-transform lg:hidden"
          >
            <span
              aria-hidden
              className={cn(
                "block h-px w-5 bg-current transition-transform duration-300",
                menuOpen && "translate-y-[3px] rotate-45",
              )}
            />
            <span
              aria-hidden
              className={cn(
                "block h-px w-5 bg-current transition-transform duration-300",
                menuOpen && "-translate-y-[3px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      {/* Search - drops from the top, expanding into the text box (CSS
          grid-rows transition). */}
      <div
        id="site-search"
        aria-hidden={!searchOpen}
        className={cn(
          "ease-in-out-quart grid transition-[grid-template-rows] duration-500",
          searchOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="bg-background text-foreground min-h-0 overflow-hidden">
          <div
            className={cn(
              "container-sh border-t py-6 transition-all delay-100 duration-400",
              searchOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-6 opacity-0",
            )}
          >
            {/* Results change as you type: English only (language-switch.tsx). */}
            <div translate="no" className="notranslate">
              <SiteSearch
                open={searchOpen}
                onClose={() => setSearchOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>

      <TranslationNote />

      {/* Mobile menu - full screen, slides in from the right (CSS transform
          transition; stays mounted). Sits under the fixed bar z-wise so the
          logo and the X stay on top of it. */}
      {/* The outer nav stays viewport-sized and CLIPS the sliding panel.
          Parking the panel itself at translate-x-full expanded the mobile
          layout viewport (fixed elements count toward the ICB), which
          zoomed out and horizontally panned every page on real phones -
          the root cause of the mobile-scroll bug (audit, 2026-08-19). */}
      <nav
        id="mobile-menu"
        aria-label="Primary"
        aria-hidden={!menuOpen}
        className={cn(
          "fixed inset-0 -z-10 overflow-x-clip lg:hidden",
          !menuOpen && "pointer-events-none",
        )}
      >
        <div
          className={cn(
            "bg-accent text-foreground absolute inset-0 overflow-y-auto transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]",
            menuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="container-sh pt-24 pb-12">
            {/* Only while open: the closed panel is aria-hidden, and a button
                inside it would still take keyboard focus. */}
            {menuOpen && <LanguageSwitch className="mb-8 sm:hidden" />}

            <p
              className={cn(
                "label-sh text-muted transition-opacity duration-500",
                menuOpen ? "opacity-100 delay-200" : "opacity-0 delay-0",
              )}
            >
              {sw ? "Menyu" : "Navigate"}
            </p>

            <ul className="mt-4">
              {nav.map((item, index) => (
                <li
                  key={item.href}
                  className={cn(
                    "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    menuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0",
                  )}
                  style={{
                    transitionDelay: menuOpen ? `${240 + index * 60}ms` : "0ms",
                  }}
                >
                  <Link
                    href={item.href}
                    tabIndex={menuOpen ? 0 : -1}
                    className="font-display block py-3 text-3xl tracking-tight"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div
              className={cn(
                "border-deep/20 mt-8 border-t pt-8 transition-opacity duration-500",
                menuOpen ? "opacity-100 delay-500" : "opacity-0 delay-0",
              )}
            >
              <p className="label-sh text-muted">
                {sw ? "Bidhaa" : "Products"}
              </p>
              <ul className="mt-4">
                {(sw ? chrome.all.map(swChromeLink) : chrome.all).map(
                  (line) => (
                    <li key={line.href}>
                      <Link
                        href={line.href}
                        tabIndex={menuOpen ? 0 : -1}
                        className="block py-2.5 text-base"
                      >
                        {line.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
