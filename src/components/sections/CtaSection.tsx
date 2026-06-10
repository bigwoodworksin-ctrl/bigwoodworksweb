import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const CtaSection: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden" aria-labelledby="cta-heading">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1567538096621-38d2284b23ff?w=1600&q=80"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-bark-900/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <span className="text-wood-400 text-sm tracking-[0.15em] uppercase mb-4 block">
          Let's build something together
        </span>
        <h2 id="cta-heading" className="text-4xl md:text-5xl lg:text-6xl text-wood-50 leading-tight mb-6">
          Have a project in mind?
        </h2>
        <p className="text-wood-300 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Tell us what you're imagining and we'll talk through how to make it
          real. The first conversation is always free and obligation-free.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-wood-600 hover:bg-wood-700 active:bg-wood-800 text-wood-50 px-8 py-4 text-base tracking-wide transition-colors"
          >
            Get a free quote
            <ArrowRight size={18} />
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center gap-2 border border-wood-400/60 hover:border-wood-300 text-wood-200 hover:text-wood-50 px-8 py-4 text-base tracking-wide transition-colors"
          >
            See our work first
          </Link>
        </div>
      </div>
    </section>
  );
};
