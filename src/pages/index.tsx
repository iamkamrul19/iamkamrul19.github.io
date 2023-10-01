import About from "@/components/HomePage/About";
import Contact from "@/components/HomePage/Contact";
import Experience from "@/components/HomePage/Experience";
import Hero from "@/components/HomePage/Hero";
import Projects from "@/components/HomePage/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />

      <Experience />

      <Projects />

      <Contact />
    </>
  );
}
