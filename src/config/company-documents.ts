import { siteConfig } from "@/config/site";

/**
 * The company's own papers, shown on /about (owner, 2026-11-14: the full
 * scan of the business licence, then "view it but not download it").
 *
 * VIEW ONLY: the licence is a screen-resolution raster (900 px, legible on
 * a phone, poor for print) with no PDF published, no download, no drag,
 * no right-click save, a "view only" layer over it and a noindex header on
 * the file (next.config.ts). A screenshot is still possible; this stops a
 * clean copy, not a determined person. The TIN, the fee and the receipt
 * number are on the paper and stay there: never typed into copy, alt text
 * or schema. The raster is a plain render of the owner's file
 * (docs/IMAGE-PROVENANCE.md 3o), nothing retouched.
 */
export type CompanyDocument = {
  id: string;
  /** The document's own heading. */
  title: string;
  issuer: string;
  issuerShort: string;
  number: string;
  issued: string;
  issuedText: string;
  validUntil: string;
  validUntilText: string;
  /** Shown on the page only; no file is offered. */
  viewOnly: true;
  image: { src: string; width: number; height: number; alt: string };
  page: string;
  anchor: string;
  received: string;
};

export const companyDocuments: CompanyDocument[] = [
  {
    id: "business-licence-2026",
    title: "Business Licence",
    issuer: "Business Registrations and Licensing Agency",
    issuerShort: "BRELA",
    number: siteConfig.registration.licenceNumber,
    issued: "2026-08-29",
    issuedText: "29 August 2026",
    validUntil: "2027-08-28",
    validUntilText: "28 August 2027",
    viewOnly: true,
    image: {
      src: "/documents/sahihi-business-licence-2026.webp",
      width: 900,
      height: 1273,
      alt: `United Republic of Tanzania business licence No. ${siteConfig.registration.licenceNumber}, issued by BRELA to Sahihi Construction Chemicals Limited, Coca Cola Road, Mikocheni, Dar es Salaam, dated 29 August 2026 and expiring 28 August 2027, with the coat of arms and a QR code`,
    },
    page: "/about",
    anchor: "documents",
    received: "2026-11-14",
  },
];

export const businessLicence = companyDocuments[0];
