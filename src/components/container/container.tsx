import { PropsWithChildren } from "react";
import cn from "classnames";
import styles from "./container.module.scss";
import React from "react";

interface IContainerProps {
  className?: string;
}

export const Container = React.memo<PropsWithChildren<IContainerProps>>(
  ({ children, className }) => {
    return (
      <div className={cn(styles.container, className)}>
        <div className={styles.inside}>{children}</div>
      </div>
    );
  }
);
