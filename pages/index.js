import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Flex, Link as LinkBase } from "rebass";
import styled, { useTheme } from "styled-components";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { toast } from "react-toastify";
import Image from "next/image";
import { GiKoala, GiHamburgerMenu } from "react-icons/gi";
import { BiUpArrowAlt, BiDownArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import "intersection-observer";

import Header from "../components/Header";
import PostLaunch from "../components/PostLaunch";
import MintWidget from "../components/MintWidget";
import ConnectWallet from "../components/ConnectWallet";
import CircularButton from "../components/CircularButton";

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
const Link = styled(LinkBase)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.light2};
  font-size: 1.4rem;
  font-family: inherit;
`;

const Index = () => {
  const [ethAddress, setEthAddress] = useState("");
  const [ethAddressWC, setEthAddressWC] = useState("");
  const { colors } = useTheme();

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
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 6fr 1fr",
        }}
      >
        <Box
          sx={{
            height: "100vh",
            borderRight: `1px solid ${colors.dark2}`,
          }}
        >
          <Flex
            alignItems="center"
            justifyContent="center"
            height="20%"
            sx={{
              borderBottom: `1px solid ${colors.dark2}`,
            }}
          >
            <GiKoala size="64px" color={colors.light} />
          </Flex>
          <Flex alignItems="center" justifyContent="center" height="60%"></Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            height="20%"
            sx={{
              borderTop: `1px solid ${colors.dark2}`,
            }}
          >
            <GiHamburgerMenu size="48px" />
          </Flex>
        </Box>
        <Box
          sx={{
            maxHeight: "100vh",
            height: "100000px",
            overflowY: "auto",
            // backgroundColor: "gray",
          }}
        >
          <Flex>
            <Box
              sx={
                {
                  // height: "1000px",
                }
              }
              p={[6]}
            >
              <Heading
                fontSize={[8]}
                fontWeight={[400]}
                sx={{
                  color: colors.light,
                }}
                mb={[5]}
              >
                Kool Koalas
              </Heading>
              <Text mb={[5]}>
                Kool Koalas are best friends of humans. They have survived
                wildest of wild fires, they can definitely beat NFT game. Are
                you ready to be a Kool Koala?
              </Text>
              <Flex>
                <CircularButton>
                  <BsArrowRight size="24px" />
                </CircularButton>
                <Heading
                  fontFamily="inherit !important"
                  fontSize={[2]}
                  ml={[3]}
                >
                  Join Now
                </Heading>
              </Flex>
            </Box>
            <Box sx={{ position: "relative", height: "100vh", width: "100%" }}>
              <Image
                layout="fill"
                objectFit="cover"
                objectPosition="15% 30%"
                src="/koala_01.jpg"
                alt="banner"
                quality="70"
              />
            </Box>
          </Flex>
        </Box>
        <Box sx={{ height: "100vh" }}>
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="50%"
            sx={{
              borderBottom: `1px solid ${colors.dark2}`,
            }}
          >
            <Link
              href="https://twitter.com"
              target="_blank"
              sx={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                marginBottom: "2rem",
              }}
            >
              Twitter
            </Link>
            <Link
              href="https://discord.com"
              target="_blank"
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
            <BiUpArrowAlt size="48px" />
            <BiDownArrowAlt size="48px" />
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            height="20%"
            sx={{
              borderTop: `1px solid ${colors.dark2}`,
            }}
          ></Flex>
        </Box>
      </Box>
    </>
  );
};

export default Index;
