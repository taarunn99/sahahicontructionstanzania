import Image from "next/image";

import { CtaBand } from "@/components/sections/cta-band";
import { Faq } from "@/components/sections/faq";
import {
  DecorGrid,
  Downloads,
  SpecTable,
} from "@/components/sections/vasa/decor-grid";
import { JsonLd } from "@/components/seo/json-ld";
import { LayerStack, type StackLayer } from "@/components/three-d/layer-stack";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { FlowButton } from "@/components/ui/flow-button";
import { siteConfig, whatsappLink } from "@/config/site";
import { vasaDocs, type VasaDecor } from "@/config/vasa";
import { faqJsonLd, type FaqItem } from "@/lib/faq";

/** One Vasa range page: SPC, LVT or wall panels. Same parts, different data. */
export function VasaRangePage({
  path,
  crumb,
  description,
  h1,
  lead,
  hero,
  layers,
  pickDecors,
  advantages,
  groups,
  specs,
  docs,
  faq,
  topic,
  productName,
}: {
  path: string;
  crumb: string;
  description: string;
  h1: string;
  lead: string;
  hero: { src: string; width: number; height: number; alt: string };
  layers: StackLayer[];
  pickDecors: VasaDecor[];
  advantages: string[];
  groups: { id: string; label: string; heading: string; decors: VasaDecor[] }[];
  specs?: { label: string; value: string }[];
  docs: { file: string; label: string; pages: number; note?: string }[];
  faq: FaqItem[];
  topic: string;
  productName: string;
}) {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Vasa", href: "/vasa" },
    { label: crumb, href: path },
  ];
  const count = groups.reduce((sum, group) => sum + group.decors.length, 0);
  return (
    <main className="brand-vasa theme-light bg-background text-foreground flex-1">
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "Product",
            name: productName,
            description,
            brand: { "@type": "Brand", name: "Vasa" },
            image: `${siteConfig.url}${hero.src}`,
            url: `${siteConfig.url}${path}`,
          },
          faqJsonLd(faq),
        ]}
      />

      <section className="bg-white">
        <Container className="pt-28 pb-10 sm:pt-36 sm:pb-14">
          <Breadcrumb items={crumbs} />
          <p className="label-sh text-muted mt-10">
            Authorized Vasa dealer · Tanzania
          </p>
          <h1 className="text-brand font-display mt-5 text-[clamp(2rem,7.4vw,5.25rem)] leading-[1.02] uppercase">
            {h1}
          </h1>
          <p className="text-phi-1 mt-7 max-w-3xl leading-snug font-light">
            {lead}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <FlowButton href={whatsappLink(topic)}>Request a quote</FlowButton>
            <FlowButton href="#decors">See {count} decors</FlowButton>
          </div>
          <div className="relative mt-10 aspect-[2/1] overflow-hidden rounded-2xl">
            <Image
              src={hero.src}
              alt={hero.alt}
              fill
              preload
              sizes="(min-width: 80rem) 1200px, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <p className="label-sh text-muted">Pull it apart</p>
          <h2 className="font-display text-phi-3 mt-4 tracking-tight text-balance">
            What is inside {crumb.toLowerCase()}.
          </h2>
          <div className="mt-8">
            <LayerStack
              layers={layers}
              decors={pickDecors.map((decor) => ({
                code: decor.code,
                src: decor.src,
                label: decor.look,
              }))}
            />
          </div>
        </Container>
      </section>

      <section className="bg-surface py-14 sm:py-20">
        <Container>
          <h2 className="font-display text-phi-3 tracking-tight text-balance">
            What Vasa says it does.
          </h2>
          <ul className="mt-8 grid gap-x-10 gap-y-3 md:grid-cols-2">
            {advantages.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed">
                <span
                  aria-hidden
                  className="bg-brand mt-2.5 size-2 shrink-0 rounded-full"
                />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <div id="decors" className="scroll-mt-28">
        {groups.map((group) => (
          <section
            key={group.id}
            id={group.id}
            className="scroll-mt-28 py-14 sm:py-20"
          >
            <Container>
              <p className="label-sh text-muted">{group.label}</p>
              <h2 className="font-display text-phi-3 mt-4 tracking-tight text-balance">
                {group.heading}
              </h2>
              <DecorGrid decors={group.decors} />
            </Container>
          </section>
        ))}
      </div>

      {specs && (
        <section className="border-deep border-t py-14 sm:py-20">
          <Container>
            <p className="label-sh text-muted">Specification</p>
            <h2 className="font-display text-phi-3 mt-4 tracking-tight">
              Technical data.
            </h2>
            <SpecTable rows={specs} />
          </Container>
        </section>
      )}

      <section className="bg-surface py-14 sm:py-20">
        <Container>
          <h2 className="font-display text-phi-3 tracking-tight">
            Data sheet and catalogue.
          </h2>
          <Downloads items={docs.length ? docs : [vasaDocs.catalogue]} />
          <p className="text-muted mt-5 max-w-3xl text-sm leading-relaxed">
            Vasa&apos;s own pages, unaltered. The catalogue is reduced in file
            size to download faster. Decors are pictured from the catalogue: ask
            for a sample before you choose, and for what is in Dar es Salaam
            now.
          </p>
        </Container>
      </section>

      <Faq items={faq} heading={`${crumb}, in short.`} />

      <CtaBand
        label={`Vasa in Tanzania`}
        heading="Send the room size. We will come back with a quote."
        body="Tell us the area, the room and the decor code you like. You get a written quotation and sample advice from our Dar es Salaam office."
        topic={topic}
      />
    </main>
  );
}
