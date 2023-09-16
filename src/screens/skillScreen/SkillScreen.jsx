import styles from './skill.module.css'
import skillDecoration from './assets/skill-decoration.png'
import skillBanner from './assets/skill-banner.png'

const SkillScreen = () => {
  return (
      <section className={styles.section} id='skills'>
          <div className="container">
              <div className={styles.section__content}>
                  <div className={styles.section__text}>
                      <span className='text-gradient'>Скиллы</span>
                      <h2 className='display-2'>Мой арсенал</h2>
                  </div>
                  <div className={styles.section__skills}>
                      <img className={styles.section__image} src={skillBanner} alt='Референс - "Языки программирования"'/>
                  </div>
                  <img className={styles.section__decoration} src={skillDecoration} alt='Декорация баннера'/>
              </div>
          </div>
      </section>
  )
}

export default SkillScreen