import { useState, type ChangeEvent, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact } from "../data/catalogue";

type FormState = {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  inquiryType: "Wholesale catalogue",
  message: "",
};

export function ContactPage() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const recipientEmail = "info@bigwoodworks.com";
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(contact.address)}&output=embed`;
  const mapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`;

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
    setError("");
    setStatus("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in your name, email, and message.");
      return;
    }

    const subject = `New ${form.inquiryType} inquiry - ${form.name}`;
    const body = [
      "New inquiry from Big Wood Works website",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Inquiry type: ${form.inquiryType}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app should open with the inquiry details. Please click Send to submit the inquiry.");
  }

  return (
    <>
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
              <div className="flex gap-3 rounded-lg bg-background p-5"><Mail className="text-secondary" /><span>{recipientEmail}</span></div>
              <div className="flex gap-3 rounded-lg bg-background p-5"><MapPin className="text-secondary" /><span>{contact.address}</span></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-lg bg-background p-6 shadow-soft md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-primary">
                Name
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="focus-ring rounded border border-outline-variant px-4 py-3"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-primary">
                Email
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="focus-ring rounded border border-outline-variant px-4 py-3"
                  required
                />
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-bold text-primary">
              Inquiry type
              <select
                name="inquiryType"
                value={form.inquiryType}
                onChange={handleChange}
                className="focus-ring rounded border border-outline-variant px-4 py-3"
              >
                <option>Wholesale catalogue</option>
                <option>OEM / ODM manufacturing</option>
                <option>Customization</option>
                <option>Export support</option>
              </select>
            </label>

            <label className="mt-5 grid gap-2 text-sm font-bold text-primary">
              Message
              <textarea
                name="message"
                rows={7}
                value={form.message}
                onChange={handleChange}
                className="focus-ring rounded border border-outline-variant px-4 py-3"
                required
              />
            </label>

            {error && <p className="mt-4 text-sm font-semibold text-red-600">{error}</p>}
            {status && <p className="mt-4 text-sm font-semibold text-green-700">{status}</p>}

            <button type="submit" className="focus-ring mt-6 rounded bg-primary px-6 py-3 text-sm font-bold text-on-primary">
              Send inquiry
            </button>
          </form>
        </div>
      </section>

      <section className="bg-background pb-16 md:pb-24">
        <div className="container-shell">
          <div className="relative min-h-[330px] overflow-hidden rounded-xl border border-outline-variant bg-primary shadow-soft md:min-h-[390px]">
            <iframe
              title={`Big Wood Works location: ${contact.address}`}
              src={mapEmbedUrl}
              className="absolute inset-0 h-full w-full grayscale contrast-125 brightness-75"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            <div className="pointer-events-none absolute inset-0 bg-primary/20 mix-blend-multiply" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/25 via-transparent to-primary/10" />

            <div className="pointer-events-none absolute inset-x-5 bottom-5 z-10 sm:inset-x-auto sm:bottom-7 sm:left-7 md:bottom-9 md:left-9">
              <div className="pointer-events-auto max-w-sm border border-outline-variant bg-background/95 p-5 shadow-lift backdrop-blur-sm md:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">Our presence</p>
                <p className="mt-3 leading-7 text-on-surface">
                  Located in the heart of India's craft manufacturing network, where traditional craftsmanship meets contemporary design.
                </p>
                <p className="mt-3 text-sm font-semibold text-primary">{contact.address}</p>
                <a
                  href={mapDirectionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring mt-4 inline-flex items-center gap-2 text-sm font-bold text-secondary underline-offset-4 hover:underline"
                >
                  <MapPin size={17} aria-hidden="true" />
                  Open directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
