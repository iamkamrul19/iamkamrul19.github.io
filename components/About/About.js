import React from "react";

import Image from "next/image";
import Link from "next/link";
import {
  BootstrapIcon,
  Css,
  FigmaIcon,
  FirebaseIcon,
  Git,
  GithubIcon,
  GitIcon,
  Html,
  InsomniaIcon,
  JavaScript,
  JestIcon,
  Linkedin,
  MongoDBIcon,
  NextIcon,
  NodeIcon,
  NpmIcon,
  PostmanIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
} from "../SVG/SVG";

const About = () => {
  const skills = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handleDownload = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container md:mx-auto px-5 pt-10" id="about">
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
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS! 2012 when I decided to try editing custom Tumblr
              themes — turns out hacking together a custom reblog
            </p>
            <div className=" flex gap-5 my-2 items-center ">
              <Link href="https://github.com/kamrul-hasan01/">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 rounded-full relative group overflow-hidden hover:w-[130px] transition-all duration-300 hover:scale-[1.2]"
                >
                  <Git />

                  <span className="text-theme-text-highlight absolute top-[50%] translate-y-[-50%] opacity-0 left-0 transition-all duration-300 group-hover:left-12 group-hover:opacity-100">
                    Github
                  </span>
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/kamrul-hasan01/">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 rounded-full relative group overflow-hidden hover:w-[130px] transition-all duration-300 hover:scale-[1.2]"
                >
                  <Linkedin />

                  <span className="text-theme-text-highlight absolute top-[50%] translate-y-[-50%] opacity-0 left-0 transition-all duration-300 group-hover:left-12 group-hover:opacity-100">
                    Linkedin
                  </span>
                </a>
              </Link>
            </div>

            <div className="flex flex-col md:flex-row  gap-5">
              <Link href="https://drive.google.com/file/d/1Am_prNFpqaxvE8WfyRpG1R0fq_jNx1ZX/view?usp=sharing">
                <a
                  target="_blank"
                  download
                  className="text-theme-text-highlight   mt-6 border  w-9/12 md:w-4/12 lg:w-5/12 py-3 rounded-full border-[#64ffda] text-lg active:scale-[0.95] transition ease-in-out button-animation text-center"
                >
                  Download Resume
                </a>
              </Link>

              <Link href="/#contact">
                <a className="text-theme-text-highlight   mt-6 border  w-9/12 md:w-4/12 py-3 rounded-full border-[#64ffda] text-lg active:scale-[0.95] transition ease-in-out button-animation text-center">
                  Contact
                </a>
              </Link>
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
              <div className="flex flex-col items-center border-[#64ffda] text-theme-text-highlight gap-y-3 group hover:border-b-[1px] py-3">
                <JavaScript />

                <p className="group-hover:text-white opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
                  JavaScript
                </p>
              </div>
              <div className="flex flex-col items-center border-[#64ffda] text-theme-text-highlight gap-y-3 group hover:border-b-[1px] py-3">
                <ReactIcon />

                <p className="group-hover:text-white opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
                  React JS
                </p>
              </div>
              <div className="flex flex-col items-center border-[#64ffda] text-theme-text-highlight gap-y-3 group hover:border-b-[1px] py-3">
                <NextIcon />

                <p className="group-hover:text-white opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
                  Next JS
                </p>
              </div>
              <div className="flex flex-col items-center border-[#64ffda] text-theme-text-highlight gap-y-3 group hover:border-b-[1px] py-3">
                <ReduxIcon />

                <p className="group-hover:text-white opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
                  Redux
                </p>
              </div>
              <div className="flex flex-col items-center border-[#64ffda] text-theme-text-highlight gap-y-3 group hover:border-b-[1px] py-3">
                <JestIcon />

                <p className="group-hover:text-white opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
                  Jest
                </p>
              </div>
              <div className="flex flex-col items-center border-[#64ffda] text-theme-text-highlight gap-y-3 group hover:border-b-[1px] py-3">
                <NpmIcon />

                <p className="group-hover:text-white opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
                  NPM
                </p>
              </div>
              <div className="flex flex-col items-center border-[#64ffda] text-theme-text-highlight gap-y-3 group hover:border-b-[1px] py-3">
                <NodeIcon />

                <p className="group-hover:text-white opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
                  Node JS
                </p>
              </div>

              <div className="flex flex-col items-center border-[#64ffda] text-theme-text-highlight gap-y-3 group hover:border-b-[1px] py-3">
                <MongoDBIcon />

                <p className="group-hover:text-white opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
                  MongoDB
                </p>
              </div>

              <div className="flex flex-col items-center border-[#64ffda] text-theme-text-highlight gap-y-3 group hover:border-b-[1px] py-3">
                <FirebaseIcon />

                <p className="group-hover:text-white opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
                  Firebase
                </p>
              </div>
              <div className="flex flex-col items-center border-[#64ffda] text-theme-text-highlight gap-y-3 group hover:border-b-[1px] py-3">
                <FigmaIcon />

                <p className="group-hover:text-white opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
                  Figma
                </p>
              </div>
              <div className="flex flex-col items-center border-[#64ffda] text-theme-text-highlight gap-y-3 group hover:border-b-[1px] py-3">
                <Html />

                <p className="group-hover:text-white opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
                  HTML
                </p>
              </div>
              <div className="flex flex-col items-center border-[#64ffda] text-theme-text-highlight gap-y-3 group hover:border-b-[1px] py-3">
                <Css />

                <p className="group-hover:text-white opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
                  CSS
                </p>
              </div>
              <div className="flex flex-col items-center border-[#64ffda] text-theme-text-highlight gap-y-3 group hover:border-b-[1px] py-3">
                <GithubIcon />

                <p className="group-hover:text-white opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
                  Git
                </p>
              </div>
              <div className="flex flex-col items-center border-[#64ffda] text-theme-text-highlight gap-y-3 group hover:border-b-[1px] py-3">
                <GitIcon />

                <p className="group-hover:text-white opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
                  Github
                </p>
              </div>

              <div className="flex flex-col items-center border-[#64ffda] text-theme-text-highlight gap-y-3 group hover:border-b-[1px] py-3">
                <BootstrapIcon />

                <p className="group-hover:text-white opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
                  Bootstrap
                </p>
              </div>

              <div className="flex flex-col items-center border-[#64ffda] text-theme-text-highlight gap-y-3 group hover:border-b-[1px] py-3">
                <TailwindIcon />

                <p className="group-hover:text-white opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
                  Tailwind CSS
                </p>
              </div>

              <div className="flex flex-col items-center border-[#64ffda] text-theme-text-highlight gap-y-3 group hover:border-b-[1px] py-3">
                <InsomniaIcon />

                <p className="group-hover:text-white opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
                  Insomnia
                </p>
              </div>
              <div className="flex flex-col items-center border-[#64ffda] text-theme-text-highlight gap-y-3 group hover:border-b-[1px] py-3">
                <PostmanIcon />

                <p className="group-hover:text-white opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
                  Postman
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
