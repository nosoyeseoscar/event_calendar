import { useState, useEffect } from "react"
import styles from '../styles/AddForm.module.css'
import { todayDate } from "../libraries/dateManipulation"

const AddForm = (currentEvent) => {
    const [eventName, setEventName] = useState('')//Nombre del evento
    const [startDate, setStartDate] = useState(todayDate())//fecha de inicio del evento
    const [endDate, setEndDate] = useState(todayDate())// fecha del final del evento una hora más que la hora actual
    const [requesterName, setRequesterName] = useState('Administración') //quién pide el evento, por default Adminsitracion
    const [requesterEmail, setRequesterEmail] = useState('') //correo de quién pide el evento
    /*  #TODO: add values for hours in useState */

    useEffect(() => { 
      const formattedDate = todayDate()    
      console.log(formattedDate); 
      setStartDate(formattedDate);
      setEndDate(formattedDate); 
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        /*  #TODO: Summit function*/
        // Realizar acciones con los datos del formulario
        console.log('Nombre del evento:', eventName);
        console.log('Fecha de inicio:', startDate);
        console.log('Fecha de fin:', endDate);
        console.log('Nombre del solicitante:', requesterName);
        console.log('Correo del solicitante:', requesterEmail);
      };
    
      return (
        <form onSubmit={handleSubmit} className={styles.forma}>
            <input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              className={styles.input}
              placeholder="Nombre del evento"
            />

            <div className={styles['check-container']}>
              {/* #TODO: add function to hide hours in events */ }
              <input type="checkbox" id="all-day" className={styles.check}/>
              <label for="all-day" className={styles.label}>Todo el día</label>
            </div>

            <h4 className={styles.label}>
                Fecha de inicio:
            </h4>
            <input
              type="date"
              value={startDate}
              className={styles.input}
              onChange={(e) => setStartDate(e.target.value)}
            />

            <input
              type="time"
             /*  #TODO: add values and useState */
              /* value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              placeholder="Nombre del evento" */
              className={styles.input}
            />

            <h4 className={styles.label}>
            Fecha de fin:
            </h4>
            <input
              type="date"
              value={endDate}
              className={styles.input}
              onChange={(e) => setEndDate(e.target.value)}
            />

            <input
              type="time"
              /*  #TODO: add values and useState */
              /* value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              placeholder="Nombre del evento" */
              className={styles.input}
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