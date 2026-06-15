import { useState, type ChangeEvent, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact } from "../data/catalogue";

type FormState = {
  fullName: string;
  companyName: string;
  country: string;
  businessType: string;
  email: string;
  phone: string;
  inquiryType: string;
  productInterest: string;
  estimatedQuantity: string;
  customBranding: string;
  targetDeliveryDate: string;
  message: string;
};

const initialFormState: FormState = {
  fullName: "",
  companyName: "",
  country: "",
  businessType: "Funeral brand",
  email: "",
  phone: "",
  inquiryType: "Wholesale quote",
  productInterest: "",
  estimatedQuantity: "",
  customBranding: "Yes",
  targetDeliveryDate: "",
  message: "",
};

export function ContactPage() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const recipientEmail = contact.email;
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(contact.address)}&output=embed`;

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

    if (
      !form.fullName.trim() ||
      !form.companyName.trim() ||
      !form.country.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      setError("Please complete your name, company, country, email, and message before submitting.");
      return;
    }

    const subject = `New ${form.inquiryType} enquiry - ${form.companyName}`;
    const body = [
      "New wholesale enquiry from the Big Wood Works website",
      "",
      `Full name: ${form.fullName}`,
      `Company name: ${form.companyName}`,
      `Country: ${form.country}`,
      `Business type: ${form.businessType}`,
      `Email: ${form.email}`,
      `WhatsApp or telephone: ${form.phone || "Not provided"}`,
      `Enquiry type: ${form.inquiryType}`,
      `Products of interest: ${form.productInterest || "To be discussed"}`,
      `Estimated quantity: ${form.estimatedQuantity || "To be discussed"}`,
      `Custom branding required: ${form.customBranding}`,
      `Target delivery date: ${form.targetDeliveryDate || "To be discussed"}`,
      "",
      "Message:",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app should open with the enquiry details. Please review and click Send to submit it.");
  }

  return (
    <section className="section-pad bg-surface-container-low">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Contact us</p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-tight text-primary">Request a wholesale quote.</h1>
            <p className="mt-5 text-lg leading-8 text-on-surface-variant">
              Contact us for catalogue requests, OEM and private-label discussions, export enquiries, customisation options, and wholesale manufacturing support.
            </p>
            <div className="mt-8 grid gap-4">
              <div className="flex gap-3 rounded-lg bg-background p-5">
                <Phone className="text-secondary" />
                <span>{contact.phones.join(" | ")}</span>
              </div>
              <div className="flex gap-3 rounded-lg bg-background p-5">
                <Mail className="text-secondary" />
                <span>{recipientEmail}</span>
              </div>
              <div className="flex gap-3 rounded-lg bg-background p-5">
                <MapPin className="text-secondary" />
                <span>{contact.address}</span>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-on-surface-variant">
              Share your product direction, branding requirements, estimated quantity, and delivery needs so we can reply with the right manufacturing path.
            </p>
            {/* TODO: Add a published response-time note here if the business wants to commit to a service expectation. */}
          </div>

          <form onSubmit={handleSubmit} className="rounded-lg bg-background p-6 shadow-soft md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-primary">
                Full name *
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  className="focus-ring rounded border border-outline-variant px-4 py-3"
                  autoComplete="name"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-primary">
                Company name *
                <input
                  name="companyName"
                  value={form.companyName}
                  onChange={handleChange}
                  className="focus-ring rounded border border-outline-variant px-4 py-3"
                  autoComplete="organization"
                  required
                />
              </label>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-primary">
                Country *
                <input
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className="focus-ring rounded border border-outline-variant px-4 py-3"
                  autoComplete="country-name"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-primary">
                Business type
                <select
                  name="businessType"
                  value={form.businessType}
                  onChange={handleChange}
                  className="focus-ring rounded border border-outline-variant px-4 py-3"
                >
                  <option>Funeral brand</option>
                  <option>Crematorium or funeral home</option>
                  <option>Wholesaler or importer</option>
                  <option>Distributor</option>
                  <option>E-commerce business</option>
                  <option>Private-label buyer</option>
                </select>
              </label>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-primary">
                Email *
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="focus-ring rounded border border-outline-variant px-4 py-3"
                  autoComplete="email"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-primary">
                WhatsApp or telephone
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="focus-ring rounded border border-outline-variant px-4 py-3"
                  autoComplete="tel"
                />
              </label>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-primary">
                Enquiry type
                <select
                  name="inquiryType"
                  value={form.inquiryType}
                  onChange={handleChange}
                  className="focus-ring rounded border border-outline-variant px-4 py-3"
                >
                  <option>Wholesale quote</option>
                  <option>Catalogue request</option>
                  <option>OEM / ODM manufacturing</option>
                  <option>Customisation</option>
                  <option>Export support</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold text-primary">
                Products of interest
                <input
                  name="productInterest"
                  value={form.productInterest}
                  onChange={handleChange}
                  className="focus-ring rounded border border-outline-variant px-4 py-3"
                  placeholder="Urns, keepsakes, pet urns, engraved products..."
                />
              </label>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-primary">
                Estimated quantity
                <input
                  name="estimatedQuantity"
                  value={form.estimatedQuantity}
                  onChange={handleChange}
                  className="focus-ring rounded border border-outline-variant px-4 py-3"
                  placeholder="Sample run, 100 units, repeat bulk order..."
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-primary">
                Custom branding required
                <select
                  name="customBranding"
                  value={form.customBranding}
                  onChange={handleChange}
                  className="focus-ring rounded border border-outline-variant px-4 py-3"
                >
                  <option>Yes</option>
                  <option>No</option>
                  <option>Not sure yet</option>
                </select>
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-bold text-primary">
              Target delivery date
              <input
                name="targetDeliveryDate"
                type="date"
                value={form.targetDeliveryDate}
                onChange={handleChange}
                className="focus-ring rounded border border-outline-variant px-4 py-3"
              />
            </label>

            <label className="mt-5 grid gap-2 text-sm font-bold text-primary">
              Message *
              <textarea
                name="message"
                rows={7}
                value={form.message}
                onChange={handleChange}
                className="focus-ring rounded border border-outline-variant px-4 py-3"
                placeholder="Tell us about your collection requirements, finishes, branding, packaging needs, or reference products."
                required
              />
            </label>

            <p className="mt-4 text-sm leading-6 text-on-surface-variant">
              If you need to share a logo, artwork, or reference design, mention it in your message and we can coordinate file sharing by email.
            </p>

            {error && <p className="mt-4 text-sm font-semibold text-red-600">{error}</p>}
            {status && <p className="mt-4 text-sm font-semibold text-green-700">{status}</p>}

            <button type="submit" className="focus-ring mt-6 rounded bg-primary px-6 py-3 text-sm font-bold text-on-primary">
              Submit Wholesale Enquiry
            </button>
          </form>
        </div>

        <div className="relative mt-14 h-[285px] overflow-hidden border border-outline-variant bg-primary shadow-soft md:mt-16 md:h-[360px]">
          <iframe
            title={`Big Wood Works location: ${contact.address}`}
            src={mapEmbedUrl}
            className="absolute inset-0 h-full w-full"
            style={{ filter: "grayscale(1) contrast(1.3) brightness(0.58)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

          <div className="pointer-events-none absolute inset-0 bg-black/15" />

          <div className="pointer-events-none absolute bottom-5 left-5 z-10 w-[calc(100%-2.5rem)] max-w-[360px] bg-background px-5 py-4 shadow-soft sm:bottom-7 sm:left-7 sm:px-6 sm:py-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-on-surface-variant">
              Our presence
            </p>
            <p className="mt-2 text-sm leading-6 text-on-surface">
              Located in New Delhi, where buyer communication, product planning, and dispatch coordination are managed for wholesale orders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
