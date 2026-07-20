import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { designs, designCategories } from "../data/designs";

export default function DesignGallery() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);

  const filtered = filter === "All" ? designs : designs.filter((d) => d.category === filter);

  return (
    <section id="work" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-sm uppercase tracking-widest text-accentPink mb-2 block">
              Graphic Design
            </span>
            <h2 className="font-sans font-bold text-4xl md:text-5xl">
              Selected <span className="text-gradient-pink">Visual Work</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {designCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-full border transition-all duration-300 ${
                  filter === cat
                    ? "bg-gradient-purple-pink text-white border-transparent shadow-neonPink"
                    : "border-white/20 text-textMuted hover:border-accentPink hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((d, i) => (
            <motion.button
              key={d.id}
              onClick={() => setActive(d)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
              className="group text-left relative aspect-[4/5] overflow-hidden rounded-2xl glass-card border-none p-0 cursor-pointer"
            >
              <img
                src={d.image}
                alt={d.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bgDark/90 via-bgDark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-accentPink mb-1">
                    {d.category} · {d.year}
                  </p>
                  <p className="font-sans font-bold text-xl text-white">{d.title}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full glass-card p-4 relative"
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="font-mono text-xs text-accentPink uppercase tracking-widest">
                    {active.category} · {active.tools.join(", ")}
                  </p>
                  <p className="font-sans font-bold text-lg">{active.title}</p>
                </div>
                <button
                  onClick={() => setActive(null)}
                  className="p-2 bg-white/10 rounded-full hover:bg-accentPink hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <img src={active.image} alt={active.title} className="w-full object-contain max-h-[70vh] rounded-xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
