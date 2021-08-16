import styled, { useTheme } from "styled-components";
import { Box, Heading, Text, Flex } from "rebass";
import Image from "next/image";

const FloatingMetamask = styled.div`
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
  @media (min-width: 1024px) {
    position: fixed;
    bottom: 160px;
    right: 50px;
    align-items: flex-end;
    margin-bottom: 0;
  }
`;
const FloatingWalletConnect = styled(FloatingMetamask)`
  bottom: 40px;
  margin-bottom: 0;
`;

const ConnectWallet = ({
  handleWalletConnect,
  handleMetamaskConnect,
  ethAddress,
  ethAddressWC,
}) => {
  const { colors } = useTheme();

  return (
    <>
      <FloatingMetamask onClick={handleMetamaskConnect}>
        <Box
          sx={{ borderRadius: "50%", overflow: "hidden" }}
          height="56px"
          width="56px"
        >
          <Image
            quality="60"
            src="https://i.ibb.co/h961JXz/metamask-round.png"
            alt="metamask-round"
            height="64px"
            width="64px"
          />
        </Box>
        <Text color={ethAddress ? colors.primary : colors.offWhite}>
          {ethAddress ? "Connected" : "Connect"}
        </Text>
      </FloatingMetamask>
      <FloatingWalletConnect onClick={handleWalletConnect}>
        <Box
          sx={{ borderRadius: "50%", overflow: "hidden" }}
          height="56px"
          width="56px"
        >
          <Image
            quality="60"
            src="https://i.ibb.co/Kxw8gSZ/wallet-connect.png"
            alt="wallet-connect"
            height="64px"
            width="64px"
          />
        </Box>
        <Text color={ethAddressWC ? colors.primary : colors.offWhite}>
          {ethAddressWC ? "Connected" : "Connect"}
        </Text>
      </FloatingWalletConnect>
    </>
  );
};

export default ConnectWallet;
