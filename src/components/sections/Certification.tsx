import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Award, Calendar } from 'lucide-react';
import { profile } from '@/data/profile';

export const Certification: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certification" className="py-10 bg-gradient-subtle">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ivory-mist mb-6">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-slate-mute text-lg max-w-2xl mx-auto">
            Professional certifications demonstrating expertise in AI/ML engineering
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profile.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="card-glow p-6 h-full hover:scale-105 transition-elastic relative overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-teal-accent/20 to-transparent" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Award className="w-6 h-6 text-ink-navy" />
                      </div>
                      <div>
                        <h3 className="font-bold text-ivory-mist group-hover:text-teal-accent transition-smooth">
                          {cert.name}
                        </h3>
                        <p className="text-sm text-slate-mute">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 mb-4">
                    {cert.id && (
                      <div className="flex items-center text-sm text-slate-mute">
                        <span className="font-medium mr-2">ID:</span>
                        <code className="bg-charcoal px-2 py-1 rounded text-teal-accent">
                          {cert.id}
                        </code>
                      </div>
                    )}
                    
                    <div className="flex items-center text-sm text-slate-mute">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Issued: {cert.date}</span>
                    </div>
                  </div>

                  {/* Progress bar showing recency */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-mute">Issued</span>
                      <span className="text-success-green">Current</span>
                    </div>
                    <div className="h-1.5 bg-charcoal rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '85%' } : { width: 0 }}
                        transition={{ delay: 0.5 + index * 0.2, duration: 1 }}
                        className="h-full bg-gradient-to-r from-teal-accent to-success-green rounded-full"
                      />
                    </div>
                  </div>

                  {/* Badge glow on hover */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-success-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity pulse-glow" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">
                {profile.certifications.length}
              </div>
              <p className="text-slate-mute">Professional Certifications</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">
                3
              </div>
              <p className="text-slate-mute">Major Cloud Platforms</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">
                2024
              </div>
              <p className="text-slate-mute">Latest Certification</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};