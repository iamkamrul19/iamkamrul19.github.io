import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import { BurgerMenu, CrossIcon } from "../SVG/SVG";
const Header = (props) => {
  const router = useRouter();
  const [model, setModel] = useState(null);
  const currencyRef = useRef(null);
  const headerRef = useRef(null);
  const [navOpen, setNavOpen] = useState(false);
  const [logo, setLogo] = useState("Logo_white.svg");

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
        headerRef.current.querySelector("ul").style.color = "white";
        headerRef.current.querySelector(".burger").style.fill = "white";
        headerRef.current.querySelector(".navArrowDown").style.fill = "white";
        if (
          router.pathname?.includes("evaluation-model") ||
          router.pathname?.includes("express-model")
        ) {
          headerRef.current.querySelector(".navArrowDown").style.fill =
            "#635BFF";
        }
        headerRef.current.querySelector(".js__clients").style.backgroundImage =
          "none";
        headerRef.current.querySelector(".js__clients a").style.color =
          "transparent";

        headerRef.current.querySelector(
          ".js__clients a"
        ).style.backgroundImage = "linear-gradient(to right, #c96fff ,#635bff)";
      } else {
        setLogo("Logo_Main.svg");
        headerRef.current.style.backgroundColor = "#fffffff3";

        headerRef.current.style.position = "fixed";

        headerRef.current.style.borderBottom = "1px solid #ccc";
        if (screen.width < 900) return;
        headerRef.current.querySelector("ul").style.color = "black";

        headerRef.current.querySelector(".burger").style.fill = "black";

        headerRef.current.querySelector(".js__clients").style.backgroundImage =
          "linear-gradient(to right, #c96fff ,#635bff)";

        headerRef.current.querySelector(".navArrowDown").style.fill = "black";
        headerRef.current.querySelector(".js__clients a").style.color = "white";
      }
    };
    const headerObserver = new IntersectionObserver(callback, {
      root: null,
      threshold: 1,
      rootMargin: "50px",
    });
    observer && headerObserver?.observe(observer);
    // End| Intersection Observer

    // Chapter: Initial Nav Activation

    // End| Initial Nav Activation

    // Chapter: Expand and Collapse Submenu in Mobile When Clicked Outside of the Submenu
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
    // End| Expand and Collapse Submenu in Mobile When Clicked Outside of the Submenu
  }, [router.pathname, switchSideDrawerHandler]);

  // Chapter: Expand and Collapse Submenu in Mobile
  function setSubMenuHeightHandler(model, setModel, e) {
    if (screen.width > 900) return;

    document.querySelectorAll(".js__sub-menu").forEach((el) => {
      el.style.maxHeight = "0px";
    });
    if (model !== e.target) {
      e.target.closest("li").querySelector(".js__sub-menu").style.maxHeight =
        "100vh";
      setModel(e.target);
    } else setModel(null);
  }
  // End| Expand and Collapse Submenu in Mobile

  // Chapter: Nav Activation on Clicking Nav Menu
  const activeNavColor = (e) => {
    document.querySelectorAll(".nav__item").forEach((el) => {
      el.classList.remove("active");
    });
    if (e.target.innerHTML !== "Pricing") {
      e.target.classList.add("active");
    }
    if (e.target.innerHTML === "Pricing") {
      document.getElementById("home").classList.add("active");
    }
    if (
      e.target.innerHTML === "Evaluation" ||
      e.target.innerHTML === "Express"
    ) {
      document.getElementById("parentDiv").classList.add("active");
    }

    setNavOpen(false);
  };
  // End| Nav Activation on Clicking Nav Menu

  // logo icon click active color set in home link
  const handleIconClick = () => {
    document.querySelectorAll(".nav__item").forEach((el) => {
      el.classList.remove("active");
    });
    document.getElementById("home").classList.add("active");
  };

  return (
    <>
      <header
        ref={headerRef}
        className="bg-transparent z-10 top-0 absolute w-full"
        style={props.style}
      >
        <div className="container">
          <nav className="flex justify-between items-center ">
            <Link href="/">
              <a className={`w-[45%] md:w-auto flex`} onClick={handleIconClick}>
                <Image
                  src="/vercel.svg"
                  width={212}
                  height={37}
                  alt="Logo"
                  placeholder="blur"
                  blurDataURL="https:nextventures.fra1.digitaloceanspaces.com/Logo_Main.svg?auto=format&fit=max&w=256"
                />
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
              <ul
                className="js__side-drawer lg:justify-end lg:items-center flex items-start lg:flex-row flex-nowrap flex-col lg:pt-0 bg-theme-bg lg:bg-inherit fixed lg:static top-0 right-0 h-[100vh] lg:h-auto translate-x-full lg:translate-x-0 transition-transform pt-16 duration-500 px-4 lg:px-0 w-full font-semibold"
                style={{ top: props?.topValue }}
              >
                <li
                  className="my-1 lg:mx-3"
                  onClick={switchSideDrawerHandler.bind(this, navOpen)}
                >
                  <Link href="#home">
                    <a
                      onClick={activeNavColor}
                      className="nav__item text-white lg:hover:text-theme-text-highlight"
                    >
                      Home
                    </a>
                  </Link>
                </li>

                <li className="my-0.5 lg:mx-3">
                  <Link
                    href="#about"
                    onClick={switchSideDrawerHandler.bind(this, navOpen)}
                  >
                    <a
                      onClick={activeNavColor}
                      className="nav__item text-white lg:hover:text-theme-text-highlight"
                    >
                      About
                    </a>
                  </Link>
                </li>
                <li className="my-0.5 lg:mx-3">
                  <Link
                    href="#portfolio"
                    onClick={switchSideDrawerHandler.bind(this, navOpen)}
                  >
                    <a
                      onClick={activeNavColor}
                      className="nav__item text-white lg:hover:text-theme-text-highlight"
                    >
                      Portfolio
                    </a>
                  </Link>
                </li>
                <li className="my-0.5 lg:mx-3">
                  <Link
                    href="#experience"
                    onClick={switchSideDrawerHandler.bind(this, navOpen)}
                  >
                    <a className="nav__item text-white lg:hover:text-theme-text-highlight">
                      Experience
                    </a>
                  </Link>
                </li>
                <li className="my-0.5 lg:mx-3">
                  <Link href="#contact">
                    <a
                      onClick={activeNavColor}
                      className="nav__item text-white  lg:hover:text-theme-text-highlight"
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
