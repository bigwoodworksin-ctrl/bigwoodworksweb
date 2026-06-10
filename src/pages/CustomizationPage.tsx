import { SectionHeader } from "../components/SectionHeader";
import { customizationServices } from "../data/catalogue";

export function CustomizationPage() {
  return (
    <section className="section-pad bg-background">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader
            eyebrow="Customization services"
            title="Personalized memorial solutions for global buyers."
            text="We provide comprehensive customization services for funeral brands, wholesalers, importers, distributors, and e-commerce businesses."
          />
          <img src="/assets/catalogue-images/page-20-1.png" alt="" className="mt-8 h-64 w-full rounded-lg object-cover shadow-soft" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {customizationServices.map((service) => (
            <article key={service.title} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-6">
              <h2 className="text-xl font-bold text-primary">{service.title}</h2>
              <p className="mt-3 leading-7 text-on-surface-variant">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
