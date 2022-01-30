import SideMenu from "../../components/SideMenu/SideMenu";
import TopMenu from "../../components/TopMenu/TopMenu";
import { Container } from "../../styles/Container.styled";
import { InContainerStyled, PanelContainerStyled } from "../../styles/PanelContainer.styled";
import {BookingsDown} from "./BookingsDown";
import Calendar from "./Calendar";
import {ChartContainerStyled} from "./Chart/chart.styled";
import {Head} from "./head";

export default function App() {
    const title="Dashboard";
    return (
        <Container>
            <SideMenu />
            <PanelContainerStyled id="panelIn">
                <TopMenu title={title}/>
                <Head/>
                <InContainerStyled id="in-dashboard">
                    {/* <Map/> */}
                    <Calendar/>
                    <ChartContainerStyled/>
                </InContainerStyled>    
                <BookingsDown/>
          </PanelContainerStyled>
        </Container>
  );
}
