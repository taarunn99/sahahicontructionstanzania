import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ModelViewer } from "@/components/media/model-viewer";
import { Reveal } from "@/components/motion/reveal";
import {
  BrandBand,
  CatalogueFilter,
  CatalogueProvider,
} from "@/components/sections/catalogue/catalogue-filter";
import { ProductShelf } from "@/components/sections/catalogue/product-shelf";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { FlowButton } from "@/components/ui/flow-button";
import {
  bihuiCategories,
  bihuiFamilies,
  bihuiFamilyBySlug,
  bihuiHref,
  bihuiModel,
  bihuiName,
  bihuiPicture,
} from "@/config/bihui";
import { brandBySlug, brands, type BrandSlug } from "@/config/brands";
import {
  lineHref,
  lines,
  productHref,
  products,
  productsInLine,
  type Product,
} from "@/config/catalogue";
import { linePhotos, materialPhotos } from "@/config/images";
import { packshot } from "@/config/packshots";
import {
  productIllustrations,
  productOneLiners,
} from "@/config/product-one-liners";
import { siteConfig, whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";

const TITLE = "Mapei & X-Calibur Products in Tanzania - Full Catalogue";
const DESCRIPTION =
  "Every Mapei, Oriental Yuhong, X-Calibur and BIHUI product from Sahihi in Dar es Salaam: tile adhesives, waterproofing, resin floors, repair and tools.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/products" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/products" },
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
];

/** The first thing on the page: pick the job, land on its shelf. */
const JOBS = [
  {
    label: "Lay tiles",
    href: "#tile-adhesives-grouts",
    photo: linePhotos["tile-adhesives-grouts"],
  },
  {
    label: "Level a floor",
    href: "#primers-levelling",
    photo: linePhotos["primers-levelling"],
  },
  {
    label: "Repair concrete",
    href: "#concrete-repair",
    photo: linePhotos["concrete-repair"],
  },
  {
    label: "Coat a floor",
    href: "#resin-flooring",
    photo: linePhotos["resin-flooring"],
  },
  {
    label: "Stop water",
    href: "#waterproofing",
    photo: linePhotos["waterproofing"],
  },
  { label: "Get the tools", href: "#bihui", photo: materialPhotos[2] },
];

/** One line, stage colour and 3D model per shelf. */
const SHELVES: Record<
  string,
  { line: string; stage: string; model: string; alt: string }
> = {
  "tile-adhesives-grouts": {
    line: "Everything that fixes a tile and finishes the joint.",
    stage: "bg-accent",
    model: "tile-bed",
    alt: "A tile on a bed of adhesive",
  },
  "primers-levelling": {
    line: "What goes down before the floor finish.",
    stage: "bg-surface",
    model: "screed-section",
    alt: "A cut through a floor screed",
  },
  "concrete-repair": {
    line: "Mortars, grouts and anchors for damaged concrete.",
    stage: "bg-line",
    model: "spalled-column",
    alt: "A spalled concrete column",
  },
  "resin-flooring": {
    line: "Epoxy and polyurethane floors, with their primers and finishes.",
    stage: "bg-surface",
    model: "epoxy-section",
    alt: "A cut through an epoxy floor",
  },
  waterproofing: {
    line: "Membranes, waterstops and sealants that keep water out.",
    stage: "bg-accent",
    model: "rain-house",
    alt: "A house under rain",
  },
  "oriental-yuhong": {
    line: "Waterproofing for wet rooms, roofs and walls.",
    stage: "bg-accent",
    model: "parapet-roof",
    alt: "A roof with a parapet",
  },
  "x-calibur": {
    line: "Epoxy floors, bonding, wet-area coating and joint sealing.",
    stage: "bg-surface",
    model: "sealant-joint",
    alt: "A sealed joint in concrete",
  },
};

function ProductCardShell({
  href,
  name,
  line,
  picture,
  alt,
}: {
  href: string;
  name: string;
  line: string;
  picture: { src: string; width: number; height: number };
  alt: string;
}) {
  return (
    <li className="w-[68vw] max-w-[17rem] shrink-0 sm:w-[17rem]">
      <article className="bg-chalk border-deep group flex h-full flex-col overflow-hidden rounded-2xl border">
        <Link
          href={href}
          draggable={false}
          tabIndex={-1}
          aria-hidden
          className="relative block aspect-square overflow-hidden bg-white"
        >
          <Image
            src={picture.src}
            alt={alt}
            fill
            draggable={false}
            sizes="(min-width: 40rem) 17rem, 68vw"
            className="object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-rotate-3"
          />
        </Link>
        <div className="flex flex-1 flex-col p-5">
          <h4 className="font-display text-xl leading-tight text-balance">
            {name}
          </h4>
          <p className="text-muted mt-2 mb-5 text-sm leading-relaxed">{line}</p>
          <FlowButton href={href} size="sm" className="mt-auto self-start">
            Explore<span className="sr-only"> {name}</span>
          </FlowButton>
        </div>
      </article>
    </li>
  );
}

