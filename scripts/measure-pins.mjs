/**
 * Where OYH drew the numbered pins on the renders of its below-grade manual
 * (assets/source/oyh-hdpe/below-grade-structures.pdf), as percentages of
 * each render's box, for the hotspot maps on
 * /oriental-yuhong/below-grade-waterproofing.
 *
 * Method, so it can be rerun on a new edition:
 * 1. `pdftohtml -xml` gives each page's picture boxes; the render is the
 *    largest box on the page.
 * 2. `pdftoppm -r 150` renders the page; inside the render's box the pins
 *    are the only saturated red: a mask (r > 170, g < 90, b < 90) is split
 *    into connected blobs of pin size.
 * 3. Each blob's numeral is read by tesseract (digits only) from an
 *    upscaled crop; on pages where the numerals are PDF text (`pdftotext
 *    -bbox`) the text is used instead and the blobs only give the centre.
 * 4. Writes src/config/oyh-below-grade-pins.json and a contact sheet of
 *    the crops in the scratchpad for a human check.
 *
 *   node scripts/measure-pins.mjs [out-dir-for-sheets]
 */
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import sharp from "sharp";

const PDF = "assets/source/oyh-hdpe/below-grade-structures.pdf";
const OUT = "src/config/oyh-below-grade-pins.json";
const SHEETS = process.argv[2] ?? mkdtempSync(path.join(tmpdir(), "pins-"));
const DPI = 150;
/** pdftohtml's page space is 1.5 x PDF points. */
const HTML_SCALE = 1.5;
const PT_PER_INCH = 72;

/** Page -> hotspot id. Page 15 is the small leak-repair detail. */
const PAGES = {
  4: "polymer",
  8: "bituminous",
  11: "tunnel",
  14: "maintenance",
  15: "leak-repair",
};

/**
 * Numerals read by eye where tesseract could not (the pins on pages 8, 11
 * and 14 are vector shapes, not text, and the digits are 12 px tall):
 * hotspot id -> blob index (left to right, top to bottom, as the check
 * sheet labels them) -> the number printed on the pin. 0 drops a blob that
 * is not a pin.
 */
const MANUAL = {
  bituminous: {
    0: 16,
    1: 13,
    2: 23,
    3: 15,
    4: 10,
    5: 10,
    6: 22,
    7: 14,
    8: 7,
    9: 7,
    10: 8,
    11: 8,
    12: 9,
    13: 20,
    14: 12,
    15: 10,
    16: 18,
    17: 19,
    18: 21,
    19: 11,
    20: 6,
    21: 6,
    22: 9,
    23: 17,
    24: 3,
    25: 5,
    26: 5,
    27: 8,
    28: 8,
    29: 3,
    30: 2,
    31: 3,
    32: 4,
    33: 1,
  },
  tunnel: { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6 },
  maintenance: {
    0: 1,
    1: 4,
    2: 8,
    3: 9,
    4: 3,
    5: 7,
    6: 6,
    7: 5,
    8: 10,
    9: 11,
    10: 2,
    11: 1,
  },
};

/** Pages whose pins are small squares the blob finder skips: the PDF's
 * numerals inside the render box are the pins. */
const TEXT_ONLY = new Set(["leak-repair"]);

mkdirSync(SHEETS, { recursive: true });
const work = mkdtempSync(path.join(tmpdir(), "pins-work-"));
const result = {};

function renderBox(page) {
  const xml = execFileSync("pdftohtml", [
    "-xml",
    "-f",
    String(page),
    "-l",
    String(page),
    "-q",
    "-stdout",
    PDF,
  ]).toString();
  const boxes = [
    ...xml.matchAll(
      /<image top="(-?\d+)" left="(-?\d+)" width="(\d+)" height="(\d+)"/g,
    ),
  ].map((m) => ({
    top: +m[1],
    left: +m[2],
    width: +m[3],
    height: +m[4],
  }));
  // The render: the largest picture that is not a full-page background.
  const candidates = boxes
    .filter((b) => b.width < 1700)
    .sort((a, b) => b.width * b.height - a.width * a.height);
  const box =
    candidates[0] ??
    boxes.sort((a, b) => b.width * b.height - a.width * a.height)[0];
  const k = DPI / PT_PER_INCH / HTML_SCALE;
  return {
    x: box.left * k,
    y: box.top * k,
    w: box.width * k,
    h: box.height * k,
  };
}

