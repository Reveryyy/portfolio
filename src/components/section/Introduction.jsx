import Sezione from "../layout/Sezione";
import Cerchio from "../ui/Cerchio";
import LanguagesAnimations from "../ui/LanguagesAnimation";
import style from "./Introduction.module.css";

export default function IntroductionSection() {
  const annoCorrente = new Date();
  const anni = annoCorrente.getFullYear() - 2021;
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
            Studente di informatica e telecomunicazioni. Scrivo software
            <br />
            da quando avevo undici anni: backend in Java, client in Kotlin, e
            <br />
            adesso React.
          </p>
          <div id="buttons_row" className={style.buttons_row}>
            <button
              id="projects"
              className={`${style.button} ${style.projects_button}`}
              onClick={() =>
                document.getElementById("progetti").scrollIntoView()
              }
            >
              Vedi i progetti
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
              <p className={style.info_text}>anni di codice</p>
            </div>
            <div id="anni" className={style.projects_column}>
              <p className={style.number_data}>0</p>
              <p className={style.info_text}>progetti</p>
            </div>
            <div id="anni" className={style.linguaggi_column}>
              <p className={style.number_data}>3</p>
              <p className={style.info_text}>linguaggi principali</p>
            </div>
          </div>
        </div>
      </Sezione>
    </>
  );
}
