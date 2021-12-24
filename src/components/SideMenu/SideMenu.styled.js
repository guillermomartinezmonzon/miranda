import styled from "styled-components";

// export const StyledSideMenu = styled.nav`
//   font-family: "Poppins";
//   font-size: 15px;
//   display: flex;
//   align-self: flex-start;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   text-size: 40px;
// `;

export const StyledSideMenu = styled.div`
  position: fixed;
  width: 345px;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  align-items: center;
  min-height: 1812px;
  background-color: var(--white);
  box-shadow: 13px 3px 40px #00000005;
`;
