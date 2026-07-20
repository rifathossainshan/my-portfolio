import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { designs } from '../data/designs';

const DesignGallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="designs" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">Graphic <span className="text-accent-coral">Design</span></h2>
        <p className="text-gray-500 dark:text-gray-400">A selection of my visual and brand identity works.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {designs.map((design) => (
          <motion.div 
            key={design.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedImg(design.imageUrl)}
            className="cursor-pointer overflow-hidden rounded-2xl glass group relative"
          >
            <img src={design.imageUrl} alt={design.title} className="w-full h-64 object-cover transition duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white p-4 text-center">
              <h3 className="text-xl font-bold">{design.title}</h3>
              <p className="text-sm mt-2">{design.category}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 bg-black/90 z-[100] flex justify-center items-center p-4 cursor-zoom-out"
          >
            <motion.img 
              src={selectedImg} 
              alt="Enlarged" 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DesignGallery;
