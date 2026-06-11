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
  );
}
