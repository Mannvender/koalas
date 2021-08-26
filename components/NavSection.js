import React from "react";
import { Box, Flex, Text } from "rebass";
import styled, { useTheme } from "styled-components";
import { GiKoala as GiKoalaBase } from "react-icons/gi";
import { useRouter } from "next/router";

import { LinkInternal as NavLink } from "./Links";

const GiKoala = styled(GiKoalaBase)`
  cursor: pointer;
  &:hover {
    fill: ${(props) => props.theme.colors.light};
  }
`;
const NavSection = ({ supplyStats }) => {
  const { colors } = useTheme();
  const { pathname } = useRouter();
  return (
    <Box
      sx={{
        height: ["80vh", "100vh"],
        borderRight: `1px solid ${colors.dark}`,
        borderBottom: `1px solid ${colors.dark}`,
      }}
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        height="20%"
        sx={{
          borderBottom: `1px solid ${colors.dark}`,
        }}
      >
        <NavLink href="/">
          <GiKoala size="64px" color={colors.light1} />
        </NavLink>
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        height="60%"
        flexDirection="column"
      >
        <Box width={["100px"]}>
          <NavLink href="/#koalas" active={pathname === "/"} mb={[4]}>
            Koalas
          </NavLink>
          <NavLink href="/mint#mint" active={pathname === "/mint"} mb={[4]}>
            Mint
          </NavLink>
        </Box>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        height="20%"
        sx={{
          borderTop: `1px solid ${colors.dark}`,
        }}
      >
        {supplyStats?.totalSupply && (
          <Text fontSize={[1]} textAlign="center">
            {((supplyStats.totalSupply / supplyStats.MAX_EAGLES) * 100).toFixed(
              2
            )}
            % Sold
          </Text>
        )}
      </Flex>
    </Box>
  );
};

export default NavSection;
