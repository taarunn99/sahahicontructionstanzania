import type { ProductContent } from "@/components/sections/product/product-detail";
import { productHref, products, type Product } from "@/config/catalogue";
import { cmciAll, cmciHref, cmciTds } from "@/config/cmci";
import { cmciContent } from "@/config/cmci-content";
import { mapeiContent, mapeiTds } from "@/config/mapei";
import { oyhContent, oyhTds } from "@/config/oriental-yuhong";
import { siteConfig } from "@/config/site";
import { xcaliburContent, xcaliburTds } from "@/config/x-calibur";
import { boqClause } from "@/lib/boq";

/**
 * THE SPECIFIER PACK (owner, 2026-11-10): every product's BOQ clause, its
 * standards, data sheet edition and links, in one table and one spreadsheet,
 * for consultants and quantity surveyors writing a specification.
 *
 * SERVER ONLY. Built from exactly what each product page shows, through the
 * same boqClause(). No price, rate or amount column, ever. CMCI is a range,
 * never worded as the maker (GOVERNANCE): its rows say "CMCI range" and the
 * clause points to "the manufacturer's" data sheet. Tools have no clause and
 * are left out.
 */

export type SpecRow = {
  /** "Mapei", "Oriental Yuhong", "X-Calibur" or "CMCI range". */
  range: string;
  rangeSlug: string;
  name: string;
  type: string;
  standards: string;
  edition: string;
  /** Absolute URL of the unaltered data sheet PDF, or "". */
  sheet: string;
  /** Absolute URL of the product page. */
  page: string;
  path: string;
  clause: string;
};

type Doc = { file: string; edition?: string } | undefined;

const RANGES: {
  slug: string;
  label: string;
  maker: string | null;
  items: () => Product[];
  href: (product: Product) => string;
  content: (slug: string) => ProductContent | null;
  doc: (slug: string) => Doc;
}[] = [
  {
    slug: "mapei",
    label: "Mapei",
    maker: "Mapei",
    items: () => products.filter((p) => p.brand === "mapei"),
    href: productHref,
    content: mapeiContent,
    doc: (slug) => mapeiTds[slug],
  },
  {
    slug: "oriental-yuhong",
    label: "Oriental Yuhong",
    maker: "Oriental Yuhong",
    items: () => products.filter((p) => p.brand === "oriental-yuhong"),
    href: productHref,
    content: oyhContent,
    doc: (slug) => oyhTds[slug],
  },
  {
    slug: "x-calibur",
    label: "X-Calibur",
    maker: "X-Calibur",
    items: () => products.filter((p) => p.brand === "x-calibur"),
    href: productHref,
    content: xcaliburContent,
    doc: (slug) => xcaliburTds[slug],
  },
  {
    slug: "cmci",
    label: "CMCI range",
    maker: null,
    items: () => cmciAll,
    href: cmciHref,
    content: cmciContent,
    doc: (slug) => cmciTds[slug],
  },
];

const dash = (text: string) => text.replace(/[\u2010-\u2014]/g, "-");

export function specifierRows(): SpecRow[] {
  return RANGES.flatMap((range) =>
    range.items().flatMap((product) => {
      const content = range.content(product.slug);
      const doc = range.doc(product.slug);
      // The same de-duplication as the product page.
      const standards = (content?.standards ?? []).filter(
        (entry, index, all) =>
          all.findIndex(
            (other) =>
              other.standard === entry.standard && other.value === entry.value,
          ) === index,
      );
      const clause = boqClause({
        maker: range.maker,
        name: product.name,
        type: product.type,
        standards,
        consumption: product.consumption,
        edition: doc?.edition,
      });
      if (!clause) return [];
      const path = range.href(product);
      return [
        {
          range: range.label,
          rangeSlug: range.slug,
          name: product.name,
          type: dash(product.type),
          standards: dash(
            [
              ...new Set(
                standards
                  .filter((s) => s.standard.trim())
                  .map((s) =>
                    /^in compliance with$/i.test(s.value.trim())
                      ? `${s.standard} (compliance stated)`
                      : `${s.standard} ${s.value}`.trim(),
                  ),
              ),
            ].join("; "),
          ),
          edition: doc?.edition ? dash(doc.edition) : "",
          sheet: doc ? `${siteConfig.url}${doc.file}` : "",
          page: `${siteConfig.url}${path}`,
          path,
          clause,
        },
      ];
    }),
  );
}

/**
 * The pack as a CSV that Excel opens directly (UTF-8 with a byte order mark).
 * Unit and Quantity are left empty for the bill; there is no rate column.
 */
export function specifierCsv(rows: SpecRow[]): string {
  const cell = (text: string) => `"${text.replace(/"/g, '""')}"`;
  const head = [
    "Item",
    "Range",
    "Product",
    "Type",
    "Standards and classes (data sheet)",
    "Data sheet edition",
    "Data sheet",
    "Product page",
    "Description (BOQ clause)",
    "Unit",
    "Quantity",
  ];
  const body = rows.map((row, index) =>
    [
      String(index + 1),
      row.range,
      row.name,
      row.type,
      row.standards,
      row.edition,
      row.sheet,
      row.page,
      row.clause,
      "",
      "",
    ]
      .map(cell)
      .join(","),
  );
  return `\uFEFF${[head.map(cell).join(","), ...body].join("\r\n")}\r\n`;
}

export const SPECIFIER_PATH = "/specifier-pack";
export const SPECIFIER_CSV = "/specifier-pack.csv";
