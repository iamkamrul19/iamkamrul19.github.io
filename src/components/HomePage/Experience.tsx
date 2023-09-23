const Experience = () => {
  const list = [
    {
      title: "Front-End Developer",
      company: "Next Ventures",
      date: "March 2022 - Present",
      descriptions: [
        "Minimize unnecessary API requests by implementing batching and caching.",
        "Manage data and UI state effectively using modern libraries and best practices.",
        "Maintain component-level state wisely to improve performance.",
        "Craft compelling landing pages and user funnels for optimal conversions and enhanced user experiences.",
        "Work closely with leadership to enhance projects and streamline processes.",
        "Implement secure and efficient payment gateways.",
        "Handle API errors gracefully for a smoother user experience.",
        "Continuously improve our online platforms to meet evolving needs.",
        "Actively develop and enhance user interfaces for successful project delivery.",
        "Elevate code quality through effective reviews and feedback.",
      ],
      stack: [
        "JavaScript",
        "TypeScript",
        "React Js",
        "Next Js",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "Ant Design",
      ],
    },
    {
      title: "Front-End Developer",
      company: "Triox Technology LTD",
      date: "December 2021 - February 2022",
      descriptions: [
        "Lead end-to-end development using the MERN stack for seamless application integration.",
        "Design and maintain MongoDB databases for efficient data handling.",
        "Create RESTful APIs with Node.js and Express.js to connect front-end and back-end.",
        "Craft responsive interfaces with React.js, prioritizing user experience.",
        "Stay updated on web development trends and best practices for project enhancements.",
      ],
      stack: [
        "JavaScript",
        "React Js",
        "HTML",
        "CSS",
        "Ant Design",
        "Node Js",
        "Express Js",
        "MongoDB",
      ],
    },
  ];
  return (
    <div className="container md:mx-auto px-5 pt-10" id="experience">
      <div className="">
        <div className="relative">
          <h3 className="text-center text-[70px] lg:text-[120px] font-black text-[#6363633f] hidden md:block uppercase">
            Experience
          </h3>
          <h4 className="text-3xl  lg:text-[56px] font-bold text-center text-theme-text-title md:absolute top-9  lg:top-[70px] left-0 right-0">
            MY <span className="text-theme-text-highlight">RIDE</span>{" "}
          </h4>
        </div>

        <div className="flex flex-col gap-y-5  items-center justify-center pt-5">
          {list.map((item, index) => {
            return (
              <div
                className=" bg-[#ffffff1a] p-5 rounded  w-full md:w-8/12"
                key={index}
              >
                <div className="flex justify-between items-center border-b-[1px] ">
                  <div className="flex flex-col ">
                    <h5 className="text-xl font-semibold text-white">
                      {item.title}
                    </h5>
                    <p className="text-theme-text-highlight text-lg">
                      {item.company}
                    </p>
                  </div>
                  <p className="text-white">{item.date}</p>
                </div>
                <ul className="text-sm lg:text-base font-normal  text-theme-text-title pt-3 pl-5">
                  {item.descriptions.map((desc, index) => {
                    return (
                      <li
                        className="relative before:absolute before:content-['▹'] before:leading-[30px] before:text-3xl before:text-theme py-1 before:top-1/2 before:-translate-y-1/2 before:right-full before:text-theme-text-highlight "
                        key={index}
                      >
                        {desc}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
