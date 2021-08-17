import styled from "styled-components";

const StyledButton = styled.button`
  border: 1px solid ${(props) => props.theme.colors.light2};
  background-color: transparent;
  border-radius: 50%;
  color: ${(props) => props.theme.colors.light1};
  cursor: pointer;
  /* box-shadow: 0 4px 12px ${(props) => props.theme.colors.primary}; */
`;

export default StyledButton;
