import { useState } from "react";
import { Button } from "../ui/Button";

interface ContactFormProps {
  quoteMode?: boolean;
}

const projectTypes = ["Wholesale order", "Private label", "OEM", "ODM", "Customization", "Export inquiry"];

export function ContactForm({ quoteMode = false }: ContactFormProps) {
  const [sent, setSent] = useState(false);

  return (
    <section className="section-pad bg-surface-container-low">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-tight text-primary">
            {quoteMode ? "Request a wholesale quote." : "Tell Us About Your Requirement"}
          </h1>
          <p className="mt-5 leading-8 text-on-surface-variant">
            Share order volume, target market, material preferences, branding needs, and shipping destination. Our wholesale team will respond with a customized quote within 24 hours.
          </p>
          <div className="mt-8 rounded-lg bg-surface-container-lowest p-6 shadow-soft">
            <h2 className="text-xl font-bold">Studio details</h2>
            <p className="mt-3 leading-7 text-on-surface-variant">
              sales@bigwoodworks.com
              <br />
              Manufacturing Unit: Rajasthan, India
            </p>
          </div>
        </div>

        <form
          className="rounded-lg bg-surface-container-lowest p-6 shadow-soft md:p-8"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-primary">
              Name
              <input required className="focus-ring rounded border border-outline-variant bg-surface px-4 py-3 font-normal" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-primary">
              Email
              <input required type="email" className="focus-ring rounded border border-outline-variant bg-surface px-4 py-3 font-normal" />
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-bold text-primary">
            Project type
            <select className="focus-ring rounded border border-outline-variant bg-surface px-4 py-3 font-normal" defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              {projectTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </label>
          <label className="mt-5 grid gap-2 text-sm font-bold text-primary">
            Message
            <textarea required rows={7} className="focus-ring resize-y rounded border border-outline-variant bg-surface px-4 py-3 font-normal" />
          </label>
          <Button type="submit" className="mt-6 w-full sm:w-auto">
            Send inquiry
          </Button>
          {sent ? (
            <p className="mt-4 rounded bg-secondary-container px-4 py-3 text-sm font-semibold text-on-secondary-container" role="status">
              Thanks. The form is working and ready to connect to a production endpoint.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
