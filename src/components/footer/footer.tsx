import styles from "./footer.module.scss";
import vk from "../../asserts/logos/vk.svg";
import tg from "../../asserts/logos/tg.svg";
import cityChoose from "../../asserts/logos/cityChoose.png";
import hseLogo from "../../asserts/logos/hseLogo.svg";
import domLogo from "../../asserts/logos/logo-dom-rf.png";
import { Link } from "react-router-dom";
import { Container } from "../container";

export const Footer = () => {
  return (
    <Container className={styles.footer__wrapper}>
      <footer className={styles.footer}>
        <img src={domLogo} alt="DOM Logo" className={styles.logo} />
        <img src={hseLogo} alt="HSE Logo" className={styles.logo} />
        <img src={cityChoose} alt="City Choose" className={styles.logo} />

        <div className={styles.links}>
          <Link to="https://vk.com/tara_strategy" target="_blank">
            <img src={vk} alt="Vk Logo" />
          </Link>
          <Link to="https://t.me/tara_strategy" target="_blank">
            <img src={tg} alt="TG Logo" />
          </Link>
        </div>
      </footer>
    </Container>
  );
};
