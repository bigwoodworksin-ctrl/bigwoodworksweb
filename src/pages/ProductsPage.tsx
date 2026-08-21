import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { SectionHeader } from "../components/SectionHeader";
import { collections } from "../data/catalogue";

const categoryNavigation = [
  { label: "Lichtenberg Resin", image: "/assets/category-navigation/classical-urn.png", target: "collection-0" },
  { label: "Nature Tribute", image: "/assets/category-navigation/tree-memorial-box.png", target: "collection-1" },
  { label: "UV Printed Urns", image: "/assets/category-navigation/botanical-engraved-urn.png", target: "collection-2" },
  { label: "Botanical Tribute", image: "/assets/category-navigation/heritage-engraved-urn.png", target: "collection-3" },
  { label: "Tree of Life", image: "/assets/category-navigation/tree-of-life-urn.png", target: "collection-4" },
  { label: "Resin Art", image: "/assets/category-navigation/resin-art-urn.png", target: "collection-5" },
  { label: "Engraved Legacy", image: "/assets/category-navigation/pet-keepsake.png", target: "collection-6" },
  { label: "Classical Urns", image: "/assets/category-navigation/cylinder-pet-urn.png", target: "collection-7" },
  { label: "Pet Tribute", image: "/assets/category-navigation/sculptural-memorial.png", target: "collection-9" },
  { label: "Best Sellers", image: "/assets/category-navigation/heart-keepsake.png", target: "collection-10" },
];

function CategoryNavigation({ activeTarget }: { activeTarget: string }) {
  return (
    <>
      <nav aria-label="Product categories" className="sticky top-[88px] z-40 border-y border-outline-variant bg-background/95 py-3 shadow-sm backdrop-blur 2xl:hidden">
        <div className="flex snap-x gap-2 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categoryNavigation.map((category) => {
            const active = activeTarget === category.target;
            return (
              <a
                key={category.target}
                href={`#${category.target}`}
                aria-current={active ? "location" : undefined}
                className={`focus-ring flex min-w-[88px] snap-start flex-col items-center gap-1 rounded-xl border px-2 py-2 text-center transition ${active ? "border-tertiary-fixed-dim bg-primary-container text-tertiary-fixed" : "border-outline-variant bg-surface-container-lowest text-primary"}`}
              >
                <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-lg bg-primary-container">
                  <img src={category.image} alt="" width="1122" height="1402" className="h-11 w-11 object-contain mix-blend-screen" />
                </span>
                <span className="text-[10px] font-bold leading-tight">{category.label}</span>
              </a>
            );
          })}
        </div>
      </nav>

      <nav aria-label="Product categories" className="fixed left-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-1 rounded-[22px] border border-tertiary-fixed/20 bg-primary-container p-2 shadow-[0_18px_42px_rgba(39,19,16,0.24)] 2xl:flex">
        {categoryNavigation.map((category) => {
          const active = activeTarget === category.target;
          return (
            <a
              key={category.target}
              href={`#${category.target}`}
              aria-label={category.label}
              aria-current={active ? "location" : undefined}
              className={`focus-ring group relative grid h-12 w-12 place-items-center rounded-xl transition ${active ? "bg-primary ring-2 ring-tertiary-fixed shadow-[0_0_0_3px_rgba(255,222,165,0.14)]" : "hover:bg-background/10"}`}
            >
              <img src={category.image} alt="" width="1122" height="1402" className={`relative z-10 object-contain mix-blend-screen drop-shadow-[0_4px_5px_rgba(0,0,0,0.35)] transition-transform ${active ? "h-11 w-11 scale-110" : "h-10 w-10 group-hover:scale-105"}`} />
              <span className="pointer-events-none absolute left-[calc(100%+12px)] whitespace-nowrap rounded-lg bg-primary px-3 py-2 text-xs font-bold text-on-primary opacity-0 shadow-soft transition group-hover:opacity-100 group-focus-visible:opacity-100">
                {category.label}
              </span>
            </a>
          );
        })}
      </nav>
    </>
  );
}

export function ProductsPage() {
  const [activeTarget, setActiveTarget] = useState(categoryNavigation[0].target);

  useEffect(() => {
    const sections = categoryNavigation
      .map((category) => document.getElementById(category.target))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveTarget(visible.target.id);
      },
      { rootMargin: "-25% 0px -60%", threshold: [0.05, 0.25, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="overflow-hidden bg-background py-14 md:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="max-w-2xl">
            <SectionHeader
              as="h1"
              eyebrow="Collection overview"
              title="Wooden Memorial Urns Crafted for Wholesale, OEM & Private Label."
              text="Review product families for funeral brands, importers, distributors, and private-label buyers. Specifications, finish choices, branding options, and sample guidance can be discussed collection by collection."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {["Wholesale-ready collections", "Private-label support", "Specifications on request"].map((item, index) => (
                <span key={item} className={`rounded-full border px-5 py-2.5 text-sm font-semibold ${index === 0 ? "border-tertiary-fixed-dim bg-tertiary-fixed text-on-tertiary-fixed" : "border-outline-variant bg-background text-primary"}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative isolate overflow-hidden rounded-[28px] border border-outline-variant bg-surface-container shadow-soft">
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-primary/10 via-transparent to-tertiary-fixed/10" />
            <img
              src="/assets/products-hero.png"
              alt="Big Wood Works wooden memorial urn collection including engraved, pet, classical and resin designs"
              width="1672"
              height="941"
              fetchPriority="high"
              className="aspect-[4/3] w-full object-cover object-[70%_center]"
            />
          </div>
        </div>
      </section>

      <CategoryNavigation activeTarget={activeTarget} />

      {collections.map((collection, index) => (
        <section id={`collection-${index}`} key={collection.title} className={`${index % 2 === 0 ? "section-pad bg-surface-container-low" : "section-pad bg-background"} scroll-mt-36`}>
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
