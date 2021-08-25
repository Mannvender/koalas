import React from "react";
import { Heading, Text } from "rebass";
import { useTheme } from "styled-components";

const LaunchInfoSection = ({ mintDate, dateOptions }) => {
  const { fonts, colors } = useTheme();
  return (
    <section>
      <Heading
        fontSize={[6]}
        fontWeight={[400]}
        fontFamily={fonts.body + " !important"}
        px={[4]}
        pb={[4]}
      >
        Mint?
      </Heading>
      <Text px={[5]} mb={[6]} color={colors.primary}>
        On <br />
        {mintDate.toLocaleDateString(undefined, dateOptions)}
        <br />
        {mintDate.toLocaleTimeString()}
      </Text>
    </section>
  );
};

export default LaunchInfoSection;
