// import React from "react";
// import Image from "next/image"; // or use <img> if you're not using Next.js

// const LaMamouniaSustainableGoals = () => {
//   // Official 17 UN Sustainable Development Goals with colors + icons
//   const sdgs = [
//     { id: 1, title: "No Poverty", color: "#e3243c", icon: "/sustainable/Asset 2.svg", active: false },
//     { id: 2, title: "Zero Hunger", color: "#dda63a", icon: "/sustainable/Asset 3.svg", active: false },
//     { id: 3, title: "Good Health and Well-being", color: "#4c9f38", icon: "/sustainable/Asset 4.svg", active: false },
//     { id: 4, title: "Quality Education", color: "#c5192d", icon: "/sustainable/Asset 5.svg", active: false },
//     { id: 5, title: "Gender Equality", color: "#ff3a21", icon: "/sustainable/Asset 6.svg", active: true },
//     { id: 6, title: "Clean Water and Sanitation", color: "#26bde2", icon: "/sustainable/Asset 7.svg", active: false },
//     { id: 7, title: "Affordable and Clean Energy", color: "#fcc30b", icon: "/sustainable/Asset 8.svg", active: false },
//     { id: 8, title: "Decent Work and Economic Growth", color: "#a21942", icon: "/sustainable/Asset 9.svg", active: true },
//     { id: 9, title: "Industry, Innovation and Infrastructure", color: "#fd6925", icon: "/sustainable/Asset 10.svg", active: false },
//     { id: 10, title: "Reduced Inequalities", color: "#dd1367", icon: "/sustainable/Asset 11.svg", active: true },
//     { id: 11, title: "Sustainable Cities and Communities", color: "#fd9d24", icon: "/sustainable/Asset 12.svg", active: true },
//     { id: 12, title: "Responsible Consumption and Production", color: "#bf8b2e", icon: "/sustainable/Asset 13.svg", active: true },
//     { id: 13, title: "Climate Action", color: "#3f7e44", icon: "/sustainable/Asset 14.svg", active: true },
//     { id: 14, title: "Life Below Water", color: "#0a97d9", icon: "/sustainable/Asset 15.svg", active: false },
//     { id: 15, title: "Life on Land", color: "#56c02b", icon: "/sustainable/Asset 16.svg", active: false },
//     { id: 16, title: "Peace, Justice and Strong Institutions", color: "#00689d", icon: "/sustainable/Asset 17.svg", active: false },
//     { id: 17, title: "Partnerships for the Goals", color: "#19486a", icon: "/sustainable/Asset 18.svg", active: true },
//   ];

//   const dimClass = (active: boolean) =>
//     active
//       ? "opacity-100 shadow-lg"
//       : "opacity-40 grayscale-[60%]";

//   return (
//     <section className="py-16 lg:py-24 px-6 lg:px-10 bg-stone-50 min-h-screen">
//       <div className="mx-auto max-w-7xl">
//         <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-6 items-start">
//           {/* Title */}
//           <div className="col-span-3 row-span-2 h-full flex flex-col justify-between  w-full overflow-hidden">
//             <h1 className="text-4xl md:text-5xl lg:text-4xl font-garamondlight text-left ml-4 uppercase">
//               Tourism in advancinig <span className="font-helveticaNeue block text-2xl">the sdg Agenda</span>
//             </h1>
//             <h1 className="text-4xl md:text-6xl font-light font-helveticaNeue text-right mr-4">
//               Sustainable Development Goals
//             </h1>
//             <div></div>
//           </div>

