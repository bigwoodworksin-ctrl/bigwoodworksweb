import { materialNotes } from "../../data/site";
import { SectionHeading } from "../ui/SectionHeading";

export function Materials() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="Materials"
          title="Chosen for grain, movement, finish, and use."
          text="The right wood is a practical decision as much as a visual one. Big Woodworks pairs materials with the room, climate, budget, and maintenance expectations."
        />
        <div className="grid gap-4">
          {materialNotes.map((note) => (
            <article key={note.title} className="rounded-lg border border-bark/10 bg-linen p-6">
              <h3 className="text-xl font-bold text-ink">{note.title}</h3>
              <p className="mt-3 leading-7 text-charcoal/75">{note.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
