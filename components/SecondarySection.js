import React from 'react'
import { Box, Flex } from 'rebass'
import { useTheme } from 'styled-components'
import { BiUpArrowAlt, BiDownArrowAlt } from 'react-icons/bi'

import { Link } from './Links'

const SecondarySection = () => {
  const { colors } = useTheme()
  return (
    <Box sx={{ height: '100vh' }}>
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
        <BiUpArrowAlt size='48px' />
        <BiDownArrowAlt size='48px' />
      </Flex>
      <Flex
        alignItems='center'
        justifyContent='center'
        height='20%'
        sx={{
          borderTop: `1px solid ${colors.dark2}`
        }}
      ></Flex>
    </Box>
  )
}

export default SecondarySection
