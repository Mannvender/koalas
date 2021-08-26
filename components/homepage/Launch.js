import React from "react";
import { Heading, Text, Flex, Box } from "rebass";
import { useTheme } from "styled-components";

const LaunchInfoSection = ({ mintDate, dateOptions }) => {
  const { fonts, colors } = useTheme();
  return (
    <Flex
      height={["100vh"]}
      sx={{ backgroundColor: colors.primary }}
      alignItems="center"
      justifyContent="center"
    >
      <Box>
        <Heading
          fontSize={[4, 6]}
          fontWeight={[400]}
          fontFamily={fonts.body + " !important"}
          px={[4]}
          pb={[4]}
          color={colors.dark1}
          textAlign={["center"]}
        >
          Mint
        </Heading>
        <Text px={[5]} mb={[6]} color={colors.dark1} textAlign="center">
          On <br />
          {mintDate.toLocaleDateString(undefined, dateOptions)}
          <br />
          {mintDate.toLocaleTimeString()}
        </Text>
      </Box>
    </Flex>
  );
};

export default LaunchInfoSection;
