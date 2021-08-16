import styled, { css } from "styled-components";

export default styled.button`
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 32px;
  background: transparent;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  padding: 8px 16px;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: rgb(130, 65, 255);
  }
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
  ${({ disabled, theme }) =>
    disabled &&
    css`
      color: rgb(143, 143, 143);
      border-color: rgb(143, 143, 143);
    `}
`;
