import Menu from "../ui/Menu";
import styles from "./Header.module.css";

export default function Header({
  tema,
  language,
  onCambiaTema,
  onCambiaLingua,
  t,
}) {
  return (
    <>
      <header className={styles.header}>
        <p className={styles.bold}>R</p>
        <div className={styles.menu_group}>
          <Menu t={t} />
          <div className={styles.buttons_group}>
            <button className={styles.button} onClick={onCambiaLingua}>
              {language.toUpperCase()}
            </button>
            <button className={styles.button} onClick={onCambiaTema}>
              {tema === "scuro" ? "☾" : "☀"}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
