import style from "./Sezione.module.css";

export default function Sezione({ children, className, id }) {
  console.log("OGGETTO STYLE:", style);
  return (
    <>
      <div id={id} className={`${style.section} ${className || ""}`}>
        {children}
      </div>
    </>
  );
}
