// "use client";
// import React, {
//   useCallback,
//   useEffect,
//   useMemo,
//   useRef,
//   useState,
// } from "react";

// const ANIMATION_CONFIG = {
//   SMOOTH_TAU: 0.25,
//   MIN_COPIES: 2,
//   COPY_HEADROOM: 2,
// } as const;

// // Sample logo data - replace with your actual images
// const logos = [
//   {
//     src: "/image/tourism/tourism_logo1.png",
//     alt: "Tourism Enterprise",
//     title: "Tourism Enterprise",
//   },
//   {
//     src: "/image/tourism/tourism_logo2.png",
//     alt: "Heritage & Environmental Agencies",
//     title: "Heritage & Environmental Agencies",
//   },
//   {
//     src: "/image/tourism/tourism_logo3.png",
//     alt: "Tourism Investors",
//     title: "Tourism Investors",
//   },
//   {
//     src: "/image/tourism/tourism_logo4.png",
//     alt: "International Bodies & National Bodies",
//     title: "International Bodies & National Bodies",
//   },
//   {
//     src: "/image/tourism/tourism_logo5.png",
//     alt: "Local Communities",
//     title: "Local Communities",
//   },
//   {
//     src: "/image/tourism/tourism_logo6.png",
//     alt: "Recreation & Entertainment Industry",
//     title: "Recreation & Entertainment Industry",
//   },
//   {
//     src: "/image/tourism/tourism_logo7.png",
//     alt: "Travel & Tourism Industey",
//     title: "Travel & Tourism Industey",
//   },
// ];

// const InfiniteLogoSlider = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const trackRef = useRef<HTMLDivElement>(null);
//   const seqRef = useRef<HTMLUListElement>(null);

//   const [seqWidth, setSeqWidth] = useState<number>(0);
//   const [copyCount, setCopyCount] = useState<number>(
//     ANIMATION_CONFIG.MIN_COPIES
//   );
//   const [isHovered, setIsHovered] = useState<boolean>(false);

//   const speed = 80; // pixels per second
//   const logoHeight = 80;
//   const gap = 48;

//   const targetVelocity = speed;

//   const updateDimensions = useCallback(() => {
//     const containerWidth = containerRef.current?.clientWidth ?? 0;
//     const sequenceRect = seqRef.current?.getBoundingClientRect?.();
//     const sequenceWidth = sequenceRect?.width ?? 0;

//     if (sequenceWidth > 0) {
//       setSeqWidth(Math.ceil(sequenceWidth));
//       const copiesNeeded =
//         Math.ceil(containerWidth / sequenceWidth) +
//         ANIMATION_CONFIG.COPY_HEADROOM;
//       setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
//     }
//   }, []);

//   // Handle resize
//   useEffect(() => {
//     const handleResize = () => updateDimensions();
//     window.addEventListener("resize", handleResize);
//     updateDimensions();
//     return () => window.removeEventListener("resize", handleResize);
//   }, [updateDimensions]);

//   // Handle image loading
//   useEffect(() => {
//     const images = seqRef.current?.querySelectorAll("img") ?? [];

//     if (images.length === 0) {
//       updateDimensions();
//       return;
//     }

//     let remainingImages = images.length;
//     const handleImageLoad = () => {
//       remainingImages -= 1;
//       if (remainingImages === 0) {
//         updateDimensions();
//       }
//     };

//     images.forEach((img) => {
//       const htmlImg = img as HTMLImageElement;
//       if (htmlImg.complete) {
//         handleImageLoad();
//       } else {
//         htmlImg.addEventListener("load", handleImageLoad, { once: true });
//         htmlImg.addEventListener("error", handleImageLoad, { once: true });
//       }
//     });
//   }, [updateDimensions]);

//   // Animation loop
//   useEffect(() => {
//     const track = trackRef.current;
//     if (!track) return;

//     const rafRef = { current: null as number | null };
//     const lastTimestampRef = { current: null as number | null };
//     const velocityRef = { current: 0 };

//     const prefersReduced =
//       typeof window !== "undefined" &&
//       window.matchMedia &&
//       window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//     if (prefersReduced) {
//       track.style.transform = "translate3d(0, 0, 0)";
//       return;
//     }

