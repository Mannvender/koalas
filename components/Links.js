import styled, { css } from 'styled-components'
import { Link as LinkBase } from 'rebass'

export const Link = styled(LinkBase)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.light2};
  font-size: 1.4rem;
  font-family: inherit;
`

export const NavLink = styled(Link)`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.light1};
  ${(props) =>
    props.active &&
    css`
      border-bottom: 1px solid ${props.theme.colors.accent1};
    `};
`
