import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/10 dark:bg-accent-blue/20 blur-[100px] rounded-full -z-10 animate-pulse"></div>
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent-blue font-medium mb-4 text-lg"
        >
          Hi, I'm
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold font-serif mb-6"
        >
          Rifat Hossain
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-4xl font-semibold text-gray-600 dark:text-gray-300 mb-8"
        >
          Graphic Designer <span className="text-accent-coral">&</span> Software Engineer
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 mb-10 text-lg"
        >
          Blending creative aesthetics with technical engineering. I design beautiful interfaces and build robust systems to bring ideas to life.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="px-8 py-3 rounded-full bg-accent-blue text-white font-medium hover:bg-blue-600 transition shadow-lg shadow-accent-blue/30 w-full sm:w-auto">
            View My Work
          </a>
          <a href="#" className="px-8 py-3 rounded-full border-2 border-accent-blue text-accent-blue dark:text-white font-medium hover:bg-accent-blue hover:text-white transition w-full sm:w-auto">
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
