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
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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
