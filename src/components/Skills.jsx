import React from 'react';
import { motion } from 'framer-motion';
import { designSkills, techSkills } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">My <span className="text-accent-blue">Expertise</span></h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">I bridge the gap between design and engineering, creating experiences that look great and work flawlessly.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Design Skills */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <span className="text-accent-coral">🎨</span> Design
          </h3>
          <div className="flex flex-wrap gap-3">
            {designSkills.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Tech Skills */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <span className="text-accent-blue">💻</span> Engineering
          </h3>
          <div className="flex flex-wrap gap-3">
            {techSkills.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
