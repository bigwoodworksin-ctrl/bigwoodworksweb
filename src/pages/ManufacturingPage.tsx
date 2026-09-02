import { Layers3, Paintbrush, TreePine } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeader } from "../components/SectionHeader";
import { infrastructure, manufacturingHighlights, materials, processSteps, qualitySteps } from "../data/catalogue";

interface ManufacturingOption {
  name: string;
  image?: string;
}

interface ManufacturingOptionGroup {
  title: string;
  icon: LucideIcon;
  items: ManufacturingOption[];
}

interface EquipmentCard {
  title: string;
  text: string;
  image: string;
  alt: string;
}

const equipmentCards: EquipmentCard[] = [
  {
    title: "Turning and Cutting",
    text: "Heavy-duty cutting, turning, and shaping units help maintain accurate dimensions, clean edges, and repeatable production for wholesale orders.",
    image: "/assets/manufacturing-hero.png",
    alt: "Woodworking machinery turning and cutting wood in a professional production unit",
  },
  {
    title: "Laser Engraving",
    text: "Six laser engraving machines support names, dates, artwork, logos, plaques, and detailed personalisation with repeatable accuracy.",
    image: "/assets/laser-engraving-bg.png",
    alt: "Laser engraving machine creating a detailed design on wood",
  },
  {
    title: "UV Printing and Resin Detailing",
    text: "Direct-to-surface UV printing and controlled resin work support full-colour artwork, decorative accents, and buyer-specific collection development.",
    image: "/assets/uv-printing-bg.png",
    alt: "UV printing and premium decorative detailing on wood",
  },
];

const optionGroups: ManufacturingOptionGroup[] = [
  {
    title: "Wood Options",
    icon: TreePine,
    items: [
      { name: "Rosewood", image: "/assets/material-library/rosewood.png" },
      { name: "Mango Wood", image: "/assets/material-library/mango_wood.png" },
      { name: "Neem Wood", image: "/assets/material-library/neem_wood.png" },
      { name: "Pine Wood", image: "/assets/material-library/pine_wood.png" },
      { name: "Steam Beech", image: "/assets/material-library/steam_beech.png" },
      { name: "Maple Wood", image: "/assets/material-library/maple_wood.png" },
      { name: "Akashi Wood", image: "/assets/material-library/acacia_wood.png" },
    ],
  },
  {
    title: "Other Materials",
    icon: Layers3,
    items: [
      { name: "Brass", image: "/assets/material-library/brass.png" },
      { name: "Aluminium", image: "/assets/material-library/aluminium.png" },
      { name: "Resin", image: "/assets/material-library/resin.png" },
    ],
  },
  {
    title: "Finish Options",
    icon: Paintbrush,
    items: [
      { name: "Natural", image: "/assets/material-library/natural.png" },
      { name: "Matte", image: "/assets/material-library/matte.png" },
      { name: "Gloss", image: "/assets/material-library/gloss.png" },
      { name: "Lacquer", image: "/assets/material-library/lacquer.png" },
      { name: "Buff", image: "/assets/material-library/buff_polish.png" },
    ],
  },
];

