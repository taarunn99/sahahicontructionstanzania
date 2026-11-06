import { searchIndex } from "@/config/chrome";

/** Static search index, generated from the catalogue at build time. */
export const dynamic = "force-static";

export function GET() {
  return Response.json(searchIndex, {
    headers: { "Cache-Control": "public, max-age=3600, s-maxage=86400" },
  });
}
