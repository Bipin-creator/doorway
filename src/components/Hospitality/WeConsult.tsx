import Image from "next/image";
import React from "react";
import { HOTEL_CONSULT } from "@/constants/imagePath";

const WeConsult = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Full bleed, darkened */}
      <Image
        src={HOTEL_CONSULT}
        alt="Strategic planning for global tourism"
        fill
        priority
        quality={95}
        className="object-cover"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 text-center text-white">
        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl font-extralight font-helveticaNeue  leading-tight uppercase ">
          
          We <span className="">Consult</span>, <span className="">Manage</span>
          <br />& <span className="">Operate</span>
          <br />
        </h1>
        <span className="text-2xl font-garamondlight uppercase tracking-wider pt-3">
         Independent Hotels Across Nepal
        </span>

        {/* Optional subtle attribution (like Trish Parr in your example) */}
        {/* <p className="mt-16 text-xl md:text-2xl font-light tracking-widest opacity-80">
          Trish Parr
        </p> */}
      </div>

      {/* Optional scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-white/70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default WeConsult;
