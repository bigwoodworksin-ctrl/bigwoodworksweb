import { ArrowRight, CheckCircle2, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { SectionHeader } from "../components/SectionHeader";
import { buyerBenefits, buyerTypes, collections, productFamilies, processSteps, stats, whyChooseUs } from "../data/catalogue";

const faqItems = [
  {
    question: "Do you supply wholesale wooden cremation urns for funeral brands and distributors?",
    answer:
      "Yes. Big Wood Works positions its manufacturing and export support around funeral brands, wholesalers, importers, distributors, and e-commerce buyers.",
  },
  {
    question: "Can you support OEM and private-label urn programs?",
    answer:
      "Yes. The website content already highlights OEM, ODM, branding, packaging, engraving, and private-label support for buyer-specific memorial collections.",
  },
  {
    question: "What customisation options are available?",
    answer:
      "Current project content confirms support for custom engraving, UV printing, resin detailing, wood species selection, finish direction, branding, and packaging support.",
  },
  {
    question: "Do you support export orders?",
    answer:
      "Yes. Export-ready packaging, documentation support, buyer approval support, and global delivery coordination are already part of the site’s export positioning.",
  },
];

export function HomePage() {
  const featured = collections.flatMap((collection) => collection.products).slice(0, 6);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="relative overflow-hidden bg-primary-container text-on-primary">
        <div className="absolute inset-0 opacity-25">
          <img src="/assets/home-hero-urns.png" alt="" width="1672" height="941" fetchPriority="high" className="h-full w-full object-cover object-center" />
        </div>
        <div className="container-shell relative grid min-h-[calc(100svh-5rem)] gap-10 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-tertiary-fixed">Made in India • Custom Branding • Global Export Support</p>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] md:text-7xl">
              Handcrafted Wooden Cremation Urns for Wholesale & Private Label
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-on-primary/78">
              OEM and ODM manufacturing for funeral brands, wholesalers, importers and e-commerce businesses. Custom engraving, flexible order quantities, export-ready packaging and bulk production support.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded bg-tertiary-fixed px-6 text-sm font-bold text-on-tertiary-fixed" to="/contact">
                Request Wholesale Quote
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded border border-on-primary/35 px-6 text-sm font-bold text-on-primary" href="/assets/catalogue.pdf" download>
                Download catalogue
                <Download size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-on-primary/15 bg-on-primary/8 p-6 backdrop-blur">
                <p className="font-display text-5xl font-bold">{stat.value}</p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-on-primary/68">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Who we supply"
            title="Built for memorial buyers, not one-off retail orders."
            text="The product range, customisation workflow, and export support are designed for B2B buyers who need consistency, communication, and repeat-ready supply."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {buyerTypes.map((type) => (
              <article key={type} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-5 text-center shadow-sm">
                <h3 className="text-lg font-bold leading-7 text-primary">{type}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-container-low">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Company overview"
            title="Trusted Cremation Urn Manufacturer & OEM Partner"
            text="Backed by 30+ years of manufacturing excellence, we serve funeral brands, importers, wholesalers, distributors, and e-commerce businesses across international markets through reliable OEM & ODM manufacturing solutions."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-outline-variant bg-surface-container-lowest p-5 shadow-sm">
                <CheckCircle2 className="mt-1 shrink-0 text-secondary" size={20} aria-hidden="true" />
                <p className="font-semibold leading-7 text-primary">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Curation of excellence"
            title="From heritage urns to custom printed memorial collections."
            text="Explore diverse product families, from traditional natural wood designs to resin, engraving, UV printing, pet tributes, keepsakes, and OEM-ready collections."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {productFamilies.map((family) => (
              <article key={family.title} className="rounded-lg border border-outline-variant bg-background p-6 shadow-sm">
                <h3 className="text-xl font-bold text-primary">{family.title}</h3>
                <p className="mt-3 leading-7 text-on-surface-variant">{family.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-container-low">
        <div className="container-shell">
          <SectionHeader
            eyebrow="OEM, ODM & private label"
            title="Wholesale programs shaped around your market."
            text="We support branding, engraving, artwork adaptation, packaging, and repeat production planning for private-label memorial collections."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "Private-label presentation",
                text: "Branding, labels, inserts, and packaging support help memorial products arrive market-ready.",
              },
              {
                title: "Product development support",
                text: "Collections can be adapted around wood species, engraving, UV printing, resin detail, and finish direction.",
              },
              {
                title: "Repeat-order consistency",
                text: "Production, inspection, and export support are structured for wholesale continuity rather than one-time supply.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-lg border border-outline-variant bg-background p-6 shadow-sm">
                <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                <p className="mt-3 leading-7 text-on-surface-variant">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Timber to lasting legacy"
            title="A careful process from material selection to dispatch."
            text="Every piece is handled with respect, from wood selection and seasoning through crafting, customisation, quality inspection, packaging, and global delivery."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-6">
                <p className="font-display text-4xl font-bold text-on-primary-container">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-5 text-xl font-bold text-primary">{step.title}</h3>
                <p className="mt-3 leading-7 text-on-surface-variant">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-container-low">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Why global buyers choose us"
            title="Manufacturing control from concept to global delivery."
            text="By managing the full lifecycle of products, we maintain control over quality, craftsmanship, customisation, and supply."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {buyerBenefits.map((benefit) => (
              <article key={benefit.title} className="rounded-lg border border-outline-variant bg-background p-6">
                <h3 className="text-xl font-bold text-primary">{benefit.title}</h3>
                <p className="mt-3 leading-7 text-on-surface-variant">{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Key pages"
            title="Explore product, manufacturing, OEM, and export information."
            text="These sections support commercial buyers who want to review product direction, manufacturing capabilities, private-label options, and export readiness before making an enquiry."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Wooden urn collections",
                text: "Review wholesale-ready memorial products, materials, and category direction.",
                to: "/products",
              },
              {
                title: "Manufacturing capabilities",
                text: "See how production, engraving, finishing, and quality control are presented.",
                to: "/manufacturing",
              },
              {
                title: "OEM & private label",
                text: "Explore branding, packaging, and buyer-specific development support.",
                to: "/oem",
              },
              {
                title: "Export support",
                text: "Understand markets served, documentation support, and wholesale dispatch flow.",
                to: "/export",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-6 shadow-sm">
                <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                <p className="mt-3 leading-7 text-on-surface-variant">{item.text}</p>
                <Link className="focus-ring mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary" to={item.to}>
                  Explore page
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-shell">
          <SectionHeader eyebrow="Featured products" title="Catalogue-selected urn collections." center />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded bg-primary px-6 text-sm font-bold text-on-primary" to="/products">
              View Products
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-container-low">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Frequently asked questions"
            title="Common B2B questions before a wholesale enquiry."
            text="These answers reflect the verified capabilities and services currently described across the Big Wood Works website."
          />
          <div className="mt-10 grid gap-4">
            {faqItems.map((item) => (
              <article key={item.question} className="rounded-lg border border-outline-variant bg-background p-6 shadow-sm">
                <h3 className="text-xl font-bold text-primary">{item.question}</h3>
                <p className="mt-3 leading-7 text-on-surface-variant">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-container-low">
        <div className="container-shell">
          <div className="rounded-xl border border-outline-variant bg-primary-container p-8 text-on-primary shadow-soft md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-tertiary-fixed">Catalogue & wholesale support</p>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-tight">Ready to review products or discuss a private-label program?</h2>
                <p className="mt-4 max-w-3xl leading-8 text-on-primary/78">
                  Start with the catalogue or send a wholesale enquiry for product direction, branding, engraving, packaging, and export support.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded bg-tertiary-fixed px-6 text-sm font-bold text-on-tertiary-fixed" to="/contact">
                  Request Wholesale Quote
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <a className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded border border-on-primary/35 px-6 text-sm font-bold text-on-primary" href="/assets/catalogue.pdf" download>
                  Download Catalogue
                  <Download size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
