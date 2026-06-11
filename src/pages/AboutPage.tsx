import { ArrowRight, Download, Factory, Flag, Globe2, History, Store, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeader } from "../components/SectionHeader";
import { stats, whyChooseUs } from "../data/catalogue";

const timeline = [
  {
    year: "Before 2020",
    label: "The Foundation of Family Heritage and Artisanal Mastery.",
    text: "Generations of artisanal woodworking knowledge passed down through the family, mastering local techniques and sustainable material selection.",
    icon: History,
  },
  {
    year: "2020",
    label: "The Maryam Crafts Launch.",
    text: "The Maryam Crafts is established as a consumer-facing brand, bringing handcrafted wooden memorials to families seeking solace.",
    icon: Store,
  },
  {
    year: "2023",
    label: "Founding of Big Wood Works.",
    text: "Big Wood Works is officially incorporated to serve the global B2B market, scaling production capabilities while maintaining artisanal roots.",
    icon: Factory,
  },
  {
    year: "2024",
    label: "Global Export Reach.",
    text: "Successful expansion into international markets, securing key distribution partnerships across Europe and North America.",
    icon: Globe2,
  },
  {
    year: "2025",
    label: "Strategic OEM Partnership Growth.",
    text: "Implementing dedicated OEM lines to provide white-labeled solutions for the world's leading funeral service providers.",
    icon: Users,
  },
  {
    year: "2026",
    label: "Presence in 6+ Countries.",
    text: "A milestone year projecting presence in 6+ countries with localized support and enhanced distribution networks.",
    icon: Flag,
  },
];

