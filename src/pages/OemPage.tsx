import { SectionHeader } from "../components/SectionHeader";
import { customizationServices, whyChooseUs } from "../data/catalogue";

export function OemPage() {
  return (
    <section className="section-pad bg-background">
      <div className="container-shell">
        <SectionHeader
          eyebrow="OEM & ODM"
          title="Reliable manufacturing solutions for memorial brands."
          text="We support custom design development, private-label packaging, branding, quality control, and export-ready logistics for funeral brands, importers, wholesalers, distributors, and e-commerce businesses."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {customizationServices.slice(0, 3).map((service) => (
            <article key={service.title} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-6 shadow-sm">
              <h2 className="text-xl font-bold text-primary">{service.title}</h2>
              <p className="mt-3 leading-7 text-on-surface-variant">{service.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 rounded-xl bg-surface-container-low p-6 md:p-8">
          <h2 className="font-display text-3xl font-semibold text-primary">OEM / ODM partnership advantages</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item} className="rounded border border-outline-variant bg-background px-4 py-3 font-semibold text-primary">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
