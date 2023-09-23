import {
  BootstrapIcon,
  Css,
  FigmaIcon,
  FirebaseIcon,
  GithubIcon,
  GitIcon,
  Html,
  InsomniaIcon,
  JavaScript,
  JestIcon,
  MongoDBIcon,
  NextIcon,
  NodeIcon,
  NpmIcon,
  PostmanIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
  TypeScript,
} from "../SVGIcon";

const Skills = () => {
  const skills_list = [
    { skill_name: "JavaScript", skill_icon: <JavaScript /> },
    { skill_name: "TypeScript", skill_icon: <TypeScript /> },
    { skill_name: "React JS", skill_icon: <ReactIcon /> },
    { skill_name: "Next JS", skill_icon: <NextIcon /> },
    { skill_name: "Redux", skill_icon: <ReduxIcon /> },
    { skill_name: "Jest", skill_icon: <JestIcon /> },
    { skill_name: "NPM", skill_icon: <NpmIcon /> },
    { skill_name: "Node JS", skill_icon: <NodeIcon /> },
    { skill_name: "MongoDB", skill_icon: <MongoDBIcon /> },
    { skill_name: "Firebase Auth", skill_icon: <FirebaseIcon /> },
    { skill_name: "Figma", skill_icon: <FigmaIcon /> },
    { skill_name: "HTML", skill_icon: <Html /> },
    { skill_name: "CSS", skill_icon: <Css /> },
    { skill_name: "Github", skill_icon: <GitIcon /> },
    { skill_name: "Git", skill_icon: <GithubIcon /> },
    { skill_name: "Bootstrap", skill_icon: <BootstrapIcon /> },
    { skill_name: "Tailwind CSS", skill_icon: <TailwindIcon /> },
    { skill_name: "Insomnia", skill_icon: <InsomniaIcon /> },
    { skill_name: "Postman", skill_icon: <PostmanIcon /> },
  ];
  return (
    <div className="container relative ">
      <div className="flex flex-col md:flex-row mt-20">
        <div className="w-full">
          <div className="relative">
            <h3 className="text-center text-[70px] lg:text-[120px] font-black uppercase text-[#6363633f] hidden md:block">
              Expertise
            </h3>
            <h4 className="text-3xl  lg:text-[56px] font-bold text-center text-theme-text-title md:absolute top-9  lg:top-[70px] left-0 right-0">
              HANDY <span className="text-theme-text-highlight">SKILLS</span>{" "}
            </h4>
          </div>

          <div className="flex gap-3 flex-wrap mb-[60px] mt-3 justify-center">
            {skills_list.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center border-[#64ffda] text-theme-text-highlight gap-y-3 group hover:border-b-[1px] py-3"
                >
                  {item.skill_icon}

                  <p className="group-hover:text-white opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
                    {item.skill_name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
