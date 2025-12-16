"use client";

import { ABOUT01 } from "@/constants/imagePath";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ButtonThree from "../ButtonThree/ButtonThree";
import { AnimatedSectionBlockProps } from "./types";

const AnimatedSectionBlock = ({
  title,
  text,
  direction = "expand",
}: AnimatedSectionBlockProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isLg, setIsLg] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: direction === "expand"
      ? ["start 85%", "start 35%"]
      : ["end 85%", "end 35%"],
  });

  // Responsive check
  useEffect(() => {
    const checkWidth = () => setIsLg(window.innerWidth >= 1024);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  // Container size
  const rawWidth = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "expand" ? ["75%", "100%"] : ["100%", "75%"]
  );
  const rawHeight = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "expand" ? ["60vh", "90vh"] : ["90vh", "60vh"]
  );

  const smoothWidth = useSpring(rawWidth, { stiffness: 100, damping: 25, mass: 0.5 });
  const smoothHeight = useSpring(rawHeight, { stiffness: 100, damping: 25, mass: 0.5 });

  // Text animations
  const opacity = useTransform(scrollYProgress, [0, 1], direction === "expand" ? [0, 1] : [1, 0.1]);
  const scale = useTransform(scrollYProgress, [0, 1], direction === "expand" ? [1.1, 1] : [1, 1.1]);
  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "expand" ? [0, isLg ? 50 : 27] : [isLg ? 50 : 27, 0]
  );

  const smoothOpacity = useSpring(opacity, { stiffness: 120, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 120, damping: 30 });
  const smoothTranslateX = useSpring(translateX, { stiffness: 120, damping: 30 });

  // Image zoom-out
  const imageScaleRaw = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const smoothImageScale = useSpring(imageScaleRaw, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      ref={ref}
      style={{ width: smoothWidth, height: smoothHeight }}
      className="mx-auto grid grid-cols-2 items-center overflow-hidden bg-gray-100 will-change-transform"
    >
      {/* Image */}
      <div className="relative h-full w-full overflow-hidden">
        <motion.div
          style={{ scale: smoothImageScale, transformOrigin: "center center" }}
          className="absolute inset-0"
        >
          <Image src={ABOUT01} alt={title} fill className="object-cover" />
        </motion.div>
      </div>

      {/* Text */}
      <motion.div
        style={{
          opacity: smoothOpacity,
          scale: smoothScale,
          translateX: smoothTranslateX,
          transformOrigin: "left center",
        }}
        className="px-6"
      >
        <h3 className="text-black font-helveticaNeue text-xl md:text-2xl tracking-widest uppercase mb-8">
          {title}
        </h3>
        <p className="font-garamondlight w-96 tracking-wider text-sm [word-spacing:0.02rem] font-medium mb-8">
          {text}
        </p>
        <ButtonThree width="150px" height="45px" text="Detail" />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedSectionBlock;