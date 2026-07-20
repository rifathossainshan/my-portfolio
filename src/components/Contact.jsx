import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy submit
    alert("Message sent!");
    e.target.reset();
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background blobs */}
      <div className="blob-c w-96 h-96 bg-accentPurple/20 bottom-0 left-0"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-mono text-sm uppercase tracking-widest text-accentCyan mb-2 block">
            Get In Touch
          </span>
          <h2 className="font-sans font-bold text-4xl md:text-5xl">
            Let's build something <span className="text-gradient">amazing.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accentCyan/10 text-accentCyan flex items-center justify-center shrink-0 border border-accentCyan/20 shadow-neonCyan">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Email</h3>
                <a href="mailto:contact@rifathossain.com" className="text-textMuted hover:text-accentCyan transition-colors">
                  contact@rifathossain.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accentPurple/10 text-accentPurple flex items-center justify-center shrink-0 border border-accentPurple/20 shadow-neonPurple">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Location</h3>
                <p className="text-textMuted">Dhaka, Bangladesh</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 flex flex-col gap-5">
              <div>
                <label className="block text-sm font-medium text-textMuted mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accentCyan focus:ring-1 focus:ring-accentCyan transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-textMuted mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accentCyan focus:ring-1 focus:ring-accentCyan transition-all"
                  placeholder="hello@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-textMuted mb-2">Message</label>
                <textarea
                  required
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accentCyan focus:ring-1 focus:ring-accentCyan transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="group flex items-center justify-center gap-2 w-full bg-gradient-cyan-purple text-white font-bold py-3 rounded-lg hover:shadow-neonCyan transition-all duration-300 mt-2"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
