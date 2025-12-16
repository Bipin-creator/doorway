// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import ButtonThree from "../ButtonThree/ButtonThree";
// import { JAPAN, MOROCCO, SPAIN } from "@/constants/imagePath";

// const slides = [
//   {
//     title: "Tourism Advisory",
//     desc: "lorem ajsdbasj dasjdahjbsdajsd asjdb ",
//     image: SPAIN,
//     other: { name: "detail", link: "/detail1" },
//   },
//   {
//     title: "Destination Brand Development & Marketing",
//     desc: "Luxury villa with private pool and lush garden...",
//     image: MOROCCO,
//   },
//   {
//     title: "Climate change & tourism",
//     desc: "Cozy wooden cabin surrounded by mountain views...",
//     image: JAPAN,
//   },
//   {
//     title: "Destination management",
//     desc: "Luxury villa with private pool and lush garden...",
//     image: "/image/home_bg.avif",
//   },
//   {
//     title: "Destination strategy & planning",
//     desc: "Cozy wooden cabin surrounded by mountain views...",
//     image: JAPAN,
//   },
//   {
//     title: "Sustainable destination development",
//     desc: "Cozy wooden cabin surrounded by mountain views...",
//     image: JAPAN,
//   },
// ];

// const Serving = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const nextSlide = () => {
//     if (isAnimating) return;

//     setIsAnimating(true);
//     const nextIndex = (activeIndex + 1) % slides.length;
//     setActiveIndex(nextIndex);

//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 700); // Match transition duration
//   };

//   const prevSlide = () => {
//     if (isAnimating) return;

//     setIsAnimating(true);
//     const prevIndex = (activeIndex - 1 + slides.length) % slides.length;
//     setActiveIndex(prevIndex);

//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 700);
//   };

//   const getSlidePosition = (index: number) => {
//     const totalSlides = slides.length;
//     const positions = [];

//     // Calculate positions for all slides
//     for (let i = 0; i < totalSlides; i++) {
//       let position = i - activeIndex;

//       // Handle wrapping for continuous loop
//       if (position < -Math.floor(totalSlides / 2)) {
//         position += totalSlides;
//       } else if (position > Math.floor(totalSlides / 2)) {
//         position -= totalSlides;
//       }

//       positions.push(position);
//     }

//     return positions[index];
//   };

//   const getSlideStyle = (position: number) => {
//     const baseStyle = {
//       transform: "",
//       opacity: 0,
//       zIndex: 0,
//       filter: "blur(0px)",
//     };

//     switch (position) {
//       case -2:
//         return {
//           ...baseStyle,
//           transform: "translateX(-180%) scale(1)",
//           opacity: 0,
//           zIndex: 1,
//           filter: "blur(2px)",
//         };
//       case -1:
//         return {
//           ...baseStyle,
//           transform: "translateX(-100%) scale(1)",
//           opacity: 1,
//           zIndex: 2,
//           filter: "blur(0px)",
//         };
//       case 0:
//         return {
//           ...baseStyle,
//           transform: "translateX(0%) scale(1)",
//           opacity: 1,
//           zIndex: 3,
//           filter: "blur(0px)",
//         };
//       case 1:
//         return {
//           ...baseStyle,
//           transform: "translateX(100%) scale(1)",
//           opacity: 1,
//           zIndex: 2,
//           filter: "blur(0px)",
//         };
//       case 2:
//         return {
//           ...baseStyle,
//           transform: "translateX(180%) scale(1)",
//           opacity: 0,
//           zIndex: 1,
//           filter: "blur(2px)",
//         };
//       default:
//         return baseStyle;
//     }
//   };

//   return (
//     <section className="flex flex-col md:flex-row items-center md:px-6 lg:px-10 pt-10 my-10 bg-black text-white h-[85vh]">
//       <div className="w-full md:w-1/3 px-2 md:px-12">
//         <h2 className="font-helveticaNeue text-2xl tracking-widest uppercase mb-6">
//           Our Services
//         </h2>

