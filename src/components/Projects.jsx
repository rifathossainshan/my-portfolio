import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">Software <span className="text-accent-blue">Projects</span></h2>
        <p className="text-gray-500 dark:text-gray-400">Some things I've built using modern web technologies.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass p-6 rounded-2xl flex flex-col h-full hover:-translate-y-2 transition duration-300"
          >
            <div className="flex justify-between items-start mb-6">
              <FiFolder className="text-4xl text-accent-blue" />
              <div className="flex gap-4">
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-accent-blue transition">
                  <FiGithub size={22} />
                </a>
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-accent-blue transition">
                  <FiExternalLink size={22} />
                </a>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 flex-grow mb-6">{project.description}</p>
            
            <ul className="flex flex-wrap gap-3 font-mono text-xs text-accent-blue">
              {project.techStack.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
