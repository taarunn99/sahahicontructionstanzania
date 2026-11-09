"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Logo } from "@/components/layout/logo";
import { Container } from "@/components/ui/container";
import type { ChromeNav } from "@/config/chrome";
import { cn } from "@/lib/utils";
import { siteConfig, whatsappLink } from "@/config/site";
import { isSwPath, swChromeLink, swNav } from "@/config/sw-routes";
import { useMagneticShineGroup } from "@/hooks/use-magnetic-shine";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

/**
 * Editorial footer, revealed from UNDER the page on desktop: the footer is
 * fixed behind the content (a measured spacer holds its place in the flow),
 * so the page lifts away like a sheet and the footer rises to meet it, with
 * a subtle 3D settle scrubbed to the reveal. Below lg it is normal flow.
 *
 * Contact is icon-first: phone, WhatsApp, email and a Google Maps directions
 * pin (opens the Maps app on phones with the route ready). Every icon is a
 * real tel: / wa.me / mailto: / Maps link.
 */

const telHref = `tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`;

const CONTACT_ICONS: {
  label: string;
  href: string;
  external?: boolean;
  path: React.ReactNode;
}[] = [
  {
    label: `Call ${siteConfig.contact.phone}`,
    href: telHref,
    path: (
      <path d="M4 3h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 12l5 2v4a2 2 0 0 1-2 2A14 14 0 0 1 3 6a2 2 0 0 1 1-3" />
    ),
  },
  {
    label: `WhatsApp ${siteConfig.contact.phone}`,
    href: whatsappLink(),
    external: true,
    path: (
      <>
        <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Z" />
        <path d="M9 9.2c.3 2.6 2.2 4.6 5 5.4" />
      </>
    ),
  },
  {
    label: `Email ${siteConfig.contact.email}`,
    href: `mailto:${siteConfig.contact.email}`,
    path: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  },
  {
    label: "Directions to Sahihi Construction Chemicals (Google Maps)",
    href: siteConfig.mapsUrl,
    external: true,
    path: (
      <>
        <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11" />
        <circle cx="12" cy="10" r="2.6" />
      </>
    ),
  },
];

