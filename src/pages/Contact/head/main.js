import {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import Picker from './Picker';

export function MainHead(){
    return (
        <HeadContainer>
            <HeadLeft>
                <StyledLink to="">All contact</StyledLink>
                <StyledLink to="">Archieved</StyledLink>
                <StyledLink to="">Published</StyledLink>
            </HeadLeft>
            <HeadRight>
                <Picker/>
            </HeadRight>
        </HeadContainer>

    )
}
// const Dates = () => {
//   const [selectedDayRange, setSelectedDayRange] = useState({
//     from: null,
//     to: null
//   });
//   return (
//     <DatePicker
//       value={selectedDayRange}
//       onChange={setSelectedDayRange}
//       inputPlaceholder="Select a Check In & Check Out"
//       shouldHighlightWeekends
//       inputClassName="date-picker"
//     />
//   );
// };


const HeadContainer = styled.div`
    width: 95%;
    margin-inline: 4%;
    height: 69px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    white-space:nowrap;
`

const HeadLeft = styled.div`
    display: flex;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 40%;
    color: ${p => p.theme.colors.shark}
`
const HeadRight = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 20%;
`
const StyledLink = styled(Link)`
        padding: 8px 16px;
        display: block;
        width: 100%;
        color: ${p => p.theme.colors.cloud };
        border-bottom: 2px solid ${p => p.theme.colors.cloud };
        text-decoration: none;

        &:hover{
            color: ${p => p.theme.colors.mainGreen};
            border-bottom: 2px solid ${p => p.theme.colors.mainGreen};
        }
        &:focus {
            color: ${p => p.theme.colors.mainRed};
            border-bottom: 2px solid ${p => p.theme.colors.mainRed};
        }
`;
