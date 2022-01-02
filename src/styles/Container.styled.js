import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  width: 100%;
  padding: 0 10px;
  font-family: ${props => props.theme.fonts.mainFont};
`;
