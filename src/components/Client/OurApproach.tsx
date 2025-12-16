import React from "react";

const transformations = [
  {
    title: "Engineering & Maintenance Improvements",
    description:
      "Improved electrical systems, plumbing, and energy efficiency. Refreshed facades, upgraded elevators & AC systems, and upgraded swimming pool area.",
    image: "/image/CaseStudy/engineer.jpg", // Replace with your actual images
  },
  {
    title: "Technology Integration",
    description:
      "Integrated smart room controls, high-speed Wi-Fi & digital ordering for a seamless, modern guest experience while reducing operational overhead.",
    image: "/image/CaseStudy/aihospitality.webp",
  },
  {
    title: "Enhanced Guest Experience",
    description:
      "Boosted Average Room Rate (ARR) through strategic pricing & elevated customer service. Introduced loyalty programs from corporates and walk-in guests.",
    image: "/image/CaseStudy/guestExperience.webp",
  },
  {
    title: "Brand Identity & Design",
    description:
      "Created a compelling brand story, modern logo, & refreshed visual identity to embody Diamond Palace’s essence.",
    image: "/image/CaseStudy/brandIdentity.png",
  },
  {
    title: "Operational Overhaul",
    description:
      "Streamlined daily operations and processes, introduced cost controls, & revamped menu pricing & ensured consistent quality to enhance food cost profitability.",
    image: "/image/CaseStudy/operation.jpg",
  },
  {
    title: "Room & Facility Design",
    description:
      "Redesigned rooms, upgraded interiors, & enhanced corridors & shared spaces. Launched new outlets – Rooftop Restaurant and Ruby Bar and Lounge.",
    image: "/image/CaseStudy/room.webp",
  },
];

const OurApproach = () => {
  return (
    <section className="py-16 overflow-hidden">
      {/* Intro */}
      <div className="mx-auto max-w-3xl px-6 text-center mb-20">
        <h2 className="text-black font-helveticaNeue text-3xl lg:text-4xl tracking-widest uppercase mb-8">
          Our Approach
        </h2>
        <p className="font-garamondlight tracking-wide text-sm text-black max-w-2xl mx-auto">
          We led the full-scale transformation with a 360° approach, creating everything from the hotel’s logo and color scheme to its theme and story, aligning every detail with a fresh brand identity. Operational restructuring, and hands-on project management. We handled everything.
        </p>
      </div>

      {/* Transformation Showcase */}
      <div className="relative">
        {transformations.map((item, index) => (
          <div
            key={index}
            className={`flex max-w-7xl h-120 mx-auto mb-16 last:mb-0`}
          >
            {/* Text Panel */}
            <div className="w-full lg:w-1/2 bg-gray-50 text-black p-12 lg:p-20 flex items-center relative overflow-hidden">
              

              <div className="relative z-10 max-w-lg">
                <h3 className="text-2xl lg:text-3xl font-light font-helveticaNeue tracking-widest mb-6">
                  {item.title}
                </h3>

                <p className="text-black text-sm font-garamondlight mb-10">
                  {item.description}
                </p>

               <div className="w-24 h-[0.5px] bg-black "></div>
              </div>
            </div>

            {/* Image Panel */}
            <div className="relative w-full lg:w-1/2 bg-gray-400">
              <img
                src={item.image || `https://source.unsplash.com/random/800x600?hotel,${index}`}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* Vertical Text on Edge */}
              <div className="absolute -right-4 top-0 h-full flex items-center">
                <p className="text-black text-sm font-garamondlight tracking-widest rotate-90 origin-right pr-6 font-medium whitespace-nowrap">
                  Transformation Highlights
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurApproach;