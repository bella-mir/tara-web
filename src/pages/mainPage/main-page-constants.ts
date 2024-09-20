import bazanchuk from "./asserts/team/bazanchuk.jpeg";
import klimanov from "./asserts/team/klimanov.jpeg";
import mikhaylenko from "./asserts/team/mikhaylenko.jpeg";
import molodceva from "./asserts/team/molodceva.jpeg";
import mugak from "./asserts/team/mugak.png";
import zautdinova from "./asserts/team/zautdiniva.jpeg";
import kostarev from "./asserts/team/kostarev.jpg";
import sevastjanov from "./asserts/team/sevastjanov.jpeg";

import taraEvent from "./asserts/events/Tara_event2.png";
import taraEvent2 from "./asserts/events/Tara_event9.jpg";
import taraEvent4 from "./asserts/events/tara_event4.png";
import taraEvent3 from "./asserts/events/tara_heritage.png";
import taraEvent5 from "./asserts/events/Tara_event10.jpeg";
import taraEvent6 from "./asserts/events/Tara_event7.jpeg";

export const FAQ: { question: string; answer: string }[] = [
  {
    question:
      "Для чего необходимо вовлечение жителей в процесс разработки мастер-плана?",
    answer:
      "Создание мастер-плана Уссурийского городского округа — комплексный процесс, который требует максимального вовлечения всех заинтересованных сторон, среди которых — местные жители, представители бизнеса, органов власти и экспертного сообщества. Именно такой подход позволяет учесть интересы самого широкого круга людей, повышает качество проработанности пространственно-аналитических решений, от которых зависит создание комфортной городской среды в ближайшем будущем. Благодаря вовлечению местных жителей возможно формирование чувства глубокой сопричастности к значительным изменениям на территории проживания. Создание подобной платформы, на который Вы сейчас находитесь, необходимо для привлечения самого широкого круга лиц, и является одним из действенных инструментов по вовлечению местных жителей в разработку современных урбанистических решений.",
  },
  {
    question:
      "Как будут использованы идеи, собранные с помощью платформы «Чего хочет Уссурийск»?",
    answer:
      "Собранные идеи будут проанализированы сотрудниками администрации Уссурийского ГО и специалистами Факультета городского и регионального развития НИУ ВШЭ. На основе идей, предложенных на платформе «Чего хочет Уссурийск», будет подготовлен отчет, который будет размещен на этом портале и на сайте администрации Уссурийского ГО. Предложенные идеи и сформированный отчет лягут в основу принятия решений в рамках разработки мастер-плана городского округа Уссурийск и при принятии дальнейших урбанистических решений.",
  },
  {
    question: "Будут опубликованы все идеи?",
    answer:
      "Предложения идей проходят модерацию и только после первичного анализа будут опубликованы на карте и в каталоге идей.",
  },
];

export const STAGES = [
  {
    title: "Комплексный анализ города",
    dateRange: "Август - Сентябрь",
    description:
      "Проводим пространственный, градостроительный, социально-экономический анализ города, а также социокультурное исследование через интервью, онлайн-опрос и работу с историей Тары.",
  },
  {
    title:
      "Формируем видение с горожанами – задание на разработку мастер-плана",
    dateRange: "Сентябрь",
    description:
      "Собираем идеи горожан на интерактивной карте. Проводим серию проектных сессий и конференцию, на которых обсуждаем ценности и будущее Тары, договариваемся о целях, задачах, принципах и приоритетных направлениях развития города. Публикуем результаты социокультурного исследования и проектных сессий.",
  },
  {
    title: "Разработка предварительного мастер-плана",
    dateRange: "Октябрь - Ноябрь",
    description:
      "Разрабатываем концептуальную часть мастер-плана и предлагаем приоритетные направления развития города.",
  },
  {
    title: "Обсуждаем и оцениваем с горожанами концептуальный мастер-план",
    dateRange: "Ноябрь",
    description:
      "Публикуем концептуальный мастер-план с основными направлениями развития. Собираем обратную связь от горожан на сайте проекта и публичных мероприятиях, оцениваем направления развития мастер-плана с точки зрения соответствия тем ценностям, целям, задачам и принципам, которые сформировали на этапе задания. Результат этапа – список рекомендаций и уточнений для доработки мастер-плана.",
  },
  {
    title: "Доработка мастер-плана",
    dateRange: "Декабрь - Февраль",
    description:
      "Исправляем и вносим изменения по итогам обсуждений и оценки горожан, детально прорабатываем приоритетные направления развития.",
  },
  {
    title: "Презентация итогового мастер-плана",
    dateRange: "Март",
    description:
      "Публикуем мастер-план и проводим публичную презентацию, на которой подробно объясняем какие запросы горожан были учтены, а какие учесть не удалось (если такие будут) и по каким причинам.",
  },
];

