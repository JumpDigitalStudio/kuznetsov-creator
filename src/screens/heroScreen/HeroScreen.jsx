import styles from './hero.module.css'
import {Link} from 'react-scroll'
import {BsArrowRight} from "react-icons/bs"
import {useEffect, useState} from "react";

const HeroScreen = () => {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const offsetX = e.clientX;
            const offsetY = e.clientY;

            setMouseX(offsetX);
            setMouseY(offsetY);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const scrollOptions = {
        smooth: false,
        offset: -80,
    };

    return (
        <section className={styles.section}>
            <div className='container'>
                <div className={styles.content}>
                    <div className={styles.column}>
                        <h1>Знакомьтесь,<br/>
                            <span className='text-gradient'>Kuznetsov Creator</span>
                        </h1>
                        <p>
                            Привет, мир 👋🏻 Меня зовут Илья Кузнецов, и я фронтенд-разработчик.
                            Мой путь начался 5 лет назад, и за это время я создал множество сайтов, веб-платформ и даже
                            коммерческих SPA-приложений.
                        </p>
                        <div className={styles.buttons}>
                            <Link to='features' {...scrollOptions} className='button button__gradient'>
                                Подробнее
                            </Link>
                            <a href='https://github.com/JumpDigitalStudio/kuznetsov-creator.git' target='_blank'
                               className='button button__trans' rel="noreferrer">
                                GitHub <BsArrowRight/>
                            </a>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.parallax} style={{
                            transform: `translate(-${mouseX * 0.01}px, -${mouseY * 0.01}px)`,
                        }}>
                            <img className={styles.image} src='/public/hero-banner.png' alt='Баннер главного экрана'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroScreen
