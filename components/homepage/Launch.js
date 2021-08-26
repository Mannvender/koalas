import React from "react";
import { Heading, Text, Flex, Box } from "rebass";
import { useTheme } from "styled-components";
import Button from "components/RectangularButton";
import { LinkInternal as Link } from "components/Links";

const LaunchInfoSection = ({ mintDate, dateOptions }) => {
  const { fonts, colors } = useTheme();
  return (
    <Flex
      height={["100vh"]}
      sx={{ backgroundColor: colors.primary }}
      alignItems="center"
      justifyContent="center"
      role="region"
      aria-label="Launch Info"
    >
      <Box>
        <Heading
          fontSize={[4, 6]}
          fontWeight={[600]}
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

        <Link href="/mint#mint">
          <Button color={colors.dark1} bgColor={colors.accent1}>
            Let's mint
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default LaunchInfoSection;
