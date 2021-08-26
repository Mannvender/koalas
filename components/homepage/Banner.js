import React from "react";
import styled, { useTheme } from "styled-components";
import { Heading, Flex } from "rebass";

const Banner = styled(Flex)`
  background-image: url("/banner.png");
  background-repeat: no-repeat;
  background-size: cover;
`;
const StrokedHeading = styled(Heading)`
  text-stroke: 1px ${(props) => props.theme.colors.light};
  -webkit-text-stroke: 1px ${(props) => props.theme.colors.light};
`;

const BannerSection = () => {
  const { colors } = useTheme();
  return (
    <>
      <Banner
        height={["100vh"]}
        width={["100%"]}
        alignItems="center"
        justifyContent="center"
        role="region"
        aria-label="Banner"
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
    </>
  );
};

export default BannerSection;
