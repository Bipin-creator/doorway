// // "use client";
// // import { ABOUT01 } from "@/constants/imagePath";
// // import Image from "next/image";
// // import { useEffect, useRef, useState } from "react";
// // import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// // import ButtonThree from "../ButtonThree/ButtonThree";

// // /* --------------------------------------------------------------
// //    Animated block – works for expand (first) AND collapse (last)
// //    -------------------------------------------------------------- */
// // type Direction = "expand" | "collapse";

// // interface AnimatedSectionBlockProps {
// //   title: string;
// //   text: string;
// //   direction?: Direction; // new prop
// // }
// // const AnimatedSectionBlock = ({
// //   title,
// //   text,
// //   direction = "expand",
// // }: AnimatedSectionBlockProps) => {
// //   const ref = useRef<HTMLDivElement>(null);

// //   // ---- scroll tracking -------------------------------------------------
// //   const { scrollYProgress } = useScroll({
// //     target: ref,
// //     offset:
// //       direction === "expand"
// //         ? ["start 85%", "start 35%"]
// //         : ["end 85%", "end 35%"],
// //   });

// //   // ---- container size --------------------------------------------------
// //   const rawWidth = useTransform(
// //     scrollYProgress,
// //     [0, 1],
// //     direction === "expand" ? ["75%", "100%"] : ["100%", "75%"]
// //   );
// //   const rawHeight = useTransform(
// //     scrollYProgress,
// //     [0, 1],
// //     direction === "expand" ? ["60vh", "90vh"] : ["90vh", "60vh"]
// //   );

// //   const smoothWidth = useSpring(rawWidth, {
// //     stiffness: 100,
// //     damping: 25,
// //     mass: 0.5,
// //   });
// //   const smoothHeight = useSpring(rawHeight, {
// //     stiffness: 100,
// //     damping: 25,
// //     mass: 0.5,
// //   });

// //   // ---- text animations -------------------------------------------------
// //   const opacity = useTransform(
// //     scrollYProgress,
// //     [0, 1],
// //     direction === "expand" ? [0, 1] : [1, 0.1]
// //   );
// //   const scale = useTransform(
// //     scrollYProgress,
// //     [0, 1],
// //     direction === "expand" ? [1.1, 1] : [1, 1.1]
// //   );
// //  const [isLg, setIsLg] = useState(false);

// // useEffect(() => {
// //   const checkWidth = () => {
// //     setIsLg(window.innerWidth >= 1024); // lg breakpoint
// //   };
// //   checkWidth();
// //   window.addEventListener("resize", checkWidth);
// //   return () => window.removeEventListener("resize", checkWidth);
// // }, []);

// // const translateX = useTransform(
// //   scrollYProgress,
// //   [0, 1],
// //   direction === "expand"
// //     ? [0, isLg ? 50 : 27]
// //     : [isLg ? 50 : 27, 0]
// // );

// //   const smoothOpacity = useSpring(opacity, { stiffness: 120, damping: 30 });
// //   const smoothScale = useSpring(scale, { stiffness: 120, damping: 30 });
// //   const smoothTranslateX = useSpring(translateX, {
// //     stiffness: 120,
// //     damping: 30,
// //   });

// //   // ---- IMAGE ZOOM-OUT (same for expand & collapse) --------------------
// //   const imageScaleRaw = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
// //   const smoothImageScale = useSpring(imageScaleRaw, {
// //     stiffness: 100,
// //     damping: 30,
// //   });

// //   return (
// //     <motion.div
// //       ref={ref}
// //       style={{ width: smoothWidth, height: smoothHeight }}
// //       className="mx-auto grid grid-cols-2 items-center overflow-hidden bg-gray-100 will-change-transform"
// //     >
// //       {/* IMAGE with scroll-driven zoom-out */}
// //       <div className="relative h-full w-full overflow-hidden">
// //         <motion.div
// //           style={{
// //             scale: smoothImageScale,
// //             transformOrigin: "center center",
// //           }}
// //           className="absolute inset-0"
// //         >
// //           <Image src={ABOUT01} alt={title} fill className="object-cover" />
// //         </motion.div>
// //       </div>

