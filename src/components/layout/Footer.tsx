import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bark-900 text-wood-200" role="contentinfo">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 border border-wood-500 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L2 8v10h6v-6h4v6h6V8L10 2z" fill="none" stroke="#cc9554" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="block text-wood-50 font-display text-lg leading-none">Big Wood Works</span>
                <span className="block text-wood-500 text-xs tracking-[0.15em] uppercase leading-none mt-0.5">Timber Craftsmen</span>
              </div>
            </Link>
            <p className="text-wood-400 text-sm leading-relaxed max-w-sm mb-6">
              Hand-crafted timber furniture and joinery made in Sydney, built to
              last generations. Every piece is a collaboration between the maker,
              the client, and the wood itself.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Big Wood Works on Instagram"
                className="text-wood-500 hover:text-wood-300 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Big Wood Works on Facebook"
                className="text-wood-500 hover:text-wood-300 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-wood-50 text-sm font-medium tracking-[0.12em] uppercase mb-5">
              Navigation
            </h3>
            <ul className="space-y-3" role="list">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Contact', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-wood-400 hover:text-wood-200 text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-wood-50 text-sm font-medium tracking-[0.12em] uppercase mb-5">
              Contact
            </h3>
            <ul className="space-y-4" role="list">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-wood-500 mt-0.5 shrink-0" />
                <span className="text-wood-400 text-sm leading-relaxed">
                  15 Timber Lane<br />
                  Marrickville NSW 2204
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-wood-500 shrink-0" />
                <a
                  href="tel:+61292345678"
                  className="text-wood-400 hover:text-wood-200 text-sm transition-colors"
                >
                  (02) 9234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-wood-500 shrink-0" />
                <a
                  href="mailto:hello@bigwoodworks.com.au"
                  className="text-wood-400 hover:text-wood-200 text-sm transition-colors"
                >
                  hello@bigwoodworks.com.au
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-wood-500 text-xs mb-1">Workshop hours</p>
              <p className="text-wood-400 text-sm">Mon–Fri 7am–5pm</p>
              <p className="text-wood-400 text-sm">Sat 8am–12pm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-bark-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-wood-600 text-xs">
            © {new Date().getFullYear()} Big Wood Works. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-wood-600 hover:text-wood-400 text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-wood-600 hover:text-wood-400 text-xs transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
