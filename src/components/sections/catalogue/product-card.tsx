import Image from "next/image";
import Link from "next/link";

import { FlowButton } from "@/components/ui/flow-button";
import { cn } from "@/lib/utils";

/** A shelf card: picture, name, one line, Explore. */
export function ProductCardShell({
  href,
  name,
  line,
  picture,
  alt,
  cover = false,
  as: Name = "h4",
}: {
  href: string;
  name: string;
  line: string;
  picture: { src: string; width: number; height: number };
  alt: string;
  /** Fill the frame: for a photograph, not a pack shot. */
  cover?: boolean;
  /** The card heading level, to follow the section it sits in. */
  as?: "h3" | "h4";
}) {
  return (
    <li className="w-[68vw] max-w-[17rem] shrink-0 sm:w-[17rem]">
      <article className="bg-chalk border-deep group flex h-full flex-col overflow-hidden rounded-2xl border">
        <Link
          href={href}
          draggable={false}
          tabIndex={-1}
          aria-hidden
          className="relative block aspect-square overflow-hidden bg-white"
        >
          <Image
            src={picture.src}
            alt={alt}
            fill
            draggable={false}
            sizes="(min-width: 40rem) 17rem, 68vw"
            className={cn(
              "transition-transform duration-700 ease-out group-hover:scale-110",
              cover
                ? "object-cover"
                : "object-contain p-6 group-hover:-rotate-3",
            )}
          />
        </Link>
        <div className="flex flex-1 flex-col p-5">
          <Name className="font-display text-xl leading-tight text-balance">
            {name}
          </Name>
          <p className="text-muted mt-2 mb-5 text-sm leading-relaxed">{line}</p>
          <FlowButton href={href} size="sm" className="mt-auto self-start">
            Explore<span className="sr-only"> {name}</span>
          </FlowButton>
        </div>
      </article>
    </li>
  );
}
