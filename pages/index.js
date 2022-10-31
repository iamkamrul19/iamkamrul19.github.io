import React from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import Hero from "../components/Hero/Hero";
import Portfolio from "../components/Portfolio/Portfolio";
import Skills from "../components/Skills/Skills";

const index = ({ portfolioList }) => {
  return (
    <>
      <div className="js__observer"></div>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Portfolio portfolioList={portfolioList} />
      <Contact />
    </>
  );
};
export async function getStaticProps() {
  let result;
  try {
    const response = await fetch(
      `https://kamrul-hasan01.github.io/api/portfolioList.json`
    );
    result = await response.json();
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      portfolioList: result,
    },
  };
}

export default index;
