import React from 'react'
import { Box, Flex, Heading, Text } from 'rebass'
import { useTheme } from 'styled-components'
import Image from 'next/image'
import SlickSlider from 'react-slick'
import 'intersection-observer'

import NavSection from '../components/NavSection'
import SecondarySection from '../components/SecondarySection'

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
            overflowY: 'auto'
          }}
        >
          <Flex flexDirection={['column', 'row']}>
            <Box px={[5, 6]} pt={[5, 6]}>
              <Heading
                fontSize={[6, 8]}
                fontWeight={[400]}
                sx={{
                  color: colors.light
                }}
                mb={[3, 5]}
              >
                Gallery
              </Heading>
              <Text mb={[5]}>
                Here is a sneak peak to some of our cute and brave Koalas. Hey
                easy there with your eyes don't stare them for too long, they
                are very shy 🥺
              </Text>
              <SlickSlider {...settings}>
                <Image
                  height='200px'
                  width='200px'
                  src='/koala_02.jpeg'
                  alt='koala 1'
                  quality='70'
                  data-original='/koala_02.jpeg'
                />
                <Image
                  height='200px'
                  width='200px'
                  src='/koala_05.jpeg'
                  alt='koala 2'
                  quality='70'
                  data-original='/koala_05.jpeg'
                />
                <Image
                  height='200px'
                  width='200px'
                  src='/koala_04.jpeg'
                  alt='koala 3'
                  quality='70'
                  data-original='/koala_04.jpeg'
                />
                <Image
                  height='200px'
                  width='200px'
                  src='/koala_03.jpeg'
                  alt='koala 5'
                  quality='70'
                  data-original='/koala_04.jpeg'
                />
              </SlickSlider>
            </Box>
          </Flex>
        </Box>
        <SecondarySection />
      </Box>
    </>
  )
}

export default Gallery

const settings = {
  slidesToShow: 2,
  centerMode: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true
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
