import Image from "next/image";
import Link from "next/link";

import { AddToQuote } from "@/components/quote/add-to-quote";
import { FlowButton } from "@/components/ui/flow-button";
import { hotspots, MANUAL_FILE, PATH, product } from "@/config/oyh-below-grade";

/** The manual's slug for the membrane (it prints PMH-3080 and PLUS as one). */
const SLUG = "pmh-3080";

/** OYH's tapes whose printed type says "for PMH-3080 / PMH-3080 PLUS". */
const TAPES = ["pmh-t-160", "pmh-t-s80"];

/** The manual is printed in two-page spreads: printed page p sits on PDF page floor(p / 2) + 1. */
const pdfPage = (printed: number) => Math.floor(printed / 2) + 1;

/**
 * PMH-3080 Plus as a part of OYH's below-grade system, on its product page
 * (owner, 2026-11-21: "it's a part of the system, interconnecting the
 * pages"). Everything is read from src/config/oyh-below-grade.ts, the data
 * of the "Solutions for Below-Grade Structures" manual: the cutaways whose
 * legend names the membrane (each a link to its hotspot map), the two
 * tapes OYH makes for it (supplied to order, Add to quote list) and the
 * manual's page. Server component; the quote chips are the client islands.
 */
export function PmhSystem() {
  const membrane = product(SLUG);
  const places = Object.values(hotspots).flatMap((spot) =>
    spot.legend
      .filter((row) => row.products?.includes(SLUG))
      .map((row) => ({ spot, row })),
  );

  return (
    <div className="mt-16 sm:mt-20">
      <p className="label-sh text-muted">OYH below-grade system</p>
      <h2 className="font-display text-phi-3 mt-4 tracking-tight text-balance">
        One layer of a whole basement.
      </h2>
      <p className="mt-5 max-w-2xl leading-relaxed">
        OYH&apos;s manual &quot;Solutions for Below-Grade Structures&quot; puts
        PMH-3080 in these places. Tap a picture to see every layer around it,
        numbered, with the products the manual prints under each.
      </p>

      <ul className="mt-10 grid gap-6 md:grid-cols-2">
        {places.map(({ spot, row }) => (
          <li key={`${spot.id}-${row.n}`}>
            <Link
              href={`${PATH}#${spot.id}`}
              className="group border-deep/15 block h-full overflow-hidden rounded-2xl border bg-white"
            >
              <Image
                src={spot.picture.src}
                alt={spot.picture.alt}
                width={spot.picture.width}
                height={spot.picture.height}
                sizes="(min-width: 48rem) 44vw, 100vw"
                className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <span className="block p-5 sm:p-6">
                <span className="spec-sh text-muted block">
                  Layer {row.n} · manual p. {spot.page}
                </span>
                <span className="font-display text-brand mt-2 block text-xl leading-tight">
                  {row.layer}
                </span>
                <span className="mt-2 block leading-relaxed">{spot.title}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <h3 className="font-display mt-14 text-2xl leading-tight">
        Made for it by OYH
      </h3>
      <ul className="mt-6 grid gap-6 md:grid-cols-2">
        {TAPES.map((slug) => {
          const tape = product(slug);
          return (
            <li
              key={slug}
              className="border-deep/15 flex flex-col rounded-2xl border bg-white p-5 sm:p-6"
            >
              <p className="label-sh text-muted leading-relaxed">{tape.type}</p>
              <p className="font-display text-brand mt-2 text-2xl leading-tight">
                {tape.name}
              </p>
              {tape.line && <p className="mt-3 leading-relaxed">{tape.line}</p>}
              <div className="mt-auto flex flex-wrap items-center gap-3 pt-5">
                <AddToQuote
                  variant="chip"
                  label="Add to quote list"
                  item={{
                    id: `oriental-yuhong:${slug}`,
                    name: tape.name,
                    brand: "Oriental Yuhong",
                    href: `${PATH}#${slug}`,
                    packs: [],
                  }}
                />
                <span className="spec-sh text-muted">Supplied to order</span>
                <span className="spec-sh text-muted">
                  Manual p. {tape.page}
                </span>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
        <FlowButton href={PATH}>
          Below-grade waterproofing, the whole system
        </FlowButton>
        <a
          href={`${MANUAL_FILE}#page=${pdfPage(membrane.page)}`}
          className="font-semibold underline underline-offset-4"
        >
          PMH-3080 in OYH&apos;s manual (PDF, p. {membrane.page})
        </a>
      </div>
    </div>
  );
}
