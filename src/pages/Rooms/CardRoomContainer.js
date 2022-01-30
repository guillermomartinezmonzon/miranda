import { useDispatch, useSelector } from "react-redux";
import {
  fetchRoomsList,
  selector,
  setRooms,
} from "../../redux/slices/RoomsSlice";
import update from "immutability-helper";
import { useCallback, useEffect, useState } from "react";
import { CardRoom } from "./CardRoom";

const style = {
  width: "90%",
};
export const CardRoomContainer = () => {
  const dispatch = useDispatch();

  const { roomsList, loading } = useSelector(selector);

  useEffect(() => {
    dispatch(fetchRoomsList());
  }, []);

  const [roomsOrder, setRoomsOrder] = useState(roomsList);

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = roomsOrder[dragIndex];
      setRoomsOrder(
        update(roomsOrder, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      );
      dispatch(setRooms(roomsOrder));
    },
    [roomsOrder]
  );
  const renderCard = (room, index) => {
    const {
      _id,
      name,
      type,
      number,
      facilities,
      status,
    } = room;
    return (
      <CardRoom
        index={index}
        moveCard={moveCard}
        key={_id}
        id={_id}
        room_name={name}
        bed_type={type}
        room_floor={number}
        facilities={facilities}
        status={status}
      />
    );
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div style={style}>
        {roomsOrder.map((room, i) => renderCard(room, i))}
      </div>
    </>
  );
};
