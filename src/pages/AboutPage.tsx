import { CtaBand } from "../components/sections/CtaBand";
import { Hero } from "../components/sections/Hero";
import { ServicesGrid } from "../components/sections/ServicesGrid";
import { StatsBand } from "../components/sections/StatsBand";
import { heroImages, values } from "../data/site";

export function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About"
        title="A small woodshop focused on exacting custom work."
        text="Big Woodworks combines traditional shop discipline with modern planning, producing pieces that feel grounded, durable, and specific to their space."
        image={heroImages.craft}
        primaryHref="/quote"
        primaryLabel="Work with us"
        secondaryHref="/portfolio"
        secondaryLabel="View work"
      />
      <section className="section-pad bg-paper">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="aspect-[4/5] overflow-hidden rounded-lg bg-linen shadow-soft">
            <img src={heroImages.workshop} alt="Woodworking bench with hand tools" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <p className="eyebrow">Studio</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">Hands-on craft, careful planning, and clean installation.</h2>
            <p className="mt-6 leading-8 text-charcoal/78">
              The shop works with homeowners, designers, and small businesses to translate practical needs into finished woodwork. Every project is built around proportion, materials, and a final installation that feels settled in place.
            </p>
          </div>
        </div>
      </section>
      <StatsBand />
      <ServicesGrid eyebrow="Values" title="How the work is approached." text="The studio is built around the details that keep custom work useful after the novelty wears off." items={values} />
      <CtaBand />
    </>
  );
}
