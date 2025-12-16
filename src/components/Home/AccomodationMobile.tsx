// "use client";
// import Image from "next/image";
// import { useState, useRef, useEffect } from "react";
// import ButtonThree from "../ButtonThree/ButtonThree";

// const accommodations = [
//   {
//     title: "Deluxe Suite",
//     desc: "Spacious room with private balcony and ocean view. room with private balcony and ocean view.Spacious room with private Romantic stay with jacuzzi and panoramic scenery.",
//     image: "/image/home_bg.avif",
//     other: {
//       name: "detail",
//       link: "/detail1",
//     },
//   },
//   {
//     title: "Premium Villa",
//     desc: "Luxury villa with private pool and lush garden.Luxury villa with private pool and lush garden.Luxury villa with private pool and lush garden.Luxury villa with private pool and lush garden.",
//     image: "/image/home_bg.avif",
//     other: {
//       name: "detail",
//       link: "/detail1",
//     },
//   },
//   {
//     title: "Mountain Cabin",
//     desc: "Cozy wooden cabin surrounded by mountain viewsCozy wooden cabin surrounded by mountain viewsCozy wooden cabin surrounded by mountain viewsCozy wooden cabin surrounded by mountain views.",
//     image: "/image/home_bg.avif",
//     other: {
//       name: "View More",
//       link: "/detail1",
//     },
//   },
//   {
//     title: "Executive Room",
//     desc: "Elegant suite with king bed and lounge area. Elegant suite with king bed and lounge area.Elegant suite with king bed and lounge area.Elegant suite with king bed and lounge area. ",
//     image: "/image/home_bg.avif",
//     other: {
//       name: "detail",
//       link: "/detail1",
//     },
//   },
//   {
//     title: "Honeymoon Suite",
//     desc: "Romantic stay with jacuzzi and panoramic scenery. Romantic stay with jacuzzi and panoramic scenery.Romantic stay with jacuzzi and panoramic scenery.Romantic stay with jacuzzi and panoramic scenery.",
//     image: "/image/home_bg.avif",
//     other: {
//       name: "explore",
//       link: "/detail1",
//     },
//   },
// ];

// export default function AccomodationMobileSnap() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const trackRef = useRef<HTMLDivElement>(null);

//   // Detect the centered card
//   useEffect(() => {
//     const container = trackRef.current;
//     if (!container) return;

//     const handleScroll = () => {
//       const center = container.scrollLeft + container.offsetWidth / 2;
//       let closestIndex = 0;
//       let closestDistance = Infinity;

//       const children = Array.from(container.children) as HTMLDivElement[];
//       children.forEach((child, idx) => {
//         const childCenter = child.offsetLeft + child.offsetWidth / 2;
//         const distance = Math.abs(center - childCenter);
//         if (distance < closestDistance) {
//           closestDistance = distance;
//           closestIndex = idx;
//         }
//       });

//       setActiveIndex(closestIndex);
//     };

//     container.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll(); // initialize

//     return () => container.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="block lg:hidden px-4 py-10">
//       <h2 className="text-center font-helveticaNeue text-xl tracking-widest uppercase mb-8 text-black">
//         Accommodation
//       </h2>

//       <div
//         ref={trackRef}
//         className="flex overflow-x-auto items-center gap-4 scroll-smooth snap-x snap-mandatory h-120 no-scrollbar"
//         style={{ scrollBehavior: "smooth" }} // extra smoothness
//       >
//         {accommodations.map((item, i) => {
//           const isActive = i === activeIndex;
//           return (
//             <div
//               key={i}
//               className={`snap-center shrink-0 transition-all duration-700 ease-in-out ${
//                 isActive ? "w-75 h-115" : "w-70 h-90 opacity-60"
//               }`}
//             >
//               <div className="relative bg-white shadow-md overflow-hidden h-full flex flex-col transition-all duration-700 ease-in-out">
//                 <div
//                   className={`relative w-full transition-all duration-700 ease-in-out ${
//                     isActive ? "h-[40%]" : "h-[90%]"
//                   }`}
//                 >
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     fill
//                     className="object-cover"
//                   />
//                   <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
//                 </div>

//                 <div className="flex-1 p-5 flex flex-col justify-between text-center transition-all duration-700 ease-in-out">
//                   <h3 className="font-helveticaNeue text-lg tracking-widest uppercase text-black">
//                     {item.title}
//                   </h3>
//                   <div
//                     className={`absolute top-full left-0 w-full transition-all duration-900 ease-in-out  
//                       ${isActive ? "-translate-y-[110%]" : "translate-y-0"
//                     }`}
//                   >
//                     {/* small line */}
//                     <div className="w-10 h-0.5 bg-black mx-auto"></div>
//                     <p
//                       className={`text-black text-xs w-65 mx-auto md:text-sm font-garamondlight py-5`}
//                     >
//                       {item.desc}
//                     </p>
//                     {item.other && (
//                       <ButtonThree width="150px" text={item.other.name} />
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Dots */}
//       <div className="flex justify-center gap-2 mt-6">
//         {accommodations.map((_, i) => (
//           <div
//             key={i}
//             className={`transition-all duration-500 ease-in-out rounded-full ${
//               i === activeIndex ? "bg-black w-8 h-2" : "bg-gray-400 w-2 h-2"
//             }`}
//           />
//         ))}
//       </div>

//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-in {
//           animation: fade-in 0.5s ease-out forwards;
//         }
//       `}</style>
//     </section>
//   );
// }



// // "use client";

// // import Image from "next/image";
// // import { useState } from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Autoplay } from "swiper/modules";

// // import "swiper/css";

// // import ButtonThree from "../ButtonThree/ButtonThree";

// // const accommodations = [
// //   {
// //     title: "Deluxe Suite",
// //     desc: "Spacious room with private balcony and ocean view. room with private balcony and ocean view.Spacious room with private Romantic stay with jacuzzi and panoramic scenery.",
// //     image: "/image/home_bg.avif",
// //     other: { name: "detail", link: "/detail1" },
// //   },
// //   {
// //     title: "Premium Villa",
// //     desc: "Luxury villa with private pool and lush garden.Luxury villa with private pool and lush garden.Luxury villa with private pool and lush garden.Luxury villa with private pool and lush garden.",
// //     image: "/image/home_bg.avif",
// //     other: { name: "detail", link: "/detail1" },
// //   },
// //   {
// //     title: "Mountain Cabin",
// //     desc: "Cozy wooden cabin surrounded byooden cabin surrounded by mountain viewsCozy wooden cabin surrounded by mountain viewsCozy wooden cabin surrounded by mountain views.",
// //     image: "/image/home_bg.avif",
// //     other: { name: "View More", link: "/detail1" },
// //   },
// //   {
// //     title: "Executive Room",
// //     desc: "Elegant suite with king bed and lounge area. Elegant suite with king bed and lounge area.Elegant suite with king bed and lounge area.Elegant suite with king bed and lounge area. ",
// //     image: "/image/home_bg.avif",
// //     other: { name: "detail", link: "/detail1" },
// //   },
// //   {
// //     title: "Honeymoon Suite",
// //     desc: "Romantic stay with jacuzzi and panoramic scenery. Romantic stay with jacuzzi and panoramic scenery.Romantic stay with jacuzzi and panoramic scenery.Romantic stay with jacuzzi and panoramic scenery.",
// //     image: "/image/home_bg.avif",
// //     other: { name: "explore", link: "/detail snap" },
// //   },
// // ];

// // export default function AccomodationMobileSnap() {
// //   const [activeIndex, setActiveIndex] = useState(0);

// //   return (
// //     <section className="block lg:hidden px-4 py-10">
// //       <h2 className="text-center font-helveticaNeue text-xl tracking-widest uppercase mb-8 text-black">
// //         Accommodation
// //       </h2>

// //       {/* Swiper wrapper – only for loop & active index */}
// //       <Swiper
// //         modules={[Autoplay]}
// //         loop={true}
// //         centeredSlides={true}
// //         slidesPerView="auto"          // ← lets each slide keep its own width
// //         spaceBetween={16}             // ← your original gap‑4 (16px)
// //         autoplay={{ delay: 4000, disableOnInteraction: false }}
// //         onSlideChange={(s) => setActiveIndex(s.realIndex)}
// //         className="overflow-visible h-120 "
// //       >
// //         {accommodations.map((item, idx) => {
// //           const isActive = idx === activeIndex;

