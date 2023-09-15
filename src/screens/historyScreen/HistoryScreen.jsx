import styles from './history.module.css'
import gsap from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect, useState} from "react";

gsap.registerPlugin(ScrollTrigger)

const HistoryScreen = () => {
    const [likes, setLikes] = useState(1);

    useEffect(() => {
        const cards = document.querySelectorAll(`.${styles.card}:not(:first-child)`);
        const photos = document.querySelectorAll(`.${styles.image}:not(:first-child)`);
        gsap.set(photos, {yPercent: 101});

        const mm = gsap.matchMedia();

        mm.add('(min-width: 600px)', () => {
            ScrollTrigger.create({
                trigger: `.${styles.section}`,
                start: 'top top',
                end: 'bottom bottom',
            });
            cards.forEach((card, index) => {
                const headline = card.querySelector('span');
                const animation = gsap.timeline()
                    .to(photos[index], {yPercent: 0});

                ScrollTrigger.create({
                    trigger: headline,
                    start: 'top 80%',
                    end: 'top 50%',
                    animation: animation,
                    scrub: true,
                    markers: false,
                });
            });
        });
    }, []);

    return (
        <section className={styles.section} id='history'>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.wrapper_images}>
                        <div className={styles.images}>
                            <img src='/1.png' className={styles.image} alt='Начало'/>
                            <img src='/2.png' className={styles.image} alt='Осознание'/>
                            <img src='/3.png' className={styles.image} alt='Взросление'/>
                            <img src='/4.png' className={styles.image} alt='Становление'/>
                        </div>
                    </div>
                    <div className={styles.wrapper_cards}>
                        <div className={styles.card}>
                            <span className='text-gradient'>Начало</span>
                            <h2 className='display-2'>
                                Сила в том, чтобы&nbsp;начать
                            </h2>
                            <p>
                                Моя история началась очень давно с детского желания разобраться в мире программирования.
                                Как самураи, мы должны сделать первый шаг, несмотря на страх неизвестности.
                                Сначала это казалось невозможным, уверенность приобреталась с умением решать задачи.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <span className='text-gradient'>Осознание</span>
                            <h2 className='display-2'>
                                Мастерство &mdash; это&nbsp;путь, а не конечная цель
                            </h2>
                            <p>
                                Мой путь программирования &mdash; это осознание неизбежности изменений.
                                В школе, я понял, что IT никогда не останавливается подобно самураям,
                                которые не перестают тренироваться. Чтобы быть в теме, нужно жить
                                программированием, а не просто увлекаться&nbsp;им.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <span className='text-gradient'>Взросление</span>
                            <h2 className='display-2'>
                                Быть самураем, а&nbsp;не походить на&nbsp;него
                            </h2>
                            <p>
                                Поступив в колледж и проведя 4 года без сна, я понял, что каждый, кто ступил на этот
                                путь, не должен забывать об ответственности. Мы создаем
                                технологическое будущее, и это наша привилегия и одновременно обязанность.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <span className='text-gradient'>Становление</span>
                            <h2 className='display-2'>
                                Оружие самурая не меч, а &mdash; его дух
                            </h2>
                            <p>
                                Быть лучшим в своем деле означает не просто следовать
                                стандартам, но и создавать свои. Я продолжаю этот путь с гордостью и страстью, и я готов
                                к любым трудностям, которые ждут меня в будущем.
                            </p>
                            <div className={styles.like}>
                                <button className='button button__outline' onClick={() => setLikes(likes + 1)}>
                                    Браво 👏🏼
                                </button>
                                <span className={styles.counter}>Понравилось: {likes}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HistoryScreen