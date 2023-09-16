import styles from './history.module.css'
import gsap from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect, useState} from "react";
import historyOne from './assets/1.png'
import historyTwo from './assets/2.png'
import historyThree from './assets/3.png'
import historyFour from './assets/4.png'

gsap.registerPlugin(ScrollTrigger)

const HistoryScreen = () => {
    const [likes, setLikes] = useState(1);

    useEffect(() => {
        const cards = document.querySelectorAll(`.${styles.section__card}:not(:first-child)`);
        const photos = document.querySelectorAll(`.${styles.section__image}:not(:first-child)`);
        gsap.set(photos, {yPercent: 101});

        const mm = gsap.matchMedia();

        mm.add('(min-width: 768px)', () => {
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
                <div className={styles.section__content}>
                    <div className={styles.section__left}>
                        <div className={styles.section__images}>
                            <img src={historyOne} className={styles.section__image} alt='Начало'/>
                            <img src={historyTwo} className={styles.section__image} alt='Осознание'/>
                            <img src={historyThree} className={styles.section__image} alt='Взросление'/>
                            <img src={historyFour} className={styles.section__image} alt='Становление'/>
                        </div>
                    </div>
                    <div className={styles.section__right}>
                        <div className={styles.section__cards}>
                            <div className={styles.section__card}>
                                <img src={historyOne} className={styles.section__image_mobile} alt='Начало'/>
                                <span className='text-gradient'>Начало</span>
                                <h2 className='display-2'>
                                    Сила в том, чтобы&nbsp;начать
                                </h2>
                                <p>
                                    Моя история началась очень давно с детского желания разобраться в мире
                                    программирования.
                                    Как самураи, мы должны сделать первый шаг, несмотря на страх неизвестности.
                                    Сначала это казалось невозможным, уверенность приобреталась с умением решать задачи.
                                </p>
                            </div>
                            <div className={styles.section__card}>
                                <img src={historyTwo} className={styles.section__image_mobile} alt='Осознание'/>
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
                            <div className={styles.section__card}>
                                <img src={historyThree} className={styles.section__image_mobile} alt='Взросление'/>
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
                            <div className={styles.section__card}>
                                <img src={historyFour} className={styles.section__image_mobile} alt='Становление'/>
                                <span className='text-gradient'>Становление</span>
                                <h2 className='display-2'>
                                    Оружие самурая не меч, а &mdash; его дух
                                </h2>
                                <p>
                                    Быть лучшим в своем деле означает не просто следовать
                                    стандартам, но и создавать свои. Я продолжаю этот путь с гордостью и страстью, и я
                                    готов
                                    к любым трудностям, которые ждут меня в будущем.
                                </p>
                                <div className={styles.section__count}>
                                    <button className='button button__outline' onClick={() => setLikes(likes + 1)}>
                                        Браво 👏🏼
                                    </button>
                                    <span className={styles.section__count_value}>Понравилось: {likes}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HistoryScreen