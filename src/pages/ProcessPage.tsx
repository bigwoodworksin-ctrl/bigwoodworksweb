import { CtaBand } from "../components/sections/CtaBand";
import { Hero } from "../components/sections/Hero";
import { Materials } from "../components/sections/Materials";
import { ProcessList } from "../components/sections/ProcessList";
import { heroImages } from "../data/site";

export function ProcessPage() {
  return (
    <>
      <Hero
        eyebrow="Process"
        title="Clear steps for custom work that has many moving parts."
        text="From the first conversation to installation, every stage narrows decisions and protects the final result."
        image={heroImages.workshop}
        primaryHref="/quote"
        primaryLabel="Start the process"
        secondaryHref="/portfolio"
        secondaryLabel="View projects"
      />
      <ProcessList />
      <Materials />
      <CtaBand />
    </>
  );
}
