import React, { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Layout Components
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/ui/ScrollToTop';

// Section Components
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Certification } from '@/components/sections/Certification';
import { Education } from '@/components/sections/Education';
import {Recommendations} from '@/components/sections/Recommendations';
import { Contact } from '@/components/sections/Contact';

// 3D Components
import { LoadingOverlay } from '@/components/3d/LoadingOverlay';

const Portfolio: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = () => setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    // Initialize AOS only if motion is not reduced
    if (!mediaQuery.matches) {
      AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
      });
    }

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      AOS.refresh();
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    
    // Refresh AOS after loading is complete
    if (!reducedMotion) {
      setTimeout(() => AOS.refresh(), 100);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Loading Overlay */}
      {isLoading && (
        <Suspense fallback={<div className="fixed inset-0 bg-ink-navy" />}>
          <LoadingOverlay onComplete={handleLoadingComplete} />
        </Suspense>
      )}

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <Header />

        {/* Main Sections */}
        <main>
          {/* Hero Section */}
          <section data-aos={!reducedMotion ? "fade-up" : undefined}>
            <Hero />
          </section>

          {/* About Section */}
          <section data-aos={!reducedMotion ? "fade-up" : undefined}>
            <About />
          </section>

          {/* Experience Section */}
          <section data-aos={!reducedMotion ? "fade-up" : undefined}>
            <Experience />
          </section>

          {/* Projects Section */}
          <section data-aos={!reducedMotion ? "fade-up" : undefined}>
            <Projects />
          </section>

          {/* Skills Section */}
          <section data-aos={!reducedMotion ? "fade-up" : undefined}>
            <Skills />
          </section>

          {/* Certification Section */}
          <section data-aos={!reducedMotion ? "fade-up" : undefined}>
            <Certification />
          </section>

          {/* Education Section */}
          <section data-aos={!reducedMotion ? "fade-up" : undefined}>
            <Education />
          </section>

           <section data-aos={!reducedMotion ? "fade-up" : undefined}>
            <Recommendations />
          </section>


          {/* Contact Section */}
          <section data-aos={!reducedMotion ? "fade-up" : undefined}>
            <Contact />
          </section>
        </main>

        {/* Footer */}
        <Footer />

        {/* Scroll to Top FAB */}
        <ScrollToTop />
      </motion.div>

      {/* Cursor Progress Indicator (subtle) */}
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-gradient-primary z-50 origin-left"
        style={{
          scaleX: 0
        }}
        animate={{
          scaleX: typeof window !== 'undefined' ? window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) : 0
        }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
};

export default Portfolio;