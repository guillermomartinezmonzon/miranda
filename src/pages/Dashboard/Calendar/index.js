import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import { CalendarContainer } from './calendar.styled'

export default class Calendar extends React.Component {

  render() {
    return (
      <CalendarContainer>
          <FullCalendar
            plugins={[ dayGridPlugin, interactionPlugin ]}
            dateClick={this.handleDateClick}
              events={[
                { title: 'booking 1', date: '2022-01-01' },
                { title: 'booking 2', date: '2022-01-11' },
                { title: 'booking 2', date: '2022-01-12' },
                { title: 'booking 2', date: '2022-01-13' },
                { title: 'booking 3', date: '2022-01-08' },
                { title: 'booking 4', date: '2022-01-22' }
              ]}  
          />
      </CalendarContainer>
    )
  }

  handleDateClick = (arg) => { // bind with an arrow function
    alert(arg.dateStr)
  }

}
