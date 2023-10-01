import { nabList } from "@/components/Common/FixedData";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = () => {
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
    if (window?.screen?.width > 1024) return;
    setIsHamburger(!isHamburger);
    const button = document.querySelector(".menu");
    button?.classList.toggle("opened");
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
        className={`${
          (isScrollingUp && scrollY) || isHamburger
            ? "bg-[#0a192fd9] shadow-[0_10px_30px_-10px_#020c1bb3] sticky top-0 z-[999] backdrop-filter backdrop-blur-[10px] translate-y-0"
            : scrollY
            ? "translate-y-[-100%] bg-[#0a192fd9] shadow-[0_10px_30px_-10px_#020c1bb3] sticky top-0 z-[999] backdrop-filter backdrop-blur-[10px]"
            : "bg-transparent"
        }    transition-all duration-300 transform translate-y-0 `}
      >
        <nav className="container flex justify-between items-center h-[60px] relative">
          <Link
            href={"#hero"}
            className="text-[24px] text-text-highlight uppercase font-cobin"
          >
            Kamrul Hasan{" "}
          </Link>

          <button
            className="menu lg:hidden relative z-[999]"
            onClick={handleMenuClick}
            aria-label="Main Menu"
          >
            <svg viewBox="0 0 100 100" className="h-[40px] w-[40px]">
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
          <ul
            className={`pl-10 lg:pl-0 lg:items-center flex-col lg:flex-row absolute gap-x-3 gap-y-5 lg:static         
          
            ${
              isHamburger
                ? "w-[247px] h-[calc(100vh)] lg:w-auto z-[50px] top-0 right-[-32px] md:right-[-119px] bg-[#112240] lg:bg-transparent pt-[80px] flex transition-transform duration-300 ease-in"
                : "hidden lg:flex"
            }
          
          `}
          >
            {nabList?.map((item) => {
              return (
                <li key={item?.link}>
                  <Link
                    href={item.link}
                    onClick={() => handleMenuClick()}
                    target={item?.newTab ? "_blank" : "_self"}
                    className={`font-semibold  text-[13px] px-1 ${
                      item?.name === "Resume"
                        ? " lg:ml-5 border-[.1px] border-[#64ffda] rounded-[2px] py-[0.73rem] px-[1rem] text-text-highlight"
                        : ""
                    }     ${
                      router?.asPath === item?.link
                        ? "text-text-highlight"
                        : "text-text-info"
                    } `}
                  >
                    {item?.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
