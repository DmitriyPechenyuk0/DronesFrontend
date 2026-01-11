import { useParams } from "react-router-dom"
import { useEffect } from "react"
import styles from './aboutUs.module.css'
import buildingImg from './assets/building-image.png';
import officeImg from './assets/office-image.png';
import teamImg from './assets/team-image.png';

export function AboutUsPage() {
    const {id} = useParams<{id: string}>()
    const userId = Number(id)

    useEffect( () => {
        if (isNaN(userId)) {
            // navigate("/")
        }
    } ,[userId])

    return (
        <div className={styles.container}>
            <section className={styles.section}>
              <h1 className={styles.mainTitle}>ПРО НАС</h1>
              <p className={styles.description}>
                Ми — команда, яка об'єднана спільною метою: зробити передові технології доступними для кожного, хто потребує точності, безпеки та інновацій. <br />
                З 2022 року ми спеціалізуємось на постачанні дронів і тепловізорів для професійного, цивільного та волонтерського використання.
              </p>
              <div className={styles.imageWrapper}>
                <img src={buildingImg} alt="1" className={styles.image} />
              </div>
            </section>

            <section className={styles.rowSection}>
              <div className={styles.textContent}>
                <h2 className={styles.sectionTitle}>НАША МІСІЯ</h2>
                <p className={styles.text}>
                  Допомагати тим, хто стоїть на передовій — у прямому й переносному сенсі. 
                  Ми обираємо тільки надійну техніку, яку перевіряємо самі. Наша мета — якість, 
                  простота, і підтримка на кожному етапі: від покупки до використання.
                </p>
              </div>
              <div className={styles.imageContent}>
                <img src={teamImg} alt="2" className={styles.image} />
              </div>
            </section>
            
            <section className={`${styles.rowSection}`}>
              <div className={styles.imageContent}>
                <img src={officeImg} alt="3" className={styles.image} />
              </div>
              <div className={styles.textContent}>
                <h2 className={styles.sectionTitle}>КОМАНДА, ЯКІЙ МОЖНА ДОВІРЯТИ</h2>
                <p className={styles.text}>
                  Ми — не просто магазин. Ми — фахівці, які самі працюють із цією технікою й 
                  консультують з досвіду. Засновники проєкту — волонтери, військові та IT-спеціалісти, 
                  які об'єднали зусилля задля важливої справи.
                </p>
              </div>
            </section>
        </div>
    )
}