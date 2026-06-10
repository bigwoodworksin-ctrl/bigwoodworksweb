import { CtaBand } from "../components/sections/CtaBand";
import { Hero } from "../components/sections/Hero";
import { ProjectGrid } from "../components/sections/ProjectGrid";
import { heroImages } from "../data/site";

export function PortfolioPage() {
  return (
    <>
      <Hero
        eyebrow="Portfolio"
        title="A gallery of fitted woodwork and custom pieces."
        text="Selected projects spanning furniture, cabinetry, built-ins, and commercial millwork."
        image={heroImages.craft}
        primaryHref="/quote"
        primaryLabel="Discuss a project"
        secondaryHref="/process"
        secondaryLabel="See process"
      />
      <ProjectGrid />
      <CtaBand />
    </>
  );
}
