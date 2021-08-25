import React from "react";
import { Heading, Box, Flex, Text } from "rebass";
import { useTheme } from "styled-components";
import Image from "next/image";

const FeatureSection = ({ features }) => {
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
        Features
      </Heading>
      <Flex mb={[5, 6]} px={[5]} flexWrap="wrap">
        {features.map((feature, i) => (
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
    </section>
  );
};

export default FeatureSection;
