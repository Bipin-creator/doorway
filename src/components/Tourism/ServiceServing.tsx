"use client";
import {
  TOURISM1,
  TOURISM2,
  TOURISM3,
  TOURISM4,
  TOURISM5,
  TOURISM6,
  TOURISM7,
} from "@/constants/imagePath";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ServiceServing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Text animations

  // Column 2 - Center (3 images) - Medium movement
  const col2Y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const col2Y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const col2Y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);


  // Image scale on scroll
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const imageScale1 = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <section
      ref={sectionRef}
      className="relative grid grid-cols-3 items-center gap-5 px-10 my-16 min-h-screen overflow-hidden max-w-7xl mx-auto"
    >
      {/* Animated Text Overlay */}
     

      {/* Column 1 - Left */}
      <div className="flex flex-col gap-5">
        <motion.div
          className="relative h-120 w-full overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            style={{ scale: imageScale1 }}
            className="relative h-full w-full"
          >
            <Image
              src={TOURISM3}
              alt="vision"
              fill
              className="object-cover scale-200"
            />
            <div className="absolute scale-200 inset-0 bg-linear-to-t from-black/40 to-transparent" />
          </motion.div>
        </motion.div>

        <motion.div
          className="relative h-120 w-full overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
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
              className="object-cover scale-200"
            />
            <div className="absolute scale-200 inset-0 bg-linear-to-t from-black/40 to-transparent" />
          </motion.div>
        </motion.div>
      </div>

      {/* Column 2 - Center */}
      <div className="flex flex-col gap-5">
        <motion.div
          style={{ y: col2Y1 }}
          className="relative h-120 w-full overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.div
            style={{ scale: imageScale }}
            className="relative h-full w-full"
          >
            <Image src={TOURISM1} alt="vision" fill className="object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: col2Y2 }}
          className="relative h-120 w-full overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div className="relative h-full w-full text-center flex flex-col items-center justify-center">
            <h2 className="font-helveticaNeue text-2xl tracking-widest uppercase mb-6">
              Serving tourism
            </h2>

            <p className="font-garamondlight tracking-wide text-sm [word-spacing:0.02rem] font-medium">
              Our calling nests well in the overall purpose of the independent
              hoteliers & tourism professionals Success Movement. As you walk
              through The Doorway, you will find not just a company but a
              sanctuary—a sanctuary where hearts are touched, emotions are
              kindled, and dreams are nurtured.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: col2Y3 }}
          className="relative h-120 w-full overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            style={{ scale: imageScale }}
            className="relative h-full w-full"
          >
            <Image src={TOURISM5} alt="vision" fill className="object-cover" />
            <div className="absolute inset-0 bg-linear-to-t scale-200 from-black/40 to-transparent" />
          </motion.div>
        </motion.div>
      </div>

      {/* Column 3 - Right */}
      <div className="flex flex-col gap-5">
        <motion.div
          className="relative h-120 w-full overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
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
              className="object-cover scale-200"
            />
            <div className="absolute inset-0 bg-linear-to-t scale-200 from-black/40 to-transparent" />
          </motion.div>
        </motion.div>

        <motion.div
          className="relative h-120 w-full overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
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
              className="object-cover scale-200"
            />
            <div className="absolute inset-0 scale-200 bg-linear-to-t from-black/40 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceServing;
