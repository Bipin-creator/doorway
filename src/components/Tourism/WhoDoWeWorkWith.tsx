// import { TIGER } from "@/constants/imagePath";
// import Image from "next/image";
// import React from "react";

// const WhoDoWeWorkWith = () => {
//   return (
//     <section className="my-16 flex">
//       <div className="w-1/2">
//         <h2
//           className={`text-black text-center font-helveticaNeue text-2xl tracking-widest uppercase mb-6`}
//         >
//           Who Do We Work With ?
//         </h2>
//         <div>

//         </div>
//       </div>
//       <div className="w-1/2 relative h-[90vh] bg-[url('/image/tourism/tiger.png')] backdrop-blur-2xl">
//         <Image
//           src={TIGER}
//           alt="Relais & Châteaux - Culinary excellence in nature"
//           fill
//           priority
//           className="object-contain object-top py-10"
//         />
//       </div>
//     </section>
//   );
// };

// export default WhoDoWeWorkWith;


import { TIGER } from "@/constants/imagePath";
import React from "react";

// Import your icons (replace with your actual paths or use Heroicons/Lucide if you prefer)
import Menu from "../Icons/Menu";
import IconBodies from "@/icons/bodies.svg";
import IconEnterprises from "@/icons/enterprises.svg";
import IconHeritage from "@/icons/heritage.svg";
import IconLocal from "@/icons/local-communities.svg";
import IconRecreation from "@/icons/recreation.svg";
import IconTravel from "@/icons/travel.svg";
import Image from "next/image";

const partners = [
  { Icon: Menu, label: "Tourism Investors" },
  { Icon: Menu, label: "International Bodies & National Bodies" },
  { Icon: Menu, label: "Tourism Enterprises" },
  { Icon: Menu, label: "Heritage & Environmental Agencies" },
  { Icon: Menu, label: "Local Communities" },
  { Icon: Menu, label: "Recreation & Entertainment Industry" },
  { Icon: Menu, label: "Travel & Tourism Industry" },
];

const WhoDoWeWorkWith = () => {
  return (
    <section className="my-16 flex flex-col lg:flex-row min-h-screen">
      {/* LEFT SIDE - Text + Partners Grid */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 xl:px-24">
        <h2 className="text-black text-center lg:text-left font-helveticaNeue text-2xl lg:text-4xl tracking-widest uppercase mb-12">
          Who Do We Work With?
        </h2>

        {/* 7 Partners Grid - Responsive */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12 max-w-4xl mx-auto lg:mx-0">
          {partners.map(({ Icon, label }, index) => (
            <div
              key={index}
              className="flex flex-col items-center lg:items-start text-center lg:text-left group"
            >
              <div className="mb-4 w-20 h-20 flex items-center justify-center transition-transform group-hover:scale-110">
                <Icon/>
              </div>
              <p className="text-sm lg:text-base font-helveticaNeue text-gray-800 leading-snug max-w-[180px]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE - Blurred BG + Sharp Tiger */}
       <div className="w-1/2 relative h-[90vh] bg-[url('/image/tourism/tiger.png')] backdrop-blur-2xl">
        <Image
          src={TIGER}
          alt="Relais & Châteaux - Culinary excellence in nature"
          fill
          priority
          className="object-contain object-top py-10"
        />
      </div>
    </section>
  );
};

export default WhoDoWeWorkWith;