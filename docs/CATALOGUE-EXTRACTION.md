# CATALOGUE-EXTRACTION.md - what Sahihi stocks, and where the sources disagree

Written 2026-11-05. The two inputs behind `src/config/catalogue.ts`.

**Sources** (owner-supplied, kept in `assets/source/owner-supplied/`,
gitignored):

| Ref | Document | Printed title | Lines |
|---|---|---|---|
| M | `mapei-pricelist-2026-09-01.pdf` | "SELLING PRICE (SP) TSH INCL VAT", dated 01.09.2026, file name "Mlinzi Pricelist" | 49 numbered + 1 unnumbered |
| X | `xcalibur-retail-pricelist-2026.pdf` | "RETAIL PRICE LIST 2026 TZ" | 6 |
| P | `projects-2025-2026.xlsx` | "Mlinzi Projects 2025-2026" | 16 projects |

**Prices are deliberately absent from this file and from the repo.** The
site never shows a price (owner ruling, 2026-11-05). The price columns
exist only in the gitignored PDFs.

Verification: `docs/research/11-mapei-catalogue-a.md`,
`12-mapei-catalogue-b.md` and `06-xcalibur-cmci.md`. Mapei's own data
sheets were read for 47 of the 49 Mapei lines (mapei.com blocks automated
fetching, so product *pages* were not read; a person should open each one
once before launch).

## 1. How to read this file

- **As printed** is the price list wording, verbatim, typos included. It
  is never rendered on the site.
- **Published name** is the manufacturer's spelling, used on the site.
- Technical values on the site come from the manufacturer's data sheet.
  Where the price list said something else, the data sheet value is
  published and the row appears in the discrepancy register (sections 3
  to 5). There are **70 Mapei rows** and 6 X-Calibur rows.
- A blank cell means the value is not published, because no source was
  certain. Blank is correct. Do not fill it by inference.

## 2. The catalogue as published (53 products, 6 lines)


### Tile Adhesives, Grouts & Care  
`mapei` / `tile-adhesives-grouts` - printed heading: "Ceramic Line" - 9 products

| Ref | As printed | Published name | Type | Class | Consumption | Pack | Colour |
|---|---|---|---|---|---|---|---|
| M1 | Mapeset - Grey | **Mapeset** | Tile adhesive | C1 | 2.5-3 kg/m² with a No. 5 trowel | 25 kg | Grey |
| M2 | Kerabond T - Grey | **Kerabond T** | Tile adhesive | C1T | 2-5 kg/m² | 25 kg | Grey |
| M3-M4 | Adesilex P7 Grey / Adesilex P7 White | **Adesilex P7** | Tile adhesive | C2T | 2.5-3 kg/m² with a No. 5 trowel | 25 kg | Grey, White |
| M5 | Keraflex Maxi S1 Grey | **Keraflex Maxi S1** | Tile adhesive | C2TES1 | 1.2 kg/m² per mm of thickness | 20 kg, 25 kg | Grey |
| M6 | Keracolor FF 5 kg GREY | **Keracolor FF** | Cement grout | CG2WA |  | 5 kg | Grey |
| M7 | Kerapoxy grey/WHITE | **Kerapoxy** | Epoxy grout | RG · R2T |  | 5 kg | Grey, White |
| M8 | Ultracare HD cleaner | **UltraCare HD Cleaner** | Tile cleaner |  | About 200 m² per litre, diluted 1:20 | 1 litre |  |
| M9 | Ultracare Multi cleaner | **UltraCare Multicleaner** | Tile cleaner |  | About 1500 m² per litre, diluted 1:200 | 5 litres |  |
| M10 | Ultracare Stain Protector W plus | **UltraCare Stain Protector W Plus** | Stain protector |  | About 30 m² per litre, one coat | 1 litre |  |

### Primers, Levelling & Wood Flooring  
`mapei` / `primers-levelling` - printed heading: "Resilient Line" - 5 products

| Ref | As printed | Published name | Type | Class | Consumption | Pack | Colour |
|---|---|---|---|---|---|---|---|
| M11 | Primer G - Adhesion promoter | **Primer G** | Primer |  | 0.08-0.15 kg/m² | 25 kg |  |
| M12 | Primer Triblock P - Waterproofing primer | **Triblock P** | Primer |  | 250-500 g/m² per coat, two coats | 5 kg |  |
| M13 | Lignobond | **Lignobond** | Wood floor adhesive |  | 800-1000 g/m² | 10 kg |  |
| M14 | Ultraplan Eco 20 Bags 20/23 Kg | **Ultraplan Eco 20** | Self-levelling compound |  | 1.6 kg/m² per mm of thickness | 23 kg |  |
| M15 | Ultraplan Contract 25kg bag | **Ultraplan Contract** | Self-levelling compound |  | 1.7 kg/m² per mm of thickness | 25 kg |  |

