import style from "./Contacts.module.css";
import Sezione from "../layout/Sezione";

export default function Contacts({ t }) {
  return (
    <>
      <Sezione id="contatti" className={style.contacts_section}>
        <div className={style.info_row}>
          <p>05</p>
          <p className={style.info_title}>{t.titolo_contatti}</p>
        </div>

        <div className={style.section_row}>
          <div className={style.column}>
            <p className={style.title}>{t.parliamo_codice}</p>
            <p className={style.description}>
              {t.contatti_desc1}
              <br />
              {t.contatti_desc2}
            </p>
          </div>
          <div className={style.utils_column}>
            <a
              className={style.utils_link}
              href="mailto:reveryycontact@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              reveryycontact@gmail.com ↗
            </a>
            <a
              className={style.utils_link}
              href="https://github.com/Reveryyy"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/reveryyy ↗
            </a>
            <a
              className={style.utils_link}
              href="https://t.me/ImReveryy"
              target="_blank"
              rel="noopener noreferrer"
            >
              t.me/ImReveryy ↗
            </a>
          </div>
        </div>
      </Sezione>
    </>
  );
}
