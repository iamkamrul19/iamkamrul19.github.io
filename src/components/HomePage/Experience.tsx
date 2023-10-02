import Link from "next/link";
import { useState } from "react";
import { experiences } from "../Common/FixedData";
import Title from "../Common/Title";

const Experience = () => {
  const [selected, setSelected] = useState(experiences[0]);
  return (
    <div
      className="container py-12 lg:py-16 2xl:py-20  overflow-hidden"
      id="experience"
    >
      <Title title={"Where I've Worked"} />

      <div className="py-10 flex flex-wrap gap-y-5">
        <div className="w-full lg:w-3/12">
          <ul className="border-l-[1px] border-[#8892b0] pl-5">
            {experiences.map((experience, index) => {
              return (
                <li key={index} className="py-2">
                  <button
                    className={`text-base ${
                      selected?.company === experience?.company
                        ? "text-text-highlight relative before:absolute before:w-[2px] before:-top-2 before:h-[43px] before:-left-[21px] before:bg-[#64ffda] experience-active"
                        : "text-text-sub-title "
                    }`}
                    onClick={() => setSelected(experience)}
                  >
                    {experience?.company}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={`w-full lg:w-9/12 pl-5 flex flex-col gap-y-1`}>
          <div className="flex lg:items-center flex-col md:flex-row gap-y-2 mb-3">
            <h3 className="text-text-info text-lg font-bold whitespace-nowrap">
              {selected?.title}
            </h3>
            <Link
              href={selected?.website}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:ml-2 text-text-highlight"
            >
              @{selected?.company}
            </Link>
          </div>
          <p className="text-text-info text-sm">{selected?.date}</p>
          <ul className="flex flex-col gap-y-1">
            {selected?.description?.map((desc, index) => {
              return (
                <li
                  key={index}
                  className="text-text-sub-title text-sm    relative before:absolute before:content-['▹'] before:left-0 before:top-[-2px] before:text-[#64ffda] before:text-lg pl-5"
                >
                  {index === selected?.description.length - 1 && (
                    <span className="text-text-info">Stack: </span>
                  )}{" "}
                  {desc}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
