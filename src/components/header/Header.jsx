import {Link} from "react-router-dom";
import {Link as ScrollLink} from 'react-scroll'
import styles from './header.module.css'
import {useEffect, useState} from "react";
import {BsThreeDotsVertical, BsXLg} from 'react-icons/bs'

const Header = () => {
    const [scroll, setScroll] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);

        // Если меню открыто, запретить прокрутку #root
        if (!isMenuOpen) {
            document.querySelector("main").style.overflowY = 'hidden';
        } else {
            document.querySelector("main").style.overflowY = 'auto';
        }
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflowY = 'auto'; // Разрешить прокрутку #root при закрытии меню
    };

    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={contentClassName}>
                    <Link to='/' className={styles.logo} onClick={closeMenu}>Kuznetsov Creator</Link>
                    <div className={`${styles.navigation} ${isMenuOpen ? styles.navigation_open : ''}`}>
                        <div className={styles.close} onClick={closeMenu}>
                            <BsXLg/>
                        </div>
                        <ScrollLink to='history' {...scrollOptions} className={`link ${styles.link}`} onClick={closeMenu}>История</ScrollLink>
                        <ScrollLink to='skills' {...scrollOptions} className={`link ${styles.link}`} onClick={closeMenu}>Скиллы</ScrollLink>
                        <ScrollLink to='learn' {...scrollOptions} className={`link ${styles.link}`} onClick={closeMenu}>Учись со мной</ScrollLink>
                        <Link to='playground' className={`button button__outline ${isMenuOpen ? '' : 'button__small'}`} onClick={closeMenu}>
                            Playground 🔥
                        </Link>
                    </div>
                    <div className={styles.burger} onClick={toggleMenu}>
                        <BsThreeDotsVertical/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header