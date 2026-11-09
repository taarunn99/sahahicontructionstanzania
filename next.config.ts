import type { NextConfig } from "next";

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
        destination: "https://www.sahihicc.com/:path*",
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
    ];
  },
};

export default nextConfig;
