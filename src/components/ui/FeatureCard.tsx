import type { Feature } from "../../data/site";

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <article className="rounded-lg border border-bark/10 bg-paper p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
      <span className="flex size-12 items-center justify-center rounded-full bg-sage/15 text-sage">
        <Icon aria-hidden="true" size={22} />
      </span>
      <h3 className="mt-6 text-xl font-bold text-ink">{feature.title}</h3>
      <p className="mt-3 leading-7 text-charcoal/75">{feature.description}</p>
    </article>
  );
}
