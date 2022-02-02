import styled from "styled-components";

export const CardLoggedStyled = styled.div`
  width: 233px;
  height: 230px;
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 20px 30px #00000014;
  img{
    height: 100px;
    width: 90px;
  }
  label {
    color: ${props => props.theme.colors.mainRed};
  }
  p{
    margin: 0;
  }
  h3{
    margin: 0;
  }
  input {
	background: ${props => props.theme.colors.desert};
	padding: 6px;
	display: inline-block;
	border-radius: 9999em;
    border: none;
}
`;
