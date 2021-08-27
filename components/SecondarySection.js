import React from "react";
import { Flex } from "rebass";
import { useTheme } from "styled-components";

import { LinkExternal as Link } from "./Links";
import ArrowNavigator from "./ArrowNavigator";
import ConnectWallet from "./ConnectWallet";

const SecondarySection = ({
  ethAddress,
  ethAddressWC,
  handleMetamaskConnect,
  handleWalletConnect,
  showConnectWallet,
}) => {
  const { colors } = useTheme();

  return (
    <Flex
      flexDirection={["column-reverse", "column"]}
      sx={{
        height: "100vh",
        borderLeft: [0, `1px solid ${colors.dark}`],
        borderTop: [`1px solid ${colors.dark}`, 0],
      }}
    >
      <Flex
        id="contact"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="50%"
        sx={{
          borderBottom: [0, `1px solid ${colors.dark}`],
          borderTop: [`1px solid ${colors.dark}`, 0],
        }}
      >
        <Link
          href="https://twitter.com/KoolKoalas929"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            marginBottom: "2rem",
          }}
        >
          Twitter
        </Link>
        <Link
          href="https://discord.com/invite/drV5a2vYTV"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            marginBottom: "2rem",
          }}
        >
          Discord
        </Link>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        height="30%"
        sx={{ color: colors.light2 }}
      >
        <ArrowNavigator />
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        height="20%"
        sx={{
          borderTop: ["none", `1px solid ${colors.dark}`],
          borderBottom: [`1px solid ${colors.dark}`, 0],
        }}
        id="connect-wallet"
      >
        {showConnectWallet && (
          <ConnectWallet
            handleMetamaskConnect={handleMetamaskConnect}
            handleWalletConnect={handleWalletConnect}
            ethAddress={ethAddress}
            ethAddressWC={ethAddressWC}
          />
        )}
        {!showConnectWallet && (
          <Link
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
            }}
          >
            Hit it
          </Link>
        )}
      </Flex>
    </Flex>
  );
};

export default SecondarySection;
