import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611269154421-4e27233ac5c5?w=1920&q=85"
          alt=""
          className="w-full h-full object-cover object-center"
          aria-hidden="true"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bark-900/85 via-bark-900/60 to-bark-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-bark-900/40 via-transparent to-transparent" />
      </div>

      {/* Wood grain overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: `repeating-linear-gradient(
            2deg,
            transparent,
            transparent 6px,
            rgba(255,255,255,0.05) 6px,
            rgba(255,255,255,0.05) 7px
          )`
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="inline-block text-wood-400 text-sm tracking-[0.2em] uppercase mb-5">
              Sydney's Timber Craftsmen
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="text-5xl md:text-6xl lg:text-7xl text-wood-50 leading-[1.05] mb-6"
          >
            Made by hand.
            <br />
            <em className="not-italic text-wood-300">Built to last.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-lg text-wood-100/80 leading-relaxed mb-10 max-w-lg"
          >
            We craft bespoke timber furniture, cabinetry, and joinery that will
            become part of your home's story. Every grain is chosen, every joint
            is cut by hand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-wood-600 hover:bg-wood-700 active:bg-wood-800 text-wood-50 px-7 py-3.5 text-base tracking-wide transition-colors duration-200"
            >
              Start Your Project
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-wood-300/50 hover:border-wood-300 text-wood-100 hover:text-wood-50 px-7 py-3.5 text-base tracking-wide transition-colors duration-200"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
        className="absolute bottom-0 left-0 right-0 z-10"
      >
        <div className="bg-bark-900/70 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 grid grid-cols-3 gap-4 sm:gap-8">
            {[
              { value: '28+', label: 'Years experience' },
              { value: '1,200+', label: 'Pieces crafted' },
              { value: '100%', label: 'Australian timber' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl text-wood-300 font-display">{value}</div>
                <div className="text-wood-500 text-xs sm:text-sm tracking-wide mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
