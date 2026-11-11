import {
  FIRE_REFERENCES_SOURCE,
  fireReferenceCountries,
  fireReferences,
} from "@/config/fire-references";

/**
 * Track record for consultants: airports, towers, hotels and plant where the
 * same fireproofing types went on the steel. Server component. Says plainly
 * that these are the maker's references, not Sahihi jobs.
 */
export function FireReferences({ className }: { className?: string }) {
  const kinds = [...new Set(fireReferences.map((item) => item.kind))];
  return (
    <section
      aria-labelledby="fire-references"
      className={className ?? "bg-deep on-dark text-chalk py-14 sm:py-20"}
    >
      <div className="container-sh">
        <p className="label-sh opacity-80">Track record</p>
        <h2
          id="fire-references"
          className="font-display text-phi-3 mt-4 max-w-4xl tracking-tight text-balance"
        >
          On the steel of airports, towers and hotels across{" "}
          {fireReferenceCountries.length} countries.
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed opacity-90">
          The same Monokote types are on the maker&apos;s reference list in{" "}
          {fireReferenceCountries.join(", ")}. A few of them, as printed:
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {kinds.map((kind) => (
            <div key={kind}>
              <p className="label-sh text-surface">{kind}</p>
              <ul className="mt-3 space-y-3">
                {fireReferences
                  .filter((item) => item.kind === kind)
                  .map((item) => (
                    <li
                      key={item.project}
                      className="border-chalk/25 border-b pb-3"
                    >
                      <p className="font-display text-lg leading-tight">
                        {item.project}
                      </p>
                      <p className="mt-1 text-sm opacity-80">
                        {item.country} · Type {item.type}
                      </p>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-sm leading-relaxed opacity-75">
          Source: {FIRE_REFERENCES_SOURCE}. These are the maker&apos;s
          references, not Sahihi projects. Ask us for the full list.
        </p>
      </div>
    </section>
  );
}
