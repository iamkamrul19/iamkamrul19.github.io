import CommonLink from "../Common/CommonLink";
import { EmailLink } from "../Common/FixedData";

const Contact = () => {
  return (
    <section className="container " id="contact">
      <p className="text-text-info text-center text-[60px] font-semibold">
        Get In Touch
      </p>
      <p className="text-center w-7/12 mx-auto text-text-sub-title text-lg">
        My inbox is always open. Whether you have a question or just want to say
        hello, I&apos;ll try my best to get back to you! Feel free to mail me
        about any relevant job updates.
      </p>
      <div className="flex justify-center mt-3">
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
