# SOURCE-FACTS.md - where every company fact on the site comes from

Written 2026-11-05. Company facts live in `src/config/site.ts`,
`src/config/brands.ts` and `src/config/company.ts`. This file traces each
one to an owner-supplied document, and lists where the documents disagree.

Documents (in `assets/source/owner-supplied/`, gitignored):

| Ref | File | What it is |
|---|---|---|
| CARD | `sahihi-business-card-anil-sankaran.pdf` | director's business card, two sides, Canva vector export dated 2026-10-30 |
| LETTER | `sahihi-intro-letter.pdf` | company introduction letter, three pages, stamped |
| LICENCE | `business-licence-20000209142.pdf` | BRELA business licence, printed copy |
| PORTRAIT | `director-anil-sankaran-portrait.png` | director portrait, 1122 x 1402 |

## 1. Company facts

| Fact | Value on the site | Source |
|---|---|---|
| Legal name | Sahihi Construction Chemicals Limited | LICENCE line 3; CARD logo; LETTER sign-off |
| Common name | Sahihi Construction Chemicals | derived from the legal name |
| Tagline | Enhance Your Building Life | CARD and LETTER logo lockup |
| Sign-off line | Building Better. Protecting Longer. | LETTER, last line (printed with an exclamation mark) |
| Address | Coca-Cola Road, Mikocheni B Light Industrial Area, Dar es Salaam, Tanzania | CARD |
| District / ward | Kinondoni / Mikocheni | LICENCE section 4 |
| Phone | +255 704 722 705 | CARD |
| Email | info@sahihicc.com | CARD, LETTER footer |
| Website | www.sahihicc.com | CARD |
| Director | Anil Sankaran | CARD |
| Business licence | No. 20000209142, issued 29/08/2026, expires 28/08/2027 | LICENCE |
| Issuer | Business Registrations and Licensing Agency | LICENCE line 1 |
| TIN | not published | LICENCE line 2. Deliberately kept off the site and out of the repo config; add it only if the owner asks |
| Licensed activity | Manufacturing Of Chemicals And Chemical Products | LICENCE line 3. NOT stated on the site (Q13) |
| Vision, mission | quoted in full | LETTER page 3 |
| Five key initiatives | reworded, same content | LETTER page 3 |
| Five solution areas and their scope lists | reworded, same content | LETTER pages 1-2 |
| "authorized distributor" of Mapei, Oriental Yuhong, Xcalibur | brands.ts | LETTER page 2, "Our Global Partners" |
| Brand one-liners (Mapei, Oriental Yuhong, Xcalibur) | brands.ts `blurb` | LETTER pages 2-3, near verbatim |
| CMCI and BIHUI as brands | brands.ts, "brand partner" | CARD back (logos only) |
| Warehouse in Dar es Salaam | "held at our Dar es Salaam warehouse" | Mapei price list footnote: "PRICES ARE EX WAREHOUSE DAR". Note the list is headed Mlinzi (Q1) |

## 2. Where the documents disagree

| # | Conflict | What the site does |
|---|---|---|
| 1 | Address: "Mikocheni B" (CARD, LICENCE ward) vs "Mwenge" (LETTER footer) | uses CARD and LICENCE. Q7 |
| 2 | Street spelling: "Coca-Cola" (CARD), "Coca Cola" (LICENCE), "Coco-Cola" (LETTER, a typo) | "Coca-Cola Road" |
| 3 | Brand list: five logos on the CARD, three names in the LETTER | three are "authorized distributor", two are "brand partner". Q2 |
| 4 | Brand name: "Xcalibur" (LETTER) vs "X-Calibur" (CARD logo, the maker's own spelling) | X-Calibur |
| 5 | X-Calibur origin: "UAE" (LETTER). The maker says established 2004 in the USA, with a UAE headquarters for Asia, Arabia and Africa | "UAE", as the letter has it |
| 6 | Company name as the owner sometimes writes it: "Sahehi Constructions" | licence spelling always |
| 7 | Licensed activity is manufacturing; the letter describes distribution | the site says distributor; licence activity not shown. Q13 |
| 8 | Supplied price list and project sheet are headed "Mlinzi", and the projects predate Sahihi's licence | products used as the stock list; projects not published. Q1, Q5 |

## 3. Facts on the site that are judgement, not documents

Flagged so the owner can strike any that are wrong:

- "Technical support" as a capability: the letter speaks of "technical
  expertise" and "technical support"; no service terms are defined.
- "You receive a written quotation": assumed process. No turnaround time
  is promised anywhere, on purpose.
- Languages in schema (`en`, `sw`): assumed for a Dar es Salaam sales
  line.
- The home hero drawing is a generic tiled wet-area build-up, captioned
  as illustrative.
- The business licence number is shown on /about (a licence is a public
  display document). Strike it if the owner prefers.
