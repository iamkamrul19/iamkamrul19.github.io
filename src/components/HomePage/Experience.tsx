import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { experiences } from "../Common/FixedData";
import Title from "../Common/Title";

const Experience = () => {
  const [selected, setSelected] = useState(experiences[0]);

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

  const experienceVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <div className="container py-12 lg:py-16 overflow-hidden" id="experience">
      <Title title={"Where I've Worked"} />

      <div className="max-w-3xl mx-auto  pt-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Company List */}
          <motion.div
            className="lg:w-1/4"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <ul className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 lg:gap-3 pb-3 lg:pb-0">
              {experiences.map((experience, index) => (
                <motion.li
                  key={index}
                  className="flex-shrink-0"
                  variants={itemVariants}
                >
                  <motion.button
                    onClick={() => setSelected(experience)}
                    className={`w-full text-left px-4 py-2.5 rounded-md transition-all duration-300 ${
                      selected?.company === experience?.company
                        ? "bg-[#112240] text-[#64ffda] border-l-2 border-[#64ffda]"
                        : "text-[#8892b0] hover:bg-[#112240]/50 hover:text-[#64ffda] border-l-2 border-transparent"
                    }`}
                    whileHover={{ scale: 1.02, x: 2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-sm font-medium">
                      {experience?.company}
                    </span>
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Experience Details */}
          <div className="lg:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected?.company}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={experienceVariants}
                className="space-y-5"
              >
                <div className="bg-[#112240]/30 p-5 rounded-lg">
                  <motion.h3
                    className="text-[#ccd6f6] text-xl font-bold mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {selected?.title}
                  </motion.h3>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-1"
                  >
                    <Link
                      href={selected?.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#64ffda] hover:underline inline-block text-base"
                    >
                      @{selected?.company}
                    </Link>
                    <p className="text-[#8892b0] text-sm">{selected?.date}</p>
                  </motion.div>
                </div>

                <motion.ul
                  className="space-y-3"
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  {selected?.description?.map((desc, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3 text-[#8892b0] group bg-[#112240]/30 p-4 rounded-lg hover:bg-[#112240]/50 transition-colors duration-300"
                      variants={itemVariants}
                    >
                      <span className="text-[#64ffda] mt-0.5 flex-shrink-0">
                        ▹
                      </span>
                      <span className="text-sm leading-relaxed">
                        {index === selected?.description.length - 1 && (
                          <span className="text-[#ccd6f6] font-medium">
                            Stack:{" "}
                          </span>
                        )}
                        {desc}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
