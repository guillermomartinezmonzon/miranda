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
      if (menu){ 
         if (colapse) {
              menu.style.display = "none";
         } else {    
              menu.style.display = "flex"; 
         } 
      }
  };

  return (
    <TopMenuStyled>
      <TitleTopMenuStyled>
          <button onClick={colapseMenu}>
              <i className="fas fa-bars fa-lg"></i>
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