// //           return (
// //             <SwiperSlide
// //               key={idx}
// //               // Swiper will apply `width: auto` automatically because of slidesPerView="auto"
// //               className="w-auto! h-full"
// //             >
// //               <div
// //                 className={`transition-all duration-700 ease-in-out border ${
// //                   isActive ? "w-75 h-115 shadow-md border-white" : "w-60 h-95 mt-10 opacity-90  border-gray-300"
// //                 }`}
// //               >
// //                 <div className="relative bg-white  overflow-hidden h-full flex flex-col">
// //                   {/* Image */}
// //                   <div
// //                     className={`relative w-full transition-all duration-700 ease-in-out ${
// //                       isActive ? "h-[40%]" : "h-[90%]"
// //                     }`}
// //                   >
// //                     <Image
// //                       src={item.image}
// //                       alt={item.title}
// //                       fill
// //                       className="object-cover"
// //                     />
// //                     <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
// //                   </div>

// //                   {/* Title + Description (only on active) */}
// //                   <div className="flex-1 p-5 flex flex-col justify-between text-center">
// //                     <h3 className="font-helveticaNeue text-lg tracking-widest uppercase text-black">
// //                       {item.title}
// //                     </h3>

// //                     {/* Description slides up only for the centered card */}
// //                     <div
// //                       className={`absolute top-full left-0 w-full transition-all duration-900 ease-in-out ${
// //                         isActive ? "-translate-y-[110%]" : "translate-y-0"
// //                       }`}
// //                     >
// //                       <div className="w-10 h-0.5 bg-black mx-auto" />
// //                       <p className="text-black text-xs w-65 mx-auto md:text-sm font-garamondlight py-5">
// //                         {item.desc}
// //                       </p>
// //                       {item.other && (
// //                         <ButtonThree width="150px" text={item.other.name} />
// //                       )}
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </SwiperSlide>
// //           );
// //         })}
// //       </Swiper>

// //       {/* Dots – manual because we removed pagination */}
// //       <div className="flex justify-center gap-2 mt-6">
// //         {accommodations.map((_, i) => (
// //           <div
// //             key={i}
// //             className={`transition-all duration-500 rounded-full ${
// //               i === activeIndex ? "bg-black w-8 h-2" : "bg-gray-400 w-2 h-2"
// //             }`}
// //           />
// //         ))}
// //       </div>

// //       <style jsx>{`
// //         @keyframes fade-in {
// //           from {
// //             opacity: 0;
// //             transform: translateY(10px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }
// //         .animate-in {
// //           animation: fade-in 0.5s ease-out forwards;
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }



