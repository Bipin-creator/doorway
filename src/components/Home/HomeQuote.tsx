import { HOME_QUOTE_BG } from "@/constants/imagePath";
import Image from "next/image";

const HomeQuote = () => {
  return (
    <section className="relative min-h-screen py-16">
      <div className="absolute top-1/2 left-1/2 -translate-1/2 z-10">
        <h2
          className={`text-white text-center font-garamondlight text-3xl tracking-widest uppercase mb-6`}
        >
          Experience elevated luxury at Maui&apos;s most glamorous beach resort
        </h2>
      </div>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 -z-10">
        <Image
          src={HOME_QUOTE_BG}
          alt="Quote Image"
          fill
          className="object-cover"
        ></Image>
      </div>
    </section>
  );
};

export default HomeQuote;