// //       {/* TEXT with opacity, scale, translate */}
// //       <motion.div
// //         style={{
// //           opacity: smoothOpacity,
// //           scale: smoothScale,
// //           translateX: smoothTranslateX,
// //           transformOrigin: "left center",
// //         }}
// //         className="px-6"
// //       >
// //         <h3 className="text-black font-helveticaNeue text-xl md:text-2xl tracking-widest uppercase mb-8">
// //           {title}
// //         </h3>
// //         <p className="font-garamondlight w-96 tracking-wider text-sm [word-spacing:0.02rem] font-medium mb-8">
// //           {text}
// //         </p>
// //         <a href="#" >
// //           <ButtonThree width="150px" height="45px" text="Detail" />
// //         </a>
// //       </motion.div>
// //     </motion.div>
// //   );
// // };
// // /* --------------------------------------------------------------
// //    Static block – unchanged
// //    -------------------------------------------------------------- */
// // const StaticSectionBlock = ({
// //   title,
// //   text,
// // }: {
// //   title: string;
// //   text: string;
// // }) => {
// //   const ref = useRef<HTMLDivElement>(null);

// //   // Track scroll progress for this block
// //   const { scrollYProgress } = useScroll({
// //     target: ref,
// //     offset: ["start 80%", "end 20%"], // starts when 80% from top, ends when 20% from bottom
// //   });

// //   // Image scale: starts zoomed in (1.15), ends normal (1)
// //   const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.15, 1]);
// //   const smoothImageScale = useSpring(imageScale, {
// //     stiffness: 100,
// //     damping: 30,
// //   });

// //   return (
// //     <div
// //       ref={ref}
// //       className="mx-auto grid grid-cols-2 items-center overflow-hidden bg-gray-100"
// //     >
// //       {/* Image with scroll-driven zoom-out */}
// //       <div className="relative h-[90vh] w-full overflow-hidden">
// //         <motion.div
// //           style={{
// //             scale: smoothImageScale,
// //             transformOrigin: "center center",
// //           }}
// //           className="absolute inset-0"
// //         >
// //           <Image src={ABOUT01} alt={title} fill className="object-cover" />
// //         </motion.div>
// //       </div>

// //       {/* Text (with slight offset for design consistency) */}
// //       <div className="px-6 translate-x-9 lg:translate-x-[50px]">
// //         <h3 className="text-black font-helveticaNeue text-xl md:text-2xl tracking-widest uppercase mb-8">
// //           {title}
// //         </h3>
// //         <p className="font-garamondlight w-96 tracking-wider text-sm [word-spacing:0.02rem] font-medium mb-8">
// //           {text}
// //         </p>
// //         <a href="#" className="">
// //           <ButtonThree width="150px" height="45px" text="Detail" />
// //         </a>
// //       </div>
// //     </div>
// //   );
// // };
// // /* --------------------------------------------------------------
// //    Main component
// //    -------------------------------------------------------------- */
// // const MAUI = () => {
// //   const description =
// //     "Celebrate the wonderm pampers you in thyou dip into our adults-only infinity pool, or set out to explore the island with a customized itinerary designed just for you. At day’s end, unwind in the most spacious accommodations Maui has to offer.";

// //   return (
// //     <section className="px-2 sm:px-4 md:px-6 lg:px-10 py-10 md:py-16">
// //       <div className="mb-10">
// //         <h2 className="text-black text-center font-garamondlight text-2xl md:text-3xl tracking-widest uppercase">
// //           The doorway&apos;s
// //         </h2>
// //         <h2 className="text-black text-center font-helveticaNeue text-2xl md:text-3xl tracking-widest uppercase">
// //           Sustainable Development policy framework
// //         </h2>
// //       </div>

