"use client";
import React from "react";

interface ButtonThreeProps {
  text: string;
  width: string;
  height: string;
}

const ButtonThree: React.FC<ButtonThreeProps> = ({ text, width, height }) => {
  return (
    <div className="inline-block w-fit">
      <button
        style={{
          width: width,
          height: height,
        }}
        className={`
          relative cursor-pointer font-garamondlight text-xs md:text-sm
         text-center uppercase tracking-wide
          transition-all duration-900 ease-in-out text-white hover:text-black
          before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full
          before:bg-black before:transition-all before:duration-500 before:z-1
          hover:before:opacity-0 hover:before:scale-50
          after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full
          after:border after:border-black after:opacity-0 after:transition-all after:duration-500 after:z-1
          after:scale-125 hover:after:opacity-100 hover:after:scale-100
        `}
      >
        <span className="relative z-2 uppercase ">{text}</span>
      </button>
    </div>
  );
};

export default ButtonThree;
