"use client";

import { TECHNOLOGY, HOSPITALITY, TOURISM } from "@/constants/imagePath";
import { useRouter } from "next/navigation";
import React from "react";

const DoorwayOperatesData = [
  {
    id: 1,
    image: HOSPITALITY,
    title: "Hospitality",
    description: "Unites the world together for  a sustainable & connected future",
    link: "/hospitality"
  },
  {
    id: 2,
    image: TOURISM,
    title: "Tourism",
    description: "A responsibility for today and tomorrow",
    link: "/tourism"

  },
  {
    id: 3,
    image: TECHNOLOGY,
    title: "The Doorway Tech",
    description: "lorem lorem lorem lorem",
    link: "https://www.thedoorwaytechnology.com"

  },
];

const DoorwayOperates: React.FC = () => {

    const router = useRouter();
  return (
    <div id="showcase" className="py-10 px-2 sm:px-4 md:px-6 lg:px-10">
      <div className="relative z-10">
        <h2 className="font-helveticaNeue text-2xl text-center tracking-widest max-w-sm mx-auto uppercase mb-6">
          The doorway operates  within these division
        </h2>
        <div className="flex flex-wrap gap-2 justify-evenly">
          {DoorwayOperatesData.map((DoorwayOperates) => (
            <div
              key={DoorwayOperates.id}
              onClick={() => router.push(DoorwayOperates.link)}
              title={DoorwayOperates.link}
              className="group relative overflow-hidden shadow-lg transition-all duration-700 bg-white grow basis-full sm:basis-[40%] sm:hover:basis-[54%] md:basis-[20%] md:hover:basis-[40%] cursor-pointer h-52 sm:h-72 md:h-120 lg:h-150"
            >
              <img
                src={DoorwayOperates.image}
                alt={DoorwayOperates.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 hover:bg-black/10 transition-opacity duration-300 flex flex-col items-center justify-center">
                <h2 className="font-garamondlight text-white text-4xl md:text-5xl text-center tracking-wide uppercase mb-6">
                  {DoorwayOperates.title}
                </h2>
                <p className="font-helveticaNeue hidden group-hover:block text-white text-sm text-center tracking-widest uppercase mb-6">
                  {DoorwayOperates.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoorwayOperates;
