import Image from "next/image";
import Link from "next/link";
import React from "react";
import { External, Github } from "../SVG/SVG";
const Sproject = ({ content, id }) => {
  const {
    name,
    tag,
    stack,
    info,
    img_url,
    live_url,
    code_front_url,
    code_back_url,
  } = content;

  return (
    <section>
      <div className="w-[10/12] md:w-8/12 mx-auto  my-5  p-5 rounded-xl shadow-[0px_0px_3px_1px_rgba(255,255,255,0.39)]  lg:hidden">
        <h6 className="text-[#e6f1ff] text-xl"> {name}</h6>
        <hr className="border-[#64ffda] w-6/12 mt-2" />
        <p className="text-base text-[#a8b8d1] pt-6 ">{info}</p>
        <div className="text-theme-text-highlight flex gap-x-3  gap-y-2 flex-wrap pt-6">
          {stack.map((item) => {
            return <p key={item}>{item}</p>;
          })}
        </div>
        <div className=" flex gap-x-3  gap-y-2 flex-wrap pt-6">
          {code_front_url && (
            <Link href={code_front_url}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex  items-center group"
              >
                <Github />
              </a>
            </Link>
          )}
          {code_back_url && (
            <Link href={code_back_url}>
              <a target="_blank" rel="noopener noreferrer">
                <Github />
              </a>
            </Link>
          )}
          {live_url && (
            <Link href={live_url}>
              <a target="_blank" rel="noopener noreferrer">
                <External />
              </a>
            </Link>
          )}
        </div>
      </div>
      <div
        className={` hidden lg:flex w-full mx-auto  my-20  items-center ${
          id % 2 !== 0 && "flex-row-reverse"
        }`}
      >
        <div className="w-2/3">
          <Link
            href={live_url}
            className="w-[753px] hover:scale-105  transition duration-300 ease-in-out "
          >
            <Image
              alt="kamrul, front end developer"
              src={img_url}
              height={474}
              width={753}
              layout={"responsive"}
              className="rounded-lg w-full cursor-pointer relative hover:scale-95  transition duration-300 ease-in-out"
            />
          </Link>
        </div>
        <div className="w-1/3   relative">
          <h6
            className={`text-[#e6f1ff] text-xl pb-10 hover:text-theme-text-highlight  ${
              id % 2 !== 0 ? "text-left" : "text-right"
            }`}
          >
            <Link href={live_url}>
              <a target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            </Link>
          </h6>
          <p
            className={`text-lg text-[#a8b8d1] p-6   bg-theme-bg w-[600px] absolute right-0 rounded-xl shadow-[0px_0px_14px_2px_rgba(100,255,218,0.11)] ${
              id % 2 !== 0 ? "left-0 text-left" : "right-0 text-right"
            }`}
          >
            {info}
          </p>

          <div
            className={`text-theme-text-highlight flex gap-x-3  gap-y-2 flex-wrap pt-6  mt-[200px] ${
              id % 2 !== 0 ? "justify-start" : "justify-end"
            }`}
          >
            {stack.map((item) => {
              return <p key={item}>{item}</p>;
            })}
          </div>

          <div
            className={`flex gap-x-3  gap-y-2 flex-wrap pt-6 ${
              id % 2 !== 0 ? "justify-start" : "justify-end"
            }`}
          >
            {code_front_url && (
              <Link href={code_front_url}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex  items-center group"
                >
                  <Github />
                </a>
              </Link>
            )}
            {code_back_url && (
              <Link href={code_back_url}>
                <a target="_blank" rel="noopener noreferrer">
                  <Github />
                </a>
              </Link>
            )}
            {live_url && (
              <Link href={live_url}>
                <a target="_blank" rel="noopener noreferrer">
                  <External />
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sproject;
