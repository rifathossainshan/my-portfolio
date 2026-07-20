import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DesignGallery from "./components/DesignGallery";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans relative">
      <Navbar />
      <Hero />
      <About />
      <DesignGallery />
      <Projects />
      <Achievements />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}
