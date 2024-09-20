import { Link, useLocation } from "react-router-dom";
import {
  CollapsibleBlock,
  Container,
  Slider,
  Timeline,
} from "../../components";
import styles from "./main-page.module.scss";
import { EVENTS, STAGES, TEAM_MEMBERS } from "./main-page-constants";
import { About } from "./about";
import vk from "../../asserts/logos/vk_blue.svg";
import tg from "../../asserts/logos/tg_blue.svg";
import goncharov from "./asserts/team/goncharov.jpg";
import finogenov from "./asserts/team/finogenov.jpg";
import lysenkov from "./asserts/team/lysenkov.jpeg";
import shipilenko from "./asserts/team/shpilenko.jpg";
import { useEffect } from "react";
import { EventCardList, TeamMembersList } from "./components ";

export const MainPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        const yOffset = -100;
        const yPosition =
          element.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({
          top: yPosition,
          behavior: "smooth",
        });
      }
    }
  }, [hash]);

  return (
    <>
      <Container className={styles.main}>
        <div className={styles.text}>
          <h1 className={styles.title}>МАСТЕР-ПЛАН ТАРЫ</h1>
          <p className={styles.subtitle}>
            Тара решает, как должен развиваться город
          </p>
          <div>
            <Link to="/#particip" className={styles.buttonLink}>
              Участвовать
            </Link>
          </div>
        </div>
        <p className={styles.photoCopyright}>Фото Александра Котелкина</p>
      </Container>
      <Container className={styles.blockAbout}>
        <About />
      </Container>
      <Container className={styles.blockCollapse}>
        <CollapsibleBlock header="Что такое мастер-план и зачем он нужен Таре?">
          <p>
            Мастер-план — концепция пространственного развития города, которая
            включает в себя планы по развитию экономики и поддержке бизнеса,
            развитию социальной инфраструктуры, объектов культуры и туризма,
            работу с жилым фондом и создание благоустроенного городского
            пространства, удобного для всех. Мастер-план не ставит жёстких
            предписаний, может меняться и адаптироваться под текущие условия.
          </p>
          <p>
            Создание мастер-плана Тары — комплексный процесс, который требует
            максимального вовлечения всех заинтересованных сторон, среди которых
            — местные жители, представители бизнеса, органов власти и
            экспертного сообщества. Именно такой подход позволяет учесть
            интересы самого широкого круга людей, повышает качество проработки
            пространственно-аналитических решений, от которых зависит создание
            комфортной городской среды в ближайшем будущем.
          </p>
          <p>
            Собранные идеи по развитию города и обозначенные проблемы будут
            проанализированы разработчиками и вовлеченными в процесс разработки
            представителями органов власти. На основе идей, предложенных на
            платформе, будет подготовлен отчет, который также будет доступен на
            этом сайте. Идеи по развитию города и необходимость работать с
            выявленными проблемами лягут в основу принятия решений мастер-плана
            Тары.
          </p>
        </CollapsibleBlock>
      </Container>

      <Container className={styles.blockSlider}>
        <Slider
          slides={[
            <div className={styles.slide}>
              <div className={styles.quote}>
                <div className={styles.text}>
                  Благодаря такому инструменту, как мастер-план Тары, мы получим
                  сбалансированное городское пространство, созданное с учетом
                  мнения жителей старейшего города Сибири, экспертов, органов
                  власти и представителей бизнеса. В процессе составления
                  документа будут учтены различные аспекты, включая концепции
                  социально-экономического и пространственного развития,
                  интеграцию транспортной, жилищно-коммунальной, энергетической
                  и других видов инфраструктуры.
                  <p>
                    Такой подход позволит эффективно использовать городскую
                    территорию, обозначить потенциал для развития бизнеса и
                    обеспечить благополучие жителей города. Таким образом,
                    разработка мастер-плана Тары необходима для формирования
                    современного, функционального и удобного городского
                    пространства, способствующего повышению качества жизни
                    горожан.
                  </p>
                </div>
                <div className={styles.sign}>
                  <span>Андрей Викторович Шпиленко,</span>
                  <span>
                    заместитель Председателя Правительства Омской области,
                    представитель Омской области при Правительстве Российской
                    Федерации
                  </span>
                </div>
              </div>
              <div className={styles.photoColumn}>
                <div className={styles.photoFrame}>
                  <img src={shipilenko} className={styles.photo} />
                </div>
              </div>
            </div>,
            <div className={styles.slide}>
              <div className={styles.quote}>
                <div className={styles.text}>
                  Мастер-план должен объединять элементы генерального плана и
                  стратегии социально-экономического развития территории. Это
                  документ, который описывает вектор движения города с учётом
                  имеющихся и перспективных возможностей. Одна из задач, которую
                  решает подобный документ, — повышение качества городской
                  среды. В этой связи очень важно, чтобы было услышано мнение
                  жителей о том, каким они видят будущее своего города и пути
                  его развития
                </div>
                <div className={styles.sign}>
                  <span>Антон Владимирович Финогенов,</span>
                  <span>
                    заместитель генерального директора Фонда «ДОМ.РФ», директор
                    по развитию городской среды АО«ДОМ.РФ»
                  </span>
                </div>
              </div>{" "}
              <div className={styles.photoColumn}>
                <div className={styles.photoFrame}>
                  <img src={finogenov} className={styles.photo} />
                </div>
              </div>
            </div>,
            <div className={styles.slide}>
              <div className={styles.quote}>
                <div className={styles.text}>
                  Мастер-план затрагивает разные масштабы и направления, на
                  несколько лет вперед определяет векторы развития Тары: в
                  культуре, туризме, образовании, промышленности и сельском
                  хозяйстве, транспортной, социальной и жилищной сфере,
                  благоустройстве и сохранении культурного наследия. Важно, что
                  эту работу мы будем делать вместе с жителями города, ведь все
                  преобразования должны вести к повышению качества их жизни
                </div>
                <div className={styles.sign}>
                  <span>Евгений Николаевич Лысаков,</span>
                  <span>глава Тарского муниципального района</span>
                </div>
              </div>
              <div className={styles.photoColumn}>
                <div className={styles.photoFrame}>
                  <img src={lysenkov} className={styles.photo} />
                </div>
              </div>
            </div>,
            <div className={styles.slide}>
              <div className={styles.quote}>
                <div className={styles.text}>
                  Тара играет особую роль в системе расселения Омской области,
                  обеспечивая окружающие территории множеством услуг, обладает
                  богатым историческим наследием. Уникальность города несомненно
                  должна быть отражена в разрабатываемом мастер-плане. Изучение
                  мнения горожан и вовлечение широкого круга городских и
                  региональных заинтересованных лиц - один из ключевых этапов
                  разработки этого документа. Только в эффективной и оперативной
                  коммуникации с горожанами, представителями бизнеса, местным и
                  региональным органами власти можно создать действительно
                  работающий и полезный документ, который сможет привлечь в
                  город инвестиции, сделать его комфортным и привлекательным для
                  жизни
                </div>
                <div className={styles.sign}>
                  <span>Руслан Вячеславович Гончаров,</span>
                  <span>
                    {" "}
                    руководитель Высшей школы урбанистики им.А.А. Высоковского,
                    факультет городского и регионального развития НИУ ВШЭ
                  </span>
                </div>
              </div>
              <div className={styles.photoColumn}>
                <div className={styles.photoFrame}>
                  <img src={goncharov} className={styles.photo} />
                </div>
              </div>
            </div>,
          ]}
        />
      </Container>
      <Container className={styles.blockTeam}>
        <h2 className={styles.blockTitle}>Команда проекта</h2>
        <TeamMembersList members={TEAM_MEMBERS} />
      </Container>
      <Container>
        <div className={styles.block}>
          <h2 className={styles.blockTitle}>Этапы проекта</h2>
          <p className={styles.blockText}>
            Мастер-план разрабатывается с августа 2024 года по март 2025 года
          </p>
          <Timeline stages={STAGES} />
        </div>
      </Container>
      <Container className={styles.blockParticipation}>
        <div className={styles.block} id="particip">
          <h2 className={styles.blockTitle}>Участие в проекте</h2>
          <h3>Как тарчане могут высказать свое мнение?</h3>
          <div className={styles.blockText}>
            «Участником проекта мастер-плана Тары может стать каждый тарчанин.
            Ведь вы хорошо знаете город, каждый день ходите по его улицам,
            работаете, отдыхаете, учитесь, растите детей, у вас есть мечты и
            мысли о том, что стоит изменить. Участвуя в проекте, вы фиксируете
            свои предложения для будущего Тары в открытом задании на разработку
            мастер-плана.
            <p>
              Во время совместной работы над таким заданием, мы бы хотели ближе
              познакомиться с разными активными группами тарчан, наладить новые
              связи между разными инициативами, а также использовать этот
              проект, чтобы наладить диалог горожан с администрацией.
            </p>
            <p>
              Пройти опрос, оставить предложение на карте, прийти на экскурсию
              по городу с разработчиками, стать участников конференции или одной
              из проектных встреч — выбирайте свой способ участия и
              присоединяйтесь к команде проекта. Итоги обсуждений и опросов
              «Недели мастер-плана» станут заданием для разработчиков из Высшей
              школы экономики»
            </p>
            <p>
              Илья Севастьянов, партнер команды{" "}
              <a href="https://xn--80afdeb4capcx7d.xn--p1ai/" target="_blank">
                Городрешает.рф
              </a>
            </p>
          </div>
          <h3>Открытые события «Недели мастер-плана» 17 – 20 сентября</h3>
          <EventCardList events={EVENTS} />
          <h3>Пройти опрос или оставить предложение на карте</h3>
          <div className={styles.cards}>
            <div className={styles.card}>
              <span className={styles.cardTime}>2 – 28 сентября</span>
              <span className={styles.cardTitle}>Онлайн опрос</span>
              <span className={styles.cardDescription}>
                Анонимный онлайн-опрос, который поможет понять, какие изменения
                нужны в Таре, увидеть сильные и слабые стороны Тары, её болевые
                точки, вещи, над которыми стоит поработать в первую очередь,
                глазами жителей. Результаты будут опубликованы и использованы
                для составления задания на разработку мастер-плана
              </span>
              <Link
                to="https://forms.gle/aLD9HcHRuQA2eBfH8"
                target="_blank"
                className={styles.cardButton}
              >
                Пройти опрос
              </Link>
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
              <Link to="/form" target="_blank" className={styles.cardButton}>
                Предложить идеи
              </Link>
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
            проекта и узнавать о публикациях исследований, итогах публичных
            встреч и других материалах проекта
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
        <div className={styles.rowSocials}>
          <p className={styles.blockText}>
            Если у вас остались вопросы или появились предложения, напишите нам
            на почту <strong>masterplantary@hse.ru</strong> В теме письма
            напишите «Для мастер-плана Тары», в самом письме представьтесь,
            укажите ваши ФИО, номер телефона (или другой удобный способ связи с
            вами) и опишите подробно ваш вопрос или предложение
          </p>
          <div className={styles.blockText}></div>
        </div>
      </Container>
    </>
  );
};