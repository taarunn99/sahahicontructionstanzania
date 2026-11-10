import type { Metadata } from "next";
import { ogBase } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PostCard } from "@/components/blog/post-card";
import { PostHero } from "@/components/blog/post-hero";
import { PostTable } from "@/components/blog/post-table";
import { Inline, Prose } from "@/components/blog/prose";
import { Faq } from "@/components/sections/faq";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { FlowButton } from "@/components/ui/flow-button";
import { blogCategoryBySlug, postBySlug, posts } from "@/config/blog";
import { siteConfig, whatsappLink } from "@/config/site";
import { postContent } from "@/content/blog";
import { slugify, wordCount } from "@/lib/blog";
import { faqJsonLd } from "@/lib/faq";
import { cn } from "@/lib/utils";

type Params = Promise<{ slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

const readMinutes = (words: number) => Math.max(2, Math.round(words / 220));
const longDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug[slug];
  if (!post) return {};
  const url = `/blog/${post.slug}`;
  return {
    title: { absolute: post.metaTitle },
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      ...ogBase,
      type: "article",
      title: post.metaTitle,
      description: post.description,
      url,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
    },
  };
}

/**
 * A POST (DESIGN-HANDOFF.md 14.4). Server component: the reading column
 * carries no client JavaScript. The hero and the FAQ are the only islands.
 * The direct answer is the first paragraph, in plain prose.
 */
export default async function PostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = postBySlug[slug];
  if (!post) notFound();
  const content = postContent[slug];
  if (!content) throw new Error(`blog: no content for "${slug}"`);

  const category = blogCategoryBySlug[post.category];
  const url = `/blog/${post.slug}`;
  const words = wordCount(content);
  const minutes = readMinutes(words);
  const related = post.related.map((item) => postBySlug[item]).filter(Boolean);
  const faq = content.faq.map((item) => ({
    q: item.q,
    lead: item.a,
    points: [],
  }));

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: category.label, href: `/blog/category/${category.slug}` },
    { label: post.title, href: url },
  ];

  return (
    <main className="theme-light bg-background text-foreground flex-1">
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "BlogPosting",
            "@id": `${siteConfig.url}${url}#article`,
            headline: post.title,
            description: post.description,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
            wordCount: words,
            articleSection: category.label,
            inLanguage: "en",
            mainEntityOfPage: `${siteConfig.url}${url}`,
            author: { "@id": `${siteConfig.url}/#organization` },
            publisher: { "@id": `${siteConfig.url}/#organization` },
          },
          faqJsonLd(faq),
        ]}
      />

      <article>
        <header className="pt-28 sm:pt-36">
          <Container>
            <Breadcrumb items={crumbs} />
            <p className="label-sh text-muted mt-9 flex flex-wrap gap-x-4 gap-y-2 leading-relaxed">
              <Link href={`/blog/category/${category.slug}`} className="u-line">
                {category.label}
              </Link>
              <span>{minutes} min read</span>
              <time dateTime={post.dateModified}>
                Updated {longDate(post.dateModified)}
              </time>
            </p>
            <h1 className="font-display text-phi-3 mt-5 max-w-5xl text-balance">
              {post.title}
            </h1>
            <div className="mt-10">
              <PostHero hero={post.hero} stage={category.stage} />
            </div>
          </Container>
        </header>

        <Container className="grid grid-cols-1 gap-12 py-14 sm:py-20 lg:grid-cols-[minmax(0,68ch)_1fr] lg:gap-16">
          <div>
            {/* The direct answer: plain prose, first */}
            <p className="text-phi-1 leading-snug font-light">
              <Inline text={content.answer} />
            </p>

            {/* Phones get the same contents list, folded, at the top. */}
            <details className="border-deep/20 group mt-8 rounded-xl border bg-white lg:hidden">
              <summary className="label-sh flex min-h-12 cursor-pointer items-center justify-between px-4">
                In this guide
                <span
                  aria-hidden
                  className="transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <ol className="border-deep/15 border-t px-4">
                {content.sections.map((section, index) => (
                  <li
                    key={section.h2}
                    className="border-deep/10 border-b last:border-b-0"
                  >
                    <a
                      href={`#${slugify(section.h2)}`}
                      className="grid min-h-11 grid-cols-[2rem_1fr] items-center gap-2 py-2 text-sm leading-snug"
                    >
                      <span className="spec-sh text-muted">{index + 1}</span>
                      {section.h2}
                    </a>
                  </li>
                ))}
              </ol>
            </details>

            {content.sections.map((section) => (
              <section
                key={section.h2}
                aria-labelledby={slugify(section.h2)}
                className="mt-14"
              >
                <div aria-hidden className="bg-deep h-1 w-12" />
                <h2
                  id={slugify(section.h2)}
                  className="font-display text-phi-2 mt-5 scroll-mt-28 text-balance"
                >
                  {section.h2}
                </h2>
                <Prose body={section.body} />
                {section.list && (
                  <ul className="mt-5 space-y-2.5">
                    {section.list.map((item, index) => (
                      <li key={index} className="flex gap-3 leading-relaxed">
                        <span
                          aria-hidden
                          className="bg-deep mt-2.5 size-1.5 shrink-0 rounded-full"
                        />
                        <span>
                          <Inline text={item} />
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.steps && (
                  <ol className="border-deep mt-7 border-t">
                    {section.steps.map((step, index) => (
                      <li
                        key={index}
                        className="border-deep/15 grid grid-cols-[2.75rem_1fr] gap-3 border-b py-4"
                      >
                        <span className="font-display text-xl">
                          {index + 1}
                        </span>
                        <span className="leading-relaxed">
                          <Inline text={step} />
                        </span>
                      </li>
                    ))}
                  </ol>
                )}
                {section.table && <PostTable table={section.table} />}
                {section.note && (
                  <p className="bg-surface border-deep mt-7 rounded-lg border p-5 leading-relaxed">
                    <Inline text={section.note} />
                  </p>
                )}
              </section>
            ))}

            {content.sources.length > 0 && (
              <section className="border-deep/20 mt-16 border-t pt-8">
                <h2 className="label-sh text-muted">Sources</h2>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed">
                  {content.sources.map((source) => (
                    <li key={source.url}>
                      {source.url.startsWith("/") ? (
                        <Link href={source.url} className="u-line">
                          {source.label}
                        </Link>
                      ) : (
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="u-line break-words"
                        >
                          {source.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <p className="text-muted border-deep/20 mt-10 border-t pt-6 text-sm leading-relaxed">
              Written by{" "}
              <Link href="/about" className="u-line text-foreground">
                {siteConfig.legalName}
              </Link>
              , Dar es Salaam. Product figures are quoted from the
              manufacturers&apos; technical data sheets; check the current sheet
              before you specify.
            </p>
          </div>

          {/* Aside: contents, and the one product page this post leads to */}
          <aside className="lg:sticky lg:top-28 lg:max-h-[calc(100svh-8rem)] lg:self-start lg:overflow-y-auto lg:overscroll-contain">
            <nav aria-label="In this guide" className="hidden lg:block">
              <p className="label-sh text-muted">In this guide</p>
              <ol className="border-deep mt-4 border-t">
                {content.sections.map((section, index) => (
                  <li key={section.h2} className="border-deep/15 border-b">
                    <a
                      href={`#${slugify(section.h2)}`}
                      className="hover:bg-surface grid grid-cols-[2rem_1fr] gap-2 py-3 text-sm leading-snug transition-colors"
                    >
                      <span className="spec-sh text-muted">{index + 1}</span>
                      {section.h2}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <div
              className={cn(
                category.stage,
                "border-deep rounded-2xl border p-6 lg:mt-8",
              )}
            >
              <p className="label-sh">{post.productCta.line}</p>
              <p className="font-display mt-4 text-xl leading-tight">
                {post.productCta.label}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <FlowButton href={post.productCta.href} size="sm">
                  Open the page
                </FlowButton>
                <a
                  href={whatsappLink(post.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chip-sh border-deep bg-chalk inline-flex min-h-11 items-center rounded-full border px-5 text-xs font-semibold"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </aside>
        </Container>
      </article>

      {faq.length > 0 && <Faq items={faq} heading="Short answers." />}

      {related.length > 0 && (
        <section className="border-deep border-t py-16 sm:py-24">
          <Container>
            <p className="label-sh text-muted">Keep reading</p>
            <h2 className="font-display text-phi-3 mt-5">Related guides.</h2>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <PostCard
                    post={item}
                    minutes={readMinutes(
                      postContent[item.slug]
                        ? wordCount(postContent[item.slug])
                        : 0,
                    )}
                  />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}
    </main>
  );
}
