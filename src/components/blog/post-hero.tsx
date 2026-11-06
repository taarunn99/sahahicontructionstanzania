import Image from "next/image";

import { ModelViewer } from "@/components/media/model-viewer";
import { TileFloor } from "@/components/sections/hero/tile-floor";
import { BuildUpExplorer } from "@/components/sections/signature/build-up-explorer";
import { BuildUpDrawing } from "@/components/ui/build-up-drawing";
import type { PostHero as Hero } from "@/config/blog";
import { buildUpData } from "@/config/mapei-signature";
import { cn } from "@/lib/utils";

/**
 * The hero of a post: something to touch, where the subject allows it
 * (owner, 2026-11-06: "blog pages also should contain 3d models in the
 * hero"). Every 3D kind loads as a drawing or a photograph and only
 * fetches Three.js when the reader interacts, so a post's first paint is
 * its headline.
 */
export function PostHero({ hero, stage }: { hero: Hero; stage: string }) {
  if (hero.kind === "stack")
    return (
      <BuildUpExplorer layers={buildUpData()}>
        <BuildUpDrawing tone="light" />
      </BuildUpExplorer>
    );

  if (hero.kind === "floor")
    return (
      <figure
        className={cn(
          stage,
          "relative overflow-hidden rounded-[2rem] px-4 pt-4 sm:px-8",
        )}
      >
        <TileFloor className="mx-auto aspect-[4/3] max-w-3xl sm:aspect-[21/9]" />
        <figcaption className="spec-sh pb-4 text-center">
          Move over the floor. Tap it.
        </figcaption>
      </figure>
    );

  if (hero.kind === "model")
    return (
      <figure className="border-deep/15 overflow-hidden rounded-[2rem] border bg-white">
        <ModelViewer
          model={hero.model}
          poster={hero.poster}
          alt={hero.alt}
          className="mx-auto aspect-[4/3] max-w-3xl sm:aspect-[16/10]"
        />
        <figcaption className="spec-sh text-muted border-deep/15 border-t px-5 py-3 text-center leading-relaxed">
          {hero.caption ??
            "3D model generated from the maker's catalogue photograph: the far side is an estimate."}
        </figcaption>
      </figure>
    );

  return (
    <figure className="border-deep/15 relative aspect-[2/1] overflow-hidden rounded-[2rem] border sm:aspect-[21/9]">
      <Image
        src={hero.src}
        alt={hero.alt}
        fill
        preload
        sizes="(min-width: 90rem) 86rem, 100vw"
        className="object-cover"
      />
    </figure>
  );
}
