import { ProductCard } from "../components/ProductCard";
import { SectionHeader } from "../components/SectionHeader";
import { collections } from "../data/catalogue";

export function ProductsPage() {
  return (
    <>
      <section className="section-pad bg-background">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Collection overview"
            title="Premium urn collections for wholesale and OEM buyers."
            text="Review product families for funeral brands, importers, distributors, and private-label buyers. Specifications, finish choices, branding options, and sample guidance can be discussed collection by collection."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["Wholesale-ready collections", "Private-label support", "Specifications on request"].map((item) => (
              <div key={item} className="rounded-lg border border-outline-variant bg-surface-container-low p-5 text-lg font-bold text-primary">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {collections.map((collection, index) => (
        <section key={collection.title} className={index % 2 === 0 ? "section-pad bg-surface-container-low" : "section-pad bg-background"}>
          <div className="container-shell">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
              <div>
                <p className="eyebrow">{collection.subtitle}</p>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-primary">{collection.title}</h2>
                <p className="mt-5 leading-8 text-on-surface-variant">{collection.description}</p>
                <div className="mt-6 rounded-lg border border-outline-variant bg-surface-container-lowest p-5">
                  <p className="text-sm font-semibold leading-7 text-on-surface-variant">
                    Wood species, finishing direction, engraving support, custom branding, packaging method, MOQ guidance, and production timelines are available on request for this collection.
                  </p>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {collection.products.map((product) => (
                  <ProductCard key={product.name} product={product} />
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
