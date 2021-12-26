import { Link } from "react-router-dom";
import styled from "styled-components";

const height = "67px";

export const LinkStyled = styled(Link)(({ path, theme }) => ({
  color: path ? theme.colors.mainRed : theme.colors.mainGreen,
  textDecoration: "none",
  marginLeft: "20px",
  height: height,
  display: "flex",
  alignItems: "center",
  textAlign: "left",
  fontWeight: "500",
}));


export const IconLinkStyled = styled.div`
    height: ${height},
    width: ${height},
    background-image: url(${props => props.path ? props.imgUrl1 : props.imgUrl0});
`
