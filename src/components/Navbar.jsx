import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { profile } from "../data/profile";

const LINKS = [
  { href: "#work", label: "Design" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-paper/80 backdrop-blur-md shadow-soft border-b border-ink/5" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono font-bold text-sm tracking-tight">
          {profile.name.split(" ").map((n) => n[0]).join("")}
          <span className="text-blade">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs font-mono uppercase tracking-widest text-ink/70 hover:text-blade transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.cvPath}
          download
          className="text-xs font-mono uppercase tracking-widest border border-ink/20 rounded-full px-4 py-2 hover:bg-ink hover:text-paper hover:border-ink hover:shadow-card transition-all"
        >
          CV ↓
        </a>
      </nav>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="h-[2px] bg-blade origin-left"
      />
    </header>
  );
}
