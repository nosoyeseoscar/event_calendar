import { useState, useEffect } from "react"
import styles from '../styles/AddForm.module.css'
import { extractDate, fullDate, addHour, generarID } from "../libraries/dateManipulation"
import { randomColor } from "../libraries/calendarStyle"

const AddForm = ({currentEvent, newEventHandler, events}) => {
    const [eventName, setEventName] = useState('')//Nombre del evento
    const [startDate, setStartDate] = useState('')//fecha completa de inicio del evento
    const [endDate, setEndDate] = useState('')// fecha completa del final del evento una hora más que la hora actual
    const [startDay, setStartDay] = useState('')//día de inicio.
    const [startTime, setStartTime] = useState('')//hora de inicio.
    const [endDay, setEndDay] = useState('')//día de inicio.
    const [endTime, setEndTime] = useState('')//hora de inicio.
    const [requesterName, setRequesterName] = useState('Administración') //quién pide el evento, por default Adminsitracion
    const [requesterEmail, setRequesterEmail] = useState('') //correo de quién pide el evento
    const [isAllDay, setIsAllDay] = useState(false)//estado para manejar el checkbox allDay
  
  /* useEffect(() => { 
      /* const formattedDate = todayDate()    
      console.log(formattedDate);  */
     /* console.log(eventList);
    }, []); */
    const handleBlurDay = () => {
      /* actualiza día de fin para mejor captura */
      setEndDay(startDay)
    }

    const handleBlurTime = () => {
      /* Actualiza tiempo mas una hora para mejor captura */
      setEndTime(addHour(startTime))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newStartDate = fullDate(startDay,startTime)
        const newEndDate = fullDate(endDay,endTime)
       
       /*  setStartDate(newStartDate)
        setEndDate(newEndDate)  */
                
        const newEvent = {
          id: generarID(),
          title: eventName,  
          date:startDay,        
          start: newStartDate,
          end: newEndDate,
          solicitante: requesterName,
          email: requesterEmail,
          allDay: isAllDay,
          color: randomColor()
        }

        newEventHandler( () =>[...events,newEvent] )

        alert(`El evento ${newEvent.title} fue registrado. Con el color: ${newEvent.eventColor}`)
      };
    
      return (
        <form onSubmit={handleSubmit} className={styles.forma}>
            <input
            /* Input nombre evento */
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              className={styles.input}
              placeholder="Nombre del evento"
            />

            <div className={styles['check-container']}>
              <input 
              /* Todo el día */
                type="checkbox" 
                id="all-day" 
                className= {styles.check} 
                checked  = {isAllDay}
                onChange = {(e)=>setIsAllDay(e.target.checked)}
              />
              <label htmlFor="all-day" className={styles.label}>Todo el día</label>
            </div>

            <h4 className={styles.label}>
                Fecha de inicio:
            </h4>
            <input
              /* fecha de inicio */
              type="date"
              value={startDay}
              className={styles.input}
              onChange={(e) => setStartDay(e.target.value)}
              onBlur={handleBlurDay}
            />

            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              /* placeholder="Nombre del evento"  */
              className={styles.input}
              disabled={isAllDay}
              onBlur={handleBlurTime}
            />

            <h4 className={styles.label}>
            Fecha de fin:
            </h4>
            <input
              type="date"
              value={endDay}
              className={styles.input}
              onChange={(e) => setEndDay(e.target.value)}
            />

            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className={styles.input}
              disabled={isAllDay}
            />
            
            <input
              type="text"
              value={requesterName}
              className={styles.input}
              onChange={(e) => setRequesterName(e.target.value)}
              placeholder="Nombre del solicitante"
            />

            <input
              type="email"
              value={requesterEmail}
              className={styles.input}
              onChange={(e) => setRequesterEmail(e.target.value)}
              placeholder="Correo del solicitante"
            />
          
          <button type="submit" className={styles.send}>Agendar</button>
        </form>
      );
}

export default AddForm