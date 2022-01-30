import { CardStyled } from "../../../styles/Card.styled";
import { ItemCardStyled } from "../../../styles/ItemCard.styled";

export default function CardUser(user) {
  return (
    <CardStyled key={user.user.id}>
      <ItemCardStyled customWidht={10}>{user.user.name}</ItemCardStyled>
      <ItemCardStyled customWidht={10}>{user.user.email}</ItemCardStyled>
      <ItemCardStyled customWidht={10}>{user.user.startDate}</ItemCardStyled>
      <ItemCardStyled customWidht={10}>{user.user.phone}</ItemCardStyled>
      <ItemCardStyled customWidht={10}>{user.user.description}</ItemCardStyled>
      <ItemCardStyled customWidht={10}>{user.user.status}</ItemCardStyled>
      <ItemCardStyled customWidht={10}>{user.user.job}</ItemCardStyled>
      <ItemCardStyled customWidht={10}>{user.user.image}</ItemCardStyled>
    </CardStyled>
  );
}
