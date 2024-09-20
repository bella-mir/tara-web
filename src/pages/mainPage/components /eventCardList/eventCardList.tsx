import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./eventCardList.module.scss";

interface Event {
  date: string;
  title: string;
  description: string;
  imageSrc: string;
  location: string;
  link: string;
}

interface EventCardListProps {
  events: Event[];
}

export const EventCardList: React.FC<EventCardListProps> = ({ events }) => {
  return (
    <div className={styles.cards}>
      {events.map((event, index) => (
        <div key={index} className={cn(styles.card, styles.cardEvent)}>
          <img
            src={event.imageSrc}
            className={styles.cardImage}
            alt={event.title}
          />
          <span className={styles.cardTime}>{event.date}</span>
          <span className={styles.cardTitle}>{event.title}</span>
          <span className={styles.cardDescription}>
            {event.description}
            <p>Место проведения: {event.location}</p>
          </span>
          <Link
            to={event.link}
            target="_blank"
            className={cn(styles.cardButton, styles.cardButton2)}
          >
            Записаться
          </Link>
        </div>
      ))}
    </div>
  );
};
