import React, { useState, useEffect } from 'react'
import { Box, Heading, Text, Flex } from 'rebass'
import styled, { useTheme, css } from 'styled-components'
import Web3 from 'web3'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { toast } from 'react-toastify'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'

import CircularButton from '../components/CircularButton'
import NavSection from '../components/NavSection'
import SecondarySection from '../components/SecondarySection'
import Slider from '../components/Slider'

const walletConnKeyLS = 'wallet_permission'

const BgGradient = styled(Box)`
  @media (min-width: 1024px) {
    :before {
      content: '';
      background-size: cover;
      position: absolute;
      top: 0%;
      bottom: 0px;
      right: 0px;
      left: 12.5%;
      background-image: radial-gradient(
        at 0% 100%,
        ${(props) => props.color} 0,
        transparent 60%
      );
      opacity: 0.75;
    }
  }
`

const Index = () => {
  const [ethAddress, setEthAddress] = useState('')
  const [ethAddressWC, setEthAddressWC] = useState('')
  const [gradientColor, setGradientColor] = useState('')
  const { colors } = useTheme()
  const handleSliderChange = (color) => {
    setGradientColor(color)
  }
  console.log(gradientColor)

  const connectMetamask = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      try {
        const conn = await window.ethereum.enable()
        const ethconnected = conn.length > 0
        if (ethconnected) {
          const address = conn[0] // get wallet address
          console.log('Metamask extension found ,ethAddress =>> ', address)
        }
      } catch (err) {
        if (err.code === 4001)
          toast.error(
            "You've missed the boat, Please click on metamask icon to connect"
          )
        else if (err.code === -32002) {
          toast.info(
            "You'll find connection req when you click on Metamask extension"
          )
        } else {
          toast.error('Arrrg! Something went wrong')
        }
      }
      window.web3.eth.getAccounts().then((ethAddresses) => {
        if (ethAddresses[0]) setEthAddress(ethAddresses[0])
      })
    } else {
      toast.error('Please install Metamask extension and try again')
    }
  }

  const walletConnectInit = async () => {
    try {
      //  Create WalletConnect Provider
      const provider = new WalletConnectProvider({
        infuraId: '6b01117d96bd429bb6e34da9c8646ff2'
      })

      //  Enable session (triggers QR Code modal)
      await provider.enable()

      //  Create Web3 instance
      const web3 = new Web3(provider)
      window.web3 = web3
      const ethAddresses = await web3.eth.getAccounts()
      console.log('Wallet connect addresses found: ', ethAddresses)
      if (ethAddresses[0]) setEthAddressWC(ethAddresses[0])
    } catch (err) {
      console.log('Error while connecting to Wallet Connect : ', err)
      toast.error(err?.message || 'Something went wrong')
    }
  }

  useEffect(() => {
    const isWalletPermission = localStorage.getItem(walletConnKeyLS) === 'true'
    if (isWalletPermission) connectMetamask()
    // cleanup
    return () => {
      window.web3 = undefined
    }
  }, [])

  const handleMetamaskConnect = () => {
    localStorage.setItem(walletConnKeyLS, 'true')
    setEthAddressWC('')
    connectMetamask()
  }

  const handleWalletConnect = () => {
    setEthAddress('')
    walletConnectInit()
  }

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: ['1fr', '1fr 6fr 1fr']
        }}
      >
        <NavSection />
        <BgGradient
          color={gradientColor}
          id='koalas'
          sx={{
            maxHeight: ['auto', '100vh'],
            overflowY: 'auto'
          }}
        >
          <Flex flexDirection={['column', 'row']}>
            <Box px={[4, 5]} pt={[4, 5]} sx={{ flexBasis: '65%' }}>
              <Heading
                fontSize={[6, 8]}
                fontWeight={[400]}
                sx={{
                  color: colors.light
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
              <Box mb={[5, 2]} sx={{ textAlign: ['center', 'left'] }}>
                <Slider afterChange={handleSliderChange} />
              </Box>
            </Box>
            <Box
              sx={{
                position: 'relative',
                height: '100vh',
                flexBasis: '35%',
                display: ['none', 'unset']
              }}
            >
              <Image
                layout='fill'
                objectFit='cover'
                objectPosition='0% 30%'
                src='/koala_transparent.png'
                alt='banner'
                quality='70'
              />
            </Box>
          </Flex>
        </BgGradient>
        <SecondarySection />
      </Box>
    </>
  )
}

export default Index
