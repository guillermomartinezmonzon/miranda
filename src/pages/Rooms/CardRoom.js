import styled from 'styled-components';
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const styleImg = {
  width: "30px",
  height: "30px",
};

export const CardRoom = ({
  index,
  moveCard,
  id,
  room_name,
  bed_type,
  room_floor,
  facilities,
  status,
  image,
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
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drag(drop(ref));
  return (
    <RoomCardStyled ref={ref} data-handler-id={handlerId}>
      <RoomItemCardStyled>
        <img style={styleImg} src={image} alt="" />
      </RoomItemCardStyled>
      <RoomItemCardStyled>{room_name}</RoomItemCardStyled>
      <RoomItemCardStyled>{bed_type}</RoomItemCardStyled>
      <RoomItemCardStyled>{room_floor}</RoomItemCardStyled>
      <RoomItemCardStyled>{facilities}</RoomItemCardStyled>
      <RoomItemCardStyled>{image}</RoomItemCardStyled>
      <RoomItemCardStyled>{status}</RoomItemCardStyled>
    </RoomCardStyled>
  );
};

const RoomCardStyled = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    flex-direction: row;
    background-color: white;
    border-radius: 8px;
    height: ${p => p.theme.sizes.cardHeight}px;
    width: 90%;
    white-space:nowrap;
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
    align-items: center;
    justify-content: flex-start;
    width: ${p => p.customWidht}};

    i{
        margin-inline: 20px;
        background:none;
        border:none;
        cursor: pointer;
    }

    ${({ status }) =>
        status === "Check In" &&
        `
    `}

`;
