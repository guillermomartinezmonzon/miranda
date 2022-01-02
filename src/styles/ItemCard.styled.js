import styled from "styled-components";

export const ItemCardStyled = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  max-width: 90%;
  margin-inline: 0.7rem;

  #view_notes_btn {
    border: none;
    text-size: 12px;
    border-radius: 20%;
    padding: 0.4rem;
    background: #e8ffee;
    color: gray;
    :hover {
      cursor: pointer;
    }
  }

  #publish {
    margin-right: 5px;
    color: green;
  }

  #archive {
    margin-left: 5px;
    color: red;
  }

  #booking-more {
    border: none;
    background: none;
  }

  .status {

  }

  ${({ status }) =>
    status === "Refund" &&
    `
    align-items: center;
    text-size: 12px;
    border-radius: 20px;
    width: 130px;
    height: 30px;
  background: #FFEDEC;
  color: red;
`}

  ${({ status }) =>
    status === "Booked" &&
    `
    align-items: center;
    text-size: 12px;
    border-radius: 20px;
    width: 130px;
    height: 30px;
background: #E8FFEE;
color: green;
`}

${({ status }) =>
    status === "Pending" &&
    `
    align-items: center;
    text-size: 12px;
    border-radius: 20px;
    width: 130px;
    height: 30px;
background: #E2E2E2;
color: #707070;
`}

${({ status }) =>
    status === "Canceled" &&
    `
    align-items: center;
    text-size: 12px;
    border-radius: 20px;
    width: 130px;
    height: 30px;
background: #707070;
color: #E2E2E2;
`}
`;
