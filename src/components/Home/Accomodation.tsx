
// "use client";
// import Image from "next/image";
// import { useState, useEffect, useRef } from "react";

// // === Data ===
// const accommodations = [
//   {
//     title: "Deluxe Suite",
//     desc: "Spacious room with private balcony and ocean view, featuring elegant furnishings and modern amenities for the ultimate comfort.",
//     image: "/image/home_bg.avif",
//     link: "/detail1",
//   },
//   {
//     title: "Premium Villa",
//     desc: "Luxury villa with private pool and lush garden, designed for those seeking privacy and exclusivity in a tropical paradise.",
//     image: "/image/home_bg.avif",
//     link: "/detail1",
//   },
//   {
//     title: "Mountain Cabin",
//     desc: "Cozy wooden cabin surrounded by mountain views, offering a serene escape with rustic charm and contemporary comforts.",
//     image: "/image/home_bg.avif",
//     link: "/detail1",
//   },
//   {
//     title: "Executive Room",
//     desc: "Elegant suite with king bed and lounge area, perfect for business travelers seeking sophistication and functionality.",
//     image: "/image/home_bg.avif",
//     link: "/detail1",
//   },
//   {
//     title: "Honeymoon Suite",
//     desc: "Romantic stay with jacuzzi and panoramic scenery, crafted for couples celebrating special moments in luxury.",
//     image: "/image/home_bg.avif",
//     link: "/detail1",
//   },
// ];

// const Accommodation = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [direction, setDirection] = useState<"left" | "right">("right");

//   useEffect(() => {
//     if (!isAutoPlaying || isTransitioning) return;

//     const interval = setInterval(() => {
//       handleNext();
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [currentIndex, isAutoPlaying, isTransitioning]);

//   const handleNext = () => {
//     if (isTransitioning) return;
//     setDirection("right");
//     setIsTransitioning(true);
//     setCurrentIndex((prev) => (prev + 1) % accommodations.length);
//     setTimeout(() => setIsTransitioning(false), 800);
//   };

//   const handlePrev = () => {
//     if (isTransitioning) return;
//     setDirection("left");
//     setIsTransitioning(true);
//     setCurrentIndex((prev) =>
//       prev === 0 ? accommodations.length - 1 : prev - 1
//     );
//     setTimeout(() => setIsTransitioning(false), 800);
//   };

//   const handleDotClick = (index: number) => {
//     if (isTransitioning || index === currentIndex) return;
//     setDirection(index > currentIndex ? "right" : "left");
//     setIsTransitioning(true);
//     setCurrentIndex(index);
//     setIsAutoPlaying(false);
//     setTimeout(() => {
//       setIsTransitioning(false);
//       setIsAutoPlaying(true);
//     }, 800);
//   };

//   return (
//     <section className="relative py-20 bg-white overflow-hidden">
//       {/* Header */}
//       <div className="max-w-7xl mx-auto px-8 mb-16">
//         <h2 className="text-center text-4xl md:text-5xl font-serif text-gray-900 tracking-wide mb-3">
//           Accommodations
//         </h2>
//         <div className="w-20 h-px bg-gray-900 mx-auto"></div>
//       </div>

//       {/* Main Slider */}
//       <div 
//         className="relative px-8 md:px-16"
//         onMouseEnter={() => setIsAutoPlaying(false)}
//         onMouseLeave={() => setIsAutoPlaying(true)}
//       >
//         <div className="max-w-7xl mx-auto">
//           {/* Cards Container */}
//           <div className="relative h-[600px] md:h-[700px]">
//             {accommodations.map((item, index) => {
//               const diff = index - currentIndex;
//               const position =
//                 diff === 0
//                   ? 0
//                   : diff === 1 || diff === -(accommodations.length - 1)
//                     ? 1
//                     : diff === -1 || diff === accommodations.length - 1
//                       ? -1
//                       : diff > 1 || diff < -(accommodations.length - 2)
//                         ? 2
//                         : -2;

