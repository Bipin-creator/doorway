"use client"

import { ABOUT_MISSION, HOTEL_CONSULTING, HOTEL_MANAGEMENT } from "@/constants/imagePath";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const HospitalityService = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end start"],
  });
  const scaleLeft = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const scaleRight = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  return (
    <section
    ref={sectionRef} className="px-10 py-16">
      <h2
        className={`text-black font-garamondlight text-2xl tracking-wide uppercase mb-12 text-center`}
      >
        Our Services
      </h2>
      <div className="grid grid-cols-11">
        {/* LEFT COLUMN */}
        <div className=""></div>
        <div className="col-span-3 flex flex-col justify-between  max-w-sm gap-6">
          <div>
            <h3 className="text-black font-helveticaNeue text-xl tracking-wide mb-4">
              Hotel Consulting Service
            </h3>
            <p className="font-garamondlight tracking-wide text-sm font-medium">
              Drawing its name from the Sanskrit-derived word for &apos;peace&apos;, Aman
              has strategically evolved over the course of three decades to
              become one of the world&apos;s most intuitive and pioneering lifestyle
              brands. Aman's journey, whether experienced in one of its 36
              destinations or in the home, has been inspired by a singular and
              original intent: To provide a level of service and experience that
              is peerless in every way.
            </p>
          </div>

          <div className="relative h-[500px] overflow-hidden">
            <motion.div style={{scale: scaleLeft}} className="h-full w-full">
              <Image
                src={HOTEL_MANAGEMENT}
                alt="Hospitality"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
        <div className=""></div>

        {/* RIGHT COLUMN */}
        <div className="col-span-6 flex flex-col gap-20">
          <div className="relative w-full h-[550px] overflow-hidden">
            <motion.div style={{scale: scaleRight}} className="h-full w-full">
              <Image
                src={HOTEL_CONSULTING}
                alt="Hospitality"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <div>
            <h3 className="text-black font-helveticaNeue text-xl tracking-wide mb-4">
              Hotel Management Service
            </h3>
            <p className="font-garamondlight tracking-wide text-sm font-medium max-w-sm">
              n inspired by a singular and original intent: To provide a level
              of service and experience that is peerless in every way.
            </p>
            <br />
            <p className="font-garamondlight tracking-wide text-sm font-medium max-w-sm">
              Drawing its name from the Sanskrit-derived word for &apos;peace&apos;, Aman
              has strategically evolved over the course of three decades to
              become one of the world&apos;s most way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalityService;
