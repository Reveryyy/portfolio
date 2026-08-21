import style from "./Project.module.css";

export default function Project() {
  return (
    <>
      <div className={style.project}>
        <div className={style.number_rows}>
          <p>01</p>
          <p>2026</p>
        </div>
        <p id={`_title`} className={style.project_title}>
          Titolo
        </p>
        <p id={`_description`} className={style.project_description}>
          prova 1
        </p>
      </div>
    </>
  );
}
/*

        
        <p className={style.project_tags}>tag</p>
        <div className={style.separator} />
        <div className={style.stato_row}>
          <p className={style.stato}>In corso</p>
          <p>-</p>
        </div>
*/
