import { CardStyled } from "../../../styles/Card.styled";
import { ItemCardStyled } from "../../../styles/ItemCard.styled";

export default function CardContact(item) {
  return (
    <CardStyled key={item.item._id}>
      <ItemCardStyled>#{item.item._id}</ItemCardStyled>
      <ItemCardStyled>{item.item.subject}</ItemCardStyled>
      <ItemCardStyled>{item.item.fullName}</ItemCardStyled>
      <ItemCardStyled>{item.item.message}</ItemCardStyled>
      <ItemCardStyled>
        <div id="publish">Publish</div>
        <div id="archive">Archive</div>
      </ItemCardStyled>
    </CardStyled>
  );
}
