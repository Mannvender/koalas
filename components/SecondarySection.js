import React, { useEffect } from 'react'
import { Box, Flex } from 'rebass'
import { useTheme } from 'styled-components'

import { LinkExternal as Link } from './Links'
import ArrowNavigator from './ArrowNavigator'
import ConnectWallet from './ConnectWallet'

const SecondarySection = ({
  ethAddress,
  ethAddressWC,
  handleMetamaskConnect,
  handleWalletConnect,
  showConnectWallet
}) => {
  const { colors } = useTheme()

  return (
    <Box
      sx={{
        height: '100vh',
        borderLeft: `1px solid ${colors.dark2}`,
        borderTop: `1px solid ${colors.dark2}`
      }}
    >
      <Flex
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        height='50%'
        sx={{
          borderBottom: `1px solid ${colors.dark2}`
        }}
      >
        <Link
          href='https://twitter.com'
          target='_blank'
          sx={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            marginBottom: '2rem'
          }}
        >
          Twitter
        </Link>
        <Link
          href='https://discord.com/invite/drV5a2vYTV'
          target='_blank'
          sx={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            marginBottom: '2rem'
          }}
        >
          Discord
        </Link>
      </Flex>
      <Flex
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
        height='30%'
        sx={{ color: colors.light2 }}
      >
        <ArrowNavigator />
      </Flex>
      <Flex
        alignItems='center'
        justifyContent='center'
        height='20%'
        sx={{
          borderTop: `1px solid ${colors.dark2}`
        }}
        id='connect-wallet'
      >
        {showConnectWallet && (
          <ConnectWallet
            handleMetamaskConnect={handleMetamaskConnect}
            handleWalletConnect={handleWalletConnect}
            ethAddress={ethAddress}
            ethAddressWC={ethAddressWC}
          />
        )}
      </Flex>
    </Box>
  )
}

export default SecondarySection
