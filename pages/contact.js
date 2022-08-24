import Head from "next/head";
import React from "react";
import { Call, Email, Git, Linkedin } from "../components/SVG/SVG";
const Contact = () => (
  <>
    <Head>
      <title>Contact</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main className=" lg:[100vh] overflow-hidden">
      <div className="container md:mx-auto px-5 pt-10">
        <div className="">
          <div className="relative">
            <h3 className="text-center text-[70px] lg:text-[120px] font-black text-[#6363633f] hidden md:block">
              CONTACT
            </h3>
            <h4 className="text-3xl  lg:text-[56px] font-bold text-center text-theme-text-title md:absolute top-9  lg:top-[70px] left-0 right-0">
              GET IN <span className="text-theme-text-highlight">TOUCH</span>{" "}
            </h4>
          </div>
          <div className="flex flex-col md:flex-row 2xl:items-center">
            <div className="w-full md:w-1/2">
              <h4 className="text-theme-text-sub-title text-xl font-semibold pt-5">
                DON&apos;T BE SHY!
              </h4>
              <p className="text-theme-text-normal py-5">
                Feel free to get in touch with me. I am always open to
                discussing new projects, <br className="hidden 2xl:block" />{" "}
                creative ideas or opportunities to be part of your visions.
              </p>

              <div className="flex gap-3 items-center pt-2">
                <div className="">
                  <Email />
                </div>
                <div className="">
                  <p className="text-theme-text-sub-title text-lg m-0">
                    MAIL ME
                  </p>
                  <a
                    href="mailto:01945560"
                    className="text-theme-text-highlight m-y-0"
                  >
                    kamrul@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex gap-3 items-center pt-2">
                <div className="">
                  <Call />
                </div>
                <div className="">
                  <p className="text-theme-text-sub-title text-lg m-0">
                    CALL ME
                  </p>
                  <a
                    href="tel:123-456-7890"
                    className="text-theme-text-highlight m-y-0"
                  >
                    01950458000
                  </a>
                </div>
              </div>
              <div className=" flex gap-5 mt-5">
                <Git /> <Linkedin />
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-10 py-[10px]">
              <form>
                <input
                  type="text"
                  className="lg:w-8/12 lg:mx-0 w-full mx-auto block py-3 rounded-2xl bg-transparent border-2 border-[#64ffda] focus:border-[#64ffda] outline-0 text-theme-text-title pl-5"
                  placeholder="YOUR NAME"
                />
                <input
                  type="email"
                  className="lg:w-8/12 lg:mx-0 w-full mx-auto block py-3 rounded-2xl bg-transparent border-2 border-[#64ffda] focus:border-[#64ffda] outline-0 text-theme-text-title pl-5 mt-5"
                  placeholder="YOUR EMAIL"
                />
                <input
                  type="text"
                  className="lg:w-8/12 lg:mx-0 w-full mx-auto block py-3 rounded-2xl bg-transparent border-2 border-[#64ffda] focus:border-[#64ffda] outline-0 text-theme-text-title pl-5 mt-5"
                  placeholder="YOUR SUBJECT"
                />
                <textarea
                  required
                  type="text"
                  className="lg:w-8/12 lg:mx-0 w-full mx-auto block py-3 rounded-2xl bg-transparent border border-[#64ffda] focus:border-[#64ffda] outline-0 text-theme-text-title pl-5 mt-5"
                  placeholder="YOUR SUBJECT"
                />
                <button
                  type="submit"
                  className="text-theme-text-title  mt-6 border  w-7/12 md:w-4/12 py-3 rounded-2xl border-[#64ffda] text-lg active:scale-[0.95] transition ease-in-out font-light hover:text-theme-text-highlight"
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
    </main>
  </>
);

export default Contact;
