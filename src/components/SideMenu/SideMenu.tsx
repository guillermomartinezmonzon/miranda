import { useLocation } from "react-router";
import { IconLinkStyled, LinkStyled } from "./Link.styled";
import { StyledSideMenu } from "./SideMenu.styled";
import UserLogged from "./UserLogged/UserLogged";

export default function SideMenu() {
  let path = useLocation().pathname;

  return (
    <StyledSideMenu>
      <div>
        <img src="./img/logo.png" alt="logo" width="70%" />
      </div>
      <LinkStyled path={path.length < 2  ? 1 : 0} to="/">
          <IconLinkStyled 
             path={path.length < 2  ? 1 : 0}
             imgUrl0={"./img/iconLinkDashboard0.png"}
              imgUrl1={"./img/iconLinkDashboard1.png"}
          />
          Dashboard
      </LinkStyled>
      <br />
      <LinkStyled path={path.includes("users") ? 1 : 0} to="/users">
        Users
      </LinkStyled>
      <br />
      <LinkStyled path={path.includes("bookings") ?  1 : 0} to="/bookings">
        Bookings
      </LinkStyled>
      <br />
      <LinkStyled path={path.includes("contact") ? 1 : 0} to="/contact">
        Contact
      </LinkStyled>
      <br />
      <LinkStyled path={path.includes("rooms") ? 1 :  0} to="/rooms">
        Rooms
      </LinkStyled>
      <UserLogged />
    </StyledSideMenu>
  );
}
