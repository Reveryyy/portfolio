import styles from "./Menu.module.css";

export default function Menu() {
  const voci = [
    { href: "#chi-sono", label: "Chi sono" },
    { href: "#progetti", label: "Progetti" },
    { href: "#percorso", label: "Percorso" },
    { href: "#competenze", label: "Competenze" },
    { href: "#contatti", label: "Contatti" },
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
