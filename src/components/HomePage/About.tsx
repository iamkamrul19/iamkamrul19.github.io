import Image from "next/image";
import Link from "next/link";
import { Git, Linkedin } from "../SVGIcon";

const About = () => {
  return (
    <div className="container md:mx-auto px-5 pt-10" id="about">
      <div className="relative">
        <h3 className="text-center text-[70px] lg:text-[120px] font-black text-[#6363633f] hidden md:block">
          RESUME
        </h3>
        <h4 className="text-3xl  lg:text-[56px] font-bold text-center text-theme-text-title md:absolute top-9  lg:top-[70px] left-0 right-0">
          ABOUT <span className="text-theme-text-highlight">ME</span>{" "}
        </h4>
      </div>
      <div className="flex flex-col-reverse gap-y-8 lg:gap-y-0 md:flex-row lg:items-center lg:justify-center">
        <div className="w-full md:w-1/2 ">
          <h4 className="text-theme-text-sub-title text-xl font-semibold pt-5">
            PERSONAL INFO
          </h4>
          <p className="text-theme-text-normal py-5">
            As a front-end developer, I specialize in creating visually stunning
            and user-friendly websites using HTML, CSS, and JavaScript. With a
            strong background in design and a focus on delivering the best
            possible user experience, I am dedicated to helping my clients
            achieve their online goals. Whether you need a simple landing page
            or a complex web application, I have the skills and experience to
            bring your vision to life. <br /> <br />
            In my current role at Next Ventures, I have had the opportunity to
            work on a wide range of projects. I have a proven track record of
            delivering high-quality work on time, and I am always looking for
            new challenges and opportunities to grow as a developer.
          </p>
          <div className=" flex gap-x-5 my-2 items-center ">
            <Link
              href="https://github.com/kamrul-hasan01/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 rounded-full relative group overflow-hidden hover:w-[130px] transition-all duration-300 hover:scale-[1.2]"
            >
              <Git />

              <span className="text-theme-text-highlight absolute top-[50%] translate-y-[-50%] opacity-0 left-0 transition-all duration-300 group-hover:left-12 group-hover:opacity-100">
                Github
              </span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/kamrul-hasan01/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 rounded-full relative group overflow-hidden hover:w-[130px] transition-all duration-300 hover:scale-[1.2]"
            >
              <Linkedin />

              <span className="text-theme-text-highlight absolute top-[50%] translate-y-[-50%] opacity-0 left-0 transition-all duration-300 group-hover:left-12 group-hover:opacity-100">
                Linkedin
              </span>
            </Link>
          </div>

          <div className="flex   gap-x-5">
            <Link
              href="https://drive.google.com/file/d/1Am_prNFpqaxvE8WfyRpG1R0fq_jNx1ZX/view?usp=sharing"
              target="_blank"
              download
              className="text-theme-text-highlight   mt-6 border  w-6/12 md:w-8/12 lg:w-5/12 py-3 rounded-full border-[#64ffda] text-sm lg:text-lg active:scale-[0.95] transition ease-in-out button-animation text-center"
            >
              Download Resume
            </Link>

            <Link
              href="/#contact"
              className="text-theme-text-highlight   mt-6 border  w-6/12 md:w-5/12 lg:w-5/12 py-3 rounded-full border-[#64ffda]  text-sm lg:text-lg active:scale-[0.95] transition ease-in-out button-animation text-center"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 pt-20 md:pt-40  lg:pt-10 mx-auto">
          <div className="w-[180px] h-[180px] lg:w-[300px] lg:h-[300px]  rounded mx-auto relative  z-[9999px]">
            <Image
              height={300}
              width={300}
              alt="kamrul, front end developer"
              src="/my.jpg"
              layout="responsive"
              className="rounded-[1%]"
            />
            <div className="w-[200px] h-[200px] lg:w-[350px] lg:h-[350px]   border-t border-r border-[#64ffda] absolute    -top-2 -right-2   "></div>
            <div className="w-[200px] h-[200px] lg:w-[350px] lg:h-[350px]   border-t border-l border-[#64ffda] absolute    -top-2 -left-2   "></div>

            <div className="w-[200px] h-[200px] lg:w-[350px] lg:h-[350px]   border-b border-l border-[#64ffda] absolute     -bottom-2 -left-2  "></div>
            <div className="w-[200px] h-[200px] lg:w-[350px] lg:h-[350px]   border-b border-r border-[#64ffda] absolute     -bottom-2 -right-2  "></div>
            {/* <div className="absolute -top-[89px] -left-[86px] rotate">
                  <Image
                    src="/img_bg.svg"
                    height={500}
                    width={500}
                    alt="image"
                    layout="fixed"
                  />
                </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
