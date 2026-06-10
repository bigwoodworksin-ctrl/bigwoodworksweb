import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '../../data/content';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const isHome = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-bark-900/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          aria-label="Big Wood Works — home"
        >
          <div className="w-9 h-9 border border-wood-400 flex items-center justify-center shrink-0">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L2 8v10h6v-6h4v6h6V8L10 2z" fill="none" stroke="#cc9554" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <span className="block text-wood-50 font-display text-xl leading-none tracking-wide">
              Big Wood Works
            </span>
            <span className="block text-wood-400 text-xs tracking-[0.18em] uppercase leading-none mt-0.5">
              Timber Craftsmen
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <Link
                to={href}
                className={`text-sm tracking-wide transition-colors duration-200 ${
                  location.pathname === href
                    ? 'text-wood-400'
                    : 'text-wood-100 hover:text-wood-400'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-wood-600 hover:bg-wood-700 active:bg-wood-800 text-wood-50 text-sm tracking-wide px-5 py-2.5 transition-colors duration-200"
        >
          Get a Quote
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-wood-100 hover:text-wood-400 transition-colors p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-bark-900 border-t border-bark-700"
          >
            <ul className="flex flex-col" role="list">
              {navItems.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    to={href}
                    className={`block px-6 py-4 text-base border-b border-bark-800 transition-colors duration-150 ${
                      location.pathname === href
                        ? 'text-wood-400 bg-bark-800'
                        : 'text-wood-100 hover:text-wood-400 hover:bg-bark-800'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="p-6">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-wood-600 hover:bg-wood-700 text-wood-50 py-3 tracking-wide transition-colors"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
