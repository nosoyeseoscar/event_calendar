import Image from 'next/image'
import styles from '../styles/Header.module.css'
import addIcon from '../public/circle-plus.svg'

const Header = () => {
    return(
        <div>
            <Image 
                src={addIcon} 
                alt="AddEvent" 
                width={50}
                height={50} />
        </div>
    )
}

export default Header