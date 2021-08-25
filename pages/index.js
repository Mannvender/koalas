import React from "react";
import { Box, Heading, Text, Flex } from "rebass";
import { useTheme } from "styled-components";
import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";

import NavSection from "../components/NavSection";
import SecondarySection from "../components/SecondarySection";
import BannerSection from "../components/homepage/Banner";
import CarouselSection from "../components/homepage/Carousel";
import FeatureSection from "../components/homepage/Feature";
import RoadmapSection from "../components/homepage/Roadmap";
import LaunchInfoSection from "../components/homepage/Launch";
import { FEATURES, ROADMAP, MINT_DATE, DATE_OPTIONS } from "../messages";

const Index = () => {
  const { colors, fonts } = useTheme();

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
          sx={{ overflowY: ["auto"], maxHeight: ["auto", "100vh"] }}
        >
          <BannerSection />
          <CarouselSection />
          <FeatureSection features={FEATURES} />
          <RoadmapSection roadmap={ROADMAP} />
          <LaunchInfoSection mintDate={MINT_DATE} dateOptions={DATE_OPTIONS} />
        </Box>
        <SecondarySection />
      </Box>
    </>
  );
};

export default Index;
