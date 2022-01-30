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
  display: flex;
  width: 100%;
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
    align-items: center;
    justify-content: flex-start;
    margin-left: 30px;
    position: relative;
    width: 100%;
    font-size: 32px;
    i {
        margin: 15px;
        cursor: pointer;
    }
`;
 
export const IconsTopMenuStyled = styled.div`
    width: ${props => props.theme.sizes.widthTopMenuIcons}px;
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
