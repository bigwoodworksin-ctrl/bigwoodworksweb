import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CtaBand } from "../components/sections/CtaBand";
import { Hero } from "../components/sections/Hero";
import { Materials } from "../components/sections/Materials";
import { ProcessList } from "../components/sections/ProcessList";
import { ServicesGrid } from "../components/sections/ServicesGrid";
import { heroImages, services, values } from "../data/site";

interface ServicesPageProps {
  variant: "furniture" | "cabinetry";
}

const pageCopy = {
  furniture: {
    eyebrow: "Custom furniture",
    title: "Pieces made for the room, the routine, and the long haul.",
    text: "Tables, desks, benches, beds, shelving, and storage pieces built around exact dimensions and daily use.",
    image: heroImages.furniture,
  },
  cabinetry: {
    eyebrow: "Cabinetry",
    title: "Storage systems that make architecture feel calmer.",
    text: "Kitchen, bath, office, studio, and retail cabinetry with measured layouts, durable finishes, and clean installation.",
    image: heroImages.cabinetry,
  },
};

export function ServicesPage({ variant }: ServicesPageProps) {
  const copy = pageCopy[variant];

  return (
    <>
      <Hero {...copy} primaryLabel="Request estimate" secondaryLabel="See process" secondaryHref="/process" />
      <section className="section-pad bg-paper">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow">Scope</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">Built around exact dimensions and real constraints.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Site measurements", "Material selection", "Shop drawings", "Fabrication", "Finish samples", "Installation"].map((item) => (
              <Link
                key={item}
                to="/quote"
                className="focus-ring flex items-center justify-between rounded-lg border border-bark/10 bg-linen p-5 text-lg font-bold transition hover:border-bark/35 hover:bg-paper"
              >
                {item}
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ServicesGrid
        eyebrow="Capabilities"
        title={variant === "furniture" ? "Custom furniture with practical detail." : "Cabinetry with storage, alignment, and finish resolved."}
        text="Each project is shaped to the site and built through a clear sequence of drawings, samples, fabrication, and installation."
        items={variant === "furniture" ? services.filter((item) => item.title !== "Cabinetry systems") : services}
      />
      <Materials />
      <ServicesGrid eyebrow="Standards" title="Quiet details matter." text="The details that make custom woodwork feel composed are the same details that make it last." items={values} />
      <ProcessList />
      <CtaBand />
    </>
  );
}
