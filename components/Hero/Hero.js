import React from "react";

const Hero = () => {
  return (
    <div className="overflow-hidden lg:[100vh]" id="home">
      <section className="container md:mx-auto mx-3 ">
        <div className="md:h-[100vh] md: flex flex-col lg:flex-row gap-y-10 justify-center relative">
          <div className="md:flex justify-center items-center hidden lg:w-1/2">
            <div
              className=" h-[200%] w-4/12  absolute -top-16 -left-80 2xl:-left-96 -rotate-12"
              style={{
                background:
                  "linear-gradient(180deg, #64ffda -40%, #0a192f 50%)",
              }}
            ></div>
            <div className="lg:hidden">
              {/* <Image
                height={300}
                width={300}
                alt="my image"
                src="/my.png"
                layout="fixed"
              /> */}
            </div>
            <div className="hidden lg:block absolute 2xl:-left-40 -left-6">
              {/* <Image
                height={700}
                width={550}
                alt="my image"
                src="/2.jpg"
                layout="fixed"
                className="rounded-xl shadow-2xl"
              /> */}
            </div>
          </div>
          <div className="h-[100vh] md:h-auto flex flex-col justify-center md:items-center lg:items-start lg:w-1/2">
            <h1 className="text-theme-text-title text-3xl lg:text-[30px] font-bold pb-1 lg:leading-[60px] ">
              Hi, my name is
            </h1>
            <h1 className=" text-theme-text-title text-3xl lg:text-[55px] font-bold pb-1 lg:leading-[60px] ">
              MD KAMRUL HASAN
            </h1>
            <h4 className="text-2xl font-bold text-theme-text-sub-title pb-3 lg:text-[48px] lg:leading-[60px] ">
              WEB DEVELOPER
            </h4>
            <p className="text-theme-text-normal text-sm md:text-center lg:text-left lg:text-lg ">
              I&apos;m a Tunisian based web designer & front‑end developer
              focused on crafting clean & user‑friendly experiences, I am
              passionate about building excellent software that improves the
              lives of those around me
            </p>

            <button className="text-theme-text-highlight   mt-6 border  w-7/12 md:w-4/12 py-3 rounded-full border-[#64ffda] text-lg active:scale-[0.95] transition ease-in-out">
              MORE ABOUT ME{" "}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
