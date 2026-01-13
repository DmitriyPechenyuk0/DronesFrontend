import styles from "./header.module.css";
import { ICONS } from "../../shared";
import { Link, NavLink, useParams } from "react-router-dom";

export function Header() {
	return (
	<header className={styles.header}>
		<div className={styles.headerWrapper}>
    	    <nav className={styles.navigation}>
    	      <Link to="/catalog" className={styles.link}>
    	        КАТАЛОГ
    	      </Link>
    	      <Link to="/about" className={styles.link}>
    	        ПРО НАС
    	      </Link>
    	      <Link to="/contacts" className={styles.link}>
    	        КОНТАКТИ
    	      </Link>
    	    </nav>

    	    <div className={styles.logoContainer}>
    	      <Link to="/" className={styles.logoText}>DRONES</Link>
    	    </div>

    	    <div className={styles.actions}>
    	      <div className={styles.cartWrapper}>
    	        <span className={styles.cartBadge}>1</span>
    	      </div>
    	      <Link to="/me/1">
    	      </Link>
    	    </div>

    	  </div>
	</header>
	);
}