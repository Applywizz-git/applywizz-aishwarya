import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { profile } from '@/data/profile';

export const Experience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ivory-mist mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-slate-mute text-lg max-w-2xl mx-auto">
            Over a decade of building scalable AI/ML systems across fintech, payments, and telecommunications
          </p>
        </motion.div>

       

        <div>
  <div className="space-y-8">
    {profile.experience.map((exp, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ delay: index * 0.15 }}
        className="w-full"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ delay: index * 0.15 + 0.1 }}
          className="card-glow p-6 lg:p-8 w-full"
        >
          {/* Company & Role */}
          <div className="mb-4">
            <h3 className="text-xl lg:text-2xl font-bold text-ivory-mist mb-2">
              {exp.role}
            </h3>
            <h4 className="text-lg font-semibold text-teal-accent mb-2">
              {exp.company}
            </h4>

            {/* Meta info */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-slate-mute text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{exp.dates}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{exp.location}</span>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <ul className="space-y-2 mb-6">
            {exp.highlights.slice(0, 4).map((highlight, hIndex) => (
              <motion.li
                key={hIndex}
                initial={{ opacity: 0, x: 12 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 }}
                transition={{ delay: index * 0.15 + 0.2 + hIndex * 0.05 }}
                className="flex items-start space-x-2 text-slate-mute"
              >
                <span className="text-teal-accent text-xs mt-2">▶</span>
                <span className="text-sm leading-relaxed">{highlight}</span>
              </motion.li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, techIndex) => (
              <motion.span
                key={tech + techIndex}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
                transition={{ delay: index * 0.15 + 0.35 + techIndex * 0.04 }}
                className="px-3 py-1 bg-royal-violet/20 text-royal-violet text-xs font-medium rounded-full border border-royal-violet/30 hover:bg-royal-violet/30 transition-smooth"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};