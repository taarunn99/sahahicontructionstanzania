# Metadata pass, 2026-11-12: X-Calibur, CMCI, Oriental Yuhong, Vasa

Agent 2 of the six-agent metadata pass. One search query per page, a 35-60
character title, a hand-written 120-160 character description and an Open
Graph hook (`resolveOg(path) ?? ogBase.images`; the seven sports pages keep
their system picture as the fallback). Registry of record: `src/config/seo/`
(`x-calibur.ts`, `cmci.ts`, `oyh.ts`, `vasa.ts`). No price anywhere, no
superlative, hyphens only, no claim beyond the data sheet.

Stock wording: X-Calibur and the six OYH products are "held" (the owner's
lists, Dar es Salaam). CMCI is "order": fireproofing comes in to order and is
"supplied from Dar es Salaam", never "in stock". Vasa and the sports systems
are "enquire": Vasa never says "in stock"; acrylic, EPDM and turf are ordered
per job (Q22). Authorization: X-Calibur and Oriental Yuhong "authorized
distributor"; CMCI and Vasa "authorized dealer". CMCI is never worded as the
maker and the company behind its data sheets is not named.

Item titles come from `composeItemTitle(name, brand, typeWords, { geo })` in
`src/lib/seo.ts`, read through `xcaliburItemTitle`, `cmciItemTitle` and
`oyhItemTitle`; the OYH brand word in titles is "OYH" because "Oriental
Yuhong" rarely fits the budget. Hub, explainer, sports and Vasa pages read
`titleOverride` and `description` through `xcaliburPageMeta`, `cmciPageMeta`,
`oyhPageMeta` and `vasaPageMeta`, which throw at build time if a row is
missing. `SYSTEM_PAGES` in `src/config/oyh-sports-systems.ts` spreads
`oyhPageMeta("sports/<system>")` instead of carrying its own strings.

## Pages (41)

