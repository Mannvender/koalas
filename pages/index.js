import React, { useState, useEffect } from "react";
import { Box, Heading, Text } from "rebass";
import styled from "styled-components";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { toast } from "react-toastify";
import Image from "next/image";
import "intersection-observer";

import Header from "../components/Header";
import PostLaunch from "../components/PostLaunch";
import MintWidget from "../components/MintWidget";
import ConnectWallet from "../components/ConnectWallet";

const CustomHeading = styled(Heading)`
  text-align: left;
  @media (min-width: 1024px) {
    text-align: center;
  }
`;
const walletConnKeyLS = "wallet_permission";

const BannerContainer = styled(Box)`
  position: relative;
  height: 550px;
  width: 100%;
  @media (min-width: 1024px) {
    height: 700px;
    width: 1024px;
  }
`;

const Index = () => {
  const [ethAddress, setEthAddress] = useState("");
  const [ethAddressWC, setEthAddressWC] = useState("");

  const connectMetamask = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      try {
        const conn = await window.ethereum.enable();
        const ethconnected = conn.length > 0;
        if (ethconnected) {
          const address = conn[0]; // get wallet address
          console.log("Metamask extension found ,ethAddress =>> ", address);
        }
      } catch (err) {
        if (err.code === 4001)
          toast.error(
            "You've missed the boat, Please click on metamask icon to connect"
          );
        else if (err.code === -32002) {
          toast.info(
            "You'll find connection req when you click on Metamask extension"
          );
        } else {
          toast.error("Arrrg! Something went wrong");
        }
      }
      window.web3.eth.getAccounts().then((ethAddresses) => {
        if (ethAddresses[0]) setEthAddress(ethAddresses[0]);
      });
    } else {
      toast.error("Please install Metamask extension and try again");
    }
  };

  const walletConnectInit = async () => {
    try {
      //  Create WalletConnect Provider
      const provider = new WalletConnectProvider({
        infuraId: "6b01117d96bd429bb6e34da9c8646ff2",
      });

      //  Enable session (triggers QR Code modal)
      await provider.enable();

      //  Create Web3 instance
      const web3 = new Web3(provider);
      window.web3 = web3;
      const ethAddresses = await web3.eth.getAccounts();
      console.log("Wallet connect addresses found: ", ethAddresses);
      if (ethAddresses[0]) setEthAddressWC(ethAddresses[0]);
    } catch (err) {
      console.log("Error while connecting to Wallet Connect : ", err);
      toast.error(err?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    const isWalletPermission = localStorage.getItem(walletConnKeyLS) === "true";
    if (isWalletPermission) connectMetamask();
    // cleanup
    return () => {
      window.web3 = undefined;
    };
  }, []);

  const handleMetamaskConnect = () => {
    localStorage.setItem(walletConnKeyLS, "true");
    setEthAddressWC("");
    connectMetamask();
  };

  const handleWalletConnect = () => {
    setEthAddress("");
    walletConnectInit();
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          maxWidth: 1024,
          mx: "auto",
          px: 0,
        }}
      >
        <Box mb={[5, 7]}>
          <BannerContainer mb={[2, 4]}>
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="50% 30%"
              src="/banner.webp"
              alt="banner"
              quality="70"
            />
          </BannerContainer>
          <Heading
            textAlign={["left", "center"]}
            fontSize={[5, 6]}
            fontFamily="inherit"
            sx={{
              color: "primary",
            }}
            px={2}
          >
            10k adventurous hearts that strive for excellence in whatever fields
            they chose
          </Heading>
        </Box>
        <Box mb={[5, 7]} id="team">
          <Heading
            fontSize={[6, 7]}
            fontFamily="inherit"
            mb={[2, 4]}
            ml={[2, 0]}
          >
            Founding Brothers & Sisters
          </Heading>
        </Box>
        <Box mb={[5, 7]} id="mint">
          <Heading
            fontSize={[6, 7]}
            fontFamily="inherit"
            mb={[2, 4]}
            ml={[2, 0]}
          >
            Join the EagleSquad
          </Heading>
          <MintWidget ethAddress={ethAddress || ethAddressWC} />
        </Box>
        <Box mb={[5, 7]} id="roadmap">
          <CustomHeading
            fontSize={[6, 7]}
            px={2}
            fontFamily="inherit"
            mb={[2, 4]}
          >
            Roadmap
          </CustomHeading>
          <Box px={2}></Box>
        </Box>
        <Box mb={[5, 7]} id="post-launch">
          <Heading fontSize={[6, 7]} px={2} fontFamily="inherit" mb={[2, 4]}>
            Post Launch
          </Heading>
          <Box px={2}>
            <PostLaunch />
          </Box>
        </Box>
        <Box mb={[5, 7]} id="connect-wallet">
          <ConnectWallet
            handleMetamaskConnect={handleMetamaskConnect}
            handleWalletConnect={handleWalletConnect}
            ethAddress={ethAddress}
            ethAddressWC={ethAddressWC}
          />
        </Box>
        <Text color="gray" textAlign="center" my={[3]}>
          Made by eagles with love❤️
        </Text>
      </Box>
    </>
  );
};

export default Index;
