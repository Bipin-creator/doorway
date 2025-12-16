"use client";
import { TOURISM_SERVE, TOURISM_WAY } from "@/constants/imagePath";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const milestones = [
  { id: 1, year: "2019", title: "Destination Management", desc: "A divine vision to guide souls to sacred peaks", pathPercent: 12 },
  { id: 2, year: "2020", title: "Sustainable Destination Development", desc: "Opening ancient Himalayan pilgrimage routes", pathPercent: 25 },
  { id: 3, year: "2021", title: "Tourism Advisory", desc: "Featured by National Geographic & UNESCO", pathPercent: 37 },
  { id: 4, year: "2023", title: "Climate Change & Tourism", desc: "One million hearts transformed", pathPercent: 64 },
  { id: 5, year: "2024", title: "Destination Strategy & Planning", desc: "Carbon-neutral & spiritually conscious travel", pathPercent: 82 },
  { id: 6, year: "2025", title: "Destination Brand Development & Marketing", desc: "The future of sacred journeys begins now", pathPercent: 95 },
];

export default function CenteredCustomPath3DRoad() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  }); 3

  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      {/* Sticky Container for Path */}
      <section
        ref={containerRef}
        className="relative h-[300vh]"
      >
        {/* Fixed/Sticky Canvas */}
        <div className="sticky top-0 h-screen w-full bg-linear-to-b from-black to-black overflow-hidden">
          {/* Subtle Mountain Background */}
          <div className="absolute inset-0 opacity-65">
            <img
              src={TOURISM_WAY}
              alt="Himalayas"
              className="w-full h-full object-cover"
            />
          </div>

          {/* === YOUR EXACT PATH === */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1094 912"
            preserveAspectRatio="xMidYMin meet"
          >
            <defs>
              <linearGradient id="blueRoad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#0ea5e9" stopOpacity="1" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.9" />
              </linearGradient>
              <filter id="roadGlow">
                <feGaussianBlur stdDeviation="8" result="blur"/>
                <feMerge>
                  <feMergeNode in="blur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="softGlow">
                <feGaussianBlur stdDeviation="15" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Unglowed Base Path - Always Visible */}
            <path
              d="M307.386 0.454376C156.053 69.9544 -222.982 287.26 180.886 216.454C691.386 126.954 876.43 197.119 673.886 319.954C410.886 479.454 -450.114 769.954 369.886 670.454C642.386 637.389 1157.99 633.454 1086.39 711.454"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="20"
              fill="none"
              strokeLinecap="round"
            />

            {/* Outer Glow Layer */}
            {/* <motion.path
              d="M307.386 0.454376C156.053 69.9544 -222.982 287.26 180.886 216.454C691.386 126.954 876.43 197.119 673.886 319.954C410.886 479.454 -450.114 769.954 369.886 670.454C642.386 637.389 1157.99 633.454 1086.39 711.454"
              stroke="rgba(14,165,233,0.15)"
              strokeWidth="60"
              fill="none"
              strokeLinecap="round"
              style={{ pathLength: progress }}
              filter="url(#roadGlow)"
            /> */}

            {/* Deep 3D Shadow */}
            {/* <motion.path
              d="M307.386 0.454376C156.053 69.9544 -222.982 287.26 180.886 216.454C691.386 126.954 876.43 197.119 673.886 319.954C410.886 479.454 -450.114 769.954 369.886 670.454C642.386 637.389 1157.99 633.454 1086.39 711.454"
              stroke="rgba(0,0,0,0.3)"
              strokeWidth="26"
              fill="none"
              strokeLinecap="round"
              style={{ pathLength: progress }}
            /> */}

            {/* Main Luxurious Road */}
            {/* <motion.path
              d="M307.386 0.454376C156.053 69.9544 -222.982 287.26 180.886 216.454C691.386 126.954 876.43 197.119 673.886 319.954C410.886 479.454 -450.114 769.954 369.886 670.454C642.386 637.389 1157.99 633.454 1086.39 711.454"
              stroke="url(#blueRoad)"
              strokeWidth="20"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              style={{ pathLength: progress }}
            /> */}

            {/* Inner Bright Highlight */}
            <motion.path
              d="M307.386 0.454376C156.053 69.9544 -222.982 287.26 180.886 216.454C691.386 126.954 876.43 197.119 673.886 319.954C410.886 479.454 -450.114 769.954 369.886 670.454C642.386 637.389 1157.99 633.454 1086.39 711.454"
              stroke="rgba(255,255,255,1)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              style={{ pathLength: progress }}
            />

            {/* Elegant Dashed Center Line */}
            {/* <motion.path
              d="M307.386 0.454376C156.053 69.9544 -222.982 287.26 180.886 216.454C691.386 126.954 876.43 197.119 673.886 319.954C410.886 479.454 -450.114 769.954 369.886 670.454C642.386 637.389 1157.99 633.454 1086.39 711.454"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="20 30"
              strokeLinecap="round"
              style={{ pathLength: progress }}
            /> */}
          </svg>

          {/* Glowing Comet Following Your Exact Path */}
          {/* <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-50"
            viewBox="0 0 1094 912"
            preserveAspectRatio="xMidYMin meet"
          >
            <motion.circle
              cx="0"
              cy="0"
              r="5"
              fill="white"
              filter="url(#softGlow)"
              style={{
                offsetPath: `path("M307.386 0.454376C156.053 69.9544 -222.982 287.26 180.886 216.454C691.386 126.954 876.43 197.119 673.886 319.954C410.886 479.454 -450.114 769.954 369.886 670.454C642.386 637.389 1157.99 633.454 1086.39 711.454")`,
                offsetDistance: useTransform(progress, [0, 1], ["0%", "100%"]),
              }}
            />
            <motion.circle
              cx="0"
              cy="0"
              r="8"
              fill="rgba(56,189,248,0.5)"
              filter="url(#softGlow)"
              style={{
                offsetPath: `path("M307.386 0.454376C156.053 69.9544 -222.982 287.26 180.886 216.454C691.386 126.954 876.43 197.119 673.886 319.954C410.886 479.454 -450.114 769.954 369.886 670.454C642.386 637.389 1157.99 633.454 1086.39 711.454")`,
                offsetDistance: useTransform(progress, [0, 1], ["0%", "100%"]),
              }}
            />
          </svg> */}

          {/* Milestone Cards - Positioned on Path */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1094 912"
            preserveAspectRatio="xMidYMin meet"
          >
           {milestones.map((item, i) => {
              const milestoneProgress = item.pathPercent / 100;
              const prevProgress = Math.max(0, milestoneProgress - 0.08);
              
              // Dramatic pop animation when progress reaches milestone
              const opacity = useTransform(
                progress,
                [prevProgress, milestoneProgress - 0.02, milestoneProgress, milestoneProgress + 0.3],
                [0, 0, 1, 0.85]
              );

              const scale = useTransform(
                progress,
                [prevProgress, milestoneProgress - 0.01, milestoneProgress, milestoneProgress + 0.02],
                [0.3, 0.3, 1.2, 1]
              );

              const y = useTransform(
                progress,
                [prevProgress, milestoneProgress],
                [50, 0]
              );
              
              const rotate = useTransform(
                progress,
                [prevProgress, milestoneProgress - 0.01, milestoneProgress],
                [-10, -5, 0]
              );

              return (
                <g key={i}>
                  <motion.foreignObject
                    width="400"
                    height="400"
                    x="-200"
                    y="0"
                    style={{
                      offsetPath: `path("M307.386 0.454376C156.053 69.9544 -222.982 287.26 180.886 216.454C691.386 126.954 876.43 197.119 673.886 319.954C410.886 479.454 -450.114 769.954 369.886 670.454C642.386 637.389 1157.99 633.454 1086.39 711.454")`,
                      offsetDistance: `${item.pathPercent}%`,
                      offsetRotate: "0deg",
                      opacity,
                    }}
                  >
                    <motion.div
                      className="relative w-full h-full"
                      style={{ scale, y }}
                    >
                      {/* Vertical Pole - starts from path point (top) */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 h-13 bg-white" />
                      
                      {/* Card - positioned below the pole */}
                      <div
                        className={`
                          absolute ${item.id <= 4 ? "top-12" : "top-12"} left-1/2 -translate-x-1/2
                          px-8 py-6 rounded-2xl bg-white/50
                          backdrop-blur-xl 
                          min-w-[280px] max-w-[320px]
                          pointer-events-auto
                        `}
                      >
                        {/* <div className="text-cyan-300 text-sm font-bold mb-1 tracking-widest uppercase">{item.year}</div> */}
                        <h3 className="text-black text-center font-garamondlight tracking-widest uppercase">{item.title}</h3>
                        {/* <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p> */}
                        
                        {/* Subtle Glow */}
                        <div className="absolute -inset-2 bg-cyan-500/10 rounded-2xl blur-xl -z-10" />
                      </div>
                    </motion.div>
                  </motion.foreignObject>
                </g>
              );
            })}
          </svg>

          {/* Hero Title */}
          <div className="absolute top-[55%] left-1/2 -translate-1/2 text-center z-10">
            <motion.h1
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="text-6xl md:text-7xl text-white text-center font-helveticaNeue tracking-widest uppercase"
              style={{
                textShadow: "0 0 100px rgba(14,165,233,0.9), 0 0 200px rgba(14,165,233,0.5)",
              }}
            >
              <span className="text-4xl md:text-5xl font-light">serving</span>  tourism&nbsp;sector
            </motion.h1>
            {/* <p className="text-2xl text-cyan-300 mt-6 font-light tracking-wider">
              Scroll to walk the journey
            </p> */}
          </div>

          {/* Progress Indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
            style={{ opacity: useTransform(scrollYProgress, [0.9, 1], [1, 0]) }}
          >
            <div className="text-white font-helveticaNeue tracking-widest text-sm mb-2">PROGRESS</div>
            <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-linear-to-r from-black/50 to-white"
                style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}