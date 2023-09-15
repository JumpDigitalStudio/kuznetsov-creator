import {Link} from "react-router-dom";
import {Link as ScrollLink} from 'react-scroll'
import styles from './header.module.css'
import {useEffect, useState} from "react";

const Header = () => {
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 50) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        window.addEventListener('load', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    const contentClassName = `${styles.content} ${scroll ? styles.content_show : ''}`;

    const scrollOptions = {
        duration: 1200,
        smooth: false,
        offset: -80,
    };

    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={contentClassName}>
                    <Link to='/' className={styles.logo}>Kuznetsov Creator</Link>
                    <div className={styles.navigation}>
                        <ScrollLink to='history' {...scrollOptions} className='link'>История</ScrollLink>
                        <ScrollLink to='skills' {...scrollOptions} className='link'>Скиллы</ScrollLink>
                        <ScrollLink to='learn' {...scrollOptions} className='link'>Учись со мной</ScrollLink>
                        <Link to='playground' className='button button__outline button__small'>
                            Playground 🔥
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header