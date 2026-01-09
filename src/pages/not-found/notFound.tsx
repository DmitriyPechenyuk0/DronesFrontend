import {ICONS} from "../../shared/icons";
import styles from "./notFound.module.css";
export function NotFound() {
    return (
        <div className={styles.container}>
            <img className = {styles.icon} src={ICONS.notFound}/>
            <h1 className={styles.title}>404 - Page Not Found</h1>
            <p className={styles.message}>The page you are looking for does not exist.</p>
        </div>
    );
}    