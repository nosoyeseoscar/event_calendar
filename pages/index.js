import { useState } from "react"
import Calendar from "../components/Calendar"
import AddEvent from "../components/AddEvent"
import styles from '../styles/Home.module.css'

const eventList = [
  {
    title: 'evento 3',
    date: '2023-06-05',
    start: '2023-06-05',
    end: '2023-06-07',
    solicitante: 'Oscar',
    allDay: true
  },
  { 
    title: 'Todo el día', 
    date: '2023-06-01',
    start: '2023-06-01',
    end: '2023-06-01',
    solicitante: 'Administración',
    allDay: true
  },
  { title: 'event 2', 
    date: '2023-06-02', 
    start: '2023-06-02',
    end: '2023-06-02',
    solicitante: 'Forestal', 
    allDay: true 
  },
  { title: 'event 4', 
    date: '2023-06-01', 
    start: '2023-06-01',
    end: '2023-06-01',
    solicitante: 'Administración', 
    allDay: true 
  },
  {
    title: 'evento 5',
    date: '2023-06-02',
    start: '2023-06-02T08:00:00',
    end: '2023-06-02T09:00:00',
    solicitante: 'Amaurant',
    allDay: false
  },
  {
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
  
  return ( 
  <div>
    <header>
      {newEventDate}
    </header>
    <main className={styles.container}>
      <section 
        className={eventOpen ? `${styles['event-open']} ${styles.section}`
          :`${styles['event-close']} ${styles.section}`}>
        <AddEvent isOpen={eventOpen} changeOpen={setEventOpen} defaultDate={newEventDate}></AddEvent>
      </section>
      <section className={`${styles.section}`}>
        <Calendar events={eventList} />
      </section>
    </main>
  </div>
  )
}
