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
            text="Discover beautifully crafted urns designed to honor cherished memories with elegance and dignity, from artistic resin finishes to natural wooden designs."
          />
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
