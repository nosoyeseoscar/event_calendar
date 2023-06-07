import Image from 'next/image'
import styles from '../styles/AddEvent.module.css'
import addIcon from '../public/circle-plus.svg'

import AddForm from './addForm'

const AddEvent = ({isOpen, changeOpen}) => {
    
    const handleIconClick = () => {
        changeOpen(!isOpen)
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
           { isOpen ? <AddForm/>:null }
        </div>
    )
}

export default AddEvent