//     const animate = (timestamp: number) => {
//       if (lastTimestampRef.current === null) {
//         lastTimestampRef.current = timestamp;
//       }

//       const deltaTime =
//         Math.max(0, timestamp - lastTimestampRef.current) / 1000;
//       lastTimestampRef.current = timestamp;

//       const target = isHovered ? 0 : targetVelocity;

//       const easingFactor =
//         1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
//       velocityRef.current += (target - velocityRef.current) * easingFactor;

//       if (seqWidth > 0) {
//         // Get current transform
//         const currentTransform = track.style.transform;
//         const matches = currentTransform.match(/translate3d\(([^,]+)px/);
//         const currentOffset = matches ? Math.abs(parseFloat(matches[1])) : 0;

//         let nextOffset = currentOffset + velocityRef.current * deltaTime;
//         nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth;

//         track.style.transform = `translate3d(${-nextOffset}px, 0, 0)`;
//       }

//       rafRef.current = requestAnimationFrame(animate);
//     };

//     rafRef.current = requestAnimationFrame(animate);

//     return () => {
//       if (rafRef.current !== null) {
//         cancelAnimationFrame(rafRef.current);
//       }
//     };
//   }, [targetVelocity, seqWidth, isHovered]);

//   const logoLists = useMemo(
//     () =>
//       Array.from({ length: copyCount }, (_, copyIndex) => (
//         <ul
//           className="flex items-center"
//           key={`copy-${copyIndex}`}
//           //   style={{ gap: `${gap}px` }}
//           ref={copyIndex === 0 ? seqRef : undefined}
//         >
//           {logos.map((logo, itemIndex) => (
//             <li
//               key={`${copyIndex}-${itemIndex}`}
//               className="flex-none group/item mx-10"
//             >
//               <div className="transform transition-transform duration-300 hover:scale-110">
//                 <img
//                   src={logo.src}
//                   alt={logo.alt}
//                   title={logo.title}
//                   className="block object-contain grayscale hover:grayscale-0 transition-all duration-300"
//                   style={{ height: `${logoHeight}px`, width: "auto" }}
//                   loading="lazy"
//                   draggable={false}
//                 />
//               </div>
//             </li>
//           ))}
//         </ul>
//       )),
//     [copyCount, logoHeight, gap]
//   );

//   return (
//     <div className="bg-black flex items-center justify-center px-4 py-8" >
//       <div className="w-full max-w-7xl">
//         <h2 className="font-helveticaNeue text-white text-center text-2xl tracking-widest uppercase mb-10">
//           who do we work with?
//         </h2>
//         <div
//           ref={containerRef}
//           className="relative overflow-hidden py-2"
//           style={{
//             maskImage:
//               "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
//             WebkitMaskImage:
//               "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
//           }}
//         >
//           <div
//             ref={trackRef}
//             className="flex w-max select-none"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             {logoLists}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InfiniteLogoSlider;


// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const logos = [
//   { src: "/image/tourism/tourism_logo1.png", alt: "Tourism Enterprise", title: "Tourism Enterprise" },
//   { src: "/image/tourism/tourism_logo2.png", alt: "Heritage & Environmental Agencies", title: "Heritage & Environmental Agencies" },
//   { src: "/image/tourism/tourism_logo3.png", alt: "Tourism Investors", title: "Tourism Investors" },
//   { src: "/image/tourism/tourism_logo4.png", alt: "International Bodies", title: "International Bodies & National Bodies" },
//   { src: "/image/tourism/tourism_logo5.png", alt: "Local Communities", title: "Local Communities" },
//   { src: "/image/tourism/tourism_logo6.png", alt: "Recreation & Entertainment", title: "Recreation & Entertainment Industry" },
//   { src: "/image/tourism/tourism_logo7.png", alt: "Travel & Tourism Industry", title: "Travel & Tourism Industry" },
// ];

// const CircularLogoConstellation = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   const radius = 220; // Distance from center when expanded
//   const centerX = 0;
//   const centerY = 0;

//   return (
//     <section
//       className="relative h-screen w-full bg-black flex items-center justify-center overflow-hidden"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       // For mobile: tap to activate
//       onClick={() => setIsHovered((prev) => !prev)}
//     >
//       {/* Background subtle glow when active */}
//       <div
//         className="absolute inset-0 opacity-0 transition-opacity duration-1000"
//         style={{ opacity: isHovered ? 0.3 : 0 }}
//       >
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600 rounded-full blur-3xl" />
//       </div>

