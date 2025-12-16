"use client"
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const WhyWeExist2 = () => {
  // Track scroll progress of this section only
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"], // start when top of section hits bottom of viewport
  });

  // Move background from 0 → -40% (or any value you like) as we scroll through the section
  const y = useTransform(scrollYProgress, [0.3, 1], ["0%", "-40%"]);
  const scale = useTransform(scrollYProgress, [0.3, 1], [2, 1]);

  return (
    <section className="relative w-full min-h-[110vh] bg-gray-500 overflow-hidden">
      {/* ===== Parallax Background Image ===== */}
      <motion.div
        className="absolute top-0"
        style={{ y }} // y comes from useTransform
      >
        <Image
          src="/image/sustainability/sustainability_bg5.png"
          alt="Orchid background"
          width={1560}
          height={1560}
          className="object-contain lg:object-cover aspect-auto brightness-30"
          quality={95}
          priority
        />
      </motion.div>

      {/* ===== Foreground Content (unaffected by parallax) ===== */}
      <div className="relative z-10 flex flex-col justify-center h-screen pt-20 px-8 lg:px-24 text-white">
        <div className="max-w-5xl w-full flex flex-col h-full items-end justify-between space-y-8 place-self-end">
          {/* Massage photo */}
          <div className="relative w-full md:w-2xl h-[60%] bg-gray-300 overflow-hidden">
            <motion.img
            style={{scale: scale}}
              src="/image/sustainability/handsonhands.webp"
              alt="Espacio Spa massage"
              className="absolute inset-0 h-full w-full object-cover rounded-none shadow-2xl brightness-50"
            />

            <h1
              className="absolute inset-0 flex items-center justify-center font-light tracking-widest text-5xl text-white"
            >
              WHY WE EXIST
            </h1>
          </div>

          {/* Text content */}
          <div className="text-center space-y-4 max-w-2xl">
            <p className="text-sm md:text-base font-garamondlight text-gray-200 leading-relaxed">
              As you walk through The Doorway, you will find not just a company
              but a sanctuary—a sanctuary where hearts are touched, emotions are
              kindled, and dreams are nurtured. We invite you to join us on this
              journey, as we redefine success by embracing our shared humanity
              and building a benevolent community that stands as a testament to
              what can be achieved when we put people first. Together, let us
              create a world where compassion, craftsmanship, and connection
              intertwine to shape a brighter future for us and the next
              generation to come. In a way, The Doorway is about creating a
              community, a community where crafty humans with intense humanity
              exist.
            </p>

            <a
              href="#"
              className="inline-block text-sm tracking-widest hover:text-gold-400 transition-colors duration-300"
            >
              DISCOVER →
            </a>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default WhyWeExist2;