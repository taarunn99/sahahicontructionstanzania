/* eslint-disable @next/next/no-img-element */
import { RelatedLinks } from "@/components/sections/related-links";
import { ModelCta } from "@/components/sections/model-cta";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { Faq } from "@/components/sections/faq";
import { Downloads } from "@/components/sections/vasa/decor-grid";
import { JsonLd } from "@/components/seo/json-ld";
import { LayerStack } from "@/components/three-d/layer-stack";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { FlowButton } from "@/components/ui/flow-button";
import { brandBySlug } from "@/config/brands";
import { siteConfig } from "@/config/site";
import {
  decorsIn,
  spcLayers,
  spcVsLvt,
  vasaCollections,
  vasaDecors,
  vasaDocs,
} from "@/config/vasa";
import { faqJsonLd, type FaqItem } from "@/lib/faq";

/** VASA HUB: owns "Vasa authorized dealer Tanzania" (SEO-STRATEGY.md 5.1). */

const TITLE = "Vasa Authorized Dealer Tanzania - SPC and LVT | Sahihi";
const DESCRIPTION =
  "Sahihi is an authorized Vasa dealer in Tanzania: SPC flooring, LVT flooring and wall panels from the Oriental Yuhong group, supplied from Dar es Salaam.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/vasa" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/vasa" },
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Vasa", href: "/vasa" },
];

const faq: FaqItem[] = [
  {
    q: "Who is an authorized Vasa dealer in Tanzania?",
    lead: "Sahihi Construction Chemicals Limited, in Dar es Salaam.",
    points: ["Send an enquiry from this page, on WhatsApp or by email"],
  },
  {
    q: "Who makes Vasa?",
    lead: "VASA Tech Holdings, a wholly-owned subsidiary of Oriental Yuhong Group.",
    points: ["Sahihi also supplies Oriental Yuhong waterproofing in Tanzania"],
  },
  {
    q: "What does Vasa make for floors and walls?",
    lead: "SPC flooring, LVT flooring and wall panels.",
    points: vasaCollections.map((item) => `${item.name}: ${item.line}`),
  },
  {
    q: "Are the data sheets available?",
    lead: "Yes. The SPC and LVT technical pages and the catalogue are on this page.",
    points: ["Each is Vasa's own document"],
  },
];

