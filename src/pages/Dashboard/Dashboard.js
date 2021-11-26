import React from "react";
import SideMenu from "../../components/SideMenu/SideMenu";
import TopMenu from "../../components/TopMenu/TopMenu";
import { Container } from "../../styles/Container.styled";
import { PanelContainerStyled } from "../../styles/PanelContainer.styled";

export default function App() {
  return (
    <Container>
      <SideMenu />
      <PanelContainerStyled>
        <TopMenu />
        <h1>Dashboard</h1>
      </PanelContainerStyled>
    </Container>
  );
}
