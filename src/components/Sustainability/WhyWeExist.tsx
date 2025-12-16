"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

// // import React from "react";
// // import Image from "next/image";
// // import { motion, useScroll, useTransform } from "framer-motion";

// // const WhyWeExist = () => {
// //   // Track scroll progress of this section only
// //   const { scrollYProgress } = useScroll({
// //     offset: ["start end", "end start"], // start when top of section hits bottom of viewport
// //   });

// //   // Move background from 0 → -40% (or any value you like) as we scroll through the section
// //   const y = useTransform(scrollYProgress, [0.3, 1], ["0%", "-40%"]);
// //   const scale = useTransform(scrollYProgress, [0.3, 1], [2, 1]);

// //   return (
// //     <>
// //     <section className="relative w-full min-h-[110vh] bg-gray-500 overflow-hidden">
// //       {/* ===== Parallax Background Image ===== */}
// //       <motion.div
// //         className="absolute top-0"
// //         style={{ y }} // y comes from useTransform
// //       >
// //         <Image
// //           src="/image/sustainability/sustainability_bg5.png"
// //           alt="Orchid background"
// //           width={1560}
// //           height={1560}
// //           className="object-contain lg:object-cover aspect-auto brightness-30"
// //           quality={95}
// //           priority
// //         />
// //       </motion.div>

// //       {/* ===== Foreground Content (unaffected by parallax) ===== */}
// //       <div className="relative z-10 flex flex-col justify-center h-screen pt-20 px-8 lg:px-24 text-white">
// //         <div className="max-w-5xl w-full flex flex-col h-full items-end justify-between space-y-8 place-self-end">
// //           {/* Massage photo */}
// //           <div className="relative w-full md:w-2xl h-[60%] bg-gray-300 overflow-hidden">
// //             <motion.img
// //             style={{scale: scale}}
// //               src="/image/sustainability/handsonhands.webp"
// //               alt="Espacio Spa massage"
// //               className="absolute inset-0 h-full w-full object-cover rounded-none shadow-2xl brightness-50"
// //             />

// //             <h1
// //               className="absolute inset-0 flex items-center justify-center font-light tracking-widest text-5xl text-white"
// //             >
// //               WHY WE EXIST
// //             </h1>
// //           </div>

// //           {/* Text content */}
// //           <div className="text-center space-y-4 max-w-2xl">
// //             <p className="text-sm md:text-base font-garamondlight text-gray-200 leading-relaxed">
// //               As you walk through The Doorway, you will find not just a company
// //               but a sanctuary—a sanctuary where hearts are touched, emotions are
// //               kindled, and dreams are nurtured. We invite you to join us on this
// //               journey, as we redefine success by embracing our shared humanity
// //               and building a benevolent community that stands as a testament to
// //               what can be achieved when we put people first. Together, let us
// //               create a world where compassion, craftsmanship, and connection
// //               intertwine to shape a brighter future for us and the next
// //               generation to come. In a way, The Doorway is about creating a
// //               community, a community where crafty humans with intense humanity
// //               exist.
// //             </p>

// //             <a
// //               href="#"
// //               className="inline-block text-sm tracking-widest hover:text-gold-400 transition-colors duration-300"
// //             >
// //               DISCOVER →
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //     <section className="w-full bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
// //        <div className="max-w-7xl mx-auto">
// //          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
// //            {/* Left side - Image collage */}
// //            <div className="relative grid grid-cols-5 grid-rows-12 gap-4 h-[600px]">
// //              {/* Tall left image */}
// //              <div className="row-span-9 col-span-2">
// //                <img
// //                 src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop"
// //                 alt="Mountain landscape with hiker"
// //                 className="w-full h-full object-cover"
// //               />
// //             </div>

// //             {/* Top right image */}
// //             <div className="col-span-3 "></div>
// //             <div className="col-span-3 row-span-5">
// //               <img
// //                 src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=290&fit=crop"
// //                 alt="Hiker on mountain trail"
// //                 className="w-full h-full object-cover"
// //               />
// //             </div>

// //             {/* Bottom right image */}
// //             <div className="col-span-2 row-span-6">
// //               <img
// //                 src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=290&fit=crop"
// //                 alt="Person overlooking lake"
// //                 className="w-full h-full object-cover"
// //               />
// //             </div>
// //           </div>

// //           {/* Right side - Content */}
// //           <div className="space-y-6">
// //             <h1 className="font-light tracking-wide text-5xl text-black">
// //               WHY WE EXIST
// //             </h1>

// //             <div className="space-y-4 text-gray-600 leading-relaxed">
// //               <p className="text-sm md:text-base font-garamondlight text-black leading-relaxed">
// //                 Lorem Ipsum is simply dummy text of the printing and typesetting
// //                 industry. Lorem Ipsum has been the industry's standard dummy
// //                 text since the 1500s. Lorem Ipsum is simply dummy text of the
// //                 printing and typesetting industry. Lorem Ipsum has been the
// //                 industry's standard dummy text ever since.
// //               </p>

