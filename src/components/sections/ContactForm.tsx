import { useState } from "react";
import { Button } from "../ui/Button";

interface ContactFormProps {
  quoteMode?: boolean;
}

const projectTypes = ["Custom furniture", "Cabinetry", "Built-ins", "Repair or refinishing", "Commercial work"];

export function ContactForm({ quoteMode = false }: ContactFormProps) {
  const [sent, setSent] = useState(false);

  return (
    <section className="section-pad bg-linen">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-tight text-ink">
            {quoteMode ? "Request a project estimate." : "Tell us what you want to build."}
          </h1>
          <p className="mt-5 leading-8 text-charcoal/78">
            Share the room, dimensions, timeline, materials, and any existing drawings or references. A clear first note helps the next conversation move quickly.
          </p>
          <div className="mt-8 rounded-lg bg-paper p-6 shadow-soft">
            <h2 className="text-xl font-bold">Studio details</h2>
            <p className="mt-3 leading-7 text-charcoal/75">
              hello@bigwoodworks.studio
              <br />
              Monday-Friday, 9:00-5:00
            </p>
          </div>
        </div>

        <form
          className="rounded-lg bg-paper p-6 shadow-soft md:p-8"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-ink">
              Name
              <input required className="focus-ring rounded-md border border-bark/20 bg-paper px-4 py-3 font-normal" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-ink">
              Email
              <input required type="email" className="focus-ring rounded-md border border-bark/20 bg-paper px-4 py-3 font-normal" />
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-bold text-ink">
            Project type
            <select className="focus-ring rounded-md border border-bark/20 bg-paper px-4 py-3 font-normal" defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              {projectTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </label>
          <label className="mt-5 grid gap-2 text-sm font-bold text-ink">
            Message
            <textarea required rows={7} className="focus-ring resize-y rounded-md border border-bark/20 bg-paper px-4 py-3 font-normal" />
          </label>
          <Button type="submit" className="mt-6 w-full sm:w-auto">
            Send inquiry
          </Button>
          {sent ? (
            <p className="mt-4 rounded-md bg-sage/12 px-4 py-3 text-sm font-semibold text-sage" role="status">
              Thanks. The form is working and ready to connect to a production endpoint.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
