import { DocumentList } from "@/components/sections/document-list";
import { Container } from "@/components/ui/container";
import { type FireDoc, fireDocs, ulNotice } from "@/config/cmci-docs";
import { cn } from "@/lib/utils";

/**
 * Certificates, a test listing and the UL designs for the Monokote range,
 * as download rows in the product page's documentation style (the shared
 * DocumentList since 2026-11-19). Server component, no script. On every
 * CMCI fireproofing page and the /cmci hub. The UL printouts carry UL's
 * reprint notice beside them (src/config/cmci-docs.ts).
 */

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
        <DocumentList
          className="mt-10"
          groups={GROUPS.map((group) => ({
            title: group.title,
            docs: fireDocs
              .filter((doc) => doc.group === group.key)
              .map((doc) => ({
                name: doc.name,
                what: doc.what,
                file: doc.file,
                pages: doc.pages,
                bytes: doc.bytes,
                note: doc.ulYear ? ulNotice(doc.ulYear) : undefined,
              })),
          }))}
        />
      </Container>
    </section>
  );
}