// //       {/* FIRST – expands on scroll */}
// //       <AnimatedSectionBlock
// //         title="Sustainable Development"
// //         text={description}
// //         direction="expand"
// //       />

// //       {/* STATIC blocks */}
// //       <StaticSectionBlock title="Biodiversity" text={description} />
// //       <StaticSectionBlock title="Energy and Water Management" text={description} />
// //       <StaticSectionBlock title="Sustainable Consumption and Production" text={description} />
// //       <StaticSectionBlock title="Industry -Wide Resource Efficiency" text={description} />

// //       {/* LAST – collapses on scroll (opposite animation) */}
// //       <AnimatedSectionBlock
// //         title="Circular Economy"
// //         text={description}
// //         direction="collapse"
// //       />
// //     </section>
// //   );
// // };

// // export default MAUI;


// "use client";
// import {
//   BIODIVERSITY,
//   CIRCULAR_ECONOMY,
//   MARKET,
//   SUSTAINABLE_DEVELOPMENT,
//   SUSTAINABLE_PRODUCTION,
//   WATER_MANEGEMENT,
// } from "@/constants/imagePath";

// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import ButtonThree from "../ButtonThree/ButtonThree";

// /* --------------------------------------------------------------
//    Animated block – works for expand (first) AND collapse (last)
//    -------------------------------------------------------------- */
// type Direction = "expand" | "collapse";

// interface AnimatedSectionBlockProps {
//   title: string;
//   text: string;
//   image: string; // ⬅️ NEW
//   direction?: Direction;
// }

// const AnimatedSectionBlock = ({
//   title,
//   text,
//   image,
//   direction = "expand",
// }: AnimatedSectionBlockProps) => {
//   const ref = useRef<HTMLDivElement>(null);

//   // scroll tracking
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset:
//       direction === "expand"
//         ? ["start 85%", "start 35%"]
//         : ["end 85%", "end 35%"],
//   });

//   // container size animation
//   const rawWidth = useTransform(
//     scrollYProgress,
//     [0, 1],
//     direction === "expand" ? ["75%", "100%"] : ["100%", "75%"]
//   );
//   const rawHeight = useTransform(
//     scrollYProgress,
//     [0, 1],
//     direction === "expand" ? ["60vh", "90vh"] : ["90vh", "60vh"]
//   );

//   const smoothWidth = useSpring(rawWidth, {
//     stiffness: 100,
//     damping: 25,
//     mass: 0.5,
//   });
//   const smoothHeight = useSpring(rawHeight, {
//     stiffness: 100,
//     damping: 25,
//     mass: 0.5,
//   });

//   // text animations
//   const opacity = useTransform(
//     scrollYProgress,
//     [0, 1],
//     direction === "expand" ? [0, 1] : [1, 0.1]
//   );
//   const scale = useTransform(
//     scrollYProgress,
//     [0, 1],
//     direction === "expand" ? [1.1, 1] : [1, 1.1]
//   );

//   const [isLg, setIsLg] = useState(false);

//   useEffect(() => {
//     const checkWidth = () => {
//       setIsLg(window.innerWidth >= 1024);
//     };
//     checkWidth();
//     window.addEventListener("resize", checkWidth);
//     return () => window.removeEventListener("resize", checkWidth);
//   }, []);

//   const translateX = useTransform(
//     scrollYProgress,
//     [0, 1],
//     direction === "expand"
//       ? [0, isLg ? 50 : 0]
//       : [isLg ? 50 : 0, 0]
//   );

//   const smoothOpacity = useSpring(opacity, { stiffness: 120, damping: 30 });
//   const smoothScale = useSpring(scale, { stiffness: 120, damping: 30 });
//   const smoothTranslateX = useSpring(translateX, {
//     stiffness: 120,
//     damping: 30,
//   });

