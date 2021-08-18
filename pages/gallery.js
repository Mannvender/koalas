import React from 'react'
import { Box, Flex, Heading, Text } from 'rebass'
import { useTheme } from 'styled-components'
import Image from 'next/image'
import SlickSlider from 'react-slick'
import 'intersection-observer'

import NavSection from '../components/NavSection'
import SecondarySection from '../components/SecondarySection'

const URLS = [
  '18',
  '06',
  '07',
  '08',
  '09',
  '10',
  '12',
  '11',
  '13',
  '14',
  '15',
  '16',
  '17'
]

const Gallery = () => {
  const { colors } = useTheme()
  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: ['1fr', '1fr 6fr 1fr']
        }}
      >
        <NavSection />
        <Box
          id='gallery'
          sx={{
            maxHeight: ['auto', '100vh'],
            overflow: 'hidden'
          }}
        >
          <Flex
            flexDirection={['column', 'row']}
            alignItems={['center', 'flex-start']}
          >
            <Box px={[5, 6]} pt={[5, 6]}>
              <Heading
                fontSize={[6, 8]}
                fontWeight={[400]}
                sx={{
                  color: colors.light
                }}
                mb={[3, 5]}
              >
                Sneak Peak
              </Heading>
              <Text mb={[5]}>
                Our cute and brave friends are very shy please don't stare them
                for too long 🥺
              </Text>
            </Box>
            <Flex
              sx={{ height: ['auto', '100vh'], width: ['250px'] }}
              alignItems={['center']}
              mb={[5, 0]}
            >
              <SlickSlider {...settings}>
                {URLS.map((number) => (
                  <Image
                    height='250px'
                    width='250px'
                    src={`/koala_${number}.png`}
                    alt={`koala ${number}`}
                    quality='70'
                  />
                ))}
              </SlickSlider>
            </Flex>
          </Flex>
        </Box>
        <SecondarySection />
      </Box>
    </>
  )
}

export default Gallery

const settings = {
  slidesToShow: 3,
  //   centerMode: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  infinite: true,
  vertical: true,
  verticalSwiping: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        // slidesToShow: 4
        // slidesToScroll: 1
        // vertical: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}
