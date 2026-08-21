import { useState, useEffect } from "react";
import linguaggi from "../../objects/Linguaggi";
import styles from "./LanguagesAnimation.module.css";

export default function LanguagesAnimations() {
  const [text, setText] = useState("");
  const [languageIndex, setLanguageIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const currentText = `${linguaggi[languageIndex].linguaggio} ∙ ${
    linguaggi[languageIndex].specializzazione
      ? linguaggi[languageIndex].specializzazione
      : linguaggi[languageIndex].stato
  }`.toUpperCase();

  const speedEffect = deleting ? 35 : 100;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!deleting) {
        // Scrivere
        if (text.length < currentText.length) {
          setText(currentText.substring(0, text.length + 1));
        } else {
          setTimeout(() => {
            setDeleting(true);
          }, 1200);
        }
      } else {
        // Cancellare
        if (text.length > 0) {
          setText(currentText.substring(0, text.length - 1));
        } else {
          setLanguageIndex(
            languageIndex === linguaggi.length - 1 ? 0 : languageIndex + 1,
          );
          setDeleting(false);
        }
      }
    }, speedEffect);
    return () => clearTimeout(timer);
  }, [text, currentText, deleting, languageIndex, speedEffect]);

  return (
    <>
      <p className={styles.languagesAnimation}>
        {text}
        <span className={styles.Cursor}>|</span>
      </p>
    </>
  );
}
