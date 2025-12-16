"use client";
import { ABOUT01 } from "@/constants/imagePath";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TheEdit = () => {
  const containerRef = useRef(null);

  // Track scroll progress within the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform left column (moves down)
  const leftY = useTransform(scrollYProgress, [0, 1], ["-70%", "8%"]);

  // Transform right column (moves up)
  const rightY = useTransform(scrollYProgress, [0, 1], ["8%", "-70%"]);

  return (
    <section ref={containerRef} className="relative h-[200vh] mx-6 lg:mx-10">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 w-full flex justify-between">
          {/* LEFT COLUMN */}
          <motion.div
            style={{ y: leftY }}
            className="w-1/3 flex flex-col gap-10 lg:gap-20"
          >
            <div className="h-[60vh]">
              <img src={ABOUT01} alt="" className="h-full object-contain" />
            </div>
            <div className="h-[60vh] flex justify-end">
              <img src={ABOUT01} alt="" className="h-full object-contain" />
            </div>
            <div className="h-[60vh]">
              <img src={ABOUT01} alt="" className="h-full object-contain" />
            </div>
            <div className="h-[60vh] flex justify-end">
              <img src={ABOUT01} alt="" className="h-full object-contain" />
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            style={{ y: rightY }}
            className="w-1/3 flex flex-col gap-10 lg:gap-20"
          >
            <div className="h-[60vh]">
              <img src={ABOUT01} alt="" className="h-full object-contain" />
            </div>
            <div className="h-[60vh] flex justify-end">
              <img src={ABOUT01} alt="" className="h-full object-contain" />
            </div>
            <div className="h-[60vh]">
              <img src={ABOUT01} alt="" className="h-full object-contain" />
            </div>
            <div className="h-[60vh] flex justify-end">
              <img src={ABOUT01} alt="" className="h-full object-contain" />
            </div>
          </motion.div>
        </div>
        <div className="relative flex flex-col gap-6 w-1/3 px-2 items-center text-center">
             <h3 className="text-black text-center font-helveticaNeue text-2xl md:text-3xl tracking-widest uppercase">
          The edit
        </h3>
        <p className="font-garamondlight tracking-wide text-sm [word-spacing:0.02rem] text-center font-medium">
            Celebrate the wonders of Maui at our 5-star beachfront Wailea resort, where our team pampers you in the true spirit of Aloha. Inhale 
        </p>
        </div>
      </div>
    </section>
  );
};

export default TheEdit;





// "use client"
// import { ABOUT01 } from "@/constants/imagePath";
// import {motion, useScroll, useTransform } from "framer-motion";
// import React, { useRef } from "react";

// const TheEdit = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"], // Start when section enters viewport, end when it exits
//   });

//   const fasterDown = useTransform(scrollYProgress, [0.2, 1], ["-100%", "300%"]); // even faster upward
//   const fasterUp = useTransform(scrollYProgress, [0.2, 1], ["100%", "-300%"]); // even faster upward

//   return (
//     <section ref={sectionRef} className="h-[150vh] relative">
//       <div className="sticky top-0 -z-10 h-screen flex items-center justify-center">
//         asdasd
//       </div>
//       <div className="absolute top-0 w-full flex justify-between">
//         <motion.div style={{ y: fasterUp }} className="z-10 w-1/3 content-center flex flex-col gap-20">
//           <div className="h-[50vh] ">
//             <img src={ABOUT01} alt="" className="h-full object-contain" />
//           </div>
//           <div className="h-[50vh] flex justify-end">
//             <img src={ABOUT01} alt="" className="h-full object-contain" />
//           </div>
//           <div className="h-[50vh] ">
//             <img src={ABOUT01} alt="" className="h-full object-contain" />
//           </div>
//         </motion.div>
//         <motion.div style={{ y: fasterDown }} className="z-10 w-1/3 content-center flex flex-col gap-20">
//           <div className="h-[50vh] ">
//             <img src={ABOUT01} alt="" className="h-full object-contain" />
//           </div>
//           <div className="h-[50vh] flex justify-end">
//             <img src={ABOUT01} alt="" className="h-full object-contain" />
//           </div>
//           <div className="h-[50vh] ">
//             <img src={ABOUT01} alt="" className="h-full object-contain" />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default TheEdit;
