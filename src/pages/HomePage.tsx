import { ArrowRight, CheckCircle2, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { SectionHeader } from "../components/SectionHeader";
import { collections, processSteps, stats, whyChooseUs } from "../data/catalogue";

export function HomePage() {
  const featured = collections.flatMap((collection) => collection.products).slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden bg-primary-container text-on-primary">
        <div className="absolute inset-0 opacity-25">
          <img src="/assets/home-hero-urns.png" alt="" className="h-full w-full object-cover object-center" />
        </div>
        <div className="container-shell relative grid min-h-[calc(100svh-5rem)] gap-10 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-tertiary-fixed">Premium cremation urns & memorial products</p>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] md:text-7xl">
              Handcrafted warmth for every memory.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-on-primary/78">
              Big Wood Works is a trusted manufacturer and exporter of handcrafted cremation urns, pet urns, keepsake urns, and memorial products.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded bg-tertiary-fixed px-6 text-sm font-bold text-on-tertiary-fixed" to="/products">
                View collections
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
            eyebrow="Company overview"
            title="Trusted Cremation Urn Manufacturer & OEM Partner"
            text="Backed by 30+ years of manufacturing excellence, we serve funeral brands, importers, wholesalers, distributors, and e-commerce businesses worldwide through reliable OEM & ODM manufacturing solutions."
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

      <section className="section-pad bg-surface-container-low">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Timber to lasting legacy"
            title="A careful process from material selection to dispatch."
            text="Every piece is handled with respect, from wood selection and seasoning through crafting, customization, quality inspection, packaging, and global delivery."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-lg border border-outline-variant bg-background p-6">
                <p className="font-display text-4xl font-bold text-on-primary-container">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-5 text-xl font-bold text-primary">{step.title}</h3>
                <p className="mt-3 leading-7 text-on-surface-variant">{step.text}</p>
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
        </div>
      </section>
    </>
  );
}
