import styles from "./Menu.module.css";

export default function Menu({ t }) {
  console.log("T:", t);
  console.log("COMPETENZE:", t?.menu_competenze);
  const voci = [
    { href: "#chi-sono", label: t.menu_chi_sono },
    { href: "#progetti", label: t.menu_progetti },
    { href: "#percorso", label: t.menu_percorso },
    { href: "#competenze", label: t.menu_competenze },
    { href: "#contatti", label: t.menu_contatti },
  ];

  return (
    <>
      <nav className={styles.menu}>
        <ul>
          {voci.map((v) => (
            <li key={v.href}>
              <a href={v.href}>{v.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
