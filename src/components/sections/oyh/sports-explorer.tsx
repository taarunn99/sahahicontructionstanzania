"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { LayerStack, type StackLayer } from "@/components/three-d/layer-stack";
import { FlowButton } from "@/components/ui/flow-button";
import { cn } from "@/lib/utils";

export type SportsSystem = {
  slug: string;
  name: string;
  /** The deck's or another common name, for search. */
  aka?: string;
  buildUp: string;
  suits: string;
  advantages: string[];
  picture: { src: string; width: number; height: number; alt: string };
  layers: StackLayer[];
  /** This system's pages of OYH's manual, unaltered. */
  download?: { file: string; pages: number; size: string };
};

/**
 * Pick a system: its photograph, its layers in 3D, what OYH says about it and its
 * pages of the manual. All six are also written out in the HTML by the page. The
 * layer model remounts per system, so only one scene ever runs.
 */
export function SportsExplorer({ systems }: { systems: SportsSystem[] }) {
  const [index, setIndex] = useState(0);
  const system = systems[index];
  return (
    <div>
      <div
        role="group"
        aria-label="Choose a sports flooring system"
        className="flex flex-wrap gap-2"
      >
        {systems.map((item, i) => (
          <button
            key={item.slug}
            type="button"
            aria-pressed={i === index}
            onClick={() => setIndex(i)}
            className={cn(
              "border-deep inline-flex min-h-11 items-center rounded-full border px-4 text-sm font-semibold transition-colors",
              i === index ? "bg-brand border-brand text-white" : "bg-white",
            )}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="mt-6">
        <LayerStack key={system.slug} layers={system.layers} />
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:items-center">
        <span className="relative block aspect-[2/1] overflow-hidden rounded-2xl">
          <Image
            src={system.picture.src}
            alt={system.picture.alt}
            fill
            sizes="(min-width: 64rem) 48vw, 100vw"
            className="object-cover"
          />
        </span>
        <div aria-live="polite">
          <h3 className="font-display text-phi-2 leading-tight">
            {system.name}
          </h3>
          <p className="mt-3 leading-relaxed">{system.suits}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {system.advantages.map((item) => (
              <li
                key={item}
                className="border-deep/20 rounded-full border bg-white px-3 py-1.5 text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5">
            <Link
              href={`/oriental-yuhong/sports-flooring/${system.slug}`}
              className="font-bold underline"
            >
              The full {system.name.toLowerCase()} page
            </Link>
          </p>
          {system.download && (
            <FlowButton
              href={system.download.file}
              download={`oriental-yuhong-${system.slug}.pdf`}
              className="mt-6"
            >
              Download the {system.name.toLowerCase()} pages
              <span className="sr-only">
                {" "}
                (PDF, {system.download.pages} pages, {system.download.size})
              </span>
            </FlowButton>
          )}
        </div>
      </div>
    </div>
  );
}
