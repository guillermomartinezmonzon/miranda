import { useLocation } from "react-router";
import { IconLinkStyled, LinksContainer, LinkStyled } from "./Link.styled";
import Logo from "./logo";
import { StyledSideMenu } from "./SideMenu.styled";
import UserLogged from "./UserLogged/UserLogged";

export default function SideMenu() {
  let path = useLocation().pathname;

  return (
    <StyledSideMenu id="sideMenu">
          <Logo/>
          <LinksContainer> 
              <LinkStyled path={path.length < 2  ? 1 : 0} to="/">
                  <IconLinkStyled/>
                  Dashboard
              </LinkStyled>
              <LinkStyled path={path.includes("bookings") ?  1 : 0} to="/bookings">
                Bookings
              </LinkStyled>
              <LinkStyled path={path.includes("rooms") ? 1 :  0} to="/rooms">
                 Rooms
              </LinkStyled>
              <LinkStyled path={path.includes("contact") ? 1 : 0} to="/contact">
                Contact
              </LinkStyled>
              <LinkStyled path={path.includes("users") ? 1 : 0} to="/users">
                Users
              </LinkStyled>
          </LinksContainer>
      <UserLogged />
    </StyledSideMenu>
  );
}
