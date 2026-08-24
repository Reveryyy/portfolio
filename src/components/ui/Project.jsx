import style from "./Project.module.css";

export default function Project({ progetto, className, t, language }) {
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
          {language === "it" ? progetto.nome_it : progetto.nome_en}
        </p>
        <p
          id={`${progetto.nome}_description`}
          className={style.project_description}
        >
          {language === "it"
            ? progetto.description_it
            : progetto.description_en}
        </p>
        <div id="tags_row" className={style.tags_row}>
          {tags.map((tag) => (
            <p key={tag} className={style.tags}>
              {tag}
            </p>
          ))}
        </div>
        <div className={style.separator} />
        <div className={style.stato_row}>
          <p>{language === "it" ? progetto.stato_it : progetto.stato_en}</p>
          <p>↗</p>
        </div>
      </div>
    </>
  );
}
