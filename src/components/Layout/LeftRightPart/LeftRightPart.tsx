import { EmailLink, GitLink, LinkEdinLink } from "@/components/Link";
import { Git, Linkedin } from "@/components/SVGIcon";
import Link from "next/link";

const LeftRightPart = () => {
  return (
    <>
      <div className=" items-center gap-x-5 rotate-90 left-[-80px] bottom-[90px] fixed hidden md:flex">
        <Link target="_blank" href={GitLink}>
          <Git />
        </Link>
        <Link target="_blank" href={LinkEdinLink}>
          <Linkedin />
        </Link>

        <hr className="w-[120px] border-[#a8b2d1]" />
      </div>
      <div className=" items-center gap-x-5 rotate-90 right-[-105px] bottom-[90px] fixed hidden md:flex">
        <Link
          target="_blank"
          className="text-text-info text-sm"
          href={`mailTo:${EmailLink}`}
        >
          {EmailLink}
        </Link>

        <hr className="w-[120px] border-[#a8b2d1]" />
      </div>
    </>
  );
};

export default LeftRightPart;
