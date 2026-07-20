import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bgDark/50 backdrop-blur-md py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <a href="#home" className="text-2xl font-bold font-serif text-white block mb-2">
            Rifat<span className="text-accentPink">.</span>
          </a>
          <p className="text-textMuted text-sm">
            &copy; {new Date().getFullYear()} Rifat Hossain. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-textMuted hover:text-accentCyan hover:shadow-neonCyan transition-all duration-300">
            <Github size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-textMuted hover:text-accentPurple hover:shadow-neonPurple transition-all duration-300">
            <Linkedin size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-textMuted hover:text-accentPink hover:shadow-neonPink transition-all duration-300">
            <Twitter size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
