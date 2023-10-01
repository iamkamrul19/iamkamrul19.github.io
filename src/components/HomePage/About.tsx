import Image from "next/image";
import CommonLink from "../Common/CommonLink";
import { ResumeLink, skills } from "../Common/FixedData";

import Title from "../Common/Title";

const About = () => {
  return (
    <div className="container" id="about">
      <Title title={"About Me"} />

      <div className="flex  flex-wrap py-10">
        <div className="w-7/12">
          <p className="text-text-sub-title text-lg leading-6">
            I&apos;m <span className="text-text-info">MD Kamrul Hasan</span>, an
            experienced front-end developer specializing in{" "}
            <span className="text-text-info">e-commerce websites</span>, regular
            websites, and compelling landing pages. With{" "}
            <span className="text-text-info">two years of experience</span>,
            I&apos;m dedicated to delivering exceptional user experiences.{" "}
            <br /> <br /> As a{" "}
            <span className="text-text-info">problem solver</span>, I thrive on
            challenges and consistently exceed expectations. I&apos;ve completed
            my <span className="text-text-info">BSc in Computer Science</span>{" "}
            in 2021, further strengthening my expertise.
          </p>
          <div className="flex justify-start my-3">
            <CommonLink
              link={ResumeLink}
              name={`Download My Resume`}
              blank={true}
            />
          </div>

          <div className="mt-8">
            <p className="text-text-sub-title">
              Comprehensive Technical Expertise in Modern Web Development
            </p>

            <ul className="flex flex-col pt-3 gap-y-1">
              {skills.map((skill, index) => {
                return (
                  <li
                    className=" flex gap-x-2 pl-5 relative before:absolute before:content-['▹'] before:left-0 before:top-[-2px] before:text-[#64ffda] before:text-lg"
                    key={index}
                  >
                    {skill.name.map((name, index) => {
                      return (
                        <p
                          key={index}
                          className="text-text-sub-title text-base "
                        >
                          {name}
                          {index !== skill.name.length - 1 && ", "}
                        </p>
                      );
                    })}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="w-5/12">
          <div className="w-[180px] h-[180px] lg:w-[300px] lg:h-[300px]  rounded mx-auto relative  z-[9999px]">
            <Image
              height={300}
              width={300}
              alt="kamrul, front end developer"
              src="/my.jpg"
              layout="responsive"
              className="rounded-[1%]"
            />
            <div className="w-[200px] h-[200px] lg:w-[350px] lg:h-[350px]   border-t border-r border-[#64ffda] absolute    -top-2 -right-2   "></div>
            <div className="w-[200px] h-[200px] lg:w-[350px] lg:h-[350px]   border-t border-l border-[#64ffda] absolute    -top-2 -left-2   "></div>

            <div className="w-[200px] h-[200px] lg:w-[350px] lg:h-[350px]   border-b border-l border-[#64ffda] absolute     -bottom-2 -left-2  "></div>
            <div className="w-[200px] h-[200px] lg:w-[350px] lg:h-[350px]   border-b border-r border-[#64ffda] absolute     -bottom-2 -right-2  "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
