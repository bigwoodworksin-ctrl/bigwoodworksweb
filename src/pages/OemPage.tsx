import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeader } from "../components/SectionHeader";
import { customizationServices, whyChooseUs } from "../data/catalogue";

export function OemPage() {
  return (
    <section className="section-pad bg-background">
      <div className="container-shell">
        <SectionHeader
          as="h1"
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
        <div className="mt-12 rounded-xl bg-primary-container px-6 py-8 text-on-primary md:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-tertiary-fixed">Next step</p>
              <h2 className="mt-3 font-display text-3xl font-semibold">Discuss your private-label or OEM requirement.</h2>
              <p className="mt-4 max-w-2xl leading-7 text-on-primary/75">
                Share the product direction, quantities, branding requirements, and market needs with us so we can guide the right manufacturing path.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded bg-tertiary-fixed px-6 text-sm font-bold text-on-tertiary-fixed" to="/contact">
                Request Wholesale Quote
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded border border-on-primary/30 px-6 text-sm font-bold text-on-primary" href="/contact">
                Download Catalogue
                <Download size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
