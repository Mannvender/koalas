import React from "react";
import { Box } from "rebass";
import dynamic from "next/dynamic";

import NavSection from "components/NavSection";
import SecondarySection from "components/SecondarySection";
import BannerSection from "components/homepage/Banner";
import CarouselSection from "components/homepage/Carousel";
import FeatureSection from "components/homepage/Feature";
import RoadmapSection from "components/homepage/Roadmap";
import LaunchInfoSection from "components/homepage/Launch";
const Swiper = dynamic(() => import("components/homepage/Swiper"));
import { FEATURES, ROADMAP, MINT_DATE, DATE_OPTIONS } from "../messages";

const Index = () => {
  const sections = [
    <BannerSection />,
    <CarouselSection />,
    <FeatureSection features={FEATURES} />,
    <RoadmapSection roadmap={ROADMAP} />,
    <LaunchInfoSection mintDate={MINT_DATE} dateOptions={DATE_OPTIONS} />,
  ];
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: ["1fr", "1fr 6fr 1fr"],
        }}
      >
        <NavSection />
        <Box
          id="koalas"
          sx={{ overflowY: ["unset", "auto"], maxHeight: ["auto", "100vh"] }}
        >
          <Swiper slides={sections} />
        </Box>
        <SecondarySection />
      </Box>
    </>
  );
};

export default Index;
