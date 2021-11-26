import styled from "styled-components";

export const ItemCardStyled = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  max-width: 90%;
  margin-inline: 0.7rem;

  ${({ status }) =>
    status === "Refund" &&
    `
    text-size: 12px;
    border-radius: 20%;
    width: 130px;
    height: 30px;
  background: #FFEDEC;
  color: red;
`}

  ${({ status }) =>
    status === "Booked" &&
    `
    text-size: 12px;
    border-radius: 20%;
    width: 130px;
    height: 30px;
background: #E8FFEE;
color: green;
`}

${({ status }) =>
    status === "Pending" &&
    `
    text-size: 12px;
    border-radius: 20%;
    width: 130px;
    height: 30px;
background: #E2E2E2;
color: #707070;
`}

${({ status }) =>
    status === "Canceled" &&
    `
    text-size: 12px;
    border-radius: 20%;
    width: 130px;
    height: 30px;
background: #707070;
color: #E2E2E2;
`}
`;
