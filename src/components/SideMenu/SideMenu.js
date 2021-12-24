import { useLocation } from "react-router";
import { LinkStyled } from "./Link.styled";
import { StyledSideMenu } from "./SideMenu.styled";
import UserLogged from "./UserLogged/UserLogged";

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
      <UserLogged />
    </StyledSideMenu>
  );
}
