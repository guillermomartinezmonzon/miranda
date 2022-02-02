import { useDispatch, useSelector } from "react-redux";
import {
  fetchRoomsList,
  selector,
  setRooms,
} from "../../redux/slices/RoomsSlice";
import update from "immutability-helper";
import { useCallback, useEffect, useState } from "react";
import { CardRoom } from "./CardRoom";
import ReactPaginate from "react-paginate";

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

    // Pagination
    const [offset, setOffset] = useState(0);
    const [perPage] = useState(8);
    const [pageCount, setPageCount] = useState(0);
    const [roomsData, setRoomsData] = useState([]); // rooms pagination
    const [roomsOrder, setRoomsOrder] = useState([]); // rooms order

    useEffect(() => {
        setPageCount(Math.ceil(roomsList.length/perPage))
        setRoomsData(roomsList.slice(offset, offset+perPage))
        setRoomsOrder(roomsData);
    }, [offset, roomsList])

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset((selectedPage + 1)*perPage)
    }

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
    }, [roomsOrder, roomsData]);
    
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
      <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}/>
    </>
  );
};
