import { motion } from "framer-motion";
import { profile, skills } from "../data/profile";

function SkillGroup({ title, accentClass, items }) {
  return (
    <div>
      <h3 className={`font-mono text-xs uppercase tracking-[0.2em] mb-4 ${accentClass}`}>
        {title}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((s) => (
          <li
            key={s}
            className="text-sm px-3.5 py-1.5 rounded-full border border-ink/12 bg-white/70 font-mono text-ink/80 shadow-soft"
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-blade">
            01 — About
          </span>
          <h2 className="font-sans font-bold text-3xl md:text-4xl mt-3 leading-tight">
            Two disciplines,
            <br />
            one way of thinking.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-10"
        >
          <p className="text-ink/80 leading-relaxed text-lg">{profile.bio}</p>

          <div className="grid sm:grid-cols-2 gap-8">
            <SkillGroup title="Design Toolkit" accentClass="text-blade" items={skills.design} />
            <SkillGroup title="Tech Stack" accentClass="text-mat" items={skills.tech} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
