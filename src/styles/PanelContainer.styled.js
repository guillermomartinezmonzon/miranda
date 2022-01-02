import styled from "styled-components";

export const PanelContainerStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  width: ${props => props.theme.sizes.widthIn}px;
  margin-left: ${props => props.theme.sizes.sizeSideMenu}px;
  background-color: ${props => props.theme.colors.bg};
`;

export const InContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding:  ${p => p.theme.sizes.cardsPadding}px ${p => p.theme.sizes.cardsPadding/3}px;
  padding-top: ${p => p.theme.sizes.cardsPadding}px;
  width: 100%;
  margin-left: ${props => props.theme.sizes.InPadding}px;
  background-color: ${props => props.theme.colors.desert};
`;
