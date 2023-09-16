import styles from './learn.module.css'
import {Link} from "react-router-dom";
import {useInView} from "react-intersection-observer";
import {useEffect, useRef, useState} from "react";
import learnVideo from './assets/video.mp4'
import learnDecoration from './assets/learn-decoration.svg'

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
    }, [inView, isVideoPlaying]);

    return (
        <section className={styles.section} id='learn'>
            <div className="container">
                <div className={styles.section__content}>
                    <div className={styles.section__column}>
                        <span className='text-gradient'>От джуна до сеньора-помидора</span>
                        <h2 className='display-2'>
                            Учись со мной
                        </h2>
                        <p>
                            Я приглашаю вас присоединиться к этому увлекательному путешествию. Мир программирования
                            не
                            знает границ, и он всегда готов принять новых исследователей. Со мной вы научитесь
                            создавать
                            сайты любых форм и размеров, освоите искусство фронтенд-разработки и многое другое.
                        </p>
                        <div className={styles.section__buttons}>
                            <Link to='playground' className='button button__gradient'>
                                Playground
                            </Link>
                            <span>Познай силу JavaScript!</span>
                        </div>
                    </div>
                    <div className={styles.section__column}>
                        <div className={styles.section__video} ref={ref}>
                            <video controls className={styles.section__video_player} ref={videoRef}>
                                <source src={learnVideo} type="video/mp4" />
                                Ваш браузер не поддерживает видео в формате MP4.
                            </video>
                            <img className={styles.section__image} src={learnDecoration} alt='Баннер Учись со мной'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LearnScreen