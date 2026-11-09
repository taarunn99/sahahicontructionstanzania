import type { MetadataRoute } from "next";

import { lineHref, lines, productHref, products } from "@/config/catalogue";
import { bihuiFamilies, bihuiHref } from "@/config/bihui";
import { cmciHref, cmciProducts } from "@/config/cmci";
import { blogCategories, posts, postsInCategory } from "@/config/blog";
import { SYSTEMS as SPORTS_SYSTEMS } from "@/config/oyh-sports-systems";
import { siteConfig } from "@/config/site";
import { enTwin, swTwin, swTwins } from "@/config/sw-routes";

/**
 * Generated sitemap. Every route that exists is listed here, and nothing
 * that does not exist. Hub, pillar and item URLs come from the catalogue,
 * so a catalogue update can never orphan a URL. Anchors (/products#slug)
 * are not URLs and are never listed.
 *
 * lastModified is a real edit date per route, not "now": a sitemap whose
 * dates change on every build teaches crawlers to ignore them.
 */
const CORE: { path: string; modified: string; priority: number }[] = [
  { path: "", modified: "2026-11-05", priority: 1 },
  { path: "/mapei", modified: "2026-11-05", priority: 0.9 },
  { path: "/bihui", modified: "2026-11-06", priority: 0.8 },
  { path: "/cmci", modified: "2026-11-07", priority: 0.8 },
  { path: "/cmci/fire-rated-cement", modified: "2026-11-07", priority: 0.9 },
  { path: "/vasa", modified: "2026-11-07", priority: 0.9 },
  { path: "/vasa/spc-flooring", modified: "2026-11-07", priority: 0.9 },
  { path: "/vasa/lvt-flooring", modified: "2026-11-07", priority: 0.9 },
  { path: "/vasa/wall-panels", modified: "2026-11-07", priority: 0.7 },
  {
    path: "/oriental-yuhong/hdpe-waterproofing",
    modified: "2026-11-07",
    priority: 0.9,
  },
  {
    path: "/oriental-yuhong/sports-flooring",
    modified: "2026-11-09",
    priority: 0.8,
  },
  ...SPORTS_SYSTEMS.map((system) => ({
    path: `/oriental-yuhong/sports-flooring/${system.slug}`,
    modified: "2026-11-09",
    priority: 0.8,
  })),
  { path: "/products", modified: "2026-11-05", priority: 0.8 },
  { path: "/projects", modified: "2026-11-05", priority: 0.7 },
  { path: "/blog", modified: "2026-11-06", priority: 0.7 },
  { path: "/about", modified: "2026-11-05", priority: 0.6 },
  { path: "/contact", modified: "2026-11-05", priority: 0.6 },
];

/** Date the Mapei cluster's data (data sheets, calculators) was last set. */
const CATALOGUE_MODIFIED = "2026-11-05";

const isRoute = (href: string) => !href.includes("#");

export default function sitemap(): MetadataRoute.Sitemap {
  const pillars = lines
    .map(lineHref)
    .filter(isRoute)
    .map((path) => ({ path, modified: CATALOGUE_MODIFIED, priority: 0.8 }));
  const items = products
    .map(productHref)
    .filter(isRoute)
    .map((path) => ({ path, modified: CATALOGUE_MODIFIED, priority: 0.7 }));

  const blog = [
    ...blogCategories
      .filter((category) => postsInCategory(category.slug).length > 0)
      .map((category) => ({
        path: `/blog/category/${category.slug}`,
        modified: "2026-11-06",
        priority: 0.5,
      })),
    ...posts.map((post) => ({
      path: `/blog/${post.slug}`,
      modified: post.dateModified,
      priority: 0.6,
    })),
  ];

  const tools = bihuiFamilies.map((family) => ({
    path: bihuiHref(family),
    modified: "2026-11-06",
    priority: 0.5,
  }));

  const fireproofing = cmciProducts.map((product) => ({
    path: cmciHref(product),
    modified: "2026-11-07",
    priority: 0.5,
  }));

  // The real Swahili pages, each paired with its English twin by hreflang.
  const swahili = swTwins.map(([, path]) => ({
    path,
    modified: "2026-11-06",
    priority: path === "/sw" ? 0.8 : 0.6,
  }));

  return [
    ...CORE,
    ...pillars,
    ...items,
    ...tools,
    ...fireproofing,
    ...blog,
    ...swahili,
  ].map((route) => {
    const path = route.path === "" ? "/" : route.path;
    const english = enTwin(path) ?? (swTwin(path) ? path : undefined);
    return {
      url: `${siteConfig.url}${route.path}`,
      lastModified: new Date(route.modified),
      changeFrequency: route.path === "" ? "weekly" : "monthly",
      priority: route.priority,
      ...(english
        ? {
            alternates: {
              languages: {
                en: `${siteConfig.url}${english === "/" ? "" : english}`,
                sw: `${siteConfig.url}${swTwin(english)}`,
              },
            },
          }
        : {}),
    };
  });
}
