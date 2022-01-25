import styled from 'styled-components'

export const HeadStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: ${p=>p.theme.sizes.widthIn}px;
    height: 200px;
    background-color: ${p=>p.theme.colors.desert};
    margin-top: 120px;
`

export const HeadCardStyled = styled.div`
    display:flex;
    align-items: center;
    justify-content: left;
    background-color: white;
    width: 340px;
    height: 125px;
    margin: 25px;
    border-radius: 8px;

    :hover{
        cursor: pointer;
        .icon {
            color: white;
            background-color: ${p=>p.theme.colors.mainRed};
        }
    }

.HeadCardRight{
    display: flex;
    justify-content: center;
    align-items:left;
    flex-direction: column;
    margin-left: 22px;
}

.number{
    font-size: 30px;
}

.text {
    color: ${p=>p.theme.colors.shark};
    margin: 0;
    font-size: 14px;
}

    .icon{
        margin-left: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 65px;
        height: 65px;
        color: ${p=>p.theme.colors.mainRed};
        background-color: ${p=>p.theme.colors.fairPink};
        border-radius: 8px;
    }
`
