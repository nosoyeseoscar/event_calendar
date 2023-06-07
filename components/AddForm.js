import { useState, useEffect } from "react"
import styles from '../styles/AddForm.module.css'

const AddForm = () => {
    const [eventName, setEventName] = useState('')//Nombre del evento
    const [startDate, setStartDate] = useState('')//fecha de inicio del evento
    const [endDate, setEndDate] = useState('')// fecha del final del evento una hora más que la hora actual
    const [requesterName, setRequesterName] = useState('Administración') //quién pide el evento, por default Adminsitracion
    const [requesterEmail, setRequesterEmail] = useState('') //correo de quién pide el evento

    useEffect(() => {
      //use efect para desmembrar la fecha actual
      const currentDateObj = new Date();
      const year = currentDateObj.getFullYear();
      const month = String(currentDateObj.getMonth() + 1).padStart(2, '0');
      const day = String(currentDateObj.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
      
      setStartDate(formattedDate);
      setEndDate(formattedDate);
    }, []);

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
            <h4 className={styles.label}>
                Fecha de inicio:
            </h4>
            <input
              type="date"
              value={startDate}
              className={styles.input}
              onChange={(e) => setStartDate(e.target.value)}
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