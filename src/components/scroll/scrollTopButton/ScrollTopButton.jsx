import {useEffect, useState} from 'react'
import {BsArrowUpShort} from "react-icons/bs"
import styles from './scrollTopButton.module.css'

const ScrollTopButton = () => {
    const [showButton, setShowButton] = useState(false)

    function handleClick () {
        setTimeout(() => {
            window.scrollTo({
                behavior: 'smooth',
                top: 0,
            });
        }, 100)
    }

    useEffect(() => {
        const scrollOffset = 100
        const handleScroll = () => {
            if (window.scrollY > parseInt(scrollOffset.toString(), 10)) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <button className={`${styles.button} ${showButton ? styles.show : ''}`} onClick={handleClick}>
            <BsArrowUpShort/>
        </button>
    )
}

export default ScrollTopButton