interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, text, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-ink md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-charcoal/80 md:text-lg">{text}</p> : null}
    </div>
  );
}
