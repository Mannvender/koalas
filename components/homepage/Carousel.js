import React from "react";
import { Heading, Box, Flex } from "rebass";
import { useTheme } from "styled-components";

import Slider from "../Slider";

const CarouselSection = () => {
  const { fonts, colors } = useTheme();
  return (
    <Flex
      sx={{ height: ["100vh"], backgroundColor: colors.accent1 }}
      role="region"
      aria-label="Carousel"
      alignItems="center"
      justifyContent="center"
      textAlign={["center"]}
    >
      <Box>
        <Heading
          fontSize={[4, 6]}
          fontWeight={[600]}
          fontFamily={fonts.body + " !important"}
          px={[4]}
          pb={[4]}
          color={colors.dark1}
        >
          Sneak Peak
        </Heading>
        <Slider />
      </Box>
    </Flex>
  );
};

export default CarouselSection;
