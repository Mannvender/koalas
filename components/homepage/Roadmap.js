import React from "react";
import { Heading, Box, Flex, Text } from "rebass";
import { useTheme } from "styled-components";

const RoadmapSection = ({ roadmap }) => {
  const { fonts, colors } = useTheme();
  return (
    <Flex
      flexDirection="column"
      height={["auto", "100vh"]}
      minHeight={["100vh"]}
      alignItems="center"
      justifyContent="center"
      sx={{ backgroundColor: colors.accent1 }}
      role="region"
      aria-label="Roadmap"
    >
      <Box>
        <Heading
          fontSize={[4, 6]}
          fontWeight={[600]}
          fontFamily={fonts.body + " !important"}
          px={[4]}
          pb={[4]}
          pt={[4, 0]}
          color={colors.dark1}
          textAlign={["center"]}
        >
          Roadmap
        </Heading>
        <Box px={[5]} mb={[5, 0]}>
          {roadmap.map((step, i) => (
            <Flex mb={[3]} key={i}>
              <Text color={colors.primary} sx={{ minWidth: ["72px"] }}>
                {step.when}
              </Text>
              <Text color={colors.dark1}>{step.what}</Text>
            </Flex>
          ))}
        </Box>
      </Box>
    </Flex>
  );
};

export default RoadmapSection;
