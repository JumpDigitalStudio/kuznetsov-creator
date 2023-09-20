import {Link} from "react-router-dom";
import styles from './header.module.css'
import {useEffect, useState} from "react";
import {BsThreeDotsVertical, BsXLg} from 'react-icons/bs'

const Header = () => {
    const [scroll, setScroll] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 50 ? setScroll(true) : setScroll(false)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    const contentClassName = `${styles.content} ${scroll ? styles.content_show : ''}`;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={contentClassName}>
                    <Link to='/#hero' className={styles.logo} onClick={closeMenu}>Kuznetsov Creator</Link>
                    <div className={`${styles.navigation} ${isMenuOpen ? styles.navigation_open : ''}`}>
                        <div className={styles.close} onClick={closeMenu}>
                            <BsXLg/>
                        </div>
                        <Link to='/#history' className={`link ${styles.link}`} onClick={closeMenu}>История</Link>
                        <Link to='/#skills' className={`link ${styles.link}`} onClick={closeMenu}>Скиллы</Link>
                        <Link to='/#learn' className={`link ${styles.link}`} onClick={closeMenu}>Учись со мной</Link>
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