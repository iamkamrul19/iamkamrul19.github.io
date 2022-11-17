import emailjs from "@emailjs/browser";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Call, Email, Git, Linkedin } from "../SVG/SVG";
const Contact = () => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    let newFromData = { ...formData };
    newFromData[field] = value;
    setFormData(newFromData);
  };
  const form = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.sendForm(
        "service_fhuvgr5",
        "gmail",
        form.current,
        "user_LiKtigRFtgHVAUzAqiUAr"
      );

      if (result.text == "OK") {
        toast.success("Mail sent!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        form.current.reset();
      }
    } catch (error) {
      console.log("error :", error);
    }
  };

  return (
    <div
      className="container md:mx-auto px-5 pt-10 py-10 lg:py-32"
      id="contact"
    >
      <div className="">
        <ToastContainer />
        <div className="relative">
          <h3 className="text-center text-[70px] lg:text-[120px] font-black text-[#6363633f] hidden md:block">
            CONTACT
          </h3>
          <h4 className="text-3xl  lg:text-[56px] font-bold text-center text-theme-text-title md:absolute top-9  lg:top-[70px] left-0 right-0">
            GET IN <span className="text-theme-text-highlight">TOUCH</span>{" "}
          </h4>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center 2xl:items-center">
          <div className="w-full md:w-8/12 lg:w-1/2">
            <h4 className="text-theme-text-sub-title text-xl font-semibold pt-5">
              DON&apos;T BE SHY!
            </h4>
            <p className="text-theme-text-normal py-5 lg:pr-5">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>

            <div className="flex gap-3 items-center pt-2">
              <div className="">
                <Email />
              </div>
              <div className="">
                <p className="text-theme-text-sub-title text-lg m-0">MAIL ME</p>
                <a
                  href="mailto:kamrulhasan.kh02@gmail.com"
                  className="text-theme-text-highlight m-y-0"
                >
                  kamrulhasan.kh02@gmail.com
                </a>
              </div>
            </div>
            <div className="flex gap-3 items-center pt-2">
              <div className="">
                <Call />
              </div>
              <div className="">
                <p className="text-theme-text-sub-title text-lg m-0">CALL ME</p>
                <a
                  href="tel:+8801950458002"
                  className="text-theme-text-highlight m-y-0"
                >
                  +8801950458002
                </a>
              </div>
            </div>
            <div className=" flex gap-5 my-5 items-center ">
              <Link href="https://github.com/kamrul-hasan01/">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 rounded-full relative group overflow-hidden hover:w-[130px] transition-all duration-300 hover:scale-[1.2]"
                >
                  <Git />

                  <span className="text-theme-text-highlight absolute top-[50%] translate-y-[-50%] opacity-0 left-0 transition-all duration-300 group-hover:left-12 group-hover:opacity-100">
                    Github
                  </span>
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/kamrul-hasan01/">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 rounded-full relative group overflow-hidden hover:w-[130px] transition-all duration-300 hover:scale-[1.2]"
                >
                  <Linkedin />

                  <span className="text-theme-text-highlight absolute top-[50%] translate-y-[-50%] opacity-0 left-0 transition-all duration-300 group-hover:left-12 group-hover:opacity-100">
                    Linkedin
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-8/12 lg:w-1/2 mt-10 py-[10px]">
            <form ref={form} onSubmit={(e) => handleSubmit(e)}>
              <input
                required
                type="text"
                className="lg:w-10/12 lg:mx-0 w-full mx-auto block py-3 rounded-2xl bg-transparent border-2 border-[#64ffda] focus:border-[#64ffda] outline-0 text-theme-text-title pl-5"
                name="name"
                placeholder="YOUR NAME"
                onChange={(e) => handleInputChange(e)}
              />
              <input
                required
                type="email"
                className="lg:w-10/12 lg:mx-0 w-full mx-auto block py-3 rounded-2xl bg-transparent border-2 border-[#64ffda] focus:border-[#64ffda] outline-0 text-theme-text-title pl-5 mt-5"
                placeholder="YOUR EMAIL"
                name="email"
                onChange={(e) => handleInputChange(e)}
              />
              <input
                required
                type="text"
                className="lg:w-10/12 lg:mx-0 w-full mx-auto block py-3 rounded-2xl bg-transparent border-2 border-[#64ffda] focus:border-[#64ffda] outline-0 text-theme-text-title pl-5 mt-5"
                placeholder="YOUR SUBJECT"
                name="subject"
                onChange={(e) => handleInputChange(e)}
              />
              <textarea
                required
                type="text"
                className="lg:w-10/12 lg:mx-0 w-full mx-auto block py-3 rounded-2xl bg-transparent border border-[#64ffda] focus:border-[#64ffda] outline-0 text-theme-text-title pl-5 mt-5"
                placeholder="YOUR Message"
                name="message"
                onChange={(e) => handleInputChange(e)}
              />
              <button
                type="submit"
                className="text-theme-text-title  mt-6 border  w-7/12 md:w-5/12 py-3 rounded-2xl border-[#64ffda] text-lg active:scale-[0.95] transition ease-in-out font-light hover:text-theme-text-highlight"
              >
                SEND
              </button>
              <p className="pt-5 text-theme-text-highlight">
                Don’t like forms?{" "}
                <a
                  href="mailto:name@email.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Send me an email. 👋
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
