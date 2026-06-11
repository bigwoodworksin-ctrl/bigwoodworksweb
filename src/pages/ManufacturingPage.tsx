import { Layers3, Paintbrush, TreePine } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { infrastructure, manufacturingHighlights, materials, qualitySteps } from "../data/catalogue";

interface ManufacturingOption {
  name: string;
  image?: string;
  texture?: string;
  accent?: string;
  shape?: "cube" | "swatch";
}

interface ManufacturingOptionGroup {
  title: string;
  icon: LucideIcon;
  items: ManufacturingOption[];
}

const optionGroups: ManufacturingOptionGroup[] = [
  {
    title: "Wood Options",
    icon: TreePine,
    items: [
      {
        name: "Rosewood",
        image: "/assets/material-library/rosewood.png",
      },
      {
        name: "Mango Wood",
        image: "/assets/material-library/mango_wood.png",
      },
      {
        name: "Neem Wood",
        image: "/assets/material-library/neem_wood.png",
      },
      {
        name: "Pine Wood",
        image: "/assets/material-library/pine_wood.png",
      },
      {
        name: "Steam Beech",
        image: "/assets/material-library/steam_beech.png",
      },
      {
        name: "Maple Wood",
        image: "/assets/material-library/maple_wood.png",
      },
      {
        name: "Akashi Wood",
        image: "/assets/material-library/acacia_wood.png",
      },
    ],
  },
  {
    title: "Other Materials",
    icon: Layers3,
    items: [
      {
        name: "Brass",
        image: "/assets/material-library/brass.png",
      },
      {
        name: "Aluminium",
        image: "/assets/material-library/aluminium.png",
      },
      {
        name: "Resin",
        image: "/assets/material-library/resin.png",
      },
    ],
  },
  {
    title: "Finish Options",
    icon: Paintbrush,
    items: [
      {
        name: "Natural",
        image: "/assets/material-library/natural.png",
      },
      {
        name: "Matte",
        image: "/assets/material-library/matte.png",
      },
      {
        name: "Gloss",
        image: "/assets/material-library/gloss.png",
      },
      {
        name: "Lacquer",
        image: "/assets/material-library/lacquer.png",
      },
      {
        name: "Buff",
        image: "/assets/material-library/buff_polish.png",
      },

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
              Every product is crafted through a carefully managed process that combines skilled craftsmanship, precision engineering, and strict quality control.
            </p>
          </div>
          <img src="/assets/manufacturing-hero.png" alt="Wood processing machinery in the manufacturing facility" className="aspect-[16/10] w-full rounded-xl object-cover shadow-soft" />
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

      <section className="section-pad bg-surface-container-low">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Quality assurance"
            title="Crafted with Care. Delivered with Confidence."
            text="Strict quality control ensures accurate personalization, premium finishing, and safe delivery. Pre-shipment photos and videos can be provided for approval."
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
                          {item.image ? (
                            <span className="relative mx-auto flex h-24 w-24 items-center justify-center transition duration-300 group-hover:rotate-2 group-hover:scale-105">
                              <img src={item.image} alt="" className="max-h-full max-w-full object-contain drop-shadow-[0_16px_20px_rgba(39,19,16,0.2)]" loading="lazy" />
                            </span>
                          ) : (
                            <span
                              className={
                                item.shape === "swatch"
                                  ? `relative block h-20 rounded-md border border-outline-variant ${item.texture} shadow-[inset_0_1px_10px_rgba(255,255,255,0.28),0_10px_22px_rgba(39,19,16,0.2)] transition duration-300 group-hover:scale-[1.03]`
                                  : `relative mx-auto block h-24 w-24 rounded-md border border-outline-variant ${item.texture} shadow-[inset_-14px_-12px_18px_rgba(0,0,0,0.22),inset_10px_10px_18px_rgba(255,255,255,0.24),0_16px_24px_rgba(39,19,16,0.22)] transition duration-300 group-hover:rotate-2 group-hover:scale-105`
                              }
                            >
                              <span className={`absolute inset-x-3 top-3 h-2 rounded-full bg-gradient-to-r ${item.accent} opacity-70 blur-[1px]`} />
                              <span className="absolute inset-0 rounded-md bg-[linear-gradient(90deg,rgba(255,255,255,0.18),transparent_30%,rgba(0,0,0,0.14)_72%,transparent)] opacity-80" />
                            </span>
                          )}
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
              text="Our manufacturing and corporate teams support product development, buyer communication, customization, dispatch, and repeat export supply."
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
    </>
  );
}
