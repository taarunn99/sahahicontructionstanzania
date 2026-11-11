"use client";

import Link from "next/link";
import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

import {
  LanguageSwitch,
  TranslationNote,
} from "@/components/layout/language-switch";
import { Logo } from "@/components/layout/logo";
import { SiteSearch } from "@/components/layout/site-search";
import { useMagneticShineGroup } from "@/hooks/use-magnetic-shine";
import { BrandButton } from "@/components/ui/brand-button";
import type { ChromeNav, MenuNode } from "@/config/chrome";
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

  // Lock page scroll behind the full-screen menu. Lenis (the smooth scroll)
  // must stop too, or it keeps taking the wheel and touch scroll for the
  // page instead of the menu (owner, 2026-11-10: the menu would not scroll).
  const lenis = useLenis();
  useEffect(() => {
    document.documentElement.classList.toggle("overflow-hidden", menuOpen);
    if (menuOpen) lenis?.stop();
    else lenis?.start();
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
      lenis?.start();
    };
  }, [menuOpen, lenis]);

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
          className="hidden h-full items-center gap-5 lg:flex xl:gap-8 2xl:gap-10"
          aria-label="Primary"
        >
          {nav
            .filter((item) => item.href !== "/contact")
            .map((item) =>
              item.label === "Products" ? (
                <div
                  key={item.href}
                  className="flex h-full items-center"
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

                  {/* Mega panel: three coloured columns (owner, 2026-11-10).
                    Positioned against the fixed header, not the link, so it
                    stays on screen at every desktop width. */}
                  <div
                    aria-hidden={!productsOpen}
                    inert={!productsOpen}
                    className={cn(
                      "absolute top-full left-1/2 w-[min(880px,calc(100vw-2rem))] -translate-x-1/2 transition-all duration-200",
                      productsOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-1 opacity-0",
                    )}
                  >
                    <MegaPanel chrome={chrome} />
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

          <BrandButton href="/contact" size="sm" className="whitespace-nowrap">
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
        inert={!menuOpen}
        className={cn(
          "fixed inset-0 -z-10 overflow-x-clip lg:hidden",
          !menuOpen && "pointer-events-none",
        )}
      >
        <div
          // Lenis leaves this box alone: it scrolls natively.
          data-lenis-prevent
          className={cn(
            "bg-accent text-foreground absolute inset-0 overflow-y-auto overscroll-contain transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]",
            menuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="container-sh pt-24 pb-28">
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
              <MenuGroup tone="blue" title={sw ? "Chapa" : "Brands"}>
                <MenuTree nodes={chrome.brandTree} phone />
              </MenuGroup>
              <MenuGroup tone="green" title={sw ? "Kwa kazi" : "Find by job"}>
                <MenuTree nodes={chrome.jobTree} phone />
              </MenuGroup>
              <MenuGroup tone="yellow" title={sw ? "Mifumo" : "Systems"}>
                <MenuTree nodes={chrome.systemTree} phone />
              </MenuGroup>
              <MenuGroup tone="ink" title={sw ? "Bidhaa" : "Product lines"}>
                <MenuTree
                  nodes={(sw ? chrome.all.map(swChromeLink) : chrome.all).map(
                    (line) => ({ label: line.label, href: line.href }),
                  )}
                  phone
                />
              </MenuGroup>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

/* ---- Products menu: one tree, used by the desktop panel and the phone -- */

const HUES = ["red", "blue", "green", "yellow"] as const;
type Hue = (typeof HUES)[number];
// The phone menu is itself a Blue stage, so its rows never turn Blue.
const PHONE_HUES: readonly Hue[] = ["red", "green", "yellow"];

/** A new random colour for a row, never the one it had (globals.css). */
function reHue(element: HTMLElement, palette: readonly Hue[]) {
  const choices = palette.filter((hue) => hue !== element.dataset.hue);
  element.dataset.hue = choices[Math.floor(Math.random() * choices.length)];
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        "transition-transform duration-300",
        open ? "rotate-0" : "rotate-180",
      )}
    >
      <path d="m3 9 4-4 4 4" />
    </svg>
  );
}

function MenuTree({
  nodes,
  depth = 0,
  phone = false,
}: {
  nodes: MenuNode[];
  depth?: number;
  phone?: boolean;
}) {
  return (
    <ul className={cn("space-y-0.5", depth > 0 && "py-1")}>
      {nodes.map((node, index) => (
        <MenuRow
          key={`${node.href}|${node.label}`}
          node={node}
          index={index}
          depth={depth}
          phone={phone}
        />
      ))}
    </ul>
  );
}

/**
 * A row: the label is a link to its page; a row with children also has an
 * arrow that opens them in place and closes them again (owner, 2026-11-10).
 * The panel keeps its size: the column scrolls instead.
 */
function MenuRow({
  node,
  index,
  depth,
  phone,
}: {
  node: MenuNode;
  index: number;
  depth: number;
  phone: boolean;
}) {
  const [open, setOpen] = useState(false);
  // Children mount the first time they open, so the closed menu stays light.
  const [seen, setSeen] = useState(false);
  const id = useId();
  const palette = phone ? PHONE_HUES : HUES;
  const kids = node.children;
  const end = node.count ?? node.tag;
  return (
    <li>
      <div
        data-hue={palette[(index + depth) % palette.length]}
        onPointerEnter={(event) => reHue(event.currentTarget, palette)}
        className="hue-row group/row flex items-center rounded-md"
      >
        <Link
          href={node.href}
          className={cn(
            "flex min-w-0 flex-1 items-center gap-3 px-3 py-1.5",
            phone ? "min-h-11" : "min-h-10",
            depth === 0
              ? phone
                ? "text-base"
                : "text-[0.95rem] font-semibold"
              : "text-sm font-medium",
          )}
        >
          <span className="min-w-0">
            {node.label}
            {node.note && (
              <span className="text-xs font-medium opacity-60 group-hover/row:opacity-90">
                {" "}
                {node.note}
              </span>
            )}
          </span>
          <span className="ml-auto flex shrink-0 items-center gap-2 text-xs font-medium">
            {end && (
              <span className="opacity-60 group-hover/row:opacity-90">
                {end}
              </span>
            )}
            {!kids && !phone && (
              <span
                aria-hidden
                className="-translate-x-1 opacity-0 transition-all duration-200 group-hover/row:translate-x-0 group-hover/row:opacity-100"
              >
                →
              </span>
            )}
          </span>
        </Link>
        {kids && (
          <button
            type="button"
            aria-expanded={open}
            aria-controls={id}
            aria-label={`${open ? "Hide" : "Show"} ${node.label}`}
            onClick={() => {
              setSeen(true);
              setOpen((value) => !value);
            }}
            className={cn(
              "mr-1 flex shrink-0 items-center justify-center rounded-full transition-colors hover:bg-black/10",
              phone ? "size-11" : "size-8",
              open && "bg-black/5",
            )}
          >
            <Chevron open={open} />
          </button>
        )}
      </div>
      {kids && (
        <div
          id={id}
          inert={!open}
          className={cn(
            "grid transition-[grid-template-rows] duration-300 ease-out",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="min-h-0 overflow-hidden">
            {seen && (
              <div className="border-deep/15 ml-4 border-l pl-1.5">
                <MenuTree nodes={kids} depth={depth + 1} phone={phone} />
              </div>
            )}
          </div>
        </div>
      )}
    </li>
  );
}

/* ---- Products menu, desktop: three coloured columns ------------------- */

function MegaColumn({
  band,
  title,
  children,
}: {
  band: string;
  title: string;
  children: React.ReactNode;
}) {
  const box = useRef<HTMLDivElement>(null);
  const [room, setRoom] = useState({ up: false, down: false });

  // The arrows show only where there is more to see. Re-measured on scroll
  // and whenever a brand opens or closes (the list changes height).
  useEffect(() => {
    const element = box.current;
    if (!element) return;
    const measure = () =>
      setRoom({
        up: element.scrollTop > 4,
        down:
          element.scrollTop + element.clientHeight < element.scrollHeight - 4,
      });
    measure();
    element.addEventListener("scroll", measure, { passive: true });
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    if (element.firstElementChild) observer.observe(element.firstElementChild);
    return () => {
      element.removeEventListener("scroll", measure);
      observer.disconnect();
    };
  }, []);

  const step = (direction: 1 | -1) =>
    box.current?.scrollBy({
      top: direction * box.current.clientHeight * 0.7,
      behavior: "smooth",
    });

  return (
    <div className="relative flex min-h-0 min-w-0 flex-col">
      <p className={cn("label-sh shrink-0 px-5 py-3", band)}>{title}</p>
      {/* Lenis leaves this box alone, so the wheel scrolls the column. */}
      <div
        ref={box}
        data-lenis-prevent
        className="menu-scroll min-h-0 flex-1 overflow-y-auto overscroll-contain p-3 pb-14"
      >
        <div>{children}</div>
      </div>
      {/* Round arrows to scroll the column (owner, 2026-11-10). */}
      <div className="pointer-events-none absolute right-3 bottom-3 flex gap-2">
        <ScrollArrow
          label={`Scroll ${title} up`}
          show={room.up}
          up
          onClick={() => step(-1)}
        />
        <ScrollArrow
          label={`Scroll ${title} down`}
          show={room.down}
          onClick={() => step(1)}
        />
      </div>
    </div>
  );
}

function ScrollArrow({
  label,
  show,
  up = false,
  onClick,
}: {
  label: string;
  show: boolean;
  up?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      tabIndex={show ? 0 : -1}
      onClick={onClick}
      className={cn(
        "bg-deep hover:bg-accent flex size-10 items-center justify-center rounded-full text-white shadow-lg transition-all duration-200",
        show
          ? "pointer-events-auto scale-100 opacity-100"
          : "scale-75 opacity-0",
      )}
    >
      <Chevron open={up} />
    </button>
  );
}

function MegaPanel({ chrome }: { chrome: ChromeNav }) {
  return (
    // A fixed height: opening a brand scrolls its column, the panel never grows.
    <div className="bg-background text-foreground border-deep flex h-[min(31rem,calc(100dvh-7rem))] flex-col overflow-hidden rounded-b-2xl border shadow-2xl">
      <div className="divide-deep/10 grid min-h-0 flex-1 grid-cols-3 divide-x">
        <MegaColumn band="bg-accent" title="Brands">
          <MenuTree nodes={chrome.brandTree} />
        </MegaColumn>
        <MegaColumn band="bg-line" title="Find by job">
          <MenuTree nodes={chrome.jobTree} />
        </MegaColumn>
        <MegaColumn band="bg-surface" title="Systems">
          <MenuTree nodes={chrome.systemTree} />
        </MegaColumn>
      </div>
      <Link
        href="/products"
        className="label-sh bg-deep hover:bg-accent group/row flex shrink-0 items-center justify-between px-5 py-3 text-white transition-colors duration-200"
      >
        All products
        <span
          aria-hidden
          className="transition-transform duration-200 group-hover/row:translate-x-1"
        >
          →
        </span>
      </Link>
    </div>
  );
}

/* ---- Products menu, phone: the same groups, the same colours ---------- */

// The phone menu is itself a Blue stage, so each heading is a Chalk pill with
// a solid dot in its column's colour (a Blue pill would vanish into it).
const PILL = {
  blue: "bg-accent",
  green: "bg-line",
  yellow: "bg-surface",
  ink: "bg-deep",
} as const;

function MenuGroup({
  tone,
  title,
  children,
}: {
  tone: keyof typeof PILL;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-8 first:mt-0">
      <p className="label-sh bg-background inline-flex items-center gap-2 rounded-full px-3 py-1.5">
        <span
          aria-hidden
          className={cn(
            "size-2.5 rounded-full ring-1 ring-black/15",
            PILL[tone],
          )}
        />
        {title}
      </p>
      <div className="mt-3 -ml-3">{children}</div>
    </div>
  );
}
