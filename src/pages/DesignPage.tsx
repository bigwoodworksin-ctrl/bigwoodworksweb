import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { SitePage } from "../data/bigwood";

interface DesignPageProps {
  page: SitePage;
}

export function DesignPage({ page }: DesignPageProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-background">
        <div className="container-shell grid min-h-[calc(100svh-5rem)] gap-10 py-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-20">
          <div className="relative z-10">
            <p className="eyebrow">{page.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.75rem,7vw,4rem)] font-bold leading-[1.08] text-primary">
              {page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-[1.65] text-on-surface-variant">{page.description}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded bg-primary px-6 text-sm font-bold text-on-primary transition hover:bg-primary-container" to="/contact">
                {page.primaryCta}
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
              {page.secondaryCta ? (
                <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded border border-outline-variant px-6 text-sm font-bold text-primary transition hover:border-primary hover:bg-surface-container" to="/contact">
                  {page.secondaryCta}
                </Link>
              ) : null}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-xl border border-outline-variant/70" />
            <img
              src={page.image}
              alt={`${page.navLabel} page design`}
              className="relative aspect-[4/5] w-full rounded-lg object-cover object-top shadow-soft lg:max-h-[680px]"
            />
          </div>
        </div>
      </section>

      {page.stats ? (
        <section className="bg-primary py-8 text-on-primary">
          <div className="container-shell grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {page.stats.map((stat) => (
              <div key={stat.label} className="border-l border-on-primary/25 pl-5">
                <p className="font-display text-4xl font-bold">{stat.value}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-on-primary/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {page.sections.map((section, index) => (
        <section key={section.title} className={index % 2 === 0 ? "section-pad bg-surface" : "section-pad bg-surface-container-low"}>
          <div className="container-shell">
            <div className="max-w-3xl">
              {section.eyebrow ? <p className="eyebrow">{section.eyebrow}</p> : null}
              <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-primary md:text-5xl">{section.title}</h2>
              {section.body ? <p className="mt-5 text-lg leading-[1.65] text-on-surface-variant">{section.body}</p> : null}
            </div>
            {section.items ? (
              <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {section.items.map((item) => (
                  <article key={`${section.title}-${item.title}`} className="rounded-lg border border-outline-variant bg-surface-container-lowest p-6 shadow-sm">
                    {item.meta ? <p className="font-display text-4xl font-bold text-on-primary-container">{item.meta}</p> : null}
                    <h3 className="mt-4 text-xl font-bold text-primary">{item.title}</h3>
                    <p className="mt-3 leading-7 text-on-surface-variant">{item.body}</p>
                  </article>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ))}

      <section className="bg-primary-container py-16 text-on-primary">
        <div className="container-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow text-on-primary-container">Wholesale partnership</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight">Tell Us About Your Requirement</h2>
            <p className="mt-4 leading-7 text-on-primary/72">Our wholesale team will respond with a customized quote within 24 hours.</p>
          </div>
          <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded bg-tertiary-fixed px-6 text-sm font-bold text-on-tertiary-fixed transition hover:bg-tertiary-fixed-dim" to="/contact">
            Get a Custom Quote
          </Link>
        </div>
      </section>
    </>
  );
}
