import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <Toaster position="top-right" />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <h1>Portfolio</h1>
    </div>
  );
};

export default App;
