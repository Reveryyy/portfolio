import style from "./Direction.module.css";
import Sezione from "../layout/Sezione";
import percorso from "../../objects/Percorso";

export default function Direction() {
  return (
    <>
      <Sezione id="percorso" className={style.direction_section}>
        <div className={style.info_row}>
          <p>03</p>
          <p className={style.info_title}>Percorso</p>
        </div>
        <div className={style.direction_wrapper}>
          <div className={style.separator} />
          <div className={style.column}>
            {percorso.map((p) => (
              <div className={style.rest_wrapper}>
                <p className={style.rest_date}>
                  {p.inizio} — {p.fine}
                </p>
                <p className={style.rest_name}>{p.nome}</p>
                <p className={style.rest_description}>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Sezione>
    </>
  );
}
