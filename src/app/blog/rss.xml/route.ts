import { posts } from "@/config/blog";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

const escape = (text: string) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** RSS 2.0 feed of the blog, generated from the registry. */
export function GET() {
  const items = [...posts]
    .sort((a, b) => b.datePublished.localeCompare(a.datePublished))
    .map(
      (post) => `    <item>
      <title>${escape(post.title)}</title>
      <link>${siteConfig.url}/blog/${post.slug}</link>
      <guid>${siteConfig.url}/blog/${post.slug}</guid>
      <pubDate>${new Date(`${post.datePublished}T08:00:00Z`).toUTCString()}</pubDate>
      <description>${escape(post.description)}</description>
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escape(siteConfig.brandName)} blog</title>
    <link>${siteConfig.url}/blog</link>
    <description>Guides for building in Tanzania.</description>
    <language>en</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
