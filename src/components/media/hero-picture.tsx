import { getImageProps } from "next/image";

import type { Photo } from "@/config/images";
import { cn } from "@/lib/utils";

/**
 * A full-bleed hero photograph with art direction: one crop for wide
 * screens and, optionally, a portrait crop for phones, in one <picture>.
 *
 * It is the page's LCP, so (handoff 9.4 laws 1 and 2) it is in the server
 * HTML, eager, high priority, and never faded in. Any movement applied to
 * it is a transform driven by the scroll.
 */
export function HeroPicture({
  wide,
  portrait,
  className,
}: {
  wide: Photo;
  /** Served below 48rem when given. */
  portrait?: Photo;
  className?: string;
}) {
  const common = {
    alt: wide.alt,
    sizes: "100vw",
    quality: 90,
    loading: "eager" as const,
    fetchPriority: "high" as const,
  };
  const { props: wideProps } = getImageProps({
    ...common,
    src: wide.src,
    width: wide.width,
    height: wide.height,
  });
  const small = portrait
    ? getImageProps({
        ...common,
        src: portrait.src,
        width: portrait.width,
        height: portrait.height,
      }).props
    : null;

  return (
    <picture>
      {small && (
        <source
          media="(max-width: 47.99rem)"
          srcSet={small.srcSet}
          sizes="100vw"
        />
      )}
      <img
        {...wideProps}
        alt={wide.alt}
        className={cn("absolute inset-0 h-full w-full object-cover", className)}
      />
    </picture>
  );
}
