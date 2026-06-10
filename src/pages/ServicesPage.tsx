import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Armchair, LayoutGrid, Home, Trees, Wrench, Building2, ArrowRight,
} from 'lucide-react';
import { services } from '../data/content';
import { CtaSection } from '../components/sections/CtaSection';
import { ProcessSection } from '../components/sections/ProcessSection';

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  armchair: Armchair,
  'layout-grid': LayoutGrid,
  home: Home,
  trees: Trees,
  wrench: Wrench,
  'building-2': Building2,
};

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Services — Big Wood Works';
  }, []);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-bark-900/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl text-wood-50 mb-4">Services</h1>
            <div className="h-0.5 w-12 bg-wood-400 mb-5" />
            <p className="text-wood-200 text-lg max-w-xl leading-relaxed">
              From a single piece of furniture to a complete commercial fit-out — if it involves timber, we can build it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div ref={ref} className="space-y-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.07 }}
                  className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start py-10 border-b border-wood-100 last:border-b-0"
                >
                  <div className="flex items-center gap-5 lg:col-span-1">
                    <div className="w-12 h-12 bg-wood-100 flex items-center justify-center shrink-0">
                      {Icon && <Icon size={22} className="text-wood-600" />}
                    </div>
                    <h2 className="text-xl text-bark-900 lg:hidden">{service.title}</h2>
                  </div>
                  <div className="lg:col-span-3">
                    <h2 className="hidden lg:block text-2xl text-bark-900 mb-3">{service.title}</h2>
                    <p className="text-bark-600 leading-relaxed mb-4">{service.description}</p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-wood-600 hover:text-wood-800 text-sm font-medium transition-colors"
                    >
                      Enquire about this service
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timber species */}
      <section className="py-24 bg-parchment">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-wood-500 text-sm tracking-[0.15em] uppercase mb-4 block">Materials</span>
              <h2 className="text-4xl md:text-5xl text-bark-900 leading-tight mb-6">
                Australian hardwoods, sustainably sourced
              </h2>
              <div className="h-0.5 w-12 bg-wood-500 mb-6" />
              <p className="text-bark-600 leading-relaxed mb-8">
                We work exclusively with Australian hardwood species certified by the
                Forest Stewardship Council. Each board is selected by hand for grain,
                figure, and character.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Australian Blackwood', colour: '#5C3D1E' },
                  { name: 'Spotted Gum', colour: '#7A5C3C' },
                  { name: 'White Ash', colour: '#C8A97A' },
                  { name: 'Iron Bark', colour: '#3A2A1A' },
                  { name: 'Jarrah', colour: '#8B4513' },
                  { name: 'Tasmanian Oak', colour: '#B8914C' },
                ].map(({ name, colour }) => (
                  <div key={name} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full shrink-0" style={{ backgroundColor: colour }} />
                    <span className="text-bark-700 text-sm">{name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Selection of Australian hardwood timber samples showing grain and colour variation"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <ProcessSection />
      <CtaSection />
    </>
  );
};

export default ServicesPage;