function textNumerals(page, box) {
  const xml = execFileSync("pdftotext", [
    "-bbox",
    "-f",
    String(page),
    "-l",
    String(page),
    PDF,
    "-",
  ]).toString();
  const k = DPI / PT_PER_INCH;
  return [
    ...xml.matchAll(
      /<word xMin="([\d.]+)" yMin="([\d.]+)" xMax="([\d.]+)" yMax="([\d.]+)">(\d{1,2})<\/word>/g,
    ),
  ]
    .map((m) => ({
      n: +m[5],
      cx: ((+m[1] + +m[3]) / 2) * k,
      cy: ((+m[2] + +m[4]) / 2) * k,
      h: (+m[4] - +m[2]) * k,
    }))
    .filter(
      (w) =>
        w.n >= 1 &&
        w.n <= 30 &&
        w.h < 40 &&
        w.cx > box.x &&
        w.cx < box.x + box.w &&
        w.cy > box.y &&
        w.cy < box.y + box.h,
    );
}

async function blobs(pagePng, box) {
  const { data, info } = await sharp(pagePng)
    .extract({
      left: Math.round(box.x),
      top: Math.round(box.y),
      width: Math.round(box.w),
      height: Math.round(box.h),
    })
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const mask = new Uint8Array(width * height);
  for (let i = 0; i < width * height; i++) {
    const r = data[i * channels],
      g = data[i * channels + 1],
      b = data[i * channels + 2];
    if (r > 170 && g < 90 && b < 90 && r - g > 100) mask[i] = 1;
  }
  const seen = new Uint8Array(width * height);
  const found = [];
  const stack = [];
  for (let start = 0; start < width * height; start++) {
    if (!mask[start] || seen[start]) continue;
    let count = 0,
      sx = 0,
      sy = 0,
      minX = width,
      minY = height,
      maxX = 0,
      maxY = 0;
    stack.push(start);
    seen[start] = 1;
    while (stack.length) {
      const i = stack.pop();
      const x = i % width,
        y = (i - x) / width;
      count++;
      sx += x;
      sy += y;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
      for (const [dx, dy] of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ]) {
        const nx = x + dx,
          ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
        const j = ny * width + nx;
        if (mask[j] && !seen[j]) {
          seen[j] = 1;
          stack.push(j);
        }
      }
    }
    const bw = maxX - minX + 1,
      bh = maxY - minY + 1;
    // A pin at 150 dpi is roughly 35 to 75 px tall and taller than wide.
    if (
      bh >= 28 &&
      bh <= 90 &&
      bw >= 20 &&
      bw <= 80 &&
      count > 300 &&
      bh >= bw * 0.9
    )
      found.push({
        cx: sx / count,
        cy: sy / count,
        minX,
        minY,
        maxX,
        maxY,
        count,
      });
  }
  return { found, width, height };
}

async function ocr(pagePng, box, blob, tag) {
  const pad = 6;
  const crop = path.join(work, `${tag}.png`);
  await sharp(pagePng)
    .extract({
      left: Math.max(0, Math.round(box.x + blob.minX - pad)),
      top: Math.max(0, Math.round(box.y + blob.minY - pad)),
      width: Math.round(blob.maxX - blob.minX + 1 + pad * 2),
      height: Math.round(blob.maxY - blob.minY + 1 + pad * 2),
    })
    .resize({ width: 240, kernel: "lanczos3" })
    .negate({ alpha: false })
    .greyscale()
    .threshold(140)
    .negate({ alpha: false })
    .toFile(crop);
  const text = execFileSync(
    "tesseract",
    [crop, "-", "--psm", "7", "-c", "tessedit_char_whitelist=0123456789"],
    { stdio: ["ignore", "pipe", "ignore"] },
  )
    .toString()
    .trim();
  return { text, crop };
}

