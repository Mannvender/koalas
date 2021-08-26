import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 100%;
  border: none;
  background-color: ${(props) =>
    props.disabled ? props.theme.colors.dark2 : props.bgColor};
  color: ${(props) => props.color};
  cursor: pointer;
  font-weight: 600;
  padding: 5px;
  font-size: 1rem;
  transition: background-color 0.4s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.colors.dark};
  }
  @media (min-width: 1024px) {
    font-size: 1.1rem;
    height: 56px;
    width: 100%;
  }
`;

export default StyledButton;
