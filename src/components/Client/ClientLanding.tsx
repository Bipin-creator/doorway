// 'use client';

// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// // Import your images
// import { HOTEL_DIAMOND, HOTEL_MAHAMAYA } from "@/constants/imagePath";

// const sections = [
//   {
//     bg: HOTEL_DIAMOND,
//     overlay: "from-transparent to-black/80",
//     logo: "/image/hoteldiamond-logo-golden.png",
//     title: "Hotel Diamond Palace",
//     subtitle: "Revitalizing a Five-Star Legacy",
//     startDate: "July 21, 2023",
//     endDate: "January 21, 2024",
//     extra: null,
//   },
//   {
//     bg: HOTEL_MAHAMAYA, // ← your interior / construction / progress shot
//     overlay: "from-transparent to-black/80",
//     logo: "/image/hoteldiamond-logo-golden.png",
//     title: "Hotel Mahamaya",
//     subtitle: "Crafting Timeless Elegance Anew",
//     startDate: "August 2023",
//     endDate: "December 2023",
//     extra: null,
//   },
//   {
//     bg: HOTEL_DIAMOND, // ← final night shot / grand reveal
//     overlay: "from-transparent to-black/80",
//     logo: "/image/hoteldiamond-logo-golden.png",
//     title: "Grand Reopening",
//     subtitle: "A Legend Reborn • Now ",
//     startDate: "January 21, 2024",
//     endDate: "Ongoing",
//     extra: null,
//   },
// ];

// const ClientLanding = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end end"],
//   });

//   return (
//     <>
//       {/* Header */}
//       <div className="py-12 md:py-24">
//         <h2 className="text-center text-black font-helveticaNeue text-4xl  tracking-widest uppercase">
//           Our Successfull Client
//         </h2>
//       </div>

//       {/* 3 Sticky Full-Screen Sections */}
//       <div ref={containerRef} className="relative">
//         {sections.map((sec, i) => {
//           const scale = useTransform(scrollYProgress, [i / sections.length, 1], [1.2, 1]);

//           return (
//             <section
//               key={i}
//               className="min-h-screen sticky top-0 flex items-center justify-center overflow-hidden"
//             >
//               {/* Background */}
//               <motion.div className="absolute inset-0" style={{ scale }}>
//                 <Image
//                   src={sec.bg}
//                   alt=""
//                   fill
//                   priority={i === 0}
//                   className="object-cover object-top"
//                 />
//                 <div className={`absolute inset-0 bg-linear-to-b ${sec.overlay}`} />
//               </motion.div>

//               {/* Fixed-Position Card – IDENTICAL layout, different content */}
//               <motion.div
//                 className="absolute bottom-20 right-0 sm:right-8 md:right-24 z-10"
//                 // style={{ opacity }}
//                 initial={{ opacity: 0, x: 120 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//                 viewport={{ once: false }}
//               >
//                 <div className="bg-white/10 backdrop-blur-sm border border-white/30 shadow-2xl p-8 flex gap-6 max-w-lg">
//                   {/* Golden Logo */}
//                   <div className="w-24 h-24 shrink-0 rounded border-2 border-yellow-500/80 bg-black/40 flex items-center justify-center">
//                     <img
//                       src={sec.logo}
//                       alt="Logo"
//                       className="w-20 h-20 object-contain drop-shadow-2xl"
//                     />
//                   </div>

//                   {/* Dynamic Text Content */}
//                   <div className="text-white">
//                     <h1 className="text-2xl font-garamondlight tracking-wider leading-tight">
//                       {sec.title}
//                     </h1>

//                     <p className="text-sm font-light tracking-wide mt-1 opacity-90">
//                       {sec.subtitle}
//                     </p>

//                     <div className="mt-4 space-y-1 text-sm font-helveticaNeue tracking-wide">
//                       <p>
//                         Commencement Date:{" "}
//                         <span className="font-bold text-yellow-400">
//                           {sec.startDate}
//                         </span>
//                       </p>
//                       <p>
//                         {i === 2 ? "Reopened:" : "Completion:"}{" "}
//                         <span className="font-bold text-yellow-400">
//                           {sec.endDate}
//                         </span>
//                       </p>
//                     </div>

//                     {/* Optional extra line */}
//                     {sec.extra && (
//                       <p className="mt-5 text-sm font-light leading-relaxed opacity-80 max-w-xs">
//                         {sec.extra}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             </section>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default ClientLanding;

"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Import your images
import { HOTEL_DIAMOND, HOTEL_MAHAMAYA } from "@/constants/imagePath";

const sections = [
  {
    bg: HOTEL_DIAMOND,
    overlay: "from-black/70 to-black/60",
    logo: "/image/hoteldiamond-logo-golden.png",
    title: "Hotel Diamond Palace",
    subtitle: "Revitalizing a Five-Star Legacy",
    startDate: "July 21, 2023",
    endDate: "January 21, 2024",
    extra: null,
  },
  {
    bg: HOTEL_MAHAMAYA, // ← your interior / construction / progress shot
    overlay: "from-black/60 to-black/70",
    logo: "/image/mahamaya-green.png",
    title: "Hotel Mahamaya Crown",
    subtitle: "Crafting Timeless Elegance Anew",
    startDate: "August 2023",
    endDate: "December 2023",
    extra: null,
  },
  {
    bg: HOTEL_DIAMOND, // ← final night shot / grand reveal
    overlay: "from-black/50 to-black/60",
    logo: "/image/hoteldiamond-logo-golden.png",
    title: "Grand Reopening Guest",
    subtitle: "A Legend Reborn • Now ",
    startDate: "January 21, 2024",
    endDate: "Ongoing",
    extra: null,
  },
];

const ClientLanding = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  return (
    <>
      {/* Header */}
      <div className="py-8 md:py-16">
        <h2 className="text-center text-black font-helveticaNeue text-4xl  tracking-widest uppercase">
          Our Successfull Client
        </h2>
      </div>

      {/* 3 Sticky Full-Screen Sections */}
      <div ref={containerRef} className="relaaztive">
        {sections.map((sec, i) => {
          const scale = useTransform(
            scrollYProgress,
            [i / sections.length, 1],
            [1.2, 1]
          );

          return (
            <section
              key={i}
              className="min-h-screen sticky top-0 flex items-center justify-center overflow-hidden"
            >
              {/* Background */}
              <motion.div className="absolute inset-0" style={{ scale }}>
                <Image
                  src={sec.bg}
                  alt=""
                  fill
                  priority={i === 0}
                  className="object-cover object-top"
                />
                <div
                  className={`absolute inset-0 bg-linear-to-b ${sec.overlay}`}
                />
              </motion.div>

              {/* Fixed-Position Card – IDENTICAL layout, different content */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-1/2  z-10 max-w-lg flex flex-col items-center"
                // style={{ opacity }}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: false }}
              >
                <div className=" h-48 mb-4 ">
                  <img
                    src={sec.logo}
                    alt="Logo"
                    className="h-full w-full object-cover drop-shadow-2xl"
                  />
                </div>
                <h1 className="text-5xl uppercase text-white brightness-200 drop-shadow-2xl text-center font-garamondlight tracking-wider">
                  {sec.title}
                </h1>

                <p className="text-base font-garamondlight text-white drop-shadow-2xl font-light tracking-wide mt-1 opacity-90">
                  {sec.subtitle}
                </p>
              </motion.div>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default ClientLanding;
