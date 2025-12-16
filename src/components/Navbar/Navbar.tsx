// // "use client";

// // import { LOGO_WHITE } from "@/constants/imagePath";
// // import Image from "next/image";
// // import Link from "next/link";
// // import React, { useEffect, useState } from "react";
// // import { CiMenuFries } from "react-icons/ci";
// // import { IoChevronBack } from "react-icons/io5";
// // import { TfiClose } from "react-icons/tfi";
// // import { BsChevronRight } from "react-icons/bs";
// // import { usePathname } from "next/navigation";
// // import ButtonThree from "../ButtonThree/ButtonThree";

// // type SubItem = { title: string; link: string; image?: string };

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [activeMenu, setActiveMenu] = useState<string | null>(null);
// //   const [hoveredSub, setHoveredSub] = useState<SubItem | null>(null);

// //   const pathname = usePathname(); // current route

// //   const headings = [
// //     { name: "Our Hotels", link: "/hotels" },
// //     { name: "The Experience", link: "/experience" },
// //     { name: "Offers", link: "/offers" },
// //     { name: "Meetings & Celebrations", link: "/meetings" },
// //     { name: "Wellness", link: "/wellness" },
// //     { name: "About", link: "/about" },
// //     { name: "Perspectives", link: "/perspectives" },
// //     { name: "Sustainability", link: "/sustainability" },
// //   ];

// //   const subMenu: Record<string, SubItem[]> = {
// //     "Our Hotels": [
// //       {
// //         title: "All Regions",
// //         link: "/hotels",
// //         image: "/image/hotels/hotel1.webp",
// //       },
// //       {
// //         title: "Asia",
// //         link: "/hotels/asia",
// //         image: "/image/hotels/hotel2.jpg",
// //       },
// //       {
// //         title: "Europe",
// //         link: "/hotels/europe",
// //         image: "/image/hotels/hotel3.jpg",
// //       },
// //       {
// //         title: "Americas",
// //         link: "/hotels/americas",
// //         image: "/image/hotels/hotel4.jpg",
// //       },
// //     ],
// //     "The Experience": [
// //       {
// //         title: "Dining",
// //         link: "/experience/dining",
// //         image: "/images/experience/dining.webp",
// //       },
// //       {
// //         title: "Spa",
// //         link: "/experience/spa",
// //         image: "/images/experience/spa.webp",
// //       },
// //       {
// //         title: "Activities",
// //         link: "/experience/activities",
// //         image: "/images/experience/activities.webp",
// //       },
// //     ],
// //     Offers: [
// //       {
// //         title: "Exclusive Deals",
// //         link: "/offers/exclusive",
// //         image: "/images/offers/exclusive.webp",
// //       },
// //       {
// //         title: "Packages",
// //         link: "/offers/packages",
// //         image: "/images/offers/packages.webp",
// //       },
// //       {
// //         title: "Seasonal Offers",
// //         link: "/offers/seasonal",
// //         image: "/images/offers/seasonal.webp",
// //       },
// //     ],
// //   };

// //   // Disable scroll when sidenav is open
// //   useEffect(() => {
// //     document.body.style.overflow = isOpen ? "hidden" : "auto";
// //     return () => {
// //       document.body.style.overflow = "auto";
// //     };
// //   }, [isOpen]);

// //   const handleListClick = (item: string) => {
// //     if (subMenu[item]) {
// //       setActiveMenu(item);
// //       setHoveredSub(null);
// //     } else {
// //       setIsOpen(false);
// //     }
// //   };

// //   const handleCollapse = () => {
// //     setActiveMenu(null);
// //     setHoveredSub(null);
// //   };

// //   return (
// //     <header className="sticky top-0 z-20 flex justify-between items-center w-full bg-white h-24 px-10">
// //       {/* === Left Menu Icon === */}
// //       <div
// //         className="flex items-center gap-x-3 cursor-pointer w-[150px]"
// //         onClick={() => {
// //           setIsOpen(true);
// //           setActiveMenu(null);
// //           setHoveredSub(null);
// //         }}
// //       >
// //         <CiMenuFries className="h-8 w-8" />
// //         <p className="font-helveticaNeu tracking-widest">Menu</p>
// //       </div>

