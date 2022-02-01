import styled from 'styled-components';
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const styleImg = {
  width: "30px",
  height: "30px",
};

/*
    * Foto
- Número de la habitación.
- ID de la habitación
- Room Type (sustituir por Bed Type). Tipo de habitación
- Amenities (sustituir por Facilities). Servicios incluidos
- Price (sustituir por Rate). Precio regular
- Offer Price (campo nuevo). Precio oferta
- Status Available / Booked. Estado en el día en curso (Disponible / Ocupada)
    */


export const CardRoom = ({
  index,
  moveCard,
  images,
    number,
    name,
    _id,
    type,
    facilities,
    price,
    priceOffer,
    status
}) => {
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: "CARD",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: "CARD",
    item: () => {
      return { _id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drag(drop(ref));

  return (
    <RoomCardStyled ref={ref} data-handler-id={handlerId}>
      <RoomItemCardStyled customWidht="5%">
        <img style={styleImg} src={images[0]} alt="" />
      </RoomItemCardStyled>
      <RoomItemCardStyled customWidht="20%">
          <span>{name}</span>
          <p>{_id}</p>
      </RoomItemCardStyled>
      <RoomItemCardStyled customWidht="15%">{type}</RoomItemCardStyled>
      <RoomItemCardStyled customWidht="33%">{facilities}</RoomItemCardStyled>
      <RoomItemCardStyled customWidht="5%">{price}</RoomItemCardStyled>
      <RoomItemCardStyled customWidht="5%">{priceOffer}</RoomItemCardStyled>
      <RoomItemCardStyled customWidht="10%" status={status}>{status}</RoomItemCardStyled>
    </RoomCardStyled>
  );
};
const RoomCardStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    flex-direction: row;
    background-color: white;
    border-radius: 8px;
    height: ${p => p.theme.sizes.cardHeight}px;
    width: 95%;
    margin: 3px;
    :hover {
        background-color: ${props => props.theme.colors.bg};
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
`

const RoomItemCardStyled = styled.div`
    text-align: left;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: ${p => p.customWidht}};
    margin: 0.5%;

    p{
        font-size: 13px;
        margin: 0;
        color: ${p=>p.theme.colors.mainGreen};
    }

    i{
        margin-inline: 20px;
        background:none;
        border:none;
        cursor: pointer;
    }

    ${({ status }) =>
        status === "booked" &&
        `
        &:hover{
            cursor:pointer;
        }
        align-items: center;
        justify-content: center;
        text-size: 12px;
        border-radius: 20px;
        background-color: #FFEDEC;
        border-radius: 12px;
        color: red;
        font-weight: bold;
        height: 70%;
        width: ${p=>p.customWidht};
    `}

    ${({ status }) =>
        status === "available" &&
        `
        &:hover{
            cursor:pointer;
        }
        align-items: center;
        justify-content: center;
        text-size: 12px;
        border-radius: 20px;
        background: #E8FFEE;
        color: #5AD07A;
        font-weight: bold;
        height: 70%;
        width: ${p=>p.customWidht};
    `}

`;
