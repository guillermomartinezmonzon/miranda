import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {fetchBooking, selector } from "../../redux/slices/BookingsSlice";
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import Layout from "../../components/layout";

let guestImage;

export default function Booking() {

    const element = useParams();
    const dispatch = useDispatch();
    const { booking, loading } = useSelector(selector);
    

    useEffect(() => {
        dispatch(fetchBooking(element));
    }, []);
    
    /*
        *
        *Izquierda
Nombre y apellidos
ID de la reserva
Check in (Fecha de entrada)
Check out (Fecha de salida)
Room info (Número de habitación)
Price (Precio de la reserva completa)
Special request (el mensaje completo)
Amenities que incluye la habitación
-
-
-
- A la derecha
Carrusel de fotos (de la habitación)
Tipo de habitación
Descripción (de la habitación)
Estado (CHECK IN verde, CHECK OUT rojo, IN PROGRESS amarillo)
        *
        * */

    function CardBookingDetails(){
        guestImage = booking.guest.image;
        return (
            <BookingDetailsStyled>
                <Left/>
                <ImageStyled>
                    <p>{booking.room.name}</p>
                    <span>{booking.room.facilities}</span>
                </ImageStyled>

            </BookingDetailsStyled> 
        )
    }
    function Left(){
        return (
            <LeftStyled>
                <Head guestImage={guestImage}>
                    <div className="head-image"></div>
                    <div className="head-contact">
                        <span className="head-contact-title">{`${booking.guest.lastName}, ${booking.guest.firstName}`}</span>
                        <span className="head-contact-id">{`${booking._id}`}</span>
                        <div className="head-contact-contact">
                            <i className="fas fa-phone fa-2x"></i>
                            <div className="head-contact-contact-message">
                                <i className="fas fa-comments fa-2x"></i>
                                <span>Message</span>
                            </div>
                        </div>
                    </div>
                    <i className="fas fa-bars"></i>
                </Head>
                <Dates>
                    <div className="date">
                        <span className="date-title">Check In</span>
                        <span className="date-date">{booking.checkIn}</span>
                    </div>
                    <div className="date">
                        <span className="date-title">{booking.checkOut && "Check Out"}</span>
                        <span className="date-date">{booking.checkOut}</span>
                    </div>
                </Dates>
                <RoomInfo>
                    <div className="date">
                        <span className="date-title">Room Info</span>
                        <span className="date-date">{`${booking.room.number} | ${booking.room.type}`}</span>
                    </div>
                    <div className="date">
                        <span className="date-title">{booking.price && "Price"}</span>
                        <span className="date-date">{`${booking.price}/night`}</span>
                    </div>
                </RoomInfo>
                    <span className="room-description">{booking.room.facilities}</span>
                <Facilities>                           
                    <div className="facility">
                        <i className="fas fa-bed"></i>
                        <span>Double Bed</span>
                    </div>
                    <div className="facility">
                        <i className="fas fa-shield-alt"></i>
                        <span>24 Hours guard</span>
                    </div>
                    <div className="facility">
                        <i className="fas fa-wifi"></i>
                        <span>Free Wifi</span>
                    </div>
                    <div className="facility">
                        <span>2 Bathroom</span>
                    </div>
                    <div className="facility">
                        <span>Air Conditioner</span>
                    </div>
                    <div className="facility">
                        <span>Television</span>
                    </div>
                </Facilities>
            </LeftStyled>
        )
    }

    if( loading || !booking._id){
        return (
            <Layout title={"Booking"}>
              <p>Please Wait</p>
            </Layout>
        )
    }else{
        return (
            <Layout title={"Booking"}>
                <CardBookingDetails/>
            </Layout>
        )
    }
}
   

const BookingDetailsStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 40px;
    border-radius: 25px;
    background-color: white;
    width: 90%;
    height: 692px;
`

const LeftStyled = styled.div`
    .room-description{
        margin-inline: 8%;
    }
  flex-direction: column;
  display: flex;
  width: 50%;
  height: 100%;
  align-items: stretch;
`
const Head = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    .head-image{
        height: 200px;
        margin-inline: 1%;
        margin-left: 2%;
        flex-grow: 1;
        background-image: url(${p=>p.guestImage});
        background-position: center;
        background-repeat: no-repeat;
    }
    .head-contact{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        margin-inline: 1%;
        margin-left: 3%;
        flex-grow: 1;
        background-color: white;
    }
    .head-contact-id{
        color: ${p => p.theme.colors.mainGreen};
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        heigh: 20%;
        width: 100%;
    }
    .head-contact-title{
        font-size: 22px;
        margin-top: 10%;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        heigh: 20%;
        width: 100%;
    }
    .head-contact-contact{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        heigh: 20%;
        width: 100%;
    }
    .head-contact-contact-message{
        padding: 2%;
        margin-top:2%;
        border-radius: 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        i{ 
            color: white;
            margin-top: 4%;
        }
        color: white;
        background-color: ${p => p.theme.colors.mainGreen};
    }
    i{
        color: ${p => p.theme.colors.mainGreen};
        align-self: flex-start;
        margin-inline: 1%;
        margin-right: 2%;
        margin-top: 5%;
        flex-grow: 0.1;
        background-color: none;
    }
`
const Dates = styled.div`
    display: flex;
    flex-grow: 0.3;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    color: white;
    .date{
        margin-left: 8%;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
    .date-title{
        color: ${p => p.theme.colors.cloud};
    }
    .date-date{
        color: ${p => p.theme.colors.shark};
        font-weight: bold;
    }
`

        
const RoomInfo = styled.div`
    display: flex;
    flex-grow: 0.3;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    color: white;
    .date{
        margin-left: 8%;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
    .date-title{
        color: ${p => p.theme.colors.cloud};
    }
    .date-date{
        color: ${p => p.theme.colors.shark};
        font-weight: bold;
    }
`
const Facilities = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
    flex-grow: 1;
    flex-wrap: wrap;
    .facility{
        display: flex;
        width: 170px;
        height: 60px;
        white-space: nowrap;
        border-radius: 15px;
        margin: 1%;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        i{ 
            color: ${p => p.theme.colors.mainGreen};
            margin-right: 4%;
        }
        color: ${p => p.theme.colors.mainGreen};
        background-color: ${p => p.theme.colors.greenLight};
    }
`

const ImageStyled = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    flex-grow: 1;
    width: 50%;
    height: 100%; 
    opacity: 0.9;
    border-radius: 0px 25px 25px 0px;
    background-image: url("https://www.elitetraveler.com/wp-content/uploads/2013/06/full-room-view.jpg");
    background-position: center;
    background-repeat: no-repeat;
    p{
        margin: 5%;
        font-size: 30px;
        font-weight: bold;
    }
    span{
        margin: 5%;
    
    }
`
