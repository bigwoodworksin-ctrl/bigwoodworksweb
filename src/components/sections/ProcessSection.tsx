import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { processSteps } from '../../data/content';

export const ProcessSection: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 lg:py-32 bg-cream" id="process">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 lg:mb-20">
          <SectionHeading
            eyebrow="How it works"
            title="From brief to delivery"
            subtitle="A clear, unhurried process — so you know what to expect at every stage."
            align="center"
          />
        </div>

        <div ref={ref} className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-wood-200 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                className="flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                {/* Step number */}
                <div className="w-16 h-16 bg-wood-700 text-wood-50 flex items-center justify-center font-display text-2xl mb-5 shrink-0">
                  {String(step.step).padStart(2, '0')}
                </div>
                <h3 className="text-lg text-bark-900 mb-2">{step.title}</h3>
                <p className="text-bark-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
