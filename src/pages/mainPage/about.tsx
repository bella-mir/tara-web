import { useEffect } from "react";
// import cityChoose from "../../asserts/logos/cityChoose.png";
// import hse from "../../asserts/logos/hse_gray.svg";
import taramap from "../../asserts/Tara_map.png";
import styles from "./main-page.module.scss";
import classNames from "classnames";

export const About = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        const rect = element.getBoundingClientRect();
        const offset = 100;
        window.scrollTo({
          top: rect.top + window.scrollY - offset,
          behavior: "smooth",
        });
      }
    }
  }, [window.location.hash]);

  return (
    <div className={styles.block} id="about">
      <h2 className={styles.blockTitle}>О Проекте</h2>
      <div className={styles.row}>
        <div className={styles.blockColumn}>
          <p className={styles.blockText}>
            В Таре разрабатывается мастер-план – концепция пространственного
            развития города до 2035 года. Документ разрабатывают эксперты
            <a href="https://urban.hse.ru/#consult" target="_blank">
              {" "}
              Высшей школы Урбанистики имени А.А. Высоковского{" "}
            </a>{" "}
            Факультета городского и регионального развития Научного
            исследовательского университета Высшая школа экономики по заказу
            <a href="https://xn--d1aqf.xn--p1ai/urban/" target="_blank">
              {" "}
              Фонда ДОМ.РФ.
            </a>{" "}
            Работу курируют администрация Тарского муниципального района и
            администрация Тарского городского поселения, правительство Омской
            области.
          </p>
          <p className={styles.blockText}>
            Разработка мастер-плана Тары — открытый процесс, в который вовлечены
            разные участники: горожане и их объединения, некоммерческие
            организации, предприятия и бизнес, местные эксперты и культурные
            институции, администрация. За выстраивание диалога всех участников
            отвечают эксперты по соучаствующему проектированию и развитию
            территорий – партнерство Городрешает.рф
          </p>
        </div>
        <div className={classNames(styles.blockColumn, styles.blockMap)}>
          <img src={taramap} className={styles.taraMap} />
        </div>
      </div>
      {/* <div className={styles.blockIcons}>
        <img src={dom} className={styles.logo} />
        <img src={hse} className={styles.logo} />
        <img src={cityChoose} className={styles.logo} />
      </div> */}
    </div>
  );
};
