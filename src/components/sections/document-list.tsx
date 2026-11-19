import { cn } from "@/lib/utils";

/**
 * Documents to download, as rows: an icon, the name, one line on what it
 * is, "PDF · pages · size", Download and Open. Grouped under small
 * headings. Server component, no script. Lifted out of the CMCI fire
 * documents (2026-11-19) for the OYH documentation section and the
 * below-grade page; FireDocuments renders through it.
 */

export type DocEntry = {
  name: string;
  /** One line: what the document is and when it was issued. */
  what: string;
  /** Public path of the unaltered PDF. */
  file: string;
  pages: number;
  bytes: number;
  /** A small note under the line (a reprint notice, an edition). */
  note?: string;
};

export type DocGroup = { title: string; docs: DocEntry[] };

const PILL =
  "inline-flex min-h-11 items-center gap-2.5 rounded-full px-5 text-sm font-semibold tracking-wide uppercase transition-opacity hover:opacity-90";

export const fileSize = (bytes: number) =>
  bytes >= 1024 * 1024
    ? `${(bytes / 1024 / 1024).toFixed(1)} MB`
    : `${Math.round(bytes / 1024)} KB`;

const fileName = (doc: DocEntry) => doc.file.split("/").pop();

function SheetIcon() {
  return (
    <svg
      viewBox="0 0 24 28"
      aria-hidden
      className="text-brand h-8 w-7 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    >
      <path d="M3 1.5h12l6 6v19H3z" />
      <path d="M15 1.5v6h6M7 14h10M7 18h10M7 22h6" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden
      className="size-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 3v9.5M6 9l4 4 4-4M3.5 16.5h13" />
    </svg>
  );
}

export function DocRow({ doc }: { doc: DocEntry }) {
  return (
    <li className="border-deep/10 grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-4 rounded-lg border bg-white px-5 py-4 shadow-[0_1px_3px_rgba(12,42,54,0.08)] sm:grid-cols-[auto_1fr_auto] sm:px-6">
      <SheetIcon />
      <div className="min-w-0">
        <h4 className="leading-snug font-bold">{doc.name}</h4>
        <p className="mt-1 text-sm leading-relaxed">{doc.what}</p>
        <p className="spec-sh text-muted mt-1">
          PDF · {doc.pages} {doc.pages === 1 ? "page" : "pages"} ·{" "}
          {fileSize(doc.bytes)}
        </p>
        {doc.note && <p className="text-muted mt-1 text-xs">{doc.note}</p>}
      </div>
      <span className="col-span-2 flex flex-wrap items-center gap-x-5 gap-y-2 sm:col-span-1">
        <a
          href={doc.file}
          download={fileName(doc)}
          className={cn(PILL, "bg-brand text-white")}
        >
          Download
          <DownloadIcon />
        </a>
        <a
          href={doc.file}
          target="_blank"
          rel="noopener noreferrer"
          className="u-line py-2 text-sm"
        >
          Open
        </a>
      </span>
    </li>
  );
}

/** The groups side by side on wide screens, stacked on phones. */
export function DocumentList({
  groups,
  className,
}: {
  groups: DocGroup[];
  className?: string;
}) {
  const shown = groups.filter((group) => group.docs.length > 0);
  return (
    <div
      className={cn(
        "grid gap-10 lg:gap-8",
        shown.length > 1 && "lg:grid-cols-2",
        className,
      )}
    >
      {shown.map((group) => (
        <div key={group.title} className="min-w-0">
          <h3 className="font-display text-xl">{group.title}</h3>
          <ul className="mt-4 space-y-3">
            {group.docs.map((doc) => (
              <DocRow key={doc.file} doc={doc} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
