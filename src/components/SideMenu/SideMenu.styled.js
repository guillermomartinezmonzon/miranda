import styled from "styled-components";

export const StyledSideMenu = styled.div`
  position: fixed;
  width: ${props => props.theme.sizes.sizeSideMenu}px;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  align-items: center;
  min-height: 1812px;
  background-color: ${props => props.theme.colors.bg};


  .logo {
      box-shadow: 13px 3px 40px #00000005;
      align-items: flex-end;
      display: flex;
      height: 57px;
      justify-content: center;
      margin-right: 30px;
      width: 100%;

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
