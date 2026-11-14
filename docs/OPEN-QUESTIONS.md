# OPEN-QUESTIONS.md - decisions and facts only the owner can supply

Written 2026-11-05. Numbered so code comments and other docs can cite
them (Q1, D3). When one is answered: write the answer and the date under
it, update the config it unblocks, and leave the question here as the
record.

Ordered by how much they block.

---

## Blocking the Mapei strategy

### Q1. What is Mlinzi to Sahihi?

The Mapei price list and the project sheet supplied for this site are
both headed "Mlinzi". Mlinzi Construction Chemicals and Building
Materials Limited (Pugu Road, Dar es Salaam) runs **mlinzimapei.com** and
**mlinzicc.com**, states "Authorized distributor of Mapei", and currently
ranks 1-2 for every "Mapei Tanzania" query we want.

- **A. Predecessor.** Sahihi replaces Mlinzi. Then 301 every Mlinzi URL
  to its Sahihi equivalent. This is the fastest route to #1 by a wide
  margin, and it needs access to both Mlinzi domains.
- **B. Sister company that keeps trading.** Then split the query
  territory in writing before either site publishes more.
- **C. Unrelated.** Then it is a contest, and the "authorized" claims
  conflict.

> **Owner, 2026-11-05:** "leave it right now", the owner does not know of
> Mlinzi's site; this site is for Sahihi. **Working position: option C.**
> Treat mlinzimapei.com and mlinzicc.com as a third-party incumbent and
> win on depth. No redirects are planned. Still unexplained, and worth one
> conversation with the director: the price list and project sheet
> supplied for this site are Mlinzi documents, and the price list's author
> metadata reads "Sankaran Anil". If the two firms turn out to be linked,
> reopen this question: redirects would be worth more than any page.

### Q2. The appointment letters

For each brand: who appointed Sahihi, the exact wording, the territory,
and whether it is exclusive.

- **Mapei:** which Mapei entity (Mapei East Africa in Nairobi, Mapei
  Construction Chemicals in the UAE, Mapei SpA)? "Authorized distributor"
  is used on the site today on the strength of the introduction letter.
  Two other parties also claim Mapei for Tanzania (Nanocube Africa in
  Nairobi; Charan, named in a 2021 article).
- **X-Calibur: answered 2026-11-14.** The owner supplied X-Calibur
  International (FZE)'s "Authorised Distributor" certificate: Tanzania
  region, five ranges (X-Pruf, X-Roc, X-Tech, X-Shield, X-Seal), valid to
  31 December 2026, not worded as exclusive. Published as issued on
  `/x-calibur#certificate` (`src/config/credentials.ts`). Still open: the
  renewal after 31 December 2026, and x-calibur.com does not list Sahihi.
- **Oriental Yuhong:** named in the letter. No manufacturer page lists
  Sahihi.
- **CMCI and BIHUI:** on the business card only, not in the letter. The
  site says "brand partner" for both until a letter says more.

### Q3. Is Sahihi part of the Lapiz Group?

gcbuae.com names "Lapiz Group of Companies" as its parent and links to
lapizblue.com. Should Sahihi's schema carry `parentOrganization`, and
should the footer carry a group line? Nothing on the site says so today.
lapizblue.com sells Mapei for the UAE only and does not mention Tanzania;
the only overlap is its geo-free Mapei blog posts.

> **Owner, 2026-11-05: No, independent.** No `parentOrganization` in
> schema, no group line in the footer or on /about. The site already
> carries none. Never copy text from lapizblue.com or gcbuae.com.

### Q4. Where may Sahihi sell, and where does it actually deliver?

Schema `areaServed` is Tanzania only today. Before any regional page:
does each brand's agreement allow active selling into Kenya, Uganda,
Rwanda, Burundi, Zambia, DRC? Which of those have real deliveries?
Zanzibar and the mainland cities (Dodoma, Arusha, Mwanza, Mbeya): served
from Dar es Salaam, or through resellers?

---

## Blocking specific pages

### Q5. The project references