// //               <p className="text-sm md:text-base font-garamondlight text-black leading-relaxed">
// //                 Simply dummy text of the printing and typesetting industry.
// //                 Lorem Ipsum has been the industry's standard dummy text ever
// //                 since.
// //               </p>
// //             </div>

// //             <button className="group inline-flex items-center gap-3 px-6 py-2.5 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300">
// //               <span className="text-sm font-light tracking-wide">
// //                 View Details
// //               </span>
// //               <svg
// //                 className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 viewBox="0 0 24 24"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={1.5}
// //                   d="M17 8l4 4m0 0l-4 4m4-4H3"
// //                 />
// //               </svg>
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //     </>
// //   );
// // };

// // export default WhyWeExist;

// export default function AboutUsSection() {
//   return (
//    <section className="w-full bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
//        <div className="max-w-7xl mx-auto">
//          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//            {/* Left side - Image collage */}
//            <div className="relative grid grid-cols-5 grid-rows-12 gap-4 h-[600px]">
//              {/* Tall left image */}
//              <div className="row-span-9 col-span-2">
//                <img
//                 src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop"
//                 alt="Mountain landscape with hiker"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Top right image */}
//             <div className="col-span-3 "></div>
//             <div className="col-span-3 row-span-5">
//               <img
//                 src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=290&fit=crop"
//                 alt="Hiker on mountain trail"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Bottom right image */}
//             <div className="col-span-2 row-span-6">
//               <img
//                 src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=290&fit=crop"
//                 alt="Person overlooking lake"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>

//           {/* Right side - Content */}
//           <div className="space-y-6">
//             <h1 className="font-light tracking-wide text-5xl text-black">
//               WHY WE EXIST
//             </h1>

//             <div className="space-y-4 text-gray-600 leading-relaxed">
//               <p className="text-sm md:text-base font-garamondlight text-black leading-relaxed">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. Lorem Ipsum has been the industry's standard dummy
//                 text since the 1500s. Lorem Ipsum is simply dummy text of the
//                 printing and typesetting industry. Lorem Ipsum has been the
//                 industry's standard dummy text ever since.
//               </p>

//               <p className="text-sm md:text-base font-garamondlight text-black leading-relaxed">
//                 Simply dummy text of the printing and typesetting industry.
//                 Lorem Ipsum has been the industry's standard dummy text ever
//                 since.
//               </p>
//             </div>

//             <button className="group inline-flex items-center gap-3 px-6 py-2.5 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300">
//               <span className="text-sm font-light tracking-wide">
//                 View Details
//               </span>
//               <svg
//                 className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={1.5}
//                   d="M17 8l4 4m0 0l-4 4m4-4H3"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function AboutUsSection() {
  const ref = useRef(null);

  // Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // start when section enters viewport, end when it leaves
  });

  // Map scrollYProgress to a vertical translate for parallax
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]); // moves image slightly up as user scrolls
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]); // moves image slightly up as user scrolls
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]); // moves image slightly up as user scrolls
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]); // moves image slightly up as user scrolls
  return (
    <section
      ref={ref}
      className="w-full bg-gray-50 py-16 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image collage */}
          <div className="relative  gap-4 h-[400px] md:h-[600px]">
            {/* Tall left image */}
            <motion.div
              style={{ y: y }}
              className="w-[40%] md:w-[40%] h-[300px] md:h-[450px] absolute top-0 left-0 overflow-hidden"
            >
              <motion.div
                style={{ y: y1 }}
                className="absolute inset-0 h-[350px] md:h-[600px]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop"
                  alt="Mountain landscape with hiker"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
            <div className="w-[54%] md:w-[57%] h-[130px] md:h-[230px] absolute top-15  right-0 overflow-hidden">
              <motion.div
                style={{ y: y2 }}
                className="absolute inset-0 h-[200px] md:h-[300px]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=290&fit=crop"
                  alt="Hiker on mountain trail"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div className="w-[40%] md:w-[40%] h-[200px] md:h-[293px] absolute bottom-0  left-[43%] overflow-hidden">
              <motion.div
                style={{ y: y3 }}
                className="absolute inset-0 h-[250px] md:h-[350px]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=290&fit=crop"
                  alt="Person overlooking lake"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            {/* <div className="">
               <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop"
                alt="Mountain landscape with hiker"
                className="w-full h-full object-cover"
              />
            </div> */}

            {/* <div className="">
              <img
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=290&fit=crop"
                alt="Hiker on mountain trail"
                className="w-full h-full object-cover"
              />
            </div> */}

            {/* Bottom right image */}
            {/* <div className="">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=290&fit=crop"
                alt="Person overlooking lake"
                className="w-full h-full object-cover"
              />
            </div> */}
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-light tracking-wide text-4xl text-black"
            >
              WHY WE EXIST
            </motion.h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
               className="text-sm md:text-sm font-garamondlight text-black leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text since the 1500s. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since.
              </motion.p>

              <p className="text-sm md:text-sm font-garamondlight text-black leading-relaxed">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since.
              </p>
            </div>

            <button className="group inline-flex items-center gap-3 px-6 py-2.5 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300">
              <span className="text-sm font-light tracking-wide">
                View Details
              </span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
