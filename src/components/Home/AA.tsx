import { HOME_QUOTE_BG } from "@/constants/imagePath";
import Image from "next/image";

const AA = () => {
  return (
    <section className="px-2 sm:px-4 md:px-6 lg:px-10 py-10 min-h-screen flex flex-col gap-16 items-center">
      <div className="flex flex-col md:flex-row w-full">
        {/* Left column */}
        <div className="md:w-[35%] w-full mb-8 md:mb-0 relative flex flex-col">
          {/* Top-aligned letters */}
          <div className="text-left flex flex-col items-center w-fit text-black font-garamondlight text-2xl md:text-3xl tracking-widest uppercase absolute left-10 top-10">
            {["S", "U", "S", "T", "A", "I", "N", "A", "B", "L", "E"].map((letter, idx) => (
              <span key={idx}>{letter}</span>
            ))}
          </div>
          <div className="text-left flex flex-col items-center w-fit text-black font-garamondlight text-2xl md:text-3xl tracking-widest uppercase absolute left-20 top-20">
            {["D", "E", "V", "E", "L", "O", "P", "M", "E", "N", "T"].map((letter, idx) => (
              <span key={idx}>{letter}</span>
            ))}
          </div>

          {/* Centered heading */}
          <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center font-helveticaNeue text-sm md:text-base tracking-widest ">
            The Doorway - Into Growth, We Sail Together.
          </h2>
        </div>

        {/* Right column */}
        <div className="md:w-[65%] w-full relative overflow-hidden h-150 sm:h-200 md:h-[90vh]">
          <Image
            src={HOME_QUOTE_BG}
            alt="Background quote section of Maui"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full">
        {/* Left column */}
        <div className="md:w-[35%] w-full mb-8 md:mb-0 relative flex flex-col">
          {/* Top-aligned letters */}
          <div className="text-left flex flex-col items-center w-fit text-black font-garamondlight text-2xl md:text-3xl tracking-widest uppercase absolute left-10 top-10">
            {["B", "I", "O", "D", "I", "V", "E", "R", "S", "I", "T", "y"].map((letter, idx) => (
              <span key={idx}>{letter}</span>
            ))}
          </div>

          {/* Centered heading */}
          <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center font-helveticaNeue text-sm md:text-base tracking-widest ">
            The Doorway - Into Growth, We Sail Together.
          </h2>
        </div>

        {/* Right column */}
        <div className="md:w-[65%] w-full relative overflow-hidden h-150 sm:h-200 md:h-[90vh]">
          <Image
            src={HOME_QUOTE_BG}
            alt="Background quote section of Maui"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full">
        {/* Left column */}
        <div className="md:w-[35%] w-full mb-8 md:mb-0 relative flex flex-col">
          {/* Top-aligned letters */}
          <div className="text-left flex flex-col items-center w-fit text-black font-garamondlight text-2xl md:text-3xl tracking-widest uppercase absolute left-10 top-10">
            {["M", "A", "U", "I"].map((letter, idx) => (
              <span key={idx}>{letter}</span>
            ))}
          </div>

          {/* Centered heading */}
          <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center font-helveticaNeue text-sm md:text-base tracking-widest ">
            The Doorway - Into Growth, We Sail Together.
          </h2>
        </div>

        {/* Right column */}
        <div className="md:w-[65%] w-full relative overflow-hidden h-150 sm:h-200 md:h-[90vh]">
          <Image
            src={HOME_QUOTE_BG}
            alt="Background quote section of Maui"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full">
        {/* Left column */}
        <div className="md:w-[35%] w-full mb-8 md:mb-0 relative flex flex-col">
          {/* Top-aligned letters */}
          <div className="text-left flex flex-col items-center w-fit text-black font-garamondlight text-2xl md:text-3xl tracking-widest uppercase absolute left-10 top-10">
            {["M", "A", "U", "I"].map((letter, idx) => (
              <span key={idx}>{letter}</span>
            ))}
          </div>

          {/* Centered heading */}
          <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center font-helveticaNeue text-sm md:text-base tracking-widest ">
            The Doorway - Into Growth, We Sail Together.
          </h2>
        </div>

        {/* Right column */}
        <div className="md:w-[65%] w-full relative overflow-hidden h-150 sm:h-200 md:h-[90vh]">
          <Image
            src={HOME_QUOTE_BG}
            alt="Background quote section of Maui"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AA;
