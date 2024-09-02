import { NavLink } from "react-router-dom";
import { IHeaderProps } from "./header-types";
import cn from "classnames";
import styles from "./header.module.scss";
import Button from "antd/es/button";
import useWindowSize from "../../hooks/useWindowSize";
import { HamburgerMenu } from "./components/hamburgerMenu/hamburgerMenu";

export const Header = ({ title, menu }: IHeaderProps) => {
  const navStyle = ({ isActive }: { isActive: boolean }) => ({
    fontWeight: isActive ? "600" : "400",
  });
  const size = useWindowSize();

  return (
    <div className={styles.header}>
      {size.width && size.width < 768 ? (
        <>
          <NavLink to="/" className={styles.menuElement} style={navStyle}>
            <img src={title.icon} className={styles.image}></img>
          </NavLink>
          <HamburgerMenu menu={menu} />
        </>
      ) : (
        <div className={styles.content}>
          <NavLink
            to={title.link}
            className={cn(styles.menuElement, styles.bold)}
            style={navStyle}
          >
            <img src={title.icon} className={styles.image}></img>
          </NavLink>

          <div className={styles.menu}>
            {menu &&
              menu.map((menuElement, index) => (
                <NavLink
                  key={index}
                  to={menuElement.link}
                  className={styles.menuElement}
                  style={navStyle}
                >
                  {menuElement.isButton ? (
                    <Button type="primary" ghost>
                      {menuElement.name}
                    </Button>
                  ) : (
                    <>{menuElement.name}</>
                  )}
                </NavLink>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
