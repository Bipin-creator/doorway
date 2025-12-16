import { HOME_BG, LOGO_WHITE } from "@/constants/imagePath";
import Image from "next/image";

const HomeLanding = () => {
  return (
    <section className="">
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/50 z-0"></div>
        <div className="absolute left-1/2 top-1/2  -translate-x-1/2 z-10 h-52 w-52 lg:h-60 lg:w-60">
          <Image
            src={LOGO_WHITE}
            alt="white doorway logo"
            fill
            fetchPriority="high"
            className="object-contain"
          ></Image>
        </div>
        {/* <video
          src={LANDING_VIDEO1}
          className={`w-full h-auto `}
          autoPlay
          loop
          muted
          playsInline
        /> */}
        <img src={HOME_BG} alt="" className="h-full w-full object-cover" />
      </div>
    </section>
  );
};

export default HomeLanding;
