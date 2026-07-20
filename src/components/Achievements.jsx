import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../data/achievements';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">Experience & <span className="text-accent-coral">Achievements</span></h2>
      </div>

      <div className="relative border-l border-gray-300 dark:border-gray-700 ml-3 md:ml-6">
        {achievements.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="mb-10 ml-8 relative"
          >
            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-accent-coral bg-brand-light dark:bg-brand-dark"></span>
            
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-accent-blue mb-1">{item.title}</h3>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">{item.organization} | {item.year}</h4>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
