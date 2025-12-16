// import React from "react";
// import Image from "next/image";
// import { SUSTAINABILITY_NETWORK } from "@/constants/imagePath";

// const ANetworkOfExpertise = () => {
//   return (
//     <section className="max-w-5xl mx-auto my-20 h-screen flex flex-col md:flex-row gap-8 items-center">

//       {/* Left Side */}
//       <div className="w-full md:w-1/2 px-6">
//         <h2
//           className="text-black text-center font-helveticaNeue text-2xl tracking-wide uppercase mb-12"
//         >
//           A network of expertise collaborating for impact
//         </h2>

//         <p className="font-garamondlight tracking-wide text-sm text-center">
//           Our organizational structure is built around the Partnership model. Our Partners are the trusted advisors to leading organizations across Nepal — we mobilize our team of experts across all 7 provinces in our continuous effort to be the leader in sustainability consulting. We continue to strive today to make a positive difference for our clients, for society, and for the planet.
//         </p>
//         <br />
//         <p className="font-garamondlight tracking-wide text-sm text-center">
//           Through a partnership model rooted in collaboration and expertise, we align our efforts with the Sustainable Development Goals to create lasting change. By uniting the best minds and resources, we empower communities, drive innovation, and ensure a more sustainable, equitable future for all.
//         </p>
//       </div>

//       {/* Right Side */}
//       <div className="w-full md:w-1/2 h-[300px] md:h-full relative">
//         <Image
//           src={SUSTAINABILITY_NETWORK}
//           alt="Network of Expertise"
//           fill
//           className="object-cover"
//         />
//       </div>

//     </section>
//   );
// };

// export default ANetworkOfExpertise;

"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { SUSTAINABILITY_NETWORK } from "@/constants/imagePath";
import { motion, useScroll, useTransform } from "framer-motion";

const ANetworkOfExpertise = () => {
  const ref = useRef(null);

  // Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // start when section enters viewport, end when it leaves
  });

  // Map scrollYProgress to a vertical translate for parallax
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]); // moves image slightly up as user scrolls

  return (
    <section
      ref={ref}
      className="max-w-5xl mx-auto my-20 h-screen flex flex-col md:flex-row gap-8 items-center"
    >
      {/* Left Side */}
      <div className="w-full md:w-1/2 pr-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-black text-center font-helveticaNeue text-2xl tracking-wide uppercase mb-12"
        >
          A network of expertise collaborating for impact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-garamondlight tracking-wide text-sm text-center"
        >
          Our organizational structure is built around the Partnership model.
          Our Partners are the trusted advisors to leading organizations across
          Nepal — we mobilize our team of experts across all 7 provinces in our
          continuous effort to be the leader in sustainability consulting. We
          continue to strive today to make a positive difference for our
          clients, for society, and for the planet.
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-garamondlight tracking-wide text-sm text-center"
        >
          Through a partnership model rooted in collaboration and expertise, we
          align our efforts with the Sustainable Development Goals to create
          lasting change. By uniting the best minds and resources, we empower
          communities, drive innovation, and ensure a more sustainable,
          equitable future for all.
        </motion.p>
      </div>

      {/* Right Side with Parallax */}
      <div className="w-full md:w-1/2 px-6 h-[400px] md:h-[700px] relative overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 h-[500px] md:h-[1000px]"
        >
          <Image
            src={SUSTAINABILITY_NETWORK}
            alt="Network of Expertise"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ANetworkOfExpertise;
