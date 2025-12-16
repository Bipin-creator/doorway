"use client";
import {
  ABOUT01,
  ABOUT_MISSION,
  ABOUT_VISION,
  ABOUT_VISION_01,
  ABOUT_VISION_03,
} from "@/constants/imagePath";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const AboutStory = () => {
  const ref = useRef(null);

  // Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // start when section enters viewport, end when it leaves
  });

  // Map scrollYProgress to a vertical translate for parallax
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  return (
    <section
      ref={ref}
      className="px-1 sm:px-4 md:px-6 lg:px-10 space-y-16 my-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-helveticaNeue text-2xl text-center tracking-widest uppercase mb-6 "
      >
        Our Vision
      </motion.h2>
      <div className="max-w-175 mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-garamondlight tracking-wide text-sm [word-spacing:0.02rem] text-center font-medium px-1"
        >
          Our vision takes flight with a genuine desire to see every independent
          hotel, every overlooked destination, and every untold story step into
          the spotlight they so rightfully deserve. We imagine a world where no
          gem remains hidden, where potential is no longer defined by resources,
          and where authenticity finds its voice.
        </motion.p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-14 md:space-x-14">
        <div className="md:w-1/2 flex flex-col items-center gap-7">
          <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative overflow-hidden">
            <motion.div
              style={{ y: y1 }}
              className="absolute inset-0 h-[400px] md:h-[700px]"
            >
              <Image
                src={ABOUT_VISION}
                alt="Network of Expertise"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
          {/* <Image src={ABOUT_VISION} alt="About02" width={380} height={500} /> */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            className="font-garamondlight lg:w-[400px] px-1 tracking-wide text-sm [word-spacing:0.02rem] text-center font-medium"
          >
            Envision The Doorway as more than a company—a movement where hotels
            rediscover purpose, travelers find meaning, destinations reclaim
            their soul, and adventurers answer their deepest calling. We believe
            the true magic of tourism lies not just in exploration but in
            connection, where human relationships, technology, and principles of
            sustainability unite to create something far greater than the sum of
            their parts.{" "}
          </motion.p>
        </div>
        {/* <div className="w-1/2">
          <Image src={ABOUT_VISION_01} alt="About01" width={800} height={900} />
        </div> */}
        <div className="w-full md:w-[45%] h-[400px] md:h-[950px] relative overflow-hidden">
          <motion.div style={{ y }} className="absolute inset-0 h-[500px] md:h-[1150px]">
            <Image
              src={ABOUT_VISION_01}
              alt="Network of Expertise"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row  justify-between items-center md:space-x-14">
        {/* <div className="md:w-1/2">
          <Image src={ABOUT_VISION_03} alt="About01" width={800} height={900} />
        </div> */}
        <div className="w-full md:w-[45%] h-[400px] md:h-[850px] relative overflow-hidden">
          <motion.div style={{ y }} className="absolute inset-0 h-[500px] md:h-[1150px]">
            <Image
              src={ABOUT_VISION_03}
              alt="Network of Expertise"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
        <div className="md:w-1/2 flex flex-col items-center gap-5 my-2.5 ">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            className="font-garamondlight lg:w-[400px] px-1 tracking-wide text-sm [word-spacing:0.02rem] text-center font-medium"
          >
            This isn’t just about hotels or destinations. It’s about
            people—about honoring the dreams of those who dare to dream, about
            sparking inspiration in those who seek it, and about igniting a
            ripple effect of consciousness and change that transcends borders
            and generations. Together, we can awaken a new way of seeing the
            world & inspire a future where no one is left in the shadows.
          </motion.p>
        </div>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-helveticaNeue text-2xl text-center tracking-widest uppercase mb-6"
      >
        Our Mission
      </motion.h2>

      <div className="max-w-175 mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          className="font-garamondlight tracking-wide px-1 text-sm [word-spacing:0.02rem] text-center font-medium"
        >
          Our mission is to transform hospitality for hotels outside Kathmandu
          through the strategic integration of technology, brand distinction,
          and operational excellence, delivering exceptional and elevated guest
          experiences.
        </motion.p>
      </div>
      <div className="flex flex-col-reverse md:flex-row  justify-between items-center md:space-x-14">
        <div className="md:w-1/2 flex flex-col items-center gap-5 my-2.5">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            className="font-garamondlight lg:w-[400px] px-1 tracking-wide text-sm [word-spacing:0.02rem] text-center font-medium"
          >
            By combining innovative solutions with a deep understanding of local
            hospitality, we empower hotels to exceed guest expectations, enhance
            operational efficiency, and build a strong, recognizable brand
            presence in a competitive market.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="font-garamondlight lg:w-[400px] px-1 tracking-wide text-sm [word-spacing:0.02rem] text-center font-medium"
          >
            This sentiment was echoed in 2021, with the arrival of a new retail
            collection, The Essentials by Aman, comprising timeless
            ready-to-wear pieces for every guest. With new horizons, come new
            opportunities, and Aman will continue to expand its offering in the
            coming years, staying true to its guiding principle of instilling
            peace in those it touches.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            href="#"
            className="underline decoration-1 text-sm md:mt-6 underline-offset-2 font-garamondlight"
          >
            Discover More
          </motion.a>
        </div>
        {/* <div className="md:w-1/2">
          <Image src={ABOUT_MISSION} alt="About01" width={800} height={900} />
        </div> */}
        <div className="w-full md:w-[45%] h-[400px] md:h-[950px] relative overflow-hidden">
          <motion.div style={{ y }} className="absolute inset-0 h-[500px] md:h-[1150px]">
            <Image
              src={ABOUT_MISSION}
              alt="Network of Expertise"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
