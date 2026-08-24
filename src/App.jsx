import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Contacts from "./components/section/Contacts";
import Direction from "./components/section/Direction";
import Introduction from "./components/section/Introduction";
import Projects from "./components/section/Projects";
import Skill from "./components/section/Skill";
import { useEffect, useState } from "react";
import traduzioni from "./objects/Traduzioni";

export default function App() {
  const [tema, setTema] = useState(
    () => localStorage.getItem("tema") ?? "scuro",
  );
  const [language, setLanguage] = useState("it");

  const t = traduzioni[language];

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", tema);
    localStorage.setItem("tema", tema);
  }, [tema]);
  return (
    <>
      <div className="page">
        <Header
          tema={tema}
          language={language}
          onCambiaTema={() =>
            setTema((tr) => (tr === "scuro" ? "chiaro" : "scuro"))
          }
          onCambiaLingua={() =>
            setLanguage((tr) => (tr === "it" ? "en" : "it"))
          }
          t={t}
        />
        <Introduction t={t} />
        <Projects t={t} language={language} />
        <Direction t={t} language={language} />
        <Skill t={t} />
        <Contacts t={t} />
        <Footer />
      </div>
    </>
  );
}