### Concrete Repair, Grouts & Anchoring  
`mapei` / `concrete-repair` - printed heading: "Building Line" - 10 products

| Ref | As printed | Published name | Type | Class | Consumption | Pack | Colour |
|---|---|---|---|---|---|---|---|
| M16 | Adesilex PG2 TG 6 kg set | **Adesilex PG2 TG** | Epoxy adhesive |  | 1.71 kg/m² per mm of thickness | 6 kg set |  |
| M17 | Epojet LV 2.5kg set | **Epojet LV** | Crack injection |  | 1.1 kg per litre of cavity | 2.5 kg set |  |
| M18 | Eporip buckets 2 kg SET | **Eporip** | Epoxy adhesive |  | 0.5-0.7 kg/m² on rough substrates, 1-2 kg/m² on very uneven ones | 2 kg set |  |
| M19 | Mapegrout ME05 Bag 25 KG | **Mapegrout ME05** | Microconcrete |  |  | 25 kg |  |
| M20 | Mapegrout T60 Bags 25 Kg | **Mapegrout T60** | Repair mortar |  |  | 25 kg |  |
| M21-M22 | Planicrete SP buckets 5 kg / 25 kg | **Planicrete SP** | Latex additive |  | 0.3 kg/m² as a slurry bond coat | 5 kg, 25 kg |  |
| M23 | Mapefer 1k 5kg | **Mapefer 1K** | Rebar protection |  |  | 5 kg |  |
| M24 | Mapefix EP 50 585 ml | **Mapefix EP 50** | Chemical anchor |  |  | 585 ml cartridge |  |
| M25 | Mapei Gun 585 2K pc | **Mapei Gun 585 2K** | Application tool |  |  | 1 piece |  |
| M26 | Mapefiber NS12- 30x 0.6 KG | **Mapefibre NS 12** | Fibre |  |  | 0.6 kg |  |

### Resin Flooring & Coatings  
`mapei` / `resin-flooring` - printed heading: "Flooring Line" - 9 products

| Ref | As printed | Published name | Type | Class | Consumption | Pack | Colour |
|---|---|---|---|---|---|---|---|
| M27 | Mapefloor FC 200 ME L Grey Part A 22 kg / Mapefloor FC 200 ME /B Buckets 3.5 Kg | **Mapefloor FC 200 ME** | Epoxy floor coating |  | 0.32 kg/m² per coat | Part A 22 kg, Part B 3.5 kg | Light grey |
| M28 | Mapefloor 1 300-SL ME /A L Grey 17 Kg / B 5 Kg / Mapefloor I 300 SL ME / C 25KG | **Mapefloor I 300 SL ME** | Self-levelling epoxy floor |  | 3.7 kg/m² at 2 mm | Part A 17 kg, Part B 5 kg, Part C 25 kg | Light grey |
| M29 | Mapefloor CPU+/MF /A 2 kg x 2packs / B 2.16 kg x 2packs / C Bag 20 kg / Mapefloor CPU+ color grey 0.23kg | **Mapefloor CPU+/MF** | Polyurethane-cement floor |  | 5.5 kg/m² at 3 mm | Part A 2 kg x 2, Part B 2.16 kg x 2, Part C 20 kg, Mapecolor CPU+ 0.23 kg | Grey |
| M30 | Mapefloor Finish. 415 ME/A D Grey 10KG / Mapefloor Finish 415 ME /B 2.5KG | **Mapefloor Finish 415 ME** | Polyurethane floor finish |  |  | Part A 10 kg, Part B 2.5 kg | Dark grey |
| M31 | Mapefloor Finish. 450 ME/A D Grey 18,9KG / Mapefloor Finish 450 ME /B 3,6KG | **Mapefloor Finish 450 ME** | Polyurethane floor finish |  | 0.3 kg/m² per coat | Part A 18.9 kg, Part B 3.6 kg | Dark grey |
| M32 | Mapefloor PU 410 /A fustini 16 kg / Mapefloor PU 410 /B fustini 3,9 kg | **Mapefloor PU 410** | Polyurethane binder |  | 1 kg/m² per coat | Part A 16 kg, Part B 3.9 kg |  |
| M33 | Primer SN /A Drum 16 Kg / Primer SN /B Drum 4 Kg | **Primer SN** | Epoxy primer |  | 0.3-0.7 kg/m² per coat | Part A 16 kg, Part B 4 kg |  |
| M34 | Quarzo 0.5/1.2 Bags 25 Kg | **Quarzo 0.5/1.2** | Quartz sand |  |  | 25 kg |  |
| M35-M36 | Mapecoat DW 25 -12KG - A / Mapecoat DW 25 -3KG- B | **Mapecoat DW 25** | Drinking water coating |  | 400-600 g/m² in two coats | Part A 12 kg, Part B 3 kg |  |

