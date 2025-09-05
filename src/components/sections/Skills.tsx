import React, { useMemo, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { Scene3D } from "@/components/3d/Scene3D";
import { profile } from "@/data/profile";
import {
  Sparkles,
  Search,
  Filter,
  ChevronRight,
  Layers,
  Brain,
  Boxes,
  Cloud,
  Code2,
  Database,
  Settings,
  Rocket,
  Gauge,
} from "lucide-react";

const categoryIcon: Record<string, React.ElementType> = {
  "Programming & Scripting": Code2,
  "Frontend Development": Layers,
  "Backend Development": Settings,
  "Cloud & DevOps": Cloud,
  Databases: Database,
  "Testing & QA": Gauge,
  "Architecture & Design": Boxes,
  "AI/ML & Data Science": Brain,
  "Collaboration & Tools": Rocket,
  "Operating Systems": Settings,
};

// Soft gradient ring used behind the headline
const Halo: React.FC<{ className?: string }> = ({ className }) => (
  <div
    className={
      "pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(147,61,242,0.25),transparent_60%)] " +
      (className ?? "")
    }
  />
);

const skillCategories = Object.keys(profile.skills);

export const Skills: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [q, setQ] = useState("");
  const [showTopOnly, setShowTopOnly] = useState(false);

  // Normalize some resume-derived stats
  const totalLanguages = profile.languages?.length ?? 0;
  const aiCatKey =
    skillCategories.find((k) => k.toLowerCase().includes("ai/ml")) ||
    skillCategories.find((k) => k.toLowerCase().includes("data")) ||
    "";
  const aiToolCount = aiCatKey ? (profile.skills as any)[aiCatKey]?.length ?? 0 : 0;
  const cloudCatKey = skillCategories.find((k) => k.toLowerCase().includes("cloud")) || "";
  const cloudCount = cloudCatKey ? (profile.skills as any)[cloudCatKey]?.length ?? 0 : 0;
  const yearsExp = 5; // as per resume summary (5+ years)

  // Precompute a flat list for global search
  const searchable = useMemo(() => {
    return skillCategories.map((cat) => ({
      cat,
      items: (profile.skills as any)[cat] as string[],
    }));
  }, []);

  const filtered = useMemo(() => {
    const ql = q.trim().toLowerCase();
    return searchable
      .filter(({ cat }) => !activeCategory || cat === activeCategory)
      .map(({ cat, items }) => {
        const base = items || [];
        const pruned = ql
          ? base.filter((s) => s.toLowerCase().includes(ql))
          : base;
        return { cat, items: pruned };
      })
      .filter(({ items }) => items.length > 0);
  }, [searchable, activeCategory, q]);

  // Determine a deterministic set of "top" skills (first 5 in each category)
  const isTop = (index: number) => index < 5;

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Subtle animated 3D background */}
      <Scene3D className="absolute inset-0 -z-10" enableMotion opacity={0.08} />
      <Halo />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="mt-5 text-3xl md:text-4xl font-bold text-ivory-mist tracking-tight">
            Technical Skills & Domain Expertise
          </h2>
          <p className="mt-3 text-slate-mute max-w-2xl mx-auto">
            Full‑stack engineering, cloud, and applied AI/ML — crafted for real business outcomes.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10"
        >
          {/* Category chips */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth focus-ring border ${
                activeCategory === null
                  ? "bg-teal-accent text-ink-navy border-transparent"
                  : "bg-charcoal text-slate-mute hover:text-ivory-mist border-border/30"
              }`}
            >
              All
            </button>
            {skillCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth focus-ring border ${
                  activeCategory === category
                    ? "bg-teal-accent text-ink-navy border-transparent"
                    : "bg-charcoal text-slate-mute hover:text-ivory-mist border-border/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search & toggles */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-mute" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search a skill (e.g., Spring, LangChain)"
                className="w-full md:w-72 pl-10 pr-3 py-2 rounded-xl bg-charcoal border border-border/30 text-sm text-ivory-mist placeholder:text-slate-mute focus:outline-none focus:ring-2 focus:ring-teal-accent/40"
              />
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map(({ cat, items }, categoryIndex) => {
              const Icon = categoryIcon[cat] || Boxes;
              return (
                <motion.div
                  key={cat}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.15 + categoryIndex * 0.06 }}
                  className="relative group rounded-2xl p-6 border border-border/30 bg-gradient-to-b from-black/20 to-black/5 backdrop-blur card-glow"
                >
                  {/* Card header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl grid place-items-center bg-ink-navy/60 border border-border/30">
                        <Icon className="h-5 w-5 text-teal-accent" />
                      </div>
                      <h3 className="text-lg font-semibold text-ivory-mist">{cat}</h3>
                    </div>
                    <span className="text-xs rounded-full px-2 py-1 bg-charcoal text-slate-mute border border-border/20">
                      {items.length} skills
                    </span>
                  </div>

                  {/* Chips */}
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill: string, idx: number) => {
                      const top = isTop(idx);
                      if (showTopOnly && !top) return null;

                      // highlight search text
                      const i = q ? skill.toLowerCase().indexOf(q.toLowerCase()) : -1;
                      const hasMatch = i >= 0;
                      const before = hasMatch ? skill.slice(0, i) : skill;
                      const match = hasMatch ? skill.slice(i, i + q.length) : "";
                      const after = hasMatch ? skill.slice(i + q.length) : "";

                      return (
                        <motion.button
                          key={skill}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.25 + categoryIndex * 0.06 + idx * 0.025 }}
                          className={`relative px-3 py-2 rounded-lg text-xs font-medium border focus-ring transition-smooth ${
                            top
                              ? "bg-royal-violet/20 text-royal-violet border-royal-violet/40 hover:bg-royal-violet/30"
                              : "bg-charcoal text-slate-mute border-border/30 hover:text-ivory-mist"
                          }`}
                          onMouseEnter={() => setHoveredSkill(skill)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          {hasMatch ? (
                            <>
                              {before}
                              <span className="text-ivory-mist font-semibold">{match}</span>
                              {after}
                            </>
                          ) : (
                            skill
                          )}

                          {/* Top-skill underline animation */}
                          {top && (
                            <motion.span
                              initial={{ width: 0 }}
                              animate={{ width: `${95 - idx * 5}%` }}
                              transition={{ duration: 0.7, delay: 0.35 + idx * 0.02 }}
                              className="absolute left-0 -bottom-0.5 h-0.5 bg-royal-violet/70 rounded-full"
                            />
                          )}

                          {/* Hover glow */}
                          {hoveredSkill === skill && (
                            <motion.span
                              layoutId="glow"
                              className="absolute inset-0 -z-10 rounded-lg bg-teal-accent/15 blur-sm"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            />
                          )}
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Footer line: category proficiency meter */}
                  <div className="mt-6">
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-slate-mute">Proficiency</span>
                      <span className="text-teal-accent">
                        {categoryIndex === 0
                          ? "Expert"
                          : categoryIndex === 1
                          ? "Advanced"
                          : "Proficient"}
                      </span>
                    </div>
                    <div className="h-2 bg-charcoal rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${95 - categoryIndex * 10}%` }}
                        transition={{ duration: 0.9, delay: 0.35 }}
                        className="h-full bg-gradient-primary rounded-full"
                      />
                    </div>
                  </div>

                  {/* Decorative chevron */}
                  <ChevronRight className="absolute right-4 top-4 h-4 w-4 text-slate-mute opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.25 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Languages", count: totalLanguages },
            { label: "AI/ML Tools", count: aiToolCount },
            { label: "Cloud & DevOps", count: cloudCount },
            { label: "Years Experience", count: yearsExp },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35 + i * 0.07 }}
              className="text-center rounded-2xl border border-border/30 bg-charcoal/40 backdrop-blur p-6"
            >
              <div className="text-3xl font-bold text-gradient mb-1">{stat.count}+</div>
              <p className="text-slate-mute text-xs uppercase tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Micro‑CTA ribbon for recruiters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.35 }}
          className="mt-10 rounded-2xl border border-border/30 bg-gradient-to-r from-ink-navy/70 via-ink-navy/40 to-transparent p-5 flex flex-col md:flex-row items-center justify-between gap-3"
        >
          <p className="text-slate-200 text-sm md:text-base">
            Hiring for Full‑Stack, Cloud, or AI/ML? <span className="text-ivory-mist font-semibold">Let’s talk results.</span>
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-accent text-ink-navy px-4 py-2 text-sm font-semibold shadow-sm focus-ring"
          >
            <Sparkles className="h-4 w-4" /> Connect with me
          </a>
        </motion.div>
      </div>
    </section>
  );
};