// //       {/* === Logo === */}
// //       <div className="relative h-full w-[150px]">
// //         <Image
// //           src={LOGO_WHITE}
// //           alt="LOGO"
// //           fill
// //           className="invert object-contain p-2"
// //         />
// //       </div>

// //       {/* === Contact Button === */}
// //       <div>
// //         <ButtonThree text="Contact" width="150px" />
// //       </div>

// //       {/* === Sliding Menu Panel === */}
// //       <div
// //         className={`fixed top-0 left-0 h-full bg-white text-black transition-all duration-500 ease-in-out z-30 shadow-xl overflow-hidden flex ${
// //           isOpen ? "opacity-100 visible" : "opacity-0 invisible"
// //         }`}
// //         style={{
// //           width: isOpen
// //             ? hoveredSub
// //               ? "100vw"
// //               : activeMenu
// //               ? "800px"
// //               : "400px"
// //             : "0",
// //         }}
// //       >
// //         {/* === Primary Menu === */}
// //         <div className="w-[400px] border-r border-gray-200 px-10 py-8 flex flex-col">
// //           <div className="flex items-center mb-8">
// //             <button
// //               onClick={() => setIsOpen(false)}
// //               className="text-3xl text-gray-600 hover:text-black cursor-pointer"
// //             >
// //               <TfiClose />
// //             </button>
// //           </div>

// //           <ul className="space-y-5 text-md font-garamondlight uppercase">
// //             {headings.map((item) => {
// //               const hasSubmenu = !!subMenu[item.name];
// //               const isActive = pathname.startsWith(item.link);
// //               const isExpanded = activeMenu === item.name;

// //               return (
// //                 <li
// //                   key={item.name}
// //                   className={`cursor-pointer flex justify-between items-center group ${
// //                     isActive || isExpanded
// //                       ? "text-black font-semibold"
// //                       : "text-gray-700 hover:text-black"
// //                   }`}
// //                 >
// //                   {hasSubmenu ? (
// //                     <button
// //                       onClick={() => handleListClick(item.name)}
// //                       className={`text-left w-full relative flex items-center justify-between
// //               after:absolute after:left-0 after:bottom-0 after:h-[0.5px]
// //               after:bg-black after:transition-all after:duration-300
// //               ${
// //                 isExpanded
// //                   ? "after:w-1/2" // half underline for expanded submenu
// //                   : isActive
// //                   ? "after:w-full" // full underline for active route
// //                   : "after:w-0 group-hover:after:w-full"
// //               }`}
// //                     >
// //                       <span className="relative pb-1 uppercase">
// //                         {item.name}
// //                       </span>
// //                       <BsChevronRight className="ml-2 text-black text-sm" />
// //                     </button>
// //                   ) : (
// //                     <Link
// //                       href={item.link}
// //                       onClick={() => setIsOpen(false)}
// //                       className="w-full relative pb-1 block"
// //                     >
// //                       <span
// //                         className={`${
// //                           isActive
// //                             ? "text-black font-semibold"
// //                             : "text-gray-700 hover:text-black"
// //                         }`}
// //                       >
// //                         {item.name}
// //                       </span>
// //                       <span
// //                         className={`absolute left-0 bottom-0 h-[0.5px] bg-black transition-all duration-300 ${
// //                           isActive ? "w-full" : "w-0 group-hover:w-full"
// //                         }`}
// //                       ></span>
// //                     </Link>
// //                   )}
// //                 </li>
// //               );
// //             })}
// //           </ul>
// //         </div>

// //         {/* === Secondary Menu === */}
// //         {activeMenu && (
// //           <div className="w-[400px] p-10 pt-24 border-r border-gray-200">
// //             <div className="flex items-center justify-end mb-6">
// //               <button
// //                 onClick={handleCollapse}
// //                 className="flex items-center text-gray-600 hover:text-black text-sm transition-all cursor-pointer "
// //               >
// //                 <IoChevronBack className="" />
// //                 Back
// //               </button>
// //             </div>

// //             <h3 className="text-black py-2 font-helveticaNeue text-md tracking-widest uppercase">
// //               {activeMenu}
// //             </h3>

