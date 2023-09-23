import About from "@/components/HomePage/About";
import Contact from "@/components/HomePage/Contact";
import Experience from "@/components/HomePage/Experience";
import Hero from "@/components/HomePage/Hero";
import Portfolio from "@/components/HomePage/Portfolio";
import Skills from "@/components/HomePage/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
    </>
  );
}
