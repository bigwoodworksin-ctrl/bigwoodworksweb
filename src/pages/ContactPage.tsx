import { Mail, MapPin, Phone } from "lucide-react";
import { contact } from "../data/catalogue";

export function ContactPage() {
  return (
    <section className="section-pad bg-surface-container-low">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">Contact us</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-tight text-primary">We're here to help.</h1>
          <p className="mt-5 text-lg leading-8 text-on-surface-variant">
            Contact us for catalogue requests, OEM discussions, export inquiries, customization options, and wholesale manufacturing support.
          </p>
          <div className="mt-8 grid gap-4">
            <div className="flex gap-3 rounded-lg bg-background p-5"><Phone className="text-secondary" /><span>{contact.phones.join(" | ")}</span></div>
            <div className="flex gap-3 rounded-lg bg-background p-5"><Mail className="text-secondary" /><span>{contact.email}</span></div>
            <div className="flex gap-3 rounded-lg bg-background p-5"><MapPin className="text-secondary" /><span>{contact.address}</span></div>
          </div>
        </div>
        <form className="rounded-lg bg-background p-6 shadow-soft md:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-primary">Name<input className="focus-ring rounded border border-outline-variant px-4 py-3" /></label>
            <label className="grid gap-2 text-sm font-bold text-primary">Email<input type="email" className="focus-ring rounded border border-outline-variant px-4 py-3" /></label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-bold text-primary">Inquiry type<select className="focus-ring rounded border border-outline-variant px-4 py-3"><option>Wholesale catalogue</option><option>OEM / ODM manufacturing</option><option>Customization</option><option>Export support</option></select></label>
          <label className="mt-5 grid gap-2 text-sm font-bold text-primary">Message<textarea rows={7} className="focus-ring rounded border border-outline-variant px-4 py-3" /></label>
          <button type="submit" className="focus-ring mt-6 rounded bg-primary px-6 py-3 text-sm font-bold text-on-primary">Send inquiry</button>
        </form>
      </div>
    </section>
  );
}