### Waterproofing  
`mapei` / `waterproofing` - printed heading: "Waterproofing" - 14 products

| Ref | As printed | Published name | Type | Class | Consumption | Pack | Colour |
|---|---|---|---|---|---|---|---|
| M37 | Lamposilex buckets 5 kg | **Lamposilex** | Water plug |  |  | 5 kg |  |
| M38 | Antipluviol 25kg | **Antipluviol** | Water repellent |  | 0.2-1 litre/m² | 25 kg |  |
| M39 | Planiseal 88 Grey Bags 25 kg | **Planiseal 88** | Cementitious coating |  |  | 25 kg | Grey |
| M39b | Mapelastic Aquadefense | **Mapelastic AquaDefense** | Liquid membrane |  |  | 15 kg |  |
| M40 | Mapelastic Easy Part A 18kg / part B buckets 6kg | **Mapelastic Easy** | Cementitious membrane |  |  | Part A 18 kg, Part B 6 kg |  |
| M41 | Mapelastic Smart Part A 20KG / B fustini 10 kg | **Mapelastic Smart** | Cementitious membrane |  | About 1.6 kg/m² per mm by roller or trowel | Part A 20 kg, Part B 10 kg |  |
| M42 | Mapelastic Foundation Part A 22KG / B fustini 10 kg | **Mapelastic Foundation** | Cementitious membrane |  | About 1.65 kg/m² per mm by roller | Part A 22 kg, Part B 10 kg |  |
| M43 | Idrostop PVC BIC ME 20cm 15MT | **Idrostop PVC BI BE ME** | Waterstop |  |  | 15 m roll |  |
| M44 | Mapeband TPE H170 rolls 30 mt | **Mapeband TPE** | Joint tape |  |  | 170 mm x 30 m roll |  |
| M45 | Mapeband Easy H130 rolls 30 mt | **Mapeband Easy** | Joint tape |  |  | 130 mm x 30 m roll |  |
| M46 | Mapenet 150 Roll 50 x 1 Mt | **Mapenet 150** | Reinforcing mesh |  |  | 1 m x 50 m roll |  |
| M47 | Mapeflex PU 45 Grey 600 ml | **Mapeflex PU 45 FT** | Sealant |  |  | 600 ml | Grey |
| M48 | Mapeproof Swell 320 ml | **Mapeproof Swell** | Hydrophilic sealant |  |  | 320 ml cartridge |  |
| M49 | Idrocrete KR1000 | **Idrocrete KR 1000** | Concrete admixture |  | 1-3 kg per 100 kg of cementitious materials | 20 kg |  |

### X-Calibur Range  
`x-calibur` / `x-calibur` - printed heading: "Retail Price List 2026 TZ" - 6 products

| Ref | As printed | Published name | Type | Class | Consumption | Pack | Colour |
|---|---|---|---|---|---|---|---|
| X1 | XTECH BOND 20L | **X-Tech Bond** | Bonding agent |  | 10 m² per litre | 20 kg |  |
| X2 | X TECH SL1 17L 7035 | **X-Tech EpoxyFloor SL1** | Self-levelling epoxy floor |  | 1 litre per m² | 17 litres | RAL 7035 |
| X3 | X PRIME GP 18L | **X-Prime GP** | Epoxy primer |  |  | 18 litres |  |
| X4 | X SHIELD FLEXPRUF 22KGS | **X-Shield FlexPruf** | Waterproof coating |  | 3.4 kg/m² in two coats | 22 kg |  |
| X5 | X SEAL PG 4L | **X-Seal PG** | Joint sealant |  | 2.7 m per litre for a 25 x 15 mm joint | 4 litres |  |
| X6 | X SEAL PRIMER 1L | **X-Seal Primer** | Sealant primer |  |  | 1 litre |  |

### On the project list but not on the price list

Not in the catalogue. They appear as product names in the "Mlinzi
Projects" sheet only.

| As printed (projects sheet) | Note |
|---|---|
| Adesilex P9 | real Mapei product (C2TE). Not on the price list: stocked or not? |
| Mapegrout ME 06 | real Mapei product. The price list's "ME05" line carries ME 06's description: see register |
| Mapegrout TX 60 | not found as a Mapei name. Probably Mapegrout T60 / T60 ME |
| Mapefix PU45 | not a Mapei name. Probably Mapeflex PU 45 FT |
| Keraflexi Maxi S1, Keracolour, Aquadefence, Mapefloor CPU MF | spellings of Keraflex Maxi S1, Keracolor FF, Mapelastic AquaDefense, Mapefloor CPU+/MF |

## 3. Discrepancy register - Mapei ceramic, resilient and building lines

Source: `docs/research/11-mapei-catalogue-a.md`. # = price list line.

