// "use client"
// import React, { useState, useRef, useEffect } from "react";
// import ButtonThree from "../ButtonThree/ButtonThree";

// const slides = [
//   {
//     title: "Deluxe Suite",
//     desc: "Spacious room with private balcony and ocean view...",
//     image: "/image/home_bg.avif",
//     other: { name: "detail", link: "/detail1" }
//   },
//   {
//     title: "Premium Villa",
//     desc: "Luxury villa with private pool and lush garden...",
//     image: "/image/home_bg.avif",
//     other: { name: "detail", link: "/detail1" }
//   },
//   {
//     title: "Mountain Cabin",
//     desc: "Cozy wooden cabin surrounded by mountain views...",
//     image: "/image/home_bg.avif",
//     other: { name: "View More", link: "/detail1" }
//   },
// ];

// const OurCalling = () => {
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
//       transform: '',
//       opacity: 1,
//       zIndex: 0,
//       filter: 'blur(0px)',
//     };

//     switch (position) {
//       case -2:
//         return {
//           ...baseStyle,
//           transform: 'translateX(-180%) scale(0.7)',
//           opacity: 0.3,
//           zIndex: 1,
//           filter: 'blur(2px)',
//         };
//       case -1:
//         return {
//           ...baseStyle,
//           transform: 'translateX(-80%) scale(0.85)',
//           opacity: 0.6,
//           zIndex: 2,
//           filter: 'blur(1px)',
//         };
//       case 0:
//         return {
//           ...baseStyle,
//           transform: 'translateX(0%) scale(1)',
//           opacity: 1,
//           zIndex: 3,
//           filter: 'blur(0px)',
//         };
//       case 1:
//         return {
//           ...baseStyle,
//           transform: 'translateX(80%) scale(0.85)',
//           opacity: 0.6,
//           zIndex: 2,
//           filter: 'blur(1px)',
//         };
//       case 2:
//         return {
//           ...baseStyle,
//           transform: 'translateX(180%) scale(0.7)',
//           opacity: 0.3,
//           zIndex: 1,
//           filter: 'blur(2px)',
//         };
//       default:
//         return baseStyle;
//     }
//   };

//   return (
//     <section className="flex items-center md:px-6 lg:px-10 bg-black text-white h-[80vh]">
//       <div className="w-1/3 px-10">
//         <h2 className="font-helveticaNeue text-2xl tracking-widest uppercase mb-6">
//           Genesis of The Doorway
//         </h2>

//         <p className="font-garamondlight tracking-wide text-sm [word-spacing:0.02rem] font-medium">
//           Having gained such a strong insight of the landscape in the Tourism &
//           Hospitality sector, a fierce flame of strong, relentless desire was
//           ignited, fueled by an urgent need to clear away the shadows that have
//           covered hidden gems & left them in the dark within the Tourism &
//           Hospitality sector, behold
//         </p>

//         <div className="mt-10 flex items-center gap-5">
//           <ButtonThree width="160px" height="48px" text="Discover More" />
//         </div>
//       </div>

//       {/* 3D Slider Section */}
//       <div className="w-2/3 h-full overflow-hidden relative flex items-center justify-center">
//         <div className="relative w-full h-96 flex items-center justify-center">
//           {slides.map((slide, index) => {
//             const position = getSlidePosition(index);
//             const style = getSlideStyle(position);

//             return (
//               <div
//                 key={index}
//                 className="absolute transition-all duration-700 ease-in-out"
//                 style={style}
//               >
//                 <div className="relative bg-white overflow-hidden flex flex-col rounded-lg w-80 h-96">
//                   <div className={`relative w-full transition-all duration-700 ease-in-out h-full
//                   }`}>
//                     <img
//                       src={slide.image}
//                       alt={slide.title}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
//                   </div>

//                   {/* <div className="flex-1 p-5 flex flex-col justify-between text-center">
//                     <h3 className="font-helveticaNeue text-lg tracking-widest uppercase text-black">
//                       {slide.title}
//                     </h3>

//                     <div className={`absolute top-full left-0 w-full transition-all duration-900 ease-in-out ${
//                       position === 0 ? "-translate-y-[120%]" : "translate-y-0"
//                     }`}>
//                       <div className="w-10 h-0.5 bg-black mx-auto"></div>
//                       <p className="text-black text-xs mx-auto font-garamondlight py-3">
//                         {slide.desc}
//                       </p>
//                       {slide.other && (
//                         <ButtonThree width="120px" height="35px" text={slide.other.name} />
//                       )}
//                     </div>
//                   </div> */}
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Navigation Buttons */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>

//         <button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>

//         {/* Dot Pagination */}
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center gap-2 z-10">
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
//                 i === activeIndex ? "bg-white w-6 h-2" : "bg-gray-400 w-2 h-2 hover:bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurCalling;

"use client";
import React, { useState, useRef, useEffect } from "react";
import ButtonThree from "../ButtonThree/ButtonThree";
import { JAPAN, MOROCCO, SPAIN } from "@/constants/imagePath";

