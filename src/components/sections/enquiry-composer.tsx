"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * The enquiry composer - the home page finale (DESIGN-HANDOFF.md 9.6).
 * The visitor assembles a real enquiry from chips (the job, the area, where
 * the site is) and the message forms live in a chat bubble; the button is a
 * real wa.me link carrying exactly that text.
 *
 * The chips are the VISITOR'S words about their own job. They are not a
 * claim about where or what Sahihi delivers.
 *
 * It is the last section of the page, so it stays opaque, full-width and in
 * normal flow (the fixed footer reveal depends on that).
 */

const JOBS = [
  { label: "Waterproofing", phrase: "a waterproofing job" },
  { label: "Tiling", phrase: "a tiling job" },
  { label: "Resin flooring", phrase: "a resin flooring job" },
  { label: "Floor levelling", phrase: "a floor levelling job" },
  { label: "Concrete repair", phrase: "a concrete repair job" },
] as const;

const AREAS = [
  { label: "Under 50 m²", phrase: "under 50 m²" },
  { label: "50 to 200 m²", phrase: "50 to 200 m²" },
  { label: "200 to 1,000 m²", phrase: "200 to 1,000 m²" },
  { label: "Over 1,000 m²", phrase: "over 1,000 m²" },
] as const;

const PLACES = [
  "Dar es Salaam",
  "Dodoma",
  "Arusha",
  "Mwanza",
  "Zanzibar",
  "Elsewhere",
] as const;

export function EnquiryComposer() {
  const [job, setJob] = useState(0);
  const [area, setArea] = useState(1);
  const [place, setPlace] = useState(0);
  const reduced = useReducedMotion();

  const where =
    PLACES[place] === "Elsewhere"
      ? "outside Dar es Salaam"
      : `in ${PLACES[place]}`;
  const message = `Hello ${siteConfig.brandName}. I have ${JOBS[job].phrase}, ${AREAS[area].phrase}, ${where}. Please recommend a system and send a quotation.`;
  const href = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;

  const group = (
    legend: string,
    options: readonly string[],
    value: number,
    onChange: (index: number) => void,
  ) => (
    <fieldset>
      <legend className="label-sh text-muted">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((label, index) => (
          <button
            key={label}
            type="button"
            aria-pressed={index === value}
            onClick={() => onChange(index)}
            className="chip-sh border-deep inline-flex min-h-11 items-center rounded-full border px-4 text-sm"
          >
            {label}
          </button>
        ))}
      </div>
    </fieldset>
  );

  return (
    <section className="bg-background py-16 sm:py-24">
      <Container>
        <div className="bg-line text-foreground grain-sh relative overflow-hidden rounded-3xl">
          <div className="relative z-10 grid gap-10 p-7 sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:p-16">
            <div>
              <p className="label-sh text-muted">Enquiries · WhatsApp</p>
              <h2 className="font-display text-phi-3 mt-5 max-w-2xl tracking-tight text-balance">
                Tell us the job. We will tell you the system.
              </h2>
              <div className="mt-9 grid gap-7">
                {group(
                  "The job",
                  JOBS.map((item) => item.label),
                  job,
                  setJob,
                )}
                {group(
                  "The area",
                  AREAS.map((item) => item.label),
                  area,
                  setArea,
                )}
                {group("The site is in", PLACES, place, setPlace)}
              </div>
            </div>

            {/* The conversation */}
            <div className="border-deep bg-chalk flex flex-col rounded-2xl border p-5 sm:p-7">
              <p className="spec-sh text-muted flex justify-between gap-4">
                <span>{siteConfig.brandName}</span>
                <span>{siteConfig.contact.phone}</span>
              </p>
              <div className="mt-6 flex flex-1 flex-col gap-4">
                <p className="bg-accent max-w-[88%] self-start rounded-2xl rounded-bl-md px-4 py-3 leading-relaxed">
                  Hello. Tap the chips to write your message. It opens straight
                  in our WhatsApp.
                </p>
                <div className="flex min-h-40 flex-col justify-end self-end sm:min-h-36">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.p
                      key={message}
                      initial={
                        reduced ? false : { opacity: 0, y: 10, scale: 0.98 }
                      }
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={reduced ? undefined : { opacity: 0 }}
                      transition={{ duration: reduced ? 0 : 0.22 }}
                      aria-live="polite"
                      className="bg-deep text-chalk max-w-[88%] origin-bottom-right self-end rounded-2xl rounded-br-md px-4 py-3 leading-relaxed"
                    >
                      {message}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-deep text-chalk hover:bg-deep/90 mt-6 inline-flex min-h-12 items-center justify-center rounded-full px-6 text-center font-medium transition-colors"
              >
                Send it on WhatsApp&ensp;&rarr;
              </a>
              <p className="text-muted mt-4 text-center text-sm">
                Or email{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="u-line text-foreground"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
