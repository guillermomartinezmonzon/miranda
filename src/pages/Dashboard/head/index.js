import { HeadStyled, HeadCardStyled } from "./head.styled";



export function Head(){

    const data = [
        {
            text: "New Bookings",
            number: 8461,
            icon: "fas fa-bed fa-2x"
        },
        {
            text: "Scheduled Rooms",
            number: 963,
            icon: "far fa-calendar-check fa-2x"
        },
        {
            text: "Check In",
            number: 753,
            icon: "fas fa-sign-out-alt fa-2x"
        },
        {
            text: "Check Out",
            number: 516,
            icon: "fas fa-sign-out-alt fa-2x"
        }
    ]

    return (
        <HeadStyled>
            <HeadCard text={data[0].text} number={data[0].number} icon={data[0].icon} />
            <HeadCard text={data[1].text} number={data[1].number} icon={data[1].icon} />
            <HeadCard text={data[2].text} number={data[2].number} icon={data[2].icon} />
            <HeadCard text={data[3].text} number={data[3].number} icon={data[3].icon} />
        </HeadStyled>
    )
}

function HeadCard(props){
    return (
        <HeadCardStyled>
            <div className="icon">
                <i className={props.icon}></i>
            </div>
            <div className="HeadCardRight">
                <div className="number">
                    {props.number}
                </div>
                <p className="text">
                    {props.text}
                </p>
            </div>    
         </HeadCardStyled>
    )
}
