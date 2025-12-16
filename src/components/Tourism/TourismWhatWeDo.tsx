import Image from "next/image";
import React from "react";

const TourismWhatWeDo = () => {
  return (
    <section className="py-16 px-2 md:px-10 flex flex-col md:flex-row">
         
      <div className="md:w-[40%] h-64 relative">
        <h2
          className={`absolute top-16 left-44 text-black/80 font-garamondlight text-4xl md:text-5xl leading-12 md:leading-16 tracking-widest uppercase mb-6`}
        >
          Why <br/> Tourism?
        </h2>
        <Image
          src="/image/tourism/tree.png"
          alt="About01"
          width={800}
          height={900}
          className="-translate-x-20 md:translate-y-24"
        />
      </div>
      <div className="md:w-[60%] flex mt-8 md:mt-0">
      <div className="w-[50%] px-4 md:px-10">
        <p className="font-garamondlight tracking-wider text-sm [word-spacing:0.02rem] font-medium mb-4">
          In a world where success is often dictated by resources, only those
          with the means and prowess to self-promote are granted the opportunity
          to flourish. Whether it be Independent hotels, hidden destinations,
          novel concepts, and even individuals, prosperity is reserved for those
          who can afford the spotlight. The truth is, those with power and
          wealth don't just thrive but they command the narrative, dictating who
          gets seen and who remains in the shadows.
        </p>
        <p className="font-garamondlight tracking-wider text-sm [word-spacing:0.02rem] font-medium">
          In a world where success is often dictated by resources, only those
          with the means and prowess to self-promote are granted the opportunity
          to flourish. Whether it be Independent hotels, hidden destinations,
          novel concepts, and even individuals, prosperity is reserved for those
          who can afford the spotlight. The truth is, those with power and
          wealth don't just thrive but they command the narrative, dictating who
          gets seen and who remains in the shadows.
        </p>
      </div>
      <div className="w-[50%] px-4 md:px-10">
        <p className="font-garamondlight tracking-wider text-sm [word-spacing:0.02rem] font-medium mb-4">
          In a world where success is often dictated by resources, only those
          with the means and prowess to self-promote are granted the opportunity
          to flourish. Whether it be Independent hotels, hidden destinations,
          novel concepts, and even individuals, prosperity is reserved for those
          who can afford the spotlight. The truth is, those with power and
          wealth don't just thrive but they command the narrative, dictating who
          gets seen and who remains in the shadows.
        </p>
        <p className="font-garamondlight tracking-wider text-sm [word-spacing:0.02rem] font-medium">
          In a world where success is often dictated by resources, only those
          with the means and prowess to self-promote are granted the opportunity
          to flourish. Whether it be Independent hotels, hidden destinations,
          novel concepts, and even individuals, prosperity is reserved for those
          who can afford the spotlight.
        </p>
      </div>
      </div>
    </section>
  );
};

export default TourismWhatWeDo;


// import Image from "next/image";
// import React from "react";

// const TourismWhatWeDo = () => {
//   return (
//     <section className="py-16 px-1 md:px-10 lg:px-10 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         {/* Large Screen Layout - Hidden on <lg */}
//         <div className="hidden lg:flex relative min-h-[700px]">
//           {/* Left: Title + Tree Image */}
//           <div className="w-[40%] relative">
//             <h2 className="absolute top-16 left-44 text-black/80 font-garamondlight text-5xl leading-18 tracking-widest uppercase z-10">
//               Why <br /> Tourism?
//             </h2>
//             <Image
//               src="/image/tourism/tree.png"
//               alt="Why Tourism - Tree"
//               width={800}
//               height={900}
//               className="-translate-x-20 translate-y-24 object-contain"
//               priority
//             />
//           </div>

//           {/* Middle Column */}
//           <div className="w-[30%] px-10 flex flex-col justify-center space-y-8">
//             <p className="font-garamondlight tracking-wider text-sm [word-spacing:0.02rem] font-medium leading-relaxed">
//               In a world where success is often dictated by resources, only those with the means and prowess to self-promote are granted the opportunity to flourish. Whether it be Independent hotels, hidden destinations, novel concepts, and even individuals, prosperity is reserved for those who can afford the spotlight.
//             </p>
//             <p className="font-garamondlight tracking-wider text-sm [word-spacing:0.02rem] font-medium leading-relaxed">
//               The truth is, those with power and wealth don&apos;t just thrive but they command the narrative, dictating who gets seen and who remains in the shadows.
//             </p>
//           </div>

//           {/* Right Column */}
//           <div className="w-[30%] px-10 flex flex-col justify-center space-y-8">
//             <p className="font-garamondlight tracking-wider text-sm [word-spacing:0.02rem] font-medium leading-relaxed">
//               In a world where success is often dictated by resources, only those with the means and prowess to self-promote are granted the opportunity to flourish. Whether it be Independent hotels, hidden destinations, novel concepts, and even individuals, prosperity is reserved for those who can afford the spotlight.
//             </p>
//             <p className="font-garamondlight tracking-wider text-sm [word-spacing:0.02rem] font-medium leading-relaxed">
//               The truth is, those with power and wealth don&apos;t just thrive but they command the narrative, dictating who gets seen and who remains in the shadows.
//             </p>
//           </div>
//         </div>

//         {/* Mobile & Tablet Layout - Hidden on lg+ */}
//         <div className="block lg:hidden">
//           {/* Title + Image Stack */}
//           <div className="relative mb-12 text-center">
//             <h2 className="text-4xl md:text-5xl font-garamondlight text-black/80 tracking-widest uppercase mb-8">
//               Why <br /> Tourism?
//             </h2>
//             <div className="flex justify-center">
//               <Image
//                 src="/image/tourism/tree.png"
//                 alt="Why Tourism - Tree"
//                 width={500}
//                 height={600}
//                 className="object-contain max-w-full h-auto"
//                 priority
//               />
//             </div>
//           </div>

//           {/* Text Content - Single Column */}
//           <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto px-4">
//             <div className="space-y-6">
//               <p className="font-garamondlight tracking-wider text-sm md:text-base [word-spacing:0.02rem] font-medium leading-relaxed text-gray-800">
//                 In a world where success is often dictated by resources, only those with the means and prowess to self-promote are granted the opportunity to flourish. Whether it be Independent hotels, hidden destinations, novel concepts, and even individuals, prosperity is reserved for those who can afford the spotlight.
//               </p>
//               <p className="font-garamondlight tracking-wider text-sm md:text-base [word-spacing:0.02rem] font-medium leading-relaxed text-gray-800">
//                 The truth is, those with power and wealth don&apos;t just thrive but they command the narrative, dictating who gets seen and who remains in the shadows.
//               </p>
//             </div>

//             <div className="space-y-6">
//               <p className="font-garamondlight tracking-wider text-sm md:text-base [word-spacing:0.02rem] font-medium leading-relaxed text-gray-800">
//                 In a world where success is often dictated by resources, only those with the means and prowess to self-promote are granted the opportunity to flourish. Whether it be Independent hotels, hidden destinations, novel concepts, and even individuals, prosperity is reserved for those who can afford the spotlight.
//               </p>
//               <p className="font-garamondlight tracking-wider text-sm md:text-base [word-spacing:0.02rem] font-medium leading-relaxed text-gray-800">
//                 The truth is, those with power and wealth don&apos;t just thrive but they command the narrative, dictating who gets seen and who remains in the shadows.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TourismWhatWeDo;