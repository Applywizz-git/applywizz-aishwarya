import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { profile } from '@/data/profile';

export const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Show success toast with confetti effect
    toast({
      title: "Message Sent! 🎉",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);

    // Trigger confetti effect (you can add a confetti library here)
    // For now, we'll show a simple success animation
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ivory-mist mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-slate-mute text-lg max-w-2xl mx-auto">
            Ready to discuss your next AI/ML project? Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-ivory-mist mb-6">
                Get in Touch
              </h3>
              <p className="text-slate-mute leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, challenging projects,
                or just chatting about the latest in AI/ML. Feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
                { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
                { icon: MapPin, label: 'Location', value: profile.location, href: null }
              ].map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 card-glow hover:scale-105 transition-elastic group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <contact.icon className="w-6 h-6 text-ink-navy" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-mute">{contact.label}</p>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-ivory-mist hover:text-teal-accent transition-smooth focus-ring rounded"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-ivory-mist">{contact.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-ivory-mist mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/uyyala-aishwarya/' },
                  { icon: Mail, label: 'Email', href: `mailto:${profile.email}` }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank" // 👈 Opens in new tab
                    rel="noopener noreferrer" // 👈 Prevents security risks
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-charcoal border border-border/20 flex items-center justify-center text-slate-mute hover:text-ivory-mist hover:border-teal-accent hover:bg-teal-accent/10 transition-smooth focus-ring glow-effect"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4 }}
            className="card-glow p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-ivory-mist">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-charcoal border-border/20 text-ivory-mist focus:border-teal-accent focus:ring-teal-accent"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-ivory-mist">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-charcoal border-border/20 text-ivory-mist focus:border-teal-accent focus:ring-teal-accent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-ivory-mist">
                  Subject *
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-charcoal border-border/20 text-ivory-mist focus:border-teal-accent focus:ring-teal-accent"
                  placeholder="What's this about?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-ivory-mist">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-charcoal border-border/20 text-ivory-mist focus:border-teal-accent focus:ring-teal-accent resize-none"
                  placeholder="Tell me about your project, ideas, or just say hello!"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-hero group"
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-ink-navy border-t-transparent rounded-full mr-2"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </Button>

              <p className="text-xs text-slate-mute text-center">
                Your message will be sent securely. I typically respond within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};