// //             <ul className="text-md font-garamondlight uppercase">
// //               {(subMenu[activeMenu] || []).map((sub, index) => {
// //                 const isActive = pathname === sub.link;
// //                 return (
// //                   <li key={index}>
// //                     <Link
// //                       href={sub.link}
// //                       className={`block py-2 transition-colors relative ${
// //                         isActive
// //                           ? "text-black font-semibold"
// //                           : "hover:text-gray-700"
// //                       }`}
// //                       onMouseEnter={() => setHoveredSub(sub)}
// //                       onMouseLeave={() => setHoveredSub(null)}
// //                       onClick={() => setIsOpen(false)}
// //                     >
// //                       {sub.title}
// //                       <span
// //                         className={`absolute left-0 bottom-0 h-h-[0.5px] bg-black transition-all duration-300 ${
// //                           isActive ? "w-full" : "w-0 hover:w-full"
// //                         }`}
// //                       ></span>
// //                     </Link>
// //                   </li>
// //                 );
// //               })}
// //             </ul>
// //           </div>
// //         )}

// //         {/* === Third Panel (Image Preview, fills remaining width) === */}
// //         {hoveredSub && (
// //           <div className="relative flex-1 overflow-hidden">
// //             <Image
// //               src={hoveredSub.image || "/images/placeholder.jpg"}
// //               alt={hoveredSub.title}
// //               fill
// //               className="object-cover transition-transform duration-700 scale-105 hover:scale-100"
// //             />
// //             <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-6 text-white">
// //               <h4 className="text-xl font-semibold">{hoveredSub.title}</h4>
// //             </div>
// //           </div>
// //         )}
// //       </div>

// //       {/* === Overlay === */}
// //       {isOpen && (
// //         <div
// //           className="fixed inset-0 bg-black/40 backdrop-blur-sm z-20"
// //           onClick={() => setIsOpen(false)}
// //         />
// //       )}
// //     </header>
// //   );
// // };

// // export default Navbar;

// "use client";

// import { LOGO_WHITE } from "@/constants/imagePath";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import ButtonThree from "../ButtonThree/ButtonThree";
// import { Menu } from "@/icons";

// type SubItem = { title: string; link: string; image?: string };

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState<string | null>(null);
//   const [hoveredSub, setHoveredSub] = useState<SubItem | null>(null);
//   const pathname = usePathname();

//   const headings = [
//     { name: "Our Hotels", link: "/hotels" },
//     { name: "The Experience", link: "/experience" },
//     { name: "Offers", link: "/offers" },
//     { name: "Meetings & Celebrations", link: "/meetings" },
//     { name: "Wellness", link: "/wellness" },
//     { name: "About", link: "/about" },
//     { name: "Perspectives", link: "/perspectives" },
//     { name: "Sustainability", link: "/sustainability" },
//   ];

//   const subMenu: Record<string, SubItem[]> = {
//     "Our Hotels": [
//       { title: "All Regions", link: "/hotels", image: "/image/hotels/hotel1.webp" },
//       { title: "Asia", link: "/hotels/asia", image: "/image/hotels/hotel2.jpg" },
//       { title: "Europe", link: "/hotels/europe", image: "/image/hotels/hotel3.jpg" },
//       { title: "Americas", link: "/hotels/americas", image: "/image/hotels/hotel4.jpg" },
//     ],
//     "The Experience": [
//       { title: "Dining", link: "/experience/dining", image: "/images/experience/dining.webp" },
//       { title: "Spa", link: "/experience/spa", image: "/images/experience/spa.webp" },
//       { title: "Activities", link: "/experience/activities", image: "/images/experience/activities.webp" },
//     ],
//     Offers: [
//       { title: "Exclusive Deals", link: "/offers/exclusive", image: "/images/offers/exclusive.webp" },
//       { title: "Packages", link: "/offers/packages", image: "/images/offers/packages.webp" },
//       { title: "Seasonal Offers", link: "/offers/seasonal", image: "/images/offers/seasonal.webp" },
//     ],
//   };

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "auto";
//   }, [isOpen]);

//   const handleListClick = (item: string) => {
//     if (subMenu[item]) setActiveMenu(item);
//     else setIsOpen(false);
//   };

//   const handleCollapse = () => {
//     setActiveMenu(null);
//     setHoveredSub(null);
//   };

//   return (
//     <header className="sticky top-0 z-20 flex justify-between items-center w-full bg-white h-24 px-10">
//       {/* === Left Menu Icon === */}
//       <div
//         className="flex items-center gap-x-3 cursor-pointer w-[150px]"
//         onClick={() => {
//           setIsOpen(true);
//           setActiveMenu(null);
//           setHoveredSub(null);
//         }}
//       >
//         <Menu />
//         <p className="font-helveticaNeu tracking-widest">Menu</p>
//       </div>

