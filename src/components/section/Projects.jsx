import Sezione from "../layout/Sezione";
import style from "./Projects.module.css";
import Project from "../ui/Project";

export default function Projects() {
  return (
    <>
      <Sezione className={style.projects_section}>
        <div className={style.projects_grid}>
          <Project />
        </div>
      </Sezione>
    </>
  );
}
