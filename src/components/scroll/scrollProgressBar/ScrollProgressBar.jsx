import {useEffect, useState} from "react";
import styles from './ScrollProgressBar.module.css'
import {useLocation} from "react-router-dom";

const ScrollProgressBar = () => {
    const [scrolled, setScrolled] = useState('')
    const location = useLocation();

    useEffect(() => {
        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, []);

    useEffect(() => {
        setScrolled("0%");
    }, [location.pathname]);

    const onScroll = () => {
        const viewportHeight = document.documentElement.scrollHeight - window.innerHeight
        setScrolled(`${(document.documentElement.scrollTop / viewportHeight) * 100}%`)
    }

    return (
        <div className={styles.progress}>
            <div className={styles.progress__bar} style={{ width: scrolled}}>
                &nbsp;
            </div>
        </div>
    )
}

export default ScrollProgressBar