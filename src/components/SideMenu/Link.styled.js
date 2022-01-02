import { Link } from "react-router-dom";
import styled from "styled-components";

const height = "42px";

export const ImgStyled = (url) => {
    return (
        <ImgDivStyled url={url}/>
    )
}

export const ImgDivStyled = styled.div`
 background: ${p => `url(${p.url}) no-repeat top center`};
 height: ${height};
 width: ${height};
 background-repeat: no-repeat;
 background-position: cover; 
 background-size: auto ${height};
`

export const LinksContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 52px;
  padding-left: ${props => props.theme.sizes.sizeSideMenu/2}px;
  position: relative;
  width: ${props => props.theme.sizes.sizeSideMenu}px;
`

export const LinkStyled = styled(Link)(({ path, theme }) => ({
  color: path ? theme.colors.mainRed : theme.colors.mainGreen,
  textDecoration: "none",
  marginLeft: "20px",
  display: "flex",
  alignItems: "center",
  textAlign: "left",
    fontSize: "22px",  
  fontWeight: "500",
}));


export const IconLinkStyled = styled.div`
    height: ${height},
    width: ${height},
    background-image: url(${props => props.path ? props.imgUrl1 : props.imgUrl0});
`
