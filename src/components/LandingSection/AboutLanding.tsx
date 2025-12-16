// // // import { LANDING_VIDEO1 } from "@/constants/videoPath";
// // // import React from "react";

// // // const AboutLanding = () => {
// // //   return (
// // //     <section className="">
// // //       <div className="relative mx-1 ">
// // //       {/* <div className="relative mx-1 md:mx-6 lg:mx-10"> */}
// // //         <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/60 z-10"></div>
// // //         <div className="sticky bottom-[29%] left-1/2 -translate-x-1/2 z-10">
// // //           <p className="font-helveticaNeue text-md text-center text-white mb-5 italic">We Transform Hotels. You Stay in Control</p>
// // //           <h1 className="font-garamondlight text-5xl text-center uppercase text-white">About The Doorway</h1>
// // //           {/* <p className="font-helveticaNeue text-xl text-center capitalize text-white mt-5">We equip hotel owners with</p> */}
// // //         </div>
// // //         <video
// // //           src={LANDING_VIDEO1}
// // //           className={`w-full h-auto `}
// // //           autoPlay
// // //           loop
// // //           muted
// // //           playsInline
// // //         />
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default AboutLanding;



// // import { LANDING_VIDEO1 } from "@/constants/videoPath";
// // import React from "react";

// // const AboutLanding = () => {
// //   return (
// //     <section className="">
// //       <div className="relative">
// //         {/* Overlay */}
// //         {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div> */}


// //         {/* Video */}
// //         <video
// //           src={LANDING_VIDEO1}
// //           className="w-full h-screen"
// //           autoPlay
// //           loop
// //           muted
// //           playsInline
// //           />

// //           {/* Sticky Text */}
// //           <div className="sticky top-20  z-10">
// //             <p className="font-helveticaNeue text-md text-center text-white mb-5 italic">
// //               We Transform Hotels. You Stay in Control
// //             </p>
// //             <h1 className="font-garamondlight text-5xl text-center uppercase text-white">
// //               About The Doorway
// //             </h1>
// //           </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default AboutLanding;


// import { LANDING_VIDEO1 } from "@/constants/videoPath";

// const AboutLanding = () => {
//   return (
//     <section className="relative w-full h-[120vh] pb-20">
//       {/* Video as absolute */}
//       <div className="absolute inset-0 bg-linear-to-b from-transparent to-black z-10"></div>
//       <video
//         src={LANDING_VIDEO1}
//         className="absolute inset-0 w-full h-full object-cover"
//         autoPlay
//         loop
//         muted
//         playsInline
//       />

//       {/* Sticky Text */}
//           <div className="sticky top-[45%]  z-20">
//             <p className="font-helveticaNeue text-md text-center brightness-200 text-white mb-2 md:mb-5 italic animate-fadeUp">
//               We Transform Hotels. You Stay in Control
//             </p>
//             <h1 className="font-garamondlight text-3xl md:text-4xl lg:text-5xl text-center uppercase brightness-200 text-white animate-fadeUp">
//               About The Doorway
//             </h1>
//           </div>
//     </section>
//   );
// };

// export default AboutLanding;


"use client";
import { LANDING_VIDEO1 } from "@/constants/videoPath";
import { useEffect, useRef } from "react";

const AboutLanding = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
  };
  useEffect(()=>{
toggleSound();
  },[])

  return (
    <section className="relative w-full h-[110vh] pb-20">
      <video
        ref={videoRef}
        src="https://s3.ap-south-1.amazonaws.com/renergo.in/hero-renergo.mp4"
        autoPlay
        loop
        muted
        playsInline
        controls
        className="absolute inset-0 w-full h-full object-cover"
      />
       <div className="sticky top-[45%]  z-20">
             <p className="font-helveticaNeue text-md text-center brightness-200 text-white mb-2 md:mb-5 italic animate-fadeUp">
               We Transform Hotels. You Stay in Control
             </p>
             <h1 className="font-garamondlight text-3xl md:text-4xl lg:text-5xl text-center uppercase brightness-200 text-white animate-fadeUp">
               About The Doorway
             </h1>
           </div>
    </section>
  );
};

export default AboutLanding;
