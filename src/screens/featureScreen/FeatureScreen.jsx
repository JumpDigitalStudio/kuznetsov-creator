import styles from './feature.module.css'
import data from "./feature.data.js";

const FeatureScreen = () => {
    return (
        <section className={styles.section} id='features'>
            <div className='container'>
                <div className="card card__glass">
                    <div className={styles.section__content}>
                        {data.map((item, index) => (
                            <div className={styles.section__card} key={index}>
                                <p className='text-gradient'>{item.name}</p>
                                <span className='display-1'>{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureScreen
