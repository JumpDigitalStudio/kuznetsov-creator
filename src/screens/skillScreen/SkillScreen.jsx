import styles from './skill.module.css'
import decoration from './assets/skill-decoration.png'
import image from './assets/skill-banner.png'

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
                      <img className={styles.skills} src={image} alt='Языки программирования'/>
                  </div>
                  <img className={styles.decoration} src={decoration} alt='Декор'/>
              </div>
          </div>
      </section>
  )
}

export default SkillScreen