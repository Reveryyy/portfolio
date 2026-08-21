import Header from "./components/layout/Header";
import Sezione from "./components/layout/Sezione";
import Introduction from "./components/section/Introduction";

export default function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Introduction />
        <Sezione>
          <p> Sezione 2</p>
        </Sezione>
      </div>
    </>
  );
}
