import { motion } from "framer-motion";
import { profile } from "../data/profile";
import RulerStrip from "./RulerStrip";

export default function Hero() {
  return (
    <section id="top" className="relative bg-mat-gradient text-paper overflow-hidden">
      <div className="absolute inset-0 bg-grid-lines bg-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-grid mb-6"
        >
          {profile.location} — Available for hire
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sans font-black leading-[0.95] tracking-tight text-[13vw] md:text-[6.5rem] bg-gradient-to-br from-paper via-paper to-grid-soft bg-clip-text text-transparent"
        >
          {profile.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mt-4"
        >
          <span className="font-mono text-xl md:text-2xl text-grid">Graphic Designer</span>
          <span className="font-mono text-xl md:text-2xl text-paper/40">×</span>
          <span className="font-mono text-xl md:text-2xl text-blade">Software Engineer</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 max-w-xl text-paper/70 leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <a
            href="#work"
            className="px-7 py-3.5 rounded-full bg-grid text-mat font-mono text-sm uppercase tracking-widest font-semibold shadow-glow hover:bg-grid-soft hover:-translate-y-0.5 transition-all"
          >
            View Design Work
          </a>
          <a
            href="#projects"
            className="px-7 py-3.5 rounded-full border border-paper/25 font-mono text-sm uppercase tracking-widest hover:border-blade hover:text-blade-soft hover:-translate-y-0.5 transition-all"
          >
            View Code Projects
          </a>
        </motion.div>
      </div>

      <RulerStrip dark />
    </section>
  );
}
