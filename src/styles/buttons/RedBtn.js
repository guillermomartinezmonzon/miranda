import styled from "styled-components";

export const RedButton = styled.button`
  display: flex;
  align-items: center;
  justify-self: center;
  align-self: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.fairPink};
  border: none;
  padding: 10px;
  color: ${p => p.theme.colors.mainRed};
  height: 25px;
  width: 70px;
  cursor: pointer;
`;
