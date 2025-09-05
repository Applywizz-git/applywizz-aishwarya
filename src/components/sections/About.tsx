import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { profile } from '@/data/profile';

const highlights = [
  { label: 'Years Experience', value: '5+', icon: '🚀' },
  { label: 'Models Shipped', value: '50+', icon: '🤖' },
  { label: 'System Uptime', value: '99.5%', icon: '⚡' },
  { label: 'Cost Optimization', value: '60%', icon: '💰' }
];

const impactAreas = [
  { title: 'Impact', description: 'Measurable business outcomes through AI/ML solutions', icon: '🎯' },
  { title: 'Reliability', description: '99.5% uptime across production ML systems', icon: '🛡️' },
  { title: 'Privacy', description: 'GDPR & SOC2 compliant data processing pipelines', icon: '🔒' },
  { title: 'Optimization', description: '60% cost reduction through efficient architectures', icon: '⚡' }
];

export const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ivory-mist mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {profile.about.map((paragraph, index) => (
              <p key={index} className="text-slate-mute text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
            
            {/* Impact Areas Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {impactAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="card-glow p-4"
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl" role="img" aria-label={area.title}>
                      {area.icon}
                    </span>
                    <div>
                      <h4 className="font-semibold text-ivory-mist mb-1">
                        {area.title}
                      </h4>
                      <p className="text-sm text-slate-mute">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats/Counters */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="card-glow text-center p-6 hover:scale-105 transition-elastic"
              >
                <div className="text-4xl mb-2" role="img" aria-label={stat.label}>
                  {stat.icon}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-3xl font-bold text-gradient mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-slate-mute text-sm font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};