/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { External, Github } from "../SVGIcon";
import { skills } from "../data/data";

const Portfolio = () => {
  return (
    <div className="container md:mx-auto px-5 pt-10" id="portfolio">
      <div className="relative">
        <h3 className="text-center text-[70px] lg:text-[120px] font-black text-[#6363633f] hidden md:block">
          WORKS
        </h3>
        <h4 className="text-3xl  lg:text-[56px] font-bold text-center text-theme-text-title md:absolute top-9  lg:top-[70px] left-0 right-0">
          MY <span className="text-theme-text-highlight">PORTFOLIO</span>{" "}
        </h4>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-y-5 mt-10">
        {skills?.map((item, idx) => {
          const {
            name,
            stack,
            info,
            img_url,
            live_url,
            code_front_url,
            code_back_url,
          } = item;

          return (
            <div
              className={`flex flex-wrap ${
                idx % 2 === 0 ? "flex-row-reverse" : ""
              } w-full  md:w-8/12 bg-[#ffffff1a] rounded overflow-hidden md:pt-8`}
              key={idx}
            >
              <div className=" md:w-1/2">
                <img
                  src={img_url}
                  alt=""
                  className={` w-full h-full  ${
                    idx % 2 !== 0 ? "md:-ml-5 scale-105" : "lg:ml-5 scale-105"
                  }`}
                />
              </div>
              <div className="w-full md:w-1/2 pl-5 py-5 md:pl-5">
                <Link
                  href={live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-white hover:text-theme-text-highlight"
                >
                  {name}
                </Link>

                <div className="text-theme-text-highlight  text-sm lg:text-base flex gap-x-3  gap-y-2 flex-wrap pt-2 lg:pt-6">
                  {stack.map((item: any) => {
                    return (
                      <p className="hover:text-white cursor-pointer" key={item}>
                        {item}
                      </p>
                    );
                  })}
                </div>
                <div className=" flex gap-x-3  gap-y-2 flex-wrap pt-6">
                  {code_front_url && (
                    <Link
                      href={code_front_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex  items-center group"
                    >
                      <Github />
                    </Link>
                  )}
                  {code_back_url && (
                    <Link
                      href={code_back_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github />
                    </Link>
                  )}
                  {live_url && (
                    <Link
                      href={live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <External />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
