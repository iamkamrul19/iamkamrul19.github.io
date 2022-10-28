import React, { useState } from "react";
import Sproject from "../Sproject/Sproject";

const Portfolio = ({ portfolioList }) => {
  const [AllProject, setAllProject] = useState([...portfolioList]);

  const [selected, setSelected] = useState("All");
  const handleCatagories = (type) => {
    setSelected(type);
    console.log(type);
  };

  return (
    <div className="container md:mx-auto px-5 pt-10" id="portfolio">
      <div className="relative">
        <h3 className="text-center text-[70px] lg:text-[120px] font-black text-[#6363633f] hidden md:block">
          WORKS
        </h3>
        <h4 className="text-3xl  lg:text-[56px] font-bold text-center text-theme-text-title md:absolute top-9  lg:top-[70px] left-0 right-0">
          MY <span className="text-theme-text-highlight">PORTFOLIO</span>{" "}
        </h4>
      </div>
      <div className="pt-5">
        <h4 className="text-theme-text-title text-2xl font-semibold text-center lg:text-start">
          Some Things I&apos;ve Built
        </h4>
      </div>
      <div className="flex flex-row  gap-5 justify-center lg:justify-start">
        <button
          onClick={() => handleCatagories("All")}
          className={`${
            selected != "All"
              ? "text-theme-text-sub-title"
              : "text-theme-text-highlight border-[#64ffda]"
          } button-animation    mt-6 border  w-4/12 md:w-2/12 lg:w-2/12 py-2 lg:py-3  rounded-full  text-lg active:scale-[0.95] transition ease-in-out`}
        >
          All
        </button>
        <button
          onClick={() => handleCatagories("Full Stack")}
          className={`${
            selected != "Full Stack"
              ? "text-theme-text-sub-title "
              : "text-theme-text-highlight border-[#64ffda]"
          } button-animation    mt-6 border  w-4/12 md:w-2/12 lg:w-2/12 py-2 lg:py-3  rounded-full  text-lg active:scale-[0.95] transition ease-in-out`}
        >
          Full Stack
        </button>
        <button
          onClick={() => handleCatagories("Front End")}
          className={`${
            selected != "Front End"
              ? "text-theme-text-sub-title"
              : "text-theme-text-highlight border-[#64ffda]"
          } button-animation    mt-6 border  w-4/12 md:w-2/12 lg:w-2/12 py-2 lg:py-3  rounded-full  text-lg active:scale-[0.95] transition ease-in-out`}
        >
          Front End
        </button>
      </div>
      <div className="">
        {AllProject.map((item, idx) => {
          return <Sproject key={idx} id={idx} content={item} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
