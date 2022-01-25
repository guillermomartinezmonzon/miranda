import styled from 'styled-components'

export const BookingDownStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: ${p=>p.theme.sizes.widthIn}px;
    height: 500px;
    background-color: ${p=>p.theme.colors.desert};
    border-radius: 8px;
`

export const BookingDownCardStyled = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    width: 95%;
    height: 120px;
    margin: 5px;
    margin-inline: 20px;

    .room-type {
        margin-left: 20px;
        font-size: 25px;
    }

    .room-number{
        margin-left: 15x;
        font-size: 25px;
        margin-left: 20px;
    }

    .guest-name{
        font-size: 20px;
        margin-right: 25px;
    }

.check-in{
    border-radius: 8px;
    padding: 5px;
    background-color: ${p=>p.theme.colors.mainRed};
    color: white;
    margin: 5px;
}

.check-out{
    border-radius: 8px;
    padding: 5px;
    background-color: ${p=>p.theme.colors.eden};
    color: white;
    margin: 5px;
}

    .right{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: 40px;
    }

    img{
        width: 154px;
        height: 92px;
    }

    :hover{
        cursor: pointer;
    }

    .left {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }
`
