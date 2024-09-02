import { Link } from "react-router-dom";
import { Container, Slider, Timeline } from "../../components";
import styles from "./main-page.module.scss";
import { STAGES } from "./main-page-constants";
import { About } from "./about";

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
          <ul className={styles.blockText}>
            <li>жители Тары и их объединения </li>
            <li>предприниматели</li>
            <li>представители крупного, среднего и малого бизнеса</li>
            <li>
              местные эксперты и хранители: краеведы, архитекторы, экологи,
              дизайнеры, менеджеры культуры, художники, археологи,
              реконструкторы, актеры, режиссеры, экономисты и др.
            </li>
            <li>
              культурные институции, некоммерческие организации и активисты
            </li>
            <li>учителя и преподаватели школ, колледжей и ВУЗов</li>
            <li>администрации города и района, управляющие организации</li>
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
            </div>
          </div>
        </div>
      </Container>
      <Container className={styles.blockStages}>
        <div className={styles.block}>
          <h2 className={styles.blockTitle}>Обратная связь</h2>
          <div className={styles.block}>
            <h3>Подписаться на социальные сети проекта</h3>
            <p className={styles.blockText}>
              Подпишитесь на наши социальные сети, чтобы быть в курсе событий
              проекта и узнавать о публикациях исследований, итогов публичных
              встреч и других материалов проекта:
            </p>
          </div>
          <p className={styles.blockText}>
            Если у вас остались вопросы или появились предложения, напишите нам
            на почту gorodreshaet@gmail.com В теме письма напишите «Для
            мастер-плана Тары», в самом письме представьтесь, укажите ваши ФИО,
            номер телефона (или другой удобный способ связи с вами) и опишите
            подробно ваш вопрос или предложение.
          </p>
        </div>
      </Container>
    </>
  );
};
