import { nabList } from "@/components/Common/FixedData";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  const handleMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const router = useRouter();

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 10 ? "bg-[#0a192f] shadow-md" : "bg-transparent"
      }`}
    >
      <nav className=" container ">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-[#64ffda] hover:text-white transition-colors duration-300"
          >
            Kamrul Hasan
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {nabList.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                target={item?.newTab ? "_blank" : "_self"}
                className={`text-sm font-medium transition-all duration-300 ${
                  router?.asPath === item?.link
                    ? "text-[#64ffda]"
                    : "text-gray-300 hover:text-[#64ffda]"
                } ${
                  item?.name === "Resume"
                    ? "bg-[#112240]/80 text-[#64ffda] px-4 py-2 rounded-md hover:bg-[#112240] font-semibold shadow-md shadow-[#64ffda]/10 hover:shadow-lg hover:shadow-[#64ffda]/20 transition-all duration-300 border border-[#64ffda]/20 hover:border-[#64ffda]/40"
                    : "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#64ffda] hover:after:w-full after:transition-all after:duration-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden relative z-50 p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
            onClick={handleMenuClick}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-between">
              <span
                className={`block w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              />
              <span
                className={`block w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-0 bg-[#0a192f] transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          style={{
            transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)",
          }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            {nabList.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                onClick={handleMenuClick}
                target={item?.newTab ? "_blank" : "_self"}
                className={`text-xl font-medium transition-all duration-300 ${
                  router?.asPath === item?.link
                    ? "text-[#64ffda]"
                    : "text-gray-300 hover:text-[#64ffda]"
                } ${
                  item?.name === "Resume"
                    ? "bg-[#64ffda] text-[#0a192f] px-6 py-2 rounded-md hover:bg-[#64ffda]/90 font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                    : "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#64ffda] hover:after:w-full after:transition-all after:duration-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
