import type { Metadata, Viewport } from "next";
import { Geist_Mono, Manrope, Montserrat } from "next/font/google";

import { MetaPixel } from "@/components/analytics/meta-pixel";
import { RouteTransition } from "@/components/layout/route-transition";
import { ScrollMark } from "@/components/layout/scroll-mark";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import { OrganizationJsonLd } from "@/components/seo/organization-json-ld";
import { WebSiteJsonLd } from "@/components/seo/website-json-ld";
import { chromeNav } from "@/config/chrome";
import { siteConfig } from "@/config/site";
import { SmoothScrollProvider } from "@/providers/smooth-scroll-provider";

import "./globals.css";

// Variable fonts - passing an explicit `weight` would downgrade them to
// static instances and cost an extra request per weight. globals.css maps
// these CSS variables onto Tailwind's font utilities.
//
// The body face is `optional`, not `swap` (measured 2026-11-05): when
// Manrope arrived after first paint on a throttled connection, paragraphs
// re-wrapped and pushed the spec block of a product page down (CLS 0.23;
// the trace named "Web font"). With `optional` the browser uses Manrope
// only if it is ready for the first paint - it is preloaded, so it usually
// is - and otherwise keeps the system sans for that one page view. The
// display face stays `swap`.
const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans-variable",
  display: "optional",
});

// The display face (owner, 2026-11-06: the thin serif "doesn't look good").
// Montserrat, set at weight 800 in CSS: it is the face of the line
// "CONSTRUCTION CHEMICALS LIMITED" in the Sahihi logo, it has the weight to
// stand next to the logo's heavy wordmark and the solid colours, and it is
// the face Mapei sets its own product pages in. One variable file, on every
// first screen, so it is preloaded. `swap`, as the serif was.
const display = Montserrat({
  subsets: ["latin"],
  variable: "--font-display-variable",
  display: "swap",
});

// Spec data only (.spec-sh): classifications, standards, consumption.
// Small text, never the LCP element - keep it off the preload chain.
const spec = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-spec-variable",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    // Home carries the site's primary query at the full 60ch SERP budget
    // (SEO-STRATEGY.md, query registry). Brand identity stays in og titles.
    default: "Construction Chemicals in Tanzania - Mapei Distributor",
    // Never put the geo in the templated part (double-geo bug).
    template: "%s - Sahihi Construction Chemicals",
  },
  description: siteConfig.description,
  applicationName: siteConfig.brandName,
  alternates: {
    canonical: "/",
    languages: { en: "/", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    // og:site_name is one of Google's documented site-name signals - keep
    // it equal to the WebSite schema `name`.
    siteName: siteConfig.brandName,
    title: `${siteConfig.brandName} - ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandName} - ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#fafbf8",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${spec.variable} antialiased`}
    >
      <body className="bg-background text-foreground flex min-h-dvh flex-col">
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <span aria-hidden className="progress-sh" />
        <SiteHeader chrome={chromeNav} />
        <WhatsAppFab />
        <SmoothScrollProvider>
          {/* Solid, stacked above the fixed footer so the page lifts away
              from it during the stacked reveal. */}
          <div className="bg-background relative z-20 shadow-[0_30px_60px_-20px_rgba(12,42,54,0.35)]">
            {children}
          </div>
          <SiteFooter chrome={chromeNav} />
          <ScrollMark />
        </SmoothScrollProvider>
        <RouteTransition />
        <MetaPixel />
      </body>
    </html>
  );
}
