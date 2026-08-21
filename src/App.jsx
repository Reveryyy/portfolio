import Header from "./components/layout/Header";
import Introduction from "./components/section/Introduction";
import Projects from "./components/section/Projects";

export default function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Introduction />
        <Projects />
      </div>
    </>
  );
}
