import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { DocumentCard } from "@/components/sections/document-card";
import { Container } from "@/components/ui/container";
import { businessLicence } from "@/config/company-documents";
import { credentialHref, requireCredential } from "@/config/credentials";
import { siteConfig } from "@/config/site";

/**
 * "On the wall": the papers behind the company (owner, 2026-11-14). The
 * BRELA business licence, which the law says must hang in a conspicuous
 * place, shown to be read and not offered as a file (owner: "view it but
 * not download it"), and the X-Calibur authorised distributor certificate,
 * which consultants may download. Signal Yellow stage, Ink text, each
 * paper in the shared DocumentCard. Server component.
 *
 * FACT LAW: every line is read off the document (src/config/company-documents.ts,
 * src/config/credentials.ts). The TIN, fee and receipt number on the licence
 * stay on the paper and are never typed here.
 */

const PILL =
  "inline-flex min-h-12 items-center gap-2.5 rounded-full px-6 text-sm font-semibold tracking-wide uppercase transition-opacity hover:opacity-90";

const fileSize = (bytes: number) => `${Math.round(bytes / 1024)} KB`;

export function CompanyDocuments({ kicker }: { kicker: React.ReactNode }) {
  const licence = businessLicence;
  const certificate = requireCredential("x-calibur");

  return (
    <section
      id="documents"
      aria-labelledby="documents-heading"
      className="bg-surface scroll-mt-20 overflow-x-clip py-20 sm:py-28"
    >
      <Container>
        {kicker}
        <h3
          id="documents-heading"
          className="font-display mt-6 max-w-4xl text-[clamp(2rem,6vw,4.5rem)] leading-[1.02] tracking-tight text-balance uppercase"
        >
          The papers, as issued.
        </h3>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed">
          The business licence the law says must hang in a conspicuous place,
          and the certificate that names Sahihi as X-Calibur&apos;s authorized
          distributor for Tanzania. Nothing retouched.
        </p>

        <div className="mt-14 grid gap-16 lg:grid-cols-2 lg:gap-12">
          {/* ---- The licence: read it here, no file ------------------------ */}
          <Reveal className="mx-auto w-full max-w-md lg:max-w-none">
            <DocumentCard
              image={licence.image}
              caption={`Issued by the ${licence.issuer}. Shown to be read; not offered as a file.`}
              ring="BUSINESS LICENCE · BRELA · TANZANIA · "
              ringId={`${licence.id}-ring`}
              ringClassName="text-deep"
              viewOnly
            />
            <h4 className="font-display mt-10 text-2xl leading-tight sm:text-3xl">
              {licence.title}
            </h4>
            <ul className="mt-4 space-y-1.5 leading-relaxed">
              <li>No. {licence.number}</li>
              <li>
                Issued {licence.issuedText}, valid to {licence.validUntilText}
              </li>
              <li>
                Issued to {siteConfig.legalName}, {siteConfig.address.street},{" "}
                {siteConfig.address.district}, {siteConfig.address.city}
              </li>
            </ul>
            <p className="spec-sh text-muted mt-7 leading-relaxed">
              View only. To verify the licence, quote its number to{" "}
              {licence.issuerShort}.
            </p>
          </Reveal>

          {/* ---- The certificate: on the X-Calibur page, with its PDF ----- */}
          <Reveal className="mx-auto w-full max-w-md lg:max-w-none">
            <DocumentCard
              image={certificate.image}
              caption={`Issued by ${certificate.issuer}, ${certificate.issuerPlace}. Published as issued.`}
              ring="AUTHORISED DISTRIBUTOR · X-CALIBUR · 2026 · "
              ringId={`${certificate.id}-ring`}
              ringClassName="text-deep"
            />
            <h4 className="font-display mt-10 text-2xl leading-tight sm:text-3xl">
              {certificate.title}, X-Calibur
            </h4>
            <ul className="mt-4 space-y-1.5 leading-relaxed">
              <li>
                {certificate.issuer} · {certificate.territory}
              </li>
              <li>Valid to {certificate.validUntilText}</li>
              <li>
                Five ranges:{" "}
                {certificate.ranges
                  .map((range) =>
                    range.name.replace(/ (Systems|Sealants)$/, ""),
                  )
                  .join(", ")}
              </li>
            </ul>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href={credentialHref(certificate)}
                className={`${PILL} bg-deep text-chalk`}
              >
                See it on the X-Calibur page
                <span aria-hidden>&rarr;</span>
              </Link>
              <a
                href={certificate.file}
                target="_blank"
                rel="noopener noreferrer"
                className="u-line py-2 text-sm"
              >
                Open the PDF · {certificate.pages} page ·{" "}
                {fileSize(certificate.bytes)}
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
