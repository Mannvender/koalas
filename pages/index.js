import React, { useState } from "react";
import { Box, Heading, Text, Flex } from "rebass";
import styled, { useTheme } from "styled-components";
import Image from "next/image";

import NavSection from "../components/NavSection";
import SecondarySection from "../components/SecondarySection";
import Slider from "../components/Slider";
import { ROADMAP, MINT_DATE, DATE_OPTIONS } from "../messages";

const BgGradient = styled(Box)`
  @media (min-width: 1024px) {
    :before {
      content: "";
      background-size: cover;
      position: absolute;
      top: 0%;
      bottom: 0px;
      right: 12.5%;
      left: 12.5%;
      background-image: radial-gradient(
        at 0% 100%,
        ${(props) => props.color} 0,
        transparent 60%
      );
      opacity: 0.75;
    }
  }
`;
const Banner = styled(Flex)`
  background-image: url("/banner.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Index = () => {
  const [gradientColor, setGradientColor] = useState("");
  const { colors, fonts } = useTheme();
  const handleSliderChange = (color) => {
    setGradientColor(color);
  };

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: ["1fr", "1fr 6fr 1fr"],
        }}
      >
        <NavSection />
        <Box sx={{ overflowY: ["auto"], maxHeight: ["auto", "100vh"] }}>
          <Banner
            sx={{ height: ["100vh"] }}
            alignItems="center"
            justifyContent="center"
          >
            <Heading
              fontSize={[6, 8]}
              fontWeight={[900]}
              sx={{
                color: colors.dark,
              }}
            >
              Kool Koalas
            </Heading>
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
            <Slider afterChange={handleSliderChange} />
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
              {ROADMAP.map((step) => (
                <Flex mb={[3]}>
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
            <Text px={[5]} mb={[6]}>
              On <br />
              {MINT_DATE.toLocaleDateString(undefined, DATE_OPTIONS)}
              <br />
              {MINT_DATE.toLocaleTimeString()}
            </Text>
          </section>
        </Box>
        {/* <BgGradient
          color={gradientColor}
          id="koalas"
          sx={{
            maxHeight: ["auto", "100vh"],
            overflowY: "auto",
          }}
        >
          <Flex flexDirection={["column", "row"]}>
            <Box px={[5]} pt={[5]} sx={{ flexBasis: "65%" }}>
              <Heading
                fontSize={[6, 8]}
                fontWeight={[400]}
                sx={{
                  color: colors.light,
                }}
                mb={[3, 5]}
              >
                Kool Koalas
              </Heading>
              <Text mb={[5]} sx={{ color: colors.light1 }}>
                Kool Koalas are best friends of humans. They have survived
                wildest of wild fires, they can definitely beat NFT game. Are
                you ready to be a Kool Koala?
              </Text>
              <Box mb={[5, 2]} sx={{ textAlign: ["center", "left"] }}>
                <Slider afterChange={handleSliderChange} />
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                height: "100vh",
                flexBasis: "35%",
                display: ["none", "unset"],
              }}
            >
              <Image
                layout="fill"
                objectFit="cover"
                objectPosition="0% 30%"
                src="/koala_transparent.png"
                alt="banner"
                quality="70"
              />
            </Box>
          </Flex>
        </BgGradient> */}
        <SecondarySection />
      </Box>
    </>
  );
};

export default Index;
