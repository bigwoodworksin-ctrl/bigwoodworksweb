import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

interface HeroProps {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export function Hero({
  eyebrow,
  title,
  text,
  image,
  primaryHref = "/quote",
  primaryLabel = "Start a project",
  secondaryHref = "/portfolio",
  secondaryLabel = "View work",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/72 to-ink/20" />
      </div>
      <div className="container-shell relative grid min-h-[calc(100svh-5rem)] items-center py-16 md:min-h-[720px]">
        <div className="max-w-3xl">
          <p className="eyebrow text-[#dcb28d]">{eyebrow}</p>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[0.98] text-paper sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-paper/78 md:text-xl">{text}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryHref}>
              {primaryLabel}
              <ArrowRight aria-hidden="true" size={18} />
            </Button>
            <Button href={secondaryHref} variant="secondary" className="border-paper/35 bg-paper/10 text-paper hover:bg-paper/18">
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
