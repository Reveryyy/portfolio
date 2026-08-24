import Sezione from "../layout/Sezione";
import Cerchio from "../ui/Cerchio";
import LanguagesAnimations from "../ui/LanguagesAnimation";
import style from "./Introduction.module.css";
import progetti from "../../objects/Progetti";

export default function IntroductionSection({ t }) {
  const annoCorrente = new Date();
  const anni = annoCorrente.getFullYear() - 2021;

  const linguaggi = [...new Set(progetti.flatMap((p) => p.tags))];

  return (
    <>
      <Sezione id="chi-sono" className={style.introduction_section}>
        <Cerchio />
        <div id="info-column" className={style.column}>
          <LanguagesAnimations />
          <div className={style.titolo_wrapper}>
            <p className={style.number}>01</p>
            <p className={style.title}>Reveryy</p>
          </div>
          <p className={style.subtitle}>
            {t.percorso_desc1}
            <br />
            {t.percorso_desc2}
            <br />
            {t.percorso_desc3}
          </p>
          <div id="buttons_row" className={style.buttons_row}>
            <button
              id="projects"
              className={`${style.button} ${style.projects_button}`}
              onClick={() =>
                document.getElementById("progetti").scrollIntoView()
              }
            >
              {t.percorso_project_button}
            </button>
            <button
              id="github"
              className={`${style.button} ${style.github_button}`}
              onClick={() => {
                window.open(
                  `https://github.com/Reveryyy`,
                  `_blank`,
                  `noopener,noreferrer`,
                );
              }}
            >
              GitHub
            </button>
          </div>

          <div id="info_row" className={style.info_row}>
            <div id="anni" className={style.anni_column}>
              <p className={style.number_data}>{anni}</p>
              <p className={style.info_text}>{t.percorso_anni_codice}</p>
            </div>
            <div id="anni" className={style.projects_column}>
              <p className={style.number_data}>{progetti.length}</p>
              <p className={style.info_text}>{t.percorso_progetti}</p>
            </div>
            <div id="anni" className={style.linguaggi_column}>
              <p className={style.number_data}>{linguaggi.length}</p>
              <p className={style.info_text}>{t.percorso_linguaggi}</p>
            </div>
          </div>
        </div>
      </Sezione>
    </>
  );
}
