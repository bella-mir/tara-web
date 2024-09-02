import { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./backToTop.module.scss";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={cn(styles.backToTop, { visible: isVisible })}
      onClick={scrollToTop}
    >
      ⬆️
    </button>
  );
};
