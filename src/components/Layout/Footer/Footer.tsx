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
        <div className="w-1/2 md:w-4/12  md:hidden">
          <p className="text-lg lg:text-xl text-text-info font-bold">
            Follow Me on
          </p>
          <ul className="flex flex-col gap-y-5 gap-x-4 mt-2">
            <Link
              href={GitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 rounded-full relative group overflow-hidden hover:w-[130px] transition-all duration-300 hover:scale-[1.2]"
            >
              <Git />

              <span className="text-text-highlight absolute top-[50%] translate-y-[-50%] opacity-0 left-0 transition-all duration-300 group-hover:left-12 group-hover:opacity-100">
                Github
              </span>
            </Link>

            <Link
              href={LinkEdinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 rounded-full relative group overflow-hidden hover:w-[130px] transition-all duration-300 hover:scale-[1.2]"
            >
              <Linkedin />

              <span className="text-text-highlight absolute top-[50%] translate-y-[-50%] opacity-0 left-0 transition-all duration-300 group-hover:left-12 group-hover:opacity-100">
                Linkedin
              </span>
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
          <p className="text-xl text-text-info font-bold">Follow Me on</p>
          <ul className="flex  gap-x-4 mt-2">
            <Link
              href={GitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 rounded-full relative group overflow-hidden hover:w-[130px] transition-all duration-300 hover:scale-[1.2]"
            >
              <Git />

              <span className="text-text-highlight absolute top-[50%] translate-y-[-50%] opacity-0 left-0 transition-all duration-300 group-hover:left-12 group-hover:opacity-100">
                Github
              </span>
            </Link>

            <Link
              href={LinkEdinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 rounded-full relative group overflow-hidden hover:w-[130px] transition-all duration-300 hover:scale-[1.2]"
            >
              <Linkedin />

              <span className="text-text-highlight absolute top-[50%] translate-y-[-50%] opacity-0 left-0 transition-all duration-300 group-hover:left-12 group-hover:opacity-100">
                Linkedin
              </span>
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