//       {/* === Logo === */}
//       <div className="relative h-full w-[150px]">
//         <Image
//           src={LOGO_WHITE}
//           alt="LOGO"
//           fill
//           priority
//           sizes="150px"
//           className="invert object-contain p-2"
//         />
//       </div>

//       {/* === Contact Button === */}
//       <div>
//         <ButtonThree text="Contact" width="150px" />
//       </div>

//       {/* === Slide Menu === */}
//       <div
//         className={`fixed inset-0 bg-white z-40 transform transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } flex overflow-hidden`}
//       >
//         {/* === Left Primary Menu === */}
//         <div className="w-[400px] border-r border-gray-200 px-10 py-8 flex flex-col">
//           <div className="flex items-center mb-8">
//             <button
//               onClick={() => setIsOpen(false)}
//               aria-label="Close menu"
//               className="text-3xl text-gray-600 hover:text-black"
//             >
//               <Menu />
//             </button>
//           </div>

//           <ul className="space-y-5 text-md font-garamondlight uppercase">
//             {headings.map((item) => {
//               const hasSubmenu = !!subMenu[item.name];
//               const isActive = pathname.startsWith(item.link);
//               const isExpanded = activeMenu === item.name;

//               return (
//                 <li
//                   key={item.name}
//                   className={`cursor-pointer flex justify-between items-center ${
//                     isActive || isExpanded
//                       ? "text-black font-semibold"
//                       : "text-gray-700 hover:text-black"
//                   }`}
//                 >
//                   {hasSubmenu ? (
//                     <button
//                       onClick={() => handleListClick(item.name)}
//                       className="text-left w-full flex items-center justify-between group"
//                     >
//                       <span className="pb-1">{item.name}</span>
//                       {/* <BsChevronRight className="ml-2 text-black text-sm transition-transform group-hover:translate-x-1" /> */}
//                       <Menu />
//                     </button>
//                   ) : (
//                     <Link
//                       href={item.link}
//                       onClick={() => setIsOpen(false)}
//                       className="w-full block pb-1"
//                     >
//                       {item.name}
//                     </Link>
//                   )}
//                 </li>
//               );
//             })}
//           </ul>
//         </div>

//         {/* === Middle Submenu === */}
//         <div
//           className={`transition-transform duration-700 ease-in-out ${
//             activeMenu ? "translate-x-0" : "-translate-x-full"
//           } w-[400px] border-r border-gray-200 p-10 pt-24`}
//         >
//           {activeMenu && (
//             <>
//               <div className="flex items-center justify-end mb-6">
//                 <button
//                   onClick={handleCollapse}
//                   className="flex items-center text-gray-600 hover:text-black text-sm"
//                 >
//                   {/* <IoChevronBack /> */}
//                   Back
//                 </button>
//               </div>

//               <h3 className="text-black py-2 font-helveticaNeue text-md tracking-widest uppercase">
//                 {activeMenu}
//               </h3>

//               <ul className="text-md font-garamondlight uppercase">
//                 {(subMenu[activeMenu] || []).map((sub) => (
//                   <li key={sub.title}>
//                     <Link
//                       href={sub.link}
//                       onMouseEnter={() => setHoveredSub(sub)}
//                       onClick={() => setIsOpen(false)}
//                       className="block py-2 hover:text-black"
//                     >
//                       {sub.title}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </>
//           )}
//         </div>

//         {/* === Right Image Preview === */}
//         <div className="flex-1 relative hidden md:block overflow-hidden">
//           <div
//             className="absolute inset-0 transition-opacity duration-700"
//             style={{
//               opacity: hoveredSub ? 1 : 0,
//               willChange: "opacity, transform",
//             }}
//           >
//             {hoveredSub && (
//               <Image
//                 src={hoveredSub.image || "/images/placeholder.jpg"}
//                 alt={hoveredSub.title}
//                 fill
//                 loading="lazy"
//                 className="object-cover scale-105 hover:scale-100 transition-transform duration-700"
//               />
//             )}
//             {hoveredSub && (
//               <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-6 text-white">
//                 <h4 className="text-xl font-semibold">{hoveredSub.title}</h4>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* === Overlay (lighter for performance) === */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/30 z-30"
//           onClick={() => setIsOpen(false)}
//         />
//       )}
//     </header>
//   );
// };

