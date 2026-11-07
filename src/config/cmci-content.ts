import fs from "node:fs";
import path from "node:path";

import type { ProductContent } from "@/components/sections/product/product-detail";

/** SERVER ONLY: reads a CMCI product's content from disk at build time. */
export function cmciContent(slug: string): ProductContent | null {
  const file = path.join(process.cwd(), "src/content/cmci", `${slug}.json`);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf8")) as ProductContent;
}
