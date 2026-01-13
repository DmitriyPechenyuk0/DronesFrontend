import { Link } from "react-router-dom";
import { ICONS } from "../../shared";
import styles from "./footer.module.css";

export function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.FooterEllipse}>

			</div>
			<div className={styles.stats_div}>
				<div className={styles.stat}>
					<p className={styles.stat_bold} >
					1К+
					</p>
					<p className={styles.stat_thin} >
					Успішних відправок
					</p>
				</div>
				<div className={styles.stat}>
					<p className={styles.stat_bold} >
					1.5К+
					</p>
					<p className={styles.stat_thin} >
					Задоволених клієнтів
					</p>
				</div>
				<div className={styles.stat}>
					<p className={styles.stat_bold} >
					24/7
					</p>
					<p className={styles.stat_thin} >
					Підтримка клієнтів
					</p>
				</div>
			</div>
			<ICONS.DronesBigLogo className={styles.DronesBigLogo} />
			<div className={styles.linkbar}>
				<Link to={"/catalog"}>Каталог</Link>
				<Link to={"/about"}>Про нас</Link>
				<Link to={"/contact"}>Контакти</Link>
				<Link to={"/cart"}>Кошик</Link>
				<Link to={"/users/me"}>Кабінет</Link>
			</div>
			<div className={styles.line}>
				<p>© 2025 Drones Всі права захищені.</p>
			</div>
		</footer>
	);
}