// export default Navbar;




// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import ButtonThree from "../ButtonThree/ButtonThree";
// import { LeftArrow, RightArrow } from "@/icons";
// import Menu from "../Icons/Menu";
// import CrossIcon from "../Icons/CrossIcon";

// type SubItem = {
//   title: string;
//   link: string;
//   image?: string;
// };

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState<string | null>(null);
//   const [hoveredSub, setHoveredSub] = useState<SubItem | null>(null);
//   const pathname = usePathname();

//   const headings = [
//     { name: "Our Hotels", link: "/hotels" },
//     { name: "The Experience", link: "/experience" },
//     { name: "Offers", link: "/offers" },
//     { name: "Meetings & Celebrations", link: "/meetings" },
//     { name: "Wellness", link: "/wellness" },
//     { name: "About", link: "/about" },
//     { name: "Perspectives", link: "/perspectives" },
//     { name: "Sustainability", link: "/sustainability" },
//   ];

//   const subMenu: Record<string, SubItem[]> = {
//     "Our Hotels": [
//       {
//         title: "All Regions",
//         link: "/hotels",
//         image: "/image/hotels/hotel1.webp",
//       },
//       {
//         title: "Asia",
//         link: "/hotels/asia",
//         image: "/image/hotels/hotel2.jpg",
//       },
//       {
//         title: "Europe",
//         link: "/hotels/europe",
//         image: "/image/hotels/hotel3.jpg",
//       },
//       {
//         title: "Americas",
//         link: "/hotels/americas",
//         image: "/image/hotels/hotel4.jpg",
//       },
//     ],
//     "The Experience": [
//       {
//         title: "Dining",
//         link: "/experience/dining",
//         image: "/images/experience/dining.webp",
//       },
//       {
//         title: "Spa",
//         link: "/experience/spa",
//         image: "/images/experience/spa.webp",
//       },
//       {
//         title: "Activities",
//         link: "/experience/activities",
//         image: "/images/experience/activities.webp",
//       },
//     ],
//     Offers: [
//       {
//         title: "Exclusive Deals",
//         link: "/offers/exclusive",
//         image: "/images/offers/exclusive.webp",
//       },
//       {
//         title: "Packages",
//         link: "/offers/packages",
//         image: "/images/offers/packages.webp",
//       },
//       {
//         title: "Seasonal Offers",
//         link: "/offers/seasonal",
//         image: "/images/offers/seasonal.webp",
//       },
//     ],
//   };

//   // Disable body scroll when menu is open
//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "auto";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isOpen]);

//   const handleListClick = (item: string) => {
//     if (subMenu[item]) {
//       setActiveMenu(item);
//       setHoveredSub(null);
//     } else {
//       setIsOpen(false);
//     }
//   };

//   const handleCollapse = () => {
//     setActiveMenu(null);
//     setHoveredSub(null);
//   };

//   return (
//     <header className="fixed top-0 z-20 flex justify-between items-center w-full bg-white h-20 px-10 shadow-lg">
//       {/* Left Menu Icon */}
//       <div
//         className="flex items-center gap-x-5 group cursor-pointer w-[150px]"
//         onClick={() => {
//           setIsOpen(true);
//           setActiveMenu(null);
//           setHoveredSub(null);
//         }}
//       >
//         <Menu />
//         <p className="font-helveticaNeu tracking-widest text-black">Menu</p>
//       </div>

//       {/* Logo */}
//       {/* <div className="relative h-full w-[150px]">
//         <Image
//           src={LOGO_WHITE}
//           alt="LOGO"
//           fill
//           className="invert object-contain p-2"
//         />
//       </div> */}

//       {/* Contact Button */}
//       <div>
//         <ButtonThree text="Contact" width="150px" height="45px"/>
//       </div>