export default function VasaPage() {
  const brand = brandBySlug.vasa;
  const pick = [
    ...decorsIn("spc-5").slice(0, 7),
    ...decorsIn("spc-8").slice(0, 4),
  ];
  return (
    <main className="brand-vasa theme-light bg-background text-foreground flex-1">
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "CollectionPage",
            name: TITLE,
            description: DESCRIPTION,
            url: `${siteConfig.url}/vasa`,
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: 3,
              itemListElement: [
                ["SPC flooring", "/vasa/spc-flooring"],
                ["LVT flooring", "/vasa/lvt-flooring"],
                ["Wall panels", "/vasa/wall-panels"],
              ].map(([name, path], index) => ({
                "@type": "ListItem",
                position: index + 1,
                name,
                url: `${siteConfig.url}${path}`,
              })),
            },
          },
          faqJsonLd(faq),
        ]}
      />

      <section className="bg-white">
        <Container className="pt-28 pb-14 sm:pt-36 sm:pb-20">
          <Breadcrumb items={crumbs} />
          <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
            <p className="label-sh text-muted">
              {brand.authorization} · Tanzania
            </p>
            <span className="border-deep/15 inline-flex rounded-full border bg-white px-5 py-3">
              <img
                src={brand.logo.src}
                alt="Vasa logo"
                width={brand.logo.width}
                height={brand.logo.height}
                className="h-6 w-auto"
              />
            </span>
          </div>
          <h1 className="text-brand font-display mt-6 text-[clamp(2rem,7.4vw,5.25rem)] leading-[1.02] uppercase">
            Vasa authorized dealer in Tanzania.
          </h1>
          <p className="text-phi-1 mt-8 max-w-3xl leading-snug font-light">
            {siteConfig.brandName} supplies Vasa SPC flooring, LVT flooring and
            wall panels, held in Dar es Salaam. Vasa is a wholly-owned
            subsidiary of Oriental Yuhong Group: {vasaDecors.length} decors,
            each with its code.
          </p>
          <ul className="mt-10 grid grid-cols-3 gap-2 sm:mt-12 sm:gap-4">
            {[
              {
                label: "SPC flooring",
                href: "/vasa/spc-flooring",
                item: vasaCollections[0],
              },
              {
                label: "LVT flooring",
                href: "/vasa/lvt-flooring",
                item: vasaCollections[2],
              },
              {
                label: "Wall panels",
                href: "/vasa/wall-panels",
                item: vasaCollections[4],
              },
            ].map(({ label, href, item }, index) => (
              <li key={href}>
                <Link href={href} className="group block">
                  <span className="border-deep relative block aspect-square overflow-hidden rounded-xl border sm:aspect-[4/3] sm:rounded-2xl">
                    <Image
                      src={item.picture.src}
                      alt={item.alt}
                      fill
                      preload={index === 0}
                      sizes="33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </span>
                  <span className="mt-2 block text-sm leading-snug font-semibold sm:text-base">
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <p className="label-sh text-muted">Pull it apart</p>
          <h2 className="font-display text-phi-3 mt-4 tracking-tight text-balance">
            Inside a Vasa SPC plank.
          </h2>
          <div className="mt-8">
            <LayerStack
              layers={spcLayers}
              decors={pick.map((decor) => ({
                code: decor.code,
                src: decor.src,
                label: decor.look,
              }))}
            />
          </div>
          <ModelCta className="mt-6" topic="Vasa SPC flooring" />
        </Container>
      </section>

      <section className="bg-surface py-14 sm:py-20">
        <Container>
          <p className="label-sh text-muted">The two floors</p>
          <h2 className="font-display text-phi-3 mt-4 tracking-tight text-balance">
            SPC or LVT, side by side.
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[32rem] border-collapse text-left">
              <thead>
                <tr className="border-deep border-b">
                  <th scope="col" className="label-sh py-3 pr-4 font-normal">
                    As Vasa prints it
                  </th>
                  <th scope="col" className="font-display py-3 pr-4 text-lg">
                    <Link href="/vasa/spc-flooring" className="u-line">
                      SPC
                    </Link>
                  </th>
                  <th scope="col" className="font-display py-3 text-lg">
                    <Link href="/vasa/lvt-flooring" className="u-line">
                      LVT
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                {spcVsLvt.map((row) => (
                  <tr key={row.label} className="border-deep/15 border-b">
                    <th scope="row" className="py-3 pr-4 font-normal">
                      {row.label}
                    </th>
                    <td className="py-3 pr-4 font-semibold">{row.spc}</td>
                    <td className="py-3 font-semibold">{row.lvt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <p className="label-sh text-muted">The collections</p>
          <h2 className="font-display text-phi-3 mt-4 tracking-tight text-balance">
            Five collections from Vasa.
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {vasaCollections.map((item) => (
              <li key={item.slug}>
                <Reveal>
                  <article className="border-deep/15 group h-full overflow-hidden rounded-2xl border bg-white">
                    <span className="relative block aspect-[2/1] overflow-hidden">
                      <Image
                        src={item.picture.src}
                        alt={item.alt}
                        fill
                        sizes="(min-width: 64rem) 32vw, (min-width: 40rem) 48vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </span>
                    <div className="p-5">
                      <h3 className="font-display text-xl leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-muted mt-2 mb-5 text-sm leading-relaxed">
                        {item.line}
                      </p>
                      <FlowButton href={item.href} size="sm">
                        Explore<span className="sr-only"> {item.name}</span>
                      </FlowButton>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
          <h2 className="font-display text-phi-2 mt-14 tracking-tight">
            Data sheets and catalogue.
          </h2>
          <Downloads
            items={[
              vasaDocs.spc,
              vasaDocs.lvt,
              { ...vasaDocs.catalogue, note: "reduced" },
            ]}
          />
        </Container>
      </section>

      <Faq items={faq} heading="Vasa in Tanzania, in short." />

      <RelatedLinks
        links={[
          { label: "Vasa flooring", href: "/vasa", sub: "The brand hub" },
          {
            label: "SPC flooring",
            href: "/vasa/spc-flooring",
            sub: "Rigid core click planks",
          },
          {
            label: "LVT flooring",
            href: "/vasa/lvt-flooring",
            sub: "2 mm luxury vinyl tile",
          },
          {
            label: "Wall panels",
            href: "/vasa/wall-panels",
            sub: "Film and digital panels",
          },
          {
            label: "Primers and levelling",
            href: "/mapei/primers-levelling",
            sub: "Mapei, for the floor underneath",
          },
          {
            label: "Sports flooring",
            href: "/oriental-yuhong/sports-flooring",
            sub: "Oriental Yuhong tracks, courts, turf",
          },
          {
            label: "Flooring guides",
            href: "/blog/category/flooring",
            sub: "From our blog",
          },
          {
            label: "All products",
            href: "/products",
            sub: "Every brand and line",
          },
        ].filter((link) => link.href !== "/vasa")}
      />

      <CtaBand
        label="Vasa in Tanzania"
        heading="Send the room size. We will come back with a quote."
        body="Tell us the area, the room and the decor code you like. You get a written quotation and sample advice from our Dar es Salaam office."
        topic="Vasa flooring"
      />
    </main>
  );
}