//               const isCenter = position === 0;

//               return (
//                 <div
//                   key={index}
//                   className={`absolute top-1/2 left-1/2 transition-all duration-800 ease-out
//                     ${
//                       position === 0
//                         ? "w-[85%] md:w-[60%] z-30 opacity-100 scale-100"
//                         : position === 1
//                           ? "w-[70%] md:w-[48%] z-20 opacity-70 scale-95"
//                           : position === -1
//                             ? "w-[70%] md:w-[48%] z-20 opacity-70 scale-95"
//                             : "w-[55%] md:w-[36%] z-10 opacity-0 scale-90"
//                     }
//                   `}
//                   style={{
//                     transform: `translate(-50%, -50%) translateX(${
//                       position === 0
//                         ? "0%"
//                         : position === 1
//                           ? "85%"
//                           : position === -1
//                             ? "-85%"
//                             : position === 2
//                               ? "150%"
//                               : "-150%"
//                     })`,
//                     pointerEvents: position === 0 ? "auto" : "none",
//                   }}
//                   onClick={() => {
//                     if (position === 1) handleNext();
//                     else if (position === -1) handlePrev();
//                   }}
//                 >
//                   {/* Card */}
//                   <div className="bg-white shadow-2xl overflow-hidden">
//                     {/* Image Container */}
//                     <div className="relative aspect-[16/10] overflow-hidden">
//                       <Image
//                         src={item.image}
//                         alt={item.title}
//                         fill
//                         className={`object-cover transition-transform duration-700 ${
//                           isCenter ? "scale-100" : "scale-105"
//                         }`}
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      
//                       {/* Title Overlay */}
//                       <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
//                         <h3 className="text-3xl md:text-4xl font-serif mb-2 tracking-wide">
//                           {item.title}
//                         </h3>
//                       </div>
//                     </div>

//                     {/* Content Section - Only visible on center card */}
//                     <div
//                       className={`overflow-hidden transition-all duration-700 ease-out ${
//                         isCenter ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//                       }`}
//                     >
//                       <div className="p-8 md:p-12 text-center">
//                         <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 font-light">
//                           {item.desc}
//                         </p>
//                         <a
//                           href={item.link}
//                           className="inline-block px-8 py-3 border-2 border-gray-900 text-gray-900 text-sm tracking-widest uppercase font-medium
//                             hover:bg-gray-900 hover:text-white transition-all duration-300"
//                         >
//                           View Details
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Navigation Arrows */}
//           <button
//             onClick={handlePrev}
//             disabled={isTransitioning}
//             className={`absolute left-4 top-1/2 -translate-y-1/2 z-40
//               w-12 h-12 rounded-full bg-white/95 shadow-lg
//               flex items-center justify-center
//               transition-all duration-300
//               hover:bg-white hover:scale-110
//               ${isTransitioning ? "opacity-50 cursor-not-allowed" : "opacity-100"}
//             `}
//             aria-label="Previous"
//           >
//             <svg
//               className="w-6 h-6 text-gray-900"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </button>

//           <button
//             onClick={handleNext}
//             disabled={isTransitioning}
//             className={`absolute right-4 top-1/2 -translate-y-1/2 z-40
//               w-12 h-12 rounded-full bg-white/95 shadow-lg
//               flex items-center justify-center
//               transition-all duration-300
//               hover:bg-white hover:scale-110
//               ${isTransitioning ? "opacity-50 cursor-not-allowed" : "opacity-100"}
//             `}
//             aria-label="Next"
//           >
//             <svg
//               className="w-6 h-6 text-gray-900"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Dots Navigation */}
//       <div className="flex justify-center gap-2 mt-12">
//         {accommodations.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => handleDotClick(index)}
//             disabled={isTransitioning}
//             className={`transition-all duration-300 rounded-full ${
//               index === currentIndex
//                 ? "w-8 h-2 bg-gray-900"
//                 : "w-2 h-2 bg-gray-400 hover:bg-gray-600"
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Accommodation;


