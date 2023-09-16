import {useEffect, useState} from 'react'
import {animateScroll} from 'react-scroll'
import {BsArrowUpShort} from "react-icons/bs"
import styles from './scroll.module.css'

const ScrollTopButton = () => {
    const [showButton, setShowButton] = useState(false)

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

    const scrollTop = () => {
        animateScroll.scrollTo('top')
    };

    return (
        <button className={`${styles.button} ${showButton ? styles.show : ''}`} onClick={scrollTop}>
            <BsArrowUpShort/>
        </button>
    )
}

export default ScrollTopButton