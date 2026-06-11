import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeader } from "../components/SectionHeader";
import { stats, whyChooseUs } from "../data/catalogue";

const timeline = [
  { year: "Before 2020", text: "Family legacy of carpentry, wooden doors, windows, kitchen works, and handcrafted products." },
  { year: "2020", text: "The Maryam Crafts manufacturing operations established." },
  { year: "2023", text: "Big Wood Works cremation urn division launched." },
  { year: "2024", text: "Export expansion across international markets." },
  { year: "2025", text: "OEM and private-label manufacturing growth." },
  { year: "2026", text: "Serving buyers across 6+ countries with 50,000+ urns manufactured since 2023." },
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
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-outline-variant bg-background shadow-soft sm:row-span-2">
              <img src="/assets/catalogue-images/page-03-1.png" alt="Catalogue visual of handcrafted memorial products" className="h-full min-h-[320px] w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-xl border border-outline-variant bg-background shadow-soft">
              <img src="/assets/founder-mujahid-ul-islam.png" alt="Founder Mujahid Ul Islam" className="h-48 w-full object-cover object-top" />
            </div>
            <div className="overflow-hidden rounded-xl border border-outline-variant bg-background shadow-soft">
              <img src="/assets/founder-mohd-zaid.png" alt="Founder Mohd Zaid" className="h-48 w-full object-cover object-top" />
            </div>
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
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
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
            <div className="grid gap-6">
              {founders.map((founder) => (
                <article key={founder.name} className="overflow-hidden rounded-xl border border-outline-variant bg-background shadow-soft">
                  <div className="grid grid-cols-[150px_1fr] gap-0 sm:grid-cols-[180px_1fr]">
                    <div className="aspect-[3/4] overflow-hidden bg-surface-container">
                      <img src={founder.image} alt={founder.name} className="h-full w-full object-cover object-top" loading="lazy" />
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">{founder.role}</p>
                      <h2 className="mt-2 font-display text-3xl font-semibold text-primary">{founder.name}</h2>
                      <p className="mt-4 leading-7 text-on-surface-variant">
                        A hands-on leader shaping the company&apos;s craftsmanship, product development, buyer relationships, and export growth.
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-shell">
          <SectionHeader eyebrow="Our journey" title="From traditional craftsmanship to global memorial manufacturing." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {timeline.map((item) => (
              <article key={item.year} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-6 shadow-sm">
                <p className="font-display text-4xl font-bold text-secondary">{item.year}</p>
                <p className="mt-4 leading-7 text-on-surface-variant">{item.text}</p>
              </article>
            ))}
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
