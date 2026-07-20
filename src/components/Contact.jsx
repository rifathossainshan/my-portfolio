import { motion } from "framer-motion";
import { profile } from "../data/profile";
import RulerStrip from "./RulerStrip";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-blade">
          06 — Contact
        </span>
        <h2 className="font-sans font-black text-4xl md:text-6xl mt-4 mb-8 leading-tight bg-gradient-to-br from-ink to-mat bg-clip-text text-transparent">
          Let's build
          <br />
          something precise.
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="inline-block font-mono text-lg md:text-xl px-6 py-3 rounded-full border border-ink/15 shadow-soft hover:border-blade hover:text-blade hover:shadow-card hover:-translate-y-0.5 transition-all"
        >
          {profile.email}
        </a>
      </motion.div>

      <div className="mt-20">
        <RulerStrip />
      </div>
    </section>
  );
}
