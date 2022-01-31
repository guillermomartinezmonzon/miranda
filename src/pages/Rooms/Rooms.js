import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Layout from "../../components/layout";
import { CardRoomContainer } from "./CardRoomContainer";

export default function Rooms() {
  return (
      <Layout title="Rooms">
            <DndProvider backend={HTML5Backend}>
                <CardRoomContainer />
            </DndProvider>
          </Layout>
  );
}
