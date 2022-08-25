import Head from "next/head";
import React from "react";
const experience = () => {
  return (
    <>
      <Head>
        <title>Experience</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className=" lg:[100vh] overflow-hidden">
        <div className="container md:mx-auto px-5 pt-10">
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
              <div className="w-full">
                <h4 className="text-theme-text-sub-title text-xl font-semibold pt-5">
                  Where I&apos;ve Worked
                </h4>

                <div className=" mx-auto mt-5">
                  <ol className="relative border-l border-gray-200 dark:border-gray-700">
                    <li className="mb-10 ml-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        March 2022 - Present
                      </time>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        NEXT VENTURES
                      </h3>
                      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        Get access to over 20+ pages including a dashboard
                        layout, charts, kanban board, calendar, and pre-order
                        E-commerce &amp; Marketing pages.
                      </p>
                    </li>
                    <li className="mb-10 ml-4">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        DECEMBER 2021 - March 2022
                      </time>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Marketing UI design in Figma
                      </h3>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        All of the pages and components are first designed in
                        Figma and we keep a parity between the two versions even
                        as we update the project.
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default experience;
