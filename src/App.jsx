import AmbientOrbs from "./components/AmbientOrbs.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Journey from "./components/Journey.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <AmbientOrbs />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
