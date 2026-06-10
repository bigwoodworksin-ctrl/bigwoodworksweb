import { stats } from "../../data/site";

export function StatsBand() {
  return (
    <section className="bg-bark py-10 text-paper">
      <div className="container-shell grid gap-6 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="border-l border-paper/25 pl-5">
            <p className="font-display text-5xl font-bold">{stat.value}</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-paper/65">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