//       {/* Central Text */}
//       <motion.div
//         className="absolute z-50 text-center pointer-events-none"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <h2 className="font-helveticaNeue text-white text-4xl md:text-6xl font-thin tracking-widest uppercase">
//           Who Do We Work With?
//         </h2>
//         <p className="text-gray-400 text-sm md:text-lg mt-4 tracking-wider">
//           Hover / Tap to explore our partners
//         </p>
//       </motion.div>

//       {/* Logos */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         {logos.map((logo, index) => {
//           const angle = (index / logos.length) * 2 * Math.PI;
//           const x = centerX + radius * Math.cos(angle);
//           const y = centerY + radius * Math.sin(angle);

//           return (
//             <motion.div
//               key={index}
//               className="absolute"
//               initial={{ x: 0, y: 0, scale: 0.6, opacity: 0 }}
//               animate={{
//                 x: isHovered ? x : 0,
//                 y: isHovered ? y : 0,
//                 scale: isHovered ? 1 : 0.7,
//                 opacity: isHovered ? 1 : 0.6,
//                 rotate: isHovered ? 360 : 0,
//               }}
//               transition={{
//                 duration: 1.2,
//                 delay: isHovered ? index * 0.05 : 0.1 + index * 0.03,
//                 ease: "easeOut",
//                 rotate: {
//                   duration: 30,
//                   repeat: Infinity,
//                   ease: "linear",
//                   delay: isHovered ? 1.5 : 0,
//                 },
//               }}
//               whileHover={{ scale: 1.3, zIndex: 50 }}
//               style={{
//                 originX: "center",
//                 originY: "center",
//               }}
//             >
//               <div className="group relative">
//                 <img
//                   src={logo.src}
//                   alt={logo.alt}
//                   title={logo.title}
//                   className="h-20 w-auto object-contain grayscale transition-all duration-500 group-hover:grayscale-0 drop-shadow-2xl"
//                   draggable={false}
//                   loading="lazy"
//                 />
//                 {/* Tooltip on hover */}
//                 <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
//                   <p className="bg-white/10 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full shadow-lg">
//                     {logo.title}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           );
//         })}

//         {/* Rotating Circle Track (subtle visual guide when active) */}
//         <motion.div
//           className="absolute border border-white/10 rounded-full pointer-events-none"
//           animate={{
//             width: isHovered ? radius * 2 + 100 : 100,
//             height: isHovered ? radius * 2 + 100 : 100,
//             opacity: isHovered ? 0.2 : 0,
//           }}
//           transition={{ duration: 1.2, ease: "easeOut" }}
//         />
//       </div>

//       {/* Mobile Hint */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 text-sm">
//         <AnimatePresence>
//           {!isHovered && (
//             <motion.p
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               className="hidden md:block"
//             >
//               Hover to expand • Tap on mobile
//             </motion.p>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default CircularLogoConstellation;



// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const logos = [
//   { src: "/image/tourism/tourism_logo1.png", alt: "Tourism Enterprise", title: "Tourism Enterprise" },
//   { src: "/image/tourism/tourism_logo2.png", alt: "Heritage & Environmental Agencies", title: "Heritage & Environmental Agencies" },
//   { src: "/image/tourism/tourism_logo3.png", alt: "Tourism Investors", title: "Tourism Investors" },
//   { src: "/image/tourism/tourism_logo4.png", alt: "International Bodies", title: "International Bodies & National Bodies" },
//   { src: "/image/tourism/tourism_logo5.png", alt: "Local Communities", title: "Local Communities" },
//   { src: "/image/tourism/tourism_logo6.png", alt: "Recreation & Entertainment", title: "Recreation & Entertainment Industry" },
//   { src: "/image/tourism/tourism_logo7.png", alt: "Travel & Tourism Industry", title: "Travel & Tourism Industry" },
// ];

// const CircularLogoConstellation = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const radius = 140;

