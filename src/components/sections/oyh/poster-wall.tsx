import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { RingOfText } from "@/components/sections/document-card";
import { PosterLightbox } from "@/components/sections/oyh/poster-lightbox";
import { Container } from "@/components/ui/container";
import { productHref } from "@/config/catalogue";
import { oyhProductBySlug } from "@/config/oriental-yuhong";
import { oyhPosters, POSTERS_ID } from "@/config/oyh-posters";
import { cn } from "@/lib/utils";

/**
 * OYH's posters, pinned to the wall: each one a sheet in a white frame with
 * a red pin, a slight tilt that straightens on hover, the lean toward the
 * pointer (TiltCard), a tap to see it whole (PosterLightbox). Captions say
 * the occasion as printed, the poster's own headline, one sentence of ours
 * and a chip to each product on it that we hold. Server component; the
 * lean and the lightbox are the client islands. Pictures as issued by OYH.
 * Sits between the product cards and "Which one for which job" (owner,
 * 2026-11-21), so it carries a hairline on top to part it from the cards.
 */
export function PosterWall({ className }: { className?: string }) {
  return (
    <section
      id={POSTERS_ID}
      aria-labelledby="oyh-posters-heading"
      className={cn("scroll-mt-24 py-16 sm:py-24", className)}
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.618fr] lg:items-end">
          <div>
            <p className="label-sh text-muted">From OYH</p>
            <h2
              id="oyh-posters-heading"
              className="font-display text-phi-3 mt-5 tracking-tight text-balance"
            >
              Posted by Oriental Yuhong.
            </h2>
          </div>
          <p className="max-w-xl leading-relaxed lg:justify-self-end">
            Two of OYH&apos;s own posters, as issued, pinned here at the
            director&apos;s request. Tap a poster to see it whole; the chips
            go to the products on it that we hold.
          </p>
        </div>

        <ol className="mt-14 grid gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">
          {oyhPosters.map((poster, index) => (
            <li key={poster.slug} className="relative">
              <Reveal delay={index * 0.12}>
                {index === 0 && (
                  <RingOfText
                    text="OYH · AS ISSUED · 2026 · OYH · AS ISSUED · 2026 · "
                    id={`ring-${poster.slug}`}
                    className="text-brand hidden sm:block"
                  />
                )}
                <TiltCard className="relative">
                  <figure
                    className={cn(
                      "rounded-md bg-white p-3 shadow-[0_30px_60px_-20px_rgba(12,42,54,0.55)] transition-transform duration-700 hover:rotate-0 sm:p-4",
                      index % 2 === 0 ? "rotate-[-1.5deg]" : "rotate-[1.2deg]",
                    )}
                  >
                    <span
                      aria-hidden
                      className="bg-brand absolute top-0 left-1/2 z-10 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_2px_4px_rgba(12,42,54,0.5)] ring-2 ring-white"
                    />
                    <PosterLightbox
                      src={poster.src}
                      width={poster.width}
                      height={poster.height}
                      alt={poster.alt}
                      className="group block w-full cursor-zoom-in rounded-sm"
                    >
                      <Image
                        src={poster.src}
                        alt={poster.alt}
                        width={poster.width}
                        height={poster.height}
                        sizes="(min-width: 48rem) 44vw, 100vw"
                        className="h-auto w-full rounded-sm"
                      />
                    </PosterLightbox>
                    <figcaption className="px-1 pt-5 pb-2">
                      <span className="spec-sh text-muted block leading-relaxed">
                        {poster.tag}
                      </span>
                      <span className="font-display text-brand mt-2 block text-2xl leading-tight">
                        {poster.headline}
                      </span>
                      <span className="mt-3 block leading-relaxed">
                        {poster.line}
                      </span>
                      {poster.products.length > 0 && (
                        <span className="mt-5 flex flex-wrap items-center gap-2.5">
                          {poster.products.map((slug) => {
                            const product = oyhProductBySlug[slug];
                            if (!product) throw new Error(`No OYH product ${slug}`);
                            return (
                              <Link
                                key={slug}
                                href={productHref(product)}
                                className="chip-sh border-deep bg-chalk inline-flex min-h-11 items-center rounded-full border px-5 text-sm"
                              >
                                {product.name}
                                <span className="sr-only">, its page</span>
                              </Link>
                            );
                          })}
                          <span className="spec-sh text-muted">
                            Oriental Yuhong&apos;s poster
                          </span>
                        </span>
                      )}
                    </figcaption>
                  </figure>
                </TiltCard>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
