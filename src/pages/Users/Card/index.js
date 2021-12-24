import { CardStyled } from "../../../styles/Card.styled";
import { ItemCardStyled } from "../../../styles/ItemCard.styled";

export default function CardUser(user) {
  return (
    <CardStyled key={user.user.id}>
      <ItemCardStyled>{user.user.user_name}</ItemCardStyled>
      <ItemCardStyled>{user.user.job_desk}</ItemCardStyled>
      <ItemCardStyled>{user.user.schedule}</ItemCardStyled>
      <ItemCardStyled>{user.user.phone}</ItemCardStyled>
      <ItemCardStyled>{user.user.status}</ItemCardStyled>
    </CardStyled>
  );
}
