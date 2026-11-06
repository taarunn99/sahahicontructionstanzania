import { brands } from "@/config/brands";
import {
  lineHref,
  lines,
  productHref,
  products,
  productsInLine,
} from "@/config/catalogue";
import { siteConfig } from "@/config/site";

/**
 * llms.txt - the curated map answer engines and LLM crawlers read first.
 * Generated from the same registries as the pages and the sitemap so it
 * never drifts. Spec: llmstxt.org.
 */

export const dynamic = "force-static";

export function GET() {
  const base = siteConfig.url;
  const { address, contact } = siteConfig;
  const authorized = brands
    .filter((brand) => brand.authorization === "Authorized distributor")
    .map((brand) => brand.name);

  const out = [
    `# ${siteConfig.brandName}`,
    "",
    `> ${siteConfig.legalName} is a construction chemicals company in ${address.city}, ${address.countryName}, and an authorized distributor of ${authorized.join(", ")}. It supplies tile adhesives, grouts, waterproofing systems, epoxy and polyurethane flooring, and concrete repair products to contractors, applicators, consultants, developers and resellers, and runs applicator training and CPD programmes. Prices are quoted on request and are not published.`,
    "",
    `Company details: ${address.street}, ${address.district}, ${address.city}, ${address.countryName}. Telephone and WhatsApp ${contact.phone}. Email ${contact.email}.`,
    "",
    "## Product lines",
    "",
    ...lines.map((line) => {
      const brand = brands.find((b) => b.slug === line.brand)!;
      const names = productsInLine(line.slug)
        .map((product) => product.name)
        .join(", ");
      return `- [${brand.name} ${line.label}](${base}${lineHref(line)}): ${names}`;
    }),
    "",
    "## Products with their own page (data sheet, technical data, coverage calculator)",
    "",
    ...products
      .filter((product) => !productHref(product).includes("#"))
      .map(
        (product) =>
          `- [${product.name}](${base}${productHref(product)}): ${product.type}. ${product.summary}`,
      ),
    "",
    "## Pages",
    "",
    `- [Mapei in Tanzania](${base}/mapei): the Mapei hub, five product lines`,
    `- [Mapei nchini Tanzania](${base}/sw/mapei): the Mapei hub in Swahili, with a Swahili home page at ${base}/sw`,
    `- [Oriental Yuhong in Tanzania](${base}/oriental-yuhong): waterproofing coatings for wet rooms, roofs and walls, a joint sealant and a waterplug`,
    `- [X-Calibur in Tanzania](${base}/x-calibur): epoxy flooring, primer, waterproof coating and joint sealant`,
    `- [BIHUI in Tanzania](${base}/bihui): tiling tools, levelling systems, trowels, mixers, grinders, laser levels and cutters`,
    `- [Blog](${base}/blog): guides to waterproofing, tiling, flooring and concrete repair in Tanzania`,
    `- [Products](${base}/products): all ${products.length} catalogued products with classification, consumption and pack size`,
    `- [Projects](${base}/projects): sites and contractors in Tanzania supplied with Mapei products, with the products supplied to each`,
    `- [About](${base}/about): the company, its mission and its training initiatives`,
    `- [Contact](${base}/contact): quotation requests by WhatsApp, phone, email or form`,
    "",
  ];

  return new Response(out.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
