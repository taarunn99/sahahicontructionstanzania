import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { QuoteCardAdd } from "@/components/quote/quote-card-add";
import { QuoteFilter } from "@/components/quote/quote-filter";
import { QuoteSender } from "@/components/quote/quote-sender";
import { Faq } from "@/components/sections/faq";
import { RelatedLinks } from "@/components/sections/related-links";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { bihuiHref, bihuiName, bihuiPages, bihuiPicture } from "@/config/bihui";
import { brandBySlug, type BrandSlug } from "@/config/brands";
import {
  lineHref,
  lines,
  productHref,
  productsInLine,
} from "@/config/catalogue";
import { cmciAll, cmciHref, cmciLines } from "@/config/cmci";
import { packshot } from "@/config/packshots";
import {
  productIllustrations,
  productOneLiners,
} from "@/config/product-one-liners";
import { productScenes } from "@/config/product-scenes";
import { coreRow } from "@/config/seo/core";
import { siteConfig } from "@/config/site";
import { faqJsonLd, type FaqItem } from "@/lib/faq";
import { ogBase, resolveOg } from "@/lib/seo";
import { cn } from "@/lib/utils";

/**
 * THE QUOTE LIST - owns "Mapei price list Tanzania" (SEO-STRATEGY 5.1; the
 * planned /price-list moved here, owner 2026-11-14). Price intent is
 * answered honestly: there is no printed list and no price on the site;
 * every product is on this page, the visitor builds one list across brands
 * and sends it on WhatsApp, by email or as copied text.
 *
 * THE LOOK (owner, 2026-11-14, after two rejected drafts: "minimalistic ...
 * solid colour palettes like what we have ... no stupid animations"): the
 * order sheet. A Swiss grid, flat and still. Each brand opens with a block
 * in its solid colour and its name set large in white; under it the
 * products as square tiles on a hairline-ruled grid: picture, name in Ink,
 * one grey line, the pack in mono, a small Ink "+" in the corner. The
 * list is a sticky Signal Yellow rail (below the grid on phones). Nothing
 * moves except a colour on hover. docs/QUOTE-DESIGN-OPTIONS.md keeps the
 * two other directions the owner may still choose; LOOK switches them.
 *
 * Server component. Every tile is in the HTML with a link to its page; the
 * "+" that turns into a stepper, the filter, the pill and the rail are the
 * client islands. The catalogue never enters the client bundle. Pictures
 * are the manufacturers' own pack shots where they exist, otherwise the
 * page's scene or illustration (docs/IMAGE-PROVENANCE.md).
 */

/** "sheet" (A, chosen), "grounds" (B), "ink" (C): docs/QUOTE-DESIGN-OPTIONS.md */
const LOOK: "sheet" | "grounds" | "ink" = "sheet";

const PATH = "/quote";
const ROW = coreRow(PATH);
const TITLE = ROW.titleOverride;
const DESCRIPTION = ROW.description;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    ...ogBase,
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    images: resolveOg(PATH) ?? ogBase.images,
  },
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Quote list", href: PATH },
];

const faq: FaqItem[] = [
  {
    q: "Is there a Mapei price list for Tanzania?",
    lead: "Not a printed one: every Mapei price is quoted for the job and the quantities.",
    points: [
      "Add the products you need to the list on this page and send it once",
      "The reply is a written quotation from our Dar es Salaam office",
      "Buyers also ask for 'bei ya Mapei'; the answer is the same list",
    ],
  },
  {
    q: "Can one list carry products from different brands?",
    lead: "Yes. Mapei, X-Calibur, Oriental Yuhong, the CMCI range and BIHUI tools go on the same list.",
    points: [
      "Each line keeps its brand, pack or code, and quantity",
      "Sports tracks, HDPE membrane and Vasa flooring are quoted per job: write them in the extra line",
    ],
  },
  {
    q: "Where is my list kept?",
    lead: "In your own browser, on this device, until you clear it.",
    points: [
      "Nothing is sent until you press WhatsApp, email or copy",
      "The pill at the bottom right of every page shows what is in it",
    ],
  },
  {
    q: "Can I send the list by email instead of WhatsApp?",
    lead: `Yes: the email button opens a message to ${siteConfig.contact.email} with the list written out.`,
    points: [
      "Copy the text to paste it into a tender or a purchase request",
      "Add your phone number so the quotation can come back by WhatsApp",
    ],
  },
];

