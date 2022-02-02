import { logout, useAuthDispatch } from "../../context";
import { Navigate } from "react-router";
import {FC, useState} from "react";
import styled from "styled-components";

interface Props {
    // any props that come into the component
}

export default function TopMenu(props: any) {
  const {title} = props;
  const dispatch = useAuthDispatch();  

  const [colapse, setColapse] = useState(false);

  function logOut() {
    logout(dispatch); //call the logout action
    <Navigate to="/login" />; //navigate to login page on logout
  };

  function colapseMenu() {
      setColapse(!colapse);
      const menu =document.getElementById("sideMenu"); 
      const panelIn = document.getElementById("panelIn");
      if (menu && panelIn){ 
         if (colapse) {
              menu.style.display = "none";
              panelIn.style.width = "100%";
         } else {    
              menu.style.display = "flex"; 
              panelIn.style.width = "82%";
         } 
      }
  };
    const TitleTopMenuStyled: FC<Props> = ({children}) => {
        return (
            <TitleTopMenu>
                {children}
            </TitleTopMenu>
        )
    }

  return (
    <TopMenuStyled>
      <TitleTopMenuStyled>
          <button onClick={colapseMenu}>
              <i className="fas fa-exchange-alt fa-3x"></i>
          </button>
          {title}
      </TitleTopMenuStyled>
      <IconsTopMenuStyled>
          <i className="far fa-envelope fa-lg">
              <div id="count">2</div>
          </i>
          <i className="far fa-bell fa-lg">
              <div id="count">87</div>
          </i>
          <button onClick={logOut}>
              <i className="fa fa-sign-out fa-lg"></i>
          </button>
      </IconsTopMenuStyled>    
    </TopMenuStyled>
  );
}


const TopMenuStyled = styled.div`
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

const TitleTopMenu = styled.div`
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
 
const IconsTopMenuStyled = styled.div`
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
  #count{
        position: relative;
        left: -10px;
        top: -10px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 20px;
        width: 20px;
        background-color: red;
        color: white;
        font-size: 14px;
        border-radius: 8px;
  }
`;