| # | Price-list wording | Mapei official | Type | Action |
|---|---|---|---|---|
| 1 | Mapeset 3-5 kg/sqm, size 5 notch | No. 5 trowel 2.5-3 kg/m2; 5 kg/m2 is No. 6 | Consumption | Use Mapei figures |
| 1 | Mapeset for ceramic/porcelain | TDS names ceramic, mosaics, single and double-fired; excludes large format | Use claim | Drop "porcelain" |
| 2 | Kerabond T 3-5 kg/sqm | 2-5 kg/m2 | Consumption | Use Mapei figure |
| 2 | Kerabond T | No TDS on the UAE page; international TDS used | Source gap | Note edition |
| 3 | Adesilex P7 3-5 kg/sqm | 2 / 2.5-3 / 4 kg/m2 by trowel | Consumption | Use Mapei figures |
| 5 | Keraflex Maxi S1 20 kg and 25 kg | UAE 25 kg only; UK 20 kg; international grey 25, white 23 | Pack | Owner to confirm |
| 6 | Keracolor FF mould resistant | Not claimed; water-repellent only | Claim | Remove |
| 6 | Keracolor FF "GREY" | Four named greys (111, 112, 113, 119) | Colour | Owner to specify |
| 6 | - | Page says 20 colours, TDS says 16 | Mapei internal | Do not state a count |
| 7 | Kerapoxy CG2WA | RG (EN 13888), R2T (EN 12004) | Classification | Replace |
| 7 | Kerapoxy "grey" | 111, 112 or 113 | Colour | Owner to specify |
| 8 | Ultracare HD cleaner, 1 kg | UltraCare HD Cleaner, 1 litre | Name, unit | Use Mapei wording |
| 9 | Ultracare Multi cleaner, 5 kg, floors | UltraCare Multicleaner, 5 litre, walls and floors | Name, unit, scope | Use Mapei wording |
| 10 | Stain Protector W plus, 10-20 sqm/lit, unpolished surfaces | 30 m2 per litre; suits polished finishes too | Coverage, use | Check whether stock is W or W Plus |
| 12 | Primer Triblock P, 500 g/sqm | Triblock P; 250-300 or 400-500 g/m2 per coat, two coats | Name, consumption | Use Mapei wording |
| 13 | Lignobond "Epoxy PU", 0.8 kg/sqm | epoxy-polyurethane; 800-1000 g/m2 | Wording, consumption | Use Mapei wording |
| 14 | Ultraplan Eco 20, 20/23 kg | Now listed as Ultraplan EC20 (UAE, Egypt); 23 kg bags | Name, pack | Confirm with Mapei and bag |
| 15 | Ultraplan Contract 32N/mm3 | 30 MPa at 28 days | Strength, unit | Use 30 MPa |
| 17 | Epojet LV 2.5 kg set | UAE TDS 4 kg kit; international 5 kg and 2.5 kg | Pack, edition | Owner to confirm origin |
| 18 | Eporip 1-2 kg/sqm | 0.5-0.7 rough, 1.0-2.0 very uneven | Consumption | Give both |
| 19 | Mapegrout ME05, super flow, 30-250 mm, 12.3 litres | Those are ME 06 data; ME05 is high-flow, 15-220 mm, 12.7 litres | Product identity | Owner to confirm - blocker |
| 20 | Mapegrout T60, 13 litres; "TX 60" | UAE product is Mapegrout T60 ME, 12.6 litres per 25 kg; "TX 60" not found | Name, yield | Owner to confirm from bag |
| 21-22 | Planicrete SP 3 kg/sqm, bonding agent | 0.3 kg/m2 slurry; 1 kg/m2 per 20 mm screed; 0.5-1 kg/m2 adhesive; latex additive | Consumption, wording | Use Mapei figures |
| 23 | Mapefer 1K coating | cementitious mortar; cartons of 4 x 5 kg | Wording | Use Mapei wording |
| 24 | Mapefix EP 50 585 ml | Correct as printed | None | Do not change to "EP 585" |
| 25 | Mapei Gun 585 2K | No official page or TDS found | Not verified | Get name from label |
| 26 | Mapefiber NS12, fibre for screed strength | Mapefibre NS 12; plastic-shrinkage crack control in concrete; no structural advantage | Name, claim | Fix spelling, remove strength claim |

No discrepancy found on lines 4 (Adesilex P7 White), 11 (Primer G) and 16
(Adesilex PG2 TG).

## 4. Discrepancy register - Mapei flooring and waterproofing lines

Source: `docs/research/12-mapei-catalogue-b.md`. S-numbers are that
report's source list.

