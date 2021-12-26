import styled from "styled-components";

export const TopMenuStyled = styled.nav`
  position: relative;
  height: 120px;
  top: 0;
  left: 240px;
  z-index: -1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 90%;
  background-color: white;
`;

export const TitleTopMenuStyled = styled.div`
  letter-spacing: 0;
  line-height: 28px;
  min-height: 41px;
  white-space: nowrap;
`;
 
export const IconTopMenuStyled = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 70px;
`;
