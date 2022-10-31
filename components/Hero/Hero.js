import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="overflow-hidden lg:[100vh]" id="home">
      <section className="container md:mx-auto mx-3 ">
        <div
          className=" h-[200%] w-4/12  absolute -top-16 -left-80 2xl:-left-96 -rotate-12"
          style={{
            background: "linear-gradient(180deg, #64ffda -40%, #0a192f 50%)",
          }}
        ></div>
        <div className="md:h-[100vh] md: flex flex-col lg:flex-row gap-y-10 justify-center relative">
          <div className="h-[100vh] md:h-auto flex flex-col justify-center md:items-center lg:items-start  w-full">
            <h1 className="text-theme-text-title text-3xl lg:text-[18px] font-bold pb-1 lg:leading-[60px] ">
              Hi, my name is
            </h1>
            <h1 className=" text-theme-text-title text-3xl lg:text-[55px] font-bold pb-1 lg:leading-[60px] ">
              MD KAMRUL HASAN
            </h1>
            <h4 className="text-2xl font-bold text-theme-text-sub-title pb-3 lg:text-[30px] lg:leading-[60px] ">
              Software Engineer | Front-end Developer
            </h4>
            <p className="text-theme-text-normal text-sm md:text-center lg:text-left lg:text-lg ">
              I work for NEXT Ventures as a software engineer. In 2021, I
              received my Bachelor of Science in Computer Science and
              Engineering from Primeasia University in Dhaka, Bangladesh.
            </p>

            <div className="flex flex-col md:flex-row  gap-5 w-full">
              <Link href="/#about">
                <a className="text-theme-text-highlight   mt-6 border  w-9/12 md:w-4/12 lg:w-2/12 py-3 rounded-full border-[#64ffda] text-lg active:scale-[0.95] transition ease-in-out button-animation text-center">
                  More About Me
                </a>
              </Link>

              <Link href="/#contact">
                <a className="text-theme-text-highlight   mt-6 border  w-9/12 md:w-4/12 lg:w-2/12  py-3 rounded-full border-[#64ffda] text-lg active:scale-[0.95] transition ease-in-out button-animation text-center">
                  Get In Touch
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
