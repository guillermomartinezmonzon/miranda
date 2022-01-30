import {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import {FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Picker from './Picker';

export function Head(){
    return (
        <HeadContainer>
            <HeadLeft>
                <StyledLink to="">All bookings</StyledLink>
                <StyledLink to="">Checking In</StyledLink>
                <StyledLink to="">Checking Out</StyledLink>
                <StyledLink to="">In progress</StyledLink>
            </HeadLeft>
            <HeadRight>
                <CalendarHead>
                    <Dates/>
                </CalendarHead>
                <Picker/>
            </HeadRight>
        </HeadContainer>

    )
}

const Dates = () => {
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null
  });
  return (
    <DatePicker
      value={selectedDayRange}
      onChange={setSelectedDayRange}
      inputPlaceholder="Select a Check In & Check Out"
      shouldHighlightWeekends
      inputClassName="date-picker"
    />
  );
};

// const Picker = () => {
//     function handleChange(){}
//     return (
//         <FormControl fullWidth>
//           <InputLabel id="demo-simple-select-label">Age</InputLabel>
//           <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             value={"value"}
//             label="Age"
//             onChange={handleChange}
//           >
//             <MenuItem value={10}>Ten</MenuItem>
//             <MenuItem value={20}>Twenty</MenuItem>
//             <MenuItem value={30}>Thirty</MenuItem>
//           </Select>
//         </FormControl>
//     )
// }


const HeadContainer = styled.div`
    width: 90%;
    margin: 40px;
    height: 49px;
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
    width: 100%;
    color: ${p => p.theme.colors.shark}
`
const HeadRight = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
`
const StyledLink = styled(Link)`
        padding: 8px 16px;
        display: block;
        width: 100%;
        color: ${p => p.theme.colors.cloud };
        border-bottom: 2px solid ${p => p.theme.colors.cloud };
        text-decoration: none;

        &:hover{
            color: ${p => p.theme.colors.greenLight};
            border-bottom: 2px solid ${p => p.theme.colors.greenLight};
        }
        &:active{
            color: ${p => p.theme.colors.mainGreen};
            border-bottom: 2px solid ${p => p.theme.colors.mainGreen};
        }
        &:focus {
            color: ${p => p.theme.colors.mainGreen};
            border-bottom: 2px solid ${p => p.theme.colors.mainGreen};
        }
        &:target {
            color: ${p => p.theme.colors.greenLight};
            border-bottom: 2px solid ${p => p.theme.colors.greenLight};
        }
`;

const CalendarHead = styled.div`
    i{
        margin-right: 25px;
    }
    .date-picker{
        border-radius: 12px;
        color: white;
        font-size: 16px;
        width: 427px;
        background-color: ${p => p.theme.colors.mainGreen};
        margin: 35px;
        height: 100%;
        justify-content: space-between;
        white-space:nowrap;
    }
`

const DateDiv = styled.div`
    width: 160px;
    font-size: 16px;
    width: 100%;
    margin-inline: 8%;
`

const SortHead = styled.div`
    margin: 35px;
`
