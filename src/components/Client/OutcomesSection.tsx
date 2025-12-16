import React from "react";

const outcomes = [
  {
    title: "Cost Savings",
    result: "Reduced monthly expense by 10 lakhs within the first three months, reaching savings of 17 lakhs per month by project completion.",
    highlight: "Rs. 17 lakhs/month saved",
    graph:"/un.svg",
  },
  {
    title: "Food Cost Control",
    result: "Achieved a stable food cost of 35–40% (from 55%).",
    highlight: "35–40% food cost",
    graph:"/un.svg",
  },
  {
    title: "Revenue Growth",
    result: "Increased Average Room Rate (ARR) by over ₹6,600. Boosted revenue through upselling strategies & new rates for corporate clients & walk-in guests.",
    highlight: "+Rs. 6,600 ARR increase",
    graph:"/un.svg",
  },
  {
    title: "Energy Efficiency",
    result: "Reduced electricity usage from 50,000 units to below 20,000 units monthly.",
    highlight: "60% reduction in units",
    graph:"/un.svg",
  },
];

const OutcomesSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      {/* Section Title */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-8 lg:mb-12">
        <h2 className="text-black font-helveticaNeue text-3xl tracking-widest uppercase mb-2">
          Outcomes
        </h2>
      </div>

      {/* Snap Scroll Container */}
      <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        {/* Slide 1 */}
        <div className="min-w-full snap-start flex justify-center px-6">
          <div className="max-w-7xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {outcomes.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-teal-50 to-emerald-50/30 
                           border border-teal-100/50 rounded-none p-10 lg:p-12 h-64
                           hover:border-teal-300 transition-all duration-500"
                >
                  {/* Top Highlight */}
                  <div className="mb-8">
                    <p className="text-teal-700 font-garamondlight text-2xl lg:text-3xl tracking-wide font-medium">
                      {item.highlight}
                    </p>
                  </div>

                  {/* Title */}
                  <h3 className="text-black font-helveticaNeue text-xl lg:text-2xl tracking-widest uppercase mb-6">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 font-garamondlight text-sm leading-relaxed">
                    {item.result}
                  </p>

                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-20 h-[1px] bg-teal-600"></div>
                  <div className="absolute top-0 left-0 w-[1px] h-20 bg-teal-600"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="min-w-full snap-start flex justify-center px-6">
          <div className="max-w-7xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {outcomes.map((item, index) => (
                <div
                  key={`slide2-${index}`}
                  className="group relative bg-gradient-to-br from-teal-50 to-emerald-50/30 
                           border border-teal-100/50 rounded-none p-10 lg:p-12 h-64
                           hover:border-teal-300 transition-all duration-500"
                >
                 <img src={item.graph} alt="" className="h-full w-full object-contain invert"/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default OutcomesSection;