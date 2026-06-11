import { SectionHeader } from "../components/SectionHeader";

const timeline = [
  {
    year: "Before 2020",
    title: "Family Craftsmanship Heritage",
    icon: "history",
    text: "Family legacy of carpentry, wooden doors, windows, kitchen works, and handcrafted products.",
  },
  {
    year: "2020",
    title: "The Maryam Crafts Established",
    icon: "storefront",
    text: "The Maryam Crafts manufacturing operations established.",
  },
  {
    year: "2023",
    title: "Big Wood Works Division Launch",
    icon: "precision_manufacturing",
    text: "Big Wood Works cremation urn division launched.",
  },
  {
    year: "2024",
    title: "Global Export Expansion",
    icon: "public",
    text: "Export expansion across international markets.",
  },
  {
    year: "2025",
    title: "OEM & Private Label Growth",
    icon: "groups",
    text: "OEM and private-label manufacturing growth.",
  },
  {
    year: "2026",
    title: "Serving Buyers Across 6+ Countries",
    icon: "flag",
    text: "Serving buyers across 6+ countries with 50,000+ urns manufactured since 2023.",
  },
];

const founders = [
  {
    name: "Mujahid Ul Islam",
    role: "Founder",
    image: "/assets/founder-mujahid-ul-islam.png",
  },
  {
    name: "Mohd Zaid",
    role: "Founder",
    image: "/assets/founder-mohd-zaid.png",
  },
];

export function AboutPage() {
  return (
    <>
      <section className="section-pad bg-background">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="eyebrow">Company overview</p>

            <h1 className="mt-4 font-display text-5xl font-semibold leading-tight text-primary md:text-6xl">
              Crafted with Respect. Built for Legacy.
            </h1>

            <p className="mt-6 text-lg leading-8 text-on-surface-variant">
              Big Wood Works is a trusted manufacturer and exporter of
              handcrafted cremation urns, pet urns, keepsake urns, and memorial
              products.
            </p>

            <p className="mt-4 text-lg leading-8 text-on-surface-variant">
              Our in-house capabilities include custom design development,
              engraving, photo personalization, private-label packaging, quality
              control, and export-ready logistics.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl shadow-soft">
            <img
              src="/assets/catalogue-images/page-03-1.png"
              alt="Big Wood Works catalogue craft visual"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-container-low">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Founder's message"
            title="Made to honour every memory."
            text="Every memorial urn carries the memory of a life, the love of a family, and a story that deserves to be honoured with dignity. Every piece is handled with care, respect, and attention from wood selection to final packaging."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {founders.map((founder) => (
              <article
                key={founder.name}
                className="overflow-hidden rounded-xl border border-outline-variant bg-background shadow-soft"
              >
                <div className="aspect-[4/3] overflow-hidden bg-surface-container">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                    {founder.role}
                  </p>

                  <h2 className="mt-2 font-display text-3xl font-semibold text-primary">
                    {founder.name}
                  </h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Our journey"
            title="From traditional craftsmanship to global memorial manufacturing."
            text="A timeline of our family heritage, manufacturing growth, export expansion, and commitment to serving global buyers with handcrafted memorial products."
          />

          <div className="mt-14">
            <div className="relative">
              {/* Center progress line */}
              <div className="absolute left-5 top-0 h-full w-px bg-outline-variant md:left-1/2 md:-translate-x-1/2" />

              <div className="space-y-12">
                {timeline.map((item, index) => {
                  const isLeft = index % 2 === 0;

                  return (
                    <div
                      key={item.year}
                      className="relative grid gap-6 pl-16 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-0 md:pl-0"
                    >
                      {/* Left desktop title */}
                      <div
                        className={`hidden md:block ${
                          isLeft ? "pr-12 text-right" : "order-3 pl-12"
                        }`}
                      >
                        <h4 className="font-display text-3xl font-semibold text-primary">
                          {item.year}
                        </h4>
                        <p className="mt-2 text-on-surface-variant">
                          {item.title}
                        </p>
                      </div>

                      {/* Icon circle */}
                      <div className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-background bg-primary md:static md:order-2">
                        <span
                          className="material-symbols-outlined text-sm text-white"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          {item.icon}
                        </span>
                      </div>

                      {/* Content card */}
                      <div
                        className={`md:order-1 ${
                          isLeft ? "md:order-3 md:pl-12" : "md:pr-12"
                        }`}
                      >
                        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm">
                          <h4 className="font-display text-3xl font-semibold text-primary md:hidden">
                            {item.year}
                          </h4>

                          <p className="mt-1 font-semibold text-secondary md:hidden">
                            {item.title}
                          </p>

                          <p className="mt-4 leading-7 text-on-surface-variant md:mt-0">
                            {item.text}
                          </p>
                        </div>
                      </div>

                      {/* Empty desktop spacing column */}
                      <div
                        className={`hidden md:block ${
                          isLeft ? "order-1" : "order-3"
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
