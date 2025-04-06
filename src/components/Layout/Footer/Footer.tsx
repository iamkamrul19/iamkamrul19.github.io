import {
  EmailLink,
  GitLink,
  LinkEdinLink,
  PhoneLink,
  nabList,
} from "@/components/Common/FixedData";
import { Call, Email, Git, Linkedin } from "@/components/SVGIcon";
import Link from "next/link";

import { useEffect, useState } from "react";

const Footer = () => {
  const [scrollY, setScrollY] = useState(0);

  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < scrollY);
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <footer
      className={`bg-[#1224408f] backdrop-filter backdrop-blur-[2px] py-10 mt-5 overflow-hidden`}
    >
      <div className="container flex flex-wrap gap-y-5">
        <div className="w-1/2 md:w-3/12 xl:w-4/12">
          <p className="text-lg lg:text-xl text-text-info font-bold">Links</p>
          <ul className="flex flex-col gap-y-1 mt-2">
            {nabList.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    className="text-text-sub-title hover:text-text-highlight text-base "
                    target={item?.newTab ? "_blank" : "_self"}
                    href={item?.link}
                  >
                    {item?.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-1/2 md:w-4/12 md:hidden">
          <p className="text-lg lg:text-xl text-text-info font-bold mb-4">
            Follow Me on
          </p>
          <ul className="flex flex-col gap-y-4">
            <Link
              href={GitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 w-fit"
            >
              <div className="w-10 h-10 rounded-full bg-[#112240] flex items-center justify-center group-hover:bg-[#64ffda] group-hover:bg-opacity-10 transition-colors duration-300">
                <Git className="w-5 h-5 text-gray-300 group-hover:text-[#64ffda] transition-colors duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-300 group-hover:text-[#64ffda] transition-colors duration-300 font-medium">
                  GitHub
                </span>
                <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {GitLink.replace("https://", "")}
                </span>
              </div>
            </Link>

            <Link
              href={LinkEdinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 w-fit"
            >
              <div className="w-10 h-10 rounded-full bg-[#112240] flex items-center justify-center group-hover:bg-[#64ffda] group-hover:bg-opacity-10 transition-colors duration-300">
                <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-[#64ffda] transition-colors duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-300 group-hover:text-[#64ffda] transition-colors duration-300 font-medium">
                  LinkedIn
                </span>
                <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {LinkEdinLink.replace("https://", "")}
                </span>
              </div>
            </Link>
          </ul>
        </div>
        <div className="md:w-5/12 xl:w-4/12">
          <p className="text-lg lg:text-xl text-text-info font-bold">
            My Contacts
          </p>
          <ul className="flex flex-col gap-y-1 mt-2">
            <li>
              <Link
                className="text-text-sub-title group hover:text-text-highlight text-base flex items-center gap-x-2"
                href={"tel:" + PhoneLink}
              >
                <Call /> <span>{PhoneLink}</span>
              </Link>
            </li>
            <li>
              <Link
                className="text-text-sub-title group hover:text-text-highlight text-base flex items-center gap-x-2"
                href={"mailTo:" + EmailLink}
              >
                <Email />
                <span> {EmailLink}</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:w-4/12 hidden md:block">
          <p className="text-xl text-text-info font-bold mb-4">Follow Me on</p>
          <ul className="flex flex-col gap-y-4">
            <Link
              href={GitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 w-fit"
            >
              <div className="w-10 h-10 rounded-full bg-[#112240] flex items-center justify-center group-hover:bg-[#64ffda] group-hover:bg-opacity-10 transition-colors duration-300">
                <Git className="w-5 h-5 text-gray-300 group-hover:text-[#64ffda] transition-colors duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-300 group-hover:text-[#64ffda] transition-colors duration-300 font-medium">
                  GitHub
                </span>
                <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {GitLink.replace("https://", "")}
                </span>
              </div>
            </Link>

            <Link
              href={LinkEdinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 w-fit"
            >
              <div className="w-10 h-10 rounded-full bg-[#112240] flex items-center justify-center group-hover:bg-[#64ffda] group-hover:bg-opacity-10 transition-colors duration-300">
                <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-[#64ffda] transition-colors duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-300 group-hover:text-[#64ffda] transition-colors duration-300 font-medium">
                  LinkedIn
                </span>
                <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {LinkEdinLink.replace("https://", "")}
                </span>
              </div>
            </Link>
          </ul>
        </div>

        <p className="w-full text-center">
          <span className="text-text-info">
            Copyright © {new Date().getFullYear()}
          </span>{" "}
          <span className="text-text-highlight">Kamrul Hasan</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
