import styles from './skill.module.css'

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
                      <img className={styles.skills} src='/public/skill-banner.png' alt='Языки программирования'/>
                  </div>
                  <img className={styles.decoration} src='/public/skill-decoration.png' alt='Мой арсенал'/>
              </div>
          </div>
      </section>
  )
}

export default SkillScreen