//   return (
//     <section
//       className="relative h-[60vh] md:h-screen w-full flex items-center justify-center overflow-hidden"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onClick={() => setIsHovered(prev => !prev)}
//     >
//       {/* Background glow */}
//       <div
//         className="absolute inset-0 transition-opacity duration-1000 pointer-events-none"
//         style={{ opacity: isHovered ? 0 : 1 }}
//       >
//         {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-black rounded-full blur-2xl" /> */}
//         {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/30 rounded-full blur-3xl" /> */}
//       </div>

//       {/* Title */}
//       <motion.div
//         className="absolute z-0 text-center pointer-events-none select-none"
//         initial={{ opacity: 0, scale: 0.3}}
//         animate={{
//                 scale: isHovered ? 0.3 : 1,
//                 opacity: isHovered ? 1 : 0.5,
//               }}
//         transition={{ duration: 0.8 }}

//       >
//         <h2 className="font-light text-black text-3xl md:text-6xl tracking-widest uppercase leading-tight">
//           Who Do We Work With?
//         </h2>
//         {/* <p className="text-gray-400 text-sm md:text-lg mt-6 tracking-wider">
//           Hover or tap to explore our partners
//         </p> */}
//       </motion.div>

//       {/* Rotating Container (the "galaxy") */}
//       <motion.div
//         className="absolute inset-0 flex items-center justify-center"
//         animate={{ rotate: isHovered ? 360 : 0 }}
//         transition={{
//           duration: 80,
//           repeat: Infinity,
//           ease: "linear",
//           repeatType: "loop",
//         }}
//         style={{ pointerEvents: "none" }}
//       >
//         {logos.map((logo, index) => {
//           const angle = (index / logos.length) * 2 * Math.PI - Math.PI / 2;
//           const x = radius * Math.cos(angle);
//           const y = radius * Math.sin(angle);

//           return (
//             <motion.div
//               key={index}
//               className="absolute top-1/2 left-1/2 -translate-1/2"
//               initial={{ x: 0, y: 0, scale: 0.5, opacity: 0 }}
//               animate={{
//                 x: isHovered ? x : 0,
//                 y: isHovered ? y : 0,
//                 scale: isHovered ? 1 : 0.6,
//                 opacity: isHovered ? 1 : 0,
//               }}
//               transition={{
//                 duration: 1.4,
//                 delay: isHovered ? index * 0.08 : 0.05 + index * 0.03,
//                 ease: [0.25, 0.8, 0.25, 1],
//               }}
              
//               whileHover={{ scale: 1.4 }}
//             >
//               {/* This inner div counter-rotates to keep logo upright */}
//               <motion.div
//                 animate={{ rotate: isHovered ? -360 : 0 }}
//                 transition={{
//                   duration: 80,
//                   repeat: Infinity,
//                   ease: "linear",
//                   repeatType: "loop",
//                 }}
//                 style={{ originX: "50%", originY: "50%" }}
//               >
//                 <div className="group relative">
//                   <img
//                     src={logo.src}
//                     alt={logo.alt}
//                     className="h-20 md:h-24 w-auto invert object-contain grayscale transition-all duration-700 
//                                group-hover:grayscale-0 drop-shadow-2xl brightness-90 group-hover:brightness-110"
//                     draggable={false}
//                     loading="lazy"
//                   />

//                   {/* Tooltip */}
//                   <div className="absolute -top-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
//                                   transition-all duration-300 pointer-events-none whitespace-nowrap z-50">
//                     <div className="bg-white/10 backdrop-blur-xl border border-white/20 text-white 
//                                     text-xs md:text-sm px-5 py-3 rounded-full shadow-2xl">
//                       {logo.title}
//                     </div>
//                     <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 
//                                     w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent 
//                                     border-t-8 border-t-white/10" />
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           );
//         })}

//         {/* Orbit ring */}
//         <motion.div
//           className="absolute border border-white/10 rounded-full pointer-events-none"
//           animate={{
//             width: isHovered ? radius * 2 + 120 : 80,
//             height: isHovered ? radius * 2 + 120 : 80,
//             opacity: isHovered ? 0.15 : 0,
//           }}
//           transition={{ duration: 1.6, ease: "easeOut" }}
//         />
//       </motion.div>

//       {/* Mobile hint */}
//       {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 text-sm md:text-base">
//         <AnimatePresence>
//           {!isHovered && (
//             <motion.p
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               className="tracking-wider"
//             >
//               Hover to expand — Tap on mobile
//             </motion.p>
//           )}
//         </AnimatePresence>
//       </div> */}
//     </section>
//   );
// };

// export default CircularLogoConstellation;


"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const logos = [
  { src: "/image/tourism/tourism_logo1.png", alt: "Tourism Enterprise", title: "Tourism Enterprise" },
  { src: "/image/tourism/tourism_logo2.png", alt: "Heritage & Environmental Agencies", title: "Heritage & Environmental Agencies" },
  { src: "/image/tourism/tourism_logo3.png", alt: "Tourism Investors", title: "Tourism Investors" },
  { src: "/image/tourism/tourism_logo4.png", alt: "International Bodies", title: "International Bodies & National Bodies" },
  { src: "/image/tourism/tourism_logo5.png", alt: "Local Communities", title: "Local Communities" },
  { src: "/image/tourism/tourism_logo6.png", alt: "Recreation & Entertainment", title: "Recreation & Entertainment Industry" },
  { src: "/image/tourism/tourism_logo7.png", alt: "Travel & Tourism Industry", title: "Travel & Tourism Industry" },
];

const CircularLogoConstellation = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Responsive radius based on screen size
  const getRadius = () => {
    if (typeof window === "undefined") return 140;

    const width = window.innerWidth;
    if (width < 640) return 120;        // sm and below (mobile)
    if (width < 768) return 110;       // md (small tablets)
    if (width < 1024) return 175;      // lg
    if (width < 1280) return 200;      // xl
    return 260;                        // 2xl and up (large desktop)
  };

  const [radius, setRadius] = useState(getRadius());

  // Update radius on window resize
  React.useEffect(() => {
    const handleResize = () => {
      setRadius(getRadius());
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="relative h-[60vh] md:h-screen w-full flex items-center justify-center overflow-hidden bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(prev => !prev)}
    >
      {/* Central Title */}
      <motion.div
        className="absolute z-10 text-center pointer-events-none select-none px-6"
        initial={{ opacity: 0.5, scale: 1 }}
        animate={{
          scale: isHovered ? 0.4 : 1,
          opacity: isHovered ? 0.9 : 0.6,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="font-light text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-widest uppercase leading-tight">
          Who Do We Work With?
        </h2>
      </motion.div>

      {/* Rotating Galaxy Container */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: isHovered ? 360 : 0 }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {logos.map((logo, index) => {
          const angle = (index / logos.length) * 2 * Math.PI - Math.PI / 2;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <motion.div
              key={index}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ x: 0, y: 0, scale: 0.5, opacity: 0 }}
              animate={{
                x: isHovered ? x : 0,
                y: isHovered ? y : 0,
                scale: isHovered ? 1 : 0.5,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{
                duration: 1.4,
                delay: isHovered ? index * 0.08 : index * 0.04,
                ease: [0.25, 0.8, 0.25, 1],
              }}
              whileHover={{ scale: 1.01 }}
            >
              {/* Counter-rotate to keep logos upright */}
              <motion.div
                animate={{ rotate: isHovered ? -360 : 0 }}
                transition={{
                  duration: 80,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="group relative cursor-pointer">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-16 sm:h-20 md:h-24 w-auto object-contain invert grayscale transition-all duration-700 
                             drop-shadow-2xl"
                    draggable={false}
                  />

                  {/* Tooltip */}
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
                                  transition-all duration-300 pointer-events-none whitespace-nowrap z-50">
                    <div className="bg-black/80 backdrop-blur-md border border-white/20 text-white 
                                    text-xs sm:text-sm px-4 py-2 rounded-full shadow-2xl">
                      {logo.title}
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 
                                    w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent 
                                    border-t-8 border-t-black/80" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}

        {/* Orbit Ring */}
        <motion.div
          className="absolute border border-white/20 rounded-full pointer-events-none"
          animate={{
            width: isHovered ? radius * 2 + 100 : 100,
            height: isHovered ? radius * 2 + 100 : 100,
            opacity: isHovered ? 0.2 : 0,
          }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />
      </motion.div>
    </section>
  );
};

export default CircularLogoConstellation;