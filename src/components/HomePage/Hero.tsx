import { motion } from "framer-motion";
import CommonLink from "../Common/CommonLink";
import { ResumeLink } from "../Common/FixedData";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="container relative overflow-hidden bg-[#0a192f]">
      <div className="min-h-screen flex items-center justify-start">
        <motion.div
          className="max-w-5xl xl:max-w-6xl pt-20 lg:pt-0 px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block bg-gradient-to-r from-[#64ffda] to-[#64ffda]/50 text-transparent bg-clip-text"
          >
            <span className="text-lg font-mono tracking-wider">
              Hi, my name is
            </span>
          </motion.div>

          <div className="mt-8 mb-6">
            <motion.h1
              variants={itemVariants}
              className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight leading-[1.1]"
            >
              <span className="inline-block bg-gradient-to-r from-[#ccd6f6] to-[#8892b0] text-transparent bg-clip-text">
                MD Kamrul
              </span>
            </motion.h1>
            <motion.h1
              variants={itemVariants}
              className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight leading-[1.1] mt-2"
            >
              <span className="inline-block bg-gradient-to-r from-[#8892b0] to-[#64ffda] text-transparent bg-clip-text">
                Hasan
              </span>
            </motion.h1>
          </div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[2] mb-10 bg-gradient-to-r from-[#8892b0] to-[#64ffda]/70 text-transparent bg-clip-text py-2"
          >
            <span className="inline-block pb-1">
              I build things for the web.
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-[#8892b0] text-xl sm:text-2xl leading-[1.8] max-w-3xl mb-16"
          >
            I&apos;m a{" "}
            <motion.span
              className="inline-block bg-gradient-to-r from-[#64ffda] to-[#64ffda]/70 text-transparent bg-clip-text font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              Senior Full Stack Developer
            </motion.span>{" "}
            specializing in building exceptional digital experiences. Currently
            focused on building accessible, human-centered products with modern
            technologies.
          </motion.p>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <CommonLink
              link={ResumeLink}
              name={`Download My Resume`}
              blank={true}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
