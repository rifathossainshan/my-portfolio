import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { profile } from "../data/profile";

export default function Resume() {
  return (
    <section className="bg-mat-gradient text-paper">
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-grid">
            05 — Resume
          </span>
          <h2 className="font-sans font-bold text-3xl md:text-4xl mt-3 mb-5">
            The one-page version
          </h2>
          <p className="text-paper/70 leading-relaxed mb-8 max-w-md">
            For the condensed version of everything on this page — education, experience, and
            a summary of skills — grab a copy of my CV.
          </p>
          <a
            href={profile.cvPath}
            download
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-grid text-mat font-mono text-sm uppercase tracking-widest font-semibold shadow-glow hover:bg-grid-soft hover:-translate-y-0.5 transition-all"
          >
            <FileDown size={16} /> Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="aspect-[3/4] rounded-2xl border border-paper/10 bg-mat-dark overflow-hidden shadow-lift"
        >
          <object
            data={profile.cvPath}
            type="application/pdf"
            className="w-full h-full"
            aria-label="CV preview"
          >
            <div className="w-full h-full flex items-center justify-center font-mono text-xs text-paper/40 p-6 text-center">
              Add your cv.pdf to the /public folder to preview it here.
            </div>
          </object>
        </motion.div>
      </div>
    </section>
  );
}
