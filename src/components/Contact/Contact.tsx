// import React from 'react'

// const Contact = () => {
//   return (
//     <section className='h-screen w-full flex flex-col gap-10 md:gap-16 lg:gap-20 items-center justify-center md:pt-40'>
//       <h2 className='text-5xl md:text-7xl lg:text-9xl font-garamondlight uppercase text-black text-center'>
//         Contact
//       </h2>
//        <p className="font-garamondlight mx-auto max-w-xl  px-4 md:px-1 tracking-wide text-sm [word-spacing:0.02rem] text-center font-medium">
//             Once a highly celebrated establishment, the hotel struggled during
//             an ownership transition. Food management, deteriorating service
//             quality, and neglect of the property in urgent need of revival. The
//             new owners aimed to restore its prestige through rebranding and
//             modernization.
//           </p>
//     </section>
//   )
// }

// export default Contact


// src/components/Contact/Contact.tsx

"use client"; // This line is REQUIRED

import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const Contact = () => {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Particles Background */}
      <Particles
        id="tsparticles-contact"
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          particles: {
            number: { value: 12, density: { enable: true, area: 1000 } },
            color: { value: "#000000" },
            shape: { type: "circle" },
            opacity: {
              value: 0.5,
              random: true,
              animation: {
                enable: true,
                speed: 0.4,
                minimumValue: 0.1,
                sync: false,
              },
            },
            size: { value: { min: 2, max: 6 } },
            links: {
              enable: false,
              distance: 200,
              color: "#333333",
              opacity: 0.15,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.6, // super slow
              direction: "none",
              random: true,
              straight: false,
              outModes: "bounce",
            },
          },
          detectRetina: true,
        }}
      />

      {/* Your beautiful content */}
       <section className='h-screen w-full flex flex-col gap-10 md:gap-16 lg:gap-20 items-center justify-center md:pt-40'>
      <h2 className='text-5xl md:text-7xl lg:text-9xl font-garamondlight uppercase text-black text-center'>
        Contact
      </h2>
       <p className="font-garamondlight mx-auto max-w-xl  px-4 md:px-1 tracking-wide text-sm [word-spacing:0.02rem] text-center font-medium">
            Once a highly celebrated establishment, the hotel struggled during
            an ownership transition. Food management, deteriorating service
            quality, and neglect of the property in urgent need of revival. The
            new owners aimed to restore its prestige through rebranding and
            modernization.
          </p>
    </section>
    </div>
  );
};

export default Contact;