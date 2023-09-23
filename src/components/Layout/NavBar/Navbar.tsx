import { Name } from "@/components/SVGIcon";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = () => {
  const nabList = [
    {
      name: "Home",
      link: "/",
      newTab: false,
    },
    {
      name: "Story",
      link: "/#about",
      newTab: false,
    },
    {
      name: "Resume",
      link: "/resume",
      newTab: true,
    },
    {
      name: "Experience",
      link: "/#experience",
      newTab: false,
    },
    {
      name: "Projects",
      link: "/#portfolio",
      newTab: false,
    },
    {
      name: "Contact Me",
      link: "/#contact",
      newTab: false,
    },
  ];

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
  const [isHamburger, setIsHamburger] = useState(false);

  const handleMenuClick = () => {
    setIsHamburger(!isHamburger);
    const button = document.querySelector(".menu");
    button?.classList.toggle("opened");

    // Convert boolean to string before setting the attribute
    button?.setAttribute(
      "aria-expanded",
      button?.classList?.contains("opened") ? "true" : "false"
    );
  };
  useEffect(() => {
    if (isHamburger) {
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "";
      document.body.style.overflow = "";
    }
  }, [isHamburger]);
  const router = useRouter();
  return (
    <>
      <header
        className={`  ${
          isScrollingUp && scrollY
            ? "sticky top-0 bg-[#0A192F] shadow-xl transform translate-y-0 transition-transform duration-300 z-[999]"
            : scrollY
            ? "overflow-hidden sticky top-0 bg-transparent transform -translate-y-full transition-transform duration-300"
            : "overflow-hidden"
        }`}
      >
        <nav className="container flex justify-between items-center">
          <Link href="#about" className={`w-[58%] md:w-auto flex`}>
            <Name />
          </Link>

          <ul className="hidden lg:flex">
            {nabList?.map((item) => {
              return (
                <li key={item.link} className="my-1 xl:mx-3">
                  <Link
                    href={item.link}
                    target={item?.newTab ? "_blank" : "_self"}
                    id="hero"
                    className={`px-4 font-semibold text-white  lg:hover:text-theme-text-highlight ${
                      item?.link === router?.asPath &&
                      "text-theme-text-highlight"
                    } `}
                  >
                    {item?.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            className="menu lg:hidden"
            onClick={handleMenuClick}
            aria-label="Main Menu"
          >
            <svg width="60" height="60" viewBox="0 0 100 100">
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>
        </nav>

        <div
          className={` fixed  z-50 overflow-hidden duration-200 min-h-screen shadow-lg ${
            isHamburger ? "w-full right-0 bg-[#0A192F]" : "w-[0px] right-[-20%]"
          }  flex flex-col gap-y-[15px]  pl-6 pt-5 md:pt-10 lg:hidden `}
        >
          <ul className="items-start xl:flex-row xl:items-center gap-x-[30px] gap-y-[15px] xl:ml-[54px] flex flex-col">
            {nabList.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  onClick={() => handleMenuClick()}
                  className={`text-bae font-semibold font-Manrope text-white`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
