import Link from "next/link";
import { Fragment, type ReactNode } from "react";

/**
 * Post prose, rendered on the server into real HTML: no client JavaScript
 * in the reading column. Two inline marks only:
 *   [anchor](/path or https://...)   a link
 *   **text**                         bold
 */

const TOKEN = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g;

export function Inline({ text }: { text: string }): ReactNode {
  return text.split(TOKEN).map((part, index) => {
    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (link) {
      const [, label, href] = link;
      return href.startsWith("/") ? (
        <Link key={index} href={href} className="u-line font-semibold">
          {label}
        </Link>
      ) : (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="u-line font-semibold"
        >
          {label}
        </a>
      );
    }
    const bold = /^\*\*([^*]+)\*\*$/.exec(part);
    if (bold) return <strong key={index}>{bold[1]}</strong>;
    return <Fragment key={index}>{part}</Fragment>;
  });
}

export function Prose({ body }: { body: string }) {
  return (
    <>
      {body
        .split(/\n\s*\n/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean)
        .map((paragraph, index) => (
          <p key={index} className="mt-5 leading-[1.75]">
            <Inline text={paragraph} />
          </p>
        ))}
    </>
  );
}
