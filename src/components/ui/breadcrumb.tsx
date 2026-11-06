import { Fragment } from "react";

import Link from "next/link";

import { siteConfig } from "@/config/site";

/**
 * One breadcrumb source of truth per page: the same items array renders the
 * visible trail AND the BreadcrumbList JSON-LD, so the two can never
 * disagree. Every crumb except the current page is a real link, and every
 * level of the trail has a real page behind it.
 */

export type Crumb = { label: string; href: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  const last = items.length - 1;
  return (
    /* Two layouts, both height-stable.
       sm and up: flex-wrap. With no whitespace between inline elements the
       trail was ONE unbreakable line whose min-content width widened the
       mobile layout viewport and side-panned every deep page.
       Phones: ONE line that scrolls inside its own box. A wrapping trail
       changes its line count when the web font swaps in, which pushed the
       whole first screen down (CLS 0.26 on product pages, 2026-11-05). The
       scroll box cannot widen the page, and its scrollbar is hidden. */
    <nav
      aria-label="Breadcrumb"
      className="label-sh text-muted flex [scrollbar-width:none] items-center gap-x-2 gap-y-2 py-1 leading-relaxed max-sm:overflow-x-auto max-sm:whitespace-nowrap sm:flex-wrap [&::-webkit-scrollbar]:hidden"
    >
      {items.map((item, i) => (
        <Fragment key={item.href}>
          {i > 0 && <span aria-hidden>/</span>}
          {i === last ? (
            <span className="text-foreground shrink-0">{item.label}</span>
          ) : (
            <Link href={item.href} className="u-line shrink-0">
              {item.label}
            </Link>
          )}
        </Fragment>
      ))}
    </nav>
  );
}

export function breadcrumbJsonLd(items: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item:
        item.href === "/" ? siteConfig.url : `${siteConfig.url}${item.href}`,
    })),
  };
}
