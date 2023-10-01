import CommonLink from "../Common/CommonLink";
import { EmailLink } from "../Common/FixedData";

const Contact = () => {
  return (
    <section className="container py-12 lg:py-16 overflow-hidden" id="contact">
      <p className="text-text-info text-center text-2xl lg:text-[60px] font-semibold">
        Get In Touch
      </p>
      <p className="text-center lg:w-7/12 mx-auto text-text-sub-title text-sm lg:text-lg pt-2 lg:pt-8">
        My inbox is always open. Whether you have a question or just want to say
        hello, I&apos;ll try my best to get back to you! Feel free to mail me
        about any relevant job updates.
      </p>
      <div className="flex justify-center lg:mt-3">
        <CommonLink
          link={"mailTo:" + EmailLink}
          name={`Mail Me`}
          blank={true}
        />
      </div>
    </section>
  );
};

export default Contact;
