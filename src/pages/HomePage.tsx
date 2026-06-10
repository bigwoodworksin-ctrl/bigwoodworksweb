import { CtaBand } from "../components/sections/CtaBand";
import { Hero } from "../components/sections/Hero";
import { Materials } from "../components/sections/Materials";
import { ProcessList } from "../components/sections/ProcessList";
import { ProjectGrid } from "../components/sections/ProjectGrid";
import { ServicesGrid } from "../components/sections/ServicesGrid";
import { StatsBand } from "../components/sections/StatsBand";
import { heroImages, services, values } from "../data/site";

export function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Custom woodwork studio"
        title="Built-in warmth, measured to the inch."
        text="Big Woodworks designs, fabricates, and installs custom furniture, cabinetry, and architectural woodwork for homes and working spaces."
        image={heroImages.workshop}
      />
      <ServicesGrid
        eyebrow="What we build"
        title="Furniture, cabinetry, and fitted details made for the exact space."
        text="From a single heirloom table to a full room of built-ins, each piece is planned around proportion, use, and material behavior."
        items={services}
      />
      <StatsBand />
      <ProjectGrid limit={3} />
      <Materials />
      <ServicesGrid
        eyebrow="Working principles"
        title="Practical craft with a clean finish."
        text="The best woodwork disappears into daily use: drawers align, doors close softly, finishes hold up, and every edge feels intentional."
        items={values}
      />
      <ProcessList />
      <CtaBand />
    </>
  );
}
