import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-mat">
        03 — Code Projects
      </span>
      <h2 className="font-sans font-bold text-3xl md:text-4xl mt-3 mb-12">
        Things I've built
      </h2>

      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 2) * 0.1 }}
            className="rounded-2xl border border-ink/10 bg-white/60 p-6 flex flex-col justify-between shadow-soft hover:shadow-lift hover:-translate-y-1 hover:border-blade/40 transition-all duration-300 group"
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-sans font-bold text-xl">{p.title}</h3>
                <span className="font-mono text-[10px] text-ink/40">{p.year}</span>
              </div>
              <p className="text-ink/70 text-sm leading-relaxed mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] uppercase tracking-wide px-2.5 py-1 rounded-full bg-mat/8 text-mat"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4 pt-2 border-t border-ink/10">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-ink/70 hover:text-blade transition-colors pt-3"
              >
                <Github size={14} /> Code
              </a>
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-ink/70 hover:text-blade transition-colors pt-3"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
