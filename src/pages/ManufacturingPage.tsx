import { SectionHeader } from "../components/SectionHeader";
import { manufacturingHighlights, qualitySteps } from "../data/catalogue";

export function ManufacturingPage() {
  return (
    <>
      <section className="section-pad bg-primary-container text-on-primary">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-tertiary-fixed">Manufacturing excellence</p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-tight md:text-6xl">Built for Precision & Scale</h1>
            <p className="mt-6 text-lg leading-8 text-on-primary/75">
              Every product is crafted through a carefully managed process that combines skilled craftsmanship, precision engineering, and strict quality control.
            </p>
          </div>
          <img src="/assets/manufacturing-hero.png" alt="Wood processing machinery in the manufacturing facility" className="aspect-[16/10] w-full rounded-xl object-cover shadow-soft" />
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-shell">
          <SectionHeader eyebrow="Production highlights" title="Capacity, craft, engraving, resin, and quality control." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {manufacturingHighlights.map((item) => (
              <article key={item.title} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-6">
                <h2 className="text-lg font-bold text-primary">{item.title}</h2>
                <p className="mt-3 leading-7 text-on-surface-variant">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-container-low">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Quality assurance"
            title="Crafted with Care. Delivered with Confidence."
            text="Strict quality control ensures accurate personalization, premium finishing, and safe delivery. Pre-shipment photos and videos can be provided for approval."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {qualitySteps.map((step) => (
              <div key={step} className="rounded-lg border border-outline-variant bg-background p-5 font-bold text-primary">
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
