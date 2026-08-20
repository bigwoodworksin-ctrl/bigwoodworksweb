import { SectionHeader } from "../components/SectionHeader";
import { exportProcess, exportSupport } from "../data/catalogue";

const markets = ["USA", "UK", "Canada", "Germany", "France", "Australia", "Netherlands", "Singapore"];

export function ExportPage() {
  return (
    <section className="section-pad bg-background">
      <div className="container-shell">
        <SectionHeader
          as="h1"
          eyebrow="Global export reach"
          title="Global export markets and wholesale supply support."
          text="Big Wood Works supplies handcrafted memorial products to funeral brands, wholesalers, importers, and e-commerce businesses across international markets."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-xl border border-outline-variant bg-surface-container-low p-5 shadow-soft">
            <img src="/assets/export-logistics.png" alt="Packed memorial products prepared for international logistics" width="1672" height="941" className="aspect-[16/9] w-full rounded-lg object-cover" />
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
                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-on-surface-variant">Export market</p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-14">
          <SectionHeader
            eyebrow="Export process"
            title="How wholesale orders move from enquiry to dispatch."
            text="The export workflow supports product review, design approval, production coordination, inspection, packaging, and delivery communication."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {exportProcess.map((item, index) => (
              <article key={item.title} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-6 shadow-sm">
                <p className="font-display text-4xl font-semibold text-on-primary-container">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-xl font-bold text-primary">{item.title}</h3>
                <p className="mt-3 leading-7 text-on-surface-variant">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {exportSupport.map((item) => (
            <article key={item.title} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-6 shadow-sm">
              <h2 className="text-xl font-bold text-primary">{item.title}</h2>
              <p className="mt-3 leading-7 text-on-surface-variant">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
