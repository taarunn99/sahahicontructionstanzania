import Image from "next/image";

import type { VasaDecor } from "@/config/vasa";

/** Decors by code, all in the HTML. Pictures are cut from Vasa's catalogue. */
export function DecorGrid({ decors }: { decors: VasaDecor[] }) {
  return (
    <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
      {decors.map((decor) => (
        <li
          key={decor.code}
          className="border-deep/15 group overflow-hidden rounded-xl border bg-white"
        >
          <span className="block aspect-[4/3] overflow-hidden">
            <Image
              src={decor.src}
              alt={`Vasa ${decor.look.toLowerCase()} decor ${decor.code}`}
              width={decor.width}
              height={decor.height}
              sizes="(min-width: 64rem) 22vw, (min-width: 40rem) 30vw, 46vw"
              className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </span>
          <span className="block p-3">
            <span className="block text-sm font-bold">{decor.code}</span>
            <span className="text-muted mt-0.5 block text-xs leading-snug">
              {decor.look} · {decor.size}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}

/** The manufacturer's document rows. */
export function Downloads({
  items,
}: {
  items: { file: string; label: string; pages: number; note?: string }[];
}) {
  return (
    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.file}>
          <a
            href={item.file}
            target="_blank"
            rel="noopener noreferrer"
            className="border-deep/20 hover:bg-surface text-deep flex min-h-16 flex-col justify-center rounded-xl border bg-white px-5 py-3 transition-colors"
          >
            <span className="font-bold">{item.label}</span>
            <span className="spec-sh mt-1 opacity-75">
              PDF · {item.pages} {item.pages === 1 ? "page" : "pages"}
              {item.note && ` · ${item.note}`}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

/** A technical table, as the data page prints it. */
export function SpecTable({
  rows,
}: {
  rows: { label: string; value: string }[];
}) {
  return (
    <dl className="border-deep mt-8 grid gap-x-16 border-t md:grid-cols-2">
      {rows.map((row, index) => (
        <div
          key={`${row.label}-${index}`}
          className="border-deep/15 grid grid-cols-[1fr_1.1fr] items-baseline gap-4 border-b py-3.5"
        >
          <dt className="text-muted leading-snug">{row.label}</dt>
          <dd className="spec-sh">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
