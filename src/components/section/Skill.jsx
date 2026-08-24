import Sezione from "../layout/Sezione";
import style from "./Skill.module.css";
import competenze from "../../objects/Competenze";

export default function Skill({ t }) {
  return (
    <>
      <Sezione id="competenze" className={style.skill_section}>
        <div className={style.info_row}>
          <p>04</p>
          <p className={style.info_title}>{t.titolo_competenze}</p>
        </div>
        {competenze.map((c) => {
          return (
            <div key={`${c.tipo}_column`} className={style.skill_column}>
              <p key={`comp_${c.tipo}`} className={style.skill_title}>
                {c.tipo === "strumenti"
                  ? t.competenze_strumenti.toUpperCase()
                  : c.tipo.toUpperCase()}
              </p>
              {c.lista.map((l) => (
                <p key={`${c.tipo}_${l}`}>{l}</p>
              ))}
            </div>
          );
        })}
      </Sezione>
    </>
  );
}
