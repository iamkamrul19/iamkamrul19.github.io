/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Link from "next/link";
import { myProjects } from "../Common/FixedData";
import Title from "../Common/Title";
import { External } from "../SVGIcon";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="container py-12 lg:py-16 overflow-hidden" id="projects">
      <Title title={"Some Things I've Built"} />

      <div className="max-w-3xl mx-auto pt-4">
        <motion.div
          className="flex flex-col gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {myProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative h-[500px] rounded-lg overflow-hidden shadow-lg shadow-[#64ffda]/5 hover:shadow-xl hover:shadow-[#64ffda]/10 transition-all duration-300"
            >
              {/* Background Image */}
              <img
                src={project?.img_url}
                alt={project?.name}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#112240]/90 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="relative z-10">
                  <Link
                    href={project?.live_url || "#"}
                    target="_blank"
                    className="block mb-4"
                  >
                    <motion.h3
                      className="text-[#ccd6f6] text-2xl font-semibold group-hover:text-[#64ffda] transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {project?.name}
                    </motion.h3>
                  </Link>

                  <div className="flex items-start gap-4">
                    <span className="text-[#64ffda] text-base font-medium flex-shrink-0">
                      Stack:
                    </span>
                    <div className="flex flex-wrap gap-3">
                      {project?.stack?.map((item: string, idx: number) => (
                        <motion.span
                          key={idx}
                          className="text-[#8892b0] text-base whitespace-nowrap"
                          whileHover={{ color: "#64ffda" }}
                          transition={{ duration: 0.2 }}
                        >
                          {item}
                          {idx !== project?.stack.length - 1 && ","}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* External Link Button */}
                {project?.live_url && (
                  <motion.div
                    className="absolute top-6 right-6 z-10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={project?.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block p-4 rounded-full bg-[#64ffda]/10 hover:bg-[#64ffda]/20 transition-colors duration-300 shadow-md shadow-[#64ffda]/10"
                    >
                      <External className="w-7 h-7 text-[#64ffda]" />
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
