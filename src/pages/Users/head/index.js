import {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import Picker from './Picker';

export function Head(){
    return (
        <HeadContainer>
            <HeadLeft>
                <StyledLink to="">All users</StyledLink>
                <StyledLink to="">Active users</StyledLink>
                <StyledLink to="">Inactive Users</StyledLink>
            </HeadLeft>
            <HeadRight>
                <NewRoomHead>
                    <button>+ New User</button>
                </NewRoomHead>
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

const Dates = () => {
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null
  });

  // render regular HTML input element
  const renderCustomInput = ({ ref }) => (
    <input
      readOnly
      ref={ref} // necessary
      placeholder={selectedDayRange}
      value={"Select your day range"}
      className="date-picker" // a styling class
    />
  )

  return (
    <DatePicker
      value={selectedDayRange}
      onChange={setSelectedDayRange}
      renderInput={renderCustomInput} // render a custom input
      shouldHighlightWeekends
    />
  );
};

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
    justify-content: flex-end;
    width: 50%;
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
// class="DatePicker__input -ltr date-picker"
const NewRoomHead = styled.div`
    i{
        margin-right: 25px;
    }
    button {
        border-radius: 12px;
        color: white;
        border: none;
        padding: 15px;
        font-size: 16px;
        width: 100%;
        background-color: ${p => p.theme.colors.mainGreen};
        height: 100%;
        justify-content: space-between;
        white-space:nowrap;
    }
`
