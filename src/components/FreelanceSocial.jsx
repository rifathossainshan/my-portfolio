import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { socials, freelanceProfiles } from "../data/profile";

export default function FreelanceSocial() {
  return (
    <section className="bg-ink text-paper">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-grid">
            Hire me directly
          </span>
          <h3 className="font-sans font-bold text-2xl mt-3 mb-6">Freelance profiles</h3>
          <ul className="space-y-3">
            {freelanceProfiles.map((f) => (
              <li key={f.platform}>
                <a
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between gap-4 rounded-xl px-4 py-3 -mx-4 hover:bg-white/5 transition-colors group"
                >
                  <div>
                    <p className="font-semibold">{f.platform}</p>
                    <p className="text-sm text-paper/50">{f.note}</p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="mt-1 text-paper/40 group-hover:text-blade transition-colors shrink-0"
                  />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-grid">
            Elsewhere
          </span>
          <h3 className="font-sans font-bold text-2xl mt-3 mb-6">Find me online</h3>
          <ul className="space-y-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between gap-4 rounded-xl px-4 py-3 -mx-4 hover:bg-white/5 transition-colors group"
                >
                  <div>
                    <p className="font-semibold">{s.label}</p>
                    <p className="text-sm text-paper/50 font-mono">{s.handle}</p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="mt-1 text-paper/40 group-hover:text-blade transition-colors shrink-0"
                  />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
