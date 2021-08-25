import React from "react";
import { Box, Heading, Text, Flex } from "rebass";
import styled, { useTheme } from "styled-components";
import Image from "next/image";

import NavSection from "../components/NavSection";
import SecondarySection from "../components/SecondarySection";
import Slider from "../components/Slider";
import { ROADMAP, MINT_DATE, DATE_OPTIONS } from "../messages";

const Banner = styled(Flex)`
  background-image: url("/banner.png");
  background-repeat: no-repeat;
  background-size: cover;
`;
const StrokedHeading = styled(Heading)`
  text-stroke: 1.5px ${(props) => props.theme.colors.light};
  -webkit-text-stroke: 1.5px ${(props) => props.theme.colors.light};
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
            >
              Kool Koalas
            </StrokedHeading>
          </Banner>
          <Box my={[5, 6]} sx={{ textAlign: ["center", "left"] }}>
            <Heading
              fontSize={[6]}
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
            fontSize={[6]}
            fontWeight={[400]}
            fontFamily={fonts.body + " !important"}
            px={[4]}
            pb={[4]}
          >
            Features
          </Heading>
          <Flex mb={[5, 6]} px={[5]} flexWrap="wrap">
            <Flex flexBasis="50%" flexDirection="column" alignItems="center">
              <Box
                sx={{
                  position: "relative",
                  height: "200px",
                  width: "270px",
                }}
              >
                <Image
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 50%"
                  src="/feature_02.png"
                  alt="banner"
                  quality="70"
                />
              </Box>
              <Text mb={[5]} sx={{ color: colors.light1 }} textAlign="center">
                1817 kool koalas hanging on the Etherclyptus trees
              </Text>
            </Flex>
            <Flex flexBasis="50%" flexDirection="column" alignItems="center">
              <Box
                sx={{
                  position: "relative",
                  height: "200px",
                  width: "270px",
                }}
              >
                <Image
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 50%"
                  src="/feature_04.png"
                  alt="banner"
                  quality="70"
                />
              </Box>
              <Text mb={[5]} sx={{ color: colors.light1 }} textAlign="center">
                0.01 ETH + gas
              </Text>
            </Flex>
            <Flex
              flexBasis="50%"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box
                sx={{
                  position: "relative",
                  height: "340px",
                  width: "250px",
                }}
              >
                <Image
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 50%"
                  src="/feature_01.png"
                  alt="banner"
                  quality="70"
                />
              </Box>
              <Text mb={[5]} sx={{ color: colors.light1 }} textAlign="center">
                Ownership and usage rights
              </Text>
            </Flex>
            <Flex flexBasis="50%" flexDirection="column" alignItems="center">
              <Box
                sx={{
                  position: "relative",
                  height: "350px",
                  width: "210px",
                }}
              >
                <Image
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 50%"
                  src="/feature_03.png"
                  alt="banner"
                  quality="70"
                />
              </Box>
              <Text mb={[5]} sx={{ color: colors.light1 }} textAlign="center">
                Stored on IPFS Pinata
              </Text>
            </Flex>
          </Flex>
          <section>
            <Heading
              fontSize={[6]}
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
                  <Text color={colors.primary} sx={{ width: "72px" }}>
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
