import { motion } from "framer-motion";
import { achievements } from "../data/achievements";

export default function Achievements() {
  return (
    <section id="achievements" className="max-w-6xl mx-auto px-6 py-24">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-blade">
        04 — Achievements
      </span>
      <h2 className="font-sans font-bold text-3xl md:text-4xl mt-3 mb-12">
        Beyond the desk
      </h2>

      <div className="border-l-2 border-ink/15 pl-8 space-y-10">
        {achievements.map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="relative"
          >
            <span className="absolute -left-[41px] top-1.5 w-3 h-3 bg-blade rounded-full ring-4 ring-paper shadow-[0_0_0_3px_rgba(225,91,69,0.15)]" />
            <p className="font-mono text-xs text-ink/40 mb-1">{a.year}</p>
            <h3 className="font-sans font-bold text-lg">{a.title}</h3>
            <p className="font-mono text-xs uppercase tracking-wide text-mat mb-2">{a.org}</p>
            <p className="text-ink/70 text-sm leading-relaxed max-w-xl">{a.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
