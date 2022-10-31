import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import { BurgerMenu, CrossIcon } from "../SVG/SVG";
const Header = () => {
  const router = useRouter();
  const currencyRef = useRef(null);
  const headerRef = useRef(null);
  const [navOpen, setNavOpen] = useState(false);

  // Chapter: Handle Side-Drawer
  const switchSideDrawerHandler = useCallback(function (close) {
    if (screen.width > 900) return;
    setNavOpen(true);
    document.querySelector("body").classList.add("overflow-hidden");
    if (close) {
      setNavOpen(false);
      document.querySelector("body").classList.remove("overflow-hidden");
      if (
        document
          .querySelector(".js__side-drawer")
          .classList.contains("translate-x-full")
      )
        return 0;
    }
    document
      .querySelector(".js__side-drawer")
      .classList.toggle("translate-x-full");
  }, []);
  // End| Handle Side-Drawer

  useEffect(() => {
    // Chapter: Intersection Observer
    const observer = document.querySelector(".js__observer");

    const callback = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        headerRef.current.style.position = "absolute";

        headerRef.current.style.backgroundColor = "transparent";
        headerRef.current.style.borderBottom = "none";
        if (screen.width < 900) return;
      } else {
        headerRef.current.style.backgroundColor = "#0A192F";

        headerRef.current.style.position = "fixed";

        headerRef.current.style.borderBottom = "1px solid #64ffda";
        if (screen.width < 900) return;
      }
    };
    const headerObserver = new IntersectionObserver(callback, {
      root: null,
      threshold: 1,
      rootMargin: "50px",
    });
    observer && headerObserver?.observe(observer);

    if (screen.width > 900) return;

    function handleClickOutside(event) {
      const performAction = (ref) => {
        if (ref.current && !ref.current.contains(event.target)) {
          document.querySelectorAll(".js__sub-menu").forEach((el) => {
            el.style.maxHeight = "0px";
          });
        }
      };
      performAction(currencyRef);
    }

    let sideDrawerClickListener;
    document.querySelectorAll(".js__side-drawer a").forEach((el) => {
      sideDrawerClickListener = el.addEventListener("mousedown", () => {
        switchSideDrawerHandler(false);
      });
    });

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousedown", sideDrawerClickListener);
    };
  }, [router.pathname, switchSideDrawerHandler]);

  function setSubMenuHeightHandler(model, setModel, e) {
    if (screen.width > 900) return;
  }

  const activeNavColor = (e) => {
    document.querySelectorAll(".nav__item").forEach((el) => {
      el.classList.remove("active");
      console.log(el);
    });
    e.target.classList.add("active");
    setNavOpen(false);
  };
  // console.log("nav-open", navOpen);
  const handleIconClick = () => {
    // console.log("hello");
    // document.querySelectorAll(".nav__item").forEach((el) => {
    //   el.classList.remove("active");
    // });
    // document.getElementById("hero").classList.add("active");
    // console.log(document.getElementById("hero"));
  };

  return (
    <>
      <header
        ref={headerRef}
        className="bg-transparent z-10 top-0 absolute w-full"
      >
        <div className="container">
          <nav className="flex justify-between items-center ">
            <Link href="#about">
              <a className={`w-[45%] md:w-auto flex`} onClick={handleIconClick}>
                <p className="text-2xl group flex justify-center items-center">
                  <span className="text-theme-text-highlight text-4xl group-hover:text-theme-text-title">
                    {"<"}
                  </span>
                  <span className=" text-theme-text-title  group-hover:text-theme-text-highlight">
                    Kamrul_Hasan
                  </span>
                  <span className="text-theme-text-highlight  group-hover:text-theme-text-title">
                    {"/"}
                  </span>
                  <span className="text-theme-text-highlight text-4xl group-hover:text-theme-text-title">
                    {">"}
                  </span>
                </p>
                {/* <Image src="/vercel.svg" width={212} height={37} alt="Logo" /> */}
              </a>
            </Link>

            <div className="flex items-center justify-end h-[7vh] md:h-[10vh] px-4 md:px-0 flex-1">
              {/* mobile screen toggle icon  */}
              <span
                onClick={switchSideDrawerHandler.bind(this, navOpen)}
                className="w-6 h-6 burger lg:hidden z-[1]"
              >
                {navOpen ? <CrossIcon /> : <BurgerMenu />}
              </span>
              <ul className="js__side-drawer lg:justify-end lg:items-center flex items-start lg:flex-row flex-nowrap flex-col lg:pt-0 bg-theme-bg lg:bg-inherit fixed lg:static top-0 right-0 h-[100vh] lg:h-auto translate-x-full lg:translate-x-0 transition-transform pt-16 duration-500 px-4 lg:px-0 w-full font-semibold text-white">
                <li
                  className="my-1 lg:mx-3"
                  onClick={switchSideDrawerHandler.bind(this, navOpen)}
                >
                  <Link href="#home">
                    <a
                      id="hero"
                      onClick={activeNavColor}
                      className="nav__item  lg:hover:text-theme-text-highlight"
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li
                  className="my-1 lg:mx-3"
                  onClick={switchSideDrawerHandler.bind(this, navOpen)}
                >
                  <Link href="#about">
                    <a
                      onClick={activeNavColor}
                      className="nav__item  lg:hover:text-theme-text-highlight"
                    >
                      About Me
                    </a>
                  </Link>
                </li>
                <li
                  className="my-1 lg:mx-3"
                  onClick={switchSideDrawerHandler.bind(this, navOpen)}
                >
                  <Link href="#portfolio">
                    <a
                      onClick={activeNavColor}
                      className="nav__item  lg:hover:text-theme-text-highlight"
                    >
                      Portfolio
                    </a>
                  </Link>
                </li>
                <li
                  className="my-1 lg:mx-3"
                  onClick={switchSideDrawerHandler.bind(this, navOpen)}
                >
                  <Link href="#experience">
                    <a
                      onClick={activeNavColor}
                      className="nav__item  lg:hover:text-theme-text-highlight"
                    >
                      Experience
                    </a>
                  </Link>
                </li>
                <li
                  className="my-1 lg:mx-3"
                  onClick={switchSideDrawerHandler.bind(this, navOpen)}
                >
                  <Link href="#contact">
                    <a
                      onClick={activeNavColor}
                      className="nav__item  lg:hover:text-theme-text-highlight"
                    >
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
