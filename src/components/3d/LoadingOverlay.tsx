import React, { useEffect, useMemo, useState } from 'react';
import { useProgress } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '@/data/profile';

interface LoadingOverlayProps {
  onComplete: () => void;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ onComplete }) => {
  const { progress } = useProgress();
  const [displayedName, setDisplayedName] = useState('');
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const [showLanguages, setShowLanguages] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Safe, memoized data access
  const languages = useMemo<string[]>(
    () => Array.isArray(profile.languages) ? profile.languages : [],
    []
  );
  const aiMlList = useMemo<string[]>(
    () => (profile as any)?.sceneMap?.aiMl ?? [],
    []
  );
  const aiMlFirst = aiMlList.length > 0 ? aiMlList[0] : 'AI/ML';

  // Add a little buffer so the bar feels responsive even when nothing heavy loads
  const targetProgress = Math.min(progress + 20, 100);
  const shouldTimeout = targetProgress < 90;

  // Typewriter effect for name
  useEffect(() => {
    if (!profile?.name) return;

    if (displayedName.length < profile.name.length) {
      const timer = setTimeout(() => {
        setDisplayedName(profile.name.slice(0, displayedName.length + 1));
      }, 100);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setShowLanguages(true), 500);
      return () => clearTimeout(timer);
    }
  }, [displayedName, profile?.name]);

  // Language rotation (only if we actually have languages)
  useEffect(() => {
    if (!showLanguages || languages.length === 0) return;
    const timer = setInterval(() => {
      setCurrentLanguageIndex((prev) => (prev + 1) % languages.length);
    }, 600);
    return () => clearInterval(timer);
  }, [showLanguages, languages.length]);

  // Auto-complete / exit logic
  useEffect(() => {
    // If loading is slow, bail out after a short branded moment
    if (shouldTimeout) {
      const timer = setTimeout(() => {
        setIsComplete(true);
        const done = setTimeout(onComplete, 1000);
        return () => clearTimeout(done);
      }, 2500);
      return () => clearTimeout(timer);
    }
    // If loading completes naturally
    if (targetProgress >= 100) {
      setIsComplete(true);
      const done = setTimeout(onComplete, 1000);
      return () => clearTimeout(done);
    }
  }, [targetProgress, shouldTimeout, onComplete]);

  const getStatusText = () => {
    if (targetProgress < 30) return 'Loading';
    if (targetProgress < 60) return 'Initializing';
    if (targetProgress < 90) return 'Preparing';
    return 'Ready';
  };

  const percentText = Math.round(targetProgress);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, hsl(var(--ink-navy)), hsl(var(--charcoal)))'
          }}
          aria-label="Loading overlay"
        >
          <div className="text-center space-y-8 max-w-2xl mx-auto px-8">
            {/* Name Banner with Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-2"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-ivory-mist typewriter">
                {displayedName}
              </h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: displayedName === profile.name ? 1 : 0 }}
                className="h-1 bg-gradient-primary mx-auto shimmer"
                style={{ width: 200 }}
              />
            </motion.div>

            {/* Orbiting Language Ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: showLanguages ? 1 : 0,
                scale: showLanguages ? 1 : 0.9
              }}
              className="relative h-40 flex items-center justify-center"
              aria-hidden={!showLanguages}
            >
              <div className="relative w-64 h-64">
                {/* The rotating container — this makes items orbit */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: showLanguages ? 360 : 0 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                >
                  {languages.map((language, index) => {
                    const angle = (index / (languages.length || 1)) * 2 * Math.PI;
                    const radius = 100;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                      <div
                        key={`${language}-${index}`}
                        className={[
                          'absolute -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300',
                          index === currentLanguageIndex
                            ? 'bg-teal-accent text-ink-navy scale-110 glow-effect'
                            : 'bg-charcoal text-slate-mute'
                        ].join(' ')}
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`
                        }}
                        title={language}
                      >
                        {language}
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>

            {/* Progress and Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="space-y-4"
            >
              {/* Progress Bar */}
              <div className="w-full max-w-md mx-auto">
                <div className="flex justify-between text-sm text-slate-mute mb-2">
                  <span>{getStatusText()}</span>
                  <span>{percentText}%</span>
                </div>
                <div className="h-2 bg-charcoal rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${targetProgress}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                </div>
              </div>

              {/* Status Line */}
              <div className="text-slate-mute text-sm" aria-live="polite">
                {getStatusText()} • {languages.length > 0 ? languages[currentLanguageIndex] : 'Loading…'} • {aiMlFirst}
              </div>
            </motion.div>

            {/* Reduced Motion Alternative (SR-only) */}
            <div className="sr-only" aria-live="polite">
              Loading {profile.name}'s portfolio. {percentText}% complete.
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
