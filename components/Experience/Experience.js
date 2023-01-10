import Link from "next/link";
import React from "react";

const Experience = () => {
  return (
    <div className="container md:mx-auto px-5 pt-10" id="experience">
      <div className="">
        <div className="relative">
          <h3 className="text-center text-[70px] lg:text-[120px] font-black text-[#6363633f] hidden md:block uppercase">
            Experience
          </h3>
          <h4 className="text-3xl  lg:text-[56px] font-bold text-center text-theme-text-title md:absolute top-9  lg:top-[70px] left-0 right-0">
            MY <span className="text-theme-text-highlight">RIDE</span>{" "}
          </h4>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-8/12 lg:w-full mx-auto">
            <h4 className="text-theme-text-sub-title text-xl font-semibold pt-5">
              Where I&apos;ve Worked
            </h4>

            <div className=" mx-auto mt-5 ">
              <ol className="relative border-l border-theme-text-sub-title">
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3  rounded-full -left-1.5 border  border-gray-900 bg-theme-text-highlight"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                    March 2022 - Present
                  </time>
                  <Link href="https://wearenext.io/">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold  text-white block"
                    >
                      NEXT VENTURES
                    </a>
                  </Link>
                  <p className="text-theme-text-sub-title pb-2">
                    Front End Developer
                  </p>
                  <ul className="text-sm lg:text-base font-normal  text-gray-400">
                    <li className="py-2 lg:py-3">
                      Developed and maintained company website using HTML, CSS,
                      and JavaScript (Next js).
                    </li>
                    <li className="py-2 lg:py-3">
                      Implemented responsive design to ensure optimal user
                      experience on all devices.
                    </li>
                    <li className="py-2 lg:py-3">
                      Worked with cross-functional teams to identify and resolve
                      technical issues.
                    </li>
                    <li className="py-2 lg:py-3">
                      Utilized agile development methodologies to manage and
                      prioritize tasks.
                    </li>
                    <li className="py-2 lg:py-3">
                      Collaborated with designers to translate wireframes and
                      mockups into functional interfaces
                    </li>
                    <li className="py-2 lg:py-3">
                      Created and maintained style guides to ensure consistency
                      and maintainability of codebase
                    </li>
                  </ul>
                </li>
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3  rounded-full -left-1.5 border  border-gray-900 bg-theme-text-highlight"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    DECEMBER 2021 - February 2022
                  </time>

                  <Link href="#">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold  text-white block"
                    >
                      Triox Technology LTD
                    </a>
                  </Link>
                  <p className="text-theme-text-sub-title pb-2">
                    Front End Developer
                  </p>
                  <ul className="text-sm lg:text-base font-normal  text-gray-400 ">
                    <li className="py-2 lg:py-3">
                      Developed and maintained company website using HTML, CSS,
                      and JavaScript (React js).
                    </li>
                    <li className="py-2 lg:py-3">
                      Implemented responsive design to ensure optimal user
                      experience on all devices.
                    </li>
                    <li className="py-2 lg:py-3">
                      Worked with cross-functional teams to identify and resolve
                      technical issues.
                    </li>
                    <li className="py-2 lg:py-3">
                      Utilized agile development methodologies to manage and
                      prioritize tasks.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
