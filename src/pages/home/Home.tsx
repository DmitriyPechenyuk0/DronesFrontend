import { useParams } from "react-router-dom";
import { useEffect } from "react";
import styles from './home.module.css';
export function HomePage() {
    const { id } = useParams<{ id: string }>();
    const userId = Number(id);

    useEffect(() => {
        if (isNaN(userId)) {
            // navigate("/")
        }
    }, [userId]);

    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.heroEllipse}></div>
                <h1 className={styles.mainTitle}>
                  ТЕХНОЛОГІЇ<br />ЯКІ ЗМІНЮЮТЬ РЕАЛЬНІСТЬ
                </h1>
                <div className={styles.heroContent}>
                  <img src=".assets/path_to_main_drone.png" alt="Main Drone" className={styles.heroImage} />
                  <div className={styles.heroBadge}>
                    <p>Передові технології в одному місці.<br /> Обирай найкраще для найважливішого.</p>
                    <button className={styles.darkButton}>ДО КАТАЛОГУ</button>
                  </div>    
                </div>
            </section>

            <section className={styles.about}>
                <h2 className={styles.sectionTitle}>ПРО НАС</h2>
                <p className={styles.aboutText}>
                    Ми — команда, що об’єднує технології та надійність. 
                    Пропонуємо дрони й тепловізори, перевірені у найскладніших умовах. 
                    Обираємо тільки те, чому довіряємо самі.
                </p>
                <button className={styles.outlineButton}>ЧИТАТИ БІЛЬШЕ <span>→</span></button>
            </section>

            <section className={styles.newArrivals}>
                <h2 className={styles.sectionTitle}>НОВЕ НА САЙТІ</h2>
                <div className={styles.newGrid}>
                    <div className={`${styles.newCard} ${styles.cardYellow}`}>
                        <img src=".assets/path_to_mini_drone.png" alt="DJI Mini 4K" />
                        <h3>DJI Mini 4K</h3>
                        <p>Easy-To-Use Mini Camera Drone</p>
                        <div className={styles.cardFooter}>
                            <span>from $299</span>
                            <button className={styles.buyButton}>КУПИТИ →</button>
                        </div>
                    </div>
                    <div className={`${styles.newCard} ${styles.cardGreen}`}>
                        <img src=".assets/path_to_mini_drone.png" alt="DJI Mini 4Pro" />
                        <h3>DJI Mini 4Pro</h3>
                        <p>Easy-To-Use Mini Camera Drone</p>
                        <div className={styles.cardFooter}>
                            <span>from $299</span>
                            <button className={styles.buyButton}>КУПИТИ →</button>
                        </div>
                    </div>
                    <div className={`${styles.newCard} ${styles.cardBlue}`}>
                        <img src=".assets/path_to_mini_drone.png" alt="DJI Mini 4K" />
                        <h3>DJI Mini 4K</h3>
                        <p>Easy-To-Use Mini Camera Drone</p>
                        <div className={styles.cardFooter}>
                            <span>from $299</span>
                            <button className={styles.buyButton}>КУПИТИ →</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.catalog}>
                <h2 className={styles.sectionTitle}>КАТАЛОГ</h2>
                <div className={styles.catalogGrid}>
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className={styles.catalogItem}>
                            <img src=".assets/path_to_mini_drone.png" alt="Drone" />
                            <h4>DJI Mini 4K</h4>
                            <p className={styles.price}>29 900 ₴</p>
                        </div>
                    ))}
                </div>
                <button className={`${styles.darkButton} ${styles.darkButtonWide}`}>
                  ДИВИТИСЬ ВСІ <span>→</span>
                </button>
            </section>
        </div>
    );
}