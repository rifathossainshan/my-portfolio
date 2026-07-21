import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden px-6">
      {/* Animated background blobs */}
      <div className="blob-c w-96 h-96 bg-accentCyan/30 top-1/4 -left-20"></div>
      <div className="blob-c w-96 h-96 bg-accentPurple/30 bottom-1/4 -right-20" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl w-full mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
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
            className="font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6 leading-tight"
          >
            Hi, I'm <br className="hidden md:block" /><span className="text-gradient">MD. Rifat Hossain Shan</span><br />
            <span className="text-3xl md:text-4xl lg:text-5xl text-textMuted mt-4 block">Full Stack Web Developer & Graphic Designer.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-textMuted mb-10 max-w-xl"
          >
            I am a Computer Science Engineer with a deep passion for both development and graphic design. I build full-stack web applications and craft stunning visual identities, bringing the best of both technical logic and creative aesthetics together.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
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

        {/* Right Side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center md:justify-end mt-12 md:mt-0"
        >
          <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full p-2 bg-gradient-cyan-purple shadow-neonPurple">
            {/* Inner Container to hold the image */}
            <div className="w-full h-full rounded-full overflow-hidden bg-bgDark border-4 border-bgDark">
              <img 
                src="./profile.jpg" 
                alt="MD. Rifat Hossain Shan" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            {/* Decorative Floating Element */}
            <div className="absolute -bottom-4 -left-4 bg-glass backdrop-blur-md border border-white/20 text-accentCyan px-4 py-2 rounded-xl shadow-glass font-mono text-xs">
              <span className="block font-bold">100%</span> Creative
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
