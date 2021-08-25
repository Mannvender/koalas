import React from "react";
import { Heading, Box } from "rebass";
import { useTheme } from "styled-components";

import Slider from "../Slider";

const CarouselSection = () => {
  const { fonts } = useTheme();
  return (
    <Box my={[5, 6]}>
      <Heading
        fontSize={[4, 6]}
        fontWeight={[400]}
        fontFamily={fonts.body + " !important"}
        px={[4]}
        pb={[4]}
      >
        Sneak Peak
      </Heading>
      <Slider />
    </Box>
  );
};

export default CarouselSection;
