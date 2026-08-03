import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedIn from "@/components/FeaturedIn";
import TechSlider from "@/components/TechSlider";
import About from "@/components/About";
import Services from "@/components/Services";
import PreepX from "@/components/PreepX";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import TechJourney from "@/components/TechJourney";
import Experience from "@/components/Experience";
import CertificatesResearch from "@/components/CertificatesResearch";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main className="flex-1 px-0 sm:px-6 lg:px-8">
        <Hero />
        <FeaturedIn />
        <TechSlider />
        <About />
        <Services />
        <PreepX />
        <Achievements />
        <TechJourney />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <CertificatesResearch />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
