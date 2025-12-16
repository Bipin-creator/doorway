// import AA from "@/components/Home/AA";
// import Accomodation from "@/components/Home/Accomodation";
// import AccomodationMobile from "@/components/Home/AccomodationMobile";
// import HomeDescription from "@/components/Home/HomeDescription";
// import HomeLanding from "@/components/Home/HomeLanding";
// import HomeQuote from "@/components/Home/HomeQuote";
// import MAUI from "@/components/Home/MAUI";
// import ResponsiveAccomodation from "@/components/Home/ResponsiveAccomodation";
// import TheEdit from "@/components/Home/TheEdit";
// import ParallexImage from "@/components/THEFORCEBEHINDOURIDENTITY/THEFORCEBEHINDOURIDENTITY";
// import ReactLenis from "lenis/react";

// export default function Home() {
//   return (
//     <div>
//       <ReactLenis root>
//         {/* <Navbar /> */}
//         <HomeLanding />
//         <HomeDescription />
//         <ParallexImage />
//         <TheEdit />
//         <ResponsiveAccomodation />
//         <MAUI />
//         <AA />
//         <HomeQuote />

//       </ReactLenis>
//     </div>
//   );
// }


import AboutStory from "@/components/About/AboutStory";
import ClientLanding from "@/components/Client/ClientLanding";
import OurApproach from "@/components/Client/OurApproach";
import DoorwayOperates from "@/components/DoorwayOperates/DoorwayOperates";
import Genesis from "@/components/Genesis/Genesis";
import MAUI from "@/components/Home/MAUI";
import AboutLanding from "@/components/LandingSection/AboutLanding";
import THEBEHINDOURIDENTITY from "@/components/THEFORCEBEHINDOURIDENTITY/THEFORCEBEHINDOURIDENTITY";
import TheInsight from "@/components/TheInsight/TheInsight";

const page = () => {
  return (
    <div>
        <AboutLanding />
        <TheInsight />
        <Genesis />
        <AboutStory />
        {/* <OurCalling /> */}
        <THEBEHINDOURIDENTITY />
        <MAUI />
        <DoorwayOperates />
        {/* <AboutIntro /> */}
        <ClientLanding />
        <OurApproach />
    </div>
  )
}

export default page

