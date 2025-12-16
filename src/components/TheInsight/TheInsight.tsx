// const TheInsight = () => {
//   return (
//     <section className="my-16 md:mx-16 lg:mx-60">
//       <div className="max-w-171 mx-auto">
//         <h2
//           className={`text-black text-center font-helveticaNeue text-2xl tracking-widest uppercase mb-6`}
//         >
//           The insights
//         </h2>
//         <p className="font-garamondlight tracking-wider text-sm [word-spacing:0.02rem] text-center font-medium">
//           In a world where success is often dictated by resources, only those
//           with the means and prowess to self-promote are granted the opportunity
//           to flourish. Whether it be Independent hotels, hidden destinations,
//           novel concepts, and even individuals, prosperity is reserved for those
//           who can afford the spotlight. The truth is, those with power and
//           wealth don't just thrive but they command the narrative, dictating who
//           gets seen and who remains in the shadows.
//         </p>
//         <br />
//         <p className="font-garamondlight tracking-wider text-sm [word-spacing:0.02rem] text-center font-medium">
//           Meanwhile, a parallel realm exists, concealed within the shadows. In
//           this realm lie independent hotels brimming with character,
//           destinations rich with untold stories, and concepts waiting to
//           inspire. These treasures are hidden—not because they lack value, but
//           because they lack a stage. Patiently awaiting their revelation for
//           their moment to be seen, to share their brilliance, and to take their
//           rightful place in the light.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default TheInsight;


"use client";

import React from "react";
import { motion } from "framer-motion";

const TheInsight = () => {
  return (
    <section className="my-16 mx-8 md:mx-16 lg:mx-60">
      <div className="max-w-171 mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-black text-center font-helveticaNeue text-2xl tracking-widest uppercase mb-6"
        >
          The insights
        </motion.h2>

        {/* First paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="font-garamondlight tracking-wider text-sm [word-spacing:0.02rem] text-center font-medium"
        >
          In a world where success is often dictated by resources, only those
          with the means and prowess to self-promote are granted the opportunity
          to flourish. Whether it be Independent hotels, hidden destinations,
          novel concepts, and even individuals, prosperity is reserved for those
          who can afford the spotlight. The truth is, those with power and
          wealth don't just thrive but they command the narrative, dictating who
          gets seen and who remains in the shadows.
        </motion.p>

        <motion.br
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        />

        {/* Second paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="font-garamondlight tracking-wider text-sm [word-spacing:0.02rem] text-center font-medium"
        >
          Meanwhile, a parallel realm exists, concealed within the shadows. In
          this realm lie independent hotels brimming with character,
          destinations rich with untold stories, and concepts waiting to
          inspire. These treasures are hidden—not because they lack value, but
          because they lack a stage. Patiently awaiting their revelation for
          their moment to be seen, to share their brilliance, and to take their
          rightful place in the light.
        </motion.p>
      </div>
    </section>
  );
};

export default TheInsight;