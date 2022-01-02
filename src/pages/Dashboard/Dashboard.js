import SideMenu from "../../components/SideMenu/SideMenu";
import TopMenu from "../../components/TopMenu/TopMenu";
import { Container } from "../../styles/Container.styled";
import { InContainerStyled, PanelContainerStyled } from "../../styles/PanelContainer.styled";
import {ChartContainerStyled} from "./Chart/chart.styled";
import {Map} from "./map/map.styled";

export default function App() {
    const title="Dashboard";
    return (
        <Container>
            <SideMenu />
            <PanelContainerStyled>
                <TopMenu title={title}/>
                <InContainerStyled>
                    <Map/>
                    <ChartContainerStyled/>
                </InContainerStyled>    
          </PanelContainerStyled>
        </Container>
  );
}
