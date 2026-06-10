import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactPage: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = 'Contact — Big Wood Works';
  }, []);

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = 'Please enter your name.';
    if (!form.email.trim()) errs.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Please enter a valid email address.';
    if (!form.message.trim()) errs.message = 'Please tell us about your project.';
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    // Simulate submission
    await new Promise((res) => setTimeout(res, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputClass = (error?: string) =>
    `w-full bg-wood-50 border ${
      error ? 'border-red-400' : 'border-wood-200 focus:border-wood-400'
    } text-bark-900 placeholder:text-bark-400 px-4 py-3 text-sm outline-none transition-colors duration-200`;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=1600&q=80"
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-bark-900/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl text-wood-50 mb-4">Get in Touch</h1>
            <div className="h-0.5 w-12 bg-wood-400 mb-5" />
            <p className="text-wood-200 text-lg max-w-xl leading-relaxed">
              Tell us about your project and we'll get back to you within one business day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Contact details */}
          <div>
            <h2 className="text-2xl text-bark-900 mb-6">Workshop</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-wood-100 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-wood-600" />
                </div>
                <div>
                  <p className="text-bark-900 text-sm font-medium mb-0.5">Address</p>
                  <address className="not-italic text-bark-600 text-sm leading-relaxed">
                    15 Timber Lane<br />
                    Marrickville NSW 2204<br />
                    Australia
                  </address>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-wood-100 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-wood-600" />
                </div>
                <div>
                  <p className="text-bark-900 text-sm font-medium mb-0.5">Phone</p>
                  <a href="tel:+61292345678" className="text-bark-600 text-sm hover:text-wood-600 transition-colors">
                    (02) 9234 5678
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-wood-100 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-wood-600" />
                </div>
                <div>
                  <p className="text-bark-900 text-sm font-medium mb-0.5">Email</p>
                  <a href="mailto:hello@bigwoodworks.com.au" className="text-bark-600 text-sm hover:text-wood-600 transition-colors">
                    hello@bigwoodworks.com.au
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-wood-100 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-wood-600" />
                </div>
                <div>
                  <p className="text-bark-900 text-sm font-medium mb-0.5">Workshop hours</p>
                  <p className="text-bark-600 text-sm">Monday–Friday: 7am–5pm</p>
                  <p className="text-bark-600 text-sm">Saturday: 8am–12pm</p>
                  <p className="text-bark-600 text-sm">Sunday: Closed</p>
                </div>
              </li>
            </ul>

            {/* Google Maps placeholder */}
            <div className="mt-8 aspect-square bg-wood-100 border border-wood-200 flex items-center justify-center">
              <span className="text-bark-500 text-sm text-center px-4">
                Marrickville NSW 2204<br />
                <a
                  href="https://maps.google.com?q=Marrickville+NSW+2204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-wood-600 hover:text-wood-800 text-xs mt-1 inline-block underline"
                >
                  Open in Google Maps
                </a>
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center text-center py-20 gap-5"
              >
                <CheckCircle size={56} className="text-wood-500" strokeWidth={1.5} />
                <h2 className="text-3xl text-bark-900">Thank you, {form.name.split(' ')[0]}!</h2>
                <p className="text-bark-600 max-w-md">
                  We've received your message and we'll get back to you within one business day.
                  We're looking forward to talking through your project.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <h2 className="text-2xl text-bark-900 mb-8">Tell us about your project</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="name" className="block text-bark-700 text-sm mb-1.5">
                      Name <span aria-hidden="true" className="text-wood-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="name"
                      className={inputClass(errors.name)}
                      aria-required="true"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-red-500 text-xs mt-1" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-bark-700 text-sm mb-1.5">
                      Email <span aria-hidden="true" className="text-wood-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className={inputClass(errors.email)}
                      aria-required="true"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-red-500 text-xs mt-1" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="phone" className="block text-bark-700 text-sm mb-1.5">
                      Phone <span className="text-bark-400 text-xs">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      className={inputClass()}
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-bark-700 text-sm mb-1.5">
                      Service type
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputClass()} appearance-none`}
                    >
                      <option value="">Select a service…</option>
                      <option value="custom-furniture">Custom Furniture</option>
                      <option value="kitchen-cabinetry">Kitchen Cabinetry</option>
                      <option value="architectural-millwork">Architectural Millwork</option>
                      <option value="outdoor-structures">Outdoor Structures</option>
                      <option value="restoration">Restoration & Repair</option>
                      <option value="commercial">Commercial Fit-out</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-5">
                  <label htmlFor="budget" className="block text-bark-700 text-sm mb-1.5">
                    Approximate budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className={`${inputClass()} appearance-none`}
                  >
                    <option value="">Select a range…</option>
                    <option value="under-2k">Under $2,000</option>
                    <option value="2k-5k">$2,000–$5,000</option>
                    <option value="5k-15k">$5,000–$15,000</option>
                    <option value="15k-50k">$15,000–$50,000</option>
                    <option value="50k-plus">$50,000+</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>

                <div className="mb-7">
                  <label htmlFor="message" className="block text-bark-700 text-sm mb-1.5">
                    Tell us about your project <span aria-hidden="true" className="text-wood-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What are you looking to create? Include any details about dimensions, timber preferences, or design inspiration."
                    className={`${inputClass(errors.message)} resize-none`}
                    aria-required="true"
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-red-500 text-xs mt-1" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-wood-700 hover:bg-wood-800 active:bg-wood-900 disabled:opacity-60 disabled:cursor-not-allowed text-wood-50 px-10 py-4 text-base tracking-wide transition-colors duration-200"
                >
                  {submitting ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
