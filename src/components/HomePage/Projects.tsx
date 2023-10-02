/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { myProjects } from "../Common/FixedData";
import Title from "../Common/Title";
import { External } from "../SVGIcon";

const Projects = () => {
  return (
    <>
      <section
        className="container py-12 lg:py-16 2xl:py-24  overflow-hidden"
        id="projects"
      >
        <Title title={"Some Things I've Built"} />

        <div className="flex flex-wrap  pt-5 lg:pt-10">
          {myProjects.map((project, index) => {
            return (
              <div
                className="w-full md:w-1/2 lg:w-4/12 py-2 md:p-2"
                key={index}
              >
                <div className="bg-[#1224408f] p-2 md:p-[14px] border-[#8892b0] hover:border-[#64ffda] border-[1px] rounded group cursor-pointer overflow-hidden hover:scale-[104%] transition-all  duration-300">
                  <div className="relative">
                    <img
                      src={project?.img_url}
                      alt=""
                      className="w-full object-cover rounded h-[200px]"
                    />
                    <div className="h-[100%] w-0 group-hover:w-full  bg-[#1224408f] top-0 absolute rounded opacity-0 translate-x-0 transition-all  duration-300 group-hover:opacity-100 backdrop-filter backdrop-blur-[2px]  flex justify-center items-center">
                      {project?.live_url && (
                        <Link
                          href={project?.live_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <External />
                        </Link>
                      )}
                    </div>
                  </div>
                  <Link
                    href={project?.live_url}
                    target="_blank"
                    className="text-text-info text-lg block mt-2 group-hover:text-text-highlight"
                  >
                    {project?.name}
                  </Link>
                  <div className="text-text-sub-title text-sm  flex items-center flex-wrap">
                    <p className="w-2/12">Stack: </p>
                    <p className="flex justify-start w-10/12">
                      {project?.stack?.map((item: any, idx) => {
                        return (
                          <span className=" whitespace-nowrap" key={idx}>
                            {item}
                            {idx !== project?.stack.length - 1 && " , "}
                          </span>
                        );
                      })}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
