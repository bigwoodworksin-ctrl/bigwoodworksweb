import { processSteps } from "../../data/site";
import { SectionHeading } from "../ui/SectionHeading";

export function ProcessList() {
  return (
    <section className="section-pad bg-linen">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Process"
          title="A direct path from first sketch to finished install."
          text="The work is planned in stages so budgets, materials, fabrication details, and timing stay visible."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article key={step.title} className="rounded-lg border border-bark/10 bg-paper p-6 shadow-soft">
              <span className="font-display text-5xl font-bold text-cedar/35">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 text-2xl font-bold text-ink">{step.title}</h3>
              <p className="mt-4 leading-7 text-charcoal/76">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
