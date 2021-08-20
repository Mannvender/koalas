import styled, { css, useTheme } from 'styled-components'
import Link from 'next/link'
import { Link as LinkBase, Box } from 'rebass'

export const LinkExternal = styled(LinkBase)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.light2};
  font-size: 1.4rem;
  font-family: inherit;
`

export const Container = styled(Box)`
  ${(props) =>
    props.active &&
    css`
      border-bottom: 1px solid ${props.theme.colors.accent1};
    `};
`
export const LinkInternal = ({ href, children, active, ...rest }) => {
  return (
    <Container active={active} {...rest}>
      <Link href={href}>{children}</Link>
    </Container>
  )
}
