import { Box } from "rebass";
import styled from "styled-components";

const StyledBox = styled(Box)`
  :hover {
    background-color: transparent;
    color: ${(props) => props.theme.colors.light};
  }
`;

const Badge = ({ children, bgColor, border, onClick, ...rest }) => {
  return (
    <StyledBox
      sx={{
        display: "inline-block",
        bg: bgColor,
        px: 3,
        py: 1,
        fontSize: 2,
        my: 2,
        border,
        ...rest,
      }}
      onClick={onClick}
    >
      {children}
    </StyledBox>
  );
};

export default Badge;