export const TEAM_MEMBERS = [
  {
    photo: mugak,
    name: "Мугак Николай Анатольевич",
    description:
      "Первый заместитель Главы Тарского муниципального района по вопросам строительства и сельского хозяйства",
  },

  {
    photo: bazanchuk,
    name: "Базанчук Ксения",
    description:
      "Руководитель отдела аналитического сопровождения проектов Фонда ДОМ.РФ",
  },
  {
    photo: zautdinova,
    name: "Зиатдинова Саида",
    description: "Руководитель проектов Фонда ДОМ.РФ",
  },
  {
    photo: mikhaylenko,
    name: "Михайленко Евгений Константинович",
    description: "Декан Факультета городского и регионального развития НИУ ВШЭ",
  },
  {
    photo: molodceva,
    name: "Молодцова Варвара",
    description:
      "Заместитель руководителя Высшей школы урбанистики им.А.А.\u00A0Высоковского, Факультет городского и регионального развития НИУ ВШЭ",
  },

  {
    photo: klimanov,
    name: "Климанов Максим",
    description:
      "Ведущий инженер Высшей школы урбанистики им.А.А.\u00A0Высоковского, Факультет городского и регионального развития НИУ ВШЭ",
  },
  {
    photo: sevastjanov,
    name: "Севастьянов Илья",
    description:
      "Эксперт по развитию территорий с участием граждан, партнер Городрешает.рф, преподаватель Высшей школы урбанистики им.А.А.\u00A0Высоковского, Факультет городского и регионального развития НИУ ВШЭ",
  },
  {
    photo: kostarev,
    name: "Костарев Сергей",
    description:
      "Методолог общественного участия, партнер Городрешает.рф, доктор философских наук, профессор кафедры «Связи с общественностью, сервис и туризм» ОмГУПС",
  },
];

export const EVENTS = [
  {
    date: "17 сентября, 16:00",
    title: "Экскурсия «Тара – музей под открытым небом»",
    description: `Пройдем по маршруту знаковых памятников архитектуры на Ленина - Дзержинского - Спасская - Карбышева - Советская - Александровская - Избышева. Цель – обсудить наследие города и осмотреть в каком состоянии находятся памятники архитектуры и как следует их сохранять.
    Ведущие: историк Денис Сугоняк (Тарский уезд) и Василий Александров (администрация).`,
    imageSrc: taraEvent3,
    location: "Тара, центр города",
    link: "https://forms.gle/8tvhLF9jBjshJtBx5",
  },
  {
    date: "18 сентября, 15:30 – 21:00",
    title: "Конференция «Ценности, риски развития и видение будущего Тары»",
    description: `Приглашаем вас вместе подумать о будущем Тары и определить требования к мастер плану. На конференции тарчане определят ценности, а затем в соответствии с ними предложат свои варианты видения будущего Тары.`,
    imageSrc: taraEvent2,
    location: "КДЦ «Север»",
    link: "https://forms.gle/miwGLkZbmn8HTt5W6",
  },
  {
    date: "19 сентября 15:00 – 17:00",
    title: "Круглый стол «Бизнес в Таре: ограничения и перспективы развития»",
    description: `Приглашаем предпринимателей обсудить преимущества и риски ведения производства в городе, существующие формы поддержки бизнеса, перспективные направления работы в рамках создания мастер-плана.`,
    imageSrc: taraEvent,
    location: "КДЦ «Север»",
    link: "https://forms.gle/LR5z1pESjdk1DWfs5",
  },
  {
    date: "19 сентября, 18:00",
    title: "Экскурсия «Общественные пространства до и после благоустройства»",
    description: `Пройдем по маршруту пл. Юбилейная - пл. Ленина - Пушкинский сквер - Парк культуры и отдыха - Никольский дворик. Обсудим, как благоустройство меняет жизнь горожан и какие есть проблемы.`,
    imageSrc: taraEvent4,
    location: "Тара, центральные улицы",
    link: "https://forms.gle/AQrnTQRvVvC9bJZZ7",
  },
  {
    date: "20 сентября, 15:00 – 17:00 ",
    title:
      "Проектная встреча «Образование, культура и здоровье в мастер-плане Тары»",
    description: `Приглашаем в экспертную группу специалистов из сферы культуры, туризма, образования и здравоохранения, чтобы подробно обсудить проблемы и возможности развития каждой сферы в мастер-плане Тары.`,
    imageSrc: taraEvent6,
    location: "КДЦ «Север»",
    link: "https://forms.gle/VLw7hxQB1V6Bms5x9 ",
  },
  {
    date: "20 сентября, 18:15 ",
    title: "Встреча с разработчиками мастер-плана",
    description: `В рамках серии мероприятий библиотеки «Гений места» пройдет встреча с разработчиками мастер-плана: «Мастер-план как инструмент развития территорий: опыт российских городов и перспективы мастер-планирования для Тары» – Максим Климанов, Юрий Кульчицкий. Подведение первых итогов «Недели мастер-плана» – Илья Севастьянов
`,
    imageSrc: taraEvent5,
    location: "Тарская библиотека имени Л. Н. Чашечникова",
    link: "https://forms.gle/KbwGi1wRQhAgs6gy7",
  },
];