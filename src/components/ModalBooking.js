import React from "react";
import { ModalBookingStyled } from "../styles/ModalBooking.styled";

export default function ModalBooking() {
  return (
    <ModalBookingStyled>
      <div id="modalNotes">
        <div className="back"></div>
        <div className="top">
          <h2>Notes:</h2>
          <br />
          <div id="modalNotes__txt"></div>
          <button id="modalNotes__btn">Close</button>
        </div>
      </div>
    </ModalBookingStyled>
  );
}
