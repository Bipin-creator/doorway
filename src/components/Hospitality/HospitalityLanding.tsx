import { HOSPITALITY_BG } from "@/constants/imagePath";
import Image from "next/image";

const HospitalityLanding = () => {
  return (
    <section className="relative min-h-screen bg-black">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={HOSPITALITY_BG}
          alt="white doorway logo"
          fill
          priority
          className="object-cover  h-auto opacity-90"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-linear-to-b from-transparent to-black/20">
        <h2
          className={`text-white brightness-200 contrast-200 text-center font-helveticaNeue text-5xl md:text-6xl lg:text-8xl tracking-widest uppercase mb-6`}
        >
          Hospitality 
        </h2>
      </div>
    </section>
  );
};

export default HospitalityLanding;
