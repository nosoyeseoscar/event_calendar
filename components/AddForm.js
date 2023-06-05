import { useState } from "react"
import styles from '../styles/AddForm.module.css'

const AddForm = () => {
    const [eventName, setEventName] = useState('')//Nombre del evento
    const [startDate, setStartDate] = useState(new Date())//fecha de inicio del evento
    const [endDate, setEndDate] = useState(new Date())// fecha del final del evento una hora más que la hora actual
    const [requesterName, setRequesterName] = useState('') //quién pide el evento, por default Adminsitracion
    const [requesterEmail, setRequesterEmail] = useState('') //correo de quién pide el evento


    const handleSubmit = (e) => {
        e.preventDefault();
    
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
          <br />
          <h3>
          Fecha de inicio:
            </h3>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
          <br />
            <h3>
            Fecha de fin:
            </h3>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          <br />
            <input
              type="text"
              value={requesterName}
              className={styles.input}
              onChange={(e) => setRequesterName(e.target.value)}
              placeholder="Nombre del solicitante"
            />
          <br />
            <input
              type="email"
              value={requesterEmail}
              className={styles.input}
              onChange={(e) => setRequesterEmail(e.target.value)}
              placeholder="Correo del solicitante"
            />
          
          <br />
          <button type="submit">Enviar</button>
        </form>
      );
}

export default AddForm