| # | Item | Field | Price list (as printed) | Mapei official | Source | Suggested handling |
|---|---|---|---|---|---|---|
| 1 | 27 FC 200 ME | Consumption | 0.60 kg/sqm/2 coat | 0.32 kg/m² per coat roll coat (0.64 for two); 0.35-0.40 per coat non-slip | S1 | Publish Mapei figures |
| 2 | 27 FC 200 ME | Description | high build resin coating for floors | High build epoxy resin floor coating | S1 | Use Mapei wording |
| 3 | 27, 28, 30, 31 | Colour | L Grey / D Grey | "RAL colours" only | S1 S2 S4 S8 | Ask owner for RAL numbers stocked |
| 4 | 28 I 300 SL ME | Thickness (Mapei internal) | 2-4 mm | TDS subtitle "1 to 4 mm"; TDS body and UAE brochure "2 to 4 mm" | S2 S7 | Publish 2 to 4 mm; note inconsistency |
| 5 | 28 I 300 SL ME | Consumption (Mapei internal) | 3.7 kg/sqm/2mm | 3.7 kg/m² at 2 mm; elsewhere "at least 2.5-3.5 kg/m2" | S2 | Publish 3.7 at 2 mm with TDS link |
| 6 | 29 CPU+/MF | Colour pack name | Mapefloor CPU+ color grey 0.23 kg | Mapecolor CPU+ (grey), 0.23 kg pack | S3 | Rename |
| 7 | 29 CPU+/MF | Colour pack quantity | one 0.23 kg line | two packs of Mapecolor CPU+ per kit | S3 | State "2 packs per kit"; confirm selling unit |
| 8 | 29 CPU+/MF | Description | self levelling ... PU chemical resistant | self-smoothing polyurethane cement mortar | S3 | Use Mapei wording |
| 9 | 30 Finish 415 ME | Description | none | "Aromatic polyurathane Finish" (UAE page title, sic); ME TDS not retrieved | S23 S8 | Get ME TDS before writing copy |
| 10 | 30 Finish 415 ME | Consumption | 0.3 kg/sqm/coat | 0.3-0.8 kg/m² (UAE page snippet) | S23 | Show range after TDS check |
| 11 | 31 Finish 450 ME | Pot life (Mapei internal) | n/a | "approximately 40 minutes" in text vs "4 hours" in table | S4 | Do not publish pot life |
| 12 | 32 PU 410 | Description | undercoat for PU415 | no product "PU415"; finish is Mapefloor Finish 415 ME (UAE) / Finish 415 or 451 (intl); Mapei term is "polyurethane binder" | S5 S7 S9 | Rewrite with full names |
| 13 | 32 PU 410 | Accessories | not shown | needs Mapecolor Paste and Quartz 0.25 | S5 | List as required accessories |
| 14 | 33 Primer SN | Consumption | 0.30 kg/sqm/coat | 0.3-0.70 kg/m² per coat | S6 | Show range |
| 15 | 34 Quarzo | Name | Quarzo 0.5/1.2 | two separate grades: Quartz 0.5 and Quartz 1.2; UAE range "Quartz 0.5 ME", "Quartz 1.2 ME"; Italian sheet title "Quarzo 0,25 - 0,5 - 0,9 - 1,2 - 1,9" | S34 S35 | One page per grade; confirm bag label |
| 16 | 35-36 DW 25 | Consumption | 0.30 kg/sqm/coat | 400-600 g/m² in two coats; approx. 300 g/m² single coat | S12 | Publish Mapei figures |
| 17 | 35-36 DW 25 | Two lines | items 35 and 36 | 15 kg and 5 kg units exist | S12 | Ask owner what line 36 is |
| 18 | 37 Lamposilex | Description | fast setting water grout | Ultra-fast setting and curing hydraulic binder for stopping water leaks | S24 | Use Mapei wording |
| 19 | 37 Lamposilex | Name | Lamposilex | UAE site lists "Lamposilex ME" | S23 | Confirm label |
| 20 | 38 Antipluviol | Unit | 25 kg | 25 L jerrycan (current TDS); 25 kg (regional pages) | S13 S23 | Follow the drum label |
| 21 | 38 Antipluviol | Consumption | 0.5-1 kg/sqm | 0.2 to 1 L/m² | S13 | Publish Mapei range |
| 22 | 39 Planiseal 88 | Description | waterproofing for bathrooms and walls | Osmotic cementitious mortar suitable for contact with drinking water, for waterproofing masonry and concrete structures; rigid; not for plasterboard or painted walls | S25 S20 S21 | Use Mapei wording |
| 23 | 39 Planiseal 88 | Pack (Mapei regional) | 25 kg | 25 kg bag (9/25 brochure); 20 kg bags (Australia) | S21 S25 | 25 kg supported |
| 24 | 39b AquaDefense | Spelling | Mapelastic Aquadefense | Mapelastic AquaDefense | S26 | Correct capital D |
| 25 | 39b AquaDefense | Description | fast setting flexible for balconies/bathrooms | ultra quick-drying, flexible liquid membrane; "must always be covered with ceramic, mosaic or stone" | S26 | Use Mapei wording, add condition |
| 26 | 40 Mapelastic Easy | Claim | non UV resistant | TDS makes no UV statement; product is specified before laying ceramic tiles | S27 | Do not publish as a Mapei fact |
| 27 | 40 Mapelastic Easy | Working time (Mapei internal) | n/a | "Pot life of mix: approx. 2 hours" vs "within 60 minutes of it being mixed" | S27 | Do not publish pot life |
| 28 | 41 Mapelastic Smart | Consumption | 3.6 kg/sqm/2mm | approx. 1.6 kg/m² per mm roller or trowel (3.2 at 2 mm, derived); approx. 2.2 per mm spray | S20 S29 | Publish Mapei per-mm figures |
| 29 | 41 Mapelastic Smart | Use | for roof | balconies, terraces, bathrooms and swimming pools | S20 S28 | Use Mapei wording |
| 30 | 41 Mapelastic Smart | Crack-bridging wording (Mapei internal) | n/a | brochure and catalogue "> 2 mm"; UK specification "up to 2mm" | S28 S20 S29 | Quote the product TDS once obtained |
| 31 | 42 Mapelastic Foundation | Description | two component flexible for roof & UV stable | for concrete surfaces subject to both positive and negative water pressure (foundation walls, underground car parks, basins, channels, pools); no UV or roof claim | S16 | Replace (copy-paste error confirmed) |
| 32 | 42 Mapelastic Foundation | Consumption | 3.2 kg/sqm/2mm | approx. 1.65 kg/m² per mm by roller (3.3 at 2 mm, derived) | S16 | Publish Mapei per-mm figures |
| 33 | 42 Mapelastic Foundation | Application temp (Mapei internal) | n/a | +5 to +35°C in one table, +5 to +40°C in another | S16 | Link TDS, do not pick |
| 34 | 43 Idrostop PVC | Name | Idrostop PVC BIC ME 20 cm | Idrostop PVC BI BE ME, profile BIC 20 (200 mm) | S17 | Agree page naming |
| 35 | 44 Mapeband TPE | Name | Mapeband TPE H170 | Mapeband TPE 170 (17 cm) | S30 | Rename |
| 36 | 45 Mapeband Easy | Name | Mapeband Easy H130 | Mapeband Easy, 130 mm x 30 m roll | S31 | Rename |
| 37 | 45 Mapeband Easy | Description | easy to apply alternative | Rubber tape sandwiched between two layers of non-woven fabric to form elastic joints in waterproofing systems; different job from Mapeband TPE | S31 S27 | Replace |
| 38 | 46 Mapenet 150 | Description | glass fibre mesh for high stress areas | Alkali-resistant glass fibre mesh for reinforcing protective waterproofing layers, anti-fracture membranes and thermal insulation systems | S33 | Use Mapei wording |
| 39 | 47 Mapeflex PU 45 FT | Name | Mapeflex PU 45 (project list: Mapefix PU45) | Mapeflex PU 45 FT | S18 S8 | Rename; correct project list |
| 40 | 47 Mapeflex PU 45 FT | Colour | Grey | 111 grey and 113 grey both exist | S18 | Ask owner which grey |
| 41 | 49 Idrocrete KR 1000 | Name | Idrocrete KR1000 | Idrocrete KR 1000 | S19 | Add space |
| 42 | 49 Idrocrete KR 1000 | Description | hydrophilic admixture for concrete | Crystallizing admixture for waterproof concrete | S19 | Use Mapei headline |
| 43 | 49 Idrocrete KR 1000 | Dosage | 2% of cement | 1-3 kg per 100 kg of cementitious materials | S19 | Show range |

