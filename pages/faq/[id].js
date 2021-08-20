import React, { useState } from 'react'
import { Box, Heading, Text, Flex } from 'rebass'
import styled, { useTheme } from 'styled-components'
import { HiThumbUp, HiThumbDown } from 'react-icons/hi'

import BackHeader from '../../components/BackHeader'
import { FAQS } from '../../messages'

const StyledBox = styled(Box)`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #292929;
  cursor: pointer;
`

const Faq = ({ faq }) => {
  const { fonts } = useTheme()
  const [thumbDirection, setHelpfulness] = useState()
  const handleThumbDownClick = () => setHelpfulness('down')
  const handleThumbUpClick = () => setHelpfulness('up')
  return (
    <>
      <BackHeader label='' />
      <Box
        sx={{
          maxWidth: 1024,
          mx: 'auto',
          px: [4, 0],
          pt: [4]
        }}
      >
        <Heading
          fontSize={[2, 3]}
          fontFamily={fonts.body + ' !important'}
          mt={[2]}
          mb={[4]}
        >
          {faq.ques}
        </Heading>
        <Text fontWeight={300} mb={[6]}>
          {faq.ans}
        </Text>
        <Flex alignItems='center'>
          {!thumbDirection && (
            <>
              <Text>Was this answer helpful</Text>
              <StyledBox p={[2]} mx={[3]} onClick={handleThumbUpClick}>
                <HiThumbUp size='26px' color='#f9c95b' />
              </StyledBox>
              <StyledBox p={[2]} onClick={handleThumbDownClick}>
                <HiThumbDown size='26px' color='#f9c95b' />
              </StyledBox>
            </>
          )}
          {thumbDirection === 'up' && (
            <Text> Glad we could be helpful. Thanks for the feedback. </Text>
          )}
          {thumbDirection === 'down' && (
            <Text>
              We will try to add more information to this answer. Thanks for the
              feedback.
            </Text>
          )}
        </Flex>
      </Box>
    </>
  )
}

// This function gets called at build time
export function getStaticPaths() {
  // Call an external API endpoint to get posts

  // Get the paths we want to pre-render based on posts
  const paths = FAQS.map((faq) => ({
    params: { id: faq.id }
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const faq = FAQS.find((faq) => faq.id === params.id)

  // Pass post data to the page via props
  return { props: { faq } }
}

export default Faq
