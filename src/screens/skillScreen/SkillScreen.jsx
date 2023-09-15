import styles from './skill.module.css'
import skillDecoration from './assets/skill-decoration.png'
import skillBanner from './assets/skill-banner.png'

const SkillScreen = () => {
  return (
      <section className={styles.section} id='skills'>
          <div className="container">
              <div className={styles.content}>
                  <div className={styles.text}>
                      <span className='text-gradient'>Скиллы</span>
                      <h2 className='display-2'>Мой арсенал</h2>
                  </div>
                  <div className={styles.wrapper_skills}>
                      <img className={styles.skills} src={skillBanner} alt='Языки программирования'/>
                  </div>
                  <img className={styles.decoration} src={skillDecoration} alt='Декор'/>
              </div>
          </div>
      </section>
  )
}

export default SkillScreen