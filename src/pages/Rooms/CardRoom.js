import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { CardStyled } from "../../styles/Card.styled";
import { ItemCardStyled } from "../../styles/ItemCard.styled";

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
  rate,
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
    <CardStyled ref={ref} data-handler-id={handlerId}>
      <ItemCardStyled>
        <img style={styleImg} src={image} alt="" />
      </ItemCardStyled>
      <ItemCardStyled>{room_name}</ItemCardStyled>
      <ItemCardStyled>{bed_type}</ItemCardStyled>
      <ItemCardStyled>{room_floor}</ItemCardStyled>
      <ItemCardStyled>{facilities}</ItemCardStyled>
      <ItemCardStyled>{rate}</ItemCardStyled>
      <ItemCardStyled>{status}</ItemCardStyled>
    </CardStyled>
  );
};