//       {/* Sliding Menu Panel */}
//       <div
//         className={`
//           fixed top-0 left-0 h-full bg-white text-black 
//           transition-all duration-500 ease-in-out z-30 shadow-xl 
//           overflow-hidden flex
//           ${isOpen ? "translate-x-0 " : "-translate-x-full "}
//         `}
//         style={{
//           width: isOpen
//             ? hoveredSub
//               ? "100vw"
//               : activeMenu
//               ? "800px"
//               : "400px"
//             : "400px",
//         }}
//       >
//         {/* Primary Menu */}
//         <div className="w-[400px] border-r border-gray-200 px-10 py-8 flex flex-col">
//           <div className="flex items-center mb-8">
//             <button
//               onClick={() => setIsOpen(false)}
//               className="text-3xl text-gray-600 hover:text-black cursor-pointer"
//             >
//               <CrossIcon />
//             </button>
//           </div>

//           <ul className="space-y-5 text-md font-garamondlight uppercase">
//             {headings.map((item) => {
//               const hasSubmenu = !!subMenu[item.name];
//               const isActive = pathname.startsWith(item.link);
//               const isExpanded = activeMenu === item.name;

//               return (
//                 <li
//                   key={item.name}
//                   className={`cursor-pointer flex justify-between items-center group ${
//                     isActive || isExpanded
//                       ? "text-black font-semibold"
//                       : "text-gray-700 hover:text-black"
//                   }`}
//                 >
//                   {hasSubmenu ? (
//                     <button
//                       onClick={() => handleListClick(item.name)}
//                       className={`text-left w-full relative flex items-center justify-between 
//               after:absolute after:left-0 after:bottom-0 after:h-[0.5px] 
//               after:bg-black after:transition-all after:duration-300
//               ${
//                 isExpanded
//                   ? "after:w-1/2" // half underline for expanded submenu
//                   : isActive
//                   ? "after:w-full" // full underline for active route
//                   : "after:w-0 group-hover:after:w-full"
//               }`}
//                     >
//                       <span className="relative pb-1 uppercase">
//                         {item.name}
//                       </span>
//                       <RightArrow className="h-5 w-5" />
//                       {/* kl */}
//                     </button>
//                   ) : (
//                     <Link
//                       href={item.link}
//                       onClick={() => setIsOpen(false)}
//                       className="w-full relative pb-1 block"
//                     >
//                       <span
//                         className={`${
//                           isActive
//                             ? "text-black font-semibold"
//                             : "text-gray-700 hover:text-black"
//                         }`}
//                       >
//                         {item.name}
//                       </span>
//                       <span
//                         className={`absolute left-0 bottom-0 h-[0.5px] bg-black transition-all duration-300 ${
//                           isActive ? "w-full" : "w-0 group-hover:w-full"
//                         }`}
//                       ></span>
//                     </Link>
//                   )}
//                 </li>
//               );
//             })}
//           </ul>
//         </div>

//         {/* Secondary Menu */}
//         {activeMenu && (
//           <div className="w-[400px] p-10 pt-24 border-r border-gray-200">
//             <div className="flex items-center justify-end mb-6">
//               <button
//                 onClick={handleCollapse}
//                 className="flex items-center text-gray-600 hover:text-black text-sm transition-all cursor-pointer"
//               >
//                 <LeftArrow className="h-5" />
//                 Back
//               </button>
//             </div>

//             <h3 className="text-black py-2 font-helveticaNeue text-md tracking-widest uppercase">
//               {activeMenu}
//             </h3>

//             <ul className="text-md font-garamondlight uppercase">
//               {(subMenu[activeMenu] || []).map((sub, index) => {
//                 const isActive = pathname === sub.link;

//                 return (
//                   <li key={index}>
//                     <Link
//                       href={sub.link}
//                       className={`
//                         block py-2 transition-colors relative
//                         ${
//                           isActive
//                             ? "text-black font-semibold"
//                             : "hover:text-gray-700"
//                         }
//                       `}
//                       onMouseEnter={() => setHoveredSub(sub)}
//                       onMouseLeave={() => setHoveredSub(null)}
//                       onClick={() => setIsOpen(false)}
//                     >
//                       {sub.title}
//                       <span
//                         className={`
//                           absolute left-0 bottom-0 h-[0.5px] bg-black 
//                           transition-all duration-300
//                           ${isActive ? "w-full" : "w-0 hover:w-full"}
//                         `}
//                       />
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         )}

