import { SectionHeader } from "../components/SectionHeader";

const markets = ["USA", "UK", "Canada", "Germany", "France", "Australia", "Netherlands", "Singapore"];

export function ExportPage() {
  return (
    <section className="section-pad bg-background">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Global export reach"
          title="Trusted across global markets."
          text="Big Wood Works supplies handcrafted memorial products to funeral brands, wholesalers, importers, and e-commerce businesses across international markets."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-xl border border-outline-variant bg-surface-container-low p-5 shadow-soft">
            <img src="/assets/export-logistics.png" alt="Worldwide logistics support" className="aspect-[16/9] w-full rounded-lg object-cover" />
            <div className="mt-5 flex flex-wrap gap-3">
              {["Worldwide logistics support", "Export-ready packaging", "End-to-end buyer support"].map((item) => (
                <span key={item} className="rounded border border-outline-variant bg-background px-3 py-2 text-xs font-bold uppercase tracking-wide text-primary">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {markets.map((market) => (
              <article key={market} className="rounded-lg border border-outline-variant bg-surface-container p-6">
                <h2 className="font-display text-3xl font-semibold text-primary">{market}</h2>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-on-surface-variant">Key export market</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
