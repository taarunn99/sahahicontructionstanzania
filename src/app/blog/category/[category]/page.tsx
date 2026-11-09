import type { Metadata } from "next";
import { RelatedLinks } from "@/components/sections/related-links";
import { notFound } from "next/navigation";

import { PostCard } from "@/components/blog/post-card";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import {
  blogCategories,
  blogCategoryBySlug,
  postsInCategory,
  type BlogCategorySlug,
} from "@/config/blog";
import { siteConfig } from "@/config/site";
import { postContent } from "@/content/blog";
import { wordCount } from "@/lib/blog";
import { seoDescription, seoTitle, ogBase } from "@/lib/seo";
import { cn } from "@/lib/utils";

type Params = Promise<{ category: string }>;

export const dynamicParams = false;

// Only categories that have posts get a page: no thin pages.
export function generateStaticParams() {
  return blogCategories
    .filter((category) => postsInCategory(category.slug).length > 0)
    .map((category) => ({ category: category.slug }));
}

const meta = (slug: BlogCategorySlug) => {
  const category = blogCategoryBySlug[slug];
  return {
    title: seoTitle(
      `${category.label} Guides for Tanzania`,
      " - Sahihi Blog",
      " | Sahihi",
    ),
    description: seoDescription(category.intro),
  };
};

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { category } = await params;
  if (!blogCategoryBySlug[category as BlogCategorySlug]) return {};
  const { title, description } = meta(category as BlogCategorySlug);
  const url = `/blog/category/${category}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      ...ogBase,
      title,
      description,
      url,
    },
  };
}

const CATEGORY_LINKS: Record<
  string,
  { label: string; href: string; sub?: string }[]
> = {
  waterproofing: [
    { label: "Mapei waterproofing", href: "/mapei/waterproofing" },
    {
      label: "HDPE waterproofing",
      href: "/oriental-yuhong/hdpe-waterproofing",
    },
    { label: "Oriental Yuhong", href: "/oriental-yuhong" },
    { label: "X-Calibur sealants", href: "/x-calibur" },
  ],
  tiling: [
    {
      label: "Tile adhesives and grouts",
      href: "/mapei/tile-adhesives-grouts",
    },
    { label: "Primers and levelling", href: "/mapei/primers-levelling" },
    { label: "BIHUI tiling tools", href: "/bihui" },
  ],
  flooring: [
    { label: "Resin flooring", href: "/mapei/resin-flooring" },
    { label: "Primers and levelling", href: "/mapei/primers-levelling" },
    { label: "Vasa SPC and LVT", href: "/vasa" },
    { label: "Sports flooring", href: "/oriental-yuhong/sports-flooring" },
  ],
  "concrete-repair": [
    { label: "Mapei concrete repair", href: "/mapei/concrete-repair" },
    { label: "X-Calibur", href: "/x-calibur" },
    { label: "Fire rated cement", href: "/cmci/fire-rated-cement" },
  ],
  "tools-and-technique": [
    { label: "BIHUI tools", href: "/bihui" },
    {
      label: "Tile adhesives and grouts",
      href: "/mapei/tile-adhesives-grouts",
    },
    { label: "All products", href: "/products" },
  ],
  "building-in-tanzania": [
    { label: "All products", href: "/products" },
    { label: "Projects", href: "/projects" },
    { label: "Mapei", href: "/mapei" },
    { label: "Oriental Yuhong", href: "/oriental-yuhong" },
  ],
};

export default async function BlogCategoryPage({ params }: { params: Params }) {
  const { category: slug } = await params;
  const category = blogCategoryBySlug[slug as BlogCategorySlug];
  if (!category) notFound();
  const list = postsInCategory(category.slug).sort((a, b) =>
    b.datePublished.localeCompare(a.datePublished),
  );
  const url = `/blog/category/${category.slug}`;
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: category.label, href: url },
  ];
  const { title, description } = meta(category.slug);

  return (
    <main className="theme-light bg-background text-foreground flex-1">
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "CollectionPage",
            name: title,
            description,
            url: `${siteConfig.url}${url}`,
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: list.length,
              itemListElement: list.map((post, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: post.title,
                url: `${siteConfig.url}/blog/${post.slug}`,
              })),
            },
          },
        ]}
      />

      <section className={cn(category.stage)}>
        <Container className="pt-28 pb-14 sm:pt-36 sm:pb-20">
          <Breadcrumb items={crumbs} />
          <p className="label-sh mt-10">
            Blog · {list.length} {list.length === 1 ? "guide" : "guides"}
          </p>
          <h1 className="font-display mt-5 max-w-5xl text-[clamp(2.1rem,7vw,4.6rem)] leading-[1.03] text-balance">
            {category.label}.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed">
            {category.intro}
          </p>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <h2 className="sr-only">Guides</h2>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((post) => (
              <li key={post.slug}>
                <PostCard
                  post={post}
                  minutes={Math.max(
                    2,
                    Math.round(
                      (postContent[post.slug]
                        ? wordCount(postContent[post.slug])
                        : 0) / 220,
                    ),
                  )}
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <RelatedLinks
        label="The products behind these guides"
        heading="Where to get them."
        className="bg-surface"
        links={CATEGORY_LINKS[category.slug] ?? []}
      />
    </main>
  );
}
