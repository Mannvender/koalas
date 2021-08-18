import React from 'react'
import { Box, Flex } from 'rebass'
import { useTheme } from 'styled-components'
import { GiKoala, GiHamburgerMenu } from 'react-icons/gi'
import { useRouter } from 'next/router'

import { NavLink } from './Links'

const NavSection = () => {
  const { colors } = useTheme()
  const { pathname } = useRouter()
  return (
    <Box
      sx={{
        height: '100vh',
        borderRight: `1px solid ${colors.dark2}`,
        borderBottom: `1px solid ${colors.dark2}`
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
        <NavLink href='/#koalas' active={pathname === '/'} mb={[4]}>
          Koalas
        </NavLink>
        <NavLink
          href='/gallery#gallery'
          active={pathname === '/gallery'}
          mb={[4]}
        >
          Gallery
        </NavLink>
        <NavLink mb={[4]} active={pathname === '/join'}>
          Join
        </NavLink>
        <NavLink mb={[4]} active={pathname === '/faq'}>
          FAQs
        </NavLink>
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
