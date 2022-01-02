import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { CardRoomContainer } from "./CardRoomContainer";
import SideMenu from "../../components/SideMenu/SideMenu";
import TopMenu from "../../components/TopMenu/TopMenu";
import { Container } from "../../styles/Container.styled";
import { InContainerStyled, PanelContainerStyled } from "../../styles/PanelContainer.styled";

export default function Rooms() {
  return (
    <Container>
      <SideMenu />
      <PanelContainerStyled>
        <TopMenu title={"Rooms"}/>
        <InContainerStyled>  
            <DndProvider backend={HTML5Backend}>
                <CardRoomContainer />
            </DndProvider>
        </InContainerStyled>    
      </PanelContainerStyled>
    </Container>
  );
}
