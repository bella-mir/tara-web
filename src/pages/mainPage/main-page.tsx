import { Link } from "react-router-dom";
import { Container, Slider, Timeline } from "../../components";
import styles from "./main-page.module.scss";
import { STAGES } from "./main-page-constants";
import { About } from "./about";
import { CheckCircleFilled } from "@ant-design/icons";
import vk from "../../asserts/logos/vk_blue.svg";
import tg from "../../asserts/logos/tg_blue.svg";

export const MainPage = () => {
  return (
    <>
      <Container className={styles.main}>
        <div className={styles.text}>
          <h1 className={styles.title}>МАСТЕР-ПЛАН ТАРЫ</h1>
          <p className={styles.subtitle}>
            Тара решает, как должен развиваться город
          </p>
          <div className={styles.row}>
            <Link to="/form" className={styles.buttonLink}>
              Участвовать
            </Link>
          </div>
        </div>
      </Container>
      <Container className={styles.blockAbout}>
        <About />
        <Slider
          slides={[
            <div className={styles.slide}>Slide 1</div>,
            <div className={styles.slide}>Slide 2</div>,
            <div className={styles.slide}>Slide 3</div>,
          ]}
        />
      </Container>
      <Container className={styles.blockStages}>
        <div className={styles.block}>
          <h2 className={styles.blockTitle}>Этапы проекта</h2>
          <p className={styles.blockText}>
            Мастер-план разрабатывается с августа 2024 года по март 2025 года
          </p>
          <Timeline stages={STAGES} />
        </div>
      </Container>
      <Container className={styles.blockStages}>
        <div className={styles.block}>
          <h2 className={styles.blockTitle}>Участие в проекте</h2>
          <h3>Кто может участвовать в открытых мероприятиях проекта?</h3>
          <ul className={styles.blockList}>
            <li className={styles.listElement}>
              <CheckCircleFilled style={{ color: "#4faa66" }} />
              <span>жители Тары и их объединения</span>
            </li>
            <li className={styles.listElement}>
              <CheckCircleFilled style={{ color: "#4faa66" }} />
              <span> предприниматели</span>
            </li>
            <li className={styles.listElement}>
              <CheckCircleFilled style={{ color: "#4faa66" }} />
              <span>представители крупного, среднего и малого бизнеса</span>
            </li>
            <li className={styles.listElement}>
              <CheckCircleFilled style={{ color: "#4faa66" }} />
              <span>местные эксперты и хранители</span>

              {/* <p className={styles.blockListAdd}>
                краеведы, архитекторы, экологи, дизайнеры, менеджеры культуры,
                художники, археологи, реконструкторы, актеры, режиссеры,
                экономисты и др.
              </p> */}
            </li>
            <li className={styles.listElement}>
              <CheckCircleFilled style={{ color: "#4faa66" }} />
              <span>культурные институции</span>
            </li>
            <li className={styles.listElement}>
              <CheckCircleFilled style={{ color: "#4faa66" }} />
              <span>некоммерческие организации, активисты</span>
            </li>
            <li className={styles.listElement}>
              <CheckCircleFilled style={{ color: "#4faa66" }} />
              <span>учителя и преподаватели школ, колледжей и ВУЗов</span>
            </li>
            <li className={styles.listElement}>
              <CheckCircleFilled style={{ color: "#4faa66" }} />
              <span>администрации города и района</span>
            </li>
          </ul>
          <h3>Как тарчане могут высказать свое мнение?</h3>
          <div className={styles.cards}>
            <div className={styles.card}>
              <span className={styles.cardTime}>2 – 25 сентября</span>
              <span className={styles.cardTitle}>Онлайн опрос</span>
              <span className={styles.cardDescription}>
                Результаты будут опубликованы и использованы для составления
                задания на разработку мастер-плана
              </span>
              <div className={styles.cardButton}>Пройти опрос</div>
            </div>
            <div className={styles.card}>
              <span className={styles.cardTime}>9 сентября – 23 октября</span>
              <span className={styles.cardTitle}>
                Интерактивная карта для сбора идей
              </span>
              <span className={styles.cardDescription}>
                На карте можно отметить важные места, проблемные участки или
                предложить идею, решение проблемы в конкретном месте города.
                Результаты будут опубликованы и использованы для составления
                задания на разработку мастер-плана
              </span>
              <div className={styles.cardButton}>Предложить идеи</div>
            </div>
          </div>
        </div>
      </Container>
      <Container className={styles.blockStages}>
        <h2 className={styles.blockTitle}>Обратная связь</h2>
        <h3>Социальные сети</h3>

        <div className={styles.rowSocials}>
          <p className={styles.blockText}>
            Подпишитесь на наши социальные сети, чтобы быть в курсе событий
            проекта и узнавать о публикациях исследований, итогов публичных
            встреч и других материалов проекта:
          </p>
          <div className={styles.links}>
            <Link to="https://vk.com/tara_strategy" target="_blank">
              <img src={vk} alt="Vk Logo" className={styles.mediaIcon} />
            </Link>
            <Link to="https://t.me/tara_strategy" target="_blank">
              <img src={tg} alt="TG Logo" className={styles.mediaIcon} />
            </Link>
          </div>
        </div>
        <h3>Остались вопросы?</h3>
        <div className={styles.block}>
          <p className={styles.blockText}>
            Если у вас остались вопросы или появились предложения, напишите нам
            на почту <strong>gorodreshaet@gmail.com</strong>. В теме письма
            напишите «Для мастер-плана Тары», в самом письме представьтесь,
            укажите ваши ФИО, номер телефона (или другой удобный способ связи с
            вами) и опишите подробно ваш вопрос или предложение.
          </p>
        </div>
      </Container>
    </>
  );
};
