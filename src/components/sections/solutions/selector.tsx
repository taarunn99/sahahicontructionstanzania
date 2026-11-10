"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import type { StackLayer } from "@/components/three-d/layer-stack";
import { SelectorStack } from "@/components/three-d/selector-stack";
import { cn } from "@/lib/utils";

export type ResolvedPick = {
  name: string;
  brand: string;
  type: string;
  href: string;
  image: string | null;
  quote: string;
};

export type ResolvedPlace = {
  slug: string;
  label: string;
  problem: string;
  main: ResolvedPick[];
  details: ResolvedPick[];
  cautions: (ResolvedPick & { note: string })[];
  whatsapp: string;
};

/**
 * The solution selector (waterproofing, concrete repair, tile installation):
 * pick a situation, on the chips or (waterproofing) the house drawing, and see
 * which products are made for it, each with the line of its own data sheet
 * that says so. The chips are the real controls; the drawing mirrors them.
 * The choice is kept in the URL hash (#roof, #cracks ...).
 */
export function SolutionSelector({
  places,
  groupLabel,
  mainTitle,
  detailsTitle,
  drawing = false,
  stacks,
}: {
  places: ResolvedPlace[];
  /** What the chips choose, for screen readers: "Part of the building". */
  groupLabel: string;
  mainTitle: string;
  detailsTitle: string;
  /** The house section drawing, for the waterproofing selector. */
  drawing?: boolean;
  /** A 3D build-up per place slug, shown under the chips. */
  stacks?: Record<string, StackLayer[]>;
}) {
  const [active, setActive] = useState(places[0].slug);

  useEffect(() => {
    const fromHash = () => {
      const slug = window.location.hash.slice(1);
      if (places.some((place) => place.slug === slug)) setActive(slug);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [places]);

  const choose = (slug: string) => {
    setActive(slug);
    window.history.replaceState(null, "", `#${slug}`);
  };
  const place = places.find((p) => p.slug === active) ?? places[0];

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:items-start">
      <div className="lg:sticky lg:top-28">
        {drawing && <BuildingDrawing active={active} onChoose={choose} />}
        <div
          role="radiogroup"
          aria-label={groupLabel}
          className={cn("flex flex-wrap gap-2", drawing && "mt-6")}
        >
          {places.map((item) => (
            <button
              key={item.slug}
              type="button"
              role="radio"
              aria-checked={item.slug === active}
              onClick={() => choose(item.slug)}
              className={cn(
                "min-h-11 rounded-full border px-4 text-sm font-bold transition-colors",
                item.slug === active
                  ? "bg-deep border-deep text-white"
                  : "border-deep/25 text-deep hover:bg-surface bg-white",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
        {stacks?.[place.slug] && (
          <div className="mt-6">
            <SelectorStack
              key={place.slug}
              layers={stacks[place.slug]}
              title={place.label}
            />
          </div>
        )}
      </div>

      <div aria-live="polite">
        <h3 className="font-display text-phi-3 tracking-tight">
          {place.label}
        </h3>
        <p className="text-muted mt-3 max-w-xl leading-relaxed">
          {place.problem}
        </p>

        <PickList title={mainTitle} picks={place.main} />
        {place.details.length > 0 && (
          <PickList title={detailsTitle} picks={place.details} />
        )}

        {place.cautions.length > 0 && (
          <div className="border-deep mt-8 rounded-lg border p-5">
            <p className="label-sh">Not for this</p>
            <ul className="mt-3 space-y-3">
              {place.cautions.map((item) => (
                <li key={item.href} className="leading-relaxed">
                  <Link
                    href={item.href}
                    className="font-bold underline-offset-4 hover:underline"
                  >
                    {item.brand} {item.name}
                  </Link>
                  : {item.note}{" "}
                  <span className="text-muted">
                    Its data sheet: &ldquo;
                    {notFor(item.quote)}
                    &rdquo;.
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <a
          href={place.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand mt-8 inline-flex min-h-11 items-center rounded-full px-6 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90"
        >
          Ask us about this
        </a>
      </div>
    </div>
  );
}

function PickList({ title, picks }: { title: string; picks: ResolvedPick[] }) {
  return (
    <div className="mt-8">
      <p className="label-sh text-muted">{title}</p>
      <ul className="mt-4 grid gap-3">
        {picks.map((pick) => (
          <li key={pick.href}>
            <Link
              href={pick.href}
              className="group border-deep/15 grid grid-cols-[4.5rem_1fr] gap-4 rounded-lg border bg-white p-3 transition-transform duration-300 hover:-translate-y-0.5 sm:grid-cols-[5.5rem_1fr]"
            >
              <span className="relative block aspect-square">
                {pick.image ? (
                  <Image
                    src={pick.image}
                    alt={`${pick.brand} ${pick.name} pack`}
                    fill
                    sizes="88px"
                    className="object-contain"
                  />
                ) : (
                  <span className="bg-surface text-deep flex h-full items-center justify-center rounded text-center text-[0.65rem] leading-tight font-bold uppercase">
                    {pick.name}
                  </span>
                )}
              </span>
              <span className="min-w-0">
                <span className="label-sh text-muted block leading-relaxed">
                  {pick.brand} · {pick.type}
                </span>
                <span className="mt-1 block font-bold group-hover:underline">
                  {pick.name}
                </span>
                <span className="text-muted mt-1.5 block text-sm leading-relaxed">
                  Its data sheet: &ldquo;{pick.quote}&rdquo;
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** A section through a house: each zone is a target for one part of the selector. */
function BuildingDrawing({
  active,
  onChoose,
}: {
  active: string;
  onChoose: (slug: string) => void;
}) {
  const zone = (slug: string) => ({
    onClick: () => onChoose(slug),
    className: cn(
      "cursor-pointer transition-[fill,opacity] duration-300",
      active === slug
        ? "fill-brand opacity-90"
        : "fill-deep opacity-10 hover:opacity-25",
    ),
  });
  const label = (slug: string) =>
    cn(
      "pointer-events-none text-[11px] font-bold transition-colors",
      active === slug ? "fill-white" : "fill-deep",
    );
  // Labels that sit beside their zone, not on it.
  const outside = "pointer-events-none fill-deep text-[11px] font-bold";

  return (
    <svg
      viewBox="0 0 400 300"
      // Never taller than the window allows, so the chips stay in view
      // while this column sticks (owner, 2026-11-10).
      className="border-deep/15 mx-auto block w-full max-w-[max(18rem,calc((100svh-17rem)*4/3))] rounded-lg border bg-white"
      aria-hidden
    >
      {/* sky line and ground */}
      <rect x="0" y="196" width="400" height="104" className="fill-deep/5" />
      <line
        x1="0"
        y1="196"
        x2="400"
        y2="196"
        className="stroke-deep/40"
        strokeWidth="1.5"
      />

      {/* the house outline */}
      <rect
        x="40"
        y="56"
        width="210"
        height="140"
        className="stroke-deep/50 fill-none"
        strokeWidth="2"
      />
      <line
        x1="40"
        y1="126"
        x2="250"
        y2="126"
        className="stroke-deep/50"
        strokeWidth="2"
      />

      <rect x="34" y="44" width="222" height="14" rx="2" {...zone("roof")} />
      <text x="145" y="54" textAnchor="middle" className={label("roof")}>
        Flat roof
      </text>

      <rect
        x="46"
        y="62"
        width="96"
        height="60"
        rx="3"
        {...zone("wet-rooms")}
      />
      <text x="94" y="96" textAnchor="middle" className={label("wet-rooms")}>
        Bathroom
      </text>

      <rect
        x="250"
        y="116"
        width="62"
        height="10"
        rx="2"
        {...zone("balcony")}
      />
      <text x="281" y="110" textAnchor="middle" className={outside}>
        Balcony
      </text>

      <rect x="244" y="62" width="10" height="130" rx="2" {...zone("walls")} />
      <text x="196" y="164" textAnchor="middle" className={outside}>
        External wall
      </text>

      <rect
        x="40"
        y="200"
        width="150"
        height="58"
        rx="3"
        {...zone("basement")}
      />
      <text x="115" y="233" textAnchor="middle" className={label("basement")}>
        Basement
      </text>

      <rect
        x="196"
        y="200"
        width="54"
        height="58"
        rx="3"
        {...zone("water-tank")}
      />
      <text x="223" y="233" textAnchor="middle" className={label("water-tank")}>
        Tank
      </text>

      <rect
        x="290"
        y="200"
        width="90"
        height="34"
        rx="3"
        {...zone("swimming-pool")}
      />
      <text
        x="335"
        y="221"
        textAnchor="middle"
        className={label("swimming-pool")}
      >
        Pool
      </text>

      {/* a crack with a drip: leaks */}
      <g onClick={() => onChoose("leaks")} className="cursor-pointer">
        <circle cx="150" cy="272" r="16" {...zone("leaks")} />
        <path
          d="M144 262 l5 6 -4 4 6 8"
          className="stroke-deep fill-none"
          strokeWidth="1.5"
        />
        <text x="174" y="276" className={outside}>
          Leaks
        </text>
      </g>
    </svg>
  );
}

/** A notFor line as a sentence: "not for ..." without doubling a word. */
function notFor(quote: string) {
  const text = quote.replace(/\.$/, "");
  if (/^(do not|never|avoid|not )/i.test(text)) return text;
  const body = /^[A-Z][a-z]/.test(text)
    ? `${text.charAt(0).toLowerCase()}${text.slice(1)}`
    : text;
  return /^(for|on|in) /i.test(body) ? `not ${body}` : `not for ${body}`;
}
