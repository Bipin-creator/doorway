import WeConsult from "@/components/Hospitality/WeConsult";
import Logo from "@/components/Logos/Logo";
import InfiniteLogoSlider from "@/components/Tourism/InfiniteLogoSlider";
import ServiceServing from "@/components/Tourism/ServiceServing";
import Serving from "@/components/Tourism/Serving";
import SustainableGoals from "@/components/Tourism/SustainableGoals";
import ToDevelopAndManage from "@/components/Tourism/ToDevelopAndManage";
import TourismIntro from "@/components/Tourism/TourismIntro";
import TourismLanding from "@/components/Tourism/TourismLanding";
import TourismRepresentation from "@/components/Tourism/TourismRepresentation";
import TourismWhatWeDo from "@/components/Tourism/TourismWhatWeDo";
import WhoDoWeWorkWith from "@/components/Tourism/WhoDoWeWorkWith";
import WhyDoWeDo from "@/components/Tourism/WhyDoWeDo";

const TourismPage = () => {
  return (
    <>
        <TourismLanding />
        <TourismIntro />
        <TourismRepresentation />
        <WhyDoWeDo />
        <Logo />
        {/* <ServiceServing /> */}
        <Serving/>
        {/* <InfiniteLogoSlider /> */}
        <SustainableGoals />
        {/* <WhoDoWeWorkWith /> */}
        <TourismWhatWeDo />
        <ToDevelopAndManage />
        {/* <WeConsult /> */}
        
    </>
  );
};

export default TourismPage;
