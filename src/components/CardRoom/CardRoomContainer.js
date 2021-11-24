import React, { useEffect, useState, useCallback } from "react";
import { getRooms } from "../../utils/getData";

import { CardRoom } from "./CardRoom";
import update from "immutability-helper";
const style = {
  width: 400,
};
export const CardRoomContainer = () => {
  const [rooms, setRooms] = useState([]);

  const populateRooms = async () => {
    setRooms(await getRooms());
  };

  useEffect(() => {
    populateRooms();
  }, []);

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = rooms[dragIndex];
      setRooms(
        update(rooms, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      );
    },
    [rooms]
  );
  const renderCard = (room, index) => {
    const {
      id,
      room_name,
      bed_type,
      room_floor,
      facilities,
      rate,
      status,
      image,
    } = room;
    console.log(room_name);
    return (
      <CardRoom
        index={index}
        moveCard={moveCard}
        key={id}
        id={id}
        room_name={room_name}
        bed_type={bed_type}
        room_floor={room_floor}
        facilities={facilities}
        rate={rate}
        status={status}
        image={image}
      />
    );
  };
  return (
    <>
      <div style={style}>{rooms.map((room, i) => renderCard(room, i))}</div>
    </>
  );
};

// const [cards, setCards] = useState([
//     {
//         id: 1,
//         text: 'Write a cool JS library',
//     },
//     {
//         id: 2,
//         text: 'Make it generic enough',
//     },
//     {
//         id: 3,
//         text: 'Write README',
//     },
//     {
//         id: 4,
//         text: 'Create some examples',
//     },
//     {
//         id: 5,
//         text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
//     },
//     {
//         id: 6,
//         text: '???',
//     },
//     {
//         id: 7,
//         text: 'PROFIT',
//     },
// ]);
