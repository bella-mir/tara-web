import { useCallback, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IMenuElement } from "../../header-types";
import styles from "./hamburger-menu.module.scss";

export const HamburgerMenu = ({ menu }: { menu: IMenuElement[] }) => {
  const [isOpened, setIsOpened] = useState<boolean>(true);
  const [buttonPosition, setButtonPosition] = useState<any>("absolute");
  const location = useLocation();

  const navStyle = ({ isActive }: { isActive: boolean }) => ({
    textDecoration: isActive ? "none" : "none",
  });

  const handleChange = useCallback((isChecked: Boolean) => {
    setButtonPosition(isChecked ? "fixed" : "absolute");
    setIsOpened((current) => !current);
  }, []);

  useEffect(() => {
    setIsOpened(false);
    setButtonPosition("absolute");
  }, [location]);

  return (
    <div
      className={styles.burger__menuToggle}
      style={{ position: buttonPosition }}
    >
      <input
        className={styles.burger__input}
        type="checkbox"
        checked={isOpened}
        onChange={(event) => handleChange(event.target.checked)}
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
