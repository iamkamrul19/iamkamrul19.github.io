import Link from "next/link";
import React from "react";

interface CommonLinkProps {
  link: string;
  name: string;
  blank?: boolean;
}
const CommonLink: React.FC<CommonLinkProps> = ({
  link,
  name,
  blank = false,
}) => {
  return (
    <>
      <Link
        href={link}
        target={blank ? "_blank" : "_self"}
        className="block text-text-highlight border-[#64ffda] border-[1px] rounded py-[10px] px-10 text-sm font-semibold mt-5 relative before:absolute  before:w-[104%] before:h-[105%] before:left-0 before:-bottom-2 before:border-[#64ffda] before:border-b-[1px] before:rounded before:border-r-[1px] before:z-[-1]"
      >
        {name}
      </Link>
    </>
  );
};

export default CommonLink;
