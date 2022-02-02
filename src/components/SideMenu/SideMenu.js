import styled from "styled-components";
import { useLocation } from "react-router";
import UserLogged from "./UserLogged/UserLogged";
import {Link} from "react-router-dom";

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
          <FooterSideMenu/>
    </StyledSideMenu>
  );
}

function FooterSideMenu(){
    return(
        <div className="footer">
            <h3>Hotel Admin Dashboard</h3>
            <span>&copy; 2022 All Rights Reserved</span>
            <p>Made with ♥  for gmonzon</p>
        </div>
    )
}

function Logo() {
  return (
    <div className="logo">
          <div className="hotel-container">
            <img className="hotel" src="./img/hotel2.png" />
            <img
              className="hotel-1"
              src="./img/hotel.png"
            />
          </div>
          <div className="flex-col">
            <img
              className="trazado-1948"
              src="./img/trazado.png"
            />
            <div
              className="hotel-admin-dashboard"
            >
              Hotel Admin Dashboard
            </div>
          </div>
    </div>
  );
}

const StyledSideMenu = styled.div`
  position: fixed;
  width: 18%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.bg};

  .footer {
        margin-top: 6%;
        height: 20%;
        display: flex;
        flex-direction: column;
        justify-self: flex-end;
        align-self: center;
      color: gray;
      font-size: 14px;
      h3{
         color: black;
      }
  }

  .logo {
      box-shadow: 13px 3px 40px #00000005;
      align-items: flex-end;
      display: flex;
      height: 57px;
      justify-content: center;
      margin-right: 30px;
      width: 90%;

      .hotel-container {
          align-items: flex-start;
          display: flex;
          flex-direction: column;
          margin-bottom: 0;
          width: 52px;
        }

      .hotel {
          height: 17px;
          margin-left: 0.94px;
          object-fit: cover;
          width: 46px;
        }

      .hotel-1 {
          height: 40px;
          object-fit: cover;
          width: 47px;
        }

      .flex-col {
          align-items: flex-start;
          display: flex;
          flex-direction: column;
          margin-bottom: -2.59px;
          margin-left: 11px;
          min-height: 51px;
          width: 144px;
        }

      .trazado-1948 {
          height: 23px;
          margin-left: 0.47px;
          object-fit: cover;
          width: 72px;
        }

      .hotel-admin-dashboard {
          letter-spacing: 0;
          line-height: 12px;
          margin-top: 9px;
          min-height: 19px;
          white-space: nowrap;
        }
    }
`;

const LinkStyled = styled(Link)(({ active, theme }) => ({
  color: active ? theme.colors.mainRed : theme.colors.mainGreen,
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  textAlign: "left",
  fontSize: "22px",  
  fontWeight: "500",
  margin: "20px",  
}));


const LinksContainer = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  widht: 100%; 
  position: relative;
`
