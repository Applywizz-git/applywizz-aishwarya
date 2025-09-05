import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TypewriterText } from '@/components/ui/TypewriterText';
import { RotatingText } from '@/components/ui/RotatingText';
import { Scene3D } from '@/components/3d/Scene3D';
import { profile } from '@/data/profile';
import AishwaryaImg from '@/assets/Aishwarya-image1.png';
import AishwaryaImg2 from '@/assets/Aishwarya-image2.jpg';

const rotatingKeywords = ['LLMs', 'MLOps', 'Vector Search', 'Streaming', 'GenAI'];

export const Hero: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [hoverCapable, setHoverCapable] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false); // for tap/keyboard toggle

  useEffect(() => {
    // Reduced motion
    const motionMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
    const setRM = () => setReducedMotion(motionMQ.matches);
    setRM();
    motionMQ.addEventListener('change', setRM);

    // Detect hover capability (desktop vs touch)
    const hoverMQ = window.matchMedia('(hover: hover) and (pointer: fine)');
    const setHC = () => setHoverCapable(hoverMQ.matches);
    setHC();
    hoverMQ.addEventListener('change', setHC);

    return () => {
      motionMQ.removeEventListener('change', setRM);
      hoverMQ.removeEventListener('change', setHC);
    };
  }, []);

  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Tap/keyboard toggle (mobile + accessibility)
  const toggleFlip = () => {
    if (reducedMotion) return; // keep it simple if user prefers reduced motion
    setIsFlipped((v) => !v);
  };

  const onKeyFlip: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFlip();
    }
  };

  // The card rotation is controlled by:
  // - Desktop (hover capable): whileHover rotates (no state needed)
  // - Mobile / touch (no hover): animate based on isFlipped state
  const flipAnimate = hoverCapable
    ? undefined
    : { rotateY: isFlipped ? 180 : 0 };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Background */}
      {!reducedMotion && (
        <Scene3D className="absolute inset-0 -z-10" enableMotion={!reducedMotion} opacity={0.15} />
      )}

      {/* Fallback gradient for reduced motion */}
      {reducedMotion && <div className="absolute inset-0 -z-10 bg-gradient-hero" />}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:order-2 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-slate-mute text-lg mb-2"
            >
              Hello, I'm {profile.name}
            </motion.p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <TypewriterText
                text="Designing, Training & Shipping AI at Scale"
                speed={50}
                delay={500}
                onComplete={() => setShowContent(true)}
                className="text-ivory-mist"
              />
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl mb-8"
            >
              <span className="text-slate-mute">Specializing in </span>
              <RotatingText words={rotatingKeywords} className="font-semibold" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ delay: 0.7 }}
              className="text-slate-mute text-lg mb-8 max-w-2xl"
            >
              {profile.title} with {5}+ years of experience building end-to-end ML systems,
              from data pipelines to production deployment at scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button onClick={handleScrollToProjects} className="btn-hero group" size="lg">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-slate-mute text-slate-mute hover:border-teal-accent hover:text-teal-accent transition-smooth focus-ring"
                asChild
              >
                <a href="/assets/Aishwarya_resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ delay: 1.1 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-sm text-slate-mute"
            >
              <span>📍 {profile.location}</span>
              <span>✉️ {profile.email}</span>
            </motion.div>
          </motion.div>

          {/* Hero Image Flip Card (hover on desktop, tap on mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:order-1 relative"
          >
            <div
              className="relative mx-auto max-w-md lg:max-w-none group"
              style={{ perspective: 1000 }}
            >
              {/* Glow behind the card */}
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl scale-110" />

              {/* Flip inner */}
              <motion.div
                // Desktop (hover-capable): flip on hover
                whileHover={
                  hoverCapable && !reducedMotion ? { rotateY: 180 } : undefined
                }
                // Mobile/touch: animate based on state
                animate={flipAnimate}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="relative z-10 rounded-2xl shadow-elegant cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
                onClick={!hoverCapable ? toggleFlip : undefined}
                onKeyDown={!hoverCapable ? onKeyFlip : undefined}
                role={!hoverCapable ? 'button' : undefined}
                tabIndex={!hoverCapable ? 0 : -1}
                aria-pressed={!hoverCapable ? isFlipped : undefined}
                aria-label="Profile image card. Tap to flip."
              >
                {/* Front face */}
                <img
                  src={AishwaryaImg}
                  alt={`${profile.name} — Image 1`}
                  className="w-full h-auto rounded-2xl [backface-visibility:hidden] select-none"
                />

                {/* Back face */}
                <img
                  src={AishwaryaImg2}
                  alt={`${profile.name} — Image 2`}
                  className="absolute inset-0 w-full h-auto rounded-2xl [backface-visibility:hidden] select-none"
                  style={{ transform: 'rotateY(180deg)' }}
                />
              </motion.div>

              {/* Floating accent elements */}
              {!reducedMotion && (
                <>
                  <motion.div
                    animate={{ y: [-20, 20, -20] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-4 -right-4 w-16 h-16 bg-teal-accent/20 rounded-full blur-xl"
                  />
                  <motion.div
                    animate={{ y: [20, -20, 20] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -bottom-4 -left-4 w-20 h-20 bg-royal-violet/20 rounded-full blur-xl"
                  />
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-mute rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-teal-accent rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