//   // image zoom-out
//   const imageScaleRaw = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
//   const smoothImageScale = useSpring(imageScaleRaw, {
//     stiffness: 100,
//     damping: 30,
//   });

//   return (
//     <motion.div
//       ref={ref}
//       style={{ width: smoothWidth, height: smoothHeight }}
//       className="mx-auto grid grid-cols-2 items-center overflow-hidden bg-gray-100 will-change-transform"
//     >
//       {/* IMAGE */}
//       <div className="relative h-full w-full overflow-hidden">
//         <motion.div
//           style={{
//             scale: smoothImageScale,
//             transformOrigin: "center center",
//           }}
//           className="absolute inset-0"
//         >
//           <Image src={image} alt={title} fill className="object-cover" />
//         </motion.div>
//       </div>

//       {/* TEXT */}
//       <motion.div
//         style={{
//           opacity: smoothOpacity,
//           scale: smoothScale,
//           translateX: smoothTranslateX,
//           transformOrigin: "left center",
//         }}
//         className="px-6"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8, ease: "easeOut" }} className="text-black font-helveticaNeue text-xl md:text-2xl tracking-widest uppercase mb-2 md:mb-8">
//           {title}
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.9, ease: "easeOut" }}  className="font-garamondlight max-w-96 tracking-wider text-sm [word-spacing:0.02rem] font-medium mb-2 md:mb-8">
//           {text}
//         </motion.p>
//         <a href="#">
//           <ButtonThree width="150px" height="45px" text="Detail" />
//         </a>
//       </motion.div>
//     </motion.div>
//   );
// };

// /* --------------------------------------------------------------
//    Static block – unchanged structure, now dynamic image
//    -------------------------------------------------------------- */
// const StaticSectionBlock = ({
//   title,
//   text,
//   image,
// }: {
//   title: string;
//   text: string;
//   image: string;
// }) => {
//   const ref = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start 80%", "end 20%"],
//   });

//   const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.15, 1]);
//   const smoothImageScale = useSpring(imageScale, {
//     stiffness: 100,
//     damping: 30,
//   });

//   return (
//     <div
//       ref={ref}
//       className="mx-auto grid grid-cols-2 items-center overflow-hidden bg-gray-100"
//     >
//       {/* IMAGE */}
//       <div className="relative h-[50vh] md:h-[90vh] w-full overflow-hidden">
//         <motion.div
//           style={{
//             scale: smoothImageScale,
//             transformOrigin: "center center",
//           }}
//           className="absolute inset-0"
//         >
//           <Image src={image} alt={title} fill className="object-cover" />
//         </motion.div>
//       </div>

//       {/* TEXT */}
//       <div className="px-6  md:translate-x-9 lg:translate-x-[50px]">
//        <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8, ease: "easeOut" }} className="text-black font-helveticaNeue text-xl md:text-2xl tracking-widest uppercase mb-2 md:mb-8">
//           {title}
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.9, ease: "easeOut" }}  className="font-garamondlight max-w-96 tracking-wider text-sm [word-spacing:0.02rem] font-medium mb-2 md:mb-8">
//           {text}
//         </motion.p>
//         <a href="#">
//           <ButtonThree width="150px" height="45px" text="Detail" />
//         </a>
//       </div>
//     </div>
//   );
// };

// /* --------------------------------------------------------------
//    MAIN COMPONENT
//    -------------------------------------------------------------- */
// const MAUI = () => {
//   const description =
//     "Celebrate the wonderm pampers you in thyou dip into our adults-only infinity pool, or set out to explore the island with a customized itinerary designed just for you. At day’s end, unwind in the most spacious accommodations Maui has to offer.";

