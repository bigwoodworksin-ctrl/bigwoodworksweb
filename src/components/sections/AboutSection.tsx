import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 lg:py-32 bg-bark-900" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80"
                alt="Craftsman carefully planing a piece of timber in the workshop"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent card */}
            <div className="absolute -bottom-8 -right-4 lg:-right-8 w-48 bg-wood-600 p-5 hidden sm:block">
              <div className="text-4xl text-wood-50 font-display">1996</div>
              <div className="text-wood-200 text-xs tracking-wide mt-1">Founded in Sydney</div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="lg:pt-8"
          >
            <span className="text-wood-400 text-sm tracking-[0.15em] uppercase mb-4 block">
              Our story
            </span>
            <h2 className="text-4xl md:text-5xl text-wood-50 leading-tight mb-6">
              A workshop built on patience and respect for the wood
            </h2>
            <div className="h-0.5 w-12 bg-wood-500 mb-6" />
            <p className="text-wood-300 leading-relaxed mb-5">
              Big Wood Works was founded in 1996 by Mike Dawson, a Tasmanian-trained
              cabinetmaker with a simple conviction: that well-made timber pieces should
              be available to anyone who loves them, not just those who can afford
              imported antiques.
            </p>
            <p className="text-wood-400 leading-relaxed mb-8">
              From our Marrickville workshop, we commission every piece with the same
              unhurried care. We work only with sustainably sourced Australian hardwoods
              — blackwood, spotted gum, white ash, iron bark — chosen for their
              character and built for the long term.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { value: '28+', label: 'Years in the trade' },
                { value: '1,200+', label: 'Pieces crafted' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-3xl text-wood-300 font-display">{value}</div>
                  <div className="text-wood-500 text-sm mt-1">{label}</div>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-wood-300 hover:text-wood-100 font-medium transition-colors"
            >
              Meet the team
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
