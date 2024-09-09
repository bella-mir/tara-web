import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IMenuElement } from "../../header-types";
import styles from "./hamburger-menu.module.scss";

export const HamburgerMenu = ({ menu }: { menu: IMenuElement[] }) => {
  const [isOpened, setIsOpened] = useState(true);
  const [buttonPosition, setButtonPosition] = useState<any>("absolute");

  const navStyle = ({ isActive }: { isActive: boolean }) => ({
    textDecoration: isActive ? "none" : "none",
  });

  const handleChange = (event: any) => {
    if (event.target.checked) {
      setButtonPosition(() => "fixed");
    } else {
      setButtonPosition(() => "absolute");
    }
    setIsOpened((current) => !current);
  };

  return (
    <div
      className={styles.burger__menuToggle}
      style={{ position: buttonPosition }}
    >
      <input
        className={styles.burger__input}
        type="checkbox"
        value={Number(isOpened)}
        onChange={handleChange}
        style={{ position: buttonPosition }}
      />
      <span></span>
      <span></span>
      <span></span>
      <ul className={styles.burger__menu}>
        <div className={styles.burger__menublock}>
          {menu &&
            menu.map((menuElement, index) => (
              <NavLink
                key={index}
                to={menuElement.link}
                className={styles.menuElement}
                style={navStyle}
              >
                {menuElement.name}
              </NavLink>
            ))}
        </div>
      </ul>
    </div>
  );
};
