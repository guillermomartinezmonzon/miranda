import styled from 'styled-components'
import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

export default class Calendar extends React.Component {

  render() {
    return (
      <CalendarContainer>
          <FullCalendar
            plugins={[ dayGridPlugin, interactionPlugin ]}
            dateClick={this.handleDateClick}
              events={[
                { title: 'booking 1', date: '2022-02-01' },
                { title: 'booking 2', date: '2022-02-11' },
                { title: 'booking 2', date: '2022-02-12' },
                { title: 'booking 2', date: '2022-02-13' },
                { title: 'booking 3', date: '2022-02-08' },
                { title: 'booking 4', date: '2022-02-22' }
              ]}  
          />
      </CalendarContainer>
    )
  }

  handleDateClick = (arg) => { // bind with an arrow function
    alert(arg.dateStr)
  }

}

        // width: "${p=>p.theme.sizes.dashboardItemWidth}px"
const CalendarContainer = styled.div`
    background-color: ${p=>p.theme.colors.bg};
    border-radius: 8px;
    box-shadow: 0px 4px 4px #00000005;
    margin-bottom: 30px;

    button{
        background: none;
        border: none;
        &:hover{
            cursor:pointer;
        }
    }

    .fc {
      color: ${p=>p.theme.colors.eden};
      width: ${props => props.theme.sizes.dashboardItemWidth}px;
      height: ${props => props.theme.sizes.dashboardItemHeight}px;
    }
    .fc-toolbar-title{
    margin-left: 20px;
      font-size:20px;
      color: ${p=>p.theme.colors.shark};
       
    }

.fc-col-header-cell{
}

.fc-event-main, .fc-event-title-container, .fc-event-main-frame{
    color: ${p=>p.theme.colors.bg};
    background-color: ${p=>p.theme.colors.mainRed};
    text-align: center;
}

    .fc-view-harness, .fc-view-harness-active{
      width: 100%;
      height: ${props => props.theme.sizes.dashboardItemHeight-10}px;
        
    }

    .fc-button-primary:disabled, .fc-prev-button, .fc-next-button, .fc-today-button {
        color: ${p=>p.theme.colors.eden};
        background-color:${p=>p.theme.colors.bg};
        border: none;
    }
`
