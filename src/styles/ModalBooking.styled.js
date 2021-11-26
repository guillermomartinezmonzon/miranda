import styled from "styled-components";

export const ModalBookingStyled = styled.nav`
  #modalNotes {
    display: none;
    overflow-y: hidden;
  }

  .back {
    position: absolute;
    background-color: black;
    z-index: 2;
    opacity: 0.8;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    z-index: 20;
    background-color: white;
    position: absolute;
    top: 20%;
    left: 30%;
    width: 600px;
    height: 400px;
  }

  #modalNotes__txt {
    margin: 50px;
    text-align: center;
  }

  #modalNotes__btn {
    margin: 20px;
  }
`;
