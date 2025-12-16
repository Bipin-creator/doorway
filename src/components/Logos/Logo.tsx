// 'use client';
// import { useEffect, useRef } from 'react';

// // Sample client logos (replace with your actual logo URLs)
// const clientLogos = [
//   { id: 1, name: 'Client 1', logo: '/image/tourism/tourism_logo1.png' },
//   { id: 2, name: 'Client 2', logo: '/image/tourism/tourism_logo2.png' },
//   { id: 3, name: 'Client 3', logo: '/image/tourism/tourism_logo3.png' },
//   { id: 4, name: 'Client 4', logo: '/image/tourism/tourism_logo4.png' },
//   { id: 5, name: 'Client 5', logo: '/image/tourism/tourism_logo5.png' },
//   { id: 6, name: 'Client 6', logo: '/image/tourism/tourism_logo6.png' },
// ];

// // Triple for seamless loop
// const tripleLogos = [...clientLogos, ...clientLogos, ...clientLogos];

// export default function Logo() {
//   const pathRef = useRef<SVGPathElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const path = pathRef.current;
//     const container = containerRef.current;
//     if (!path || !container) return;

//     const logos = container.querySelectorAll('.logo-item');
//     const pathLength = path.getTotalLength();
    
//     let animationId: number;
//     let offset = 0;

//     const animate = () => {
//       offset += 0.5; // Smoother speed
      
//       // Loop seamlessly without reset
//       if (offset > pathLength) {
//         offset = offset - pathLength;
//       }

//       logos.forEach((logo, index) => {
//         // Increased spacing for larger gaps between logos
//         const spacing = pathLength / (tripleLogos.length / 1.2);
//         let position = (offset + index * spacing) % pathLength;
        
//         const point = path.getPointAtLength(position);
//         const nextPoint = path.getPointAtLength((position + 1) % pathLength);
        
//         const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);
        
//         // Center the logo on the path by offsetting by half its size
//         const logoSize = 100; // Match the width/height in style
//         (logo as HTMLElement).style.transform = `translate(${point.x - logoSize}px, ${point.y - logoSize}px) rotate(${angle}deg)`;
//         (logo as HTMLElement).style.opacity = '1';
//       });

//       animationId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       cancelAnimationFrame(animationId);
//     };
//   }, []);

//   return (
//     <section className="bg-black/50 overflow-hidden">
//       <div className="w-full text-center">
//          {/* <h2 className="font-light text-black text-xl sm:text-xl md:text-3xl lg:text-4xl tracking-wide uppercase leading-tight">
//           Who Do We Work With?
//         </h2> */}

//         {/* Curved path container - wider to allow overflow */}
//         <div className="relative h-64 md:h-80 w-full min-w-[2400px]">
//           <svg
//             viewBox="0 0 2400 400"
//             className="absolute inset-0 w-full h-full"
//             preserveAspectRatio="none"
//           >
//             {/* Extended curve path that starts and ends off-screen */}
//             <path
//               ref={pathRef}
//               d="M -200 280 Q 300 120, 800 220 Q 1300 320, 1800 200 Q 2300 80, 2600 280"
//               fill="none"
//               stroke="rgba(200,200,200,0.5)"
//               strokeWidth="2"
//               strokeDasharray="10,5"
//             />
//           </svg>

//           {/* Logo elements */}
//           <div ref={containerRef} className="absolute inset-0">
//             {tripleLogos.map((client, index) => (
//               <div
//                 key={`${client.id}-${index}`}
//                 className="logo-item absolute transition-opacity duration-300"
//                 style={{
//                   width: '100px',
//                   height: '100px',
//                   transformOrigin: 'center center',
//                 }}
//               >
//                 <div className="w-full h-full bg-white rounded-full shadow-lg flex items-center justify-center p-5 hover:scale-110 transition-all duration-300 border-2 border-gray-200">
//                   <img
//                     src={client.logo}
//                     alt={client.name}
//                     className="w-full h-full object-contain invert"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>

//         {/* <p className="mt-12 text-lg text-gray-600 max-w-2xl mx-auto">
//           Trusted by leading companies worldwide
//         </p> */}
//       </div>
//     </section>
//   );
// }


'use client';
import { useEffect, useRef } from 'react';

// Sample client logos (replace with your actual logo URLs)
const clientLogos = [
  { id: 1, name: 'Client 1', logo: '/image/tourism/tourism_logo1.png' },
  { id: 2, name: 'Client 2', logo: '/image/tourism/tourism_logo2.png' },
  { id: 3, name: 'Client 3', logo: '/image/tourism/tourism_logo3.png' },
  { id: 4, name: 'Client 4', logo: '/image/tourism/tourism_logo4.png' },
  { id: 5, name: 'Client 5', logo: '/image/tourism/tourism_logo5.png' },
  { id: 6, name: 'Client 6', logo: '/image/tourism/tourism_logo6.png' },
];

// Triple for seamless loop
const tripleLogos = [...clientLogos, ...clientLogos, ...clientLogos];

export default function Logo() {
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const container = containerRef.current;
    if (!path || !container) return;

    const logos = container.querySelectorAll('.logo-item');
    const pathLength = path.getTotalLength();
    
    let animationId: number;
    let offset = 0;

    const animate = () => {
      offset += 0.5; // Smoother speed
      
      // Loop seamlessly without reset
      if (offset > pathLength) {
        offset = offset - pathLength;
      }

      logos.forEach((logo, index) => {
        // Increased spacing for larger gaps between logos
        const spacing = pathLength / (tripleLogos.length / 2);
        let position = (offset + index * spacing) % pathLength;
        
        const point = path.getPointAtLength(position);
        const nextPoint = path.getPointAtLength((position + 1) % pathLength);
        
        const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);
        
        // Center the logo on the path by offsetting by half its size
        const logoSize = 100; // Match the width/height in style
        (logo as HTMLElement).style.transform = `translate(${point.x - logoSize/2}px, ${point.y - logoSize/2}px) rotate(${angle}deg)`;
        (logo as HTMLElement).style.opacity = '1';
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="bg-linear-to-b from-transparent to-black/5 overflow-hidden">
      <div className="w-full flex justify-center">
        {/* Centered container with max-w-3xl */}
        <div className="max-w-3xl w-full">
         

          {/* Semi-circle path container */}
          <div className="relative h-64 md:h-80 w-full">
            <svg
              viewBox="0 0 800 400"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Top semi-circle path */}
                <path
                    ref={pathRef}
                    d="M 0 460 A 400 400 0 0 1 800 500"
                    fill="none"
                    stroke="rgba(200,200,200,0.5)"
                    strokeWidth="2"
                    strokeDasharray="10,5"
                />
            </svg>
 <h2 className=" absolute bottom-6 left-1/2 -translate-x-1/2 font-light text-black text-xl sm:text-xl md:text-3xl lg:text-4xl tracking-wide uppercase leading-tight text-center mb">
            Who Do We Work With?
          </h2>
            {/* Logo elements */}
            <div ref={containerRef} className="absolute inset-0">
              {tripleLogos.map((client, index) => (
                <div
                  key={`${client.id}-${index}`}
                  className="logo-item absolute transition-opacity duration-300"
                  style={{
                    width: '100px',
                    height: '100px',
                    transformOrigin: 'center center',
                  }}
                >
                  <div className="w-full h-full bg-white rounded-full shadow-lg  p-3 hover:scale-110 transition-all duration-300 border-2 border-gray-200">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-contain invert"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <p className="mt-12 text-lg text-gray-400 text-center">
            Trusted by leading companies worldwide
          </p> */}
        </div>
      </div>
    </section>
  );
}