import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { designs, designCategories } from "../data/designs";
import RulerStrip from "./RulerStrip";

export default function DesignGallery() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);

  const filtered = filter === "All" ? designs : designs.filter((d) => d.category === filter);

  return (
    <section id="work" className="bg-mat-gradient text-paper">
      <RulerStrip dark />
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-grid">
              02 — Design Work
            </span>
            <h2 className="font-sans font-bold text-3xl md:text-4xl mt-3">Selected visual work</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {designCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-full border transition-all ${
                  filter === cat
                    ? "bg-grid text-mat border-grid shadow-glow"
                    : "border-paper/20 text-paper/70 hover:border-grid hover:text-grid"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((d, i) => (
            <motion.button
              key={d.id}
              onClick={() => setActive(d)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="group text-left relative aspect-[4/5] overflow-hidden rounded-2xl bg-mat-light border border-paper/10 shadow-card hover:shadow-lift hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={d.image}
                alt={d.title}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextSibling.style.display = "flex";
                }}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                style={{ display: "none" }}
                className="absolute inset-0 items-center justify-center font-mono text-xs text-paper/30 bg-mat-dark"
              >
                {d.title}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-mat-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-grid mb-1">
                    {d.category} · {d.year}
                  </p>
                  <p className="font-sans font-semibold text-sm">{d.title}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] bg-ink/90 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full bg-mat p-4 rounded-2xl shadow-lift"
            >
              <div className="flex justify-between items-center mb-3">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-grid">
                    {active.category} · {active.year} · {active.tools.join(", ")}
                  </p>
                  <p className="font-sans font-semibold">{active.title}</p>
                </div>
                <button
                  onClick={() => setActive(null)}
                  aria-label="Close"
                  className="text-paper/60 hover:text-blade"
                >
                  <X size={20} />
                </button>
              </div>
              <img src={active.image} alt={active.title} className="w-full object-cover rounded-lg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