type Tile = {
  id: string;
  name: string;
  brand: string;
  href: string;
  line: string;
  packs: string[];
  search: string;
  picture: { src: string; width: number; height: number; alt: string };
  /** A photograph fills the frame; a pack shot or drawing sits in it. */
  cover: boolean;
};

type Shelf = { id: string; label: string | null; tiles: Tile[] };

type Group = {
  id: string;
  brand: BrandSlug;
  name: string;
  note: string;
  href: string;
  shelves: Shelf[];
  count: number;
};

const illustration = (slug: string, name: string) => ({
  src: `/models/blog/${productIllustrations[slug] ?? "tile-bed"}.webp`,
  width: 1000,
  height: 1000,
  alt: `Illustration for ${name}`,
});

function groups(): Group[] {
  const out: Group[] = [];
  const byBrand = new Map<BrandSlug, Shelf[]>();
  for (const line of lines) {
    if (line.brand === "cmci") continue;
    const brand = brandBySlug[line.brand];
    const tiles = productsInLine(line.slug).map<Tile>((product) => {
      const pack = packshot(product.brand, product.slug);
      const scene = productScenes[product.slug];
      const picture = pack
        ? { ...pack, alt: `${product.name} pack` }
        : scene
          ? {
              src: scene.src,
              width: scene.width,
              height: scene.height,
              alt: scene.alt,
            }
          : illustration(product.slug, product.name);
      return {
        id: `${product.brand}:${product.slug}`,
        name: product.name,
        brand: brand.name,
        href: productHref(product),
        line: productOneLiners[product.slug] ?? product.type,
        packs: product.packs,
        search:
          `${product.name} ${brand.name} ${product.type} ${product.packs.join(" ")}`.toLowerCase(),
        picture,
        cover: !pack && Boolean(scene),
      };
    });
    if (tiles.length === 0) continue;
    const shelves = byBrand.get(line.brand) ?? [];
    shelves.push({
      id: line.slug,
      label: line.brand === "mapei" ? line.label : null,
      tiles,
    });
    byBrand.set(line.brand, shelves);
  }
  for (const [slug, shelves] of byBrand) {
    const brand = brandBySlug[slug];
    const count = shelves.reduce((sum, shelf) => sum + shelf.tiles.length, 0);
    const first = lines.find((line) => line.brand === slug);
    const href = first ? lineHref(first) : `/${slug}`;
    out.push({
      id: slug,
      brand: slug,
      name: brand.name,
      note:
        slug === "mapei"
          ? `${shelves.length} lines · ${brand.authorization.toLowerCase()}`
          : brand.authorization.toLowerCase(),
      href: href.includes("#")
        ? `/${slug}`
        : slug === "mapei"
          ? "/mapei"
          : href,
      shelves,
      count,
    });
  }
  out.push({
    id: "cmci",
    brand: "cmci",
    name: "CMCI range",
    note: "fireproofing · authorized dealer",
    href: "/cmci",
    count: cmciAll.length,
    shelves: [
      {
        id: "cmci-all",
        label: null,
        tiles: cmciAll.map<Tile>((product) => {
          const scene = productScenes[product.slug];
          const linePicture = cmciLines.find((line) =>
            product.lines.includes(line.slug),
          )?.picture;
          const picture = scene
            ? {
                src: scene.src,
                width: scene.width,
                height: scene.height,
                alt: scene.alt,
              }
            : linePicture
              ? { ...linePicture, alt: `Where ${product.name} is used` }
              : illustration(product.slug, product.name);
          return {
            id: `cmci:${product.slug}`,
            name: product.name,
            brand: "CMCI range",
            href: cmciHref(product),
            line: productOneLiners[product.slug] ?? product.type,
            packs: product.packs,
            search:
              `${product.name} cmci fireproofing ${product.type} ${product.packs.join(" ")}`.toLowerCase(),
            picture,
            cover: true,
          };
        }),
      },
    ],
  });
  out.push({
    id: "bihui",
    brand: "bihui",
    name: "BIHUI",
    note: "tiling tools · brand partner",
    href: "/bihui",
    count: bihuiPages.length,
    shelves: [
      {
        id: "bihui-all",
        label: null,
        tiles: bihuiPages.map<Tile>((family) => {
          const name = bihuiName(family);
          const codes = family.skus.map((row) => row.sku);
          const picture = bihuiPicture(family);
          return {
            id: `bihui:${family.slug}`,
            name,
            brand: "BIHUI",
            href: bihuiHref(family),
            line: family.category,
            packs: codes,
            search:
              `${name} bihui tool ${family.category} ${codes.join(" ")}`.toLowerCase(),
            picture: picture
              ? { ...picture, alt: `${name}, BIHUI tool` }
              : illustration(family.slug, name),
            cover: false,
          };
        }),
      },
    ],
  });
  return out;
}

