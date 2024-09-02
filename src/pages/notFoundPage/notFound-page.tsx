import { Link } from "react-router-dom";
import { Container } from "../../components";
import styles from "./notFound-page.module.scss";

export const NotFoundPage = () => {
  return (
    <Container className={styles.content}>
      <h1>404 </h1>
      <h2>Страница не найдена </h2>
      <Link className={styles.link} to={"/"}>
        Вернуться
      </Link>
    </Container>
  );
};
