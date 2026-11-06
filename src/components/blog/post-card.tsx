import Link from "next/link";

import { blogCategoryBySlug, type PostMeta } from "@/config/blog";
import { cn } from "@/lib/utils";

/** A post as a card: its category's stage colour, the title, one line. */
export function PostCard({
  post,
  minutes,
  className,
}: {
  post: PostMeta;
  minutes: number;
  className?: string;
}) {
  const category = blogCategoryBySlug[post.category];
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        category.stage,
        "group border-deep flex h-full min-h-72 flex-col justify-between rounded-lg border p-6 transition-transform duration-500 hover:-translate-y-1 sm:p-7",
        className,
      )}
    >
      <p className="spec-sh flex justify-between gap-4">
        <span>{category.label}</span>
        <span>{minutes} min read</span>
      </p>
      <div>
        <h3 className="font-display mt-8 text-xl leading-tight text-balance sm:text-2xl">
          {post.title}
        </h3>
        <p className="mt-3 line-clamp-3 leading-relaxed">{post.description}</p>
        <p className="spec-sh mt-5 flex items-center gap-2">
          Read the guide
          <span
            aria-hidden
            className="inline-block transition-transform duration-500 group-hover:translate-x-2"
          >
            &rarr;
          </span>
        </p>
      </div>
    </Link>
  );
}
