import SimpleMap from "../../components/map/map";
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
        <SimpleMap/>
      </PanelContainerStyled>
    </Container>
  );
}
