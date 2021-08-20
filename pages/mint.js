import React, { useState, useEffect } from 'react'
import { Box, Heading, Text, Flex } from 'rebass'
import { useTheme } from 'styled-components'
import Web3 from 'web3'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { toast } from 'react-toastify'
import Image from 'next/image'
import NavSection from '../components/NavSection'
import SecondarySection from '../components/SecondarySection'
import MintWidget from '../components/MintWidget'
import { address, abi } from '../smartContract'
import { DEFAULT_ERROR_MESSAGE } from '../messages'

const walletConnKeyLS = 'wallet_permission'

const Mint = () => {
  const [ethAddress, setEthAddress] = useState('')
  const [ethAddressWC, setEthAddressWC] = useState('')
  const [supplyStats, setStats] = useState({})
  const { colors } = useTheme()

  const handleMetamaskConnect = () => {
    localStorage.setItem(walletConnKeyLS, 'true')
    setEthAddressWC('')
    connectMetamask()
  }

  const handleWalletConnect = () => {
    setEthAddress('')
    walletConnectInit()
  }

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
          toast.error('Please click on metamask icon to connect.')
        else if (err.code === -32002) {
          toast.info(
            "You'll find connection req when you click on Metamask extension"
          )
        } else {
          toast.error(DEFAULT_ERROR_MESSAGE)
        }
      }
      window.web3.eth.getAccounts().then((ethAddresses) => {
        if (ethAddresses[0]) setEthAddress(ethAddresses[0])
      })
    } else {
      toast.error('Install Metamask extension and try again.')
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
      // console.log('Wallet connect addresses found: ', ethAddresses)
      if (ethAddresses[0]) setEthAddressWC(ethAddresses[0])
    } catch (err) {
      console.log('Error while connecting to Wallet Connect : ', err)
      toast.error(err?.message || DEFAULT_ERROR_MESSAGE)
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

  useEffect(() => {
    const fetchSupplyStats = async () => {
      const web3 = window.web3
      try {
        if (web3) {
          const contract = new web3.eth.Contract(abi, address)
          // console.log(contract.methods, '--------methids--------')
          const totalSupply = await contract.methods.totalSupply().call()
          const MAX_EAGLES = await contract.methods.MAX_KOALAS().call()
          setStats({ totalSupply, MAX_EAGLES })
        }
      } catch (error) {
        console.log('error at contract end', error)
        toast.error(error.message || DEFAULT_ERROR_MESSAGE)
      }
    }

    if (ethAddress || ethAddressWC) fetchSupplyStats()
  }, [ethAddress, ethAddressWC])

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: ['1fr', '1fr 6fr 1fr']
        }}
      >
        <NavSection supplyStats={supplyStats} />
        <Box
          id='koalas'
          sx={{
            maxHeight: ['auto', '100vh'],
            overflowY: 'auto'
          }}
        >
          <Flex flexDirection={['column', 'row']}>
            <Box px={[5]} pt={[5]} sx={{ flexBasis: '65%' }}>
              <Heading
                fontSize={[6, 8]}
                fontWeight={[400]}
                sx={{
                  color: colors.light
                }}
                mb={[3, 5]}
              >
                Join Us
              </Heading>
              <Text mb={[5]} sx={{ color: colors.light1 }}>
                Koala approved Dad Joke:
                <br />
                <br />A friend of mine lost his job in the mint factory... His
                wife went absolutely menthol 🤣
              </Text>
              <MintWidget ethAddress={ethAddress || ethAddressWC} />
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
        </Box>
        <SecondarySection
          showConnectWallet
          ethAddress={ethAddress}
          ethAddressWC={ethAddressWC}
          handleMetamaskConnect={handleMetamaskConnect}
          handleWalletConnect={handleWalletConnect}
        />
      </Box>
    </>
  )
}

export default Mint