The sheet lists 16 projects for 2025-2026 (Ocean Mall, Kimbiji Beach
Resort, Baraza Resort and Spa, Zanzibar Crown Hotel, Lake Cement, Aga
Khan Education and others) with applicators. Sahihi's licence is dated
29 August 2026. May these be published as Sahihi references? Has each
client agreed? Only 6 of 15 names could be verified online. Until
answered, `/projects` is not built and no project is named on the site.

> **Owner, 2026-11-05:** asked "where is the projects library?". Taken as
> the instruction to build it. `/projects` and a home page strip now list
> 15 of the 16 rows: site or client, and the products supplied, nothing
> else. Applicator names are not published. Row 5 ("Said Salim") is held
> because it may be a private individual. **Still open before launch:**
> written confirmation that these may be published as Sahihi references
> (the sheet is headed "Mlinzi" and predates the licence) and that each
> client agrees. See `docs/DEPLOY-CHECKLIST.md` section 1b. The sheet also
> says "Mapegrout ME 06" (not ME05) and "Mapegrout TX 60", which bears on
> Q8.

> **Owner, 2026-11-06, before the first push:** confirmed. The 15 projects may
> be published as Sahihi references ("Owner has confirmed, keep them"). Row 5
> stays held out.

### Q6. Contact details

- Is +255 704 722 705 on WhatsApp (ideally WhatsApp Business)? The whole
  lead flow assumes yes.
- A sales email other than info@? A landline? Opening hours?
- Social profiles (LinkedIn, Instagram, Facebook)? None were found.
- Who receives the enquiry form?

### Q7. Which address is right?

Business card and licence: Coca-Cola Road, **Mikocheni B**, Light
Industrial Area (Kinondoni district, Mikocheni ward). Introduction
letter: "Coco-Cola Rd, **Mwenge**". The site uses the card and licence
wording. The Google Business Profile must match exactly.

### Q8. Catalogue identity questions

Eleven items in `docs/CATALOGUE-EXTRACTION.md` section 6, answered by
reading labels in the warehouse. The ones that block pages: Mapegrout
ME05 or ME 06; Mapegrout T60 or T60 ME; which quartz grades; X-Tech Bond's
real name.

### Q9. Product images and data sheets

Pack shots must come from the manufacturers (we never generate a pack:
image models invent label text). Can Mapei and X-Calibur supply their
media libraries, and may the site host their data-sheet PDFs, or link to
them?

> **2026-11-05:** the owner asked for data sheet downloads on the Mapei
> pages. 44 official Mapei data sheets are now served from
> `public/tds/mapei/`, unaltered, each showing its edition code. Still
> open: Mapei's confirmation that a distributor may host them (normal
> practice, but not confirmed in writing), the 3 products with no sheet on
> file (Mapefloor Finish 415 ME, Mapelastic Smart, Mapei Gun 585 2K),
> safety data sheets, and pack shots.

### Q10. Stock lists for Oriental Yuhong, CMCI and BIHUI

We have logos only. OYH's export catalogue has about 220 products
(SBS/APP torch-on, self-adhesive, HDPE and TPO membranes, PU and
cementitious coatings, tile adhesives, SPC/LVT). BIHUI turned out to be a
tiling *tools* brand (cutters, lifters, levelling systems), not adhesives.
CMCI is Construction Material Chemical Industries of Dammam, Saudi
Arabia, with 207 products. What does Sahihi actually hold of each?

### Q20. CMCI data sheets (raised 2026-11-07)

ANSWERED 2026-11-07: the owner wants the manufacturer's own sheets on the pages, as
they are. They are in `public/tds/cmci/`, unaltered.

Still open for this range:
- Fire approvals: the sheets say bags carry the manufacturer's name and UL labels.
  Does CMCI have the right to supply under these approvals and product names?
- Monokote Z-156T's sheet is the one written for tunnels, but it is listed under
  Commercial, as on the owner's source. Should it also show under Tunnels?
- Avikote AV 650's sheet prints 640 kg/m3 in its table and 660 kg/m3 minimum in
  place. Both are shown as printed. Bag sizes for the six Monokote products are not
  on their sheets.

### X-Calibur, raised 2026-11-07

- X-Seal PS800's sheet tells you to prime with X-Seal PS800 Primer; the owner
  supplied X-Seal Universal Primer, whose sheet covers PS800. Which is on the shelf?
