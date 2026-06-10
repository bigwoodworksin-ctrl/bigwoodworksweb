import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { projects } from '../../data/content';

const categories = ['All', 'Furniture', 'Cabinetry', 'Millwork', 'Outdoor', 'Commercial', 'Restoration'];

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 lg:py-32 bg-parchment" id="portfolio">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeading
            eyebrow="Our work"
            title="Recent commissions"
            subtitle="A selection of pieces we've made for clients across Sydney and beyond."
            align="center"
          />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist" aria-label="Filter projects by category">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm tracking-wide transition-colors duration-200 ${
                activeCategory === cat
                  ? 'bg-bark-900 text-wood-50'
                  : 'bg-wood-100 text-bark-700 hover:bg-wood-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group overflow-hidden bg-wood-50"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-bark-900/0 group-hover:bg-bark-900/25 transition-colors duration-300" />
                  <span className="absolute top-3 left-3 bg-bark-900/80 text-wood-200 text-xs px-2.5 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg text-bark-900 mb-1.5">{project.title}</h3>
                  <p className="text-bark-600 text-sm leading-relaxed">{project.description}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 bg-bark-900 hover:bg-bark-800 text-wood-50 px-8 py-3.5 text-base tracking-wide transition-colors"
          >
            View full portfolio
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