## 5. X-Calibur verification

Source: `docs/research/06-xcalibur-cmci.md`.

| # | Price-list wording | Official name and spelling | Official one-line description | Type / chemistry | Official pack | Official coverage figure | Standards printed on TDS | Match status and differences | Official listing and TDS |
|---|---|---|---|---|---|---|---|---|---|
| 1 | XTECH BOND 20L - bonding agent SBR - 10 sqm/litre | No official product of this name. Nearest: X-Roc Latex | "Multi purpose bonding agent and performance enhancer for screeds and mortars" | Styrene butadiene rubber latex | "20 and 200 liter drums (International)" | 8 m2 per liter neat; 16 m2 per liter at 1:1 dilution | ASTM C1059 Type II; DCL Green Building Regulations | NOT MATCHED. Name not on official site; UoM on list is KG vs "20L" in name; 10 sqm/L is not an official figure. Owner to confirm label. | https://www.x-calibur.us/products/concrete-repair-and-finishes/bond-cure-and-reinforcement-protection#pro_id_158 ; https://www.x-calibur.us/public/uploads/data_sheets/technical_data_sheets/X-Roc_Latex1.pdf |
| 2 | X TECH SL1 17L 7035 - 1 mm self levelling epoxy - 1 L per sqm | X-Tech EpoxyFloor SL, grade X-Tech EpoxyFloor SL1 | "Abrasion and chemical resistant self-leveling epoxy floor" | Three component self smoothing epoxy topping, 1 to 1.5mm | "17 liter packs" | "17m2 per 17L pack at 1mm" | SCAQMD Rule 1113; LEED NC2009 IEQ 4.2; FDA CFR 21 Section 175.300; DCL; BS 476 Part 7 Class 1 | MATCHED. List omits "EpoxyFloor"; 7035 = RAL 7035 Light grey. EFNARC / FeRFA classes apply to SL2-SL4 only. | https://www.x-calibur.us/products/flooring-systems/resin-systems#pro_id_230 ; https://www.x-calibur.us/public/uploads/data_sheets/technical_data_sheets/X-Tech_EpoxyFloor_SL.pdf |
| 3 | X PRIME GP 18L - solvent based primer for epoxy - 7.5 sqm/L at 150 mc | X-Prime GP | "General Purpose primer for epoxy coating and floor systems" | Two-part epoxy primer, 1:1 by volume, 90% volume solids, VOC <100 g/L | "18, 40 and 400 liter packs" | "5m2 per liter at 200 microns, 10m2 per liter at 100 microns" | SCAQMD Rule 1113; LEED NC2009 IEQ 4.2 | MATCHED. "Solvent based" is not official wording (TDS: "High solids"). 7.5 m2/L at 150 microns is not printed; arithmetic gives 6.67. X-Prime GP2 also exists. | https://www.x-calibur.us/products/coating-systems/primers#pro_id_845 ; https://www.x-calibur.us/public/uploads/data_sheets/technical_data_sheets/X-Prime_GP.pdf |
| 4 | X SHIELD FLEXPRUF 22KGS - acrylic waterproofing coat for wet areas - 3.4 kg/sqm in two coats | X-Shield FlexPruf | "High performance polymer modified elasto-cement waterproof coating" | Two component cementitious coating with elastic co-polymer | "22kg kits" (yield 12.8 liters) | "1L (1.7kg) per m2 per coat", 2 coats normal | SCAQMD Rule 1113; LEED NC2009 IEQ 4.2; BS EN 1062-1:2002 Class C1; ANSI A118.10; BS 6920; DCL | MATCHED. "Acrylic" is not in the TDS; it is elasto-cement. The acrylic product is X-Shield AcrylCoat. | https://www.x-calibur.us/products/coating-systems/general-purpose-waterproof-coatings#pro_id_344 ; https://www.x-calibur.us/public/uploads/data_sheets/technical_data_sheets/X-Shield_FlexPruf.pdf |
| 5 | X SEAL PG 4L - PS pourable sealant for joints - 2.7 m per L for 25x15 joint | X-Seal PS800 (pouring grade) | "High performance polysulphide joint sealant" | Two-part polysulphide, gun and pouring grades | "Pouring grade: 4 liter pack comprising separate base and curing agent" | 25 x 15 joint: 0.37 L per metre, 2.70 metre run per litre | BS 4254; BS 6920; ASTM C920; ASTM D1149; SCAQMD Rule 1168; LEED NC2009 IEQ 4.1; Estidama LBi-2.1; DCL | MATCHED BY INFERENCE (chemistry, pack and coverage all agree). "PG" is not an official name. | https://www.x-calibur.us/products/joints/joint-sealants#pro_id_240 ; https://www.x-calibur.us/public/uploads/data_sheets/technical_data_sheets/X-Seal_PS8001.pdf |
| 6 | X SEAL PRIMER 1L - primer for sealant - 10% of sealant volume | X-Seal PS800 Primer | "High performance primer for X-Seal PS800 Sealant" | Single-pack high penetration primer, VOC <400 g/L | "1 liter packs" | "15m2 per liter"; 1 litre "sufficient for 225lm of 10mm joint" | DCL Green Building Regulations | MATCHED BY INFERENCE. "10% of sealant volume" is not in the TDS. Other X-Seal primers exist; official sheets disagree on re-prime window (3 h vs 24 h). | https://www.x-calibur.us/products/joints/joint-sealants#pro_id_1075 ; https://www.x-calibur.us/public/uploads/data_sheets/technical_data_sheets/X-Seal_PS800_Primer.pdf |