- X-Prime GP2 is not on the 2026 price list. Pack is shown as 18 litres: confirm.
- X-Calibur pack photographs: none in the data sheets or brochures. Owner to supply.

### Q11. What sits behind sports flooring, SPC/LVT and mining?

The letter lists sports coatings, EPDM, synthetic grass, SPC and LVT
flooring, polyurea, and mining and underground products. None is on a
price list. Which brands and products? Can Sahihi supply Mapei's
underground range (UTT), non-shrink and epoxy machinery grouts,
plasticizers, and carbon-fibre strengthening? The pages are not built
until this is known.

### Q12. Directors and the portrait

Partly answered 2026-11-06: the owner asked for the director's name on the
About page. It is there, with Person schema. Still open: the portrait, any
other directors, a biography.

One director was supplied: Anil Sankaran. Are there others for the site?
Short biographies? And please confirm the portrait supplied (file name
"Elegant South Asian Executive Portrait") is the director's approved
likeness for publication.

### Q13. Licence and ownership

The BRELA licence activity is "Manufacturing Of Chemicals And Chemical
Products"; the site positions Sahihi as a distributor. Is local
manufacture planned? And is the company Tanzanian-owned? Mine procurement
asks for a Local Content Plan and proof of ownership, which decides
whether mining pages are worth building.

---

## Blocking launch

### Q14. Higgsfield

Every image job was refused on 2026-11-05: "You've reached the daily
generation limit for your grace period" (936 credits available, plan in a
grace period). Twelve prompts are queued in `docs/IMAGE-PROVENANCE.md`.
Fix the plan, or say which other generator to use.

### Q15. Domain and hosting

sahihicc.com shows a Namecheap parking page. Registered 2026-07-15,
expires 2027-07-15. MX and SPF records are on Namecheap hosting and must
be kept when DNS moves, or info@sahihicc.com stops. Which Vercel account
and team? Register sahihicc.co.tz (free of DNS records today) and
redirect it?

> **2026-11-05:** the owner referred to the domain as "sahihi.com". That
> domain is not Sahihi's: it was registered in 2006 by another party, is
> renewed to 2029, and its www host points at a SmugMug photo site. The
> business card and the info@ address use **sahihicc.com**, which is what
> the site is built for (`NEXT_PUBLIC_SITE_URL`, default in
> `src/config/site.ts`). Confirm sahihicc.com is the launch domain.

### Q16. Disk space

The machine has 14 GB free; the handoff asks for 30 GB. Dev will crawl.

### Q17. Price intent

Research shows Jiji and CTM win every "price" query by printing shilling
prices. With prices off the site we cannot win those with a number. The
plan is one `/price-list` page that explains what moves the price and
sends the current list by WhatsApp on request. Acceptable? Or should an
"as of" range ever appear?

### Q18. Swahili

Launch in English with Swahili question-and-answer blocks on the main
pillars, written by a person. A full `/sw` site later. Who writes the
Swahili?

**ANSWERED 2026-11-06:** a switch, English by default. Real `/sw` pages for the
key pages first (`/sw`, `/sw/mapei`, five line pages), written by Claude: "you
only write i trust you". Every other page falls back to Google Translate.
Not yet reviewed by a Swahili reader. More `/sw` pages only if these earn traffic.

### Q19. Blog and BIHUI, raised 2026-11-06

Published as described unless the owner says otherwise:

1. **CRB limits on the blog. ANSWERED 2026-11-06:** "i dont want prices into
   the website". The shilling figures were removed; the post explains the limits
   and links to CRB's own table.
2. **BIHUI authorisation. ANSWERED 2026-11-06:** "Brand partner" stays.
3. **BIHUI stock. ANSWERED 2026-11-06:** anything can be arranged, with a lead
   time of 4 days after confirmation. Stated on the BIHUI pages.
4. **BIHUI codes shown without a size. ANSWERED 2026-11-06:** leave them as they
   are ("Ask us"): TSL060, TSL120, TSL240, PTSB08, PTSB10, CFHS165, CFHS190,
   SCDB4, SCTB4, MM1500, LFMC5, LLG05, BLSE100, FTPT450, FTC200.