"use client";
import Image from "next/image";
import { useState } from "react";
import ButtonThree from "../ButtonThree/ButtonThree";

// === Data ===
const accommodations = [
  {
    title: "Deluxe Suite",
    desc: "Spacious room with private balcony and ocean view. room with private balcony and ocean view.Spacious room with private Romantic stay with jacuzzi and panoramic scenery.",
    image: "/image/home_bg.avif",
    other: {
      name: "detail",
      link: "/detail1",
    },
  },
  {
    title: "Premium Villa",
    desc: "Luxury villa with private pool and lush garden.Luxury villa with private pool and lush garden.Luxury villa with private pool and lush garden.Luxury villa with private pool and lush garden.",
    image: "/image/home_bg.avif",
    other: {
      name: "detail",
      link: "/detail1",
    },
  },
  {
    title: "Mountain Cabin",
    desc: "Cozy wooden cabin surrounded by mountain viewsCozy wooden cabin surrounded by mountain viewsCozy wooden cabin surrounded by mountain viewsCozy wooden cabin surrounded by mountain views.",
    image: "/image/home_bg.avif",
    other: {
      name: "View More",
      link: "/detail1",
    },
  },
  {
    title: "Executive Room",
    desc: "Elegant suite with king bed and lounge area. Elegant suite with king bed and lounge area.Elegant suite with king bed and lounge area.Elegant suite with king bed and lounge area. ",
    image: "/image/home_bg.avif",
    other: {
      name: "detail",
      link: "/detail1",
    },
  },
  {
    title: "Honeymoon Suite",
    desc: "Romantic stay with jacuzzi and panoramic scenery. Romantic stay with jacuzzi and panoramic scenery.Romantic stay with jacuzzi and panoramic scenery.Romantic stay with jacuzzi and panoramic scenery.",
    image: "/image/home_bg.avif",
    other: {
      name: "explore",
      link: "/detail1",
    },
  },
];

const Accomodation = () => {
  // 👇 Middle card active by default
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(accommodations.length / 2)
  );

  return (
    <section className="px-10 py-10 md:py-16">
      <div className="mb-10">
        <h2 className="text-black text-center font-helveticaNeue text-2xl md:text-3xl tracking-widest uppercase">
          Accommodation
        </h2>
      </div>

      <div
        className="flex gap-3 xl:gap-5 justify-center overflow-x-auto no-scrollbar items-center h-150"
        onMouseLeave={() =>
          setActiveIndex(Math.floor(accommodations.length / 2))
        }
      >
        {accommodations.map((item, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={i}
              onMouseEnter={() => setActiveIndex(i)}
              className={`flex flex-col cursor-pointer transition-all duration-900 ease-in-out overflow-hidden bg-white shadow-md
          ${
            isActive
              ? "h-110 md:h-130 min-w-80 w-[24%] shadow-xl"
              : "h-90 md:h-100 xl:min-w-60 w-[18%] hover:shadow-lg"
          }`}
            >
              <div
                className={`relative  transition-all duration-900 ease-in-out mb-2  ${
                  isActive ? "h-[37%]" : "h-[87%]"
                }`}
              >
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/50 z-10"></div>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col text-center justify-center relative">
                <h3 className="text-black text-center font-helveticaNeue text-md tracking-widest uppercase">
                  {item.title}
                </h3>
                <div
                  className={`absolute top-full left-0 w-full transition-all duration-900 ease-in-out  ${
                    isActive ? "translate-y-0" : "translate-y-10"
                  }`}
                >
                  {/* small line */}
                  <div className="w-10 h-0.5 bg-black mx-auto"></div>
                  <p
                    className={`text-black text-xs w-70 mx-auto md:text-sm font-garamondlight tracking-widest py-5`}
                  >
                    {item.desc}
                  </p>
                  {item.other && (
                    <ButtonThree
                    width="200px"
                    height="45px"
                      text={item.other.name}
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Accomodation;
