import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRoomsList,
  selector,
  setRooms,
} from "../../redux/slices/RoomsSlice";

import { CardRoom } from "./CardRoom";
import update from "immutability-helper";
const style = {
  width: 400,
};
export const CardRoomContainer = () => {
  const dispatch = useDispatch();

  const { roomsList, loading } = useSelector(selector);

  useEffect(() => {
    dispatch(fetchRoomsList());
  }, []);

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = roomsList[dragIndex];
      setRooms(
        update(roomsList, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      );
    },
    [roomsList]
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

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div style={style}>{roomsList.map((room, i) => renderCard(room, i))}</div>
    </>
  );
};
