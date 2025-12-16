'use client'
import { SUSTAINABILITY } from "@/constants/imagePath";
import Image from "next/image";
import {motion} from 'framer-motion'

const SustainabilityLanding = () => {
  return (
    <section className="relative min-h-screen bg-black">
      <div className="absolute  inset-0 flex items-center justify-center z-10">
        <Image
          src="/un.svg"
          alt="white doorway logo"
          height={200}
          width={150}
          priority
          className="object-cover h-auto"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={SUSTAINABILITY}
          alt="white doorway logo"
          fill
          priority
          className="object-cover  h-auto opacity-80"
        />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-10  flex flex-col items-center justify-center">
        <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10px" }}
        transition={{ duration: 0.5, ease: "easeOut", delay:0.5 }}
          className={`text-white text-center font-garamondlight text-4xl lg:text-[70px] leading-4 tracking-widest uppercase mb-6`}
        >
          Sustainability 
        </motion.h2>
        <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay:0.5 }}
          className={`text-white text-center font-helveticaNeue lg:text-[25px] md:leading-2 uppercase mb-6`}
        >
          Our commitment to global standards
        </motion.h2>
      </div>
    </section>
  );
};

export default SustainabilityLanding;
