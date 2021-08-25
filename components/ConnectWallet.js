import styled, { useTheme, css } from "styled-components";
import { Box, Flex } from "rebass";
import Image from "next/image";

const StyledBox = styled(Box)`
  height: 40px;
  width: 40px;
  /* border-radius: 50%; */
  overflow: hidden;
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      border: 2px solid ${props.theme.colors.primary};
    `}
`;
const ConnectWallet = ({
  handleWalletConnect,
  handleMetamaskConnect,
  ethAddress,
  ethAddressWC,
}) => {
  return (
    <Flex flexDirection="column">
      <StyledBox
        onClick={handleMetamaskConnect}
        mb={[2]}
        active={Boolean(ethAddress)}
      >
        <Image
          quality="60"
          src="/metamask.jpg"
          alt="metamask-round"
          height="64px"
          width="64px"
          className={ethAddress ? "" : "gray-filter"}
        />
      </StyledBox>
      <StyledBox onClick={handleWalletConnect} active={Boolean(ethAddressWC)}>
        <Image
          quality="60"
          src="/walletconnect.jpeg"
          alt="wallet-connect"
          height="64px"
          width="64px"
          className={ethAddressWC ? "" : "gray-filter"}
        />
      </StyledBox>
    </Flex>
  );
};

export default ConnectWallet;