//   return (
//     <section className="px-2 sm:px-4 md:px-6 lg:px-10 py-10 md:py-16">
//       <div className="mb-10">
//         <h2 className="text-black text-center font-garamondlight text-2xl md:text-3xl tracking-widest uppercase">
//           The doorway&apos;s
//         </h2>
//         <h2 className="text-black text-center font-helveticaNeue text-2xl md:text-3xl tracking-widest uppercase">
//           Sustainable Development policy framework
//         </h2>
//       </div>

//       {/* FIRST */}
//       <AnimatedSectionBlock
//         title="Sustainable Development"
//         text={description}
//         image={SUSTAINABLE_DEVELOPMENT}
//         direction="expand"
//       />

//       {/* STATIC BLOCKS */}
//       <StaticSectionBlock
//         title="Biodiversity"
//         text={description}
//         image={BIODIVERSITY}
//       />

//       <StaticSectionBlock
//         title="Energy and Water Management"
//         text={description}
//         image={WATER_MANEGEMENT}
//       />

//       <StaticSectionBlock
//         title="Sustainable Consumption and Production"
//         text={description}
//         image={SUSTAINABLE_PRODUCTION}
//       />

//       <StaticSectionBlock
//         title="Industry -Wide Resource Efficiency"
//         text={description}
//         image={MARKET}
//       />

//       {/* LAST */}
//       <AnimatedSectionBlock
//         title="Circular Economy"
//         text={description}
//         image={CIRCULAR_ECONOMY}
//         direction="collapse"
//       />
//     </section>
//   );
// };

// export default MAUI;


"use client";

import {
  BIODIVERSITY,
  CIRCULAR_ECONOMY,
  MARKET,
  SUSTAINABLE_DEVELOPMENT,
  SUSTAINABLE_PRODUCTION,
  WATER_MANEGEMENT,
} from "@/constants/imagePath";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ButtonThree from "../ButtonThree/ButtonThree";

/* --------------------------------------------------------------
   Animated block – responsive-safe height animation
-------------------------------------------------------------- */
type Direction = "expand" | "collapse";

interface AnimatedSectionBlockProps {
  title: string;
  text: string;
  image: string;
  direction?: Direction;
}

const AnimatedSectionBlock = ({
  title,
  text,
  image,
  direction = "expand",
}: AnimatedSectionBlockProps) => {
  const ref = useRef<HTMLDivElement>(null);

  /* ---------- viewport height (mobile-safe) ---------- */
  const [vh, setVh] = useState(0);
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    const update = () => {
      setVh(window.innerHeight);
      setIsLg(window.innerWidth >= 1024);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* ---------- scroll tracking ---------- */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset:
      direction === "expand"
        ? ["start 85%", "start 35%"]
        : ["end 85%", "end 35%"],
  });

  /* ---------- width animation ---------- */
  const rawWidth = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "expand" ? ["75%", "100%"] : ["100%", "75%"]
  );

  const smoothWidth = useSpring(rawWidth, {
    stiffness: 100,
    damping: 25,
    mass: 0.5,
  });

  /* ---------- height animation (FIXED) ---------- */
  const rawHeight = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "expand"
      ? [
          vh * (isLg ? 0.6 : 0.35),
          vh * (isLg ? 0.9 : 0.5),
        ]
      : [
          vh * (isLg ? 0.9 : 0.5),
          vh * (isLg ? 0.6 : 0.35),
        ]
  );

  const smoothHeight = useSpring(rawHeight, {
    stiffness: 100,
    damping: 25,
    mass: 0.5,
  });

  /* ---------- text animation ---------- */
  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "expand" ? [0, 1] : [1, 0.1]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "expand" ? [1.1, 1] : [1, 1.1]
  );
  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "expand"
      ? [0, isLg ? 50 : 0]
      : [isLg ? 50 : 0, 0]
  );

  const smoothOpacity = useSpring(opacity, { stiffness: 120, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 120, damping: 30 });
  const smoothTranslateX = useSpring(translateX, {
    stiffness: 120,
    damping: 30,
  });

  /* ---------- image zoom ---------- */
  const imageScaleRaw = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const smoothImageScale = useSpring(imageScaleRaw, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width: smoothWidth, height: smoothHeight }}
      className="mx-auto grid grid-cols-2 items-center overflow-hidden bg-gray-100 will-change-transform"
    >
      {/* IMAGE */}
      <div className="relative h-full w-full overflow-hidden">
        <motion.div
          style={{ scale: smoothImageScale }}
          className="absolute inset-0"
        >
          <Image src={image} alt={title} fill className="object-cover" />
        </motion.div>
      </div>

      {/* TEXT */}
      <motion.div
        style={{
          opacity: smoothOpacity,
          scale: smoothScale,
          translateX: smoothTranslateX,
          transformOrigin: "left center",
        }}
        className="px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-black font-helveticaNeue text-xl md:text-2xl tracking-widest uppercase mb-2 md:mb-8"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-garamondlight max-w-96 tracking-wider text-sm font-medium mb-2 md:mb-8"
        >
          {text}
        </motion.p>

        <ButtonThree width="150px" height="45px" text="Detail" />
      </motion.div>
    </motion.div>
  );
};

