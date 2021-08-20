import React from 'react'
import { Flex, Heading, Box } from 'rebass'
import { IoIosArrowBack } from 'react-icons/io'
import { useRouter } from 'next/router'
import styled, { useTheme } from 'styled-components'

const BackIcon = styled(IoIosArrowBack)`
  margin-left: -12px;
  @media (min-width: 1024px) {
    margin-left: 0;
  }
`

const BackHeader = ({ label, ...props }) => {
  const { colors } = useTheme()
  const router = useRouter()
  const handleBackClick = () => router.back()
  return (
    <Flex
      py={3}
      pl={[4, 6]}
      alignItems='center'
      backgroundColor={colors.dark}
      mb={1}
      sx={{ cursor: 'pointer' }}
      {...props}
    >
      <BackIcon size='36px' onClick={handleBackClick} />
      <Heading fontFamily='inherit' onClick={handleBackClick}>
        {label}
      </Heading>
    </Flex>
  )
}

export default BackHeader
