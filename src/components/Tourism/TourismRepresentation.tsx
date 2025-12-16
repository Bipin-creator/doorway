"use client";
import { TOURISM1, TOURISM2, TOURISM3, TOURISM4, TOURISM5, TOURISM6, TOURISM7 } from "@/constants/imagePath";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TourismRepresentation = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Text animations
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 1, 1, 1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.5,0.56, 1], [2, 1,1, 1]);

  // Column 1 - Left (2 images) - Slower movement
  const col1Y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const col1Y2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Column 2 - Center (3 images) - Medium movement
  const col2Y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const col2Y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const col2Y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  // Column 3 - Right (2 images) - Faster movement
  const col3Y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const col3Y2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Image scale on scroll
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const imageScale1 = useTransform(scrollYProgress, [0, 1], [1, 1]);

  return (
    <section 
      ref={sectionRef}
      className="relative grid grid-cols-3 items-center gap-2 md:gap-8 px-1 md:px-10 my-16 min-h-screen overflow-hidden max-w-7xl mx-auto"
    >
      {/* Animated Text Overlay */}
      <motion.div 
        className="absolute w-full z-10 pointer-events-none"
        style={{ 
          y: textY,
          opacity: textOpacity,
          scale: textScale,
        }}
      >
        <motion.h2 
          className="text-white text-center font-helveticaNeue text-7xl tracking-widest uppercase mb-6"
          // initial={{ letterSpacing: "0.3em" }}
          // whileInView={{ letterSpacing: "0.5em" }}
          // transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Tourism
        </motion.h2>
        <motion.h2 
          className="text-white text-center font-helveticaNeue text-4xl tracking-widest uppercase mb-6 max-w-sm mx-auto"
          // initial={{ letterSpacing: "0.3em" }}
          // whileInView={{ letterSpacing: "0.5em" }}
          // transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
        >
          Representation
        </motion.h2>
      </motion.div>

      {/* Column 1 - Left */}
      <div className="flex flex-col gap-2 md:gap-8">
        <motion.div 
          style={{ y: col1Y1 }}
          className="relative h-80 md:h-120 w-full overflow-hidden"
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            // style={{ scale: imageScale1 }}
            className="relative h-full w-full"
          >
            <Image 
              src={TOURISM3} 
              alt="vision" 
              fill 
              className="object-cover " 
            />
            <div className="absolute  inset-0 bg-linear-to-t from-black/40 to-transparent" />
          </motion.div>
        </motion.div>

        <motion.div 
          style={{ y: col1Y2 }}
          className="relative h-80 md:h-120 w-full overflow-hidden"
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            style={{ scale: imageScale1 }}
            className="relative h-full w-full"
          >
            <Image 
              src={TOURISM4} 
              alt="vision" 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
          </motion.div>
        </motion.div>
      </div>

      {/* Column 2 - Center */}
      <div className="flex flex-col gap-2 md:gap-8">
        <motion.div 
          style={{ y: col2Y1 }}
          className="relative h-80 md:h-120 w-full overflow-hidden"
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.div
            style={{ scale: imageScale }}
            className="relative h-full w-full"
          >
            <Image 
              src={TOURISM1} 
              alt="vision" 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
          </motion.div>
        </motion.div>

        <motion.div 
          style={{ y: col2Y2 }}
          className="relative h-80 md:h-120 w-full overflow-hidden"
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            style={{ scale: imageScale }}
            className="relative h-full w-full"
          >
            <Image 
              src={TOURISM7} 
              alt="vision" 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
          </motion.div>
        </motion.div>

        <motion.div 
          style={{ y: col2Y3 }}
          className="relative h-80 md:h-120 w-full overflow-hidden"
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            style={{ scale: imageScale }}
            className="relative h-full w-full"
          >
            <Image 
              src={TOURISM5} 
              alt="vision" 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
          </motion.div>
        </motion.div>
      </div>

      {/* Column 3 - Right */}
      <div className="flex flex-col gap-2 md:gap-8">
        <motion.div 
          style={{ y: col3Y1 }}
          className="relative h-80 md:h-120 w-full overflow-hidden"
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.div
            style={{ scale: imageScale1 }}
            className="relative h-full w-full"
          >
            <Image 
              src={TOURISM2} 
              alt="vision" 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
          </motion.div>
        </motion.div>

        <motion.div 
          style={{ y: col3Y2 }}
          className="relative h-80 md:h-120 w-full overflow-hidden"
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            style={{ scale: imageScale1 }}
            className="relative h-full w-full"
          >
            <Image 
              src={TOURISM6} 
              alt="vision" 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TourismRepresentation;