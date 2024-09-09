import styles from "./footer.module.scss";
import vk from "../../asserts/logos/vk.svg";
import tg from "../../asserts/logos/tg.svg";
import cityChoose from "../../asserts/logos/cityChoose.png";
import hseLogo from "../../asserts/logos/hseLogo.svg";
import domLogo from "../../asserts/logos/logo-dom-rf.png";
import { Link } from "react-router-dom";
import { Container } from "../container";
import cn from "classnames";
import { MailOutlined } from "@ant-design/icons";

export const Footer = () => {
  return (
    <Container className={styles.footer__wrapper}>
      <footer className={styles.footer}>
        <div className={styles.logos}>
          <div className={styles.logoColumn}>
            <img
              src={domLogo}
              alt="DOM Logo"
              className={cn(styles.logo, styles.logoDom)}
            />

            <img src={hseLogo} alt="HSE Logo" className={styles.logoHse} />
          </div>
          <img
            src={cityChoose}
            alt="City Choose"
            className={cn(styles.logoCity, styles.whiteLogo)}
          />
        </div>
        <div className={styles.email}>
          <MailOutlined />
          <strong>masterplantary@hse.ru</strong>
        </div>
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
