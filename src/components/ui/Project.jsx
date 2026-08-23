import style from "./Project.module.css";

export default function Project({ progetto, className }) {
  const tags = [...new Set(progetto.tags)];
  return (
    <>
      <div
        className={`${style.project} ${className}`}
        onClick={() => {
          window.open(progetto.github, "_blank", "noopener,noreferrer");
        }}
      >
        <div className={style.number_rows}>
          <p>01</p>
          <p>{progetto.anno}</p>
        </div>
        <p id={`${progetto.nome}_title`} className={style.project_title}>
          {progetto.nome}
        </p>
        <p
          id={`${progetto.nome}_description`}
          className={style.project_description}
        >
          {progetto.description}
        </p>
        <div id="tags_row" className={style.tags_row}>
          {tags.map((t) => (
            <p id={t} className={style.tags}>
              {t}
            </p>
          ))}
        </div>
        <div className={style.separator} />
        <div className={style.stato_row}>
          <p>{progetto.stato}</p>
          <p>↗</p>
        </div>
      </div>
    </>
  );
}