function ProductCard({ product }: { product: Product }) {
  const pack = packshot(product.brand, product.slug);
  const illustration = productIllustrations[product.slug];
  const picture = pack ?? {
    src: `/models/blog/${illustration ?? "tile-bed"}.webp`,
    width: 1000,
    height: 1000,
  };
  return (
    <ProductCardShell
      href={productHref(product)}
      name={product.name}
      line={productOneLiners[product.slug] ?? product.type}
      picture={picture}
      alt={pack ? `${product.name} pack` : `Illustration for ${product.name}`}
    />
  );
}

/** The left of a shelf: name, one line, Explore, and a model to turn. */
function ShelfIntro({
  title,
  line,
  href,
  count,
  model,
  poster,
  alt,
}: {
  title: string;
  line: string;
  href: string;
  count: string;
  model: string;
  poster: { src: string; width: number; height: number };
  alt: string;
}) {
  return (
    <Reveal className="min-w-0">
      <p className="spec-sh">{count}</p>
      <h3 className="font-display text-phi-2 mt-3 leading-[1.05] text-balance">
        {title}
      </h3>
      <p className="mt-3 max-w-md leading-relaxed">{line}</p>
      <FlowButton href={href} className="mt-6">
        Explore
      </FlowButton>
      <figure className="bg-chalk border-deep mt-8 overflow-hidden rounded-2xl border">
        <ModelViewer
          model={model}
          poster={poster}
          alt={alt}
          className="aspect-[4/3]"
        />
      </figure>
    </Reveal>
  );
}

function Band({
  stage,
  id,
  children,
}: {
  stage: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(stage, "grain-sh relative scroll-mt-32 py-14 sm:py-20")}
    >
      <Container className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,21rem)_minmax(0,1fr)] lg:gap-14">
        {children}
      </Container>
    </section>
  );
}

function BrandTitle({ slug, explore }: { slug: BrandSlug; explore?: string }) {
  const brand = brandBySlug[slug];
  return (
    <header className="bg-chalk py-10 sm:py-14">
      <Container className="flex flex-wrap items-center justify-between gap-x-10 gap-y-5">
        <div>
          <Image
            src={brand.logo.src}
            alt={`${brand.name} logo`}
            width={brand.logo.width}
            height={brand.logo.height}
            className="h-8 w-auto"
          />
          <h2 className="font-display text-phi-3 mt-4 tracking-tight">
            {brand.name}
          </h2>
        </div>
        {explore && (
          <FlowButton href={explore}>Explore {brand.name}</FlowButton>
        )}
      </Container>
    </header>
  );
}

/**
 * PRODUCTS (owner, 2026-11-06): name, one line, picture, Explore. Everything
 * technical lives on the product's own page. Every product is in the raw HTML
 * and links to its page; the filter and the shelves only change what is shown.
 */
