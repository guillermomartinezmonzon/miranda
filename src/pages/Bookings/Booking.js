import React from "react";
import { Link } from "react-router-dom";
import SideMenu from "../../components/SideMenu/SideMenu";
import TopMenu from "../../components/TopMenu/TopMenu";
import { Container } from "../../styles/Container.styled";
import { PanelContainerStyled } from "../../styles/PanelContainer.styled";

export default function Booking() {
  return (
    <Container>
      <SideMenu />
      <PanelContainerStyled>
        <TopMenu />
        <Link to="/">return</Link>
      </PanelContainerStyled>
    </Container>
  );
}
