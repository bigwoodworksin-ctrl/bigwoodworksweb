import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Armchair,
  LayoutGrid,
  Home,
  Trees,
  Wrench,
  Building2,
  ArrowRight,
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { services } from '../../data/content';

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  armchair: Armchair,
  'layout-grid': LayoutGrid,
  home: Home,
  trees: Trees,
  wrench: Wrench,
  'building-2': Building2,
};

export const ServicesSection: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 lg:py-32 bg-cream" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 lg:mb-20">
          <SectionHeading
            eyebrow="What we do"
            title="Every kind of timber work"
            subtitle="From a single heirloom chair to a complete kitchen fit-out, our workshop handles commissions of every scale."
            align="center"
          />
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.07, ease: 'easeOut' }}
                className="group bg-wood-50 border border-wood-100 hover:border-wood-300 p-8 transition-all duration-300 hover:shadow-md"
              >
                <div className="w-11 h-11 bg-wood-100 group-hover:bg-wood-200 flex items-center justify-center mb-5 transition-colors duration-300">
                  {Icon && <Icon size={22} className="text-wood-600" />}
                </div>
                <h3 className="text-xl text-bark-900 mb-3">{service.title}</h3>
                <p className="text-bark-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-wood-600 hover:text-wood-800 font-medium text-base transition-colors"
          >
            See all services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
