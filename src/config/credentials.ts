import type { BrandSlug } from "@/config/brands";

/**
 * The documents that prove an authorization, published as issued.
 *
 * FACT LAW: every field is read off the document itself. Nothing here is
 * worded past what the paper says. The PDF is the owner's file, unaltered,
 * under public/tds/; the picture is a plain raster of its one page
 * (docs/IMAGE-PROVENANCE.md 3o), nothing retouched. People named on a
 * document stay in the picture only; copy and schema never name them
 * (GOVERNANCE 2026-11-06).
 */
export type Credential = {
  id: string;
  brand: BrandSlug;
  /** The document's own heading, as printed. */
  title: string;
  /** Who issued it, from the stamp or letterhead. */
  issuer: string;
  issuerPlace: string;
  /** The territory, as printed. */
  territory: string;
  /** The ranges the document lists, in its order and its words. */
  ranges: { name: string; products: string[] }[];
  /** ISO date and the printed form. */
  validUntil: string;
  validUntilText: string;
  /** The unaltered PDF, with a canonical header to `page`. */
  file: string;
  pages: number;
  bytes: number;
  /** A raster of the document, for the page. */
  image: { src: string; width: number; height: number; alt: string };
  /** The page the document lives on, with its anchor. */
  page: string;
  anchor: string;
  /** When the owner supplied it. */
  received: string;
};

export const credentials: Credential[] = [
  {
    id: "x-calibur-authorised-distributor-2026",
    brand: "x-calibur",
    title: "Authorised Distributor",
    issuer: "X-Calibur International (FZE)",
    issuerPlace: "SAIF Zone, Sharjah, UAE",
    territory: "Tanzania region",
    // The products under each range are the stocked items whose names carry
    // the range prefix. X-Prime GP and GP2 carry no range prefix on the
    // certificate; the hub's systems list shows where they are used.
    ranges: [
      { name: "X-Pruf Waterproofing Systems", products: [] },
      { name: "X-Roc Concrete Repair Systems", products: [] },
      {
        name: "X-Tech Flooring Systems",
        products: ["x-tech-epoxyfloor-sl1", "x-tech-sbr-bond"],
      },
      { name: "X-Shield Coating Systems", products: ["x-shield-flexpruf"] },
      {
        name: "X-Seal Joint Sealants",
        products: ["x-seal-ps800", "x-seal-universal-primer"],
      },
    ],
    validUntil: "2026-12-31",
    validUntilText: "31 December 2026",
    file: "/tds/x-calibur/authorised-distributor-2026.pdf",
    pages: 1,
    bytes: 233688,
    image: {
      src: "/documents/x-calibur-authorised-distributor-2026.webp",
      width: 1400,
      height: 1812,
      alt: "X-Calibur Construction Chemistry certificate naming Sahihi Construction Chemicals Limited as authorised distributor for the Tanzania region, with the five product ranges, the X-Calibur International stamp and the managing director's signature, valid until 31 December 2026",
    },
    page: "/x-calibur",
    anchor: "certificate",
    received: "2026-11-14",
  },
];

export const credentialById = Object.fromEntries(
  credentials.map((credential) => [credential.id, credential]),
) as Record<string, Credential>;

/** The credential a brand holds, if the owner has supplied the document. */
export function credentialForBrand(brand: BrandSlug): Credential | null {
  return credentials.find((credential) => credential.brand === brand) ?? null;
}

/** The credential a page is built on; a missing document fails the build. */
export function requireCredential(brand: BrandSlug): Credential {
  const credential = credentialForBrand(brand);
  if (!credential) throw new Error(`${brand}: no credential on file`);
  return credential;
}

/** "/x-calibur#certificate" */
export const credentialHref = (credential: Credential) =>
  `${credential.page}#${credential.anchor}`;

/** True while the document is in date (build time; the page states the date). */
export const credentialInDate = (credential: Credential, now = new Date()) =>
  now <= new Date(`${credential.validUntil}T23:59:59+03:00`);
