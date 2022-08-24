import Head from "next/head";
import Image from "next/image";
import React from "react";
const About = () => {
  const skills = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className=" lg:[100vh] overflow-hidden">
        <div className="container md:mx-auto px-5 pt-10">
          <div className="">
            <div className="relative">
              <h3 className="text-center text-[70px] lg:text-[120px] font-black text-[#6363633f] hidden md:block">
                RESUME
              </h3>
              <h4 className="text-3xl  lg:text-[56px] font-bold text-center text-theme-text-title md:absolute top-9  lg:top-[70px] left-0 right-0">
                ABOUT <span className="text-theme-text-highlight">ME</span>{" "}
              </h4>
            </div>
            <div className="flex flex-col md:flex-row lg:items-center">
              <div className="w-full md:w-1/2">
                <h4 className="text-theme-text-sub-title text-xl font-semibold pt-5">
                  PERSONAL INFOS
                </h4>
                <p className="text-theme-text-normal py-5">
                  Hello! My name is Brittany and I enjoy creating things that
                  live on the internet. My interest in web development started
                  back in 2012 when I decided to try editing custom Tumblr
                  themes — turns out hacking together a custom reblog button
                  taught me a lot about HTML & CSS! 2012 when I decided to try
                  editing custom Tumblr themes — turns out hacking together a
                  custom reblog
                </p>
                <div className="flex flex-col md:flex-row  gap-5">
                  <button className="text-theme-text-highlight   mt-6 border  w-9/12 md:w-4/12 py-3 rounded-full border-[#64ffda] text-lg active:scale-[0.95] transition ease-in-out">
                    Download Resume
                  </button>
                  <button className="text-theme-text-highlight   mt-6 border  w-9/12 md:w-4/12 py-3 rounded-full border-[#64ffda] text-lg active:scale-[0.95] transition ease-in-out">
                    Contact
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/2 pt-20  md:pt-10 ">
                <div className="w-[200px] h-[200px] lg:w-[350px] lg:h-[350px]  rounded mx-auto relative  z-[9999px]">
                  <Image
                    height={350}
                    width={350}
                    alt="my image"
                    src="/2.jpg"
                    layout="responsive"
                    className="rounded-lg"
                  />
                  <div className="w-[200px] h-[200px] lg:w-[350px] lg:h-[350px]   border-t border-r border-[#64ffda] absolute    -top-6 -right-6 "></div>
                  <div className="w-[200px] h-[200px] lg:w-[350px] lg:h-[350px]   border-b border-l border-[#64ffda] absolute     -bottom-6 -left-6 "></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row mt-20">
              <div className="w-full">
                <h4 className="text-theme-text-sub-title text-xl font-semibold pt-5">
                  MY SKillS
                </h4>
                <p className="text-theme-text-sub-title py-5">
                  Here are a few technologies I’ve been working with recently:
                </p>
                <div className="flex gap-3 flex-wrap mb-[60px] mt-3">
                  {skills.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center border-[#64ffda] text-theme-text-highlight gap-y-3 group hover:border-b-[1px] py-3"
                      >
                        <Image
                          height={80}
                          width={80}
                          alt="my image"
                          layout="fixed"
                          className="rounded-lg group-hover:text-white mt-3 group-hover:scale-110 overflow-hidden"
                          src="/css.png"
                        />
                        <p className="group-hover:text-white">CSS</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
