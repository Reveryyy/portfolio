import style from "./Sezione.module.css";

export default function Sezione({ children, className, id }) {
  return (
    <>
      <div id={id} className={`${style.section} ${className || ""}`}>
        {children}
      </div>
      <div className={style.separator} />
    </>
  );
}
