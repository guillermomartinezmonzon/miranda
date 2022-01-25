import styled from "styled-components";

export const TitleTopMenuStyled = ({children}) => {
    return (
        <TitleTopMenu>
            {children}
        </TitleTopMenu>
    )
}

export const TopMenuStyled = styled.div`
  height: ${props => props.theme.sizes.heightTopMenu}px;
  position: fixed;
  top: 0;
  left: ${p=>p.theme.sizes.sizeSideMenu}px;
  display: flex;
  align-items: center;
  justify-items: space-around;
  background-color: ${props => props.theme.colors.bg};
  button {
      background: none;
      border: none;
  }
`;

export const TitleTopMenu = styled.div`
    display: flex;
    position: fixed;
    left: ${props => props.theme.sizes.sizeSideMenu};
    font-size: 32px;
    i {
        margin: 15px;
        cursor: pointer;
    }
`;
 
export const IconsTopMenuStyled = styled.div`
    width: ${props => props.theme.sizes.widthTopMenuIcons}px;
    margin-left: ${props => props.theme.sizes.widthIn - props.theme.sizes.widthTopMenuIcons}px;
   display: flex;
   justify-content: center;
   align-items: center;
  i {
      color: ${props => props.theme.colors.eden};
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 70px;
      width: 70px;
      &:hover{
        cursor: pointer;
      }
  }
`;
