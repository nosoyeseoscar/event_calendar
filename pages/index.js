import { useState, useEffect } from "react"
import Calendar from "../components/Calendar"
import AddEvent from "../components/AddEvent"
import styles from '../styles/Home.module.css'

const eventList = [
  {
    id: '001',
    title: 'evento 001',
    date: '2023-06-05',
    start: '2023-06-05',
    end: '2023-06-07',
    solicitante: 'Oscar',
    allDay: true
  },
  { 
    id:'002',
    title: 'Todo el día', 
    date: '2023-06-01',
    start: '2023-06-01',
    end: '2023-06-01',
    solicitante: 'Administración',
    allDay: true
  },
  { 
    id: '003',
    title: 'event 2', 
    date: '2023-06-02', 
    start: '2023-06-02',
    end: '2023-06-02',
    solicitante: 'Forestal', 
    allDay: true 
  },
  { 
    id: '004',
    title: 'event 4', 
    date: '2023-06-01', 
    start: '2023-06-01',
    end: '2023-06-01',
    solicitante: 'Administración', 
    allDay: true 
  },
  {
    id: '005',
    title: 'evento 5',
    date: '2023-06-02',
    start: '2023-06-02T08:00:00',
    end: '2023-06-02T09:00:00',
    solicitante: 'Amaurant',
    allDay: false
  },
  {
    id: '006',
    title: 'evento 10',
    date: '2023-06-07',
    start: '2023-06-07T08:00:00',
    end: '2023-06-07T10:00:00',
    solicitante: 'Otro 1',
    allDay: false
  },
]

export default function Home() {
  const [eventOpen, setEventOpen] = useState(false) //estado para guardar abrir capturar evento.
  const [newEventDate, setNewEventDate] = useState('') //estado para guardar nuevo evento pero solo la fecha.
  const [currentIdEvent, setCurrentIdEvent] = useState('')//estado para guardar el evento actual del click en un evento.

    

  const findEvent = (id) => {
    const event = eventList.find( event => event.id === id)

    event ? console.log(`El titulo del evento actual es: ${event.title}`):null

    return event ? event : null
  }
  
  return ( 
  <div>
    <header>
    </header>
    <main className={styles.container}>
      <section 
        className={eventOpen ? `${styles['event-open']} ${styles.section}`
          :`${styles['event-close']} ${styles.section}`}>
        <AddEvent 
          isOpen={eventOpen} 
          changeOpen={setEventOpen} 
          defaultDate={newEventDate}
          currentEvent={findEvent(currentIdEvent)}
        />
      </section>
      <section className={`${styles.section}`}>
        <Calendar events={eventList} setCurrentIdEvent={setCurrentIdEvent} />
      </section>
    </main>
  </div>
  )
}
