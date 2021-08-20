import styled from 'styled-components'

const StyledButton = styled.button`
  height: 48px;
  width: 48px;
  border: none;
  background-color: ${(props) =>
    props.disabled ? props.theme.colors.dark2 : props.theme.colors.primary};
  border-radius: 50%;
  color: ${(props) => props.theme.colors.light1};
  cursor: pointer;
  box-shadow: 0 4px 12px ${(props) => props.theme.colors.primary};
  font-weight: 600;
  padding: 5px;
  font-size: 1rem;
  transition: background-color 0.4s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.colors.light};
  }
  @media (min-width: 1024px) {
    font-size: 1.1rem;
    height: 56px;
    width: 56px;
  }
`

export default StyledButton
