import Head from "next/head";

import React from "react";
import Sproject from "../components/Sproject/Sproject";
const projects = () => {
  const project = [1, 2, 3];
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className=" lg:[100vh] overflow-hidden">
        <div className="container md:mx-auto px-5 pt-10">
          <div className="relative">
            <h3 className="text-center text-[70px] lg:text-[120px] font-black text-[#6363633f] hidden md:block">
              WORKS
            </h3>
            <h4 className="text-3xl  lg:text-[56px] font-bold text-center text-theme-text-title md:absolute top-9  lg:top-[70px] left-0 right-0">
              MY <span className="text-theme-text-highlight">PORTFOLIO</span>{" "}
            </h4>
          </div>
          <div className="pt-5">
            <h4 className="text-theme-text-title text-2xl font-semibold ">
              Some Things I&apos;ve Built
            </h4>
            <div className="">
              {project.map((item, idx) => {
                return <Sproject key={idx} content={idx} />;
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default projects;
