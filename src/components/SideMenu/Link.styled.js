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
  widht: ${props => props.theme.sizes.sizeSideMenu - (props.theme.sizes.sizeSideMenu/2)}
  padding-left: ${props => props.theme.sizes.sizeSideMenu/2}px;
  position: relative;
  width: ${props => props.theme.sizes.sizeSideMenu}px;
`

// export const LinkStyled = styled(Link)`
//        color: ${p => p.theme.colors.mainGreen };
//        text-decoration: none;
//        display: flex;
//        align-items: center;
//        text-align: left;
//        font-size: 22px;  
//        font-weight: 500;
//        margin: 20px;  
//        margin-left: 100px;  

//         &:hover{
//             color: ${p => p.theme.colors.greenLight};
//         }
//         &:active{
//             color: ${p => p.theme.colors.mainRed};
//         }
//         &:focus {
//             color: ${p => p.theme.colors.mainGreen};
//         }
//         &:target {
//             color: ${p => p.theme.colors.greenLight};
//         }
// `;

export const LinkStyled = styled(Link)(({ active, theme }) => ({
  color: active ? theme.colors.mainRed : theme.colors.mainGreen,
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  textAlign: "left",
    fontSize: "22px",  
  fontWeight: "500",
  margin: "20px",  
    marginLeft: "100px",  
}));


export const IconLinkStyled = styled.div`
    height: ${height},
    width: ${height},
    background-image: url(${props => props.path ? props.imgUrl1 : props.imgUrl0});
`
