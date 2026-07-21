import { motion } from "framer-motion";

export default function About() {
  const skills = {
    design: ["Photoshop", "Illustrator", "Figma", "UI/UX Design", "Branding"],
    dev: ["React", "Tailwind CSS", "JavaScript", "Python", "Node.js"],
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="blob-c w-80 h-80 bg-accentPink/20 top-0 right-0"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-sm uppercase tracking-widest text-accentPurple mb-2 block">
              About Me
            </span>
            <h2 className="font-sans font-bold text-4xl md:text-5xl mb-6">
              Creative <span className="text-gradient">Engineer.</span>
            </h2>
            <div className="space-y-4 text-textMuted text-lg">
              <p>
                Hello! I'm MD. Rifat Hossain Shan, a Full Stack Web Developer and Graphic Designer. 
                I am a Computer Science Engineer by education, but my passion lies equally in both 
                writing robust code and creating beautiful designs.
              </p>
              <p>
                My unique background allows me to approach problem-solving from a highly creative and a deeply technical perspective. Whether I'm designing a brand identity from scratch or architecting a complex web application, my goal is always to deliver experiences that are both visually stunning and functionally flawless.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {/* Design Skills */}
            <div className="glass-card p-6 border-t-4 border-t-accentPink">
              <h3 className="font-bold text-xl mb-4 text-white">Design Stack</h3>
              <ul className="space-y-2">
                {skills.design.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-textMuted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accentPink shadow-neonPink"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Dev Skills */}
            <div className="glass-card p-6 border-t-4 border-t-accentCyan">
              <h3 className="font-bold text-xl mb-4 text-white">Tech Stack</h3>
              <ul className="space-y-2">
                {skills.dev.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-textMuted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accentCyan shadow-neonCyan"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
