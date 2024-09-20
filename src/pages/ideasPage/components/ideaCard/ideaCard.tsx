import Card from "antd/es/card";
import Tag from "antd/es/tag";
import { CATEGORIES, ICON_COMPONENTS, TAG_COLORS } from "../../../../utils";
import Modal from "antd/es/modal";
import { useState } from "react";
import { MiniMapModal } from "./mini-map";
import Avatar from "antd/es/avatar";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { deleteLikeIdea, likeIdea } from "../../../../app/actions/ideas";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import {
  getCardLikes,
  getIdeaById,
  getIsSelectedById,
} from "../../../../app/selectors/ideas";
import styles from "./ideaCard.module.scss";

export const IdeaCard = ({ cardId }: { cardId: string }) => {
  const dispatch = useAppDispatch();

  const card = useAppSelector((state) => getIdeaById(state, cardId));

  const isSelected = useAppSelector((state) =>
    getIsSelectedById(state, cardId)
  );

  const cardLikes = useAppSelector((state) => getCardLikes(state, cardId));

  const cardCategory = CATEGORIES.filter(
    (category) => category.value === card?.category
  )[0]?.label;

  const [isOpened, openModal] = useState(false);

  const onCardClick = () => {
    openModal(true);
  };

  const onClose = () => {
    openModal(false);
  };

  const handleLike = (cardId: string) => {
    dispatch(likeIdea(cardId));
  };

  const handleDislike = (cardId: string) => {
    dispatch(deleteLikeIdea(cardId));
  };

  if (!card) return null;

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
          <div className={styles.likeSection}>
            {isSelected ? (
              <HeartFilled
                className={styles.likeIcon}
                onClick={(event) => {
                  event.stopPropagation();
                  handleDislike(card._id);
                }}
                style={{
                  color: "darkgray",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              />
            ) : (
              <HeartOutlined
                className={styles.likeIcon}
                onClick={(event) => {
                  event.stopPropagation();
                  handleLike(card._id);
                }}
                style={{ fontSize: "20px", cursor: "pointer" }}
              />
            )}
            <span className={styles.likesCount}>{cardLikes}</span>
          </div>
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
        <div className={styles.contentModal}>
          <p className={styles.textModal}>{card.idea}</p>
          <MiniMapModal location={card?.coordinates} />
          <p>Фото:</p>
          {card.image && (
            <img
              src={card.image}
              alt="Card Image"
              className={styles.cardImage}
            />
          )}
        </div>
      </Modal>
    </>
  );
};
