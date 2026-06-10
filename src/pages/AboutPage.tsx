import { SectionHeader } from "../components/SectionHeader";

const timeline = [
  { year: "Before 2020", text: "Family legacy of carpentry, wooden doors, windows, kitchen works, and handcrafted products." },
  { year: "2020", text: "The Maryam Crafts manufacturing operations established." },
  { year: "2023", text: "Big Wood Works cremation urn division launched." },
  { year: "2024", text: "Export expansion across international markets." },
  { year: "2025", text: "OEM and private-label manufacturing growth." },
  { year: "2026", text: "Serving buyers across 6+ countries with 50,000+ urns manufactured since 2023." },
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
              Big Wood Works is a trusted manufacturer and exporter of handcrafted cremation urns, pet urns, keepsake urns, and memorial products.
            </p>
            <p className="mt-4 text-lg leading-8 text-on-surface-variant">
              Our in-house capabilities include custom design development, engraving, photo personalization, private-label packaging, quality control, and export-ready logistics.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl shadow-soft">
            <img src="/assets/catalogue-images/page-03-1.png" alt="Big Wood Works catalogue craft visual" className="h-full w-full object-cover" />
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
    </>
  );
}
