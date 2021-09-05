import React from "react";
import { Box, Flex, Text } from "rebass";
import styled, { useTheme } from "styled-components";
import { GiKoala as GiKoalaBase } from "react-icons/gi";
import { useRouter } from "next/router";
import Image from "next/image";

import { LinkInternal as NavLink, LinkExternal as Link } from "./Links";

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
        height: ["60vh", "100vh"],
        borderRight: [0, `1px solid ${colors.dark}`],
        borderBottom: [`1px solid ${colors.dark}`, 0],
      }}
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        height={["30%", "20%"]}
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
        height={["40%", "60%"]}
        flexDirection="column"
      >
        <Box width={["100px"]}>
          <NavLink href="/#koalas" active={pathname === "/"} mb={[4]}>
            Koalas
          </NavLink>
          <NavLink href="/mint#mint" active={pathname === "/mint"}>
            Mint
          </NavLink>
        </Box>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        height={["30%", "20%"]}
        sx={{
          borderTop: `1px solid ${colors.dark}`,
        }}
      >
        {supplyStats?.totalSupply && (
          <Text fontSize={[1]} textAlign="center">
            {supplyStats.totalSupply} / {supplyStats.MAX_KOALAS} Sold
          </Text>
        )}
        {!supplyStats && (
          <Link
            href="https://twitter.com/LokoKoala05"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              height="60px"
              width="60px"
              src={`/koala_031.png`}
              alt={`koala 031`}
              quality="70"
              className="gray-filter"
            />
          </Link>
        )}
      </Flex>
    </Box>
  );
};

export default NavSection;
