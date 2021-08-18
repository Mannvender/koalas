import styled from 'styled-components'

const StyledButton = styled.button`
  height: 48px;
  width: 48px;
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  color: ${(props) => props.theme.colors.light1};
  cursor: pointer;
  box-shadow: 0 4px 12px ${(props) => props.theme.colors.primary};
`

export default StyledButton
