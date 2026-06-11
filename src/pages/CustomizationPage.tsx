import { ArrowRight, CheckCircle2, Download } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SectionHeader } from "../components/SectionHeader";
import { customizationServices, materials, processSteps, productFamilies } from "../data/catalogue";

const customWorkflow = [
  { title: "Brief and reference", text: "We start from the buyer's market, dimensions, finish expectations, and artwork references." },
  { title: "Design development", text: "Mockups, artwork placement, engraving options, and packaging direction are prepared." },
  { title: "Sampling and approval", text: "Prototype review can include images, videos, and packaging checks before production." },
  { title: "Production and finish", text: "The chosen custom design moves into production with quality checks at every stage." },
  { title: "Packaging and dispatch", text: "Final packing, approval photos, and export logistics close the order cycle." },
];

const customizationExtras = [
  "Logo branding on product and packaging",
  "Custom names, dates, and memorial messages",
  "Portraits, paw prints, floral art, and religious motifs",
  "Custom resin accents and decorative inlays",
  "Market-specific sizes and finish options",
  "Private-label presentation and insert cards",
];

export function CustomizationPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="section-pad bg-surface-container-low">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="eyebrow">Customization</p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-tight text-primary md:text-6xl">
              Personalised memorial work, built around your market.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-on-surface-variant">
              We help buyers shape memorial products with names, dates, logos, artwork, resin detail, finish options, and private-label packaging.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded bg-primary px-6 text-sm font-bold text-on-primary" to="/contact">
                Start a custom request
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded border border-outline-variant px-6 text-sm font-bold text-primary" href="/assets/catalogue.pdf" download>
                Download catalogue
                <Download size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-outline-variant bg-background shadow-soft">
            <img src="/assets/catalogue-images/page-20-1.png" alt="Custom memorial product visual from the catalogue" className="aspect-[16/11] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="border-y border-outline-variant bg-background">
        <div className="container-shell grid gap-px sm:grid-cols-2 xl:grid-cols-4">
          {["OEM branding", "Private label", "Engraving", "Export ready"].map((item) => (
            <article key={item} className="bg-surface-container-lowest px-6 py-7 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Customization services"
            title="Personalized memorial solutions for wholesale and OEM buyers."
            text="We provide comprehensive customization services for funeral brands, wholesalers, importers, distributors, and e-commerce businesses."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {customizationServices.map((service) => (
              <article key={service.title} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-6 shadow-sm">
                <h2 className="text-xl font-bold text-primary">{service.title}</h2>
                <p className="mt-3 leading-7 text-on-surface-variant">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-container-low">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeader
              eyebrow="How it works"
              title="A clear workflow from first brief to final dispatch."
              text="The custom order process is designed to stay simple for buyers while still leaving enough room for market-specific details."
            />
            <div className="mt-8 grid gap-4">
              {customWorkflow.map((item, index) => (
                <article key={item.title} className="flex gap-4 rounded-lg border border-outline-variant bg-background p-5 shadow-sm">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary-container font-display text-xl font-semibold text-on-primary-container">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                    <p className="mt-2 leading-7 text-on-surface-variant">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-outline-variant bg-background p-6 shadow-soft sm:row-span-2">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">What can be customized</p>
              <div className="mt-5 grid gap-3">
                {customizationExtras.map((item) => (
                  <div key={item} className="flex gap-3 rounded-lg border border-outline-variant bg-surface-container-low px-4 py-3">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-secondary" size={18} aria-hidden="true" />
                    <p className="text-sm font-semibold leading-6 text-primary">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-outline-variant bg-background p-6 shadow-soft">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">Materials</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {materials.slice(0, 8).map((item) => (
                  <span key={item} className="rounded-full border border-outline-variant bg-surface-container-low px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-outline-variant bg-background p-6 shadow-soft">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">Popular families</p>
              <div className="mt-4 grid gap-3">
                {productFamilies.slice(0, 3).map((family) => (
                  <div key={family.title} className="rounded-lg bg-surface-container-low px-4 py-3">
                    <h3 className="text-sm font-bold text-primary">{family.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-on-surface-variant">{family.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Request a quote"
              title="Tell us what you want to personalize."
              text="Share product ideas, target market, sizes, artwork, and packaging preferences, and we'll help shape the right custom program."
            />
            <form
              className="mt-8 rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-soft"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-primary">
                  Name
                  <input className="focus-ring rounded border border-outline-variant px-4 py-3" />
                </label>
                <label className="grid gap-2 text-sm font-bold text-primary">
                  Email
                  <input type="email" className="focus-ring rounded border border-outline-variant px-4 py-3" />
                </label>
              </div>
              <label className="mt-5 grid gap-2 text-sm font-bold text-primary">
                Custom request
                <textarea rows={6} className="focus-ring rounded border border-outline-variant px-4 py-3" placeholder="Tell us about the urn style, artwork, finish, and packaging you need." />
              </label>
              <button type="submit" className="focus-ring mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded bg-primary px-6 text-sm font-bold text-on-primary">
                Submit enquiry
                <ArrowRight size={18} aria-hidden="true" />
              </button>
              {submitted ? <p className="mt-4 text-sm font-semibold text-secondary">Thanks. Your customization enquiry is ready to be followed up by the team.</p> : null}
            </form>
          </div>
          <div className="rounded-xl border border-outline-variant bg-primary-container p-6 text-on-primary shadow-soft">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-tertiary-fixed">Why buyers customise</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight">A memorial product should feel personal and market-ready.</h2>
            <p className="mt-4 leading-8 text-on-primary/75">
              Buyers come to us for names, dates, logos, artwork, branded packaging, resin details, custom finishes, and production support across repeat wholesale orders.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {processSteps.slice(0, 4).map((step, index) => (
                <article key={step.title} className="rounded-lg bg-on-primary/8 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-on-primary/60">Step {index + 1}</p>
                  <h3 className="mt-2 text-lg font-bold text-on-primary">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-on-primary/75">{step.text}</p>
                </article>
              ))}
            </div>
            <Link className="focus-ring mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded border border-on-primary/35 px-6 text-sm font-bold text-on-primary" to="/export">
              See export support
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