const slides = [
  {
    title: "Deluxe Suite",
    desc: "lorem ajsdbasj dasjdahjbsdajsd asjdb ",
    image: SPAIN,
    other: { name: "detail", link: "/detail1" },
  },
  {
    title: "Premium Villa",
    desc: "Luxury villa with private pool and lush garden...",
    image: MOROCCO,
  },
  {
    title: "Mountain Cabin",
    desc: "Cozy wooden cabin surrounded by mountain views...",
    image: JAPAN,
  },
  {
    title: "Premium Villa",
    desc: "Luxury villa with private pool and lush garden...",
    image: "/image/home_bg.avif",
  },
  {
    title: "Mountain Cabin",
    desc: "Cozy wooden cabin surrounded by mountain views...",
    image: JAPAN,
  },
];

const OurCalling = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    const nextIndex = (activeIndex + 1) % slides.length;
    setActiveIndex(nextIndex);

    setTimeout(() => {
      setIsAnimating(false);
    }, 700); // Match transition duration
  };

  const prevSlide = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    const prevIndex = (activeIndex - 1 + slides.length) % slides.length;
    setActiveIndex(prevIndex);

    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  const getSlidePosition = (index: number) => {
    const totalSlides = slides.length;
    const positions = [];

    // Calculate positions for all slides
    for (let i = 0; i < totalSlides; i++) {
      let position = i - activeIndex;

      // Handle wrapping for continuous loop
      if (position < -Math.floor(totalSlides / 2)) {
        position += totalSlides;
      } else if (position > Math.floor(totalSlides / 2)) {
        position -= totalSlides;
      }

      positions.push(position);
    }

    return positions[index];
  };

  const getSlideStyle = (position: number) => {
    const baseStyle = {
      transform: "",
      opacity: 1,
      zIndex: 0,
      filter: "blur(0px)",
    };

    switch (position) {
      case -2:
        return {
          ...baseStyle,
          transform: "translateX(-180%) scale(1)",
          opacity: 0,
          zIndex: 1,
          filter: "blur(2px)",
        };
      case -1:
        return {
          ...baseStyle,
          transform: "translateX(-100%) scale(1)",
          opacity: 1,
          zIndex: 2,
          filter: "blur(0px)",
        };
      case 0:
        return {
          ...baseStyle,
          transform: "translateX(0%) scale(1)",
          opacity: 1,
          zIndex: 3,
          filter: "blur(0px)",
        };
      case 1:
        return {
          ...baseStyle,
          transform: "translateX(100%) scale(1)",
          opacity: 1,
          zIndex: 2,
          filter: "blur(0px)",
        };
      case 2:
        return {
          ...baseStyle,
          transform: "translateX(180%) scale(1)",
          opacity: 0,
          zIndex: 1,
          filter: "blur(2px)",
        };
      default:
        return baseStyle;
    }
  };

  return (
    <section className="flex items-center md:px-6 lg:px-10 bg-black text-white h-[85vh]">
      <div className="w-1/3 pr-24">
        <h2 className="font-helveticaNeue text-2xl tracking-widest uppercase mb-6">
          Our Calling
        </h2>

        <p className="font-garamondlight tracking-wide text-sm [word-spacing:0.02rem] font-medium">
          Our calling nests well in the overall purpose of the independent
          hoteliers & tourism professionals Success Movement. As you walk
          through The Doorway, you will find not just a company but a
          sanctuary—a sanctuary where hearts are touched, emotions are kindled,
          and dreams are nurtured.
        </p>

        <div className="mt-10 flex items-center gap-5 border border-white w-fit">
          <ButtonThree width="160px" height="48px" text="Discover More" />
        </div>
      </div>

      {/* 3D Slider Section */}
      <div className="w-2/3 h-full overflow-hidden relative flex items-center justify-center">
        <div className="relative w-full h-130 flex items-center justify-center">
          {slides.map((slide, index) => {
            const position = getSlidePosition(index);
            const style = getSlideStyle(position);

            return (
              <div
                key={index}
                className="absolute  transition-all duration-700 ease-in-out"
                style={style}
              >
                <div className="relative bg-white group overflow-hidden flex flex-col mx-2 w-70 h-120">
                  <div
                    className={`relative w-full transition-all duration-700 ease-in-out h-full
                  }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 p-3 flex flex-col justify-between  text-white">
                      <h3 className="font-helveticaNeue text-lg tracking-widest uppercase ">
                        {slide.title}
                      </h3>

                      <p className="text-xs mx-auto font-garamondlight py-2">
                        {slide.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dot Pagination */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setActiveIndex(i);
                  setTimeout(() => setIsAnimating(false), 700);
                }
              }}
              className={`transition-all duration-500 ease-in-out rounded-full ${
                i === activeIndex
                  ? "bg-white w-6 h-2"
                  : "bg-gray-400 w-2 h-2 hover:bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCalling;