for (const [pageStr, id] of Object.entries(PAGES)) {
  const page = Number(pageStr);
  const pagePng = path.join(work, `page-${page}.png`);
  execFileSync("pdftoppm", [
    "-r",
    String(DPI),
    "-f",
    String(page),
    "-l",
    String(page),
    "-png",
    "-singlefile",
    PDF,
    pagePng.replace(/\.png$/, ""),
  ]);
  const box = renderBox(page);
  let { found } = TEXT_ONLY.has(id) ? { found: [] } : await blobs(pagePng, box);
  const words = textNumerals(page, box);
  // Blobs in reading order, so the check sheet's indices are stable.
  found = found.sort(
    (a, b) => Math.round(a.cy / 40) - Math.round(b.cy / 40) || a.cx - b.cx,
  );
  const pins = [];
  const crops = [];
  for (const [index, blob] of found.entries()) {
    // Prefer the PDF's own numeral if one sits inside the blob, then the
    // hand-read table, then tesseract.
    const inside = words.find(
      (w) =>
        Math.abs(w.cx - (box.x + blob.cx)) < 18 &&
        Math.abs(w.cy - (box.y + blob.cy)) < 22,
    );
    const manual = MANUAL[id]?.[index];
    const read = inside
      ? { text: String(inside.n), crop: null, via: "text" }
      : manual !== undefined
        ? { text: String(manual), crop: null, via: "manual" }
        : { ...(await ocr(pagePng, box, blob, `${id}-${index}`)), via: "ocr" };
    if (read.crop) crops.push(read.crop);
    pins.push({
      index,
      n: Number(read.text) || 0,
      x: Number(((blob.cx / box.w) * 100).toFixed(2)),
      y: Number(((blob.cy / box.h) * 100).toFixed(2)),
      via: read.via,
    });
  }
  // No blobs of pin size (the leak-repair detail uses small squares): the
  // PDF's numerals inside the box are the pins.
  if (pins.length === 0) {
    for (const [index, w] of words.entries()) {
      pins.push({
        index,
        n: w.n,
        x: Number((((w.cx - box.x) / box.w) * 100).toFixed(2)),
        y: Number((((w.cy - box.y) / box.h) * 100).toFixed(2)),
        via: "text",
      });
    }
  }
  const kept = pins.filter((p) => p.n > 0).map(({ n, x, y }) => ({ n, x, y }));
  result[id] = { page, pins: kept };
  // Contact sheet of the OCR crops, numbered by index, for a human check.
  if (crops.length) {
    const tiles = await Promise.all(
      crops.map((c) =>
        sharp(c)
          .resize(120, 120, { fit: "contain", background: "#fff" })
          .png()
          .toBuffer(),
      ),
    );
    const cols = 8,
      rows = Math.ceil(tiles.length / cols);
    await sharp({
      create: {
        width: cols * 120,
        height: rows * 120,
        channels: 3,
        background: "#fff",
      },
    })
      .composite(
        tiles.map((input, i) => ({
          input,
          left: (i % cols) * 120,
          top: Math.floor(i / cols) * 120,
        })),
      )
      .png()
      .toFile(path.join(SHEETS, `${id}-crops.png`));
  }
  // The render with the detected pins drawn, for the same check.
  const W = Math.round(box.w),
    H = Math.round(box.h);
  const marks = pins
    .map(
      (p) =>
        `<circle cx="${(p.x / 100) * W}" cy="${(p.y / 100) * H}" r="14" fill="none" stroke="#00e5ff" stroke-width="3"/><text x="${(p.x / 100) * W + 16}" y="${(p.y / 100) * H - 10}" font-size="26" font-weight="bold" fill="#00e5ff" stroke="#000" stroke-width="0.8" font-family="sans-serif">${p.index}${p.n ? `=${p.n}` : ""}</text>`,
    )
    .join("");
  const overlay = await sharp(
    Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${marks}</svg>`,
    ),
  )
    .resize(W, H, { fit: "fill" })
    .png()
    .toBuffer();
  await sharp(pagePng)
    .extract({
      left: Math.round(box.x),
      top: Math.round(box.y),
      width: W,
      height: H,
    })
    .composite([{ input: overlay, left: 0, top: 0 }])
    .png()
    .toFile(path.join(SHEETS, `${id}-check.png`));
  console.log(
    `${id}: page ${page}, ${found.length} pins (${pins.filter((p) => p.via === "text").length} from text, ${pins.filter((p) => p.n === 0).length} unread)`,
  );
}

writeFileSync(OUT, JSON.stringify(result, null, 2) + "\n");
rmSync(work, { recursive: true, force: true });
console.log(`written ${OUT}; check sheets in ${SHEETS}`);
