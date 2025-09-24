import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { profile } from '@/data/profile';

export const Education: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ivory-mist mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-slate-mute text-lg max-w-2xl mx-auto">
            Academic foundation in computer science and software engineering
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {profile.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="card-glow p-8 hover:scale-105 transition-elastic group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  {/* Left content */}
                  <div className="flex items-start space-x-4 mb-4 md:mb-0">
                    {/* Icon with shimmer effect */}
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                        <GraduationCap className="w-8 h-8 text-ink-navy" />
                      </div>
                      
                      {/* Shimmer effect on icon */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-ivory-mist/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity shimmer" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-ivory-mist mb-2 group-hover:text-teal-accent transition-smooth">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg font-semibold text-teal-accent mb-3">
                        {edu.school}
                      </h4>
                      
                      {/* Meta information */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-slate-mute text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.year}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right content - Achievement indicator */}
                  <div className="flex flex-col items-center md:items-end space-y-2">
                    <div className="px-4 py-2 bg-success-green/20 text-success-green rounded-full text-sm font-medium border border-success-green/30">
                      Graduate Degree
                    </div>
                    <div className="text-xs text-slate-mute">
                      Computer Science
                    </div>
                  </div>
                </div>

                {/* Progress indicator showing time since graduation */}
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-mute">Academic Foundation</span>
                    <span className="text-teal-accent">12+ Years Applied</span>
                  </div>
                  <div className="h-1.5 bg-charcoal rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: '90%' } : { width: 0 }}
                      transition={{ delay: 0.5 + index * 0.2, duration: 1.5 }}
                      className="h-full bg-gradient-primary rounded-full"
                    />
                  </div>
                </div>

                {/* Floating accent elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-teal-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity pulse-glow" />
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-royal-violet rounded-full opacity-0 group-hover:opacity-100 transition-opacity pulse-glow" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-gradient mb-2">
              M.S.
            </div>
            <p className="text-slate-mute">Computer Science</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-gradient mb-2">
              2024
            </div>
            <p className="text-slate-mute">Graduation Year</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-gradient mb-2">
              5+
            </div>
            <p className="text-slate-mute">Years in Industry</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};