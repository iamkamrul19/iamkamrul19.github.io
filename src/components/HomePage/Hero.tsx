import Link from "next/link";
import { Git, Linkedin } from "../SVGIcon";

const Hero = () => {
  return (
    <div className="overflow-hidden lg:[100vh] relative" id="home">
      <section className="container md:mx-auto mx-3 ">
        <div
          className=" h-[200%] w-4/12 absolute -top-28 -left-80 2xl:-left-96 -rotate-[29deg]"
          style={{
            background: "linear-gradient(180deg, #64ffda -40%, #0a192f 50%)",
          }}
        ></div>
        <div className="md:h-[100vh] md: flex flex-col lg:flex-row gap-y-10 justify-center relative">
          <div className="h-[100vh] md:h-auto flex flex-col justify-center md:items-center lg:items-start  w-full">
            <h4 className="text-theme-text-title text-3xl lg:text-[18px] font-bold pb-1 lg:leading-[60px] ">
              Hi, my name is
            </h4>
            <h4 className=" text-theme-text-title text-3xl lg:text-[55px] font-bold pb-1 lg:leading-[60px] ">
              MD KAMRUL HASAN
            </h4>
            <h1 className="text-2xl font-bold text-theme-text-sub-title pb-3 lg:text-[30px] lg:leading-[60px] ">
              Software Engineer | Front-end Developer
            </h1>
            <p className="text-theme-text-normal text-sm md:text-center lg:text-left lg:text-lg 2xl:w-8/12">
              As a responsive web developer, I specialize in building websites
              that look great and function seamlessly on all devices. With a
              focus on mobile-first design, I ensure that your website is
              optimized for the growing number of users accessing the web on
              their smartphones and tablets. Whether you need a simple landing
              page or a complex web application, I have the skills and
              experience to deliver the best possible results.
            </p>
            <div className=" flex gap-x-5 mt-5 mb-2 items-center ">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 rounded-full relative group overflow-hidden hover:w-[130px] transition-all duration-300 hover:scale-[1.2]"
                href="https://github.com/kamrul-hasan01/"
              >
                <Git />

                <span className="text-theme-text-highlight absolute top-[50%] translate-y-[-50%] opacity-0 left-0 transition-all duration-300 group-hover:left-12 group-hover:opacity-100">
                  Github
                </span>
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 rounded-full relative group overflow-hidden hover:w-[130px] transition-all duration-300 hover:scale-[1.2]"
                href="https://www.linkedin.com/in/kamrul-hasan01/"
              >
                <Linkedin />

                <span className="text-theme-text-highlight absolute top-[50%] translate-y-[-50%] opacity-0 left-0 transition-all duration-300 group-hover:left-12 group-hover:opacity-100">
                  Linkedin
                </span>
              </Link>
            </div>
            <div className="flex    gap-x-5 w-full justify-center lg:justify-start">
              <Link
                href="/#about"
                className="text-theme-text-highlight   mt-6 border  w-6/12 md:w-4/12 lg:w-2/12 py-3 rounded-full border-[#64ffda] text-sm  lg:text-lg active:scale-[0.95] transition ease-in-out button-animation text-center"
              >
                More About Me
              </Link>

              <Link
                href="/#contact"
                className="text-theme-text-highlight   mt-6 border  w-6/12 md:w-4/12 lg:w-2/12  py-3 rounded-full border-[#64ffda] text-sm lg:text-lg active:scale-[0.95] transition ease-in-out button-animation text-center"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
