import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-mono text-sm uppercase tracking-widest text-accentPurple mb-2 block">
            Software Engineering
          </span>
          <h2 className="font-sans font-bold text-4xl md:text-5xl">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 group hover:-translate-y-2 hover:shadow-neonPurple transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-lg bg-accentPurple/20 text-accentPurple flex items-center justify-center">
                  <Github size={24} />
                </div>
                <div className="flex gap-3">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="text-textMuted hover:text-accentCyan transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="text-textMuted hover:text-accentCyan transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-accentCyan transition-colors">{p.title}</h3>
              <p className="text-textMuted flex-grow mb-6">{p.description}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {p.stack.map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-1 bg-accentCyan/10 text-accentCyan rounded-md border border-accentCyan/20">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
