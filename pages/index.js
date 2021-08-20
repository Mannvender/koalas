import React, { useState } from 'react'
import { Box, Heading, Text, Flex } from 'rebass'
import styled, { useTheme } from 'styled-components'
import Image from 'next/image'

import NavSection from '../components/NavSection'
import SecondarySection from '../components/SecondarySection'
import Slider from '../components/Slider'

const BgGradient = styled(Box)`
  @media (min-width: 1024px) {
    :before {
      content: '';
      background-size: cover;
      position: absolute;
      top: 0%;
      bottom: 0px;
      right: 12.5%;
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
  const [gradientColor, setGradientColor] = useState('')
  const { colors } = useTheme()
  const handleSliderChange = (color) => {
    setGradientColor(color)
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
            <Box px={[5]} pt={[5]} sx={{ flexBasis: '65%' }}>
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
