import { Layers3, Paintbrush, TreePine } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { infrastructure, manufacturingHighlights, materials, qualitySteps } from "../data/catalogue";

interface ManufacturingOption {
  name: string;
  texture: string;
  accent: string;
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
        texture: "bg-[linear-gradient(135deg,#2b0804_0%,#6f1c12_34%,#b84b22_52%,#35100c_100%)]",
        accent: "from-[#4b100a] to-[#c16a32]",
      },
      {
        name: "Mango Wood",
        texture: "bg-[linear-gradient(135deg,#8b4a16_0%,#d58931_30%,#f1b65b_48%,#70401b_100%)]",
        accent: "from-[#b76422] to-[#f2bd68]",
      },
      {
        name: "Neem Wood",
        texture: "bg-[linear-gradient(135deg,#3b2411_0%,#7d4c1e_36%,#b07636_55%,#25180d_100%)]",
        accent: "from-[#5b3518] to-[#b07839]",
      },
      {
        name: "Pine Wood",
        texture: "bg-[linear-gradient(135deg,#d58a32_0%,#f1c678_34%,#ffd98f_56%,#a76522_100%)]",
        accent: "from-[#e7a94e] to-[#ffdfa0]",
      },
      {
        name: "Steam Beech",
        texture: "bg-[linear-gradient(135deg,#ba6d3a_0%,#dfa173_36%,#f0c39b_55%,#9b552b_100%)]",
        accent: "from-[#c77c47] to-[#f2c9a5]",
      },
      {
        name: "Maple Wood",
        texture: "bg-[linear-gradient(135deg,#e6b05e_0%,#ffd893_36%,#ffe8b3_56%,#bd7e34_100%)]",
        accent: "from-[#e3a84f] to-[#ffe0a8]",
      },
      {
        name: "Akashi Wood",
        texture: "bg-[linear-gradient(135deg,#6b3516_0%,#a95c24_32%,#d58a3d_54%,#3c1d0e_100%)]",
        accent: "from-[#7f3f18] to-[#d98b3f]",
      },
    ],
  },
  {
    title: "Other Materials",
    icon: Layers3,
    items: [
      {
        name: "Brass",
        texture: "bg-[linear-gradient(135deg,#8f5b16_0%,#d6a448_38%,#ffe6a3_54%,#7a4a0f_100%)]",
        accent: "from-[#9d671b] to-[#f1cf7a]",
      },
      {
        name: "Aluminium",
        texture: "bg-[linear-gradient(135deg,#8f9698_0%,#d6dcdd_38%,#f4f6f5_54%,#737a7d_100%)]",
        accent: "from-[#9aa1a3] to-[#f0f3f3]",
      },
      {
        name: "Resin",
        texture: "bg-[linear-gradient(135deg,#351808_0%,#955d28_30%,#0f8d95_52%,#c07a34_72%,#2c1509_100%)]",
        accent: "from-[#6e3f1c] via-[#00a0a7] to-[#d99042]",
      },
    ],
  },
  {
    title: "Finish Options",
    icon: Paintbrush,
    items: [
      {
        name: "Natural",
        texture: "bg-[linear-gradient(135deg,#c68134_0%,#e8b56e_42%,#ffd18b_58%,#9b5a22_100%)]",
        accent: "from-[#c98538] to-[#f4c47e]",
        shape: "swatch",
      },
      {
        name: "Matte",
        texture: "bg-[linear-gradient(135deg,#70401b_0%,#9a5b28_45%,#b16b35_60%,#4e2d16_100%)]",
        accent: "from-[#70401b] to-[#b16b35]",
        shape: "swatch",
      },
      {
        name: "Gloss",
        texture: "bg-[linear-gradient(135deg,#2e0805_0%,#74180f_42%,#c83a1d_52%,#160604_100%)]",
        accent: "from-[#4a0d08] to-[#c3361b]",
        shape: "swatch",
      },
      {
        name: "Lacquer",
        texture: "bg-[linear-gradient(135deg,#4b1f0f_0%,#8b441e_36%,#e3a15a_48%,#2d1409_100%)]",
        accent: "from-[#5f2913] to-[#df9850]",
        shape: "swatch",
      },
      {
        name: "Buff",
        texture: "bg-[linear-gradient(135deg,#1f1b18_0%,#4b423c_34%,#8e8178_50%,#171412_100%)]",
        accent: "from-[#26211d] to-[#8d8178]",
        shape: "swatch",
      },
      {
        name: "Premium Coated",
        texture: "bg-[linear-gradient(135deg,#11100e_0%,#2d2a25_40%,#57514a_52%,#0b0a09_100%)]",
        accent: "from-[#11100e] to-[#59524b]",
        shape: "swatch",
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
                <article key={group.title} className="rounded-xl border border-outline-variant bg-surface-container-lowest p-5 shadow-soft">
                  <div className="grid gap-6 lg:grid-cols-[190px_1fr] lg:items-center">
                    <div className="flex items-center gap-4 border-outline-variant lg:min-h-40 lg:border-r lg:pr-6">
                      <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full border-2 border-on-tertiary-container text-on-tertiary-container">
                        <Icon size={30} aria-hidden="true" />
                      </div>
                      <h2 className="font-display text-3xl font-semibold leading-tight text-primary">{group.title}</h2>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                      {group.items.map((item) => (
                        <button
                          key={item.name}
                          type="button"
                          className="focus-ring group rounded-lg border border-outline-variant bg-background p-4 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-lift"
                          aria-label={`${group.title}: ${item.name}`}
                        >
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
                          <span className="mt-4 block text-center font-display text-xl font-semibold text-primary">{item.name}</span>
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
