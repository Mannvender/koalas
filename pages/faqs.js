import React, { useState } from 'react'
import { Box, Heading, Text, Flex, Link as LinkRebass } from 'rebass'
import styled, { useTheme } from 'styled-components'
import { BsBoxArrowUpRight } from 'react-icons/bs'

import SearchInput from '../components/SearchInput'
import Badge from '../components/Badge'
import { LinkInternal as LinkBase } from '../components/Links'
import NavSection from '../components/NavSection'
import SecondarySection from '../components/SecondarySection'
import { FAQS } from '../messages'

const TagContainer = styled(Box)`
  border-bottom: 1px solid #3d3d3d;
`
const QuestionContainer = styled(Flex)`
  font-weight: 300;
  background-color: ${({ theme }) => theme.colors.darkGray};
`
const Link = styled(LinkBase)`
  &:hover {
    color: gray;
  }
`
export const TAGS = ['Minting', 'Technical', 'Team/Devs']
const Faqs = () => {
  const { colors, fonts } = useTheme()
  const [category, setCategory] = useState('')
  const [query, setQuery] = useState('')

  const handleTagClick = (tag) => {
    if (tag === category) setCategory('')
    else setCategory(tag)
  }
  const handleSearchInputChange = (e) => {
    const val = e.target.value
    setQuery(val)
  }

  return (
    // <>
    // </>
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: ['1fr', '1fr 6fr 1fr']
        }}
      >
        <NavSection />
        <Box
          id='faqs'
          sx={{
            maxHeight: ['auto', '100vh'],
            overflowY: 'auto'
          }}
        >
          <Flex flexDirection={['column', 'row']}>
            <Box px={[5]} pt={[5]} sx={{ flexBasis: '100%' }}>
              <Heading
                fontSize={[6, 8]}
                fontWeight={[400]}
                sx={{
                  color: colors.light
                }}
                mb={[3]}
              >
                Here to help
              </Heading>
              <Text mb={[5]} sx={{ color: colors.light1 }}>
                Find answers to your questions. It’s all here. Happy exploring!
              </Text>
              <Box
                sx={{
                  mb: [5]
                }}
              >
                <SearchInput
                  placeholder='Ask us anything'
                  style={{ fontWeight: 300 }}
                  onChange={handleSearchInputChange}
                  value={query}
                />
                <TagContainer mb={[4]}>
                  <Heading
                    fontSize={[2, 3]}
                    fontFamily={fonts.body + ' !important'}
                    my={[2]}
                  >
                    Find FAQs on
                  </Heading>
                  <Flex flexWrap='wrap' mb={[3]}>
                    {TAGS.map((tag, i) => (
                      <Badge
                        bgColor={
                          category === tag ? colors.accent1 : colors.darkGray
                        }
                        border={`solid 1px ${
                          category === tag ? colors.accent1 : '#3d3d3d'
                        }`}
                        cursor='pointer'
                        mr={[3]}
                        key={i}
                        onClick={() => handleTagClick(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </Flex>
                </TagContainer>
                <Heading
                  fontSize={[2, 3]}
                  fontFamily={fonts.body + ' !important'}
                  mt={[2]}
                  mb={[3]}
                >
                  Popular Questions
                </Heading>
                <QuestionContainer flexDirection='column' mb={[5]}>
                  {FAQS.filter((faq) =>
                    faq.ques
                      .toLocaleLowerCase()
                      .includes(query.toLocaleLowerCase())
                  )
                    .filter((faq) => faq.tags.includes(category) || !category)
                    .map((faq) => (
                      <Link href={'/faq/' + faq.id} key={faq.id} mb={[2]}>
                        {faq.ques}
                      </Link>
                    ))}
                </QuestionContainer>
                <Flex flexWrap='wrap'>
                  <Text color='darkGray' marginRight={[2]}>
                    Can’t find what you need? Get in touch with us.
                  </Text>
                  <Link href='/faqs#contact'>
                    <BsBoxArrowUpRight
                      height='16px'
                      style={{ cursor: 'pointer' }}
                    />
                  </Link>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
        <SecondarySection />
      </Box>
    </>
  )
}

export default Faqs
