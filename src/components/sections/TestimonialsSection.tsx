import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { testimonials } from '../../data/content';

export const TestimonialsSection: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 lg:py-32 bg-wood-800" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 lg:mb-20">
          <SectionHeading
            eyebrow="Client stories"
            title="What our clients say"
            light
          />
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
              className="bg-wood-900/60 border border-wood-700/50 p-8"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={15} className="fill-wood-400 text-wood-400" />
                ))}
              </div>

              <p className="text-wood-200 leading-relaxed mb-6 text-base italic">
                "{t.quote}"
              </p>

              <footer className="flex items-center gap-3">
                <div className="w-9 h-9 bg-wood-600 flex items-center justify-center text-wood-100 text-sm font-medium shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <cite className="text-wood-100 text-sm font-medium not-italic block">
                    {t.name}
                  </cite>
                  <span className="text-wood-500 text-xs">{t.location}</span>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