//         <p className="font-garamondlight tracking-wide text-sm [word-spacing:0.02rem] font-medium">
//           Our calling nests well in the overall purpose of the independent
//           hoteliers & tourism professionals Success Movement. As you walk
//           through The Doorway, you will find not just a company but a
//           sanctuary—a sanctuary where hearts are touched, emotions are kindled,
//           and dreams are nurtured.
//         </p>

//         <div className="mt-2 md:mt-10 flex items-center gap-5 border border-white w-fit">
//           <ButtonThree width="160px" height="48px" text="Discover More" />
//         </div>
//       </div>

//       {/* 3D Slider Section */}
//       <div className="w-full md:w-2/3 h-full overflow-hidden relative flex items-center justify-center">
//         <div className="relative w-full h-130 flex items-center justify-center">
//           {slides.map((slide, index) => {
//             const position = getSlidePosition(index);
//             const style = getSlideStyle(position);

//             return (
//               <div
//                 key={index}
//                 className="absolute  transition-all duration-700 ease-in-out"
//                 style={style}
//               >
//                 <div className="relative bg-white group overflow-hidden flex flex-col mx-3 w-70 h-120">
//                   <div
//                     className={`relative w-full transition-all duration-700 ease-in-out h-full
//                   }`}
//                   >
//                     <img
//                       src={slide.image}
//                       alt={slide.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
//                     />
//                     <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/70" />
//                     <div className="absolute bottom-0 p-3 flex flex-col justify-between  text-white">
//                       <h3 className="font-helveticaNeue text-lg tracking-widest uppercase ">
//                         {slide.title}
//                       </h3>

//                       <p className="text-xs mx-auto font-garamondlight py-2">
//                         {slide.desc}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Navigation Buttons */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-2 top-1/2 cursor-pointer transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//         </button>

//         <button
//           onClick={nextSlide}
//           className="absolute right-2 top-1/2 cursor-pointer transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//         </button>

//         {/* Dot Pagination */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center gap-2 z-10">
//           {slides.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => {
//                 if (!isAnimating) {
//                   setIsAnimating(true);
//                   setActiveIndex(i);
//                   setTimeout(() => setIsAnimating(false), 700);
//                 }
//               }}
//               className={`transition-all duration-500 ease-in-out rounded-full ${
//                 i === activeIndex
//                   ? "bg-white w-6 h-2"
//                   : "bg-gray-400 w-2 h-2 hover:bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Serving;


"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import ButtonThree from "../ButtonThree/ButtonThree";
import { JAPAN, MOROCCO, SPAIN } from "@/constants/imagePath";

const slides = [
  {
    title: "Tourism Advisory",
    desc: "lorem ajsdbasj dasjdahjbsdajsd asjdb ",
    image: SPAIN,
    other: { name: "detail", link: "/detail1" },
  },
  {
    title: "Destination Brand Development & Marketing",
    desc: "Luxury villa with private pool and lush garden...",
    image: MOROCCO,
  },
  {
    title: "Climate change & tourism",
    desc: "Cozy wooden cabin surrounded by mountain views...",
    image: JAPAN,
  },
  {
    title: "Destination management",
    desc: "Luxury villa with private pool and lush garden...",
    image: "/image/home_bg.avif",
  },
  {
    title: "Destination strategy & planning",
    desc: "Cozy wooden cabin surrounded by mountain views...",
    image: JAPAN,
  },
  {
    title: "Sustainable destination development",
    desc: "Cozy wooden cabin surrounded by mountain views...",
    image: JAPAN,
  },
];

