import { Navigate } from "react-router";
import { CardStyled } from "../../../styles/Card.styled";
import { ItemCardStyled } from "../../../styles/ItemCard.styled";

export default function CardBooking(item) {
  function handleNotes(notes) {
    document.getElementById("modalNotes").style.display = "block";
    document.getElementById("modalNotes__txt").textContent = item.item.notes;
    document.getElementById("modalNotes__btn").onclick = function () {
      document.getElementById("modalNotes").style.display = "none";
    };
  }
  function handleMore() {
    console.log("handleMore");
    <Navigate to={`/bookings/:${item.item.id}`} />;
  }
  return (
    <CardStyled key={item.item.id}>
      <ItemCardStyled>
        <img
          width="30"
          height="30"
          src="https://cdn.schoolstickers.com/products/en/819/10MM_SMILE-03.png"
          alt=""
        />
      </ItemCardStyled>
      <ItemCardStyled>{item.item.guest_name}</ItemCardStyled>
      <ItemCardStyled>{item.item.order_date}</ItemCardStyled>
      <ItemCardStyled>{item.item.check_in}</ItemCardStyled>
      <ItemCardStyled>{item.item.check_out}</ItemCardStyled>
      <ItemCardStyled notes={item.item.notes}>
        <button id="view_notes_btn" onClick={handleNotes}>
          Notes
        </button>
      </ItemCardStyled>
      <ItemCardStyled>{item.item.room_type}</ItemCardStyled>
      <ItemCardStyled id="status" status={item.item.status}>
        {item.item.status}
      </ItemCardStyled>
      <ItemCardStyled>
        <button id="booking-more" onClick={handleMore}>
          <i className="fas fa-ellipsis-v"></i>
        </button>
      </ItemCardStyled>
    </CardStyled>
  );
}
