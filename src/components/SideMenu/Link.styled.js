import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStyled = styled(Link)(({ path, theme }) => ({
  color: path ? theme.colors.mainRed : theme.colors.mainGreen,
  textDecoration: "none",
  marginLeft: "20px",
  height: "87px",
  display: "flex",
  alignItems: "center",
  textAlign: "left",
  fontWeight: "500",
}));

const LinkStyled2 = styled.div`
  height: 67px;
  display: flex;
  padding: 15.5px 56px;
  align-items: center;
  min-width: 345px;
  background-color: var(--white);
`;
