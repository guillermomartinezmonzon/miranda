import styled from "styled-components";

export const PanelContainerStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  width: ${props => props.theme.sizes.widthIn}px;
  margin-left: ${props => props.theme.sizes.sizeSideMenu}px;
  background-color: ${props => props.theme.colors.bg};
  #in-dashboard {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const InContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-left: ${props => props.theme.sizes.InPadding}px;
  background-color: ${props => props.theme.colors.desert};

`;
