import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const Navbar = ({ isDark, toggleTheme }) => {
  return (
    <nav className="fixed w-full z-50 top-0 transition-colors duration-300 glass py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold font-serif tracking-wide">
          Rifat<span className="text-accent-blue">.</span>
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 font-medium">
            <li><a href="#about" className="hover:text-accent-blue transition">About</a></li>
            <li><a href="#skills" className="hover:text-accent-blue transition">Skills</a></li>
            <li><a href="#designs" className="hover:text-accent-blue transition">Design</a></li>
            <li><a href="#projects" className="hover:text-accent-blue transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-accent-blue transition">Contact</a></li>
          </ul>
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full glass hover:bg-white/20 transition"
            aria-label="Toggle Theme"
          >
            {isDark ? <FiSun size={20} className="text-yellow-400" /> : <FiMoon size={20} className="text-slate-800" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
