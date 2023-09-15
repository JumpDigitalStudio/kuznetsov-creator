import styles from './learn.module.css'
import {Link} from "react-router-dom";
import {useInView} from "react-intersection-observer";
import {useEffect, useRef, useState} from "react";

const LearnScreen = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [ref, inView] = useInView();

    const videoRef = useRef(null);

    const toggleVideo = (play) => {
        if (videoRef.current) {
            if (play) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };

    useEffect(() => {
        if (!inView) {
            setIsVideoPlaying(false);
            toggleVideo(false);
        }
    }, [inView]);

    return (
        <section className={styles.section} id='learn'>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.column}>
                        <span className='text-gradient'>От джуна до сеньора-помидора</span>
                        <h2 className='display-1'>
                            Учись со мной
                        </h2>
                        <p>
                            Я приглашаю вас присоединиться к этому увлекательному путешествию. Мир программирования
                            не
                            знает границ, и он всегда готов принять новых исследователей. Со мной вы научитесь
                            создавать
                            сайты любых форм и размеров, освоите искусство фронтенд-разработки и многое другое.
                        </p>
                        <div className={styles.buttons}>
                            <Link to='playground' className='button button__gradient'>
                                Playground
                            </Link>
                            <span>Познай силу JavaScript!</span>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.wrapper_video} ref={ref}>
                            <video controls className={styles.video} ref={videoRef}>
                                <source src='/public/video.mp4' type="video/mp4" />
                                Ваш браузер не поддерживает видео в формате MP4.
                            </video>
                            <img className={styles.image} src='/public/learn-decoration.svg' alt='Баннер Учись со мной'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LearnScreen