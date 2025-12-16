// "use client";

// import { LANDING_VIDEO1 } from "@/constants/videoPath";
// import { motion, useScroll, useTransform } from "framer-motion";
// import React, { useRef } from "react";

// const TourismLanding = () => {
//   const sectionRef = useRef(null);

//   // Track scroll INSIDE this section only
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end start"],
//   });

//   // Scale: 1 → 3 (3x zoom)
//   const scale = useTransform(scrollYProgress, [0, 0.4, 1], [1, 1.8, 3]);

//   // Fade: 1 → 0
//   const opacity = useTransform(scrollYProgress, [0, 0.1, 0.3], [1, 0.7, 0]);
//   //   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);

//   return (
//     <section ref={sectionRef} className="relative h-[180vh]">
//       <div className="absolute bottom-0 p-20 z-20 left-1/2 -translate-x-1/2 bg-linear-to-b w-full from-transparent to-black">
//         <h2
//           className={`text-white text-center font-helveticaNeue text-2xl tracking-widest uppercase mb-6`}
//         >
//           Developing Tourism
//         </h2>
//         <p className="font-garamondlight text-white tracking-wider text-sm [word-spacing:0.02rem] text-center font-medium max-w-xl mx-auto">
//           In a world where success is often dictated by resources, only those
//           with the means and with the means andwith the means and
//         </p>
//       </div>

//       {/* Sticky Video */}
//       <div className="sticky top-0 h-screen">
//         <video
//           src={LANDING_VIDEO1}
//           className="absolute inset-0 w-full h-full object-cover"
//           autoPlay
//           loop
//           muted
//           playsInline
//         />
//         {/* <div className="absolute inset-0 bg-linear-to-b from-transparent to-black z-10"></div> */}
//       </div>

//       {/* Clipart Zoom + Fade */}
//       <motion.div
//         className="fixed top-0 h-screen w-full flex items-center justify-center pointer-events-none"
//         style={{ scale, opacity }}
//       >
//         <img
//           src="/image/tourism/tourm.png"
//           alt="clipart"
//           className="h-full w-full object-cover"
//         />
//       </motion.div>
//       <motion.div
//         className="fixed top-0 h-screen w-full flex items-center justify-center pointer-events-none"
//         style={{ scale, opacity }}
//       >
//         <img
//           src="/image/tourism/tourm.png"
//           alt="clipart"
//           className="h-full w-full object-cover"
//         />
//       </motion.div>
//     </section>
//   );
// };

// export default TourismLanding;


// "use client";

// import { LANDING_VIDEO1 } from "@/constants/videoPath";
// import { motion, useScroll, useTransform } from "framer-motion";
// import React, { useRef } from "react";

// const TourismLanding = () => {
//   const sectionRef = useRef(null);

//   // Track scroll INSIDE this section only
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end start"],
//   });

//   // Scale: 1 → 3 (3x zoom)
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);

//   // Fade: 1 → 0
//   const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

//   return (
//     <section ref={sectionRef} className="relative h-[180vh]">
//       <motion.div
//         className="absolute bottom-0 p-20 z-20 left-1/2 -translate-x-1/2 bg-linear-to-b w-full from-transparent to-black"
//         initial={{ opacity: 0.1 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//       >
//         <h2
//           className={`text-white text-center font-helveticaNeue text-2xl tracking-widest uppercase mb-6`}
//         >
//           Developing Tourism
//         </h2>
//         <p className="font-garamondlight text-white tracking-wider text-sm [word-spacing:0.02rem] text-center font-medium max-w-xl mx-auto">
//           In a world where success is often dictated by resources, only those
//           with the means and with the means andwith the means and
//         </p>
//       </motion.div>

//       {/* Sticky Video */}
//       <div className="sticky top-0 h-screen">
//         <video
//           src={LANDING_VIDEO1}
//           className="absolute inset-0 w-full h-full object-cover"
//           autoPlay
//           loop
//           muted
//           playsInline
//         />
//       </div>

//       {/* Clipart Zoom + Fade */}
//       <motion.div
//         className="fixed top-0 h-screen w-full flex items-center justify-center pointer-events-none"
//         initial={{ scale: 1, opacity: 1 }}
//         animate={{ scale: 1.2, opacity: 0.4 }}
//         transition={{ duration: 1.2, ease: "easeOut", delay:0.5 }}
//         style={{ scale, opacity }}
//       >
//         <img
//           src="/image/tourism/tourm.png"
//           alt="clipart"
//           className="h-full w-full object-cover"
//         />
//       </motion.div>
    
//     </section>
//   );
// };

// export default TourismLanding;


"use client";

import { LANDING_VIDEO1 } from "@/constants/videoPath";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useEffect } from "react";

const TourismLanding = () => {
  const sectionRef = useRef(null);

  // Track scroll INSIDE this section only
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Scale: 1 → 3 (3x zoom)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);

  // Fade: 1 → 0
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Auto-scroll with smooth animation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (sectionRef.current) {
        const start = window.scrollY;
        const target = start + window.innerHeight * 0.18;
        const duration = 1500; // 2 seconds for smooth scroll
        const startTime = performance.now();

        // Smooth easing function
        const easeInOutQuad = (t: any) => {
          return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        };

        const animateScroll = (currentTime: any) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = easeInOutQuad(progress);
          
          window.scrollTo(0, start + (target - start) * eased);

          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          }
        };

        requestAnimationFrame(animateScroll);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[80vh] md:h-[130vh] lg:h-[180vh]">
      <motion.div
        className="absolute bottom-0 p-20 z-10 left-1/2 -translate-x-1/2 md:bg-linear-to-b w-full text-black md:text-white from-transparent to-black"
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2
          className={` text-center font-helveticaNeue text-2xl tracking-widest uppercase mb-6`}
        >
          Developing Tourism
        </h2>
        <p className="font-garamondlight  tracking-wider text-sm [word-spacing:0.02rem] text-center font-medium max-w-xl mx-auto">
          In a world where success is often dictated by resources, only those
          with the means and with the means andwith the means and
        </p>
      </motion.div>

      {/* Sticky Video */}
      <div className="sticky top-24 md:top-0 w-full h-fit md:h-screen">
        <video
          src={LANDING_VIDEO1}
          className="w-full h-full object-contain md:object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Clipart Zoom + Fade */}
      <motion.div
        className="fixed top-24 md:top-0 h-auto  md:h-screen w-full flex items-center justify-center pointer-events-none"
        style={{ scale, opacity }}
      >
        <img
          src="/image/tourism/tourm.png"
          alt="clipart"
          className="h-full w-full object-contain md:object-cover"
        />
      </motion.div>
    </section>
  );
};

export default TourismLanding;