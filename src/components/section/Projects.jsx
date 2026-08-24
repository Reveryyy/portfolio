import Sezione from "../layout/Sezione";
import style from "./Projects.module.css";
import Project from "../ui/Project";
import progetti from "../../objects/Progetti";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Projects({ t, language }) {
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("recenti");
  const [itemsPerRow, setItemsPerRow] = useState(1);
  const [tagActive, setTagActive] = useState("Tutti");

  const gridRef = useRef(null);

  // TAGS UNICI
  const tags = [...new Set(progetti.flatMap((p) => p.tags))];

  // PROGETTI

  useEffect(() => {
    const calculateItemsPerRow = () => {
      if (!gridRef.current) return;

      const items = gridRef.current.children;

      if (items.length === 0) return;

      const firstItemTop = items[0].getBoundingClientRect().top;

      let count = 0;

      for (const item of items) {
        const itemTop = item.getBoundingClientRect().top;

        if (Math.abs(itemTop - firstItemTop) < 1) {
          count++;
        }
      }

      setItemsPerRow(count);
    };

    calculateItemsPerRow();

    window.addEventListener("resize", calculateItemsPerRow);

    return () => {
      window.removeEventListener("resize", calculateItemsPerRow);
    };
  }, []);

  const missing = itemsPerRow === 0 ? 0 : progetti.length - itemsPerRow;

  const orderedProjects =
    order === "recenti"
      ? [...progetti].sort((a, b) => b.anno - a.anno)
      : [...progetti].sort((a, b) =>
          a.nome
            .toLowerCase()
            .trim()
            .localeCompare(b.nome.toLowerCase().trim()),
        );

  const sortedProjects = orderedProjects.filter((p) =>
    t === "it"
      ? p.nome_it.toLowerCase().includes(search.toLowerCase())
      : p.nome_en.toLowerCase().includes(search.toLowerCase()) || t === "it"
        ? p.description_it.toLowerCase().includes(search.toLowerCase())
        : p.description_en.toLowerCase().includes(search.toLowerCase()),
  );

  const projectToShow =
    tagActive === "Tutti"
      ? sortedProjects
      : sortedProjects.filter((p) => p.tags.includes(tagActive));
  return (
    <>
      <Sezione id="progetti" className={style.projects_section}>
        <div className={style.info_row}>
          <div className={style.info_wrapper}>
            <p>02</p>
            <p className={style.section_title}>{t.titolo_progetti}</p>
            <p>
              {progetti.length} {t.progetti_progetti}
            </p>
          </div>
          <div className={style.utils_wrapper}>
            <input
              type="text"
              placeholder={t.progetti_search}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              onClick={() =>
                setOrder(order === "recenti" ? "A-Z" : t.progetti_recenti)
              }
            >
              <span key={order} className={style.order_text}>
                {t.progetti_ordina}:{" "}
                {order === "recenti" ? t.progetti_recenti : order}
              </span>
            </button>
          </div>
        </div>

        <div className={style.tags_list}>
          <button
            key="tags_tutti"
            onClick={() => setTagActive("Tutti")}
            className={`${style.tags_button} ${
              tagActive === "Tutti" ? style.tags_active : ""
            }`}
          >
            {t.progetti_tag_tutti}
          </button>
          {tags.map((tag) => {
            return (
              <button
                key={`tags_${tag}`}
                onClick={() => setTagActive(tag)}
                className={`${style.tags_button} ${
                  tagActive === tag ? style.tags_active : ""
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        <div
          className={`${style.projects_grid_wrapper}  ${showAll ? style.expanded : ""}`}
        >
          <div ref={gridRef} className={style.projects_grid}>
            <AnimatePresence>
              {projectToShow.map((p, index) => (
                <motion.div
                  style={{ width: "100%" }}
                  key={p.nome}
                  layout
                  initial={
                    showAll && index >= itemsPerRow
                      ? { opacity: 0 }
                      : { opacity: 1 }
                  }
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Project key={index} progetto={p} t={t} language={language} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        {!showAll && missing > 0 && (
          <button
            onClick={() => setShowAll(true)}
            className={style.showall_button}
          >
            {t.progetti_mostra_altri} {missing}
          </button>
        )}
      </Sezione>
    </>
  );
}
