import { motion } from "framer-motion";
import CommonLink from "../Common/CommonLink";
import { EmailLink, GitLink, LinkEdinLink } from "../Common/FixedData";
import { Git, Linkedin } from "../SVGIcon";

const Contact = () => {
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
      },
    },
  };

  return (
    <section className="container py-12 lg:py-16 overflow-hidden" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="bg-[#112240]/30 rounded-lg p-8 lg:p-12 shadow-lg shadow-[#64ffda]/5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-[#ccd6f6] text-3xl lg:text-4xl font-semibold mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-[#64ffda] mx-auto mb-8 rounded-full" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-center text-[#8892b0] text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
          >
            My inbox is always open. Whether you have a question or just want to
            say hello, I&apos;ll try my best to get back to you! Feel free to
            mail me about any relevant job updates.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CommonLink
              link={"mailTo:" + EmailLink}
              name={`Mail Me`}
              blank={true}
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 mt-10"
          >
            <motion.a
              href={GitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#64ffda]/10 hover:bg-[#64ffda]/20 transition-colors duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Git className="w-6 h-6 text-[#64ffda]" />
            </motion.a>

            <motion.a
              href={LinkEdinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#64ffda]/10 hover:bg-[#64ffda]/20 transition-colors duration-300"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-6 h-6 text-[#64ffda]" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
