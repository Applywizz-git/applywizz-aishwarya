

"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { RotatingText } from "@/components/ui/RotatingText";
import { Scene3D } from "@/components/3d/Scene3D";
import { profile } from "@/data/profile";
import AishwaryaImg from "@/assets/aishwaryaimage3-removebg-preview (1).png";
// aishwaryaimage3-removebg-preview (1).png

const rotatingKeywords = ["LLMs", "MLOps", "Vector Search", "Streaming", "GenAI"];

const highlights = [
  { label: "Years Experience", value: "5+", icon: "🚀" },
  { label: "Models Shipped", value: "50+", icon: "🤖" },
  { label: "System Uptime", value: "99.5%", icon: "⚡" },
  { label: "Cost Optimization", value: "60%", icon: "💰" },
];

export const Hero: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motionMQ = window.matchMedia("(prefers-reduced-motion: reduce)");
    const setRM = () => setReducedMotion(motionMQ.matches);
    setRM();
    motionMQ.addEventListener("change", setRM);
    return () => motionMQ.removeEventListener("change", setRM);
  }, []);

  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center overflow-hidden">
      {!reducedMotion && <Scene3D className="absolute inset-0 -z-10" />}

      <div className="z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-left">
          {/* RIGHT: Text content - shown first on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:order-2 text-center lg:text-left order-1"
          >
            <motion.p className="text-slate-mute text-4xl mb-2">
              Hello, I'm {profile.name}
            </motion.p>

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
              <TypewriterText
                text="Designing, Training & Shipping AI at Scale"
                speed={30}
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
              "Full-stack Software Engineer with 5+ years designing cloud solutions and ML systems,
              from robust data pipelines to high-performance production deployment at scale"
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

          {/* LEFT: Profile image and highlights - shown second on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:order-1 flex justify-center order-2 mt-10 lg:mt-0"
          >
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
              {/* On mobile: show profile image first, then highlights */}
              <div className="lg:hidden flex flex-col items-center gap-6">
                {/* Profile image */}
                <div className="mt-4">
                  <img
                    src={AishwaryaImg}
                    alt={`${profile.name} — Profile`}
                    className="w-full h-full md:w-full md:h-full object-cover rounded-2xl shadow-lg select-none"
                  />
                </div>
                
                {/* Steps column */}
                <div className="flex flex-col items-center gap-2">
                  {highlights.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: showContent ? 1 : 0, x: showContent ? 0 : -12 }}
                      transition={{ delay: 0.4 + idx * 0.12 }}
                      className="flex items-center gap-4"
                    >
                      {/* Badge + connector */}
                      <div className="flex flex-col items-center">
                        {/* Numbered badge */}
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-accent text-black font-semibold text-sm">
                          {idx + 1}
                        </div>
                        {/* connector line (hidden on last) */}
                        {idx < highlights.length - 1 && (
                          <div className="w-px h-6 bg-white/20 mt-2" />
                        )}
                      </div>

                      {/* Card content (compact) */}
                      <div className="bg-white/6 border border-white/10 rounded-lg px-3 py-2 shadow-sm min-w-[10rem]">
                        <div className="text-sm font-semibold text-ivory-mist leading-tight">
                          {item.value}
                        </div>
                        <div className="text-xs text-slate-mute mt-0.5">{item.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* On desktop: show highlights left, profile image right */}
              <div className="hidden lg:flex flex-col lg:flex-row items-center lg gap-6">
                {/* Steps column (left on lg) */}
                <div className="flex flex-col items-start gap-2 ml-8">
                  {highlights.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: showContent ? 1 : 0, x: showContent ? 0 : -12 }}
                      transition={{ delay: 0.4 + idx * 0.12 }}
                      className="flex items-start gap-4"
                    >
                      {/* Badge + connector */}
                      <div className="flex flex-col items-center">
                        {/* Numbered badge */}
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-accent text-black font-semibold text-sm">
                          {idx + 1}
                        </div>
                        {/* connector line (hidden on last) */}
                        {idx < highlights.length - 1 && (
                          <div className="w-px h-6 bg-white/20 mt-2" />
                        )}
                      </div>

                      {/* Card content (compact) */}
                      <div className="bg-white/6 border border-white/10 rounded-lg px-3 py-2 shadow-sm min-w-[10rem]">
                        <div className="text-sm font-semibold text-ivory-mist leading-tight">
                          {item.value}
                        </div>
                        <div className="text-xs text-slate-mute mt-0.5">{item.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Profile image (right on lg) */}
                <div className="mt-4 lg:mt-0">
                  <img
                    src={AishwaryaImg}
                    alt={`${profile.name} — Profile`}
                    className="w-full h-full object-cover rounded-2xl shadow-lg select-none"
                  />
                </div>
              </div>
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







