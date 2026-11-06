import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

// Allow all, point at the sitemap, and nothing else. This file is the ONLY
// robots source: zero noindex anywhere on the site. AI crawlers (GPTBot,
// ClaudeBot, PerplexityBot, Google-Extended) are allowed by the wildcard.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
