import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { CardRoomContainer } from "../../components/CardRoom/CardRoomContainer";
import SideMenu from "../../components/SideMenu/SideMenu";

export default function Rooms() {
  return (
    <div className="Rooms">
      <h1>Rooms</h1>
      <SideMenu />
      <DndProvider backend={HTML5Backend}>
        <CardRoomContainer />
      </DndProvider>
    </div>
  );
}
