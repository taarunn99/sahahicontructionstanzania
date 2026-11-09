"use client";

import { useRef, useState } from "react";

import { cn } from "@/lib/utils";

const PILL =
  "inline-flex min-h-11 items-center gap-2.5 rounded-full px-5 text-sm font-semibold tracking-wide uppercase transition-opacity hover:opacity-90";

/**
 * The BOQ clause on a product page: the text, a copy button, and the same
 * text as a plain text file and as a one-row spreadsheet (no rate column).
 * Downloads are data URLs, so they work without a server.
 */
export function BoqClause({
  clause,
  csv,
  fileBase,
}: {
  clause: string;
  csv: string;
  fileBase: string;
}) {
  const text = useRef<HTMLParagraphElement>(null);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(clause);
    } catch {
      // Older browsers: select the text so a long-press or Ctrl+C copies it.
      const range = document.createRange();
      if (text.current) range.selectNodeContents(text.current);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
      return;
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2400);
  };

  return (
    <div className="mt-12">
      <div className="border-deep/15 rounded-lg border bg-white p-5 shadow-[0_1px_3px_rgba(12,42,54,0.08)] sm:p-8">
        <p className="label-sh text-muted">Item description</p>
        <p ref={text} className="mt-4 max-w-4xl text-lg leading-relaxed">
          {clause}
        </p>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3 print:hidden">
        <button
          type="button"
          onClick={copy}
          className={cn(PILL, "bg-brand text-white")}
        >
          {copied ? "Copied" : "Copy clause"}
        </button>
        <a
          href={`data:text/csv;charset=utf-8,${encodeURIComponent(`﻿${csv}`)}`}
          download={`${fileBase} - BOQ clause.csv`}
          className={cn(PILL, "border-deep border")}
        >
          Excel (.csv)
        </a>
        <a
          href={`data:text/plain;charset=utf-8,${encodeURIComponent(clause)}`}
          download={`${fileBase} - BOQ clause.txt`}
          className={cn(PILL, "border-deep border")}
        >
          Text (.txt)
        </a>
        <span role="status" aria-live="polite" className="sr-only">
          {copied ? "Clause copied" : ""}
        </span>
      </div>
    </div>
  );
}
