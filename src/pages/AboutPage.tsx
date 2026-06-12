import { useEffect, useState } from "react";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Download,
  Factory,
  Flag,
  Globe2,
  Handshake,
  Heart,
  History,
  Quote,
  Store,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import founderMohdZaid from "../assets/founder-mohd-zaid.png";
import founderMujahidUlIslam from "../assets/founder-mujahid-ul-islam.png";
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

const values = [
  {
    title: "Respect",
    text: "Honoring the purpose of our products with silent reverence.",
    icon: Heart,
  },
  {
    title: "Quality",
    text: "Uncompromising structural and aesthetic standards in every joint.",
    icon: BadgeCheck,
  },
  {
    title: "Trust",
    text: "Reliable B2B partnership built on transparency and precision.",
    icon: Handshake,
  },
  {
    title: "Legacy",
    text: "Creating timeless objects that honor the memories they protect.",
    icon: Award,
  },
];

const founderMessageCards = [
  {
    name: "Mohd Zaid",
    role: "Founder",
    image: founderMohdZaid,
  },
  {
    name: "Mujahid Ul Islam",
    role: "Founder",
    image: founderMujahidUlIslam,
  },
];

export function AboutPage() {
  const [activeFounderIndex, setActiveFounderIndex] = useState(0);
  const activeFounder = founderMessageCards[activeFounderIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFounderIndex((current) => (current + 1) % founderMessageCards.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

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
          <div className="max-w-3xl">
            <p className="eyebrow">Founder&apos;s message</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-primary md:text-5xl">
              Crafted with Respect. Made to Honour Every Memory.
            </h2>
            <p className="mt-4 text-base leading-7 text-on-surface-variant md:text-lg">
              Meet the founders behind Big Wood Works and the care, craftsmanship, and buyer support behind every memorial product.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-6xl px-2 sm:px-4">
            <article className="relative overflow-hidden border border-outline-variant bg-background shadow-soft transform-gpu -rotate-1">
              <div className="grid min-h-[620px] gap-8 px-6 py-10 transform-gpu rotate-1 md:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-14 lg:py-14">
                <div className="relative z-10 flex flex-col justify-between">
                  <div>
                    <h3 className="max-w-3xl text-3xl font-bold leading-tight text-primary md:text-4xl">
                      Crafted with Respect. Made to Honour Every Memory.
                    </h3>

                    <div className="mt-7 max-w-2xl space-y-5 text-sm leading-7 text-on-surface-variant md:text-base md:leading-8">
                      <p>
                        At Big Wood Works, we understand that every memorial urn carries something deeply personal—the memory of a life, the love of a family, and a story that deserves to be honoured with dignity.
                      </p>
                      <p>
                        This understanding is at the heart of everything we create. Every piece is handled with care, respect, and attention, from the selection of the wood to the final engraving, finishing, inspection, and packaging. We never see an urn as simply a product; we recognise the trust and emotion placed in our hands.
                      </p>
                      <p>
                        Our promise is to create meaningful memorials that families can treasure for generations while providing our business partners with dependable quality, thoughtful customization, clear communication, and consistent support.
                      </p>
                      <p className="max-w-xl text-xs leading-6 md:text-sm md:leading-7">
                        We are sincerely grateful to every family, customer, business partner, artisan, and team member who has placed their trust in Big Wood Works. Your confidence inspires us to work with greater care and purpose every day.
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
                    <Link className="focus-ring inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-full bg-primary px-7 text-xs font-bold text-on-primary shadow-sm" to="/contact">
                      Let&apos;s Talk
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>

                    <div className="flex items-center gap-2" aria-label="Founder message cards">
                      {founderMessageCards.map((founder, index) => (
                        <button
                          key={founder.name}
                          type="button"
                          onClick={() => setActiveFounderIndex(index)}
                          className={index === activeFounderIndex ? "h-2.5 w-8 rounded-full bg-primary transition-all" : "h-2.5 w-2.5 rounded-full bg-outline-variant transition-all"}
                          aria-label={`Show ${founder.name}`}
                          aria-pressed={index === activeFounderIndex}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative min-h-[420px] lg:min-h-[540px]">
                  <img
                    key={activeFounder.name}
                    src={activeFounder.image}
                    alt={activeFounder.name}
                    className="absolute bottom-[-1px] right-0 max-h-[500px] w-full object-contain object-bottom transition-opacity duration-500 lg:max-h-[600px]"
                    loading="lazy"
                  />

                  <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 rounded-xl bg-background/95 px-5 py-3 shadow-soft backdrop-blur md:left-6 md:translate-x-0">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">{activeFounder.role}</p>
                    <p className="mt-1 text-3xl font-semibold leading-none text-primary" style={{ fontFamily: '"Playlist Script", cursive' }}>
                      {activeFounder.name}
                    </p>
                  </div>
                </div>
              </div>
            </article>
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

          <div className="relative mx-auto mt-16 max-w-6xl">
            <div className="absolute left-6 top-0 h-full w-px bg-outline-variant md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />

            <div className="grid gap-8 md:gap-12">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <article key={item.year} className="relative grid grid-cols-[3rem_minmax(0,1fr)] gap-4 md:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)] md:items-center md:gap-0">
                    <div className={isEven ? "hidden text-right md:block md:pr-12" : "hidden md:order-3 md:block md:pl-12"}>
                      <h3 className="font-display text-4xl font-semibold leading-none text-primary">{item.year}</h3>
                      <p className="mt-3 text-xl leading-8 text-on-surface-variant">{item.label}</p>
                    </div>

                    <div className="z-10 grid h-12 w-12 place-items-center rounded-full border-4 border-background bg-primary text-on-primary shadow-soft md:order-2">
                      <Icon size={18} aria-hidden="true" />
                    </div>

                    <div className={isEven ? "md:pl-12" : "md:order-1 md:pr-12"}>
                      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm transition-shadow hover:shadow-soft md:p-7">
                        <div className="md:hidden">
                          <h3 className="font-display text-3xl font-semibold text-primary">{item.year}</h3>
                          <p className="mt-2 text-base font-semibold leading-7 text-secondary">{item.label}</p>
                        </div>
                        <p className="mt-4 text-base leading-8 text-on-surface-variant md:mt-0 md:text-lg">{item.text}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-primary-container text-on-primary">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl text-center">
            <Quote className="mx-auto mb-6 h-14 w-14 text-tertiary-fixed" aria-hidden="true" />
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-tertiary-fixed">Founder&apos;s vision</p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-on-primary md:text-5xl">
              Crafted with Respect. Built with Purpose.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-on-primary/75">
              These values guide the way we choose wood, finish every surface, package every order, and support every wholesale partner.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article key={value.title} className="rounded-xl border border-on-primary/10 bg-background/5 p-6 text-center transition-colors hover:bg-background/10">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-surface-container-lowest text-primary shadow-sm">
                    <Icon size={26} aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-tertiary-fixed">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-on-primary/75">{value.text}</p>
                </article>
              );
            })}
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