export default function ProductsPage() {
  const mapeiLines = lines.filter((line) => line.brand === "mapei");
  const yuhong = lines.find((line) => line.brand === "oriental-yuhong");
  const xcalibur = lines.find((line) => line.brand === "x-calibur");

  // Two tools from each BIHUI category, with a picture, then the whole hub.
  const tools = bihuiCategories.flatMap((category) =>
    category.families.filter((family) => bihuiPicture(family)).slice(0, 2),
  );
  const mixer = bihuiFamilyBySlug["portable-mortar-mixer"];
  const mixerPicture = mixer && bihuiPicture(mixer);
  const mixerModel = mixer && bihuiModel(mixer);

  const countOf = (brand: string) =>
    products.filter((product) => product.brand === brand).length;
  const filterOptions = [
    {
      value: "all",
      label: "All",
      count: products.length + bihuiFamilies.length,
    },
    ...brands.map((brand) => ({
      value: brand.slug,
      label: brand.name,
      count:
        brand.slug === "bihui" ? bihuiFamilies.length : countOf(brand.slug),
    })),
  ];

  const shelf = (line: (typeof lines)[number], index = 0) => {
    const look = SHELVES[line.slug];
    const items = productsInLine(line.slug);
    if (!look) return null;
    return (
      <Band key={line.slug} stage={look.stage} id={line.slug}>
        <ShelfIntro
          title={line.label}
          line={look.line}
          href={lineHref(line)}
          count={`${String(index + 1).padStart(2, "0")} · ${items.length} products`}
          model={`/models/blog/${look.model}.glb`}
          poster={{
            src: `/models/blog/${look.model}.webp`,
            width: 1000,
            height: 1000,
          }}
          alt={look.alt}
        />
        <ProductShelf label={line.label}>
          {items.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </ProductShelf>
      </Band>
    );
  };

  return (
    <main className="theme-light bg-background text-foreground flex-1">
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "CollectionPage",
            name: TITLE,
            description: DESCRIPTION,
            url: `${siteConfig.url}/products`,
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: products.length,
              itemListElement: products.map((product, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: product.name,
                url: `${siteConfig.url}${productHref(product)}`,
              })),
            },
          },
        ]}
      />

      <section className="bg-surface pt-28 pb-12 sm:pt-36 sm:pb-16">
        <Container>
          <Breadcrumb items={crumbs} />
          <h1 className="font-display text-phi-4 mt-6 tracking-tight text-balance">
            What&apos;s the job?
          </h1>
          <p className="text-phi-1 mt-4 max-w-2xl leading-snug">
            Our products, sorted by what you need done.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
            {JOBS.map((job, index) => (
              <li key={job.href}>
                <a
                  href={job.href}
                  className="border-deep bg-chalk group block h-full overflow-hidden rounded-2xl border transition-transform duration-500 hover:-translate-y-1.5 hover:-rotate-1"
                >
                  <span className="relative block aspect-[4/3] overflow-hidden lg:aspect-[4/5]">
                    <Image
                      src={job.photo.src}
                      alt={job.photo.alt}
                      fill
                      preload={index < 2}
                      sizes="(min-width: 64rem) 16vw, (min-width: 40rem) 33vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </span>
                  <span className="font-display block px-4 py-3 text-base leading-tight sm:text-lg">
                    {job.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CatalogueProvider>
        <div>
          <CatalogueFilter options={filterOptions} />

          <BrandBand brand="mapei" id="mapei">
            <BrandTitle slug="mapei" explore="/mapei" />
            {mapeiLines.map((line, index) => shelf(line, index))}
          </BrandBand>

          <BrandBand brand="oriental-yuhong" id="oriental-yuhong">
            <BrandTitle slug="oriental-yuhong" explore="/oriental-yuhong" />
            {yuhong && shelf(yuhong)}
          </BrandBand>

          <BrandBand brand="x-calibur" id="x-calibur">
            <BrandTitle slug="x-calibur" explore="/x-calibur" />
            {xcalibur && shelf(xcalibur)}
          </BrandBand>

          <BrandBand brand="bihui" id="bihui">
            <BrandTitle slug="bihui" explore="/bihui" />
            <Band stage="bg-accent">
              <ShelfIntro
                title="Tools for the trade"
                line="Most of them you can turn in 3D before you ask."
                href="/bihui"
                count={`${bihuiFamilies.length} tools`}
                model={mixerModel ?? "/models/blog/mortar-mixer.glb"}
                poster={
                  mixerPicture ?? {
                    src: "/models/blog/mortar-mixer.webp",
                    width: 1000,
                    height: 1000,
                  }
                }
                alt="BIHUI portable mortar mixer"
              />
              <ProductShelf label="BIHUI tools">
                {tools.map((family) => {
                  const picture = bihuiPicture(family);
                  return picture ? (
                    <ProductCardShell
                      key={family.slug}
                      href={bihuiHref(family)}
                      name={bihuiName(family)}
                      line={family.category}
                      picture={picture}
                      alt={`BIHUI ${bihuiName(family)}`}
                    />
                  ) : null;
                })}
              </ProductShelf>
            </Band>
          </BrandBand>

          <BrandBand brand="cmci" id="cmci">
            <BrandTitle slug="cmci" />
            <section className="bg-surface py-14 sm:py-20">
              <Container className="flex flex-wrap items-center justify-between gap-6">
                <p className="font-display text-phi-2 max-w-2xl leading-[1.05] text-balance">
                  The CMCI range is supplied to project requirement.
                </p>
                <FlowButton href={whatsappLink("the CMCI range")}>
                  Ask about CMCI
                </FlowButton>
              </Container>
            </section>
          </BrandBand>
        </div>
      </CatalogueProvider>

      <section className="py-8">
        <Container>
          <p className="text-muted max-w-3xl text-sm leading-relaxed">
            3D models and some pictures are illustrative. Product names are
            trademarks of their manufacturers.
          </p>
        </Container>
      </section>

      <CtaBand
        heading="Send the list. Get the quotation."
        body="Product names and quantities are enough to start. If you only know the job, describe it and we will work out the rest."
        topic="a quotation for these products"
      />
    </main>
  );
}
