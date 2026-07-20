import { motion } from "framer-motion";
import { achievements } from "../data/achievements";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-mono text-sm uppercase tracking-widest text-accentCyan mb-2 block">
            Experience & Activities
          </span>
          <h2 className="font-sans font-bold text-4xl md:text-5xl">
            My <span className="text-gradient">Journey</span>
          </h2>
        </div>

        <div className="relative border-l border-white/20 ml-4 md:ml-6 space-y-12">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-accentCyan shadow-neonCyan border-4 border-bgDark"></span>

              <div className="glass-card p-6 md:p-8 group hover:-translate-y-1 transition-transform duration-300">
                <span className="font-mono text-sm text-accentCyan block mb-2">{item.year}</span>
                <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                <h4 className="text-lg text-accentPurple mb-4">{item.organization}</h4>
                <p className="text-textMuted leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
