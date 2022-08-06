import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="md:h-[100vh] md: flex flex-col lg:flex-row gap-y-10 justify-center relative">
      <div className="md:flex justify-center items-center hidden lg:w-1/2">
        <div className="h-[200%] w-3/12 bg-[#64ffda] absolute -top-10 -left-52 -rotate-12"></div>
        <div className="lg:hidden">
          <Image
            height={300}
            width={300}
            alt="my image"
            src="/my.png"
            layout="fixed"
          />
          <Image
            height={300}
            width={300}
            alt="my image"
            src="/my.png"
            layout="fixed"
          />
        </div>
        <div className="hidden lg:block absolute -left-12">
          <Image
            height={800}
            width={650}
            alt="my image"
            src="/2.jpg"
            layout="fixed"
            className="rounded shadow-2xl"
          />
        </div>
      </div>
      <div className="h-[100vh] md:h-auto flex flex-col justify-center md:items-center lg:items-start lg:w-1/2">
        <h1 className="text-theme-text-title text-3xl lg:text-[52px] font-bold pb-1 lg:leading-[60px]">
          I&apos;m MD KAMRUL HASAN
        </h1>
        <h4 className="text-2xl font-bold text-theme-text-sub-title pb-3 lg:text-[48px] lg:leading-[60px]">
          WEB DEVELOPER
        </h4>
        <p className="text-theme-text-normal text-sm md:text-center lg:text-left lg:text-lg ">
          I&apos;m a Tunisian based web designer & front‑end developer focused
          on crafting clean & user‑friendly experiences, I am passionate about
          building excellent software that improves the lives of those around me
        </p>

        <button className="text-theme-text-highlight   mt-6 border  w-7/12 md:w-4/12 py-3 rounded-full border-[#64ffda] text-lg active:scale-[0.95] transition ease-in-out">
          MORE ABOUT ME{" "}
        </button>
      </div>
    </section>
  );
};

export default Hero;
