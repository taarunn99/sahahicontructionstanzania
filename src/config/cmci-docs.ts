/**
 * Certificates, a test listing and the UL fire resistance designs for the
 * Monokote range, from the owner's folder of 2026-11-11. Published
 * unaltered in public/tds/cmci/docs. Each line says what the document is,
 * as the document prints it. They are the brand's documents: nothing here
 * says Sahihi or CMCI holds a listing.
 *
 * Left out on purpose: the SASO certificate (expired 19/03/2026, Saudi
 * market only), the two VOC reports (the laboratory's report forbids use in
 * advertising), the laboratory test bundle, client approvals, the project
 * reference list, safety data sheets and the catalogue.
 *
 * The UL printouts come from UL Product iQ, which allows reproduction when
 * the file is shown whole, with "Reprinted from Product iQ with permission
 * from UL Solutions" and the copyright notice beside it (`ulNotice`, with the year each printout carries).
 */

export type FireDoc = {
  name: string;
  what: string;
  file: string;
  pages: number;
  bytes: number;
  group: "certificates" | "designs";
  /** A UL Product iQ printout: the copyright year it prints (`ulNotice`). */
  ulYear?: number;
};

const DIR = "/tds/cmci/docs";

export const fireDocs: FireDoc[] = [
  {
    name: "UL certificate of compliance R4339",
    what: "Lists the Monokote types tested to UL 263 and UL 2079, issued 25 June 2025.",
    file: `${DIR}/ul-certificate-of-compliance-r4339.pdf`,
    pages: 2,
    bytes: 355178,
    group: "certificates",
  },
  {
    name: "Monokote Z-106/HY surface burning",
    what: "UL Product iQ listing, ASTM E84 surface burning: flame spread index 0, smoke developed index 0.",
    file: `${DIR}/z-106-hy-surface-burning-e84.pdf`,
    pages: 1,
    bytes: 129235,
    group: "certificates",
    ulYear: 2025,
  },
  {
    name: "Asbestos-free letter",
    what: "Letter of 2013: an independent laboratory found no asbestos in the Monokote products, by PLM and TEM.",
    file: `${DIR}/monokote-asbestos-free-letter.pdf`,
    pages: 1,
    bytes: 24885,
    group: "certificates",
  },
  {
    name: "UL design D780: steel deck",
    what: "Floor and roof on steel deck and joists. Assembly ratings of 1, 1-1/2, 2 or 3 hours.",
    file: `${DIR}/ul-design-d780-steel-deck.pdf`,
    pages: 7,
    bytes: 1493079,
    group: "designs",
    ulYear: 2025,
  },
  {
    name: "UL design N782: beam under concrete",
    what: "Steel beam supporting a concrete floor, sprayed on three sides. Beam ratings of 1 to 4 hours.",
    file: `${DIR}/ul-design-n782-beam-concrete-deck.pdf`,
    pages: 6,
    bytes: 1097297,
    group: "designs",
    ulYear: 2024,
  },
  {
    name: "UL design S734: beam under steel deck",
    what: "Steel beam under a steel deck. Restrained beam ratings of 1 to 3 hours, unrestrained 1 to 4.",
    file: `${DIR}/ul-design-s734-beam-steel-deck.pdf`,
    pages: 4,
    bytes: 890904,
    group: "designs",
    ulYear: 2025,
  },
  {
    name: "UL design X854: open section columns",
    what: "Wide flange, angle, channel and tee columns. Ratings of 1 to 4 hours, thickness by W/D.",
    file: `${DIR}/ul-design-x854-columns-open-section.pdf`,
    pages: 16,
    bytes: 3008427,
    group: "designs",
    ulYear: 2024,
  },
  {
    name: "UL design Y710: hollow section columns",
    what: "Steel pipe and tube columns. Ratings of 1 to 4 hours, thickness by A/P.",
    file: `${DIR}/ul-design-y710-columns-hollow-section.pdf`,
    pages: 3,
    bytes: 628395,
    group: "designs",
    ulYear: 2024,
  },
];

export const ulNotice = (year: number) =>
  `Reprinted from Product iQ with permission from UL Solutions. ©${year} UL LLC.`;
