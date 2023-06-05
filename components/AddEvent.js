import Image from 'next/image'
import styles from '../styles/AddEvent.module.css'
import addIcon from '../public/circle-plus.svg'

const AddEvent = () => {
    return(
        <div className={styles.dotted}>
            <Image 
                src={addIcon} 
                alt="AddEvent" 
                width={50}
                height={50} />
        </div>
    )
}

export default AddEvent