Handling in the catalogue: "X-Tech EpoxyFloor SL1", "X-Prime GP" and
"X-Shield FlexPruf" use the maker's spelling. "X-Tech Bond", "X-Seal PG"
and "X-Seal Primer" keep the price list wording because the official
match is missing or inferred. FlexPruf's chemistry ("acrylic" on the
list, "elasto-cement" from the maker) and the coverage figures the data
sheets do not carry are left out.

## 5b. Decisions taken when the product pages were built (2026-11-05)

- **Mapegrout T60 is published as "Mapegrout T60 ME".** The price list
  says "T60" and describes it as sulphate and chloride resistant. That is
  the wording of Mapei UAE's T60 ME sheet, the stock is the Middle East
  range, and the data sheet offered for download is the T60 ME sheet. The
  URL stays `/mapei/concrete-repair/mapegrout-t60`. Confirm from the bag.
- **Mapegrout ME05 is published as printed**, with the ME05 data sheet
  (12.7 litres per 25 kg). If the bag says ME 06, the page, the data sheet
  and the calculator yield (12.3 litres) all change.
- **Consumption on the pages now comes from the data sheets**, not the
  price list: Mapelastic Easy 1.9 kg/m² per mm; Mapelastic AquaDefense
  1 kg/m² for two coats; Mapefloor Finish 450 ME 0.2-0.5 kg/m²; Planiseal
  88 1.5 kg/m² per mm; Lamposilex 1.8 kg per litre of cavity.
