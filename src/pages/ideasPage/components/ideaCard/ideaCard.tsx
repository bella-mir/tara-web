import Card from "antd/es/card";
import Tag from "antd/es/tag";
import { CATEGORIES, ICON_COMPONENTS, TAG_COLORS } from "../../../../utils";
import styles from "./ideaCard.module.scss";

import { IIdeaState } from "../../../../app/types";
import Modal from "antd/es/modal";
import { useState } from "react";
import { MiniMapModal } from "./mini-map";
import Avatar from "antd/es/avatar";

export const IdeaCard = ({ card }: { card: IIdeaState }) => {
  const cardCategory = CATEGORIES.filter(
    (category) => category.value === card.category
  )[0]?.label;

  const [isOpened, openModal] = useState(false);
  const onCardClick = () => {
    openModal(true);
  };

  const onClose = () => {
    openModal(false);
  };

  return (
    <>
      <Card
        title={
          <div className={styles.title}>
            <p className={styles.ideaName}>{card.ideaName} </p>
            <Avatar src={ICON_COMPONENTS[card.category]} />
          </div>
        }
        className={styles.card}
        onClick={onCardClick}
      >
        <div className={styles.inner}>
          <div>
            <Tag
              color={TAG_COLORS[card.category]}
              style={{
                textAlign: "center",
              }}
            >
              {cardCategory}
            </Tag>
          </div>
          <p className={styles.text}>{card.idea}</p>
        </div>
      </Card>

      <Modal
        title={
          <>
            {card.ideaName} <Avatar src={ICON_COMPONENTS[card.category]} />
          </>
        }
        open={isOpened}
        footer={null}
        onCancel={onClose}
      >
        <Tag
          color={TAG_COLORS[card.category]}
          style={{
            maxWidth: 250,
            textAlign: "center",
          }}
        >
          {cardCategory}
        </Tag>
        <p className={styles.textModal}>{card.idea}</p>
        <MiniMapModal location={card?.coordinates} />
      </Modal>
    </>
  );
};
