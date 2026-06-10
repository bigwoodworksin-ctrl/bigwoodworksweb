import React, { useEffect } from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { AboutSection } from '../components/sections/AboutSection';
import { PortfolioSection } from '../components/sections/PortfolioSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { CtaSection } from '../components/sections/CtaSection';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Big Wood Works — Timber Craftsmen, Sydney';
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
};

export default HomePage;
