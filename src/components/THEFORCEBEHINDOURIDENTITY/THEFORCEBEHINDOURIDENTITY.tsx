"use client";
import { ABOUT_COMMUNITY, ABOUT_EQUALITY, ABOUT_GROWING, ABOUT_HUMANITY } from "@/constants/imagePath";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Menu from "../Icons/Menu";

const THEBEHINDOURIDENTITY = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const fasterUp = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const slowerDown = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const slowerUp = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

  return (
    <section
      ref={sectionRef}
      className="relative md:px-6 lg:px-10 py-16 flex flex-col justify-between gap-8 overflow-hidden"
    >
      <h2 className={`text-black text-center font-helveticaNeue text-2xl tracking-widest uppercase mb-6`}>
        THE FORCE BEHIND OUR IDENTITY
      </h2>
      <div className="absolute top-1/2 left-1/2 -translate-1/2 p-28 md:p-40 border-[0.1px] rounded-full">
        {/* <Menu /> */}
      </div>

      {/* TOP ROW */}
      <div className="grid grid-cols-2 gap-10 items-center">
        {/* IMG 1 */}
        <motion.div className="flex justify-end" style={{ y: fasterUp }}>
          <div className="relative h-80 md:h-125 w-[95%] md:w-[85%] lg:w-[70%] md:mr-20 lg:mr-28 group">
            <Image
              src={ABOUT_HUMANITY}
              alt="Parallax"
              fill
              className="object-cover shadow-lg aspect-square"
            />

            {/* OVERLAY */}
            <p className="absolute inset-0 flex items-center justify-center  text-sm md:text-base text-white text-center p-4 bg-black/50  transition-all duration-300 font-garamondlight px-[10%]">
              We have faith in nurturing the soul, preserving the human touch,
              making our each communication of empathy and connection. Our
              efforts not just elevate business but foster a deeper sense of
              purpose in everyone we encounter.
            </p>
            <p className="absolute top-full font-garamondlight tracking-widest">
              Humanity
            </p>
          </div>
        </motion.div>

        {/* IMG 2 */}
        <motion.div style={{ y: slowerDown }}>
          <div className="relative h-60 md:h-70 lg:h-80 w-[80%] md:w-[70%] lg:w-[55%] group">
            <Image
              src={ABOUT_EQUALITY}
              alt="Parallax"
              fill
              className="object-cover shadow-lg aspect-video"
            />

            {/* OVERLAY */}
            <p className="absolute inset-0 flex items-center justify-center text-sm md:text-base text-white text-center p-4 bg-black/50 transition-all duration-300 font-garamondlight px-[10%]">
              Every gesture, smile, choice of words and service reflects the
              genuine commitment to equality within our empathetic community
              regardless of anything.
            </p>
            <p className="absolute top-full font-garamondlight tracking-widest">
              Equality
            </p>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM ROW */}
      <div className="grid grid-cols-2 gap-10 items-center">
        {/* IMG 3 */}
        <motion.div className="flex justify-end" style={{ y: slowerUp }}>
          <div className="relative h-60 md:h-70 lg:h-80 w-[80%] md:w-[70%] lg:w-[55%] group">
            <Image
              src={ABOUT_GROWING}
              alt="Parallax"
              fill
              className="object-cover shadow-lg aspect-video"
            />

            {/* OVERLAY */}
            <p className="absolute inset-0 flex items-center justify-center  text-sm md:text-base text-white text-center p-4 bg-black/50 transition-all duration-300 font-garamondlight px-[10%]">
              The beating rhythm of collaboration, uplifting each other,
              kindness & compassion, echoes through every corridor, every room,
              and every encounter in The Doorway.
            </p>
            <p className="absolute top-full font-garamondlight tracking-widest">
              Growing Together
            </p>
          </div>
        </motion.div>

        {/* IMG 4 */}
        <motion.div style={{ y: fasterUp }}>
          <div className="relative h-80 md:h-125 w-[95%] md:w-[85%] lg:w-[70%] md:ml-20 lg:ml-28 group">
            <Image
              src={ABOUT_COMMUNITY}
              alt="Parallax"
              fill
              className="object-cover shadow-lg aspect-square"
            />

            {/* OVERLAY */}
            <p className="absolute inset-0 flex items-center justify-center  text-sm md:text-base text-white text-center p-4 bg-black/50 transition-all duration-300 font-garamondlight px-[10%]">
              The world has changed so quickly so has the definition of success.
              Now it's not about going alone but growing together & building a
              benevolent community. One step towards being living proof of
              winning in a business by being a human first.
            </p>
            <p className="absolute top-full font-garamondlight tracking-widest">
              Building a Benevolent Community
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default THEBEHINDOURIDENTITY;
