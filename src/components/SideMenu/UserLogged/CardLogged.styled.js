import styled from "styled-components";

export const CardLoggedStyled = styled.div`
  margin-top: 30px;
  width: 233px;
  height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 20px 30px #00000014;
  label {
    color: ${props => props.theme.colors.mainRed};
  }
  input {
	background: ${props => props.theme.colors.desert};
	padding: 6px;
	display: inline-block;
	border-radius: 9999em;
    border: none;
}
`;