/** One tile: picture, "+", name, one line, pack. Still; only a colour moves. */
function ProductTile({ tile }: { tile: Tile }) {
  return (
    <li
      data-search={tile.search}
      className={cn(
        "relative flex flex-col transition-colors duration-200",
        LOOK === "grounds"
          ? "rounded-xl bg-white p-3"
          : "bg-background p-3 hover:bg-white sm:p-4",
      )}
    >
      <Link
        href={tile.href}
        tabIndex={-1}
        aria-hidden
        className="relative block aspect-square overflow-hidden rounded-lg bg-white"
      >
        <Image
          src={tile.picture.src}
          alt={tile.picture.alt}
          fill
          sizes="(min-width: 80rem) 14vw, (min-width: 64rem) 18vw, (min-width: 40rem) 30vw, 46vw"
          className={tile.cover ? "object-cover" : "object-contain p-4"}
        />
      </Link>
      <QuoteCardAdd
        item={{
          id: tile.id,
          name: tile.name,
          brand: tile.brand,
          href: tile.href,
          packs: tile.packs,
        }}
        className="absolute top-5 right-5 sm:top-6 sm:right-6"
      />
      <Link
        href={tile.href}
        className="font-display mt-4 block text-[0.95rem] leading-tight font-extrabold uppercase hover:underline"
      >
        {tile.name}
      </Link>
      <p className="text-muted mt-1 text-xs leading-snug sm:text-sm">
        {tile.line}
      </p>
      <p className="spec-sh text-muted mt-auto pt-3 text-xs">
        {tile.packs.length > 3
          ? `${tile.packs.length} codes`
          : tile.packs.join(" · ")}
      </p>
    </li>
  );
}

function BrandHead({ group }: { group: Group }) {
  const sheet = LOOK === "sheet";
  const ink = LOOK === "ink";
  return (
    <header
      className={cn(
        sheet && "bg-brand px-5 py-8 text-white sm:px-8 sm:py-10",
        ink && "border-brand border-b-4 pb-4",
        LOOK === "grounds" && "px-5 pt-8 pb-6 text-white sm:px-8",
      )}
    >
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
        <h2
          id={`quote-${group.id}-heading`}
          className="font-display text-[clamp(2.2rem,6vw,4.5rem)] leading-[0.95] tracking-tight uppercase"
        >
          {group.name}
        </h2>
        <p className={cn("spec-sh pb-1", ink ? "text-muted" : "text-white")}>
          {group.count} products
        </p>
      </div>
      <p
        className={cn(
          "mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm",
          ink ? "text-muted" : "text-white",
        )}
      >
        <span>{group.note}</span>
        <Link href={group.href} className="u-line">
          The {group.name} page
        </Link>
      </p>
    </header>
  );
}

