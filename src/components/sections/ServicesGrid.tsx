import type { Feature } from "../../data/site";
import { FeatureCard } from "../ui/FeatureCard";
import { SectionHeading } from "../ui/SectionHeading";

interface ServicesGridProps {
  eyebrow: string;
  title: string;
  text: string;
  items: Feature[];
}

export function ServicesGrid({ eyebrow, title, text, items }: ServicesGridProps) {
  return (
    <section className="section-pad bg-linen">
      <div className="container-shell">
        <SectionHeading eyebrow={eyebrow} title={title} text={text} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <FeatureCard key={item.title} feature={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
