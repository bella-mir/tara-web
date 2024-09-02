import Card from "antd/es/card";
import styles from "./map-card.module.scss";
import { CATEGORIES, TAG_COLORS } from "../../../utils";
import { ECategories } from "../../../app/types";
import Tag from "antd/es/tag";

export const MapCardSingle = ({ popupInfo }: { popupInfo: any }) => {
  return (
    <Card
      title={
        <div className={styles.titleSingle}>
          {popupInfo[0].properties.ideaName}
        </div>
      }
    >
      <div className={styles.card}>
        <Tag
          color={TAG_COLORS[popupInfo[0].properties.category as ECategories]}
          style={{
            maxWidth: 250,
            textAlign: "center",
          }}
        >
          {
            CATEGORIES.filter(
              (category) => category.value === popupInfo[0].properties.category
            )[0].label
          }
        </Tag>
        <p>{popupInfo[0].properties.idea}</p>
      </div>
    </Card>
  );
};
