import { Box } from 'rebass'
import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'

import Input from './Input'

const Container = styled(Box)`
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.dark2};
  background-color: ${(props) => props.theme.colors.dark};
  font-weight: 300;
  overflow: hidden;
`
const SearchIcon = styled(FiSearch)`
  position: absolute;
  left: 8px;
  top: 50%;
  height: 60%;
  width: 48px;
  transform: translateY(-50%);
  cursor: pointer;
`

const SearchInput = (props) => {
  return (
    <>
      <Container pt={[2]} pb={[2]} pl={[5]} pr={[3]} my={[4]}>
        <Input {...props} />
        <SearchIcon />
      </Container>
    </>
  )
}

export default SearchInput
