"use client";
import { ABOUT_MISSION, HOSPITALITY1, HOSPITALITY2, HOSPITALITY3, HOSPITALITY4, HOSPITALITY5 } from "@/constants/imagePath";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const HospitalityRepresentation = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Split animation into phases:
  // Phase 1 (0-0.7): Images animate (section sticks)
  // Phase 2 (0.7-1): Section scrolls away

  // Corner images move away
  const xLeft = useTransform(scrollYProgress, [0, 0.5], [0, -600]);
  const xRight = useTransform(scrollYProgress, [0, 0.5], [0, 600]);

  // Corner images fade out
  const opacityCorners = useTransform(scrollYProgress, [0.1, 0.5], [1, 0]);

  // Center image zooms in dramatically
  const scaleCenter = useTransform(scrollYProgress, [0, 0.6], [1, 1.5]);

  // Slight scale for corner images
  const scaleCorner = useTransform(scrollYProgress, [0, 0.7], [1, 2]);

  // Rotation for dynamism
  const rotateLeft = useTransform(scrollYProgress, [0, 0.7], [0, -8]);
  const rotateRight = useTransform(scrollYProgress, [0, 0.7], [0, 8]);

  // Y-axis movement for corners
  const yTop = useTransform(scrollYProgress, [0, 0.5], [0, -200]);
  const yBottom = useTransform(scrollYProgress, [0, 0.5], [0, 200]);

  return (
    <section ref={sectionRef} className="h-[200vh] md:h-[300vh] relative">
      {/* Sticky container that holds position during animation */}
      <div className="h-screen w-full sticky top-0 overflow-hidden">
        {/* Top Left */}
        <motion.div
          style={{
            scale: scaleCorner,
            x: xLeft,
            y: yTop,
            opacity: opacityCorners,
            rotate: rotateLeft,
          }}
          className="absolute left-4 md:left-20 top-24 md:top-16 h-45 w-60 md:h-70 md:w-100 overflow-hidden "
        >
          <motion.div className="h-full w-full">
            <Image
              src={HOSPITALITY1}
              alt="Hospitality"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Bottom Left */}
        <motion.div
          style={{
            scale: scaleCorner,
            x: xLeft,
            y: yBottom,
            opacity: opacityCorners,
            rotate: rotateRight,
          }}
          className="absolute bottom-18 md:bottom-10  left-16 md:left-44 h-60 w-40 md:h-70 md:w-50 overflow-hidden "
        >
          <motion.div className="h-full w-full">
            <Image
              src={HOSPITALITY3}
              alt="Hospitality"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Center - Zooms In */}
        <motion.div
          style={{ scale: scaleCenter }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-70 w-115 overflow-hidden  z-10"
        >
          <motion.div className="h-full w-full">
            <Image
              src={HOSPITALITY5}
              alt="Hospitality Center"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Top Right */}
        <motion.div
          style={{
            scale: scaleCorner,
            x: xRight,
            y: yTop,
            opacity: opacityCorners,
            rotate: rotateRight,
          }}
          className="absolute right-16 md:right-44 top-18 md:top-10 h-60 w-40 md:h-70 md:w-50 overflow-hidden "
        >
          <motion.div className="h-full w-full">
            <Image
              src={HOSPITALITY2}
              alt="Hospitality"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Bottom Right */}
        <motion.div
          style={{
            scale: scaleCorner,
            x: xRight,
            y: yBottom,
            opacity: opacityCorners,
            rotate: rotateLeft,
          }}
          className="absolute right-4 md:right-20 bottom-24 md:bottom-16 h-45 w-60 md:h-70 md:w-100 overflow-hidden "
        >
          <motion.div className="h-full w-full">
            <Image
              src={HOSPITALITY4}
              alt="Hospitality"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Overlay Text (optional - appears during zoom) */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
          style={{ opacity: useTransform(scrollYProgress, [0.4, 0.5], [0, 1]) }}
        >
          <h2
          className={`text-white text-center font-helveticaNeue text-5xl tracking-widest uppercase mb-6`}
        >
          Hospitality <br/> Representation
        </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default HospitalityRepresentation;
