import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStyled = styled(Link)(({ path, theme }) => ({
  color: path ? theme.colors.mainRed : theme.colors.mainGreen,
  textDecoration: "none",
  marginLeft: "20px",
}));