//         {/* Third Panel: Image Preview */}
//         {hoveredSub && (
//           <div className="relative flex-1 overflow-hidden">
//             <Image
//               src={hoveredSub.image || "/images/placeholder.jpg"}
//               alt={hoveredSub.title}
//               fill
//               className="object-cover transition-transform duration-700 scale-105 hover:scale-100"
//             />
//             <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-6 text-white">
//               <h4 className="text-xl font-semibold">{hoveredSub.title}</h4>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/40 backdrop-blur-sm z-20"
//           onClick={() => setIsOpen(false)}
//         />
//       )}
//     </header>
//   );
// };

// export default Navbar;


"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import ButtonThree from "../ButtonThree/ButtonThree";
import { LeftArrow, RightArrow } from "@/icons";
import Menu from "../Icons/Menu";
import CrossIcon from "../Icons/CrossIcon";

type SubItem = {
  title: string;
  link: string;
  image?: string;
};

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hoveredSub, setHoveredSub] = useState<SubItem | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const headings = [
    { name: "Our Hotels", link: "/hotels" },
    { name: "The Experience", link: "/experience" },
    { name: "Offers", link: "/offers" },
    { name: "Meetings & Celebrations", link: "/meetings" },
    { name: "Hospitality", link: "/hospitality" },
    { name: "Tourism", link: "/tourism" },
    { name: "The Doorway Tech", link: "/thedoorwaytech" },
    { name: "Sustainability", link: "/sustainability" },
  ];

  const subMenu: Record<string, SubItem[]> = {
    "Our Hotels": [
      { title: "All Regions", link: "/hotels", image: "/image/hotels/hotel1.webp" },
      { title: "Asia", link: "/hotels/asia", image: "/image/hotels/hotel2.jpg" },
      { title: "Europe", link: "/hotels/europe", image: "/image/hotels/hotel3.jpg" },
      { title: "Americas", link: "/hotels/americas", image: "/image/hotels/hotel4.jpg" },
    ],
    "The Experience": [
      { title: "Dining", link: "/experience/dining", image: "/images/experience/dining.webp" },
      { title: "Spa", link: "/experience/spa", image: "/images/experience/spa.webp" },
      { title: "Activities", link: "/experience/activities", image: "/images/experience/activities.webp" },
    ],
    Offers: [
      { title: "Exclusive Deals", link: "/offers/exclusive", image: "/images/offers/exclusive.webp" },
      { title: "Packages", link: "/offers/packages", image: "/images/offers/packages.webp" },
      { title: "Seasonal Offers", link: "/offers/seasonal", image: "/images/offers/seasonal.webp" },
    ],
  };

  // Disable body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Track scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.05); // 20vh
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleListClick = (item: string) => {
    if (subMenu[item]) {
      setActiveMenu(item);
      setHoveredSub(null);
    } else {
      setIsOpen(false);
    }
  };

  const handleCollapse = () => {
    setActiveMenu(null);
    setHoveredSub(null);
  };

  return (
    <header
      className={`fixed top-0 z-20 flex justify-between items-center w-full h-20 px-10 transition-colors duration-300 ${
        scrolled || isOpen ? "bg-white shadow-lg " : "bg-transparent"
      }`}
    >
      {/* Left Menu Icon */}
      <div className="flex items-center gap-x-5">
      <div
        className="flex items-center gap-x-5 group cursor-pointer w-[150px]"
        onClick={() => {
          setIsOpen(true);
          setActiveMenu(null);
          setHoveredSub(null);
        }}
      >
        <Menu />
        <p className="font-helveticaNeu tracking-widest text-black">Menu</p>
      </div>
      <button onClick={() => router.push('/')} className="px-4 py-1 border font-garamondlight cursor-pointer hover:bg-gray-900 hover:text-white transition-all duration-500">
        Home
      </button>
      <button onClick={() => router.push('/tourism')} className="px-4 py-1 border font-garamondlight cursor-pointer hover:bg-gray-900 hover:text-white transition-all duration-500">
        Tourism
      </button>
      <button  onClick={() => router.push('/hospitality')} className="px-4 py-1 border font-garamondlight cursor-pointer hover:bg-gray-900 hover:text-white transition-all duration-500">
        Hospitality
      </button>
      <button  onClick={() => router.push('/sustainability')} className="px-4 py-1 border font-garamondlight cursor-pointer hover:bg-gray-900 hover:text-white transition-all duration-500">
        Sustainability
      </button>
      </div>

      {/* Contact Button */}
      <div onClick={() => router.push('/contact')}>
        <ButtonThree text="Contact" width="150px" height="45px" />
      </div>

      {/* Sliding Menu Panel */}
      <div
        className={`
          fixed top-0 left-0 h-full bg-white text-black 
          transition-all duration-500 ease-in-out z-30 shadow-xl 
          overflow-hidden flex
          ${isOpen ? "translate-x-0 " : "-translate-x-full "}
        `}
        style={{
          width: isOpen
            ? hoveredSub
              ? "100vw"
              : activeMenu
              ? "800px"
              : "400px"
            : "400px",
        }}
      >
         {/* Primary Menu */}
        <div className="w-[400px] border-r border-gray-200 px-10 py-8 flex flex-col">
          <div className="flex items-center mb-8">
            <button
              onClick={() => setIsOpen(false)}
              className="text-3xl text-gray-600 hover:text-black cursor-pointer"
            >
              <CrossIcon />
            </button>
          </div>

          <ul className="space-y-5 text-md font-garamondlight uppercase">
            {headings.map((item) => {
              const hasSubmenu = !!subMenu[item.name];
              const isActive = pathname.startsWith(item.link);
              const isExpanded = activeMenu === item.name;

              return (
                <li
                  key={item.name}
                  className={`cursor-pointer flex justify-between items-center group ${
                    isActive || isExpanded
                      ? "text-black font-semibold"
                      : "text-gray-700 hover:text-black"
                  }`}
                >
                  {hasSubmenu ? (
                    <button onClick={() => handleListClick(item.name)} className={`text-left w-full relative flex items-center justify-between 
              after:absolute after:left-0 after:bottom-0 after:h-[0.5px] 
              after:bg-black after:transition-all after:duration-300
              ${
                isExpanded
                  ? "after:w-1/2" 
                  : isActive
                  ? "after:w-full"
                  : "after:w-0 group-hover:after:w-full"
              }`}
                    >
                      <span className="relative pb-1 uppercase">
                        {item.name}
                      </span>
                      <RightArrow className="h-5 w-5" />
                      {/* kl */}
                    </button>
                  ) : (
                    <Link
                      href={item.link}
                      onClick={() => setIsOpen(false)}
                      className="w-full relative pb-1 block"
                    >
                      <span
                        className={`${
                          isActive
                            ? "text-black font-semibold"
                            : "text-gray-700 hover:text-black"
                        }`}
                      >
                        {item.name}
                      </span>
                      <span
                        className={`absolute left-0 bottom-0 h-[0.5px] bg-black transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Secondary Menu */}
        {activeMenu && (
          <div className="w-[400px] p-10 pt-24 border-r border-gray-200">
            <div className="flex items-center justify-end mb-6">
              <button
                onClick={handleCollapse}
                className="flex items-center text-gray-600 hover:text-black text-sm transition-all cursor-pointer"
              >
                <LeftArrow className="h-5" />
                Back
              </button>
            </div>

            <h3 className="text-black py-2 font-helveticaNeue text-md tracking-widest uppercase">
              {activeMenu}
            </h3>

            <ul className="text-md font-garamondlight uppercase">
              {(subMenu[activeMenu] || []).map((sub, index) => {
                const isActive = pathname === sub.link;

                return (
                  <li key={index}>
                    <Link
                      href={sub.link}
                      className={`
                        block py-2 transition-colors relative
                        ${
                          isActive
                            ? "text-black font-semibold"
                            : "hover:text-gray-700"
                        }
                      `}
                      onMouseEnter={() => setHoveredSub(sub)}
                      onMouseLeave={() => setHoveredSub(null)}
                      onClick={() => setIsOpen(false)}
                    >
                      {sub.title}
                      <span
                        className={`
                          absolute left-0 bottom-0 h-[0.5px] bg-black 
                          transition-all duration-300
                          ${isActive ? "w-full" : "w-0 hover:w-full"}
                        `}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* Third Panel: Image Preview */}
        {hoveredSub && (
          <div className="relative flex-1 overflow-hidden">
            <Image
              src={hoveredSub.image || "/images/placeholder.jpg"}
              alt={hoveredSub.title}
              fill
              className="object-cover transition-transform duration-700 scale-105 hover:scale-100"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-6 text-white">
              <h4 className="text-xl font-semibold">{hoveredSub.title}</h4>
            </div>
          </div>
        )}
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-20"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
