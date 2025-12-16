import ANetworkOfExpertise from "@/components/Sustainability/ANetworkOfExpertise";
import SustainabilityIntro from "@/components/Sustainability/SustainabilityIntro";
import SustainabilityLanding from "@/components/Sustainability/SustainabilityLanding";
import WhyWeExist from "@/components/Sustainability/WhyWeExist";
import React from "react";
import WhyWeExist2 from "@/components/Sustainability/WhyWeExist2";

const SustainabilityPage = () => {
  return (
    <>
        <SustainabilityLanding />
        <SustainabilityIntro />
        <WhyWeExist />
        <WhyWeExist2 />
        <ANetworkOfExpertise />
    </>
  );
};

export default SustainabilityPage;
