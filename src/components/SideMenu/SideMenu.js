import React from "react";
import { useLocation } from "react-router";
import { LinkStyled } from "../../styles/Link.styled";
import { StyledSideMenu } from "../../styles/SideMenu.styled";
import CardUserLogged from "../Cards/CardUserLogged";

export default function SideMenu() {
  let path = useLocation().pathname;

  return (
    <StyledSideMenu>
      <div>
        <img src="./logo.png" alt="logo" width="80%" />
      </div>
      <LinkStyled path={path === "/users" ? true : false} to="/users">
        Users
      </LinkStyled>
      <br />
      <LinkStyled path={path.length < 2 ? true : false} to="/">
        Dashboard
      </LinkStyled>
      <br />
      <LinkStyled path={path === "/bookings" ? true : false} to="/bookings">
        Bookings
      </LinkStyled>
      <br />
      <LinkStyled path={path === "/contact" ? true : false} to="/contact">
        Contact
      </LinkStyled>
      <br />
      <LinkStyled path={path === "/rooms" ? true : false} to="/rooms">
        Rooms
      </LinkStyled>
      <CardUserLogged />
    </StyledSideMenu>
  );
}