export function SiteFooter({ chrome }: { chrome: ChromeNav }) {
  const spacerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const iconRowRef = useMagneticShineGroup<HTMLDivElement>();
  const [height, setHeight] = useState(0);
  // Paint the footer only once its spacer nears the viewport: the fixed
  // block behind the page otherwise registers as the LCP element on short
  // pages. visibility keeps it in the DOM for crawlers and measurement.
  const [nearBottom, setNearBottom] = useState(false);
  // The fixed stacked-reveal is a DESKTOP pattern: on phones the footer is
  // taller than the viewport, and a fixed block taller than the screen can
  // never be fully seen. Below lg the footer renders in normal flow.
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => setIsDesktop(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // The fixed footer occupies no flow space; the spacer mirrors its height
  // so the page scrolls exactly far enough to reveal it. The links are
  // measured, not the min-height box, so "does it fit" is honest.
  const [fits, setFits] = useState(true);
  useEffect(() => {
    const footer = footerRef.current;
    const inner = innerRef.current?.firstElementChild as HTMLElement | null;
    if (!footer) return;
    const sync = () => {
      setHeight(footer.offsetHeight);
      // Owner, 2026-11-09: a fixed footer taller than the window traps the
      // scroll. Reveal only when the whole footer fits; otherwise it scrolls
      // in normal flow, like on phones.
      setFits(
        (inner?.offsetHeight ?? footer.offsetHeight) <= window.innerHeight - 80,
      );
    };
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(footer);
    window.addEventListener("resize", sync);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", sync);
    };
  }, []);
  const reveal = isDesktop && fits;

  useEffect(() => {
    const spacer = spacerRef.current;
    if (!spacer) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNearBottom(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100% 0px" },
    );
    observer.observe(spacer);
    return () => observer.disconnect();
  }, []);

  useGSAP(
    () => {
      if (!spacerRef.current || !innerRef.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (!window.matchMedia("(min-width: 1024px)").matches) return;
      if (!reveal) return;

      gsap.fromTo(
        innerRef.current,
        { yPercent: -22, scale: 0.95, rotateX: 7, autoAlpha: 0 },
        {
          yPercent: 0,
          scale: 1,
          rotateX: 0,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            trigger: spacerRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        },
      );
    },
    { scope: footerRef, dependencies: [height, reveal], revertOnUpdate: true },
  );

  // ScrollTrigger measures against the spacer, whose document position
  // changes with BOTH footer height and every route change. Stale
  // measurements leave the reveal stuck at its dim initial state on shorter
  // pages, so re-measure after layout settles.
  const pathname = usePathname();
  const sw = isSwPath(pathname);
  useEffect(() => {
    const raf1 = requestAnimationFrame(() => {
      requestAnimationFrame(() => ScrollTrigger.refresh());
    });
    const late = setTimeout(() => ScrollTrigger.refresh(), 600);
    return () => {
      cancelAnimationFrame(raf1);
      clearTimeout(late);
    };
  }, [height, pathname]);

  return (
    <>
      <div
        ref={spacerRef}
        style={{ height: reveal ? height : 0 }}
        aria-hidden
        className="pointer-events-none hidden lg:block"
      />
      <footer
        ref={footerRef}
        lang={sw ? "sw" : undefined}
        className={cn(
          "bg-deep text-chalk grain-sh on-dark relative z-0 overflow-hidden",
          reveal && "lg:fixed lg:inset-x-0 lg:bottom-0",
        )}
        style={{
          perspective: "1200px",
          visibility: !reveal || nearBottom ? "visible" : "hidden",
        }}
      >
        {/* min-height fills the screen up to the fixed header so no strip
            of page background ever shows above the fully revealed footer. */}
        <div
          ref={innerRef}
          style={{ transformOrigin: "50% 0%" }}
          className={cn("flex flex-col", reveal && "min-h-[calc(100svh-5rem)]")}
        >
          <Container className="relative z-10 my-auto w-full pt-12 pb-6 sm:pt-14">
            {/* Lockup + icon-first contact, one line each side */}
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href={sw ? "/sw" : "/"}
                aria-label={`${siteConfig.brandName} - ${sw ? "mwanzo" : "home"}`}
                className="self-start"
              >
                <Logo className="h-12 w-auto sm:h-14" />
              </Link>
              <div ref={iconRowRef} className="flex items-center gap-3">
                {CONTACT_ICONS.map((icon) => (
                  <a
                    key={icon.label}
                    href={icon.href}
                    aria-label={icon.label}
                    title={icon.label}
                    {...(icon.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    data-shine
                    className="border-chalk/25 hover:border-chalk/70 relative flex h-11 w-11 items-center justify-center rounded-full border transition-colors will-change-transform"
                  >
                    <svg
                      aria-hidden
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="relative"
                    >
                      {icon.path}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <p className="label-sh text-chalk/60 mt-6 leading-relaxed">
              {siteConfig.address.street} · {siteConfig.address.city},{" "}
              {siteConfig.address.countryName}
            </p>

            <div className="border-chalk/15 mt-8 grid grid-cols-2 gap-x-8 gap-y-8 border-t pt-8 sm:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_2fr]">
              <div>
                <p className="label-sh text-accent">
                  {sw ? "Menyu" : "Navigate"}
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  {(sw ? swNav : siteConfig.nav).map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="u-line text-chalk/80">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="label-sh text-accent">
                  {sw ? "Chapa" : "Brands"}
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  {chrome.footerBrands.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="u-line text-chalk/80">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="label-sh text-accent">
                  {sw ? "Mifumo" : "Systems"}
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  {chrome.systems.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="u-line text-chalk/80">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ONE numbered ordered list flowing across two aligned
                  columns - reads as a single systematic category. */}
              <div className="col-span-2 sm:col-span-3 lg:col-span-1">
                <p className="label-sh text-accent">
                  {sw ? "Bidhaa" : "Products"}
                </p>
                <ol className="mt-3 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
                  {(sw ? chrome.all.map(swChromeLink) : chrome.all).map(
                    (line, index) => (
                      <li key={line.href} className="flex items-baseline gap-3">
                        <span
                          aria-hidden
                          className="spec-sh text-accent/80 text-[0.6rem]"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <Link href={line.href} className="u-line text-chalk/80">
                          {line.label}
                        </Link>
                      </li>
                    ),
                  )}
                </ol>
              </div>
            </div>

            <div className="border-chalk/15 mt-8 flex flex-col gap-3 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="label-sh text-chalk/60 leading-relaxed">
                © {new Date().getFullYear()} {siteConfig.legalName}
              </p>
              <p className="label-sh text-chalk/60 leading-relaxed">
                {siteConfig.tagline}
              </p>
            </div>
          </Container>
        </div>
      </footer>
    </>
  );
}
