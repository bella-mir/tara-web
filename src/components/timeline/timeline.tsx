import React, { useState } from "react";
import styles from "./Timeline.module.scss";

interface Stage {
  title: string;
  dateRange: string;
  description: string;
}

interface TimelineProps {
  stages: Stage[];
}

export const Timeline: React.FC<TimelineProps> = ({ stages }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.timeline}>
      <div className={styles.timelineLine}></div>
      {stages.map((stage, index) => (
        <div key={index} className={styles.timelineItem}>
          <div className={styles.timelineDot}></div>
          <div className={styles.timelineContent}>
            <div className={styles.dateRange}>{stage.dateRange}</div>
            <div className={styles.title} onClick={() => handleToggle(index)}>
              {/* Этап {index + 1}: */}
              {stage.title}&nbsp;&rsaquo;
            </div>
            {openIndex === index && (
              <div className={styles.description}>{stage.description}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
