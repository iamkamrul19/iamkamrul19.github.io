import CommonLink from "../Common/CommonLink";
import { ResumeLink, skills } from "../Common/FixedData";
import Title from "../Common/Title";

const About = () => {
  return (
    <div
      className="container py-12 lg:py-16 2xl:py-20 overflow-hidden"
      id="about"
    >
      <Title title={"About Me"} />

      <div className="max-w-3xl mx-auto">
        <div className="space-y-6">
          <p className="text-[#8892b0] text-base lg:text-lg leading-relaxed">
            I&apos;m{" "}
            <span className="text-[#64ffda] font-medium">MD Kamrul Hasan</span>,
            a passionate and experienced{" "}
            <span className="text-[#64ffda] font-medium">
              Full Stack Developer
            </span>{" "}
            specializing in building modern web applications. With{" "}
            <span className="text-[#64ffda] font-medium">
              three years of experience
            </span>{" "}
            in web development, I focus on creating scalable and user-friendly
            solutions that deliver exceptional experiences.
          </p>

          <p className="text-[#8892b0] text-base lg:text-lg leading-relaxed">
            As a{" "}
            <span className="text-[#64ffda] font-medium">problem solver</span>{" "}
            and{" "}
            <span className="text-[#64ffda] font-medium">tech enthusiast</span>,
            I thrive on challenges and consistently deliver high-quality
            solutions. I hold a{" "}
            <span className="text-[#64ffda] font-medium">
              BSc in Computer Science
            </span>{" "}
            and am committed to continuous learning and improvement.
          </p>
        </div>

        <div className="flex justify-start my-8">
          <CommonLink
            link={ResumeLink}
            name={`Download My Resume`}
            blank={true}
          />
        </div>

        <div className="mt-12">
          <h3 className="text-[#ccd6f6] text-xl font-semibold mb-6">
            Technical Expertise
          </h3>

          <div className="flex flex-col gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group flex items-center space-x-2 p-4 rounded-lg bg-[#112240]/50 hover:bg-[#112240]/80 transition-all duration-300 border border-[#233554] hover:border-[#64ffda]/30"
              >
                <span className="text-[#64ffda] flex-shrink-0">▹</span>
                <div className="flex flex-wrap items-center gap-2">
                  {skill.name.map((name, idx) => (
                    <span
                      key={idx}
                      className="text-[#8892b0] text-base group-hover:text-[#64ffda] transition-colors duration-300"
                    >
                      {name}
                      {idx !== skill.name.length - 1 && ","}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