//           {/* Row 1 goals (0-3) */}
//           {sdgs.slice(0, 4).map((goal, idx) => (
//             <div
//               key={goal.id}
//               className={`
//                 ${dimClass(goal.active)}
//                 h-48 flex flex-col items-center justify-center text-white p-6
//                 hover:scale-105 transition-transform duration-300 cursor-pointer
//               `}
//               style={{ backgroundColor: goal.color }}
//             >
//               <Image
//                 src={goal.icon}
//                 alt={`SDG ${goal.id}`}
//                 width={64}
//                 height={64}
//                 className="mb-3"
//               />
//               <span className="text-4xl font-helveticaNeue">{goal.id}</span>
//               <span className="text-sm md:text-base text-center mt-2 leading-tight font-garamondlight">
//                 {goal.title.split(" ")[0]} <br />
//                 {goal.title.split(" ").slice(1).join(" ")}
//               </span>
//             </div>
//           ))}

//           {/* Row 2 goals (4-8) */}
//           {sdgs.slice(4, 9).map((goal, idx) => (
//             <div
//               key={goal.id}
//               className={`
//                 ${dimClass(goal.active)}
//                 h-48 flex flex-col items-center justify-center text-white p-6
//                 hover:scale-105 transition-transform duration-300 cursor-pointer
//               `}
//               style={{ backgroundColor: goal.color }}
//             >
//               <Image
//                 src={goal.icon}
//                 alt={`SDG ${goal.id}`}
//                 width={44}
//                 height={64}
//                 className="mb-3"
//               />
//               <span className="text-4xl font-helveticaNeue">{goal.id}</span>
//               <span className="text-sm md:text-base text-center mt-2 leading-tight font-garamondlight">
//                 {goal.title.split(" ")[0]} <br />
//                 {goal.title.split(" ").slice(1).join(" ")}
//               </span>
//             </div>
//           ))}

//           {/* Row 3 goals (9-13) */}
//           {sdgs.slice(9, 14).map((goal, idx) => (
//             <div
//               key={goal.id}
//               className={`
//                 ${dimClass(goal.active)}
//                 h-48 flex flex-col items-center justify-center text-white p-6
//                 hover:scale-105 transition-transform duration-300 cursor-pointer
//               `}
//               style={{ backgroundColor: goal.color }}
//             >
//               <Image
//                 src={goal.icon}
//                 alt={`SDG ${goal.id}`}
//                 width={54}
//                 height={64}
//                 className="mb-3"
//               />
//               <span className="text-4xl font-helveticaNeue">{goal.id}</span>
//               <span className="text-sm md:text-base text-center mt-2 leading-tight font-garamondlight">
//                 {goal.title.split(" ")[0]} <br />
//                 {goal.title.split(" ").slice(1).join(" ")}
//               </span>
//             </div>
//           ))}

//           {/* Row 4 goals (14-16) */}
//           {sdgs.slice(14, 17).map((goal) => (
//             <div
//               key={goal.id}
//               className={`
//                 ${dimClass(goal.active)}
//                 h-48 flex flex-col items-center justify-center text-white p-6
//                 hover:scale-105 transition-transform duration-300 cursor-pointer
//               `}
//               style={{ backgroundColor: goal.color }}
//             >
//               <Image
//                 src={goal.icon}
//                 alt={`SDG ${goal.id}`}
//                 width={54}
//                 height={64}
//                 className="mb-3"
//               />
//               <span className="text-4xl font-helveticaNeue">{goal.id}</span>
//               <span className="text-sm md:text-base text-center mt-2 leading-tight font-garamondlight">
//                 {goal.title.split(" ")[0]} <br />
//                 {goal.title.split(" ").slice(1).join(" ")}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LaMamouniaSustainableGoals;

import React from "react";
import Image from "next/image"; // or use <img> if you're not using Next.js

const LaMamouniaSustainableGoals = () => {
  // Official 17 UN Sustainable Development Goals with colors + icons
  const sdgs = [
    {
      id: 1,
      title: "Employment Opportunity & Prverty Reduction",
      color: "#e3243c",
      icon: "/sustainable/Asset 2.svg",
      active: false,
    },
    {
      id: 2,
      title: "Zero Hunger",
      color: "#dda63a",
      icon: "/sustainable/Asset 3.svg",
      active: false,
    },
    {
      id: 3,
      title: "Good Health & Well-being",
      color: "#4c9f38",
      icon: "/sustainable/Asset 4.svg",
      active: false,
    },
    {
      id: 4,
      title: "Quality Education",
      color: "#c5192d",
      icon: "/sustainable/Asset 5.svg",
      active: false,
    },
    {
      id: 5,
      title: "Gender Equality",
      color: "#ff3a21",
      icon: "/sustainable/Asset 6.svg",
      active: true,
    },
    {
      id: 6,
      title: "Clean Water & Sanitation",
      color: "#26bde2",
      icon: "/sustainable/Asset 7.svg",
      active: false,
    },
    {
      id: 7,
      title: "Affordable & Clean Energy",
      color: "#fcc30b",
      icon: "/sustainable/Asset 8.svg",
      active: false,
    },
    {
      id: 8,
      title: "Social Inclusive & Sustainable Economic Growth",
      color: "#a21942",
      icon: "/sustainable/Asset 9.svg",
      active: true,
    },
    {
      id: 9,
      title: "Industry, Innovation and Infrastructure",
      color: "#fd6925",
      icon: "/sustainable/Asset 10.svg",
      active: false,
    },
    {
      id: 10,
      title: "Reduced Inequalities",
      color: "#dd1367",
      icon: "/sustainable/Asset 11.svg",
      active: true,
    },
    {
      id: 11,
      title: "Cultural Values, Diversity & Heritage",
      color: "#fd9d24",
      icon: "/sustainable/Asset 12.svg",
      active: true,
    },
    {
      id: 12,
      title: "Responsible Consumption and Production",
      color: "#bf8b2e",
      icon: "/sustainable/Asset 13.svg",
      active: true,
    },
    {
      id: 13,
      title: "Envirnmental Protection & Climate Change",
      color: "#3f7e44",
      icon: "/sustainable/Asset 14.svg",
      active: true,
    },
    {
      id: 14,
      title: "Life Below Water",
      color: "#0a97d9",
      icon: "/sustainable/Asset 15.svg",
      active: false,
    },
    {
      id: 15,
      title: "Animal Welfare",
      color: "#56c02b",
      icon: "/sustainable/Asset 16.svg",
      active: false,
    },
    {
      id: 16,
      title: "Mutial Understanding Peace & Security",
      color: "#00689d",
      icon: "/sustainable/Asset 17.svg",
      active: false,
    },
    {
      id: 17,
      title: "Partnerships for the Goals",
      color: "#19486a",
      icon: "/sustainable/Asset 18.svg",
      active: true,
    },
  ];

  const dimClass = (active: boolean) =>
    active ? "opacity-100 shadow-lg" : "opacity-20 grayscale-50";

  return (
    <section className="py-16 lg:py-24 px-6 lg:px-10 min-h-screen">
      <h1 className="text-4xl md:text-5xl lg:text-4xl font-garamondlight uppercase text-center py-6 mb-12">
        Tourism in advancinig{" "}
        <span className="font-helveticaNeue block text-2xl">
          the sdg Agenda
        </span>
      </h1>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1 lg:gap-6 items-start">
          {/* Title */}
          <div className="col-span-2 sm:col-span-3 row-span-2 h-full flex items-center w-full overflow-hidden">
            <h1 className="text-4xl md:text-6xl font-garamondlight md:leading-20 text-right mr-4 ">
              Sustainable Development&nbsp;Goals
            </h1>
            <div></div>
          </div>

          {/* Row 1 goals (0-3) */}
          {sdgs.slice(0, 4).map((goal, idx) => (
            <div
              key={idx}
              className={`
                ${dimClass(goal.active)}               
                h-40 flex flex-col items-center justify-between text-white px-4 py-3
                 hover:scale-105 transition-transform duration-300 cursor-pointer 
              `}
              style={{ backgroundColor: goal.color }}
            >
              <div className="flex gap-2 w-full items-center">
                <div className="text-5xl font-bold font-helveticaNeue text-left">
                  {goal.id}
                </div>
                <div className="text-base text-left leading-tight font-garamondlight">
                  {goal.title.split(" ").length === 2 ? (
                    <>
                      {goal.title.split(" ")[0]} <br />
                      {goal.title.split(" ")[1]}
                    </>
                  ) : (
                    goal.title
                  )}
                </div>
              </div>
              {goal.id == 1 ? (
                <Image
                  src={goal.icon}
                  alt={`SDG ${goal.id}`}
                  width={80}
                  height={44}
                  className=""
                />
              ) : (
                <Image
                  src={goal.icon}
                  alt={`SDG ${goal.id}`}
                  width={65}
                  height={44}
                  className=""
                />
              )}
            </div>
          ))}

          {/* Row 2 goals (4-8) */}
          {sdgs.slice(4, 9).map((goal, idx) => (
            <div
              key={idx}
              className={`
                ${dimClass(goal.active)}               
                h-40 flex flex-col items-center justify-between text-white px-2 py-3
                 hover:scale-105 transition-transform duration-300 cursor-pointer 
              `}
              style={{ backgroundColor: goal.color }}
            >
              <div className="flex gap-3 w-full items-center">
                <div className="text-5xl font-bold font-helveticaNeue text-left">
                  {goal.id}
                </div>
                <div className="text-base text-left leading-tight font-garamondlight">
                  {goal.title.split(" ").length === 2 ? (
                    <>
                      {goal.title.split(" ")[0]} <br />
                      {goal.title.split(" ")[1]}
                    </>
                  ) : (
                    goal.title
                  )}
                </div>
              </div>
              <Image
                src={goal.icon}
                alt={`SDG ${goal.id}`}
                width={40}
                height={44}
                className=""
              />
            </div>
          ))}

          {/* Row 3 goals (9-13) */}
          {sdgs.slice(9, 14).map((goal, idx) => (
            <div
              key={idx}
              className={`
                ${dimClass(goal.active)}               
                h-40 flex flex-col items-center justify-between text-white px-2 py-3
                 hover:scale-105 transition-transform duration-300 cursor-pointer 
              `}
              style={{ backgroundColor: goal.color }}
            >
              <div className="flex gap-2 w-full items-center">
                <div className="text-5xl font-bold font-helveticaNeue text-left">
                  {goal.id}
                </div>
                <div className="text-base text-left leading-tight font-garamondlight">
                  {goal.title.split(" ").length === 2 ? (
                    <>
                      {goal.title.split(" ")[0]} <br />
                      {goal.title.split(" ")[1]}
                    </>
                  ) : (
                    goal.title
                  )}
                </div>
              </div>
              <Image
                src={goal.icon}
                alt={`SDG ${goal.id}`}
                width={60}
                height={44}
                className=""
              />
            </div>
          ))}

          {/* Row 4 goals (14-16) */}
          {sdgs.slice(14, 17).map((goal, idx) => (
            <div
              key={idx}
              className={`
                ${dimClass(goal.active)}               
                h-40 flex flex-col items-center justify-between text-white px-2 py-3
                 hover:scale-105 transition-transform duration-300 cursor-pointer 
              `}
              style={{ backgroundColor: goal.color }}
            >
              <div className="flex gap-2 w-full items-center">
                <div className="text-5xl font-bold font-helveticaNeue text-left">
                  {goal.id}
                </div>
                <div className="text-base text-left leading-tight font-garamondlight">
                  {goal.title.split(" ").length === 2 ? (
                    <>
                      {goal.title.split(" ")[0]} <br />
                      {goal.title.split(" ")[1]}
                    </>
                  ) : (
                    goal.title
                  )}
                </div>
              </div>
              <Image
                src={goal.icon}
                alt={`SDG ${goal.id}`}
                width={50}
                height={44}
                className=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LaMamouniaSustainableGoals;
