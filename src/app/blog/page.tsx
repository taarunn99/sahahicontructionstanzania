import type { Metadata } from "next";
import { ogBase } from "@/lib/seo";
import Link from "next/link";

import { PostCard } from "@/components/blog/post-card";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { blogCategories, posts, postsInCategory } from "@/config/blog";
import { siteConfig } from "@/config/site";
import { postContent } from "@/content/blog";
import { wordCount } from "@/lib/blog";

/**
 * BLOG INDEX. Server component. Newest first; every post is linked from
 * here in the server HTML, and each category with posts has its own page.
 */

const TITLE = "Building Guides for Tanzania - Waterproofing, Tiling, Floors";
const DESCRIPTION =
  "Practical guides for building in Tanzania: waterproofing, tile adhesives and grouts, resin floors, concrete repair and tools, with figures from manufacturer data sheets.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": "/blog/rss.xml" },
  },
  openGraph: {
    ...ogBase,
    title: TITLE,
    description: DESCRIPTION,
    url: "/blog",
  },
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
];

const minutes = (slug: string) =>
  Math.max(
    2,
    Math.round((postContent[slug] ? wordCount(postContent[slug]) : 0) / 220),
  );

export default function BlogPage() {
  const ordered = [...posts].sort((a, b) =>
    b.datePublished.localeCompare(a.datePublished),
  );
  const categories = blogCategories.filter(
    (category) => postsInCategory(category.slug).length > 0,
  );

  return (
    <main className="theme-light bg-background text-foreground flex-1">
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "Blog",
            name: TITLE,
            description: DESCRIPTION,
            url: `${siteConfig.url}/blog`,
            publisher: { "@id": `${siteConfig.url}/#organization` },
            blogPost: ordered.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              url: `${siteConfig.url}/blog/${post.slug}`,
              datePublished: post.datePublished,
            })),
          },
        ]}
      />

      <section className="bg-surface">
        <Container className="pt-28 pb-14 sm:pt-36 sm:pb-20">
          <Breadcrumb items={crumbs} />
          <p className="label-sh text-muted mt-10">
            The Sahihi blog · {ordered.length} guides
          </p>
          <h1 className="font-display mt-5 max-w-5xl text-[clamp(2.1rem,7vw,4.6rem)] leading-[1.03] text-balance">
            Guides for buildings that have to last.
          </h1>
          <p className="text-phi-1 mt-7 max-w-3xl leading-snug font-light">
            How to keep water out, keep tiles down and keep concrete sound,
            written for Tanzania&apos;s rain, heat and coast, with the figures
            taken from the manufacturers&apos; own data sheets.
          </p>
          {categories.length > 0 && (
            <ul className="mt-9 flex flex-wrap gap-2.5">
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
            </ul>
          )}
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <h2 className="sr-only">All guides</h2>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ordered.map((post, index) => (
              <li
                key={post.slug}
                className={index === 0 ? "sm:col-span-2" : undefined}
              >
                <PostCard post={post} minutes={minutes(post.slug)} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        label="A question the guides do not answer"
        heading="Ask us about your job."
        body="Send the surface, the area and what it has to stand up to. You get a product recommendation and a written quotation from our Dar es Salaam office."
        topic="a question from the blog"
      />
    </main>
  );
}
