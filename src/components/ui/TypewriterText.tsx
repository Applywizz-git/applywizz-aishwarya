import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  onComplete?: () => void;
  showCursor?: boolean;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  delay = 0,
  speed = 100,
  className = '',
  onComplete,
  showCursor = true
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      let index = 0;
      const typeTimer = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typeTimer);
          setIsComplete(true);
          onComplete?.();
        }
      }, speed);

      return () => clearInterval(typeTimer);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [text, delay, speed, onComplete]);

  return (
    <span className={`${className} ${showCursor && !isComplete ? 'typewriter' : ''}`}>
      {displayedText}
      {showCursor && isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          className="text-teal-accent"
        >
          |
        </motion.span>
      )}
    </span>
  );
};