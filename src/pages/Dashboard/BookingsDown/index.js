import { BookingDownStyled, BookingDownCardStyled } from "./BookingsDown.styled";



export function BookingsDown(){

    const data = [
        {
            image: "https://miro.medium.com/max/8576/1*p1zBnv11CSx_EII8sB9Uaw.jpeg",
            roomType: "Suite",
            roomNumber: 701,
            guestName: "Alice Pérez",
            checkIn: "10-09-2022",
            checkOut: "10-10-2022"
        },
        {
            image: "http://www.arizehotel.com/wp-content/uploads/2016/06/1.Superior.jpg",
            roomType: "Superior",
            roomNumber: 434,
            guestName: "Bob Pérez",
            checkIn: "10-09-2022",
            checkOut: "10-10-2022"
        },
        {
            image: "https://www.ravellihotels.it/wp-content/uploads/2019/12/SMART-ROOM-1-scaled.jpg",
            roomType: "Double Bed",
            roomNumber: 324,
            guestName: "Charlie Pérez",
            checkIn: "10-09-2022",
            checkOut: "10-10-2022"
        },
        {
            image: "https://www.corinthia.com/media/1525/corinthia-budapest-superior-king-bedroom-1973-x-1315.jpg",
            roomType: "Single Bed",
            roomNumber: 101,
            guestName: "Delta Pérez",
            checkIn: "10-09-2022",
            checkOut: "10-10-2022"
        },
    ]

    return (
        <BookingDownStyled>
            {data.map(booking => {
                return <BookingDownCard 
                    image={booking.image}
                    roomType={booking.roomType}
                    roomNumber={booking.roomNumber}
                    guestName={booking.guestName}
                    checkIn={booking.checkIn}
                    checkOut={booking.checkOut}
                />
            })}
        </BookingDownStyled>
    )
}

function BookingDownCard(props){
    // image
    // room_type
    // room_name
    // guest_name
    // check_in
    // check_out
    return (
        <BookingDownCardStyled>
            <div className="left">
                <img src={props.image} alt=""/>
                <div className="room-number">
                    <div>{props.roomNumber}</div>
                </div>
                <div className="room-type">
                    <div>{props.roomType}</div>
                </div>
            </div>
            <div className="right">
                <div className="guest-name">
                    <div>{props.guestName}</div>
                </div>
                <div className="dates">
                    <div className="check-in">
                        <div>{props.checkIn}</div>
                    </div>
                    <div className="check-out">
                        <div>{props.checkOut}</div>
                    </div>
                </div>
            </div>
         </BookingDownCardStyled>
    )
}
