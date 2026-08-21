import Menu from "../ui/Menu";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <p className={styles.bold}>R</p>
        <div className={styles.menu_group}>
          <Menu />
          <div className={styles.buttons_group}>
            <button className={styles.button}>IT</button>
            <button className={styles.button}>.</button>
          </div>
        </div>
      </header>
    </>
  );
}
