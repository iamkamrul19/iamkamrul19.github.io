import CommonLink from "../Common/CommonLink";

const Hero = () => {
  return (
    <section className="container overflow-hidden">
      <div className="min-h-[70vh] lg:min-h-[70vh] flex flex-col  justify-center items-start gap-y-1">
        <p className="text-text-highlight text-base">Hi, my name is</p>
        <h1 className="text-text-info text-[35px] xl:text-[80px] font-semibold leading-0">
          MD Kamrul Hasan
        </h1>
        <p className="text-text-sub-title font-semibold text-[30px] xl:text-[45px] leading-0">
          Software Engineer | Front-End Developer
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
        <CommonLink link={`/#about`} name={`More About Me`} />
      </div>
    </section>
  );
};

export default Hero;
