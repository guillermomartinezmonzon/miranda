import {  IconsTopMenuStyled, TitleTopMenuStyled, TopMenuStyled } from "./TopMenu.styled";
import { logout, useAuthDispatch } from "../../context";
import { Navigate } from "react-router";
import {useState} from "react";

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

  return (
    <TopMenuStyled>
      <TitleTopMenuStyled>
          <button onClick={colapseMenu}>
              <i className="fas fa-bars fa-3x"></i>
          </button>
          {title}
      </TitleTopMenuStyled>
      <IconsTopMenuStyled>
          <i className="far fa-envelope fa-lg"></i>
          <i className="far fa-bell fa-lg"></i>
          <button onClick={logOut}>
              <i className="fa fa-sign-out fa-lg"></i>
          </button>
      </IconsTopMenuStyled>    
    </TopMenuStyled>
  );
}
