import Link from "next/link";

import { ComicBurst } from "@/components/sections/flash-sale";
import { Container } from "@/components/ui/container";
import { FlowButton } from "@/components/ui/flow-button";
import { bihuiPages } from "@/config/bihui";
import { products } from "@/config/catalogue";
import { cmciAll } from "@/config/cmci";

/**
 * The quote list band on the home page, straight under the sale band
 * (owner, 2026-11-14: "a 3d flashing something like the sale but 2
 * element section under it to go to the quote page"). A Sahihi Blue stage
 * with the comic burst in CSS 3D (the sale's own piece, yellow face, ink
 * extrusion, sways and tilts to the pointer) saying "Quote list!", a
 * blinking "New" tab, and two tiles under the words that both go to
 * /quote: how to add, how to send. Server component; the burst is the one
 * client island. No price anywhere.
 */

const COUNT = products.length + cmciAll.length + bihuiPages.length;

const TILES = [
  {
    number: "01",
    title: "Add from any product page",
    body: `Press "Add to quote list" on a product, or + on the sheet. ${COUNT} products across five brands, one list.`,
    href: "/quote#quote-catalogue",
    mark: "+",
  },
  {
    number: "02",
    title: "Send it once",
    body: "Packs and quantities in one message, on WhatsApp, by email or copied into your tender. The reply is a written quotation.",
    href: "/quote#send",
    mark: "→",
  },
];

export function QuoteBand() {
  return (
    <section
      id="quote-list"
      aria-labelledby="quote-band-heading"
      className="bg-accent border-deep relative scroll-mt-20 overflow-x-clip border-b"
    >
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.618fr] lg:items-center lg:gap-14">
          {/* ---- The burst, in 3D ----------------------------------------- */}
          <ComicBurst
            id="quote"
            href="/quote"
            bubble={{
              word: "Quote list!",
              line: `${COUNT} products, one list`,
              cta: "Build your list",
              close: "Close",
            }}
            large
            className="mx-auto w-72 max-w-full [perspective:900px] sm:w-[24rem] lg:mx-0 lg:w-full"
          />

          {/* ---- The words, then the two tiles ---------------------------- */}
          <div>
            <p className="label-sh inline-flex flex-wrap items-center gap-2.5">
              <span className="flash-blink font-display rounded-full px-3 py-1 font-extrabold">
                New
              </span>
              The quote list · prices by quotation
            </p>
            <h2
              id="quote-band-heading"
              className="font-display text-phi-3 mt-5 tracking-tight text-balance"
            >
              Five products, five brands, one message.
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed">
              Nobody needs one product. Build the whole list as you go, from
              Mapei to BIHUI, set the packs and quantities, and send it in one
              go. No printed prices: the reply is a quotation for your job.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {TILES.map((tile) => (
                <li key={tile.number}>
                  <Link
                    href={tile.href}
                    className="group bg-chalk text-foreground border-deep hover:bg-surface flex h-full flex-col rounded-2xl border p-5 transition-colors duration-200"
                  >
                    <span className="flex items-start justify-between gap-4">
                      <span className="spec-sh text-muted">{tile.number}</span>
                      <span
                        aria-hidden
                        className="bg-deep text-chalk flex size-10 items-center justify-center rounded-full text-xl leading-none font-bold"
                      >
                        {tile.mark}
                      </span>
                    </span>
                    <span className="font-display mt-4 text-xl leading-tight">
                      {tile.title}
                    </span>
                    <span className="text-muted mt-2 text-sm leading-relaxed">
                      {tile.body}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <FlowButton href="/quote">Open the quote list</FlowButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