| route | query | title | len | description | len | stock | notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| /x-calibur | X-Calibur Tanzania | X-Calibur Tanzania - Epoxy Floors, Waterproofing, Sealants | 58 | X-Calibur in Tanzania from Sahihi, authorized distributor in Dar es Salaam: epoxy floors, primers, SBR bond, FlexPruf and PS800 sealant. Quote on WhatsApp. | 155 | held | Was 165 characters; the range list is the catalogue |
| /x-calibur/x-tech-sbr-bond | SBR bonding agent Tanzania | X-Tech SBR Bond Tanzania - X-Calibur SBR Bonding Agent | 54 | X-Tech SBR Bond, SBR bonding agent: latex bond coat to ASTM C1059 Type II, about 8 m² per litre. 20 litre drums held in Dar es Salaam. Quote on WhatsApp. | 153 | held | Query graded EASY in research 10 (row 31). Facts: TDS standards and "Typically 8m² per liter" |
| /x-calibur/x-tech-epoxyfloor-sl1 | self levelling epoxy floor | X-Tech EpoxyFloor SL1 Tanzania - Self Levelling Epoxy Floor | 58 | X-Tech EpoxyFloor SL1 self levelling epoxy floor: 17 m² per 17 litre pack at 1 mm, over 70 MPa compressive. Held by Sahihi in Dar es Salaam. Ask for a quote. | 157 | held | titleOverride (gate fix): the pattern cannot fit "self levelling" with the brand word, so the title drops "X-Calibur"; the name already says X-Tech. Facts: TDS consumption line, ASTM D695 >70MPa |
| /x-calibur/x-prime-gp | epoxy primer Tanzania | X-Prime GP Tanzania - X-Calibur Epoxy Primer \| Sahihi | 53 | X-Prime GP epoxy primer in Tanzania: 90% volume solids, 5 to 10 m² per litre under epoxy floors. 18 litre packs held in Dar es Salaam. Ask for a quote. | 151 | held | TDS: volume solids 90%, 5 and 10 m² per litre at 200 and 100 microns |
| /x-calibur/x-prime-gp2 | X-Prime GP2 Tanzania | X-Prime GP2 Tanzania - X-Calibur Epoxy Primer \| Sahihi | 54 | X-Prime GP2 in Tanzania: two part epoxy primer at 100% volume solids, 10 m² per litre at 100 microns. 18 litre packs held in Dar es Salaam. Quote on WhatsApp. | 158 | held | Same type words as GP; the query differs. TDS: 100% volume solids, Part A + Part B |
| /x-calibur/x-shield-flexpruf | elasto-cement coating | X-Shield FlexPruf Tanzania - X-Calibur Elasto-Cement Coating | 60 | X-Shield FlexPruf elasto-cement coating: flexible waterproofing for concrete, 1 litre per m² per coat. 22 kg kits held in Dar es Salaam. Quote on WhatsApp. | 155 | held | X-Calibur's own wording ("flexible elasto-cement coating"); "waterproofing" did not fit the title with the brand word (gate fix). TDS: 1L per m² per coat |
| /x-calibur/x-seal-ps800 | polysulphide sealant Tanzania | X-Seal PS800 Tanzania - X-Calibur Polysulphide Sealant | 54 | X-Seal PS800 polysulphide sealant in Tanzania: pouring grade to BS 4254, 25% movement in butt joints. 4 litre packs held in Dar es Salaam. Ask for a quote. | 155 | held | Query graded MEDIUM in research 10 (Sika TZ PDFs hold 1-2). TDS: BS 4254, butt joints 25% |
| /x-calibur/x-seal-universal-primer | X-Seal Universal Primer Tanzania | X-Seal Universal Primer Tanzania - X-Calibur Sealant Primer | 59 | X-Seal Universal Primer in Tanzania: sealant primer for X-Seal PS800 and FR200 joints, 15 m² per litre. 1 litre packs held in Dar es Salaam. Ask for a quote. | 157 | held | TDS: 15m² per liter |
| /cmci | CMCI authorized dealer Tanzania | CMCI Authorized Dealer Tanzania - Fireproofing \| Sahihi | 55 | CMCI authorized dealer in Tanzania: Sahihi supplies cementitious fireproofing for petrochemical plant, steel and tunnels from Dar es Salaam. Ask for a quote. | 157 | order | "Sahihi supplies"; CMCI not worded as maker |
| /cmci/fire-rated-cement | fire rated cement Tanzania | Fire Rated Cement Tanzania - CMCI Fireproofing \| Sahihi | 55 | Fire rated cement in Tanzania: steel fireproofing, not refractory cement, up to 4 hours on the data sheets. Supplied by Sahihi, Dar es Salaam. Ask for a quote. | 159 | order | "not refractory cement" per GOVERNANCE; "up to 4 hours" is printed on the Z-106, Z-146, Z-156T and MK-6s sheets |
| /cmci/avikote-av-800 | petrochemical fireproofing Tanzania | Avikote AV 800 Tanzania - CMCI Petrochemical Fireproofing | 57 | Avikote AV 800 petrochemical fireproofing in Tanzania: UL 1709 and ASTM E 119 tested, 800 kg/m³ dry density. To order from Dar es Salaam. Ask for a quote. | 154 | order | TDS: UL 1709, ASTM E 119 (UL 263), dry density 800 kg/m³ |
| /cmci/avikote-av-650 | refinery fireproofing | Avikote AV 650 Tanzania - CMCI Refinery Fireproofing | 52 | Avikote AV 650 refinery fireproofing: tested to UL 1709, ASTM E 119 and BS 476 Part 20, 640 kg/m³ dry density. To order from Sahihi. Ask for a quote. | 149 | order | TDS: UL 1709, ASTM E 119, BS 476 (Part 20), 640 kg/m³ |
| /cmci/monokote-z-156 | tunnel fireproofing Tanzania | Monokote Z-156T Tanzania - CMCI Tunnel Fireproofing \| Sahihi | 60 | Monokote Z-156T tunnel fireproofing in Tanzania: up to 4 hours to the RWS curve and UL 1709, 800 kg/m³ minimum. Supplied from Dar es Salaam. Ask for a quote. | 157 | order | TDS: RWS fire curve, UL 1709 hydrocarbon test, min 50 pcf (800 kg/m³) |
| /cmci/monokote-z-146 | high density fireproofing | Monokote Z-146 Tanzania - CMCI High Density Fireproofing | 56 | Monokote Z-146 high density fireproofing: 640 kg/m³ minimum, up to 4 hours, for parking garages and exterior exposure. Ordered in by Sahihi. Ask for a quote. | 157 | order | TDS: min 640 kg/m³, "up to 4 hours of fire resistance" |
| /cmci/monokote-z-106-hy | Monokote Z-106/HY Tanzania | Monokote Z-106/HY Tanzania - CMCI Quick Set Fireproofing | 56 | Monokote Z-106/HY in Tanzania: quick set medium density fireproofing, 352 kg/m³ minimum, for garages and pool areas. To order from Sahihi. Ask for a quote. | 155 | order | typeWords "quick set fireproofing" (TDS advantage "Quick Set"): "medium density fireproofing" overran the title. TDS: 22 pcf (352 kg/m³) |
| /cmci/monokote-z-106 | Monokote Z-106 Tanzania | Monokote Z-106 Tanzania - CMCI Medium Density Fireproofing | 58 | Monokote Z-106 in Tanzania: medium density fireproofing for steel and decking, up to 4 hours, 352 kg/m³, UL Design X854. To order from Sahihi. Ask for a quote. | 159 | order | TDS: up to 4 hours, 352 kg/m³; X854 lists it (fire-thickness.ts) |
| /cmci/monokote-mk-6-hy | Monokote MK-6/HY | Monokote MK-6/HY Tanzania - CMCI Sprayed Fireproofing | 53 | Monokote MK-6/HY: single component sprayed fireproofing for steel columns, beams and decking, 240 kg/m³, UL Design X854. To order from Sahihi. Ask for a quote. | 159 | order | Query is the bare product name (brief). TDS: single component, 240 kg/m³ minimum average; X854 lists it |
| /cmci/monokote-mk-6s | Monokote MK-6s Tanzania | Monokote MK-6s Tanzania - CMCI Sprayed Fireproofing \| Sahihi | 60 | Monokote MK-6s in Tanzania: factory mixed sprayed fireproofing, up to 4 hours, 305 kg/m³, 2.6 m² per bag at 25 mm. Ordered in by Sahihi. Quote on WhatsApp. | 155 | order | TDS: up to 4 hours, 305 kg/m³, 2.6m² at 25mm. Gypsum based, so "cement" is not used |
| /cmci/aquakote | fireproofing topcoat | Aquakote Tanzania - CMCI Fireproofing Topcoat \| Sahihi | 54 | Aquakote fireproofing topcoat: water based acrylic over Monokote and Avikote, 400% elongation, bridges cracks to 2 mm. To order from Sahihi. Ask for a quote. | 157 | order | Was cut mid-sentence. TDS: elongation 400%, live crack movement up to 2mm, water based acrylic |
| /cmci/monokote-accelerator | Monokote Accelerator Tanzania | Monokote Accelerator Tanzania - CMCI Set Accelerator | 52 | Monokote Accelerator in Tanzania: aluminium sulphate granules to speed the set of Monokote MK-6/HY. 27.2 kg bags to order from Sahihi. Ask for a quote. | 151 | order | typeWords "set accelerator": "fireproofing accelerator" overran the title; the product is not itself fireproofing. TDS: aluminium sulphate, 27.2 kg/bag |
| /cmci/fr-bonding-agent | fireproofing bonding agent | FR Bonding Agent Tanzania - CMCI Fireproofing Bonding Agent | 59 | FR Bonding Agent, fireproofing bonding agent: styrene acrylic emulsion under fireproofing or a sealer over it. To order from Sahihi. Ask for a quote. | 149 | order | Facts from the catalogue summary (cmci.ts) and TDS uses |
| /oriental-yuhong | OYH East Africa | OYH East Africa - Oriental Yuhong Tanzania \| Sahihi | 51 | OYH products in East Africa from Sahihi, Oriental Yuhong's authorized distributor in Dar es Salaam: HDPE membrane, coatings, sports floors. Ask for a quote. | 156 | held | No office or stock outside Tanzania claimed |
| /oriental-yuhong/hdpe-waterproofing | HDPE waterproofing Tanzania | HDPE Waterproofing Tanzania - OYH PMH-3080 Plus \| Sahihi | 56 | HDPE waterproofing in Tanzania: OYH PMH-3080 Plus pre-applied membrane, 1.2 or 1.5 mm, under slabs and tunnels. Rolls held in Dar es Salaam. Ask for a quote. | 157 | held | TDS: thickness 1.2, 1.5 mm; foundation slabs, tunnels, subways |
| /oriental-yuhong/yhcoat-1000 | cementitious waterproofing slurry | YHCoat-1000 Tanzania - OYH Cementitious Waterproofing Slurry | 60 | YHCoat-1000 cementitious waterproofing slurry: two component, 2 kg/m² in two coats in wet areas, BS EN 14891. 26 kg sets held in Dar es Salaam. Ask for a quote. | 160 | held | Was "stocked by Sahihi in Dar es Salaam" twice. TDS: 2kg/m² by 2 coats in wet area, BS EN 14891 A7; pack from the owner's list |
| /oriental-yuhong/pmh-3080-plus | pre-applied HDPE membrane | PMH-3080 Plus Tanzania - OYH Pre-Applied HDPE Membrane | 54 | PMH-3080 Plus pre-applied HDPE membrane: 1.2 or 1.5 mm film with adhesive layer, 71 m head to ASTM D5385. Rolls held in Dar es Salaam. Ask for a quote. | 151 | held | TDS: hydrostatic head 71 m (ASTM D5385), pressure sensitive adhesive |
| /oriental-yuhong/yhcolorwall-5300 | liquid waterproofing membrane | YHColorWall-5300 - OYH Liquid Waterproofing Membrane | 52 | YHColorWall-5300 liquid waterproofing membrane for exterior walls and roofs: UV stable, 2 to 3 kg/m². 20 kg pails held in Dar es Salaam. Ask for a quote. | 153 | held | geo: false so the full TDS type fits the title (gate fix); the description carries the geo. TDS: "liquid waterproofing membrane", UV stable, wall 2kg/m², roof 3kg/m² |
| /oriental-yuhong/yhcoat-2060 | wet room waterproofing coating | YHCoat-2060 Tanzania - OYH Wet Room Waterproofing Coating | 57 | YHCoat-2060 wet room waterproofing coating: keyed finish for direct tiling, 2 kg/m² at 1 mm dry film. 15 kg pails held in Dar es Salaam. Ask for a quote. | 153 | held | TDS: keyed finish, ≈2.0kg/m² at 1mm dry film; 15 kg pail is the owner's list (TDS lists 25 kg, logged) |
| /oriental-yuhong/yhpuseal-2925 | polyurethane joint sealant Tanzania | YHPUseal-2925 Tanzania - OYH Polyurethane Joint Sealant | 55 | YHPUseal-2925 polyurethane joint sealant in Tanzania: moisture curing, 25% movement to ASTM C719. 600 ml held in Dar es Salaam. Ask for a quote. | 144 | held | TDS: ASTM C719 ±25% (written "25% movement" to avoid the ± glyph) |
| /oriental-yuhong/yhrepair-2516 | hydraulic repair mortar | YHRepair-2516 Tanzania - OYH Hydraulic Repair Mortar | 52 | YHRepair-2516 hydraulic repair mortar: quick setting, stops running water, fire class A1. 4 kg bags held in Dar es Salaam. Ask for a quote. | 139 | held | Gate fix: "leak" is not printed on the page; the TDS says "hydraulic repair mortar" and "instantly stops running water", EN 13501-1 A1 |
| /oriental-yuhong/sports-flooring | sports flooring Tanzania | Sports Flooring Tanzania - Tracks, Courts, Turf \| OYH | 53 | Sports flooring in Tanzania from Sahihi and Oriental Yuhong: running tracks, silicon PU and acrylic courts, turf and EPDM, in 3D. Ask for a quote. | 146 | enquire | Research 09 row 59 EASY |
| /oriental-yuhong/sports-flooring/all-plastic-track | running track Tanzania | Polyurethane Running Track Tanzania - All Plastic \| OYH | 55 | Oriental Yuhong polyurethane running track in Tanzania: PSV-201 elastic layer and PSV-301 surface, layers in 3D, build film and manual pages. Quote from Sahihi. | 160 | enquire | 5.1a lists "running track Tanzania, polyurethane running track"; the broader one owns the page, the title carries both |
| /oriental-yuhong/sports-flooring/breathable-track | breathable running track | Breathable Running Track Tanzania - Permeable EPDM \| OYH | 56 | Oriental Yuhong breathable running track: EPDM layers that let heavy rain drain through, rated for fitness trails and kindergartens. In 3D. Quote from Sahihi. | 158 | enquire | Facts from SYSTEM_PAGES FAQ (OYH selection table) |
| /oriental-yuhong/sports-flooring/hybrid-track | hybrid running track Tanzania | Hybrid Running Track Tanzania - PU and EPDM \| OYH | 49 | Oriental Yuhong hybrid running track in Tanzania: polyurethane with EPDM particles in the PSV-201 middle layer. Layers in 3D and build film. Quote from Sahihi. | 159 | enquire | Facts from SYSTEM_PAGES FAQ |
| /oriental-yuhong/sports-flooring/silicon-pu-court | silicon PU court Tanzania | Silicon PU Court Tanzania - Basketball, Tennis \| OYH | 52 | Oriental Yuhong silicon PU court in Tanzania for basketball, tennis and badminton: 5 mm and 8 mm build-ups in 3D, calculator in kg and packs. Ask for a quote. | 158 | enquire | OYH lists 5 mm and 8 mm build-ups |
| /oriental-yuhong/sports-flooring/acrylic-court | acrylic tennis court Tanzania | Acrylic Tennis Court Tanzania - Hard and Elastic \| OYH | 54 | Oriental Yuhong acrylic tennis court in Tanzania, hard or 5 mm elastic, on asphalt or concrete: layers in 3D, calculator, drying times. Per job from Sahihi. | 156 | enquire | Ordered per job (Q22) |
| /oriental-yuhong/sports-flooring/artificial-turf | artificial turf Tanzania | Artificial Turf Tanzania - Football Pitch Grass \| OYH | 53 | Oriental Yuhong artificial turf in Tanzania for football pitches: PSV-601 turf at 10,500 stitches per m², shock pad and infill. Ordered per job by Sahihi. | 154 | enquire | Research 09 row 69 "artificial grass Tanzania" EASY; PSV-601 10,500 stitches per m² from the manual |
| /oriental-yuhong/sports-flooring/epdm-walking-track | EPDM flooring Tanzania | EPDM Flooring Tanzania - Rubber Granule Surface \| OYH | 53 | Oriental Yuhong EPDM flooring in Tanzania for walkways, play areas and fitness trails: 8 mm granules under 5 mm topcoat, calculator. Ordered per job by Sahihi. | 159 | enquire | 13 mm build: 8 mm elastic layer, 5 mm topcoat |
| /vasa | vasa authorized dealer Tanzania | Vasa Authorized Dealer Tanzania - SPC and LVT \| Sahihi | 54 | Sahihi is an authorized Vasa dealer in Tanzania: SPC flooring, LVT flooring and wall panels from the Oriental Yuhong group, 71 decors. Enquire on WhatsApp. | 155 | enquire | 71 decors = `vasaDecors.length` |
| /vasa/spc-flooring | SPC flooring Tanzania | SPC Flooring Tanzania - Vasa 5 mm and 8 mm \| Sahihi | 51 | SPC flooring in Tanzania from Sahihi, an authorized Vasa dealer: rigid core click planks in 5 mm and 8 mm, wear layers 0.2 to 0.55 mm. Enquire on WhatsApp. | 155 | enquire | Vasa SPC data page: wear layers 0.2, 0.3, 0.55 mm |
| /vasa/lvt-flooring | LVT flooring Tanzania | LVT Flooring Tanzania - Vasa Luxury Vinyl Tile \| Sahihi | 55 | LVT flooring in Tanzania from Sahihi, an authorized Vasa dealer: 2 mm luxury vinyl tile in carpet, stone and wood looks, Bfl-s1 fire class. Enquire on WhatsApp. | 160 | enquire | Vasa LVT data page: EN 13501-1 Bfl-s1 |
| /vasa/wall-panels | wall panels Tanzania | Wall Panels Tanzania - Vasa SPC Digital Panels \| Sahihi | 55 | Vasa wall panels in Tanzania from Sahihi: colored film panels in wood, fabric and stone, 1200 x 2800 mm, digital panels at 600 to 1200 dpi. Enquire on WhatsApp. | 160 | enquire | "Colored film" is Vasa's collection name; 1200 x 2800 mm and 600 to 1200 dpi from vasa.ts |