const Serving = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Clear timeout helper
  const clearAutoPlay = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // Start auto-play
  const startAutoPlay = useCallback(() => {
    clearAutoPlay();
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
  }, []);

  // Next slide
  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  // Previous slide
  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  // Go to specific slide
  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating || index === activeIndex) return;
      setIsAnimating(true);
      setActiveIndex(index);
      setTimeout(() => setIsAnimating(false), 700);
    },
    [isAnimating, activeIndex]
  );

  // Auto-play + pause on hover
  useEffect(() => {
    startAutoPlay();

    const slider = sliderRef.current;

    const handleMouseEnter = () => clearAutoPlay();
    const handleMouseLeave = () => startAutoPlay();

    slider?.addEventListener("mouseenter", handleMouseEnter);
    slider?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearAutoPlay();
      slider?.removeEventListener("mouseenter", handleMouseEnter);
      slider?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [startAutoPlay]);

  // Restart timer after every slide change (auto or manual)
  useEffect(() => {
    clearAutoPlay();
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearAutoPlay();
  }, [activeIndex]);

  // Position logic (unchanged)
  const getSlidePosition = (index: number) => {
    const totalSlides = slides.length;
    const positions = [];

    for (let i = 0; i < totalSlides; i++) {
      let position = i - activeIndex;
      if (position < -Math.floor(totalSlides / 2)) position += totalSlides;
      else if (position > Math.floor(totalSlides / 2)) position -= totalSlides;
      positions.push(position);
    }
    return positions[index];
  };

  const getSlideStyle = (position: number) => {
    const base = { transform: "", opacity: 0, zIndex: 0, filter: "blur(0px)" };

    switch (position) {
      case -2:
        return { ...base, transform: "translateX(-180%) scale(1)", opacity: 0, zIndex: 1, filter: "blur(2px)" };
      case -1:
        return { ...base, transform: "translateX(-100%) scale(1)", opacity: 1, zIndex: 2, filter: "blur(0px)" };
      case 0:
        return { ...base, transform: "translateX(0%) scale(1)", opacity: 1, zIndex: 3, filter: "blur(0px)" };
      case 1:
        return { ...base, transform: "translateX(100%) scale(1)", opacity: 1, zIndex: 2, filter: "blur(0px)" };
      case 2:
        return { ...base, transform: "translateX(180%) scale(1)", opacity: 0, zIndex: 1, filter: "blur(2px)" };
      default:
        return base;
    }
  };

  return (
    <section className="flex flex-col md:flex-row items-center md:px-6 lg:px-10 pt-10 mb-10 bg-black text-white md:h-[85vh]">
      {/* Left Content */}
      <div className="w-full md:w-1/3 px-2 md:px-12">
        <h2 className="font-helveticaNeue text-2xl tracking-widest uppercase mb-6">
          Our Services
        </h2>
        <p className="font-garamondlight tracking-wide text-sm [word-spacing:0.02rem] font-medium">
          Our calling nests well in the overall purpose of the independent
          hoteliers & tourism professionals Success Movement. As you walk
          through The Doorway, you will find not just a company but a
          sanctuary—a sanctuary where hearts are touched, emotions are kindled,
          and dreams are nurtured.
        </p>
        <div className="hidden md:flex mt-2 md:mt-10 items-center gap-5 border border-white w-fit">
          <ButtonThree width="160px" height="48px" text="Discover More" />
        </div>
        <div className="flex md:hidden mt-3 md:mt-10 items-center gap-5 border border-white w-fit">
          <ButtonThree width="120px" height="32px" text="Discover More" />
        </div>
      </div>

      {/* 3D Carousel */}
      <div
        ref={sliderRef}
        className="w-full md:w-2/3 h-full overflow-hidden relative flex items-center justify-center"
      >
        <div className="relative w-full h-[380px] md:h-[520px] flex items-center justify-center">
          {slides.map((slide, index) => {
            const position = getSlidePosition(index);
            const style = getSlideStyle(position);

            return (
              <div
                key={index}
                className="absolute transition-all duration-700 ease-in-out"
                style={style}
              >
                <div className="relative bg-white group overflow-hidden flex flex-col mx-3 w-70 h-100 md:h-120 shadow-2xl">
                  <div className="relative w-full h-full">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/70" />
                    <div className="absolute bottom-0 p-6 text-white">
                      <h3 className="font-helveticaNeue text-lg tracking-widest uppercase mb-2">
                        {slide.title}
                      </h3>
                      <p className="text-xs font-garamondlight max-w-xs">
                        {slide.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full backdrop-blur-sm transition z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full backdrop-blur-sm transition z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-4  md:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`transition-all duration-300 rounded-full ${
                i === activeIndex
                  ? "bg-white w-8 h-2"
                  : "bg-white/50 w-2 h-2 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Serving;