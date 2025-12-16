// components/Genesis.tsx
"use client";
import Image from "next/image";
import { ABOUT_GENESIS } from "@/constants/imagePath";
import ButtonThree from "../ButtonThree/ButtonThree";
import { Fade } from "react-awesome-reveal";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Genesis = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref, // Add target
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={ref} className="relative h-[95vh] overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-[120vh]" // Increased height for parallax effect
        style={{ y }}
      >
        <Image
          src={ABOUT_GENESIS}
          alt="Orchid background"
          fill
          className="object-cover brightness-90"
          quality={75}
          priority
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      {/* Content */}
      <div className="relative flex h-full items-center justify-start px-6 md:px-16 lg:px-24">
        <Fade direction="up" cascade damping={0.5} triggerOnce fraction={0.5}>
          <div className="max-w-2xl text-white transition-all duration-500 p-12 md:p-14">
            {/* Title */}
            <h2 className="font-helveticaNeue text-2xl tracking-widest uppercase mb-6">
              Genesis of The Doorway
            </h2>

            {/* Description */}
            <p className="font-garamondlight tracking-wider text-sm  font-medium">
              Having gained such a strong insight of the landscape in the
              Tourism & Hospitality sector, a fierce flame of strong, relentless
              desire was ignited, fueled by an urgent need to clear away the
              shadows that have covered hidden gems & left them in the dark
              within the Tourism & Hospitality sector, behold The
              Doorway—Tourism & Hospitality Representation Company. Stand in awe
              as we rise as an unstoppable force, driven by an intense
              commitment to tackle the serious challenges veiling the potential
              of hotels, resorts, and destinations. In this time of vast
              possibilities, our vigor burns with a strong determination to
              bring much-needed help by unleashing unmatched power and
              transformation upon those destinations hidden in the shadows.
            </p>

            {/* Button */}
            <div className="mt-10 flex items-center gap-5">
              <ButtonThree width="160px" height="48px" text="Discover More" />
              <div className="h-px w-20 group-hover:w-full transition-all duration-1000 bg-gray-900/50" />
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Genesis;
