import { ContactForm } from "../components/sections/ContactForm";

interface ContactPageProps {
  quoteMode?: boolean;
}

export function ContactPage({ quoteMode = false }: ContactPageProps) {
  return <ContactForm quoteMode={quoteMode} />;
}
