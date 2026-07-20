import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden px-6">
      {/* Animated background blobs */}
      <div className="blob-c w-96 h-96 bg-accentCyan/30 top-1/4 -left-20"></div>
      <div className="blob-c w-96 h-96 bg-accentPurple/30 bottom-1/4 -right-20" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-4xl w-full mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full border border-accentCyan/30 bg-accentCyan/10 text-accentCyan text-sm font-mono mb-6">
            Welcome to my creative space
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sans font-extrabold text-5xl md:text-7xl tracking-tight mb-6 leading-tight"
        >
          Hi, I'm <span className="text-gradient">Rifat Hossain</span><br />
          <span className="text-4xl md:text-6xl text-textMuted">Designer & Developer.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl text-lg md:text-xl text-textMuted mb-10"
        >
          Blending aesthetic graphic design with robust computer science engineering to build digital experiences that are visually stunning and technically sound.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#work"
            className="group flex items-center gap-2 bg-gradient-cyan-purple text-white px-8 py-4 rounded-full font-semibold hover:shadow-neonCyan transition-all duration-300"
          >
            Explore My Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#resume"
            className="group flex items-center gap-2 bg-white/5 border border-white/20 text-textMain px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-accentCyan/50 hover:shadow-neonPurple transition-all duration-300"
          >
            Download CV
            <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
