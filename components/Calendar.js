import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import esLocale from '@fullcalendar/core/locales/es';
import timeGridPlugin from '@fullcalendar/timegrid' //plugin para hacerlo por semana
import listPlugin from '@fullcalendar/list'; //plugin para lista de eventos

import styles from '../styles/Calendar.module.css'

const headerConfiguration = {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
}

const Calendar = ({events, setCurrentIdEvent})=>{

    /* const handleDateClick = (arg) => { // bind with an arrow function       
       alert(arg.dateStr)
    } */

    const handleEventClick = ({event:{id,title, start, end, allDay, extendedProps}}) => {
        //alert(id)
        /* const {solicitante} = extendedProps
        console.log(title)
        console.log(solicitante);
        console.log(start)
        console.log(end)
        console.log(allDay); */
        setCurrentIdEvent(id)
        console.log(`El id del evento es: ${id}`);
    }
    return (
        <div className={styles.calendario}>
            <FullCalendar
             plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin ]}
             initialView="dayGridMonth"
             weekends={false}
             events={events}
             /* dateClick={handleDateClick} */
             locale={esLocale}
             headerToolbar = {headerConfiguration}
             navLinks={true}
             dayMaxEvents ={true} 
             eventClick={handleEventClick}
           />
        </div>
    )
}

export default Calendar