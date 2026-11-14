import Image from "next/image";
import Link from "next/link";

import { TiltCard } from "@/components/motion/tilt-card";
import {
  JournalStrip,
  type JournalPage,
} from "@/components/sections/about/journal-strip";
import { ScrollSeal } from "@/components/sections/about/magazine";
import { Container } from "@/components/ui/container";
import {
  blogCategories,
  blogCategoryBySlug,
  type PostMeta,
  posts,
  postsInCategory,
} from "@/config/blog";
import { postContent } from "@/content/blog";
import { wordCount } from "@/lib/blog";
import { cn } from "@/lib/utils";

/**
 * THE JOURNAL, on /about (owner, 2026-11-14: "merge the blog page inside the
 * About page ... with a quite good aesthetic", and "Blog" out of the
 * navbar). The blog's own pages stay exactly where they are (/blog, every
 * post, every category: the sitemap, the feed and the links are untouched);
 * this is the issue's own spread for them: the latest guide as the feature,
 * with its 3D poster leaning to the pointer and the turning seal, the rest
 * fanned out as sheets to drag through, the categories as chips, and the
 * archive link. Every title and link is in the server HTML.
 */

const minutes = (slug: string) =>
  Math.max(
    2,
    Math.round((postContent[slug] ? wordCount(postContent[slug]) : 0) / 220),
  );

const dateText = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

/** The post's poster where its hero has one; the 3D floor and stack heroes
 *  have none and get a type card in the category's colour. */
const posterOf = (post: PostMeta) => {
  if (post.hero.kind === "model") {
    return { src: post.hero.poster.src, alt: post.hero.alt };
  }
  if (post.hero.kind === "image") {
    return { src: post.hero.src, alt: post.hero.alt };
  }
  return null;
};

const PILL =
  "inline-flex min-h-12 items-center gap-2.5 rounded-full px-6 text-sm font-semibold tracking-wide uppercase transition-opacity hover:opacity-90";

export function Journal({ kicker }: { kicker: React.ReactNode }) {
  const ordered = [...posts].sort((a, b) =>
    b.datePublished.localeCompare(a.datePublished),
  );
  const [latest, ...rest] = ordered;
  const latestCategory = blogCategoryBySlug[latest.category];
  const latestPoster = posterOf(latest);
  const categories = blogCategories.filter(
    (category) => postsInCategory(category.slug).length > 0,
  );
  const pages: JournalPage[] = rest.map((post) => {
    const category = blogCategoryBySlug[post.category];
    return {
      slug: post.slug,
      title: post.title,
      category: category.label,
      stage: category.stage,
      minutes: minutes(post.slug),
      poster: posterOf(post),
    };
  });

  return (
    <section
      id="journal"
      aria-labelledby="journal-heading"
      className="scroll-mt-20 overflow-x-clip py-20 sm:py-28"
    >
      <Container>
        {kicker}
        <div className="mt-6 flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
          <h3
            id="journal-heading"
            className="font-display max-w-3xl text-[clamp(2rem,6vw,4.5rem)] leading-[1.02] tracking-tight text-balance uppercase"
          >
            Guides for buildings that have to last.
          </h3>
          <Link href="/blog" className="u-line py-2 font-semibold">
            All {posts.length} guides&ensp;&rarr;
          </Link>
        </div>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed">
          How to keep water out, keep tiles down and keep concrete sound,
          written for Tanzania&apos;s rain, heat and coast, with the figures
          taken from the manufacturers&apos; own data sheets. The Journal is our
          blog; this is its latest issue.
        </p>

        {/* ---- The feature: the latest guide ------------------------------ */}
        <article className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center lg:gap-16">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <ScrollSeal
              text={`The Journal · ${posts.length} guides · `}
              className="absolute -top-6 right-3 z-10 sm:-top-10 sm:right-6"
            />
            <TiltCard>
              <Link
                href={`/blog/${latest.slug}`}
                aria-label={`Read: ${latest.title}`}
                className={cn(
                  latestCategory.stage,
                  "border-deep relative block aspect-square overflow-hidden rounded-lg border shadow-[0_30px_60px_-24px_rgba(12,42,54,0.55)]",
                )}
              >
                {latestPoster ? (
                  <Image
                    src={latestPoster.src}
                    alt={latestPoster.alt}
                    fill
                    sizes="(min-width: 64rem) 40vw, (min-width: 40rem) 28rem, 100vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                ) : (
                  <span className="font-display absolute inset-0 flex items-end p-6 text-3xl leading-[1.05] uppercase sm:text-4xl">
                    {latestCategory.label}
                    <br />
                    in 3D, on the page
                  </span>
                )}
              </Link>
            </TiltCard>
          </div>

          <div>
            <p className="spec-sh text-muted flex flex-wrap gap-x-4 gap-y-1">
              <span>Latest guide</span>
              <span>{latestCategory.label}</span>
              <span>{minutes(latest.slug)} min read</span>
              <span>{dateText(latest.datePublished)}</span>
            </p>
            <h4 className="font-display mt-5 text-[clamp(1.6rem,4vw,2.75rem)] leading-[1.08] text-balance">
              <Link href={`/blog/${latest.slug}`} className="hover:underline">
                {latest.title}
              </Link>
            </h4>
            <p className="mt-5 max-w-xl leading-relaxed">
              {latest.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href={`/blog/${latest.slug}`}
                className={`${PILL} bg-deep text-chalk`}
              >
                Read the guide
                <span aria-hidden>&rarr;</span>
              </Link>
              <Link
                href={`/blog/category/${latestCategory.slug}`}
                className="u-line py-2 text-sm"
              >
                More on {latestCategory.label.toLowerCase()}
              </Link>
            </div>
          </div>
        </article>

        {/* ---- The rest of the issue: sheets to drag through -------------- */}
        <div className="mt-16 sm:mt-20">
          <p className="label-sh text-muted">
            {rest.length} more guides · drag to turn the pages
          </p>
          <div className="mt-6">
            <JournalStrip pages={pages} />
          </div>
        </div>

        {/* ---- Sections of the Journal ------------------------------------- */}
        <nav aria-label="Journal sections" className="mt-12">
          <ul className="flex flex-wrap gap-2.5">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/blog/category/${category.slug}`}
                  className="chip-sh border-deep bg-chalk inline-flex min-h-11 items-center gap-2.5 rounded-full border px-5 text-sm"
                >
                  {category.label}
                  <span className="spec-sh">
                    {postsInCategory(category.slug).length}
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/blog"
                className="chip-sh border-deep bg-deep text-chalk inline-flex min-h-11 items-center gap-2.5 rounded-full border px-5 text-sm"
              >
                The whole Journal
                <span aria-hidden>&rarr;</span>
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </section>
  );
}