"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import ButtonThree from "../ButtonThree/ButtonThree";
const accommodations = [
  { title: "Deluxe Suite", desc: "Spacious room with private balcony and ocean view...Spacious room with private balcony and ocean view...Spacious room with private balcony and ocean view...", image: "/image/home_bg.avif", other: { name: "detail", link: "/detail1" } },
  { title: "Premium Villa", desc: "Luxury villa with private pool and lush garden...Spacious room with private balcony and ocean view...Spacious room with private balcony and ocean view...", image: "/image/home_bg.avif", other: { name: "detail", link: "/detail1" } },
  { title: "Mountain Cabin", desc: "Cozy wooden cabin surrounded by mountain views...Spacious room with private balcony and ocean view...Spacious room with private balcony and ocean view...", image: "/image/home_bg.avif", other: { name: "View More", link: "/detail1" } },
  { title: "Executive Room", desc: "Elegant suite with king bed and lounge area...Spacious room with private balcony and ocean view...Spacious room with private balcony and ocean view...", image: "/image/home_bg.avif", other: { name: "detail", link: "/detail1" } },
  { title: "Honeymoon Suite", desc: "Romantic stay with jacuzzi and panoramic scenery...Spacious room with private balcony and ocean view...Spacious room with private balcony and ocean view...", image: "/image/home_bg.avif", other: { name: "explore", link: "/detail1" } },
];
export default function AccomodationMobileSnap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  // --- Infinite loop: duplicate 3x ---
  const loopedData = [...accommodations, ...accommodations, ...accommodations];
  const middleStart = accommodations.length;
  // Scroll to middle copy on mount
  useEffect(() => {
    const container = trackRef.current;
    if (!container) return;
    const middleChild = container.children[middleStart] as HTMLDivElement;
    if (middleChild) container.scrollTo({ left: middleChild.offsetLeft, behavior: "instant" as any });
  }, []);
  useEffect(() => {
    const container = trackRef.current;
    if (!container) return;
    let scrollTimeout: NodeJS.Timeout;
    let isJumping = false;
    const handleScroll = () => {
      if (isJumping) return;
      const children = Array.from(container.children) as HTMLDivElement[];
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.offsetWidth;
      const center = scrollLeft + containerWidth / 2;
      // Find closest child to center
      let closestIndex = 0;
      let closestDistance = Infinity;
      children.forEach((child, idx) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const dist = Math.abs(center - childCenter);
        if (dist < closestDistance) {
          closestDistance = dist;
          closestIndex = idx;
        }
      });
      // Active index modulo original array
      setActiveIndex(closestIndex % accommodations.length);
      // Reset scroll only if scroll reaches clones
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const firstMiddle = middleStart;
        const lastMiddle = middleStart + accommodations.length - 1;
        
        if (closestIndex < firstMiddle) {
          // reached left clone → jump to equivalent position in middle section
          isJumping = true;
          const relativeIndex = closestIndex % accommodations.length;
          const targetIndex = middleStart + relativeIndex;
          const target = children[targetIndex] as HTMLDivElement;
          if (target) {
            const targetScrollLeft = target.offsetLeft - (containerWidth - target.offsetWidth) / 2;
            container.scrollTo({ left: targetScrollLeft, behavior: "instant" as any });
            setTimeout(() => { isJumping = false; }, 150);
          }
        } else if (closestIndex > lastMiddle) {
          // reached right clone → jump to equivalent position in middle section
          isJumping = true;
          const relativeIndex = closestIndex % accommodations.length;
          const targetIndex = middleStart + relativeIndex;
          const target = children[targetIndex] as HTMLDivElement;
          if (target) {
            const targetScrollLeft = target.offsetLeft - (containerWidth - target.offsetWidth) / 2;
            container.scrollTo({ left: targetScrollLeft, behavior: "instant" as any });
            setTimeout(() => { isJumping = false; }, 150);
          }
        }
      }, 150);
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      container.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);
  return (
    <section className="block lg:hidden px-4 py-10">
      <h2 className="text-center font-helveticaNeue text-xl tracking-widest uppercase mb-8 text-black">Accommodation</h2>
      <div
        ref={trackRef}
        className="flex overflow-x-auto items-center gap-4 scroll-smooth snap-x snap-mandatory h-120 no-scrollbar"
        style={{ scrollBehavior: "smooth" }}
      >
        {loopedData.map((item, i) => {
          const isActive = i % accommodations.length === activeIndex;
          return (
            <div key={i} className={`snap-center shrink-0 transition-all duration-700 border ease-in-out ${isActive ? "w-75 h-115 shadow-md border-white" : "w-75 h-99 border-gray-300 opacity-90"}`}>
              <div className="relative bg-white overflow-hidden h-full flex flex-col transition-all duration-700 ease-in-out">
                <div className={`relative w-full transition-all duration-700 ease-in-out ${isActive ? "h-[40%]" : "h-[90%]"}`}>
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="flex-1 p-5 flex flex-col justify-between text-center transition-all duration-700 ease-in-out">
                  <h3 className="font-helveticaNeue text-lg tracking-widest uppercase text-black">{item.title}</h3>
                  <div className={`absolute top-full left-0 w-full transition-all duration-900 ease-in-out ${isActive ? "-translate-y-[110%]" : "translate-y-0"}`}>
                    <div className="w-10 h-0.5 bg-black mx-auto"></div>
                    <p className="text-black text-xs w-65 mx-auto md:text-sm font-garamondlight py-5">{item.desc}</p>
                    {item.other && <ButtonThree width="150px" height="40px" text={item.other.name} />}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {accommodations.map((_, i) => (
          <div key={i} className={`transition-all duration-500 ease-in-out rounded-full ${i === activeIndex ? "bg-black w-8 h-2" : "bg-gray-400 w-2 h-2"}`} />
        ))}
      </div>
    </section>
  );
}