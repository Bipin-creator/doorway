// import Image from "next/image";
// import React from "react";
// import { TOURISM_WAY } from "@/constants/imagePath";

// const ToDevelopAndManage = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image - Full bleed, darkened */}
//       <Image
//         src={TOURISM_WAY}
//         alt="Strategic planning for global tourism"
//         fill
//         priority
//         quality={95}
//         className="object-cover"
//       />

//       {/* Dark overlay for text readability */}
//       <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-8 text-center text-white">
//         {/* Main Heading */}
//         <h1 className="text-5xl sm:text-6xl font-extralight font-helveticaNeue  leading-tight uppercase ">
          
//           To <span className="">Develop</span>, <span className="">Manage</span>
//           <br />& <span className="">Market</span>
//           <br />
//         <span className="text-2xl font-garamondlight uppercase tracking-wider mt-3">
//           Sustainable Tourism Destination
//         </span>
//         </h1>

//         {/* Optional subtle attribution (like Trish Parr in your example) */}
//         {/* <p className="mt-16 text-xl md:text-2xl font-light tracking-widest opacity-80">
//           Trish Parr
//         </p> */}
//       </div>

//       {/* Optional scroll indicator */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
//         <svg
//           className="w-8 h-8 text-white/70"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M19 14l-7 7m0 0l-7-7m7 7V3"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default ToDevelopAndManage;


"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TOURISM_WAY } from "@/constants/imagePath";

// Add more images here
const BACKGROUND_IMAGES = [
  TOURISM_WAY,
  "/image/tourism/bg2.png",
];

const ToDevelopAndManage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === BACKGROUND_IMAGES.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {BACKGROUND_IMAGES.map((img, index) => (
        <Image
          key={img}
          src={img}
          alt="Strategic planning for global tourism"
          fill
          priority={index === 0}
          quality={95}
          className={`object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark overlay */}
      <div className={`absolute inset-0 ${currentIndex === 0 ? 'bg-black/50' : 'bg-black/20'} z-10`} aria-hidden="true" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 text-center text-white">
        <h1 className="text-5xl sm:text-6xl font-extralight font-helveticaNeue leading-tight uppercase">
          To <span>Develop</span>, <span>Manage</span>
          <br />& <span>Market</span>
          <br />
          <span className="block text-2xl font-garamondlight uppercase tracking-wider mt-3">
            Sustainable Tourism Destination
          </span>
        </h1>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
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

export default ToDevelopAndManage;
