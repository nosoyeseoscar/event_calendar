/* Componente Panel de captura de nuevo evento */
import Image from 'next/image'
import styles from '../styles/AddEvent.module.css'
import addIcon from '../public/circle-plus.svg'

import AddForm from './addForm'

const AddEvent = (
    {
        isOpen, /* Panel de captura abierto? */
        changeOpen, /* handler que baja de un estado superior que controla panel de captura */
        currentEvent, /* Datos del evento actual */
        newEventHandler, /* handler que baja de un estado superior que maneja el evento */
        eventList /* lista de eventos en memoria */
    }) => {
    
    const handleIconClick = () => {
        changeOpen(!isOpen)
        /* console.log(eventList); */
    }

    return(
        <div className={styles.container}>
            <Image 
                src={addIcon} 
                alt="AddEvent" 
                width={50}
                height={50} 
                className={ isOpen? `${styles["icon-clicked"]} ${styles.icon}`: `${styles['icon-normnal']} ${styles.icon}` }
                onClick={handleIconClick}
            />
           
            { 
                /* Render condicionado sobre booleano que está o no abierto el panel de captura de eventos */
                isOpen ? <AddForm 
                        currentEvent={currentEvent} 
                        newEventHandler={newEventHandler} 
                        events = {eventList}
                      />
                    :null 
            } 
        </div>
    )
}

export default AddEvent