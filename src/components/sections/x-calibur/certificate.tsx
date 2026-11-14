import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { TiltCard } from "@/components/sections/x-calibur/tilt-card";
import { Container } from "@/components/ui/container";
import { productHref } from "@/config/catalogue";
import { type Credential } from "@/config/credentials";
import { siteConfig, whatsappLink } from "@/config/site";
import { xcaliburProductBySlug } from "@/config/x-calibur";
import { pad } from "@/lib/utils";

/**
 * The authorised distributor certificate, on the X-Calibur hub (owner,
 * 2026-11-14: "I'm okay with you displaying the certificates"). The brand's
 * red stage; the document itself in a white card, published as issued, with
 * the five ranges it names and the stocked product under each. Server
 * component; the entrance cascade and the lean on hover are the only
 * script, and the section sits below the first screen.
 *
 * FACT LAW: every word here is read off the certificate
 * (src/config/credentials.ts). The signatory is in the picture only.
 */

const PILL =
  "inline-flex min-h-12 items-center gap-2.5 rounded-full px-6 text-sm font-semibold tracking-wide uppercase transition-opacity hover:opacity-90";

const fileSize = (bytes: number) => `${Math.round(bytes / 1024)} KB`;

function RingOfText({ text }: { text: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden
      className="text-surface absolute -top-10 -right-6 size-36 animate-[spin_48s_linear_infinite] motion-reduce:animate-none sm:-top-12 sm:-right-10 sm:size-44"
    >
      <defs>
        <path
          id="certificate-ring"
          d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
        />
      </defs>
      <circle
        cx="100"
        cy="100"
        r="60"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 5"
      />
      <text
        fill="currentColor"
        className="font-display"
        fontSize="17"
        fontWeight="800"
        letterSpacing="3.2"
      >
        <textPath href="#certificate-ring">{text}</textPath>
      </text>
    </svg>
  );
}

export function XCaliburCertificate({
  credential,
}: {
  credential: Credential;
}) {
  const fileName = credential.file.split("/").pop();
  const askUs = whatsappLink(
    `Hello Sahihi, which X-Calibur products can you supply from the ${credential.ranges
      .filter((range) => range.products.length === 0)
      .map((range) => range.name)
      .join(" and ")} ranges?`,
  );

  return (
    <section
      id={credential.anchor}
      aria-labelledby="certificate-heading"
      className="bg-brand scroll-mt-24 overflow-x-clip py-16 text-white sm:py-24"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          {/* ---- The words on the paper ---------------------------------- */}
          <div>
            <p className="label-sh text-white">
              Certified · to {credential.validUntilText}
            </p>
            <h2
              id="certificate-heading"
              className="font-display mt-5 text-[clamp(2rem,6vw,4.5rem)] leading-[1.02] tracking-tight text-balance uppercase"
            >
              Authorized distributor for Tanzania. In writing.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed">
              {credential.issuer} certifies {siteConfig.legalName} as its{" "}
              {credential.title.toLowerCase()} for the {credential.territory},
              for the five product ranges below. The certificate is published
              here as issued and is valid until {credential.validUntilText}.
            </p>

            <Reveal className="mt-10">
              <ol className="border-t border-white/30">
                {credential.ranges.map((range, index) => {
                  const stocked = range.products
                    .map((slug) => xcaliburProductBySlug[slug])
                    .filter(Boolean);
                  return (
                    <li
                      key={range.name}
                      className="grid gap-x-6 gap-y-3 border-b border-white/30 py-5 sm:grid-cols-[3rem_1fr] lg:grid-cols-[3rem_1fr_1fr]"
                    >
                      <span className="spec-sh pt-1 text-white">
                        {pad(index + 1)}
                      </span>
                      <h3 className="font-display text-xl leading-tight sm:text-2xl">
                        {range.name}
                      </h3>
                      <ul className="flex flex-wrap gap-2 sm:col-start-2 lg:col-start-3">
                        {stocked.length > 0 ? (
                          stocked.map((product) => (
                            <li key={product.slug}>
                              <Link
                                href={productHref(product)}
                                className="chip-sh text-brand inline-flex min-h-10 items-center rounded-full bg-white px-4 text-sm font-semibold"
                              >
                                {product.name}
                              </Link>
                            </li>
                          ))
                        ) : (
                          <li>
                            <a
                              href={askUs}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="chip-sh inline-flex min-h-10 items-center rounded-full border border-white/60 px-4 text-sm"
                            >
                              To order: ask us for the range
                            </a>
                          </li>
                        )}
                      </ul>
                    </li>
                  );
                })}
              </ol>
            </Reveal>

            <Reveal className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={credential.file}
                target="_blank"
                rel="noopener noreferrer"
                className={`${PILL} text-brand bg-white`}
              >
                Open the certificate
                <span aria-hidden>&rarr;</span>
              </a>
              <a
                href={credential.file}
                download={fileName}
                className="u-line py-2 text-sm"
              >
                Download the PDF · {credential.pages} page ·{" "}
                {fileSize(credential.bytes)}
              </a>
            </Reveal>
          </div>

          {/* ---- The paper itself ---------------------------------------- */}
          <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
            <RingOfText text="AUTHORISED DISTRIBUTOR · TANZANIA · 2026 · " />
            <TiltCard className="relative">
              <figure className="rotate-[-1.5deg] rounded-md bg-white p-3 shadow-[0_30px_60px_-20px_rgba(12,42,54,0.55)] transition-transform duration-700 hover:rotate-0 sm:p-4">
                <Image
                  src={credential.image.src}
                  alt={credential.image.alt}
                  width={credential.image.width}
                  height={credential.image.height}
                  sizes="(min-width: 64rem) 40vw, (min-width: 40rem) 28rem, 100vw"
                  className="h-auto w-full rounded-sm"
                />
                <figcaption className="spec-sh text-muted mt-3 px-1 pb-1 leading-relaxed">
                  Issued by {credential.issuer}, {credential.issuerPlace}.
                  Published as issued.
                </figcaption>
              </figure>
            </TiltCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
