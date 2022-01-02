import styled from "styled-components";

export const CardStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  flex-direction: row;
  height: ${p => p.theme.sizes.cardHeight}px;
  width: ${props => props.theme.sizes.widthIn-15}px;
  margin-top: 3px;
  :hover {
    background-color: ${props => props.theme.colors.bg};
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;
