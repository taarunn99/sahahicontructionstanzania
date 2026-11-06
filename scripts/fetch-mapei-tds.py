#!/usr/bin/env python3
"""Download Mapei's official Technical Data Sheets for the stocked products.

    python3 scripts/fetch-mapei-tds.py

Source of the URLs: docs/research/11-mapei-catalogue-a.md (the URL lines)
and docs/research/12-mapei-catalogue-b.md (its numbered source list). Every
file comes from Mapei's own CDN (cdnmedia.mapei.com) and is saved UNALTERED
to public/tds/mapei/<slug>.pdf. Mapei's legal notice allows its data sheets
to be reproduced but not altered.

Writes:
  public/tds/mapei/<slug>.pdf       the download offered on the item page
  assets/source/tds-text/<slug>.txt pdftotext output, used to verify every
                                    figure quoted on the site (gitignored)
  src/config/mapei-tds.json         manifest: edition, source URL, size, pages

Edition matters: Mapei publishes regional editions (UAE "ME" grades,
international, Australia) that can differ in pack sizes and data. The
edition code printed on each sheet is recorded and shown beside the
download. Re-run when Mapei revises a sheet; the manifest diff shows it.
"""
import json
import re
import subprocess
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
A = (ROOT / "docs/research/11-mapei-catalogue-a.md").read_text()
B = (ROOT / "docs/research/12-mapei-catalogue-b.md").read_text()
PREFIX = {
    "DOC-AE": "https://cdnmedia.mapei.com/docs/librariesprovider59/products-documents/",
    "DOC-IT": "https://cdnmedia.mapei.com/docs/librariesprovider2/products-documents/",
}

# ---- lines 1-26: section number in report 11 -> catalogue slug --------------
A_SLUGS = {
    "1": "mapeset", "2": "kerabond-t", "3": "adesilex-p7", "5": "keraflex-maxi-s1",
    "6": "keracolor-ff", "7": "kerapoxy", "8": "ultracare-hd-cleaner",
    "9": "ultracare-multicleaner", "10": "ultracare-stain-protector-w-plus",
    "11": "primer-g", "12": "triblock-p", "13": "lignobond",
    "14": "ultraplan-eco-20", "15": "ultraplan-contract", "16": "adesilex-pg2-tg",
    "17": "epojet-lv", "18": "eporip", "19": "mapegrout-me05",
    "20": "mapegrout-t60", "21-22": "planicrete-sp", "23": "mapefer-1k",
    "24": "mapefix-ep-50", "26": "mapefibre-ns-12",
}
# ---- lines 27-49: catalogue slug -> source id in report 12 ------------------
B_SOURCES = {
    "mapefloor-fc-200-me": "S1", "mapefloor-i-300-sl-me": "S2",
    "mapefloor-cpu-plus-mf": "S3", "mapefloor-finish-450-me": "S4",
    "mapefloor-pu-410": "S5", "primer-sn": "S6", "mapecoat-dw-25": "S12",
    "antipluviol": "S13", "mapelastic-foundation": "S16", "idrostop-pvc": "S17",
    "mapeflex-pu-45-ft": "S18", "idrocrete-kr-1000": "S19", "lamposilex": "S24",
    "planiseal-88": "S25", "mapelastic-aquadefense": "S26",
    "mapelastic-easy": "S27", "mapeband-tpe": "S30", "mapeband-easy": "S31",
    "mapeproof-swell": "S32", "mapenet-150": "S33", "quartz-sand": "S34",
}

jobs = {}
for section in re.split(r"\n## ", A)[1:]:
    number = section.split(".", 1)[0].strip()
    slug = A_SLUGS.get(number)
    if not slug:
        continue
    # first TDS link in the section, with the edition printed just before it
    m = re.search(r"TDS[^|\n]*?\(([^)]*\d{4}[^)]*(?:\([A-Z]+\))?[^)]*)\)\)?[^`\n]*?(DOC-[A-Z]+)`([^`]+\.pdf[^`]*)`", section)
    if not m:
        print("no TDS link found in report 11 section", number)
        continue
    edition = re.sub(r'^(version|printed)\s*"?', "", m.group(1).strip()).strip('" ')
    if edition.count("(") > edition.count(")"):
        edition += ")"
    jobs[slug] = {"edition": edition, "url": PREFIX[m.group(2)] + m.group(3)}

rows = {}
for line in B.split("\n"):
    cells = [c.strip() for c in line.strip().strip("|").split("|")]
    if len(cells) == 4 and re.fullmatch(r"S\d+", cells[0]):
        rows[cells[0]] = cells
for slug, sid in B_SOURCES.items():
    jobs[slug] = {"edition": rows[sid][2], "url": rows[sid][3]}

manifest = {}
for slug in sorted(jobs):
    job = jobs[slug]
    pdf = ROOT / f"public/tds/mapei/{slug}.pdf"
    result = subprocess.run(
        ["curl", "-sS", "-L", "--max-time", "60", "-A", "Mozilla/5.0 (sahihicc.com data sheet mirror)", "-o", str(pdf), "-w", "%{http_code}", job["url"]],
        capture_output=True, text=True,
    )
    ok = result.stdout.strip() == "200" and pdf.exists() and pdf.read_bytes()[:4] == b"%PDF"
    if not ok:
        print(f"FAILED {slug}: http {result.stdout.strip()} {result.stderr.strip()[:80]}")
        pdf.unlink(missing_ok=True)
        continue
    text = ROOT / f"assets/source/tds-text/{slug}.txt"
    # Reading-order text (columns kept together) for quoting and checking,
    # plus a layout copy for tables.
    subprocess.run(["pdftotext", str(pdf), str(text)], check=True)
    subprocess.run(["pdftotext", "-layout", str(pdf), str(text.with_suffix(".layout.txt"))], check=True)
    info = subprocess.run(["pdfinfo", str(pdf)], capture_output=True, text=True).stdout
    pages = int(re.search(r"Pages:\s+(\d+)", info).group(1))
    manifest[slug] = {
        "file": f"/tds/mapei/{slug}.pdf",
        "edition": job["edition"],
        "sourceUrl": job["url"],
        "bytes": pdf.stat().st_size,
        "pages": pages,
        "fetched": date.today().isoformat(),
    }
    print(f"ok  {slug:36s} {pdf.stat().st_size // 1024:5d} KB  {pages:2d} pp  {job['edition']}")

(ROOT / "src/config/mapei-tds.json").write_text(json.dumps(manifest, indent=2) + "\n")
print(f"\n{len(manifest)} of {len(jobs)} data sheets saved; manifest written")
