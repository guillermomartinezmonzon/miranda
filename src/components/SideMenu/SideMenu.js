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
              <LinkStyled to="/" active={path === '/'} >
                  Dashboard
              </LinkStyled>
              <LinkStyled to="/bookings" active={path === '/bookings'}>
                Bookings
              </LinkStyled>
              <LinkStyled to="/rooms" active={path === '/rooms'}>
                 Rooms
              </LinkStyled>
              <LinkStyled to="/contact" active={path === '/contact'}>
                Contact
              </LinkStyled>
              <LinkStyled to="/users" active={path === '/users'}>
                Users
              </LinkStyled>
          </LinksContainer>
      <UserLogged />
    </StyledSideMenu>
  );
}