5. **BIHUI pictures.** Withheld: concrete-grinder-working-stand (another
   company's watermark), water-cooling-parts (too small to confirm). Matched
   by inference, owner to confirm: both concrete grinders, three laser kits,
   both spacer posts, telescope handle. 54 of 81 pictures are under 600 px in
   the PDF: better originals from BIHUI would sharpen pages and 3D models.
6. **Conflicts between lists and data sheets**, sheet value published:
   Planiseal 88 stocked 25 kg, sheet 20 kg; YHCoat-2060 stocked 15 kg, sheet
   25 kg. Mapeflex PU 45 FT re-prime after 3 hours (sealant sheet) or 24 hours
   (primer sheet): the post says 3.
7. **X-Shield FlexPruf.** Its 5-day wait before immersion and its potable water
   line are on the data sheet but not yet in the product page's extract.
8. **Site practice marked as ours, not Mapei's:** the hot-weather advice for
   Kerapoxy (+30°C limit against Dar es Salaam heat) and pouring base plate
   grout from one side. Ask Mapei's technical team to confirm.

---

## Design decisions (detail in DESIGN-CONCEPT.md section 10)

| # | Decision | Default in the scaffold |
|---|---|---|
| D1 | Palette | **Bahari Solid**: the owner dropped pastel on 2026-11-06. Ink text; solid Blue, Green and Yellow stages; Chalk ground |
| D2 | Display face: Cormorant Garamond Light or Fraunces | Cormorant |
| D3 | Hero: generated photograph, or keep the drawn-section hero | drawn section |
| D4 | Three.js build-up on the waterproofing hub | planned, not built |
| D5 | Detent tick sound on the solutions wheel | off |
| D6 | Ambient film: is there real footage? | no film |
| D7 | Logo yellow as a small "authorized" seal colour | no |
| D8 | "Mapei Tanzania" is owned by a `/mapei` hub (recommended) or by the home page | **`/mapei` hub - confirmed by the owner 2026-11-05** |
| D9 | Route map and phase order in SEO-STRATEGY.md section 4 | as written |

### Q21. HDPE, sports, Vasa and Tanzanite Bridge (raised 2026-11-07)

- **HDPE documents:** the method statement (June 2025) is written for PMH-3080, the
  data sheet (April 2026) for PMH-3080 Plus. Pour within 42 days (method) against 21
  days (data sheet). The older brochure prints other values (27.6 MPa, 990 N, 880 N/m,
  70 m, 1400 N/m). Published: the data sheet, with the 21 and 42 day note on the page.
  Ask: does the method statement stand for Plus? ANSWERED 2026-11-09: PMH-3080 Plus is held in Dar es Salaam.
- **Sports flooring:** only the presentation exists. No data sheets, no test values, no
  stock list. ANSWERED 2026-11-09: held in Dar es Salaam; the owner sent the Sports Floor
  Product Manual (EN). It prints layers with PSV codes, no test values. Each system's pages are a
  download. The EPDM walking track is only in the deck, so it has no download.
- **Vasa:** held in Dar es Salaam (owner, 2026-11-09); which decors is unknown, so the pages say "enquire" and never "in stock".
  The dealer wording rests on the owner's word; there is no letter (same for CMCI, Q2).
  The data pages carry hidden text (a PET sheet, Cfl-s1, "KINGDOMFLOOR 99/100") that is
  not visible on the page: only visible values are used. Ask Vasa for clean data sheets.
- **Tanzanite Bridge:** the owner says OYH supplied it, products not named. The card says
  "Oriental Yuhong range". ANSWERED 2026-11-09: OYH bitumen membrane, for the waterproofing.
  Open: should an OYH bitumen membrane get a product page? Its data sheet is needed.

### Q22. OYH sports, second round (raised 2026-11-09, answered the same day)

- **Elastic layer code:** PSV-201 (owner). The price list and the guide print PSV-202.
- **Stock:** acrylic court, 13 mm EPDM and turf are ordered per job, 3 to 5 days
  lead time (owner). Tracks and silicon PU stay "held in Dar es Salaam".
- **Other systems** (prefabricated tracks and court, PVC, wood, tiles): "ask us" is
  fine (owner). No pages.
- Still open: is there a separate English file of the track film (taken from the pptx)?
