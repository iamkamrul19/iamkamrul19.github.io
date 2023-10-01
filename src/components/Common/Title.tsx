import React from "react";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className="flex items-center">
      <p className="text-text-info font-semibold text-3xl relative before:absolute before:w-[300px] before:h-[1px] before:bg-[#233554] before:top-[20px] before:left-[110%]">
        {title}
      </p>
    </div>
  );
};

export default Title;
