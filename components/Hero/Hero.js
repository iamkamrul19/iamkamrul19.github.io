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
        <div className="hidden lg:block">
          <Image
            height={600}
            width={450}
            alt="my image"
            src="/2.jpg"
            layout="fixed"
          />
        </div>
      </div>
      <div className="h-[100vh] md:h-auto flex flex-col justify-center md:items-center lg:items-start lg:w-1/2">
        <h1 className="text-theme-text-title text-3xl font-bold pb-1">
          I&apos;m MD KAMRUL HASAN
        </h1>
        <h4 className="text-2xl font-bold text-theme-text-sub-title pb-3">
          WEB DEVELOPER
        </h4>
        <p className="text-theme-text-normal text-sm md:text-center lg:text-left">
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
