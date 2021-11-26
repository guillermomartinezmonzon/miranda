import React from "react";
import { GreenBtn } from "../../styles/buttons/GrenBtn";
import { CardStyled } from "../../styles/Card.styled";
import { CardLoggedStyled } from "../../styles/CardLogged.styled";
import { ItemCardStyled } from "../../styles/ItemCard.styled";

export default function CardUserLogged() {
  return (
    <CardLoggedStyled>
      <img
        width="60"
        height="60"
        src="https://cdn-icons.flaticon.com/png/512/3006/premium/3006872.png?token=exp=1637852599~hmac=73a2762f5282b8bb5d9748c1521a83b7"
        alt=""
      />
      <h2>William Johanson</h2>
      <p>williamjohanson@gmail.com</p>
      <GreenBtn>Contact</GreenBtn>
    </CardLoggedStyled>
  );
}