## Rejected queries

| Candidate | Page | Why not |
| --- | --- | --- |
| flexible cementitious waterproofing | /x-calibur/x-shield-flexpruf | Collides with the Mapelastic family, which the Mapei agent owns; X-Calibur's own term "elasto-cement" is unique and matches the title's type words |
| cementitious fireproofing Tanzania | /cmci and every Monokote page | One query may own one page only; the hub keeps "CMCI authorized dealer Tanzania" (5.1a) and the family term is split per product (petrochemical, refinery, tunnel, high density, quick set, sprayed) |
| CMCI Tanzania | /cmci | 5.1a moved the hub to "CMCI authorized dealer Tanzania"; kept as a variant, not the owner |
| Monokote Tanzania, Avikote Tanzania | /cmci | Brand family variants from 5.1; no page can own them without starving the product pages |
| polyurethane running track | /oriental-yuhong/sports-flooring/all-plastic-track | Second 5.1a term for the same page; "running track Tanzania" is broader and the title already says "Polyurethane Running Track" |
| basketball court flooring | /oriental-yuhong/sports-flooring/silicon-pu-court | 5.1a variant; "silicon PU court Tanzania" is the system's own name and the title carries "Basketball, Tennis" |
| HDPE membrane Tanzania | /oriental-yuhong/hdpe-waterproofing | 5.1a variant of "HDPE waterproofing Tanzania"; the product page owns "pre-applied HDPE membrane" instead |
| waterplug | /oriental-yuhong/yhrepair-2516 | The catalogue type, a trade word with no local search evidence |
| quick setting repair mortar leak | /oriental-yuhong/yhrepair-2516 | Site-wide gate: "leak" is not printed on the page; "hydraulic repair mortar" is the TDS description |
| elasto-cement waterproofing coating | /x-calibur/x-shield-flexpruf | Site-wide gate: "waterproofing" cannot fit the title with the brand word (66 chars); "elasto-cement coating" is the TDS wording |
| liquid waterproofing membrane exterior wall | /oriental-yuhong/yhcolorwall-5300 | Site-wide gate: "membrane exterior" not in the title; the title now carries the full TDS type with geo off |
| Oriental Yuhong Tanzania | /oriental-yuhong | Kept in the title as the second clause; the owner moved the page's primary to "OYH East Africa" (2026-11-09) |
| vinyl flooring Dar es Salaam, PVC flooring Tanzania | /vasa/lvt-flooring | Research 09 rows 76-77; variants for the H2s, not a second owner |
| wet room waterproofing Tanzania | /oriental-yuhong/yhcoat-2060 | Generic "waterproofing Tanzania" belongs to /solutions/waterproofing; the product owns the coating term |

## Open points

- The sports rows are `stock: "enquire"` as briefed, although `SYSTEM_PAGES`
  still marks the three tracks and the silicon PU court `held` (owner,
  2026-11-09). The descriptions for those four say nothing about stock; the
  acrylic, turf and EPDM descriptions say "per job".
- OG cards: `src/config/og-manifest.json` is empty on 2026-11-12, so every
  page falls back to `ogBase.images` (the seven sports pages to their system
  picture) until `scripts/build-og-cards.mjs` writes cards.
- Two X-Calibur pages share the type words "epoxy primer" (GP and GP2); their
  queries and titles differ.
- Site-wide gate fixes (same day): four rows changed so every query token is
  in the title and the page body: x-tech-epoxyfloor-sl1 (titleOverride),
  x-shield-flexpruf (query "elasto-cement coating"), yhcolorwall-5300 (query
  "liquid waterproofing membrane", geo off), yhrepair-2516 (query "hydraulic
  repair mortar"). See the rejected queries table.
