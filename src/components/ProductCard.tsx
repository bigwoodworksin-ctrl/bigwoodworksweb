import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Product } from "../data/catalogue";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-outline-variant bg-surface-container-lowest shadow-soft">
      <div className="aspect-[4/3] overflow-hidden bg-surface-container">
        <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">{product.collection}</p>
        <h3 className="mt-2 text-xl font-bold text-primary">{product.name}</h3>
        <p className="mt-2 text-sm font-semibold text-on-surface">Wood species: {product.material}</p>
        <p className="mt-3 text-sm leading-6 text-on-surface-variant">Specifications, packaging details, and private-label options are available on request.</p>
        <Link to="/contact" className="focus-ring mt-4 inline-flex min-h-11 items-center gap-2 rounded bg-primary px-4 text-sm font-bold text-on-primary">
          Request Wholesale Quote
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
