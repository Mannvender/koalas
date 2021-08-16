import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  color: ${(props) => props.theme.colors.light};
  cursor: pointer;
  box-shadow: 0 4px 12px ${(props) => props.theme.colors.primary};
`;

export default StyledButton;
