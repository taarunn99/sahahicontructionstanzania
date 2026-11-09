import sitemap from "@/app/sitemap";

/** The same URLs as sitemap.xml, one per line, for tools that want plain text. */
export const dynamic = "force-static";

export function GET() {
  const urls = sitemap().map((entry) => entry.url);
  return new Response(`${urls.join("\n")}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