const storyPoints = [
  {
    title: "Respectful craftsmanship",
    text: "Every urn, keepsake, and memorial product is built with careful material selection and a finish that feels dignified in hand.",
  },
  {
    title: "Buyer-first manufacturing",
    text: "We support private label programs, repeat wholesale orders, and market-specific product development with dependable lead times.",
  },
  {
    title: "Global-ready support",
    text: "Packaging, documentation, approval photos, and export coordination are handled to make international purchasing easier.",
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
      <section className="section-pad bg-surface-container-low">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow">About Big Wood Works</p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-tight text-primary md:text-6xl">
              Crafted to honour memory, scale, and trust.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-on-surface-variant">
              Big Wood Works is a trusted manufacturer and exporter of handcrafted cremation urns, pet urns, keepsake urns, and memorial products for global wholesale and OEM buyers.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded bg-primary px-6 text-sm font-bold text-on-primary" to="/products">
                Browse collections
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded border border-outline-variant px-6 text-sm font-bold text-primary" href="/assets/catalogue.pdf" download>
                Download catalogue
                <Download size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-outline-variant bg-background shadow-soft">
            <img
              src="/assets/catalogue-images/page-03-1.png"
              alt="Big Wood Works office and manufacturing presence"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-outline-variant bg-background">
        <div className="container-shell grid gap-px sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <article key={stat.label} className="bg-surface-container-lowest px-6 py-8 text-center">
              <p className="font-display text-5xl font-semibold text-primary">{stat.value}</p>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-on-surface-variant">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad bg-surface-container-low">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Founder's message"
            title="Made to honour every memory with care and consistency."
            text="Every memorial urn carries the memory of a life, the love of a family, and a story that deserves to be honoured with dignity. From the first wood selection to the final carton, the process is handled with care, respect, and attention."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-xl border border-outline-variant bg-background p-8 shadow-soft">
              <p className="text-lg leading-8 text-on-surface-variant">
                We began with traditional woodworking and a belief that memorial products should feel personal, precise, and beautifully made. That belief still guides us as we serve funeral homes, memorial brands, importers, distributors, and OEM partners around the world.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {storyPoints.map((point) => (
                  <article key={point.title} className="rounded-lg border border-outline-variant bg-surface-container-low p-5">
                    <h3 className="text-lg font-bold text-primary">{point.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-on-surface-variant">{point.text}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {founders.map((founder) => (
                <article key={founder.name} className="overflow-hidden rounded-xl border border-outline-variant bg-background shadow-soft">
                  <div className="bg-surface-container-lowest p-4">
                    <img src={founder.image} alt={founder.name} className="mx-auto max-h-[560px] w-full object-contain" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">{founder.role}</p>
                    <h2 className="mt-2 font-display text-3xl font-semibold text-primary">{founder.name}</h2>
                    <p className="mt-4 leading-7 text-on-surface-variant">
                      A hands-on leader shaping the company&apos;s craftsmanship, product development, buyer relationships, and export growth.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Our story"
            title="Generations of Excellence"
            text="Woodworking is not just our business; it is our lineage. For generations, our family has practiced the art of shaping timber in the heart of Rajasthan."
            center
          />
          <div className="relative mt-14">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-outline-variant md:block" />
            <div className="grid gap-10">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <article key={item.year} className="relative grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-center">
                    <div className={isEven ? "hidden text-right md:block md:pr-10" : "md:order-3 md:pl-10"}>
                      <h3 className="font-display text-3xl font-semibold text-primary">{item.year}</h3>
                      <p className="mt-2 leading-7 text-on-surface-variant">{item.label}</p>
                    </div>
                    <div className="z-10 grid h-11 w-11 place-items-center rounded-full border-4 border-background bg-primary text-on-primary shadow-soft md:order-2">
                      <Icon size={18} aria-hidden="true" />
                    </div>
                    <div className={isEven ? "md:pl-10" : "md:order-1 md:pr-10"}>
                      <div className="rounded-lg border border-outline-variant bg-surface-container-low p-6 shadow-sm">
                        <h3 className="font-display text-2xl font-semibold text-primary md:hidden">{item.year}</h3>
                        <p className="mt-3 leading-7 text-on-surface-variant md:mt-0">{item.text}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-container-low">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="What we bring"
              title="Heritage craftsmanship backed by a modern buyer support system."
              text="The old-world feel remains in the wood and finishing, but the operation behind it is organized for repeat wholesale orders, private-label programs, and export buyers who need dependable communication."
            />
            <div className="mt-8 grid gap-4">
              {whyChooseUs.slice(0, 4).map((item) => (
                <div key={item} className="rounded-lg border border-outline-variant bg-background px-5 py-4 text-base font-semibold text-primary shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-outline-variant bg-background p-6 shadow-soft sm:row-span-2">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">Product direction</p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-primary">Memorial collections with room for custom work.</h3>
              <p className="mt-4 leading-7 text-on-surface-variant">
                We build around collections, but each buyer can shape the final result through wood choice, resin detailing, engraving, branding, and packaging.
              </p>
            </div>
            <div className="rounded-xl border border-outline-variant bg-background p-6 shadow-soft">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">Export support</p>
              <p className="mt-3 leading-7 text-on-surface-variant">Shipment photos, packaging coordination, and documentation assistance keep international orders predictable.</p>
            </div>
            <div className="rounded-xl border border-outline-variant bg-background p-6 shadow-soft">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">Private label</p>
              <p className="mt-3 leading-7 text-on-surface-variant">OEM and ODM programs are supported for brands that want their own look, packaging, and presentation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-shell rounded-2xl border border-outline-variant bg-primary-container px-6 py-10 text-on-primary md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-tertiary-fixed">Ready to explore</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight">See the full catalogue and talk with us about custom programs.</h2>
              <p className="mt-4 max-w-2xl leading-8 text-on-primary/75">
                We&apos;ll help you review product families, match finishes, and shape a collection that fits your market.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded bg-tertiary-fixed px-6 text-sm font-bold text-on-tertiary-fixed" href="/assets/catalogue.pdf" download>
                Download catalogue
                <Download size={18} aria-hidden="true" />
              </a>
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded border border-on-primary/35 px-6 text-sm font-bold text-on-primary" to="/contact">
                Contact us
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