export default function QuotePage() {
  const catalogue = groups();
  const total = catalogue.reduce((sum, group) => sum + group.count, 0);

  return (
    <main className="theme-light bg-background text-foreground flex-1">
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "WebPage",
            name: TITLE,
            description: DESCRIPTION,
            url: `${siteConfig.url}${PATH}`,
            about: { "@id": `${siteConfig.url}/#organization` },
          },
          faqJsonLd(faq),
        ]}
      />

      {/* ---- Masthead: type only ------------------------------------------ */}
      <section className="border-deep border-b">
        <Container className="pt-28 pb-10 sm:pt-36 sm:pb-14">
          <Breadcrumb items={crumbs} />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.618fr_1fr] lg:items-end">
            <div>
              <p className="label-sh text-muted">
                Quote list · {total} products · prices by quotation
              </p>
              <h1 className="font-display mt-4 text-[clamp(2.6rem,9vw,7rem)] leading-[0.92] tracking-tight uppercase">
                Build your list.
                <br />
                Send it once.
              </h1>
            </div>
            <div>
              <p className="max-w-md leading-relaxed">
                No printed Mapei price list for Tanzania, and no price on any
                page: every price is quoted for the job and the quantities.
                Press + on what you need, from every brand, then send the whole
                list on WhatsApp or by email.
              </p>
              <ol className="spec-sh text-muted mt-5 flex flex-wrap gap-x-6 gap-y-1">
                <li>01 Add</li>
                <li>02 Check the list</li>
                <li>03 Send</li>
              </ol>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
            <QuoteFilter listId="quote-catalogue" />
            <nav aria-label="Brands">
              <ul className="flex flex-wrap gap-2">
                {catalogue.map((group) => (
                  <li key={group.id}>
                    <a
                      href={`#quote-${group.id}`}
                      className={cn(
                        `brand-${group.brand}`,
                        "chip-sh border-deep inline-flex min-h-11 items-center gap-2.5 rounded-full border px-4 text-sm font-semibold",
                      )}
                    >
                      <span
                        aria-hidden
                        className="bg-brand inline-block size-2.5 rounded-full"
                      />
                      {group.name}
                      <span className="spec-sh font-normal">{group.count}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Container>
      </section>

      {/* ---- The sheet and the rail --------------------------------------- */}
      <Container className="py-10 sm:py-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_21rem] lg:items-start lg:gap-10 xl:grid-cols-[1fr_23rem]">
          <div
            id="quote-catalogue"
            className="min-w-0 space-y-12 sm:space-y-16"
          >
            {catalogue.map((group) => (
              <section
                key={group.id}
                id={`quote-${group.id}`}
                data-group
                aria-labelledby={`quote-${group.id}-heading`}
                className={cn(
                  `brand-${group.brand}`,
                  "scroll-mt-28 overflow-hidden",
                  LOOK === "sheet" && "border-deep rounded-2xl border",
                  LOOK === "grounds" && "bg-brand rounded-2xl pb-5",
                )}
              >
                <BrandHead group={group} />
                {group.shelves.map((shelf, index) => (
                  <div key={shelf.id} data-group>
                    {shelf.label && (
                      <h3
                        className={cn(
                          "label-sh flex items-baseline gap-4 px-4 pt-6 pb-3 sm:px-5",
                          LOOK === "grounds" ? "text-white" : "text-muted",
                        )}
                      >
                        <span className="font-display text-base">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {shelf.label}
                      </h3>
                    )}
                    <ul
                      className={cn(
                        "grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4",
                        LOOK === "grounds"
                          ? "gap-3 px-4 sm:px-5"
                          : "bg-deep/15 border-deep/15 gap-px border-t",
                      )}
                    >
                      {shelf.tiles.map((tile) => (
                        <ProductTile key={tile.id} tile={tile} />
                      ))}
                    </ul>
                  </div>
                ))}
              </section>
            ))}
            <p className="text-muted max-w-2xl text-sm leading-relaxed">
              Sports flooring, HDPE membrane, Vasa floors and wall panels are
              quoted per job from their own pages; write them in the extra line
              of your list. A picture without a pack is an illustration of where
              the product is used, not the pack.
            </p>
          </div>

          <aside
            id="send"
            aria-label="Your quote list"
            className="bg-surface scroll-mt-24 rounded-2xl p-5 sm:p-6 lg:sticky lg:top-24 lg:max-h-[calc(100svh-7rem)] lg:overflow-y-auto"
            data-lenis-prevent
          >
            <QuoteSender layout="rail" />
          </aside>
        </div>
      </Container>

      <Faq items={faq} heading="Prices, in short." />

      <RelatedLinks
        links={[
          {
            label: "The sale",
            href: "/sale",
            sub: "This month's Mapei offer, names only",
          },
          {
            label: "Specifier pack",
            href: "/specifier-pack",
            sub: "Every BOQ clause in one spreadsheet",
          },
          {
            label: "All products",
            href: "/products",
            sub: "By job and by brand, with pictures",
          },
        ]}
      />
    </main>
  );
}
