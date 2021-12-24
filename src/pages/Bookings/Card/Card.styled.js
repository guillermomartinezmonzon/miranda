import styled from "styled-components";

export const CardStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  flex-direction: row;
  width: 90%;
  padding: 0.5rem 1rem;
  margin-top: 3px;
  :hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  #view_notes_btn {
    border: none;
    text-size: 12px;
    border-radius: 20%;
    padding: 0.4rem;
    background: #e8ffee;
    color: gray;
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
    :hover {
      cursor: pointer;
    }
  }
`;
