import React from 'react'
import { Box, Flex } from 'rebass'
import styled, { useTheme } from 'styled-components'
import { GiKoala, GiHamburgerMenu } from 'react-icons/gi'

import { NavLink } from './Links'

const NavSection = () => {
  const { colors } = useTheme()
  return (
    <Box
      sx={{
        height: '100vh',
        borderRight: `1px solid ${colors.dark2}`
      }}
    >
      <Flex
        alignItems='center'
        justifyContent='center'
        height='20%'
        sx={{
          borderBottom: `1px solid ${colors.dark2}`
        }}
      >
        <GiKoala size='64px' color={colors.light} />
      </Flex>
      <Flex
        justifyContent='center'
        height='60%'
        flexDirection='column'
        px={[5]}
      >
        <NavLink href='/#koalas' active mb={[4]}>
          Koalas
        </NavLink>
        <NavLink href='/gallery' mb={[4]}>
          Gallery
        </NavLink>
        <NavLink mb={[4]}>Join</NavLink>
        <NavLink mb={[4]}>FAQs</NavLink>
      </Flex>
      <Flex
        alignItems='center'
        justifyContent='center'
        height='20%'
        sx={{
          borderTop: `1px solid ${colors.dark2}`
        }}
      >
        <GiHamburgerMenu size='48px' />
      </Flex>
    </Box>
  )
}

export default NavSection
