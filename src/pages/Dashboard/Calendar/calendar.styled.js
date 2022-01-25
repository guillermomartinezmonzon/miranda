import styled from 'styled-components'

        // width: "${p=>p.theme.sizes.dashboardItemWidth}px"
export const CalendarContainer = styled.div`
    background-color: ${p=>p.theme.colors.bg};
    border-radius: 8px;
    box-shadow: 0px 4px 4px #00000005;
    margin-bottom: 30px;

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
      width: ${props => props.theme.sizes.dashboardItemWidth-10}px;
      height: ${props => props.theme.sizes.dashboardItemHeight-10}px;
        
    }

    .fc-button-primary:disabled, .fc-prev-button, .fc-next-button, .fc-today-button {
        color: ${p=>p.theme.colors.eden};
        background-color:${p=>p.theme.colors.bg};
        border: none;
    }
`
