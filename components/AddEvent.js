import Image from 'next/image'
import styles from '../styles/AddEvent.module.css'
import addIcon from '../public/circle-plus.svg'

import AddForm from './addForm'

const AddEvent = () => {
    return(
        <div className={styles.dotted}>
            <Image 
                src={addIcon} 
                alt="AddEvent" 
                width={50}
                height={50} 
            />
            <AddForm></AddForm>
        </div>
    )
}

export default AddEvent