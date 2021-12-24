import { CardStyled } from "../../../styles/Card.styled";
import { ItemCardStyled } from "../../../styles/ItemCard.styled";

export default function CardContact(item) {
  return (
    <CardStyled key={item.item.id}>
      <ItemCardStyled>#{item.item.id}</ItemCardStyled>
      <ItemCardStyled>{item.item.date}</ItemCardStyled>
      <ItemCardStyled>{item.item.custome}</ItemCardStyled>
      <ItemCardStyled>{item.item.comment}</ItemCardStyled>
      <ItemCardStyled>
        <div id="publish">Publish</div>
        <div id="archive">Archive</div>
      </ItemCardStyled>
    </CardStyled>
  );
}
