import React from "react";
import { Heading, Box, Flex, Text } from "rebass";
import { useTheme } from "styled-components";

const RoadmapSection = ({ roadmap }) => {
  const { fonts, colors } = useTheme();
  return (
    <section>
      <Heading
        fontSize={[4, 6]}
        fontWeight={[400]}
        fontFamily={fonts.body + " !important"}
        px={[4]}
        pb={[4]}
      >
        Roadmap
      </Heading>
      <Box px={[5]} mb={[6]}>
        {roadmap.map((step, i) => (
          <Flex mb={[3]} key={i}>
            <Text color={colors.primary} sx={{ minWidth: ["72px"] }}>
              {step.when}
            </Text>
            <Text>{step.what}</Text>
          </Flex>
        ))}
      </Box>
    </section>
  );
};

export default RoadmapSection;
