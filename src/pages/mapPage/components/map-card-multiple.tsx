import { useState } from "react";
import Card from "antd/es/card";
import styles from "./map-card.module.scss";
import { ICON_COMPONENTS } from "../../../utils";
import Avatar from "antd/es/avatar";
import Badge from "antd/es/badge";
import { MapCardSingle } from "./map-card-single";
import Button from "antd/es/button/button";

export const MapCardMultiple = ({ popupInfo }: { popupInfo: any }) => {
  const [selectedInfo, setSelectedInfo] = useState<any>(undefined);

  return selectedInfo ? (
    <>
      <MapCardSingle popupInfo={[selectedInfo]}></MapCardSingle>
      <Button onClick={() => setSelectedInfo(undefined)} type="link">
        назад -
        <Badge
          count={popupInfo?.length}
          style={{ backgroundColor: "#939598" }}
        ></Badge>
      </Button>
    </>
  ) : (
    <Card
      title={
        <div className={styles.titleMain}>
          <div className={styles.row}>
            Ваши идеи
            <Badge
              count={popupInfo?.length}
              style={{ backgroundColor: "#939598" }}
            />
          </div>
          <Avatar src={ICON_COMPONENTS["other"]} />
        </div>
      }
    >
      <ol className={styles.card}>
        {popupInfo?.map((feature: any, index: any) => (
          <Button onClick={() => setSelectedInfo(feature)} type="link">
            <li key={index} className={styles.listElement}>
              {feature.properties.ideaName}
            </li>
          </Button>
        ))}
      </ol>
    </Card>
  );
};