export function ManufacturingPage() {
  return (
    <>
      <section className="section-pad bg-primary-container text-on-primary">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-tertiary-fixed">Manufacturing excellence</p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-tight md:text-6xl">Built for Precision & Scale</h1>
            <p className="mt-6 text-lg leading-8 text-on-primary/75">
              Every product moves through a managed production flow that combines woodworking skill, customisation support, quality inspection, and export-ready preparation.
            </p>
          </div>
          <img
            src="/assets/manufacturing-hero.png"
            alt="Wood processing machinery in the manufacturing facility"
            className="aspect-[16/10] w-full rounded-xl object-cover shadow-soft"
          />
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-shell">
          <SectionHeader eyebrow="Production highlights" title="Capacity, craft, engraving, resin, and quality control." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {manufacturingHighlights.map((item) => (
              <article key={item.title} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-6">
                <h2 className="text-lg font-bold text-primary">{item.title}</h2>
                <p className="mt-3 leading-7 text-on-surface-variant">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Production journey</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-primary md:text-5xl">How orders move through manufacturing</h2>
            <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-on-tertiary-container" />
            <p className="mt-6 text-lg leading-8 text-on-surface-variant">
              From wood selection through finishing and dispatch, each stage is planned to support repeat wholesale production and product presentation consistency.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 font-display text-2xl font-semibold text-primary">{step.title}</h3>
                <p className="mt-4 leading-7 text-on-surface-variant">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-container-low">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Core capabilities"
            title="Woodworking, engraving, UV printing, and finishing support."
            text="These are the main visual production capabilities currently supported by the project content and image library."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {equipmentCards.map((card) => (
              <article
                key={card.title}
                className="group overflow-hidden rounded-xl border border-outline-variant bg-background shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="font-display text-3xl font-semibold leading-tight text-primary">{card.title}</h3>
                  <p className="mt-4 leading-7 text-on-surface-variant">{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-container-low">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Quality assurance"
            title="Crafted with care. Delivered with confidence."
            text="Strict quality control supports accurate personalisation, premium finishing, and safe delivery. Pre-shipment photos and videos can be provided for approval."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {qualitySteps.map((step) => (
              <div key={step} className="rounded-lg border border-outline-variant bg-background p-5 font-bold text-primary">
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Material library"
            title="Wood, material, and finish options."
            text="Select from production-ready woods, accent materials, and finishing options for custom OEM, wholesale, and memorial collections."
            center
          />
          <div className="mt-10 grid gap-4">
            {optionGroups.map((group) => {
              const Icon = group.icon;

              return (
                <article key={group.title} className="rounded-xl border border-outline-variant bg-surface-container-lowest p-5 shadow-soft md:p-6">
                  <div className="grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:items-stretch">
                    <div className="flex flex-col items-center justify-center gap-5 border-outline-variant text-center lg:min-h-[240px] lg:border-r lg:px-6">
                      <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full border-2 border-on-tertiary-container text-on-tertiary-container">
                        <Icon size={30} aria-hidden="true" />
                      </div>
                      <h2 className="max-w-[9ch] font-display text-4xl font-semibold leading-[1.05] text-primary">{group.title}</h2>
                    </div>

                    <div className="grid grid-cols-[repeat(auto-fit,minmax(155px,1fr))] gap-4">
                      {group.items.map((item) => (
                        <button
                          key={item.name}
                          type="button"
                          className="focus-ring group flex min-h-[190px] flex-col items-center justify-between rounded-lg border border-outline-variant bg-background p-4 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-lift"
                          aria-label={`${group.title}: ${item.name}`}
                        >
                          <span className="relative mx-auto flex h-24 w-24 items-center justify-center transition duration-300 group-hover:rotate-2 group-hover:scale-105">
                            <img
                              src={item.image}
                              alt=""
                              className="max-h-full max-w-full object-contain drop-shadow-[0_16px_20px_rgba(39,19,16,0.2)]"
                              loading="lazy"
                            />
                          </span>
                          <span className="mt-4 block text-balance font-display text-xl font-semibold leading-tight text-primary">{item.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Factory & infrastructure"
              title="Production, finishing, quality, warehouse, and office support."
              text="Our manufacturing and corporate teams support product development, buyer communication, customisation, dispatch, and repeat export supply."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {infrastructure.map((item) => (
                <div key={item} className="rounded border border-outline-variant bg-surface-container-lowest px-4 py-3 font-semibold text-primary">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="Materials & finishes"
              title="Carefully selected materials for durable memorial products."
              text="Premium woods, resin accents, metal details, UV printing, and custom finishes help create market-ready collections."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {materials.map((item) => (
                <span key={item} className="rounded-full border border-outline-variant bg-surface-container-low px-4 py-2 text-sm font-bold text-primary">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-container pb-8 pt-12 text-on-primary md:pt-16">
        <div className="container-shell rounded-2xl border border-on-primary/10 px-6 py-10 md:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-tertiary-fixed">Custom manufacturing</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight">Discuss your custom manufacturing requirement.</h2>
              <p className="mt-4 max-w-2xl leading-8 text-on-primary/75">
                Tell us about the collection type, branding direction, finish preference, and quantity range you need, and we will guide the next step.
              </p>
            </div>
            <Link to="/contact" className="focus-ring inline-flex min-h-12 items-center justify-center rounded bg-tertiary-fixed px-6 text-sm font-bold text-on-tertiary-fixed">
              Request Wholesale Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
