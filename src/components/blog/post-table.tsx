import type { PostTable as Table } from "@/lib/blog";

import { Inline } from "./prose";

/**
 * A data table in a post. On a phone it scrolls sideways inside its own
 * box (the page never does), with the first column held in place so the
 * row always says what it is.
 */
export function PostTable({ table }: { table: Table }) {
  return (
    <figure className="mt-8">
      <div className="border-deep/20 overflow-x-auto rounded-lg border">
        <table className="w-full min-w-[34rem] border-collapse text-left text-[0.9375rem]">
          <caption className="sr-only">{table.caption}</caption>
          <thead>
            <tr className="bg-deep text-chalk">
              {table.head.map((cell, index) => (
                <th
                  key={index}
                  scope="col"
                  className={
                    index === 0
                      ? "bg-deep sticky left-0 px-4 py-3 font-semibold"
                      : "px-4 py-3 font-semibold"
                  }
                >
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, r) => (
              <tr key={r} className="border-deep/15 border-t">
                {row.map((cell, c) =>
                  c === 0 ? (
                    <th
                      key={c}
                      scope="row"
                      className="bg-background sticky left-0 px-4 py-3 align-top font-semibold"
                    >
                      <Inline text={cell} />
                    </th>
                  ) : (
                    <td key={c} className="spec-sh px-4 py-3 align-top">
                      <Inline text={cell} />
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <figcaption className="text-muted mt-3 text-sm leading-relaxed">
        {table.caption}
        {table.source && ` Source: ${table.source}.`}
      </figcaption>
    </figure>
  );
}
