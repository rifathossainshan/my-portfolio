import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="glass-card p-12 relative overflow-hidden group"
        >
          {/* Neon Glow Decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-cyan-purple shadow-neonCyan"></div>
          
          <div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center text-accentCyan mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-glass">
            <FileText size={32} />
          </div>
          
          <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4 text-white">
            Want to see the full details?
          </h2>
          <p className="text-textMuted max-w-lg mx-auto mb-8">
            Download my complete resume to learn more about my education, work experience, and technical skills in detail.
          </p>
          
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-cyan-purple text-white px-8 py-4 rounded-full font-bold hover:shadow-neonPurple transition-all duration-300"
          >
            <Download size={20} />
            Download Resume (PDF)
          </a>
        </motion.div>
      </div>
    </section>
  );
}
