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
  width: "100%",
    display: 'flex',
  alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
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
    [roomsOrder, roomsList]
  );
  const renderCard = (room, index) => {
    const {
        images,
        number,
        name,
        _id,
        type,
        facilities,
        price,
        priceOffer,
        status
    } = room;
    return (
      <CardRoom
        index={index}
        moveCard={moveCard}
        key={index}
        images={images}
        number={number}
        name={name}
        _id={_id}
        type={type}
        facilities={facilities}
        price={price}
        priceOffer={priceOffer}
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
