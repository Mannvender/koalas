import React from "react";
import { Box, Heading, Text, Flex } from "rebass";
import styled, { useTheme } from "styled-components";
import Image from "next/image";

import NavSection from "../components/NavSection";
import SecondarySection from "../components/SecondarySection";
import Slider from "../components/Slider";
import { FEATURES, ROADMAP, MINT_DATE, DATE_OPTIONS } from "../messages";
import image from "next/image";

const Banner = styled(Flex)`
  background-image: url("/banner.png");
  background-repeat: no-repeat;
  background-size: cover;
`;
const StrokedHeading = styled(Heading)`
  text-stroke: 1px ${(props) => props.theme.colors.light};
  -webkit-text-stroke: 1px ${(props) => props.theme.colors.light};
`;

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
          <Banner
            sx={{ height: ["100vh"] }}
            alignItems="center"
            justifyContent="center"
          >
            <StrokedHeading
              fontSize={[6, 8]}
              fontWeight={[900]}
              sx={{
                color: colors.dark,
              }}
              width={["200px", "auto"]}
            >
              Kool Koalas
            </StrokedHeading>
          </Banner>
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
          <Heading
            fontSize={[4, 6]}
            fontWeight={[400]}
            fontFamily={fonts.body + " !important"}
            px={[4]}
            pb={[4]}
          >
            Features
          </Heading>
          <Flex mb={[5, 6]} px={[5]} flexWrap="wrap">
            {FEATURES.map((feature, i) => (
              <Flex
                key={i}
                flexBasis={["100%", "50%"]}
                flexDirection="column"
                alignItems="center"
              >
                <Box
                  sx={{
                    position: "relative",
                    height: feature.image.height,
                    width: feature.image.width,
                  }}
                >
                  <Image
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 50%"
                    src={feature.image.src}
                    alt={`feature ${i + 1}`}
                    quality="70"
                  />
                </Box>
                <Text mb={[5]} sx={{ color: colors.light1 }} textAlign="center">
                  {feature.text}
                </Text>
              </Flex>
            ))}
          </Flex>
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
              {ROADMAP.map((step, i) => (
                <Flex mb={[3]} key={i}>
                  <Text color={colors.primary} sx={{ minWidth: ["72px"] }}>
                    {step.when}
                  </Text>
                  <Text>{step.what}</Text>
                </Flex>
              ))}
            </Box>
          </section>
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
              {MINT_DATE.toLocaleDateString(undefined, DATE_OPTIONS)}
              <br />
              {MINT_DATE.toLocaleTimeString()}
            </Text>
          </section>
        </Box>
        <SecondarySection />
      </Box>
    </>
  );
};

export default Index;
