import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profile } from '@/data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 bg-charcoal border-t border-border/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gradient">
              AISHWARYA UYYALA
            </h3>
            <p className="text-slate-mute leading-relaxed">
              Designing, Training & Shipping AI at Scale. 
              Building the future through intelligent systems and data-driven solutions.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/in/uyyala-aishwarya/', label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-ink-navy border border-border/20 flex items-center justify-center text-slate-mute hover:text-ivory-mist hover:border-teal-accent hover:bg-teal-accent/10 transition-smooth focus-ring glow-effect"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-ivory-mist">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Skills', href: '#skills' },
                { name: 'Certifications', href: '#certification' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-mute hover:text-teal-accent transition-smooth focus-ring rounded py-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-ivory-mist">Contact</h4>
            <div className="space-y-2 text-slate-mute">
              <p>{profile.email}</p>
              <p>{profile.phone}</p>
              <p>{profile.location}</p>
            </div>
            <div className="pt-4">
              <a
                href="/assets/Aishwarya_resume.pdf"
                download
                className="inline-flex items-center px-4 py-2 bg-gradient-primary text-ink-navy font-medium rounded-lg hover:scale-105 transition-elastic focus-ring"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-mute text-sm"
            >
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 text-xs text-slate-mute"
            >
              <span>Built with</span>
              <div className="flex items-center space-x-2">
                {['React', 'TypeScript', 'Three.js', 'Tailwind'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-ink-navy rounded border border-border/20 hover:border-teal-accent/50 transition-smooth"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-8 right-8"
      >
        <Button
          onClick={scrollToTop}
          size="lg"
          className="w-12 h-12 rounded-full bg-gradient-primary text-ink-navy hover:scale-110 transition-elastic focus-ring shadow-elegant"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-teal-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-royal-violet/5 rounded-full blur-2xl" />
    </footer>
  );
};