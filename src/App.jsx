import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Contacts from "./components/section/Contacts";
import Direction from "./components/section/Direction";
import Introduction from "./components/section/Introduction";
import Projects from "./components/section/Projects";
import Skill from "./components/section/Skill";

export default function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Introduction />
        <Projects />
        <Direction />
        <Skill />
        <Contacts />
        <Footer />
      </div>
    </>
  );
}
