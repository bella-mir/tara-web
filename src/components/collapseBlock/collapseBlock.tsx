import { ReactNode, useState } from "react";
import styles from "./collapseBlock.module.scss";

interface CollapsibleBlockProps {
  header: string;
  children: ReactNode;
}

export const CollapsibleBlock: React.FC<CollapsibleBlockProps> = ({
  header,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.collapsible}>
      <div className={styles.collapsibleHeader} onClick={toggleCollapse}>
        <span className={styles.title}>{header}</span>
      </div>
      <div
        className={styles.collapsibleContent}
        style={{ maxHeight: isOpen ? "500px" : "0" }}
      >
        {children}
      </div>
    </div>
  );
};
