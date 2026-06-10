import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Page not found — Big Wood Works';
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-cream pt-20">
      <div className="text-center px-6">
        <div className="text-9xl font-display text-wood-200 leading-none mb-4">404</div>
        <h1 className="text-3xl text-bark-900 mb-4">Page not found</h1>
        <p className="text-bark-600 max-w-md mx-auto mb-8 leading-relaxed">
          This page must have been moved or removed. Let us help you find your way back to the workshop.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-wood-700 hover:bg-wood-800 text-wood-50 px-8 py-3.5 tracking-wide transition-colors"
        >
          Back to home
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
