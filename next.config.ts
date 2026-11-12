import type { NextConfig } from "next";

import canonicals from "./src/config/canonical-headers.json";

const SITE = "https://www.sahihicc.com";

/**
 * 301s for addresses people type or old sites used, so none of them 404.
 * Canonical host is www.sahihicc.com (NEXT_PUBLIC_SITE_URL); the bare domain
 * is sent there too, in case the host's own domain redirect is not set.
 */
const REDIRECTS: [string, string][] = [
  ["/home", "/"],
  ["/index", "/"],
  ["/index.html", "/"],
  ["/index.php", "/"],
  ["/shop", "/products"],
  ["/offer", "/sale"],
  ["/offers", "/sale"],
  ["/flash-sale", "/sale"],
  ["/product", "/products"],
  ["/catalogue", "/products"],
  ["/catalog", "/products"],
  ["/price-list", "/products"],
  ["/pricelist", "/products"],
  ["/prices", "/products"],
  ["/about-us", "/about"],
  ["/aboutus", "/about"],
  ["/contact-us", "/contact"],
  ["/contactus", "/contact"],
  ["/project", "/projects"],
  ["/blogs", "/blog"],
  ["/news", "/blog"],
  ["/oyh", "/oriental-yuhong"],
  ["/oyh-east-africa", "/oriental-yuhong"],
  ["/oriental-yuhong-east-africa", "/oriental-yuhong"],
  ["/yuhong", "/oriental-yuhong"],
  ["/xcalibur", "/x-calibur"],
  ["/sports-flooring", "/oriental-yuhong/sports-flooring"],
  ["/hdpe-waterproofing", "/oriental-yuhong/hdpe-waterproofing"],
  ["/fire-rated-cement", "/cmci/fire-rated-cement"],
  ["/spc-flooring", "/vasa/spc-flooring"],
  ["/lvt-flooring", "/vasa/lvt-flooring"],
  ["/wall-panels", "/vasa/wall-panels"],
  ["/tools", "/bihui"],
];

const LONG_CACHE = "public, max-age=2592000, stale-while-revalidate=86400";

/**
 * Files Google crawls while rendering but should never count as pages:
 * build chunks, 3D models, the feed, the manifest and the favicon. Search
 * Console listed 33 of them as "Crawled - currently not indexed" on
 * 2026-11-12. X-Robots-Tag noindex keeps them fetchable for rendering (a
 * robots.txt block would not) and out of the page report. Never widen this
 * to a route that serves HTML.
 */
const NOT_PAGES = [
  "/_next/static/:path*",
  "/models/:path*",
  "/blog/rss.xml",
  "/manifest.webmanifest",
  "/favicon.ico",
];

const nextConfig: NextConfig = {
  experimental: {
    // Inline the (single, Tailwind v4) stylesheet - removes both
    // render-blocking CSS requests (Lighthouse 2026-08-20).
    inlineCss: true,
  },
  // Don't advertise the framework in response headers.
  poweredByHeader: false,
  images: {
    // AVIF first: the hero is a large photograph and the extra encode cost is
    // paid once, at build. Order matters - the first match against the
    // request's Accept header wins.
    formats: ["image/avif", "image/webp"],
    // Next 16 defaults this to [75] and silently snaps anything else to the
    // nearest allowed value. The hero asks for 90, so 90 has to be listed.
    qualities: [75, 90],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "sahihicc.com" }],
        destination: `${SITE}/:path*`,
        permanent: true,
      },
      // The production alias on Vercel serves the whole site as a second
      // host. Only this exact host: preview deployments keep their own URLs
      // (Vercel already marks those noindex).
      {
        source: "/:path*",
        has: [{ type: "host", value: "sahahicontructionstanzania.vercel.app" }],
        destination: `${SITE}/:path*`,
        permanent: true,
      },
      ...REDIRECTS.map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      // Large media that rarely changes: videos, 3D models, data sheets.
      ...["/videos/:path*", "/models/:path*", "/tds/:path*"].map((source) => ({
        source,
        headers: [{ key: "Cache-Control", value: LONG_CACHE }],
      })),
      ...NOT_PAGES.map((source) => ({
        source,
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      })),
      // Every PDF names the page that offers it as its canonical, the
      // documented way to canonicalise a non-HTML file. Built by
      // scripts/build-canonical-headers.mjs; `npm run check` fails if stale.
      ...Object.entries(canonicals as Record<string, string>).map(
        ([file, page]) => ({
          source: file,
          headers: [
            { key: "Link", value: `<${SITE}${page}>; rel="canonical"` },
          ],
        }),
      ),
    ];
  },
};

export default nextConfig;
