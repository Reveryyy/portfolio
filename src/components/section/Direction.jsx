import style from "./Direction.module.css";
import Sezione from "../layout/Sezione";
import percorso from "../../objects/Percorso";

export default function Direction({ t, language }) {
  return (
    <>
      <Sezione id="percorso" className={style.direction_section}>
        <div className={style.info_row}>
          <p>03</p>
          <p className={style.info_title}>{t.titolo_percorso}</p>
        </div>
        <div className={style.direction_wrapper}>
          <div className={style.separator} />
          <div className={style.column}>
            {percorso.map((p, index) => (
              <div key={index} className={style.rest_wrapper}>
                <p key={`${p.nome_it}_durata`} className={style.rest_date}>
                  {p.inizio} —{" "}
                  {p.fine === "oggi" && language === "en" ? "today" : p.fine}
                </p>
                <p key={`${p.nome_it}_nome`} className={style.rest_name}>
                  {language === "it" ? p.nome_it : p.nome_en}
                </p>
                <p
                  key={`${p.nome_it}_description`}
                  className={style.rest_description}
                >
                  {language === "it" ? p.description_it : p.description_en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Sezione>
    </>
  );
}
