"use client"; // Still needs to be client due to useScroll

import { ABOUT01 } from "@/constants/imagePath";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ButtonThree from "../ButtonThree/ButtonThree";
import { SectionBlockProps } from "./types";

const StaticSectionBlock = ({ title, text }: SectionBlockProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.15, 1]);
  const smoothImageScale = useSpring(imageScale, { stiffness: 100, damping: 30 });

  return (
    <div
      ref={ref}
      className="mx-auto grid grid-cols-2 items-center overflow-hidden bg-gray-100 h-[90vh]"
    >
      <div className="relative h-full w-full overflow-hidden">
        <motion.div
          style={{ scale: smoothImageScale, transformOrigin: "center center" }}
          className="absolute inset-0"
        >
          <Image src={ABOUT01} alt={title} fill className="object-cover" />
        </motion.div>
      </div>

      <div className="px-6 translate-x-9 lg:translate-x-[50px]">
        <h3 className="text-black font-helveticaNeue text-xl md:text-2xl tracking-widest uppercase mb-8">
          {title}
        </h3>
        <p className="font-garamondlight w-96 tracking-wider text-sm [word-spacing:0.02rem] font-medium mb-8">
          {text}
        </p>
        <ButtonThree width="150px" height="45px" text="Detail" />
      </div>
    </div>
  );
};

export default StaticSectionBlock;