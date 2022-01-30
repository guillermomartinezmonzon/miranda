import {Navigate, useNavigate} from 'react-router';
import styled from 'styled-components';
import ModalSpecialRequest from "../modal";
import AlertDialog from "../modal/ModalDelete";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookingsList } from '../../../redux/slices/BookingsSlice';

export default function CardBooking(item) {

  const navigate = useNavigate()
  const dispatch = useDispatch();

  function handleOpen(e, id){
      dispatch(fetchBookingsList())
      e.preventDefault();
      navigate(`/bookings/${id}`);
  }

  const orderDateFormated = item.item.orderDate && new Date(`${item.item.orderDate}`)
        .toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
  const checkInFormated = item.item.checkIn && new Date(`${item.item.checkIn}`)
        .toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
  const checkOutFormated = item.item.checkOut && new Date(`${item.item.checkOut}`)
        .toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});

  return (
      <BookingCardStyled key={item.item._id}>
        <BookingItemCardStyled customWidht="242px">
            <ImageGuest image={item.item.guest.image}/>
            <span>{item.item.guest.firstName}<br />{item.item.guest.lastName}</span>
        </BookingItemCardStyled>
        <BookingItemCardStyled customWidht="237px">{orderDateFormated}</BookingItemCardStyled>
        <BookingItemCardStyled customWidht="227px">{checkInFormated}</BookingItemCardStyled>
            <BookingItemCardStyled customWidht="227px">{checkOutFormated}</BookingItemCardStyled>
        <BookingItemCardStyled customWidht="240px">
            <ModalSpecialRequest specialRequest={item.item.specialRequest}/>
        </BookingItemCardStyled>
        <BookingItemCardStyled customWidht="186px">{item.item.room.type}</BookingItemCardStyled>
        <BookingItemCardStyled customWidht="126px">$ {item.item.price}</BookingItemCardStyled>
        <BookingItemCardStyled onClick={e => handleOpen(e, item.item._id)} customWidht="206px" id="status" status={item.item.status}>
            {item.item.status}
        </BookingItemCardStyled>
        <BookingItemCardStyled  style={{marginRight: 20}} customWidht="40px">
            <AlertDialog item={item}/>
        </BookingItemCardStyled>
    </BookingCardStyled>
  );
}

const ImageGuest = styled.div`
    background-image: url(${p=> p.image});
    background-repeat:no-repeat;
    background-position: center center; 
    border-radius: 25px;
    width: 60px;
    height: 60px;
`

const BookingCardStyled = styled.div`
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

const BookingItemCardStyled = styled.div`
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

    ${({ status }) =>
        status === "In Progress" &&
        `
        &:hover{
            cursor:pointer;
        }
        align-items: center;
        justify-content: center;
        text-size: 12px;
        border-radius: 20px;
        background-color: yellow;
        color: black;
        font-weight: bold;
        height: 70%;
        width: ${p=>p.customWidht};
    `}

    ${({ status }) =>
        status === "Check Out" &&
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
`;
