/* eslint-disable @next/next/no-img-element */
import { brands } from "@/config/brands";

/**
 * Distribution-partner marquee. Logos render in their ORIGINAL brand
 * colours: recolouring someone else's trademark is not ours to do. This is
 * the sanctioned exception to the five-colour palette, scoped to the logo.
 * The art is the vector set from the owner's business card
 * (scripts/extract-brand-svgs.py).
 *
 * Plain <img>: SVGs gain nothing from the image optimiser, and the fixed
 * width/height reserve the space so the track never shifts. Every copy
 * carries its alt (SEO tools flag alt=""); the duplicate tracks are
 * aria-hidden so assistive tech reads each brand once.
 */
function Track({ hidden }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden}
      className="flex shrink-0 items-center gap-16 pr-16 sm:gap-24 sm:pr-24"
    >
      {brands.map((brand) => (
        <img
          key={brand.slug}
          src={brand.logo.src}
          alt={`${brand.name} logo`}
          width={brand.logo.width}
          height={brand.logo.height}
          style={{ height: brand.logo.display }}
          className="w-auto shrink-0"
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  );
}

export function BrandMarquee({ label }: { label: string }) {
  return (
    <section
      aria-label="Distribution partners"
      className="border-deep/15 bg-background overflow-hidden border-y py-10"
    >
      <p className="label-sh text-muted mb-8 px-5 text-center leading-relaxed">
        {label}
      </p>
      <div className="marquee-sh flex w-max">
        <Track />
        <Track hidden />
        <Track hidden />
        <Track hidden />
      </div>
    </section>
  );
}