/* --------------------------------------------------------------
   Static block – unchanged
-------------------------------------------------------------- */
const StaticSectionBlock = ({
  title,
  text,
  image,
}: {
  title: string;
  text: string;
  image: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.15, 1]);
  const smoothImageScale = useSpring(imageScale, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div
      ref={ref}
      className="mx-auto grid grid-cols-2 items-center overflow-hidden bg-gray-100"
    >
      <div className="relative h-[50vh] md:h-[90vh] w-full overflow-hidden">
        <motion.div
          style={{ scale: smoothImageScale }}
          className="absolute inset-0"
        >
          <Image src={image} alt={title} fill className="object-cover" />
        </motion.div>
      </div>

      <div className="px-6 md:translate-x-9 lg:translate-x-[50px]">
        <h2 className="text-black font-helveticaNeue text-xl md:text-2xl tracking-widest uppercase mb-8">
          {title}
        </h2>
        <p className="font-garamondlight max-w-96 tracking-wider text-sm font-medium mb-8">
          {text}
        </p>
        <ButtonThree width="150px" height="45px" text="Detail" />
      </div>
    </div>
  );
};

/* --------------------------------------------------------------
   MAIN
-------------------------------------------------------------- */
const MAUI = () => {
  const description =
    "Celebrate the wonder that pampers you as you dip into our adults-only infinity pool, or explore the island with a customized itinerary designed just for you.";

  return (
    <section className="px-2 sm:px-4 md:px-6 lg:px-10 py-10 md:py-16">
       <div className="mb-10">
        <h2 className="text-black text-center font-garamondlight text-2xl md:text-3xl tracking-widest uppercase">
          The doorway&apos;s
        </h2>
        <h2 className="text-black text-center font-helveticaNeue text-2xl md:text-3xl tracking-widest uppercase">
          Sustainable Development policy framework
        </h2>
      </div>
      <AnimatedSectionBlock
        title="Sustainable Development"
        text={description}
        image={SUSTAINABLE_DEVELOPMENT}
        direction="expand"
      />

      <StaticSectionBlock
        title="Biodiversity"
        text={description}
        image={BIODIVERSITY}
      />

      <StaticSectionBlock
        title="Energy and Water Management"
        text={description}
        image={WATER_MANEGEMENT}
      />

      <StaticSectionBlock
        title="Sustainable Consumption and Production"
        text={description}
        image={SUSTAINABLE_PRODUCTION}
      />

      <StaticSectionBlock
        title="Industry-Wide Resource Efficiency"
        text={description}
        image={MARKET}
      />

      <AnimatedSectionBlock
        title="Circular Economy"
        text={description}
        image={CIRCULAR_ECONOMY}
        direction="collapse"
      />
    </section>
  );
};

export default MAUI;
