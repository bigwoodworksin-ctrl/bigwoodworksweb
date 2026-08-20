interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
  as?: "h1" | "h2";
}

export function SectionHeader({ eyebrow, title, text, center = false, as = "h2" }: SectionHeaderProps) {
  const Heading = as;
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <Heading className="mt-4 font-display text-4xl font-semibold leading-tight text-primary md:text-5xl">{title}</Heading>
      {text ? <p className="mt-5 text-lg leading-8 text-on-surface-variant">{text}</p> : null}
    </div>
  );
}
