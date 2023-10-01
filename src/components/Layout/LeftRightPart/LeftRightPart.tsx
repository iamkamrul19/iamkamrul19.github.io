import {
  EmailLink,
  GitLink,
  LinkEdinLink,
} from "@/components/Common/FixedData";
import { Git, Linkedin } from "@/components/SVGIcon";
import Link from "next/link";

const LeftRightPart = () => {
  return (
    <>
      <div className=" items-center gap-x-5 rotate-90 left-[-210px] bottom-[120px] fixed hidden md:flex">
        <Link target="_blank" href={GitLink} className=" -rotate-90">
          <Git />
        </Link>
        <Link target="_blank" href={LinkEdinLink} className=" -rotate-90">
          <Linkedin />
        </Link>

        <hr className="w-[400px] h-[1px] border-[#a8b2d1]" />
      </div>
      <div className=" items-center gap-x-5 rotate-90 right-[-240px]  bottom-[170px] fixed hidden md:flex">
        <Link
          target="_blank"
          className="text-text-info text-sm"
          href={`mailTo:${EmailLink}`}
        >
          {EmailLink}
        </Link>

        <hr className="w-[400px] border-[#a8b2d1]" />
      </div>
    </>
  );
};

export default LeftRightPart;
