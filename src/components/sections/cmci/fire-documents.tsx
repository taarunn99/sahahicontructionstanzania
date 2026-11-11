import { Container } from "@/components/ui/container";
import { type FireDoc, fireDocs, ulNotice } from "@/config/cmci-docs";
import { cn } from "@/lib/utils";

/**
 * Certificates, a test listing and the UL designs for the Monokote range,
 * as download rows in the product page's documentation style. Server
 * component, no script. On every CMCI fireproofing page and the /cmci hub.
 * The UL printouts carry UL's reprint notice beside them (src/config/cmci-docs.ts).
 */

const PILL =
  "inline-flex min-h-11 items-center gap-2.5 rounded-full px-5 text-sm font-semibold tracking-wide uppercase transition-opacity hover:opacity-90";

const fileSize = (bytes: number) =>
  bytes >= 1024 * 1024
    ? `${(bytes / 1024 / 1024).toFixed(1)} MB`
    : `${Math.round(bytes / 1024)} KB`;

const fileName = (doc: FireDoc) => doc.file.split("/").pop();

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

function DocRow({ doc }: { doc: FireDoc }) {
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
        {doc.ulYear && (
          <p className="text-muted mt-1 text-xs">{ulNotice(doc.ulYear)}</p>
        )}
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

const GROUPS: { key: FireDoc["group"]; title: string }[] = [
  { key: "certificates", title: "Certificates and listings" },
  { key: "designs", title: "UL fire resistance designs" },
];

export function FireDocuments({ className }: { className?: string }) {
  return (
    <section
      id="fire-documents"
      aria-labelledby="fire-documents-heading"
      className={cn("scroll-mt-24 py-16 sm:py-24 print:hidden", className)}
    >
      <Container>
        <p className="label-sh text-muted">For the consultant&apos;s file</p>
        <h2
          id="fire-documents-heading"
          className="font-display text-phi-2 mt-4 max-w-3xl tracking-tight text-balance"
        >
          Certificates, test listings and UL designs.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed">
          The documents a consultant or an authority asks for before approving
          the material, published as issued. A fire rating belongs to a tested
          design at a stated thickness: check the design before you specify.
        </p>
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-8">
          {GROUPS.map((group) => (
            <div key={group.key} className="min-w-0">
              <h3 className="font-display text-xl">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {fireDocs
                  .filter((doc) => doc.group === group.key)
                  .map((doc) => (
                    <DocRow key={doc.file} doc={doc} />
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