- **Mapelastic Smart has no data sheet on file.** Its calculator uses
  Mapei UK's outline specification (1.6 kg/m² per mm by trowel or roller,
  2.2 by spray), which is a Mapei document but not a data sheet.
- **Planiseal 88 and Lamposilex use Mapei Australia's sheets**; no UAE
  edition was found. Planiseal's sheet lists 20 kg bags; the stock list
  says 25 kg, and the calculator uses 25 kg.
- **Antipluviol's calculator works in litres** (the data sheet's unit,
  25 litre jerrycans). The price list says 25 kg.
- **Mapefloor CPU+/MF's calculator gives kilograms, not kits**: the mixed
  kit weight could not be fixed from the price list.

## 6. What the owner must confirm from the warehouse (blocks item pages)

These are identity questions. Until they are answered the affected item
pages publish the name only.

1. **Mapegrout: ME05 or ME 06?** The list says ME05 but describes ME 06.
   The projects sheet says ME 06.
2. **Mapegrout T60 or T60 ME?** What does the bag say?
3. **Quartz sand:** "Quarzo 0.5/1.2" is not one product. Which grades are
   stocked (0.5, 0.9 ME, 1.2)?
4. **UltraCare Stain Protector: W or W Plus?** The printed use and
   coverage fit neither cleanly.
5. **Keraflex Maxi S1 in 20 kg?** Mapei's UAE range is 25 kg only.
6. **X-Tech Bond:** no such name in X-Calibur's index. What is on the
   pail? (Nearest official product: X-Roc Latex.)
7. **X-Seal PG and X-Seal Primer:** are these X-Seal PS800 pouring grade
   and PS800 Primer?
8. **Price list line 36** (Mapecoat DW 25, second line): what is it?
9. **Greys:** which Mapei grey numbers (111, 112, 113, 119) and which RAL
   numbers sit behind "L Grey" and "D Grey"?
10. **Epojet LV 2.5 kg, Ultraplan Eco 20 / EC20, Antipluviol kg or
    litres, Lamposilex or Lamposilex ME:** read the labels.
11. **Adesilex P9:** stocked, or project-only?

## 7. Notes for website content generation

1. Kerapoxy is RG / R2T. Never print CG2WA for it.
2. No mould-resistance claim for Keracolor FF. Water-repellent only.
3. No porcelain or large-format claim for Mapeset.
4. Mapefibre NS 12 controls plastic-shrinkage cracking in concrete. No
   strength claim, no screed claim.
5. Mapelastic Foundation is for concrete under positive and negative
   water pressure (foundations, basements, tanks). The price list's "for
   roof and UV stable" is a copied line. Never repeat it.
6. Mapefloor Finish 415 ME is aromatic. Only Finish 450 ME is aliphatic
   and UV resistant.
7. "PU415" on the price list means Mapefloor Finish 415 ME.
8. Antipluviol is not for horizontal surfaces, terraces or flat roofs.
9. Drinking water: Mapecoat DW 25 and Planiseal 88 are "suitable for
   contact with drinking water" in Mapei's words. Never "approved", and
   never imply a Tanzanian approval.
10. Cleaner coverage holds only at the stated dilution. Always print the
    dilution with the figure.
11. Grout consumption depends on tile size and joint width. Never a
    single number.
12. The UAE "ME" flooring sheets state no EN 13813 or EN 1504-2 class and
    no CE mark. Do not carry classes over from the international
    namesakes.
13. Mapei's own sheets disagree with themselves on a few values (I 300 SL
    ME thickness, Finish 450 ME pot life, Mapelastic Foundation
    application temperature). Omit the value or quote and link; do not
    pick.
14. Several data-sheet editions exist per product (UAE, international,
    UK, Egypt). Cite the edition that matches the bag in the warehouse.
15. Mapei's legal notice allows quoting a data sheet but not altering it.
    Quote exactly and link.
16. Never generate or draw a product pack. Pack shots come from the
    manufacturer (Q9).

