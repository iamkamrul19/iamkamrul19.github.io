import Link from "next/link";

const Hero = () => {
  return (
    <section className="container">
      <div className="min-h-[70vh] lg:min-h-[70vh] flex flex-col  justify-center items-start gap-y-1">
        <p className="text-text-highlight text-base">Hi, my name is</p>
        <h1 className="text-text-info text-[35px] xl:text-[80px] font-semibold leading-0">
          MD Kamrul Hasan
        </h1>
        <p className="text-text-sub-title font-semibold text-[30px] xl:text-[70px] leading-0">
          I build things for the web.
        </p>
        <p className="text-text-sub-title text-base xl:text-xl lg:w-10/12 text-justify pt-2">
          I&apos;m front-end developer proficient in{" "}
          <strong className="text-text-info">JavaScript, React js</strong>, and{" "}
          <strong className="text-text-info">Next js</strong>, and I also have
          expertise in backend development with{" "}
          <strong className="text-text-info">Node js, Express js</strong>. My
          skill set encompasses end-to-end web development, ensuring exceptional
          user experiences.
        </p>
        <Link
          href={`/#about-me`}
          className="block text-text-highlight border-[#64ffda] border-[1px] rounded py-[10px] px-10 text-sm font-semibold mt-5 relative before:absolute  before:w-[104%] before:h-[105%] before:left-0 before:-bottom-2 before:border-[#64ffda] before:border-b-[1px] before:rounded before:border-r-[1px] before:z-[-1]"
        >
          More About Me
        </Link>
      </div>
    </section>
  );
};

export default Hero;
