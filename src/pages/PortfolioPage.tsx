import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';
import { X } from 'lucide-react';
import { projects } from '../data/content';
import { CtaSection } from '../components/sections/CtaSection';

const categories = ['All', 'Furniture', 'Cabinetry', 'Millwork', 'Outdoor', 'Commercial', 'Restoration'];

interface ProjectModalProps {
  project: (typeof projects)[0];
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
      >
        <div className="absolute inset-0 bg-bark-900/85 backdrop-blur-sm" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="relative bg-cream max-w-3xl w-full overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={project.imageUrl.replace('w=800', 'w=1200')}
              alt={project.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <span className="text-wood-500 text-xs tracking-[0.15em] uppercase">{project.category}</span>
            <h2 className="text-3xl text-bark-900 mt-1 mb-3">{project.title}</h2>
            <p className="text-bark-600 leading-relaxed">{project.description}</p>
          </div>
          <button
            className="absolute top-4 right-4 bg-bark-900/70 hover:bg-bark-900 text-wood-100 p-2 transition-colors"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  useEffect(() => {
    document.title = 'Portfolio — Big Wood Works';
  }, []);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=80"
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-bark-900/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl text-wood-50 mb-4">Portfolio</h1>
            <div className="h-0.5 w-12 bg-wood-400 mb-5" />
            <p className="text-wood-200 text-lg max-w-xl leading-relaxed">
              A selection of pieces we've built for clients across Sydney and beyond. Each one is a collaboration between maker, client, and material.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-12" role="tablist" aria-label="Filter by category">
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
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="group cursor-pointer overflow-hidden bg-wood-50"
                  onClick={() => setSelectedProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
                  aria-label={`View ${project.title}`}
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={project.imageUrl}
                      alt={project.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-bark-900/0 group-hover:bg-bark-900/30 transition-all duration-300 flex items-center justify-center">
                      <span className="text-wood-50 text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-bark-900/70 px-4 py-2">
                        View project
                      </span>
                    </div>
                    <span className="absolute top-3 left-3 bg-bark-900/80 text-wood-200 text-xs px-2.5 py-1 tracking-wide">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h2 className="text-lg text-bark-900 mb-1.5">{project.title}</h2>
                    <p className="text-bark-600 text-sm leading-relaxed line-clamp-2">{project.description}</p>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      <CtaSection />
    </>
  );
};

export default PortfolioPage;
